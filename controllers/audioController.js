const UserModel = require("../model/audioModel");

const { v4: uuidv4 } = require('uuid');

class audioController {
  getAllAudio(req,res){
    res.json("success")
  }
}

module.exports = new audioController();
