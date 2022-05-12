const Curso = require('../Models/curso');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('../../config/auth');

class CursoController {

    async index (req, res) {
        const {curso, duracao, valor,area, modalidade, descricao} = req.body;

        const cursoExist = await Curso.findOne({curso});

        if(cursoExist){
            return res.status(400).json({
                error: true,
                message: "Curso ja cadastrado!"
            })
        }


        const data = { curso, duracao, valor,area, modalidade, descricao };

        await Curso.create(data, (err) => {
            if(err) return res.status(400).json({
                error: true,
                message: "Erro ao tentar inserir Curso no MongoDB"
              })
      
              return res.status(200).json({
                error: false,
                message: "Curso Cadastrado com sucesso"
              })
        })
    }

    async searchCurso (req, res){

        const cursos = await Curso.find()
        return res.status(200).json({
            error: false,
            message: "Curso Cadastrado com sucesso",
            cursos
        })

    }

    async deleteCurso (req, res){

        await Curso.findByIdAndDelete(req.params.id)

        return res.status(200).json({
            error: false,
            message: `Curso de ${req.params.id} Removido!`
        })

    }

    async alterarCurso (req, res){

        await Curso.findByIdAndUpdate(req.params.id ,req.body)
        
        // if(err) return res.status(400).json({
        //     error: true,
        //     message: "Erro ao tentar atualizar curso"
        // })

        return res.status(200).json({
            error: false,
            message: `Curso de ${req.params.id} Alterado!`
        })

    }



}

module.exports = new CursoController();