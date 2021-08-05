import { Empleados } from '@/interfaces/empleados.iterface';
import { IsNotEmpty } from 'class-validator';
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';


@Entity()
export class EVEmpleadosEntity implements Empleados {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @IsNotEmpty()
    keyempleado:number;

    @Column()
    @IsNotEmpty()
    nombre:string;

    @Column()
    @IsNotEmpty()
    materno:string;

    @Column()
    @IsNotEmpty()
    paterno:string;

    @Column()
    @IsNotEmpty()
    ci:string;

    @Column()
    @IsNotEmpty()
    lmilitar:string;

    @Column()
    @IsNotEmpty()
    sexo:string;

    @Column()
    @IsNotEmpty()
    celular:string;

    @Column()
    @IsNotEmpty()
    fnac:Date;

    @Column()
    @IsNotEmpty()
    lnac:string;

    @Column()
    @IsNotEmpty()
    direc:string;

    @Column()
    @IsNotEmpty()
    zona:string;

    @Column()
    @IsNotEmpty()
    idgrado:number;

    @Column()
    @IsNotEmpty()
    tdomicilio:string;

    @Column()
    @IsNotEmpty()
    ecivil:string;

    @Column()
    @IsNotEmpty()
    fingreso:Date;

    @Column()
    @IsNotEmpty()
    notas:string;

    @Column()
    @IsNotEmpty()
    estado:string;

    @Column()
    @IsNotEmpty()
    e_mail:string;

    @Column()
    @IsNotEmpty()
    ncuenta:string;

    @Column()
    @IsNotEmpty()
    nit:string;

    @Column()
    @CreateDateColumn()
    createdAt: Date;

    @Column()
    @UpdateDateColumn()
    updatedAt: Date;
}
