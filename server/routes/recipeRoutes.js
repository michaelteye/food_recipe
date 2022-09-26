const express = require('express')
const router = express.Router();
const recipeController = require('../controllers/recipeController')
const registerController = require("../controllers/register")
// const {ensureAuth, ensureGuest} = require("../middleware/auth")
// initializing authentication
// const authController = require("../controllers/auth")
// App Routes
router.get('/', registerController.getIndex)
router.get('/home',recipeController.homepage);
router.get('/recipe/:id', recipeController.exploreRecipe);
router.get('/categories',recipeController.exploreCategories); 
router.get('/categories/:id', recipeController.exploreCategoriesById);
router.post('/search/',recipeController.searchRecipe);
router.get('/explore-latest',recipeController.exploreLatest);
router.get('/explore-random',recipeController.exploreRandom);
router.get('/submit-recipe',recipeController.submitRecipe);
router.get('/submit-recipe',recipeController.submitRecipeOnPost);

// authenticattion ascept
// router.get("/login", authController.getLogin)
// router.post("/login", authController.postLogin)
// router.get("/logout", authController.logout)
// router.get("/signup", authController.getSignup)
// router.post("/signup", authController.postSignup)






module.exports = router