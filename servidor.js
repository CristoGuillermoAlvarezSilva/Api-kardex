//npm install express
//npm install jsonwebtokens
//npm install -y

var express = requiere('express');
var jwt = requiere('jsonwebtoken');
var puerto = process.env.PORT || 3000;
var app = express();

app.use(express.json());

app.get('/calificaciones',function (req,res){
    res.json({
        mensaje: 'Bienvenido al Api del Kardex'
    });
});

app.post('/login',function(req,res){
    var token = jwt.sign({
        usuario: 'alumno'
    },'clavesupersecreta',{expiresIn: '60s'});
    console.log('Token generado: '+token);
    res.json({
        elToken: token
    });
});

//jwt.io pagina para ver el contenido del token

app.listen(puerto,function(){
    console.log('Servidor corriendo en el puerto'+puerto);
});
