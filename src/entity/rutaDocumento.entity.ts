import { RutaDocumento } from '@/interfaces/rutaDocumento.interface';
import { IsNotEmpty } from 'class-validator';
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';


@Entity()
export class EVRutaDocumentoEntity implements RutaDocumento {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @IsNotEmpty()
    keydocumento:number;

    @Column()
    @IsNotEmpty()
    keyusuarioor:number;

    @Column()
    @IsNotEmpty()
    keyusuariodest:number;

    @Column()
    @IsNotEmpty()
    fechaenvio:Date;

    @Column()
    @IsNotEmpty()
    fecharecepcion:Date;

    @Column()
    @IsNotEmpty()
    observaciones:string;

    @Column()
    @IsNotEmpty()
    contruta:string;

    @Column()
    @IsNotEmpty()
    keyrutadocumento:number;

    @Column()
    @IsNotEmpty()
    tiporuta:string;

    @Column()
    @IsNotEmpty()
    keyinstruccion:string;

    @Column()
    @IsNotEmpty()
    ruta2:string;

    @Column()
    @IsNotEmpty()
    envio:string;

    @Column()
    @CreateDateColumn()
    createdAt: Date;

    @Column()
    @UpdateDateColumn()
    updatedAt: Date;
}
