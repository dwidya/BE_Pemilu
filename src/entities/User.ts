import { Entity, PrimaryGeneratedColumn, Column,OneToMany, } from "typeorm"

import { Articel } from "./Articel"

@Entity({ name: "User" })
export class User {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    fullName: string

    @Column()
    address: string

    @Column()
    gender: string

    @Column()
    username: string

    @Column()
    password: string

    @OneToMany(() => Articel, (Articel) => Articel.User, {
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
    })
    Articel: Articel[]

}
