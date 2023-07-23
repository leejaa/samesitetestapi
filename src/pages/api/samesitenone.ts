// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { NextResponse } from 'next/server'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    // const response = NextResponse.next()
    // response.cookies.set({
    //     name: 'token',
    //     value: 'asdfasdf',
    //     sameSite: 'none'
    // })
    res.setHeader('Set-Cookie', 'token=asdfasdf; SameSite=None; Secure; HttpOnly; Path=/; Max-Age=86400; Expires=Wed, 21 Oct 2025 07:28:00 GMT')
  res.status(200).json({ name: 'John Doe' })
}
