import {Request, response, Response, Router} from 'express'
import UsersController from '../controllers/UsersController'

export default (router):Router => {
    const usersController = new UsersController()

    router.get("/", (req: Request, res: Response) => {
        res.json("olá mundo")
    })

    //users routes

    router.get("/users", async (req:Request, res:Response) => {
        usersController.index()
        .then(resp => {
            res.status(200)
            res.json(resp.users)
        })

    })

    router.post("/users", async (req:Request, res:Response) => {
        const {name, email, password, date_birth, description} = req.body        
        usersController.createUser(name, email, password, date_birth, description)
        .then(resp => {
            res.status(200)
            res.json(resp.user)
        })
        .catch(error =>{
            res.status(error.status)
            res.json(error)
        })
    })

    router.post("/users/login", async (req:Request, res:Response) => {
        const {email, password} = req.body
        await usersController.login(email, password)
              .then(resp => {
                  if (resp.status === 200) {
                      res.status(200)
                      res.json(resp.user)
                  } else {
                      res.status(resp.status)
                      res.json(resp.message)
                  }
              })
              .catch(error => {
                res.status(error.status)
                res.json(error)
              })
    })

    router.delete("/users/:idUser", async (req:Request, res:Response) => {
        const {idUser} = req.params
        usersController.deleteUser(idUser)
        .then(resp => {
            res.status(200)
        })
        .catch(error => {
            res.status(error.status)
            res.json(error)
        })
    })

    router.put("/users/:idUser", async(req:Request, res:Response) => {
        const {idUser} = req.params
        const {modifiedColumns, newValues} = req.body 
        usersController.updateUser(idUser, modifiedColumns, newValues)
        .then(resp => {
            res.status(200)
            res.json(resp.user)
        })
        .catch(error => {
            res.status(error.status)
            res.json(error)
        })
    })

    return router;
}