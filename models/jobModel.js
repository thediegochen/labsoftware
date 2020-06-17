const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Informe o nome da vaga."],
    trim: true,
  },
  dateEnd: String,
  creator: {
    type: String,
    required: [true, "Informe o seu nome."],
    trim: true,
  },
  address: {
    type: String,
    required: [true, "Informe o endereço da vaga."],
  },
  location: {
    type: String,
    required: [true, "Informe a localização da vaga."],
  },
  zipcode: {
    type: String,
    required: [true, "Informe o CEP da vaga."],
  },
  uf: {
    type: String,
    required: [true, "Informe o estado da vaga."],
  },
  wage: {
    type: String,
    required: [true, "Informe o valor da vaga."],
  },
  owner: {
    type: String,
  },
  candidates: [
    {
      name: String,
      telephone: String,
    },
  ],
  description: {
    type: String,
    required: [true, "Informe a descrição da vaga."],
  },
  descriptionShort: {
    type: String,
    required: [true, "Informe a descrição da vaga."],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  lng: {
    type: String,
  },
  lat: {
    type: String,
  },
});

const Job = mongoose.model("Job", jobSchema);

module.exports = Job;
