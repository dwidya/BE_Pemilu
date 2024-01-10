import * as express from "express"
import PaslonControllers from "../controllers/PaslonControllers"
import VoteControllers from "../controllers/VoteControllers"
import ArticelControllers from "../controllers/ArticelControllers"
import PartaiControllers from "../controllers/PartaiControllers"
import UserControllers from "../controllers/UserControllers"

import UploadFile from "../middlewares/UploadFile"

const routes = express.Router()

routes.get("/paslon/find", PaslonControllers.find)
routes.post("/paslon/insert", PaslonControllers.insert)
routes.post("/vote/insert", VoteControllers.insert)
routes.get("/vote/find", VoteControllers.find)
routes.post("/Articel/insert", ArticelControllers.insert)
routes.get("/Articel/find", ArticelControllers.find)
routes.post("/partai/insert", PartaiControllers.insert)
routes.get("/partai/find", PartaiControllers.find)
routes.post("/user/login", UserControllers.login)
routes.post("/user/register", UserControllers.register)
routes.post("/articel", UploadFile.upload("image"), ArticelControllers.insert)

export default routes