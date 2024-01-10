import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm"
import { Paslon } from "./Paslon"


@Entity({ name: "Vote" })
export class Vote {

    @PrimaryGeneratedColumn()
    id: number
    @Column()
    name: string
    @Column()
    alamat: string
    @Column()
    jenisKelamin: string
    @Column()
    paslon: string
    @Column({type: "timestamp", 
    default: () => "CURRENT_TIMESTAMP"})
    createdAt: Date
    @Column()
    Author: string

    @ManyToOne(() => Paslon, (Paslon) => Paslon.Vote, {
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
    })
    Paslon: Paslon
}
