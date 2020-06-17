const mongoose = require("mongoose");
const dotenv = require("dotenv");

// Desliga o servidor em caso de exceção
process.on("uncaughtException", (err) => {
  console.log("Uncaught Exception. DESLIGANDO O SERVIDOR.");
  console.log(err.name, err.message, err.stack);
  process.exit(1);
});

// Acesso ao arquivo 'config.env' do servidor
dotenv.config({ path: "./config.env" });

const app = require("./app");
// Define a senha do banco de dados com a senha que está no arquivo 'config.env'
const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

// Conexão com o mongoDB
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() =>
    console.log("Conexão com o Banco de Dados realizado com sucesso.")
  );

// Define o valor da porta que está em 'config.env'. Caso não esteja definido, o valor será 3000
const port = process.env.PORT || 3000;
// Inicia o atendimento as requisições do servidor
const server = app.listen(port, () => {
  console.log(`App rodando na porta ${port}`);
});

// Finaliza o servidor em caso de Unhandled Rejection
process.on("unhandledRejection", (err) => {
  console.log("Unhandled Rejection. DESLIGANDO O SERVIDOR.");
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});
