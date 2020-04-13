
const data = require("../data"); 
const fs = require("fs")

exports.index = function(req,res){
    return res.redirect("./recipes")
}


//Create é uma rota para a pagina de criacão de uma nova receita
exports.create = function(req,res){
    return res.render('./admin/recipes/create')
}

exports.post = function(req,res){

    
    const keys = Object.keys(req.body)

    //DesEstrurando o objeto
    let {recipeImg,title,author,ingredients,preparation,information} = req.body

    //caso algum campo esteja vazio 
    for(key of keys){
        if(req.body[key] == ""){
            return res.send('Preencha todos os campos')
        }
    }

    const id = Number(data.recipes.length + 1 )

    data.recipes.push({
        id,recipeImg,title,author,ingredients,preparation,information,
    })

    fs.writeFile("data.json",JSON.stringify(data,null,2),function(err){
        if(err) return res.send("Erro ao escrever arquivo");

        return res.redirect("/admin")
    })

}

exports.show = function(req,res){

    const {id} = req.params

    const foundRecipe = data.recipes.find(function(recipe){
        return recipe.id == id
    })

    if(!foundRecipe) return res.send("Receita nao encontrada")    

    const recipe = {
        ...foundRecipe
    }

    return res.render('./admin/recipes/show',{recipe})
}

exports.edit = function(req,res){
    
    const { id } = req.params
    
    const foundRecipe = data.recipes.find(function(recipe){
        return recipe.id == id
    })

    if(!foundRecipe) return res.send("Receita nao encontrada")

    const recipe = {
        ...foundRecipe
    }

    return res.render('./admin/recipes/edit',{recipe})
}

exports.put = function(req,res){
    const {id} = req.body
    let index = 0

    const foundRecipe = data.recipes.find(function(recipe, foundIndex){
        if (id == recipe.id){
            index = foundIndex
            return true
        }
    })

    if(!foundRecipe) return res.send("recipe not found")

    const recipe = {
        ...foundRecipe,
        ...req.body,
        id: Number(req.body.id)
    }

    data.recipes[index] = recipe

    fs.writeFile("data.json",JSON.stringify(data,null,2),function(err){
        if(err) res.send("Erro")

       
        return res.redirect(`/admin/recipes/${id}`)
    })


}

exports.delete = function(req,res){
    const {id} = req.body

    const filterRecipe = data.recipes.filter(function(recipe){

        return recipe.id != id
    })

    data.recipes = filterRecipe

    fs.writeFile("data.json", JSON.stringify(data,null,2),function(err){
        if(err) return res.send("Write file error")

        return res.redirect("/admin");
})
}