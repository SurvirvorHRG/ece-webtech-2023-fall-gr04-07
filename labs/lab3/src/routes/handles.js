// Necessary imports
const url = require('url')
const qs = require('querystring')
const fs = require('fs')
const about = require('../../content/about')
const express = require('express')

const userHandles = express.Router()

userHandles
  .get('/', (req, resp, next) => {

    const content = '<!DOCTYPE html>' +
    '<html>' +
    '    <head>' +
    '        <meta charset="utf-8" />' +
    '        <title>ECE AST</title>' +
    '    </head>' + 
    '    <body>' +
    '       <p>Hello !</p>' +
    '       <p>If you want to get a customized hello message follow theses instructions: </p>' +
    '       <p>Go to <a href="hello">/hello</a> and specify any name you want as parameters by adding /"NAME" to the end of the url !! </p>' +
    '    </body>' +
    '</html>'

    resp.status(200).set('Content-Type','text/html')
    resp.send(content)


  })

  .get('/hello', (req, resp, next) => { 
  
    resp.status(200).set('Content-Type','text/html')
    resp.send("To see a Hello message: /hello/:name !" + '<br/>')

  })

  .get('/hello/:name', (req, resp, next) => { 
  
    const name = req.params.name

    resp.status(200).set('Content-Type','text/html')

    if(name === 'Erwan')
    {
      resp.send("Hello ! I'm Erwan an engineering student at ECE Paris !")
    }
    else
      resp.send('Hello ' + name)

  })

  .get('/about', (req, resp, next) => { 
  
    resp.status(200).set('Content-Type','application/json')
    let content = "";
    for(var attributename in about){
      content += attributename+": "+ about[attributename] + '\n';
    }
    resp.send(content)

    

  })

  .get('/*/', (req, resp, next) => { 

    let path = req.path
    if(fs.existsSync('test.json') )
    {
      let json = require('test')
      resp.set('Content-Type','application/json');
      let content = "";
      for(var attributename in json){
        content += attributename+": "+ about[attributename] + '\n';
      }
      resp.send(content)
  
    }
    else
    {
      resp.status(200).set('Content-Type','text/html')
      resp.send('ERROR 404: NOT FOUND' + " " + path)
    }

  })
  
module.exports = userHandles


/*module.exports = {
    serverHandle: function (req, res) {
        // Retrieve and print the current path

        const content = '<!DOCTYPE html>' +
        '<html>' +
        '    <head>' +
        '        <meta charset="utf-8" />' +
        '        <title>ECE AST</title>' +
        '    </head>' + 
        '    <body>' +
        '       <p>Hello !</p>' +
        '       <p>If you want to get a customized hello message follow theses instructions: </p>' +
        '       <p>Go to <a href="hello">/hello</a> and specify any name you want as query parameters by adding ?name="NAME" to the end of the url !! </p>' +
        '    </body>' +
        '</html>'
      
        const route = url.parse(req.url)
        const path = route.pathname
        const params = qs.parse(route.query)
      
        //console.log(path)
      
        //console.log(params)
          

        if (path === '/hello' && 'name' in params) 
        {
          res.writeHead(200, {'Content-Type': 'text/html'})

          if(params['name'] === 'Erwan')
          {
            res.write("Hello ! I'm Erwan an engineering student at ECE Paris !")
          }
          else
            res.write('Hello ' + params['name'])
        } 
        else if(path === '/hello')
        {
          res.writeHead(200, {'Content-Type': 'text/html'})
          res.write("To see a Hello message: /hello?name='NAME' !" + '<br/>')
          
        }
        else if (path === '/') {
          res.writeHead(200, {'Content-Type': 'text/html'})
          res.write(content)
        }
        else if (path === '/about')
        {
          res.setHeader("Content-Type", "application/json")
          for(var attributename in about){
            res.write(attributename+": "+ about[attributename] + '\n');
          }
        }
        else
        {
          if(fs.existsSync("./content" + path + '.json') )
          {
            let json = require("./content" + path)
            res.setHeader("Content-Type", "application/json");
            for(var attributename in json){
              res.write(attributename+": "+json[attributename] + '\n');
            }
          }
          else
          {
            res.writeHead(200, {'Content-Type': 'text/html'})
            res.write('ERROR 404: NOT FOUND')
          }
            
        }
        res.end()
      }
}*/