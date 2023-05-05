const express = require('express');
const mongoose = require('mongoose');

const ejs = require('ejs');
const path = require('path');
const Photo =require('./models/Photo');

const app = express();

//connect DB
mongoose.connect('mongodb://127.0.0.1:27017/cleanblog-test-db',{
  useNewUrlParser:true,
  useUnifiedTopology:true,
});

//TEMPLATE ENGINE
app.set('view engine', 'ejs');

//MIDDLEWARES
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));
app.use(express.json());

//ROUTES
app.get('/', async(req, res) => {
  const photos=await Photo.find({});//Fotoğrafları yakaladık //asenkron kullanmamızın nedeni işlem bitene kadar beklememesi lazım daha hızlı çalışması için çünkü zaman alan bir işlem
  res.render('index',{
    photos
  });
});

app.get('/photos/:id', async(req, res) => {
  const post = await Photo.findById(req.params.id)
  res.render('post',{ //photo yazan kısım photo.ejs sayfasını temsil eder
    post
  })
});

app.get('/about', (req, res) => {
  res.render('about');
});
app.get('/post', (req, res) => {
  res.render('post');
});
app.get('/add_post', (req, res) => {
  res.render('add_post');
});
app.post('/photos', async(req,res)=>{
  await Photo.create(req.body);
  res.redirect('/');
})

const port = 3000;
app.listen(port, () => {
  console.log(`Sunucu ${port} portundan baglaniyor...`);
});


//collection:article