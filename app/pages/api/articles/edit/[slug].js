import { createPagesServerClient } from '@supabase/auth-helpers-nextjs'


export default async function handler(req, res) {
    const supabase = createPagesServerClient({ req, res })
    if (req.method === 'POST') {
        const {
            data: { session },
        } = await supabase.auth.getSession()

        const { data } = await supabase
        .from('article')
        .select('user_email')
        .eq('slug', req.query.slug)
        .single()

        if (!session || data.user_email != session.user.email)
            return res.status(502).json({
                error: 'not_authenticated',
                description: 'The user does not have an active session or is not authenticated',
            })
        


        let body = JSON.parse(req.body)

        if(req.query.delete === "true"){
            const { error } = await supabase
            .from('article')
            .delete()
            .eq('slug',req.query.slug)
            if (error) {
                return res.status(502).json({ message: "Error !" })
            } else {
                return res.status(200).json({ status: 200, slug: body.slug })
            }
        }else{
            const { error } = await supabase
            .from('article')
            .update(body)
            .eq('slug',req.query.slug)
            if (error) {
                return res.status(502).json({ message: "Error !" })
            } else {
                return res.status(200).json({ status: 200, slug: body.slug })
            }
        }
    }
}