import { createPagesServerClient } from '@supabase/auth-helpers-nextjs'


export default async function handler(req, res) {
  const supabase = createPagesServerClient({ req, res })
  //GET REQUEST
  if (req.method === 'GET') {
    const { data } = await supabase.
      from('comment').
      select('*,user(name,email,image)')
      .eq('articleSlug', req.query.articleSlug)
    res.status(200).json(data)
  } else if (req.method === 'POST') {//POST REQUEST
    const {
      data: { session },
    } = await supabase.auth.getSession()

    if (!session)
      return res.status(401).json({
        error: 'not_authenticated',
        description: 'The user does not have an active session or is not authenticated',
      })
    
    let body = JSON.parse(req.body)
    body["userEmail"] = session.user.email
    const { error } = await supabase
      .from('comment')
      .insert(body)

    if (error) {
      res.status(502).json({ message: "Error !" })
    } else {
      res.status(200).json()
    }
  }
}
