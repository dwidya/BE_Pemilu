import { Entity, PrimaryGeneratedColumn, Column, OneToMany  } from "typeorm"
import { Partai } from "./Partai"
import { Vote } from "./Vote"

@Entity({ name: "Paslon" })
export class Paslon {

    @PrimaryGeneratedColumn()
    id: number
    @Column()
    name: string
    @Column()
    noPaslon: string
    @Column()
    visiMisi: string
    @Column({type: "timestamp", 
    default: () => "CURRENT_TIMESTAMP"})
    createdAt: Date
    @Column()
    Author: string

    @OneToMany(() => Partai, (Partai) => Partai.Paslon, {
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
    })
    Partai: Partai[]

    @OneToMany(() => Vote, (Vote) => Vote.Paslon, {
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
    })
    Vote: Vote[]
}
