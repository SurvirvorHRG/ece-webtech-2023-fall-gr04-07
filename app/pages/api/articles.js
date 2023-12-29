import { createPagesServerClient } from '@supabase/auth-helpers-nextjs'

const POST_PER_PAGE = 4
const cat = ["culture", "coding", "fashion", "style", "food", "travel"]

export default async function handler(req, res) {
  const supabase = createPagesServerClient({ req, res })
  if (req.method === 'GET') {
    const skip = POST_PER_PAGE * ((req.query.page || 1) - 1)
    if (req.query.search && req.query.search != "") {
      const searchString = req.query.search
        .trim()
        .split(/[\s,\t,\n]+/) // split and remove more than 1 space
        .join(' | ')

      const { data, count } = await (cat.includes(req.query.search) ?
        supabase
          .from('article')
          .select('*', { count: 'exact' })
          .textSearch('cat_slug', req.query.search)
          .order('created_at', { ascending: false })
          .range(skip, skip + POST_PER_PAGE - 1) 
        :

        supabase
          .from('article')
          .select('*', { count: 'exact' })
          .textSearch('slug_title_desc_useremail_catslug', searchString)
          .order('created_at', { ascending: false })
          .range(skip, skip + POST_PER_PAGE - 1)

      )

      return res.status(200).json({ data, count })

    } else {
      const { data, count } = await supabase
        .from('article')
        .select('*', { count: 'exact' })
        .order('created_at', { ascending: false })
        .range(skip, skip + POST_PER_PAGE - 1)
      return res.status(200).json({ data, count })
    }
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
    body["user_email"] = session.user.email
    const { error } = await supabase
      .from('article')
      .insert(body)

    if (error) {
      return res.status(502).json({ message: "Error !" })
    } else {
      return res.status(200).json({ status: 200, slug: body.slug })
    }
  }
}