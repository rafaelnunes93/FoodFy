const express = require('express');
const routes = express.Router();
const recipes = require('./app/controllers/recipesController')
const site = require('./app/controllers/homeController')
const chefs = require('./app/controllers/chefsController')

// =====  ADMIN RECEITAS=========  
routes.get("/admin", function (req, res) {
    return res.render("admin/recipes/index",{recipes});
    // { recipes: data.recipes }

})
routes.get("/admin/recipes", recipes.index); // Mostrar a lista de receitas
routes.get("/admin/recipes/create", recipes.create) // Mostrar formulário de nova receita
routes.post("/admin/recipes/create", recipes.post); // envio de formulario, criacao de receita
routes.get("/admin/recipes/:id", recipes.show); // Exibir detalhes de uma receita
routes.get("/admin/recipes/:id/edit", recipes.edit); // Mostrar formulário de edição de receita
routes.put("/admin/recipes", recipes.put); // Editar uma receita
routes.delete("/admin/recipes", recipes.delete); // Deletar uma receita
// =====  ADMIN RECEITAS=========  


// =====  ADMIN CHEFS=========  
routes.get("/admin/chefs", chefs.index); // Mostrar a lista de Chefs
routes.get("/admin/chefs/create", chefs.create) // Mostrar formulário de novo Chefs
routes.post("/admin/chefs/create", chefs.post); // envio de formulario, criacao de Chefs
routes.get("/admin/chefs/:id", chefs.show); // Exibir detalhes de uma Chefs
routes.get("/admin/chefs/:id/edit", chefs.edit); // Mostrar formulário de edição de Chefs
routes.put("/admin/chefs", chefs.put); // Editar um Chefs
routes.delete("/admin/chefs", chefs.delete); // Deletar um Chefs
// =====  ADMIN CHEFS =========  



// ======== Pagina Principal=======

routes.get("/", site.home);

routes.get("/sobre", function (req, res) {
    return res.render("sobre")
})

routes.get("/site/receitas", site.receitas) //Exibir lista de rece

routes.get("/site/recipe/:id", site.showrecipes)//Exibir detalhes das receitas


routes.use(function (req, res) {
    return res.render("not-found")
})



module.exports = routes