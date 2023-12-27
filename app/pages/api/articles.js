import { createPagesServerClient } from '@supabase/auth-helpers-nextjs'

const POST_PER_PAGE = 2
export default async function handler(req, res) {
  const supabase = createPagesServerClient({ req, res })
  if (req.method === 'GET') {
    const skip = POST_PER_PAGE * ((req.query.page || 1) - 1)
    const { data, count } = await supabase
      .from('article')
      .select('*', { count: 'exact' })
      .order('created_at', { ascending: false })
      .range(skip, skip + 1)
    res.status(200).json({ data, count })
  } else if (req.method === 'POST') {
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