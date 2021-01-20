import "reflect-metadata";
import express from "express"
import {createConnection} from "typeorm";
import cors from 'cors'
import bodyParser from 'body-parser'
import routes from './routes'
import {config} from 'dotenv'


createConnection().then(connection => {
    config()
    const app = express()
    var router = express.Router()

    app.use(cors())
    app.use(bodyParser())
    app.use(routes(router))
    app.listen(3333)
}
    
).catch(error => console.log(error));


