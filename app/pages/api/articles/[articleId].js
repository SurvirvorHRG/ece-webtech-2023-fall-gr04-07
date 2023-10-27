import { db } from '../articles.js'

export default function handler(req, res) {
  const article = db.find( article => article.articleId === req.query.articleId)
  if( !article ) return res.status(404).json('Wrong article')
  res.status(200).json(article)
}