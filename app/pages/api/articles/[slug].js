import { createPagesServerClient } from '@supabase/auth-helpers-nextjs'


export default async function handler(req, res) {
    const supabase = createPagesServerClient({req,res})
    const { data } = await supabase
    .from('article')
    .select(`*, user (name,email,image)`)
    .eq('slug',req.query.slug)
    .single()
    res.status(200).json(data)
  }