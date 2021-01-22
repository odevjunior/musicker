import { Users } from "src/models/Users";
import bcrypt from 'bcrypt'
import {getRepository} from "typeorm";
import CryptController from "./CryptController"

export default class UsersController {
    protected usersRepository = getRepository(Users)
    protected crypt = new CryptController

    public async index() {
        try {
            const users = await this.usersRepository.find()
            return {
                status:200,
                users
            }
        } catch (error) {
            console.log(error)
            return false
        }
    }

    public async login(email:string, password:string) {
        try {
            const user = await this.usersRepository.findOne({email:email})
            if(!user) {
                return {
                    status:404,
                    message:"Usuário não encontrado"       
                }
            }
            if(!await this.crypt.checkIfIsTheSamePassword(password, user.password).then(res => res)) {
                return {
                    status:404,
                    message:"Senha incorreta"
                }
            }
            return  {
                status:200,
                user
            }
        } catch (error) {
            
        }
    }

    public async createUser(name:string, email:string, password:string, date_birth:string, description:string ) {
        try {
            let user = new Users()
            user.name = name;
            user.email = email;
            user.description = description
            user.password = this.crypt.cryptPassword(password)
            user.date_birth = date_birth

            await this.usersRepository.save(user); 

            return {
                status:200,
                user
            }
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    public async deleteUser(idUser) {
        try {
            let user = new Users()
            user.id = idUser;
            await this.usersRepository.delete(user)
            return {
                status:200,
                user
            }
        } catch (error) {
            console.log(error)
            return false;
        }

    }

    public async updateUser(idUser, modifiedColumns, newValues) {
        try {
            let newUserData = {}
            modifiedColumns.forEach((column:string, index:number) => {
                if(column == "password") {
                    newValues[index] = this.crypt.cryptPassword(newValues[index])
                }
                newUserData[column] = newValues[index]
            });
            
            await this.usersRepository.update(idUser, newUserData)
            const user = await this.usersRepository.findOne(idUser)

            return {
                status:200,
                user
            }
        } catch (error) {
            console.log(error)
            return error;
        }
    }
}