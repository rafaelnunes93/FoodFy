const db = require('../../config/db')
const { date } = require('../../lib/utils')


module.exports = {

    all(callback) {

        db.query(`SELECT * FROM recipes ORDER BY title ASC`, function (err, results) {
            if(err) throw `DataBase error! ${err}`


            callback(results.rows)

        })
    },

    create(data, callback) {

        const query = `
        INSERT INTO recipes(
            image,
            title,
            ingredients,
            preparation,
            information,
            created_at,
            chef_id 
        ) VALUES ($1,$2,$3,$4,$5,$6,$7)
        RETURNING id

    `


        const values = [
            data.image,
            data.title,
            data.ingredients,
            data.preparation,
            data.information,
            data.chef_id,
            date(Date.now()).iso

        ] 

        db.query(query, values, function (err, results) {
            if (err) throw `DATA BASE ERROR! ${err}`

            callback(results.rows[0])
        })
    },

    find(id, callback){
        db.query(`SELECT * FROM recipes WHERE id = $1`, [id],function(err,results){
            if(err) throw `DATABASE ERROR ! ${err}`

            callback(results.rows[0])
        })
    },

    update(data, callback){
        const query = `
            UPDATE recipes SET 
                image=($1),
                title=($2),
                ingredients=($3),
                preparation=($4),
                information=($5)
            WHERE id = $6
        `

        const values = [
            data.image,
            data.title,
            data.ingredients,
            data.preparation,
            data.information,
            data.id

        ] 

        db.query(query,values,function(err,results){
            if (err) throw `DATA BASE ERROR! ${err}`

            callback()
        })

    },

    delete(id,callback){
        db.query(`DELETE FROM recipes WHERE id = $1`, [id], function(err,results){
            if(err) throw `DATA BASE ERROR ${err}`

            return callback()
        })
    },

    chefsSelectOptions(callback){
        db.query(`SELECT name , id FROM chefs`, function(err,results){
            if (err) throw `DataBase error! ${err}`

            callback(results.rows)
        })
    },

}