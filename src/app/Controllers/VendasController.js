const Vendas = require('../Models/vendas');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('../../config/auth');
const Aluno = require('../Models/aluno');


class VendasController{
    async addVenda(req, res) {
        const{aluno, curso, vendedor, valorPago, troco} = req.body;

        const  vendaExist = await Vendas.findById();

        if(vendaExist){
            return res.status(400).json({
                error:true,
                message: `Venda de ${vendedor} ja esta em aberto!`
            })
        }

        const data = {aluno, curso, vendedor, valorPago, troco};

        await Vendas.create(data, (err)=> {
            if(err) return res.status(400).json({
                error: true,
                message: `Erro ao tentar inserir  venda de ${vendedor} no sistema!`
            })

            return res.status(200).json({
                error: false,
                message: `Venda de ${vendedor} finalizada com sucesso!`
            })
        })
    }


    async searchVenda (req, res){

        const venda = await Vendas.find()
        return res.status(200).json({
            error: false,
            venda
        })
    }

    async deleteVenda(req,res){

        await Vendas.findByIdAndDelete(req.params.id)

        return res.status(200).json({
            error: false,
            message: `Venda de ${vendedor} com o id ${_id} cancelada com sucesso!`
        })
        
    }

    async alterarVenda (req, res){
        
        await Vendas.findByIdAndUpdate(req.params.id, req.body)
        
        return res.status(200).json({
            errror:false,
            message: `Alteramos a venda de ${vendedor} com o id: ${_id} com sucesso!`
        })
    }
    
}

module.exports = new VendasController();