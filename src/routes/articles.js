// Necessary imports
const url = require('url')
const qs = require('querystring')
const fs = require('fs')
const about = require('../../content/about')
const express = require('express')
const db = require('../db')

const articleHandles = express.Router()

articleHandles
  .get('/', (req, resp, next) => {
    resp.set('Content-Type','application/json');
    const id = req.params.articleId;
    const articles = db.articles.find( article => article.id != null)
    let content = ""
    for(var attributename in articles) {
        content += attributename+": "+ articles[attributename] + '\n';
    }
    resp.send(content)
  })

  .get('/:articleId', (req, resp, next) => { 
    resp.set('Content-Type','application/json');
    const id = req.params.articleId;
    const article = db.articles.find( article => article.id === id)
    let content = ""
    for(var attributename in article){
        content += attributename+": "+ article[attributename] + '\n';
      }
    resp.send(content)
  })

  .get('/:articleId/comments ', (req, resp, next) => {



  })

  .get('/:articleId/comments/:commentId', (req, resp, next) => { 
  
  })

module.exports = articleHandles