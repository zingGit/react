import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class User {
      @PrimaryGeneratedColumn()
      ID: number;

      @Column({ length: 50 })
      Name: string;

      @Column('int')
      Age: number;
}