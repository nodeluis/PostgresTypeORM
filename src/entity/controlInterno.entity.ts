import { ControlInterno } from '@/interfaces/controlInterno.interface';
import { IsNotEmpty } from 'class-validator';
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';


@Entity()
export class EVControlInternoEntity implements ControlInterno {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @IsNotEmpty()
    keyempleado:number;

    @Column()
    @IsNotEmpty()
    codempleado:number;

    @Column()
    @IsNotEmpty()
    item:number;

    @Column()
    @IsNotEmpty()
    numproyecto:number;

    @Column()
    @IsNotEmpty()
    keyunidad:number;

    @Column()
    @IsNotEmpty()
    keycargo:number;

    @Column()
    @IsNotEmpty()
    keysalario:number;

    @Column()
    fechac:Date;

    @Column()
    @IsNotEmpty()
    razon:string;

    @Column()
    @IsNotEmpty()
    detalle:string;

    @Column()
    fechainicio:Date;

    @Column()
    fechaconclusion:Date;

    @Column()
    @IsNotEmpty()
    keybloqueo:number;

    @Column()
    @IsNotEmpty()
    trabsabado:string;

    @Column()
    fecha_conclusion_contrato:Date;

    @Column()
    @IsNotEmpty()
    keyedificio:number;

    @Column()
    @IsNotEmpty()
    keyedificio2:number;

    @Column()
    @IsNotEmpty()
    tipoafiliacion:string;

    @Column()
    @IsNotEmpty()
    keyhorario:number;

    @Column()
    lastupdate:Date;

    @Column()
    @IsNotEmpty()
    keytipoempleado:Number;

    @Column()
    @IsNotEmpty()
    tiquea:Number;

    @Column()
    @IsNotEmpty()
    keyproyecto:string;

    @Column()
    @IsNotEmpty()
    keyusuariolastupdatedby:number;

    @Column()
    @CreateDateColumn()
    createdAt: Date;
  
    @Column()
    @UpdateDateColumn()
    updatedAt: Date;
}


/*
id?:String;
    keyempleado:number;
    codempleado:number;
    item:number;
    numproyecto:number;
    keyunidad:number;
    keycargo:number;
    keysalario:number;
    fechac:Date;
    razon:string;
    detalle:string;
    fechainicio:Date;
    fechaconclusion:Date;
    keybloqueo:number;
    trabsabado:string;
    fecha_conclusion_contrato:Date;
    keyedificio:number;
    keyedificio2:number;
    tipoafiliacion:string;
    keyhorario:number;
    lastupdate:Date;
    keytipoempleado:Number;
    tiquea:Number;
    keyproyecto:string;
    keyusuariolastupdatedby:number;
*/