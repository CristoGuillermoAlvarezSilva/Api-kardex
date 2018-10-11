//npm init -y
//npm install express
//npm install jsonwebtokens

var express = requiere('express');
var jwt = requiere('jsonwebtoken');
var puerto = process.env.PORT || 3000;
var app = express();

app.use(express.json());//midleware

app.get('/calificaciones',function (req,res){
    console.log('Token recibido' + req.query.token);
    jwt.verify(req.query.token,'clavesupersecreta',function(){
        function(error){
            if(error){
                res.status(403).json({ mensaje: 'Autorizacion no valida' });
            }
            else{
                res.json({
                    mensaje: 'Aqui estan las calificaciones...'
                });
            }
        }
    });
});

app.post('/login',function(req,res){
    //simular la base de datos
    var alumno{
        email: 'alumno@uaslp.mx',
        password: ´123´
    };
    if(req.body.email == alumno.email && req.body.password == alumno.password){
    var token = jwt.sign({
        usuario: 'alumno',
        nombre: 'Raul',
        claveUnica: ´123456´,
    },'clavesupersecreta',{expiresIn: '1h'});
    console.log('Token generado: '+token);
    res.json({
        elToken: token
    });
    }
    else{
        res.status(401).json({
            mensaje: 'Credenciales no validas',
            elToken: null
        });
    }
});
//https://www.npmjs.com/package/jsonwebtoken pagina con complmentos de token
//jwt.io pagina para ver el contenido del token

app.listen(puerto,function(){
    console.log('Servidor corriendo en el puerto'+puerto);
});
