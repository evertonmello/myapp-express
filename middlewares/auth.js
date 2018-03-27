module.exports = function (req, res, next) {    
    console.log(req.session)
    if (!req.session.usuario) {
        
        console.log('usuario nao logado')
        return res.send('usuario nao logado');
    }
    return next();
}; 