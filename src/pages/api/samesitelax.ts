// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { NextResponse } from 'next/server'

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    // res.setHeader('Set-Cookie', `token=asdfasdf; path=/; SameSite=None;`)
    const response = NextResponse.next()
    // await response.cookies.set({
    //     name: 'token',
    //     value: 'asdfasdf',
    //     sameSite: 'lax'
    // })
    
    res.setHeader('Set-Cookie', 'token=asdfasdf; SameSite=Lax; HttpOnly')
  res.status(200).json({ name: 'John Doe' })
}
