import {NextFunction, Request, response, Response, Router} from 'express'
import multer from 'multer'
import UsersController from '../controllers/UsersController'
import SongsController from'../controllers/SongsController'
import UploadController from '../controllers/UploadController'
import { env } from 'process'

export default (router):Router => {
    const usersController = new UsersController()
    const songsController = new SongsController()
    const upload = UploadController.makeUpload()
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

    //songs routes

    router.post('/uploadSong', upload.any(), (req:Request, res:Response, next:NextFunction) => {
        try {            
            const {title, author, filePath, idUser} = req.body
            songsController.insertSong(title, author, filePath, idUser)
            .then(resp => {
                res.status(200)
                res.json("Song created success")
            })
            .catch(error => {
                res.json(error)
            })
        } catch (error) {
            res.json(error)
        }
    })

    router.get("/songs/:title", (req, res) => {
        songsController.getSongsByTitle(req.params.title)
        .then(resp => {
            res.json(resp)
        })
        .catch(error => {
            res.json(error)
        })
    })

    return router;
}