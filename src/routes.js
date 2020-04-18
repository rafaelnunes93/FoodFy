const express = require('express');
const routes = express.Router();
const recipes = require('./app/controllers/recipesController')


// =====  ADMIN =========  
routes.get("/admin", function (req, res) {
    return res.render("admin/recipes/index", { recipes: data.recipes });
})
routes.get("/admin/recipes", recipes.index); // Mostrar a lista de receitas
routes.get("/admin/recipes/create", recipes.create) // Mostrar formulário de nova receita
routes.post("/admin/recipes/create", recipes.post); // envio de formulario, criacao de receita
routes.get("/admin/recipes/:id", recipes.show); // Exibir detalhes de uma receita
routes.get("/admin/recipes/:id/edit", recipes.edit); // Mostrar formulário de edição de receita
routes.put("/admin/recipes", recipes.put); // Editar uma receita
routes.delete("/admin/recipes", recipes.delete); // Deletar uma receita



// ======== Pagina Principal=======

// routes.get("/", function (req, res) {
//     return res.render("index", { recipes: data.recipes })
// })

// routes.get("/sobre", function (req, res) {
//     return res.render("sobre")
// })

// routes.get("/receitas", function (req, res) {
//     return res.render("receitas", { recipes: data.recipes })
// })

// routes.get("/recipe", function (req, res) {

//     const id = req.query.id

//     const recipe = data.recipes.find(function (recipe) {
//         if (recipe.id == id) {
//             return true
//         }
//     })

//     if (!recipe) {
//         return res.render("not-found")
//     }

//     return res.render("recipe", { recipes: data.recipes })
// })


// routes.use(function (req, res) {
//     return res.render("not-found")
// })



module.exports = routes