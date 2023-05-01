const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const PhotoSchema = new Schema({
    title:String, 
    description:String, 
    dateCreated:{
        type:Date,
        default:Date.now
    }
})

const Photo = mongoose.model('article', PhotoSchema); //koleksiyon oluşturuyor ama çoğul oluşturacağı için kosolda articles yazıyoruz

module.exports = Photo;