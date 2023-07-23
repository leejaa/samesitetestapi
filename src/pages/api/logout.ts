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
    // response.cookies.delete('token')
    
    res.setHeader('Set-Cookie', `token=; max-age=-1; SameSite=None; Secure; HttpOnly; Path=/;`)
  res.status(200).json({ name: 'John Doe' })
}
