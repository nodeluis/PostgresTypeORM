import { UsuarioExterno } from '@/interfaces/usuarioExterno.interface';
import { IsNotEmpty } from 'class-validator';
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';


@Entity()
export class UsuarioExternoEntityVD implements UsuarioExterno {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @IsNotEmpty()
    nombres:string;

    @Column()
    @IsNotEmpty()
    paterno:string;

    @Column()
    @IsNotEmpty()
    materno:string;

    @Column()
    @IsNotEmpty()
    ci:string;

    @Column()
    @IsNotEmpty()
    cargo:string;

    @Column()
    @IsNotEmpty()
    unidad:string;

    @Column()
    @IsNotEmpty()
    institucion:string;

    @Column()
    @IsNotEmpty()
    fecharecepcion:Date;

    @Column()
    @IsNotEmpty()
    observaciones:string;

    @Column()
    @CreateDateColumn()
    createdAt: Date;

    @Column()
    @UpdateDateColumn()
    updatedAt: Date;
}
