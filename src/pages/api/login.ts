// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import cookie from 'cookie';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    const cookieString: any = req.headers.cookie ?? '';

    const token = cookie.parse(cookieString)?.token ?? '토큰없음...';

    console.log('token', token);

    res.status(200).json({ token })
}
