import { createPagesServerClient } from '@supabase/auth-helpers-nextjs'


export default async function handler(req, res) {
    const supabase = createPagesServerClient({req,res})
    const { data } = await supabase.from('Post').select('*')
    res.status(200).json(data)
  }