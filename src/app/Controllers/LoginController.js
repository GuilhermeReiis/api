const User = require('../Models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('../../config/auth');

class LoginController {

  async index(req, res) {
    const { email, password, status } = req.body;

    const userExist = await User.findOne({ email });

    if(!userExist){
      return res.status(400).json({
        error: true,
        message: "Usuário não cadastrado!"
      })
    }

    if(!(await bcrypt.compare(password, userExist.password))) {
      return res.status(400).json({
        error: true,
        message: "A senha inválida!"
      })
    }

    return res.status(200).json({
      user: {
        id: userExist._id,
        name: userExist.name,
        email: userExist.email,
      },
      token: jwt.sign(
        {id: userExist._id}, 
        config.secret, 
        {expiresIn: config.expireIn} 
      )
    })
  }
}

module.exports = new LoginController();