require('../models/database')
const Category = require('../models/Category');
const Recipe = require('../models/Recipe')

exports.homepage = async (req, res)=>{
    try{
        const limitNumber = 5
        const categories = await Category.find({}).limit(limitNumber);
        const latest = await Recipe.find({}).sort({_id:-1}).limit(limitNumber)

        const food = { latest }
        
        res.render('index', {title:'Cooking Blog - Home', categories:categories, food})
    }
    catch(err){
        res.status(500).send({message: err.message || "Error Occured"})
    }
}


// Get /categories
// Categories
exports.exploreCategories = async(req, res) => {
    try {
      const limitNumber = 20;
      const categories = await Category.find({}).limit(limitNumber);
      res.render('categories', { title: 'Cooking Blog - Categoreis', categories } );
    } catch (error) {
      res.satus(500).send({message: error.message || "Error Occured" });
    }
  } 



