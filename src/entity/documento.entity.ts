import { Documento } from '@/interfaces/documento.interface';
import { IsNotEmpty } from 'class-validator';
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';


@Entity()
export class DocumentoEntityVD implements Documento {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @IsNotEmpty()
    keytipodocumento:number;

    @Column()
    @IsNotEmpty()
    keyusuarioev:number;

    @Column()
    @IsNotEmpty()
    asunto:string;

    @Column()
    @IsNotEmpty()
    descripcion:string;

    @Column()
    @IsNotEmpty()
    fechacreacion:Date;

    @Column()
    @IsNotEmpty()
    fechaedicion:Date;

    @Column()
    @IsNotEmpty()
    numdocumento:number;

    @Column()
    @IsNotEmpty()
    cite:string;

    @Column()
    @IsNotEmpty()
    keydocumento:number;

    @Column()
    @IsNotEmpty()
    fechafinalizacion:Date;

    @Column()
    @IsNotEmpty()
    numhojas:number;

    @Column()
    @IsNotEmpty()
    keyusuarioevorigen:string;
    

    @Column()
    @CreateDateColumn()
    createdAt: Date;

    @Column()
    @UpdateDateColumn()
    updatedAt: Date;
}

