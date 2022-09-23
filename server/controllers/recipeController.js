require('../models/database')
const Category = require('../models/Category');
const Recipe = require('../models/Recipe')

// GET
// Homepage

exports.homepage = async (req, res)=>{
    try{
        const limitNumber = 5
        const categories = await Category.find({}).limit(limitNumber);
        const latest = await Recipe.find({}).sort({_id:-1}).limit(limitNumber)
        const thai = await Recipe.find({ 'category': 'Thai'}).limit(limitNumber);
        const american = await Recipe.find({ 'category': 'American'}).limit(limitNumber);
        const chinese = await Recipe.find({ 'category': 'Chinese'}).limit(limitNumber);


        const food = { latest, thai, american, chinese}
        
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


// Get /categories/:id
// Categories by id
exports.exploreCategoriesById = async(req, res) => {
    try {
        let categoryId = req.params.id
        const limitNumber = 20;
        const categoryById = await Recipe.find({'category': categoryId}).limit(limitNumber);
        res.render('categories', { title: 'Cooking Blog - Categoreis', categoryById } );
        } catch (error) {
        res.satus(500).send({message: error.message || "Error Occured" });
        }
    } 
/**
 * GET /recipe/:id
 * Recipe 
*/
exports.exploreRecipe = async(req, res) => {
    try {
      let recipeId = req.params.id;
      const recipe = await Recipe.findById(recipeId);
      res.render('recipe', { title: 'Cooking Blog - Recipe', recipe } );
    } catch (error) {
      res.satus(500).send({message: error.message || "Error Occured" });
    }
  } 
  



