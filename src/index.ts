import { AppDataSource } from "./data-source"
import * as express from "express"
import 'dotenv/config'
import routes from "./route"
import * as cors from "cors"

AppDataSource.initialize()
    .then(async () => {
        const app = express()
        
        app.use(express.json())
        app.use('/api/v1', routes)

        const options:cors.CorsOptions = {
            methods: "GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE",
            origin: "*",
            preflightContinue: false,
            optionsSuccessStatus: 204
        }
        app.use(cors(options))

        app.listen(process.env.PORT, () => console.log(`Server running on port : ${process.env.PORT}`))
    })
    .catch(error => console.log(error))