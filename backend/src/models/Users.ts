import {Entity, Column, PrimaryColumn, PrimaryGeneratedColumn} from 'typeorm'
import { TextDecoder } from 'util'

@Entity()
export class Users {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    name!: string;

    @Column("text")
    description!: string;

    @Column()
    email!: string;

    @Column()
    password!: string;

    @Column("date")
    date_birth!: string;    
}