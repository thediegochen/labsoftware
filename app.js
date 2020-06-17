const express = require("express");
const morgan = require("morgan");
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");
const xss = require("xss-clean");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const AppError = require("./utils/appError");
const globalErrorHandler = require("./controllers/errorController");
const jobRouter = require("./routes/jobRoutes");
const myJobRouter = require("./routes/myJobRoutes");
const userRouter = require("./routes/userRoutes");

const app = express();
/* MIDDLEWARES */

// Proteção do HTTP header
app.use(helmet());

// Verifica se está no ambiente de desenvolvimento, caso sim, a biblioteca Morgan é utilizada em modo desenvolvimento
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
// Limita a quantidade de requisições para o servidor
const limiter = rateLimit({
  max: 1000,
  windowsMs: 60 * 60 * 1000,
  message:
    "Muitas requisições sendo realizadas por esse IP, tente novamente mais tarde!",
});

app.use("/api", limiter);

// Realiza o parse dos dados provenientes das requisições
app.use(express.json());
app.use(cookieParser());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
//app.use(cors());
  next();
});
// Proteção contra exploits via mongo
app.use(mongoSanitize());

// Proteção contra XSS
app.use(xss());

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});
/* ROTEAMENTO */
// Roteamento para as vagas e para os usuários
app.use("/api/vagas", jobRouter);
app.use("/api/minhasVagas", myJobRouter);
app.use("/api/users", userRouter);
// Roteamento não definido
app.all("*", (req, res, next) => {
  next(
    new AppError(
      `Não foi possivel encontrar ${req.originalUrl} na plataforma!`,
      404
    )
  );
});

app.use(globalErrorHandler);
module.exports = app;
