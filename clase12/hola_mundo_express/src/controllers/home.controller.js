const homeModel = require('../models/home.model');

const controller = {};

controller.index = async (req, res) => {
  console.log(homeModel.textos.log);
  res.send(homeModel.textos.principal);
}

module.exports = controller;