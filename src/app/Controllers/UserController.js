const User = require("../Models/User");
const bcrypt = require("bcryptjs");
const yup = require("yup");

class UserController {
  show(req, res) {
    return res.status(200).json({
      error: false,
    });
  }

  async searchUser(req, res) {
    let user;
    if (req.params.id) {
      const _user = await User.findOne({ _id: req.params.id });
      user = {
        status: _user.status,
      };
    } else {
      user = await User.find();
    }
    return res.status(200).json({
      error: false,
      user,
    });
  }

  async store(req, res) {
    /**
     * Validação através do YUP schema
     * Início
     */
    let schema = yup.object().shape({
      name: yup.string().required(),
      cpf: yup.string().required(),
      email: yup.string().email().required(),
      tell: yup.string().required(),
      password: yup.string().required(),
      status: yup.boolean().default(false),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({
        error: true,
        message: "Dados inválidos",
      });
    }

    /**
     * Validação através do YUP schema
     * fim
     */

    /**
     * Validação no banco de dados
     * Verifica se o usuário existe
     */

    let userExist = await User.findOne({ email: req.body.email });
    if (userExist) {
      return res.status(400).json({
        error: true,
        message: "Este usuário já existe!",
      });
    }

    /**
     * Desestrutuação dos dados da requisição
     */
    const { name, cpf, email, tell, password, status } = req.body;

    /**
     * criação da constante data
     */

    const data = { name, cpf, email, tell, password, status };

    /**
     * Criptografar a senha
     */

    data.password = await bcrypt.hash(data.password, 8);

    /**
     * Inserção no banco de dados
     */

    await User.create(data, (err) => {
      if (err)
        return res.status(400).json({
          error: true,
          message: "Erro ao tentar inserir usuário no MongoDB",
        });

      return res.status(200).json({
        error: false,
        message: "Usuário Cadastrado com sucesso",
      });
    });
  }

  async deleteUser(req, res) {
    try {
      await User.findByIdAndDelete(req.params.id);
      return res.status(200).json({
        error: false,
        message: "Usuario removido com sucesso!",
      });
    } catch (error) {
      return res.status(400).json({
        error: true,
        message: " ao mandar",
      });
    }
  }
}

module.exports = new UserController();
