
export default function handler(req, res) {
    if(false){ // Hardcoded for the future
      return res.status(401).json('Error !')
    }
    res.status(200).json({
      username: 'erwan',
      email: 'erwan.celanie@gmail.com'
    })
  }