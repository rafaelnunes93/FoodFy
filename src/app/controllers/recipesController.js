const {date} = require('../../lib/utils')
const {db} = require('../../config/db')

exports.index = function (req, res) {
    return res.redirect("./recipes")
}


//Create é uma rota para a pagina de criacão de uma nova receita
exports.create = function (req, res) {
    return res.render('./admin/recipes/create')
}


module.exports = {
    //redireciona para a pafina inicial de receitas
    index(req, res){return res.redirect("./recipes")},

    //redireciona para a pagina administrativa para cadastrar receita
    create(req, res){return res.render('./admin/recipes/create')},

    //METODO para efetuar o cadastro de receitas
    post(req, res){
        const keys = Object.keys(req.body)

        for(key of keys ){
            if(req.body[key] == ""){
                return res.sende("Preencha todos os Campos")
            }
        }

        const query = `
            INSERT INTO recipes(
                image,
                title,
                ingredients,
                preparation,
                information,
                created_at
            ) VALUES ($1,$2,$3,$4,$5,$6,$7)
            RETURNING id

        `


        const values = [
            req.body.image,
            req.body.title,
            req.body.ingredients,
            req.body.preparation,
            req.body.information,
            date(Date.now()).iso

        ]

        db.query(query, values,function(err,results){
            console.log(err)
            console.log(results)
            return
        })

    },


    show(req, res){return},
    edit(req, res){return},
    put(req, res){return},
    delete(req, res){return},

}


