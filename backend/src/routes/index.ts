import {Request, Response, Router} from 'express'
import UsersController from '../controllers/UsersController'

export default (router):Router => {
    const usersController = new UsersController()

    router.get("/", (req: Request, res: Response) => {
        res.json("olá mundo")
    })

    //users routes
    router.post("/users", async (req:Request, res:Response) => {
        const {name, email, pasword, date_birth, description} = req.body
        await usersController.createUser(name, email, pasword, date_birth, description)
        .then(resp => res.json(resp))
        .catch(error => res.json(error))
    })

    return router;
}