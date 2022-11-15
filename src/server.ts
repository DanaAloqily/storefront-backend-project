import express, { Request, Response } from 'express'
import bodyParser from 'body-parser'
import config from './middleware/config'
import db from './database'
const app: express.Application = express()
const address: string = "0.0.0.0:3000"

const PORT = config.port || 3000;

app.use(bodyParser.json())

app.get('/', function (req: Request, res: Response) {
    res.send('Hello World!')
})

app.listen(PORT, function () {
    console.log(`starting app on: ${address}`)
})
