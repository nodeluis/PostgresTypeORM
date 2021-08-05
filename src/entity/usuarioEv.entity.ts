import { UsuarioEv } from '@/interfaces/usuarioEv.interfa';
import { IsNotEmpty } from 'class-validator';
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';


@Entity()
export class EVUsuarioEvEntity implements UsuarioEv {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @IsNotEmpty()
    keyempleado:number;

    @Column()
    @IsNotEmpty()
    login:string;

    @Column()
    @IsNotEmpty()
    pass:string;

    @Column()
    @IsNotEmpty()
    keyusuarioexterno:number;

    @Column()
    @IsNotEmpty()
    keyusuarioev:number;

    @Column({default:false})
    @IsNotEmpty()
    jefe:boolean;

    @Column()
    @IsNotEmpty()
    cite2:string;

    @Column()
    @CreateDateColumn()
    createdAt: Date;

    @Column()
    @UpdateDateColumn()
    updatedAt: Date;
}
