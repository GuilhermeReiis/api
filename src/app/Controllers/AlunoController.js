const Aluno = require('../Models/aluno');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('../../config/auth');

class AlunoController{

    async addAluno(req, res) {
        const{name, email, age, tell, curso} = req.body;

        const  alunoExist = await Aluno.findOne({name});

        if(alunoExist){
            return res.status(400).json({
                error:true,
                message: `Aluno ${name} cadastrado!`
            })
        }

        const data = {name, email, age, tell, curso};

        await Aluno.create(data, (err)=> {
            if(err) return res.status(400).json({
                error: true,
                message: `Erro ao tentar inserir ${name} no sistema!`
            })

            return res.status(200).json({
                error: false,
                message: `Aluno ${name} cadastrad com sucesso!`
            })
        })
    }


    async searchAluno (req, res){

        const aluno = await Aluno.find()
        return res.status(200).json({
            error: false,
            aluno
        })
    }

    async deleteAluno(req,res){

        await Aluno.findByIdAndDelete(req.params.id)

        return res.status(200).json({
            error: false,
            message: "Aluno removido com sucesso!"
        })
    }

    async alterarAluno (req, res){
        
        await Aluno.findByIdAndUpdate(req.params.id, req.body)
        
        return res.status(200).json({
            errror:false,
            message: `Alteramos os dados do aluno com sucesso!`
        })
    }

}

module.exports = new AlunoController();