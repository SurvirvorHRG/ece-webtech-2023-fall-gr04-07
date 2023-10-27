export const db = [{
    articleId: 'first',
    title: '1',
    message: 'This is article 1'
  }, {
    articleId: 'second',
    title: '2',
    message: 'This is article 1'
  }, {
    articleId: 'third',
    title: '3',
    message: 'This is article 3.'
  }]
  
  export default function handler(req, res) {
    res.status(200).json(db)
  }