import { Users } from "src/models/Users";
import bcrypt from 'bcrypt'
import {getRepository} from "typeorm";

export default class UsersController {
    protected usersRepository = getRepository(Users)

    public async createUser(name:string, email:string, password:string, description:string, date_birth:string ) {
        try {
            let user = new Users()
            user.name = name;
            user.email = email;
            user.description = description
            user.password = this.cryptPassword(password)
            user.date_birth = date_birth

            await this.usersRepository.save(user);
            return {
                resp:"Usuário cadastrado com sucesso",
                user
            }
        } catch (error) {
            throw new Error(error);            
        }
    }

    public cryptPassword(password:string):string {
        const salt = bcrypt.genSaltSync(10);
        return bcrypt.hashSync(password, salt);
    }


}