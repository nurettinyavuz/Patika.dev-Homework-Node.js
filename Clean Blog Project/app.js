const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override')
const postController=require("./controllers/postController"); //pageController modülünü çağırdık
const pageController=require("./controllers/pageController");

const ejs = require('ejs');
const path = require('path');

const app = express();

//connect DB
mongoose.connect('mongodb://127.0.0.1:27017/cleanblog-test-db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//TEMPLATE ENGINE
app.set('view engine', 'ejs');

//MIDDLEWARES
// (Bu kısım middleware kısmını kaydetmek için kullanılır yani bu tarz kullanıyor app.use... metodu ile)
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'))


//ROUTES
app.get('/',pageController.getPhotos );

app.get('/photos/:id',pageController.getPost);


app.get('/about',pageController.aboutPage);
app.get('/post',pageController.postPage);
app.get('/add_post',pageController.addPage);
app.post('/photos',pageController.addPostPage);


const port = 3000;
app.listen(port, () => {
  console.log(`Sunucu ${port} portundan baglaniyor...`);
});

//collection:article
