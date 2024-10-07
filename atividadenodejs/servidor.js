const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method);
    
    res.setHeader('Tipo-Conteudo','texto/html');
    
    let  caminho = './views/';

switch(req.url){
    case '/':
        caminho += 'index.html';
        res.statusCode = 200;
        break
    
    case '/produto':
        caminho += 'produto.html';
        res.statusCode = 200;
        break
    
    case '/teladeencomenda':
        caminho += 'teladeencomenda.html';
        res.statusCode = 200;
        break

    case '/telaloginecadrastro':
        caminho += 'telaloginecadrastro.html';
        res.statusCode = 200;
        break
    
    default:
        caminho += '404.html';
        res.statusCode = 404;
        break;
    
}

fs.readFile(caminho, (err, data)=> {
    if(err){
        console.log(err);
        res.end();
    } else {
        res.write(data);
        res.end();
    }
}) ;
   
    
}) ;

server.listen(4000, 'localhost', () => {
    console.log("Servidor funcionando")
});
    
