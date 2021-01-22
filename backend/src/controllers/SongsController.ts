import { Songs } from 'src/models/Songs'
import {getRepository} from 'typeorm'

export default class SongsController {
    public songsRepository = getRepository("songs")
    public songsQueryBuilder = this.songsRepository.createQueryBuilder("songs")

    public index() {
        try {
            const songs = this.songsRepository.find()
            return {
                status:200,
                songs
            }
        } catch (error) {
            console.log(error)
            return false;            
        }
    }

    public async getSongsByTitle(param:string) {
        try {
            console.log(param)
            const song = await this.songsQueryBuilder.where(`songs.title LIKE '%${param}%' or songs.author LIKE '%${param}%'`).getMany()
            
            return {
                status:200,
                song
            }
        } catch (error) {
            console.log(error)
            return false;
        }
    }

    public async insertSong(title:string, author:string, link:string, idUser:number) {
        try {
            const song = new Songs()
            song.title = title
            song.author = author
            song.addedById = idUser
            song.linkOfSong = link
            await this.songsRepository.save(song)
            
            return {
                status:200,
                song            
            }
        } catch (error) {
            console.log(error)
            return false
        }
    }

}