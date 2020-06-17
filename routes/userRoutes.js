const express = require("express");
const userController = require("../controllers/userController");
const authController = require("../controllers/authController");

const router = express.Router();
// Roteamento para o Cadastro e Login do usuário
router.post("/cadastrar", authController.signUp);
router.post("/entrar", authController.login);

// Roteamento para resetar a senha
router.post("/esqueciasenha", authController.forgotPassword);
router.patch("/resetPassword/:token", authController.resetPassword);

// Roteamento para listar todos os usuarios e criar um usuário - Habilitar futuramente
//router.route("/").get(authController.protect, userController.getAllUsers);

module.exports = router;
