import { userInfo } from 'os'
import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from 'typeorm'
import { Users } from './Users'

@Entity()
export class Songs {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    title:string;

    @Column()
    author:string;

    @Column("text")
    linkOfSong:string;

    @ManyToOne(() => Users, users => users.id)
    addedById:number;
}