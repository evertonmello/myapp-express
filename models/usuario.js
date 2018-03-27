var mongoose = require('mongoose');

var UserSchema = mongoose.Schema({
    nome: String,
    senha: String
});

var User = mongoose.model('User', UserSchema);

module.exports = User;