import db from "../../db/models/index.js"
import sq from "sequelize"

const {Op} = sq
const categories = db.category

const list = async (req, res, next) => {
    try {
        console.log(req.query)
        const {name} = req.query
        const filtered = req.query.name ? {where: {
            name: {
                [Op.iLike]: `%${name}%`
            },
        }}:{}
        const data = await categories.findAll({...filtered})
        res.send(data)
    } catch (error) {
        console.log(error)
        next()
    }
}
const single = async (req, res, next) =>{
    try {
        const data = await categories.findByPk(req.params.id);
if (data === null) {
  res.send('Not found!');
} else {
  res.send(data); // true
  // Its primary key is 123
}
    } catch (error) {
        console.log(error)
        next()
    }
}
const updates = async (req, res, next) => {
    try {
        
        const data = await categories.update(req.body, {
            where: {id: req.params.id}, returning: true
        })
        res.send(data[1][0])
    } catch (error) {
        console.log(error)
        next()
    }
}
const create = async (req, res, next) => {
    try {
        const data = await categories.bulkCreate(req.body.category)
        res.send(data)
    } catch (error) {
        console.log(error)
        next()
    }
}
const removes = async (req, res, next) => {
    try {
        const data = await categories.destroy({where: {id: req.params.id}})
        if (data > 0){
            res.send(`Delete!!`)
        } else{
            res.status(404).send(`NOT found!!`)
        }
    } catch (error) {
        console.log(error)
        next()
    }
}

const categoryHandlers = {
    single,
    list,
    removes,
    updates,
    create
}
export default categoryHandlers