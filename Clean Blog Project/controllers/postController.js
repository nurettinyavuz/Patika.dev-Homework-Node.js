const Photo = require('./models/Photo');

exports.getPhotos = async (req, res) => {
  const photos = await Photo.find({}); //Fotoğrafları yakaladık //asenkron kullanmamızın nedeni işlem bitene kadar beklememesi lazım daha hızlı çalışması için çünkü zaman alan bir işlem
  res.render('index', {
    photos,
  });
};

exports.getPost = async (req, res) => {
  const post = await Photo.findById(req.params.id);
  res.render('post', {
    //photo yazan kısım photo.ejs sayfasını temsil eder
    post,
  });
};
