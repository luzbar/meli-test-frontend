import express, { RequestHandler } from 'express'

import { searchItems, searchItem } from '../services/items'

const router = express.Router()

type Params = {}
type ResBody = {}
type ReqBody = {}
type ReqQuery = {
    q: string
}

const searching: RequestHandler<Params, ResBody, ReqBody, ReqQuery> = (
    req,
    res
) => {
    const query = req.query.q
    const resultPromise = searchItems(query)
    resultPromise
        .then((result) => {
            res.send(result)
        })
        .catch((error) => {
            console.log(error)
            res.send('Error has occurred')
        })
}

router.get('/', searching)

router.get('/:id', (req, res) => {
    const id = req.params.id
    const resultPromise = searchItem(id)
    resultPromise
        .then((result) => {
            res.send(result)
        })
        .catch((error) => {
            console.log(error)
            res.send('Error has occurred')
        })
})

export default router
