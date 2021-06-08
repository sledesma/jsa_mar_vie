const homeModel = require('../models/home.model');

const controller = {};

controller.index = async (req, res) => {
  console.log(homeModel.textos.log);
  res.render('home', {
    title: 'Hola mundo',
    message: 'Hola hola!'
  })
}

module.exports = controller;