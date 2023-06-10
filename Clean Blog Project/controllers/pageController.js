const Photo = require('./models/Photo');

exports.aboutPage =  (req, res) => {
    res.render('about');
  };

  exports.postPage =  (req, res) => {
    res.render('post');
  };

  exports.addPage =  (req, res) => {
    res.render('add_post');
  };

  exports.addPostPage =  async (req, res) => {
    await Photo.create(req.body);
    res.redirect('/');
  };