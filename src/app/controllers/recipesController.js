
const Recipe = require('../models/recipesModel')


module.exports = {
    //redireciona para a pafina inicial de receitas

    index(req, res){

        Recipe.all(function(recipe){
            return res.render("admin/recipes/index",{recipe})
        })

    },

    //redireciona para a pagina administrativa para cadastrar receita
    create(req, res){
        
       Recipe.chefsSelectOptions(function(options){

            return res.render('./admin/recipes/create',{chefOptions:options})
       })

    
    },

    //METODO para efetuar o cadastro de receitas
    post(req, res){

        const keys = Object.keys(req.body)

        for(key of keys ){
            if(req.body[key] == ""){
                return res.send("Preencha todos os Campos")
            }
        }

      Recipe.create(req.body,function(recipe){
          return res.redirect(`/admin/recipes/${recipe.id}`)
      })

    },


    show(req, res){
        
        Recipe.find(req.params.id,function(recipe){
            if(!recipe) return res.send("Receita não encontrada")

            return res.render('./admin/recipes/show',{recipe})
        })

    },

 
    edit(req, res){

        Recipe.find(req.params.id,function(recipe){
            if(!recipe) return res.send("Receita não encontrada")

            return res.render('./admin/recipes/edit',{recipe})
        })

    },


    put(req, res){
        const keys = Object.keys(req.body)

        for(key of keys ){
            if(req.body[key] == ""){
                return res.send("Preencha todos os Campos")
            }
        }

        Recipe.update(req.body,function(){
            return res.redirect(`/admin/recipes/${req.body.id}`)
        })
    },


    delete(req, res){
        
        Recipe.delete(req.body.id,function(){
            return res.redirect(`/admin/recipes`)
        })

    },

}


