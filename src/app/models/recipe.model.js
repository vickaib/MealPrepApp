const Sequelize = require('sequelize')
const db = require('../../config/config')

const Recipe = db.define('Recipes', {
    Recipe_id: {
       type: Sequelize.INTEGER,
       primaryKey: true
    },
    Diet_name: {
       type: Sequelize.STRING(125)
    },
    Recipe_name: {
        type: Sequelize.STRING(125)
     },
     Portion_size: {
        type: Sequelize.INTEGER
     },
     Total_cal: {
        type: Sequelize.INTEGER
     },
     Cook_time: {
         type: Sequelize.INTEGER
     },
     Recipe_budget: {
        type: Sequelize.DOUBLE
    },
    Nutrition_fact: {
        type: Sequelize.STRING(125)
    },
    Instructions: {
        type: Sequelize.STRING(125)
    },
    Rating: {
        type: Sequelize.INTEGER
    },
},
{
tableName: 'Recipes'
});

model_exports = Recipe;
