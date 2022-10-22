import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('tag')
export class Tag {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;
}
