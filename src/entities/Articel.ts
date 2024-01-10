import { Entity, PrimaryGeneratedColumn, Column , ManyToOne } from "typeorm"
import { User } from "./User"

@Entity({ name: "Articel" })
export class Articel {

    @PrimaryGeneratedColumn()
    id: number
    @Column()
    title: string
    @Column()
    image: string
    @Column()
    contect: string
    @Column({type: "timestamp", 
    default: () => "CURRENT_TIMESTAMP"})
    createdAt: Date
    @Column()
    Author: string

    @ManyToOne(() => User, (User) => User.Articel, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE"
    })
    User: User
}
