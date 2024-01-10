import { Entity, PrimaryGeneratedColumn, Column,ManyToOne } from "typeorm"
import { Paslon } from "./Paslon"

@Entity({ name: "Partai" })
export class Partai {

    @PrimaryGeneratedColumn()
    id: number
    @Column()
    name: string
    @Column()
    leader: string
    @Column()
    visiMisi: string
    @Column()
    alamat: string
    @Column({type: "timestamp", 
    default: () => "CURRENT_TIMESTAMP"})
    createdAt: Date
    @Column()
    Author: string

    @ManyToOne(() => Paslon, (paslon) => paslon.Partai, {
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
    })
    Paslon: Paslon
}
