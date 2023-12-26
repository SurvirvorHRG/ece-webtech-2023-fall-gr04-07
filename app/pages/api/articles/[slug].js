import { createPagesServerClient } from '@supabase/auth-helpers-nextjs'


export default async function handler(req, res) {
    const supabase = createPagesServerClient({req,res})
    const { data } = await supabase
    .from('Article')
    .select('*')
    .eq('slug',req.query.slug)
    .single()
    res.status(200).json(data)
  }