import { CargosEx } from '@/interfaces/cargosEx.interface';
import { IsNotEmpty } from 'class-validator';
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';


@Entity()
export class CargosExEntityVD implements CargosEx {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @IsNotEmpty()
    keycargoex: number;

    @Column()
    @IsNotEmpty()
    nombrecargo: string;

    @Column()
    @IsNotEmpty()
    designcolor: string;

    @Column()
    @CreateDateColumn()
    createdAt: Date;

    @Column()
    @UpdateDateColumn()
    updatedAt: Date;
}
