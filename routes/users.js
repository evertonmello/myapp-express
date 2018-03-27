var express = require('express');
var router = express.Router();
var Usuario = require('../models/usuario')

/* GET users listing. */
router.post('/', function(req, res, next) {
  var nome = req.body.nome;
  var senha = req.body.senha; 
  var query = { 'nome': nome, 'senha': senha };
  Usuario.findOne(query).select('nome senha')
      .exec(function (erro, usuario) {
          if (erro || !usuario) {
              res.send('credenciais invalidas');
          }else {
            req.session.usuario = usuario
            console.log(req.session.usuario)
            res.redirect('/lala');
            
          }
      }); 
});

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('index')
});

module.exports = router;
