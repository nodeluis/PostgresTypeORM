import { Unidades } from '@/interfaces/unidades.inteface';
import { IsNotEmpty } from 'class-validator';
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';


@Entity()
export class UnidadesEntityVD implements Unidades {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @IsNotEmpty()
    keyunidad:number;

    @Column()
    @IsNotEmpty()
    unidad:string;

    @Column()
    @IsNotEmpty()
    keyunidad_dep:number;

    @Column()
    @IsNotEmpty()
    nivel:number;

    @Column()
    @IsNotEmpty()
    codunidad:string;

    @Column()
    @CreateDateColumn()
    createdAt: Date;

    @Column()
    @UpdateDateColumn()
    updatedAt: Date;
}
