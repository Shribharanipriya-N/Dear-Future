const express=require('express');
const Router=express.Router();

const LetterController=require('../controller/LetterController');

Router.post('/letter',LetterController.addLetter);
Router.put('/letter/:letterid',LetterController.updateLetter);
Router.delete('/letter/:letterid',LetterController.deleteLetter);
Router.get('/letter/:userid',LetterController.getletters);

module.exports = Router;