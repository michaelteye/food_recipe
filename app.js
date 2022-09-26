const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const fileUpload = require('express-fileupload');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const flash = require('connect-flash');
// const passport = require("passport")

const app = express();
const port = process.env.PORT || 3000;

require('dotenv').config();

// Passport config

// require("./server/config/passport")(passport);


app.use(express.urlencoded( { extended: true } ));
app.use(express.static('public'));
app.use(expressLayouts);

app.use(cookieParser('CookingBlogSecure'));
app.use(session({
  secret: 'CookingBlogSecretSession',
  saveUninitialized: true,
  resave: true
}));

// Passport middleware
// app.use(passport.initialize())
// app.use(passport.session())

// use flash for errors, info, etc
app.use(fileUpload());
app.use(flash());


app.set('layout', './layouts/main');
app.set('view engine', 'ejs');

const routes = require('./server/routes/recipeRoutes.js')
app.use('/', routes);

app.listen(port, ()=> console.log(`Listening to port ${port}`));