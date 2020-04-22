
const Chefs = require('../models/chefsModel')


module.exports = {
    //redireciona para a pafina inicial de receitas

    index(req, res){

        Chefs.all(function(chef){
            return res.render("admin/chefs/index",{chef})
        })

    },

    //redireciona para a pagina administrativa para cadastrar receita
    create(req, res){
        
        return res.render('./admin/chefs/create')
    
    },

    //METODO para efetuar o cadastro de receitas
    post(req, res){

        const keys = Object.keys(req.body)

        for(key of keys ){
            if(req.body[key] == ""){
                return res.send("Preencha todos os Campos")
            }
        }

      Chefs.create(req.body,function(chef){
          return res.redirect(`/admin/chefs/${chef.id}`)
      })

    },


    show(req, res){
        
        Chefs.find(req.params.id,function(chef){
            if(!chef) return res.send("Receita não encontrada")

            return res.render('./admin/chefs/show',{chef})
        })

    },

 
    edit(req, res){

        Chefs.find(req.params.id,function(chef){
            if(!chef) return res.send("Receita não encontrada")

            return res.render('./admin/chefs/edit',{chef})
        })

    },


    put(req, res){
        const keys = Object.keys(req.body)

        for(key of keys ){
            if(req.body[key] == ""){
                return res.send("Preencha todos os Campos")
            }
        }

        Chefs.update(req.body,function(){
            return res.redirect(`/admin/chefs/${req.body.id}`)
        })
    },


    delete(req, res){
        
        Chefs.delete(req.body.id,function(){
            return res.redirect(`/admin/chefs`)
        })

    },

}


