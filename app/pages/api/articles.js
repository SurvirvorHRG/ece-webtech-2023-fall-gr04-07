import { createPagesServerClient } from '@supabase/auth-helpers-nextjs'

const POST_PER_PAGE = 2
export default async function handler(req, res) {
    const supabase = createPagesServerClient({req,res})
    const skip = POST_PER_PAGE * ((req.query.page || 1) - 1)
    const { data,count } = await supabase
    .from('Article')
    .select('*',{count: 'exact'})
    .order('created_at',{ascending: false})
    .range(skip,skip+1)
    res.status(200).json({data,count})
  }