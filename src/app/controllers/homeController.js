const Recipe = require('../models/recipesModel')
const Chefs = require('../models/chefsModel')


module.exports = {
    home(req, res){

        Recipe.all(function(recipe){
            return res.render("site/index",{recipe})
        })

    },


    receitas(req,res){

        Recipe.all(function(recipes){
            return res.render("site/receitas",{recipes})
        })

    },


    showrecipes(req, res){

        Recipe.find(req.params.id,function(recipes){
            if(!recipes) return res.send("Receita não encontrada")

            return res.render('site/recipe',{recipes})
        })

    },



    listaChefs(req,res){

        Chefs.all(function(chef){
            return res.render("site/chefs",{chef})
        })

    }

}