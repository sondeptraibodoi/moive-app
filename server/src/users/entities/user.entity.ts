import { Entity, Column, PrimaryGeneratedColumn} from 'typeorm'

@Entity()
export class Users {

    @PrimaryGeneratedColumn('uuid')
    id:string

    @Column()
    firstName: string

    @Column()
    lastName:string

    @Column()
    email:string

    @Column()
    phoneNumber:string

    @Column()
    password: string

    @Column()
    role:string

    @Column()
    createAt:string
}
