import bcrypt from 'bcrypt'
import { env } from 'process';

export default class CryptController {
    protected salt = bcrypt.genSaltSync(parseInt(env.CRYPTSALT));

    constructor() {
    }

    public cryptPassword(password:string):string {
        return bcrypt.hashSync(password, this.salt);
    }

    public async checkIfIsTheSamePassword(password:string, hash:string) {
        return await bcrypt.compare(password, hash)
    }
}