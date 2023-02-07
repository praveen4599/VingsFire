const http = require('http')
const port = 3000
const fs = require('fs')

const server = http.createServer(function(req,res){

    res.writeHead(200,{'content-Type': 'text/html'})
    fs.readFile('index.html', function(error,data){
        if(error){
            res.writeHead(404)
            res.write('Error: File not Found')
        } 
        else{
            res.write(data)
        }
        res.end()
    })
    //res.write('Hi')
    //res.end()
})

server.listen(port,function(error){
    if(error){
        console.log('Error Message')
    }
    else{
        console.log('Went Good')
    }
})