import { Response } from 'express'

const handleHttp = (res: Response, err: string) => {
  res.status(500)
  res.send({ err })
}

export { handleHttp }
