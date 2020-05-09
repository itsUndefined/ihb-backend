import { Column, Entity, PrimaryGeneratedColumn, Unique, OneToMany } from 'typeorm';
import { Role } from '../auth/models/role.entity';

@Entity()
@Unique(['email'])
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @OneToMany(() => Role, role => role.user, { eager: true })
    roles: Role[];
}