import { EVCargosExEntity } from '@/entity/cargosEx.entity';
import { EVControlInternoEntity } from '@/entity/controlInterno.entity';
import { EVDocumentoEntity } from '@/entity/documento.entity';
import { EVEmpleadosEntity } from '@/entity/empleados.entity';
import { EVRutaDocumentoEntity} from '@/entity/rutaDocumento.entity';
import { EVUnidadesEntity } from '@/entity/unidades.entity';
import { EVUsuarioEvEntity} from '@/entity/usuarioEv.entity';
import { HttpException } from '@/exceptions/HttpException';
import { ControlInterno } from '@/interfaces/controlInterno.interface';
import { Documento } from '@/interfaces/documento.interface';
import { Empleados } from '@/interfaces/empleados.iterface';
import { RutaDocumento } from '@/interfaces/rutaDocumento.interface';
import { Unidades } from '@/interfaces/unidades.inteface';
import { UsuarioEv } from '@/interfaces/usuarioEv.interfa';
import { logger } from '@/utils/logger';
import { isEmpty } from 'class-validator';
import fs from 'fs';
import { getRepository } from 'typeorm';

class CargosExService {
  public cargosEx = EVCargosExEntity;
  public usuarioEv = EVUsuarioEvEntity;
  public controlInterno = EVControlInternoEntity;
  public documento = EVDocumentoEntity;
  public empleado = EVEmpleadosEntity;
  public rutaDocumento = EVRutaDocumentoEntity;
  public unidad = EVUnidadesEntity;

  public async insert(): Promise<boolean> {
    //await this.cargosExInsert();
    await this.usersEvInsert();
    //await this.controlInternoInsert();
    //await this.DocumentoInsert();
    //await this.empleadoInsert();
    //await this.rutaDocumentoInsert();
    //await this.unidadesInsert();
    return true;
  }

  private async unidadesInsert(): Promise<boolean> {
    const data = fs.readFileSync(__dirname+'/../backsOracle/Unidades.txt', 'utf8');
    let arr=data.split('\n');      
    for (let z = 0; z < arr.length; z++) {
      let e = arr[z];
      let index=0;
      let pos=0;
      for (let c = 0; c < e.length; c++) {
        let el = e.charAt(c);
        if(el=='('){
          index++;
          if(index==2){
            pos=c;
            break;
          }
        }
      }
      let result=e.substr(pos+1,e.length);
      for (let c = e.length-1; c >=0; c--) {
        let el = result.charAt(c)
        if(el==')'){
          pos=c;
          break;
        }
      }
      result=result.substr(0,pos);
      result=result.replace(/'/g, "");
      let arr3=result.split(',');
      
      const unidad_model:Unidades= {
        keyunidad:await this.returnInteger(arr3[0]),
        unidad:arr3[1]?arr3[1]:'null',
        keyunidad_dep:await this.returnInteger(arr3[2]),
        nivel:await this.returnInteger(arr3[3]),
        codunidad:arr3[4]?arr3[4]:'null',
      };
      
      const unidadRepository = getRepository(this.unidad);

      const unidad = await unidadRepository.save(unidad_model);
      if(!unidad)throw new HttpException(409, `este es ${unidad}`);
    }
    return true;
  }

  //optimizar
  private async rutaDocumentoInsert(): Promise<boolean> {
    const data = fs.readFileSync(__dirname+'/../backsOracle/RutaDocumento.txt', 'utf8');
    let arr=data.split('\n');

    let po=await this.positions(arr.length,0);
    let numbers=po.split(' ');
    let sum1=0;
    let sum2=parseInt(numbers[0]);
    this.rutaDocumentoCut(arr.slice(sum1,sum2)).then(()=>{logger.info('success 1')});
    sum1+=parseInt(numbers[0]);
    sum2+=parseInt(numbers[1]);
    this.rutaDocumentoCut(arr.slice(sum1,sum2)).then(()=>{logger.info('success 2')});
    sum1+=parseInt(numbers[1]);
    sum2+=parseInt(numbers[2]);
    this.rutaDocumentoCut(arr.slice(sum1,sum2)).then(()=>{logger.info('success 3')});
    sum1+=parseInt(numbers[2]);
    sum2+=parseInt(numbers[3]);
    this.rutaDocumentoCut(arr.slice(sum1,sum2)).then(()=>{logger.info('success 4')});
    sum1+=parseInt(numbers[3]);
    sum2+=parseInt(numbers[4]);
    this.rutaDocumentoCut(arr.slice(sum1,sum2)).then(()=>{logger.info('success 5')});
    sum1+=parseInt(numbers[4]);
    sum2+=parseInt(numbers[5]);
    this.rutaDocumentoCut(arr.slice(sum1,sum2)).then(()=>{logger.info('success 6')});
    sum1+=parseInt(numbers[5]);
    sum2+=parseInt(numbers[6]);
    this.rutaDocumentoCut(arr.slice(sum1,sum2)).then(()=>{logger.info('success 7')});
    sum1+=parseInt(numbers[6]);
    sum2+=parseInt(numbers[7]);
    this.rutaDocumentoCut(arr.slice(sum1,sum2)).then(()=>{logger.info('success 8')});
    sum1+=parseInt(numbers[7]);
    sum2+=parseInt(numbers[8]);
    this.rutaDocumentoCut(arr.slice(sum1,sum2)).then(()=>{logger.info('success 9')});
    sum1+=parseInt(numbers[8]);
    sum2+=parseInt(numbers[9]);
    this.rutaDocumentoCut(arr.slice(sum1,sum2)).then(()=>{logger.info('success 10')});
    sum1+=parseInt(numbers[9]);
    sum2+=parseInt(numbers[10]);
    this.rutaDocumentoCut(arr.slice(sum1,sum2)).then(()=>{logger.info('success 11')});
    sum1+=parseInt(numbers[10]);
    sum2+=parseInt(numbers[11]);
    this.rutaDocumentoCut(arr.slice(sum1,sum2)).then(()=>{logger.info('success 12')});
    sum1+=parseInt(numbers[11]);
    sum2+=parseInt(numbers[12]);
    this.rutaDocumentoCut(arr.slice(sum1,sum2)).then(()=>{logger.info('success 13')});
    sum1+=parseInt(numbers[12]);
    sum2+=parseInt(numbers[13]);
    this.rutaDocumentoCut(arr.slice(sum1,sum2)).then(()=>{logger.info('success 14')});
    sum1+=parseInt(numbers[13]);
    sum2+=parseInt(numbers[14]);
    this.rutaDocumentoCut(arr.slice(sum1,sum2)).then(()=>{logger.info('success 15')});
    sum1+=parseInt(numbers[14]);
    sum2+=parseInt(numbers[15]);
    this.rutaDocumentoCut(arr.slice(sum1,sum2)).then(()=>{logger.info('success 16')});
    return true;
  }

  private async rutaDocumentoCut(arr:Array<string>):Promise<boolean>{
    for (let z = 0; z < arr.length; z++) {
      let e = arr[z];
      let index=0;
      let pos=0;
      while(true) {
        let close=0;
        let start=0;
        let index=e.indexOf('to_date');
        let result='';
        let intro=false;
        if(index!=-1){
          for (let a = index; a < e.length; a++) {
            if(intro){
              result+=e.charAt(a);
            }
            if(e.charAt(a)=='('){
              start=a;
              intro=true;
            }
            if(e.charAt(a)==')'){
              close=a;
              break;
            }
          }
        }else{
          break;
        }
        result=result.replace(/'/g, "");
        let conc=result.split(',');    
        let cad1=e.substr(0,index);
        let cad2=e.substr(close+1,e.length);
        e=cad1+conc[0]+cad2;
      }
      for (let c = 0; c < e.length; c++) {
        let el = e.charAt(c);
        if(el=='('){
          index++;
          if(index==2){
            pos=c;
            break;
          }
        }
      }
      let result=e.substr(pos+1,e.length);
      for (let c = e.length-1; c >=0; c--) {
        let el = result.charAt(c)
        if(el==')'){
          pos=c;
          break;
        }
      }
      result=result.substr(0,pos);
      result=result.replace(/'/g, "");
      let arr3=result.split(',');
      
      const ruta_model:RutaDocumento= {
        keydocumento:await this.returnInteger(arr3[0]),
        keyusuarioor:await this.returnInteger(arr3[1]),
        keyusuariodest:await this.returnInteger(arr3[2]),
        fechaenvio:await this.returnDate(arr3[3]),
        fecharecepcion:await this.returnDate(arr3[4]),
        observaciones:arr3[5]?arr3[5]:'null',
        contruta:arr3[6]?arr3[6]:'null',
        keyrutadocumento:await this.returnInteger(arr3[7]),
        tiporuta:arr3[8]?arr3[8]:'null',
        keyinstruccion:arr3[9]?arr3[9]:'null',
        ruta2:arr3[10]?arr3[10]:'null',
        envio:arr3[11]?arr3[11]:'null',
      };
      
      const rutaRepository = getRepository(this.rutaDocumento);

      const ruta = await rutaRepository.save(ruta_model);
      if(!ruta)throw new HttpException(409, `este es ${ruta}`);
    }
    return true;
  }

  private async positions(x:number,i:number): Promise<string>{
    if(i<4){
      let a='';
      let b='';
      if(x%2==0){
        let d:number=parseInt(x/2+'');
        a+=await this.positions(d,i+1);
        b+=await this.positions(d,i+1);
      }else{
        let d:number=parseInt(x/2+'');
        a+=await this.positions(d,i+1);
        b+=await this.positions((d)+1,i+1);
      }
      return a+' '+b;
    }else{
      return x+'';
    }
    
  }

  private async empleadoInsert(): Promise<boolean> {
    const data = fs.readFileSync(__dirname+'/../backsOracle/Empleados.txt', 'utf8');
    let arr=data.split('\n');
    arr=await this.changeDate(arr);
    arr.forEach(async(e,z) => {
      let index=0;
      let pos=0;
      for (let c = 0; c < e.length; c++) {
        let el = e.charAt(c);
        if(el=='('){
          index++;
          if(index==2){
            pos=c;
            break;
          }
        }
      }
      let result=e.substr(pos+1,e.length);
      for (let c = e.length-1; c >=0; c--) {
        let el = result.charAt(c)
        if(el==')'){
          pos=c;
          break;
        }
      }
      result=result.substr(0,pos);
      result=result.replace(/'/g, "");
      let arr3=result.split(',');
      
      const empleado_model:Empleados= {
        keyempleado:await this.returnInteger(arr3[0]),
        nombre:arr3[1]?arr3[1]:'null',
        materno:arr3[2]?arr3[2]:'null',
        paterno:arr3[3]?arr3[3]:'null',
        ci:arr3[4]?arr3[4]:'null',
        lmilitar:arr3[5]?arr3[5]:'null',
        sexo:arr3[6]?arr3[6]:'null',
        celular:arr3[7]?arr3[7]:'null',
        fnac:await this.returnDate(arr3[8]),
        lnac:arr3[9]?arr3[9]:'null',
        direc:arr3[10]?arr3[10]:'null',
        zona:arr3[11]?arr3[11]:'null',
        idgrado:await this.returnInteger(arr3[12]),
        tdomicilio:arr3[13]?arr3[13]:'null',
        ecivil:arr3[14]?arr3[14]:'null',
        fingreso:await this.returnDate(arr3[15]),
        notas:arr3[16]?arr3[16]:'null',
        estado:arr3[17]?arr3[17]:'null',
        e_mail:arr3[18]?arr3[18]:'null',
        ncuenta:arr3[19]?arr3[19]:'null',
        nit:arr3[20]?arr3[20]:'null',
      };
      
      const empleadoRepository = getRepository(this.empleado);

      const empleado = await empleadoRepository.save(empleado_model);
      if(!empleado)throw new HttpException(409, `este es ${empleado}`);
    });
    return true;
  }

  private async DocumentoInsert(): Promise<boolean> {
    const data = fs.readFileSync(__dirname+'/../backsOracle/Documento.txt', 'utf8');
    let arr=data.split('\n');
    arr=await this.changeDate(arr);
    arr.forEach(async(e,z) => {
      let index=0;
      let pos=0;
      for (let c = 0; c < e.length; c++) {
        let el = e.charAt(c);
        if(el=='('){
          index++;
          if(index==2){
            pos=c;
            break;
          }
        }
      }
      let result=e.substr(pos+1,e.length);
      for (let c = e.length-1; c >=0; c--) {
        let el = result.charAt(c)
        if(el==')'){
          pos=c;
          break;
        }
      }
      result=result.substr(0,pos);
      result=result.replace(/'/g, "");
      let arr3=result.split(',');
      
      const Document_model:Documento= {
        keytipodocumento:await this.returnInteger(arr3[0]),
        keyusuarioev:await this.returnInteger(arr3[1]),
        asunto:arr3[2]?arr3[2]:'null',
        descripcion:arr3[3]?arr3[3]:'null',
        fechacreacion:await this.returnDate(arr3[4]),
        fechaedicion:await this.returnDate(arr3[5]),
        numdocumento:await this.returnInteger(arr3[6]),
        cite:arr3[7]?arr3[7]:'null',
        keydocumento:await this.returnInteger(arr3[8]),
        fechafinalizacion:await this.returnDate(arr3[9]),
        numhojas:await this.returnInteger(arr3[10]),
        keyusuarioevorigen:arr3[11]?arr3[11]:'null',
      };
      
      const documentoRepository = getRepository(this.documento);

      const documento = await documentoRepository.save(Document_model);
      if(!documento)throw new HttpException(409, `este es ${documento}`);
    });
    return true;
  }

  private async cargosExInsert(): Promise<boolean> {
    const data = fs.readFileSync(__dirname+'/../backsOracle/CargosEx.txt', 'utf8');
    const arr=data.split('\n');
    arr.forEach(async(e) => {
      let index=0;
      let pos=0;
      for (let c = 0; c < e.length; c++) {
        let el = e.charAt(c);
        if(el=='('){
          index++;
          if(index==2){
            pos=c;
            break;
          }
        }
      }
      let result=e.substr(pos+1,e.length);
      for (let c = e.length-1; c >=0; c--) {
        let el = result.charAt(c)
        if(el==')'){
          pos=c;
          break;
        }
      }
      result=result.substr(0,pos);
      result=result.replace(/'/g, "");
      let arr3=result.split(',');

      const CargosEx_model = {
        keycargoex: parseInt(arr3[0]),
        nombrecargo: arr3[1],
        designcolor: arr3[2],
      };

      const cargoRepository = getRepository(this.cargosEx);

      const user = await cargoRepository.save(CargosEx_model);
    });
    return true;
  }

  private async usersEvInsert(): Promise<boolean> {
    const data = fs.readFileSync(__dirname+'/../backsOracle/UsuarioEv.txt', 'utf8');
    const arr=data.split('\n');
    arr.forEach(async(e,z) => {
      let index=0;
      let pos=0;
      for (let c = 0; c < e.length; c++) {
        let el = e.charAt(c);
        if(el=='('){
          index++;
          if(index==2){
            pos=c;
            break;
          }
        }
      }
      let result=e.substr(pos+1,e.length);
      for (let c = e.length-1; c >=0; c--) {
        let el = result.charAt(c)
        if(el==')'){
          pos=c;
          break;
        }
      }
      result=result.substr(0,pos);
      result=result.replace(/'/g, "");
      let arr3=result.split(',');

      //if(z<5)console.log(arr3);
      //else return;

      const UsuarioEv_model: UsuarioEv= {
        keyempleado: arr3[0]=='null'?-1: parseInt(arr3[0]),
        login: arr3[1],
        pass: arr3[2],
        keyusuarioexterno: arr3[3]=='null'?-1: parseInt(arr3[3]),
        keyusuarioev: arr3[3]=='null'?-1: parseInt(arr3[4]),
        cite2: arr3[5]
      };

      const userRepository = getRepository(this.usuarioEv);

      const user = await userRepository.save(UsuarioEv_model);
      if(!user)throw new HttpException(409, `este es ${user}`);
    });
    return true;
  }

  private async controlInternoInsert(): Promise<boolean> {
    const data = fs.readFileSync(__dirname+'/../backsOracle/ControlInterno.txt', 'utf8');
    let arr=data.split('\n');
    arr=await this.changeDate(arr);
    arr.forEach(async(e,z) => {
      let index=0;
      let pos=0;
      for (let c = 0; c < e.length; c++) {
        let el = e.charAt(c);
        if(el=='('){
          index++;
          if(index==2){
            pos=c;
            break;
          }
        }
      }
      let result=e.substr(pos+1,e.length);
      for (let c = e.length-1; c >=0; c--) {
        let el = result.charAt(c)
        if(el==')'){
          pos=c;
          break;
        }
      }
      result=result.substr(0,pos);
      result=result.replace(/'/g, "");
      let arr3=result.split(',');

      const controlRepository_model: ControlInterno= {
        keyempleado: await this.returnInteger(arr3[0]),
        codempleado: await this.returnInteger(arr3[1]),
        item: await this.returnInteger(arr3[2]),
        numproyecto: await this.returnInteger(arr3[3]),
        keyunidad: await this.returnInteger(arr3[4]),
        keycargo: await this.returnInteger(arr3[5]),
        keysalario: await this.returnInteger(arr3[6]),
        fechac: await this.returnDate(arr3[7]),
        razon: arr3[8],
        detalle: arr3[8],
        fechainicio: await this.returnDate(arr3[9]),
        fechaconclusion: await this.returnDate(arr3[10]),
        keybloqueo: await this.returnInteger(arr3[11]),
        trabsabado:arr3[12],
        fecha_conclusion_contrato:await this.returnDate(arr3[13]),
        keyedificio: await this.returnInteger(arr3[14]),
        keyedificio2: await this.returnInteger(arr3[15]),
        tipoafiliacion: arr3[16],
        keyhorario: await this.returnInteger(arr3[17]),
        lastupdate: await this.returnDate(arr3[18]),
        keytipoempleado: await this.returnInteger(arr3[19]),
        tiquea: await this.returnInteger(arr3[20]),
        keyproyecto: arr3[21],
        keyusuariolastupdatedby: await this.returnInteger(arr3[22]),
      };
      
      const controlRepository = getRepository(this.controlInterno);

      const control = await controlRepository.save(controlRepository_model);
      if(!control)throw new HttpException(409, `este es ${control}`);
    });
    return true;
  }

  private async changeDate(arr:Array<string>): Promise<Array<string>> {
    for (let x = 0; x < arr.length; x++) {
      let element = arr[x];
      while(true) {
        let close=0;
        let start=0;
        let index=element.indexOf('to_date');
        let result='';
        let intro=false;
        if(index!=-1){
          for (let a = index; a < element.length; a++) {
            if(intro){
              result+=element.charAt(a);
            }
            if(element.charAt(a)=='('){
              start=a;
              intro=true;
            }
            if(element.charAt(a)==')'){
              close=a;
              break;
            }
          }
        }else{
          break;
        }
        result=result.replace(/'/g, "");
        let conc=result.split(',');    
        let cad1=element.substr(0,index);
        let cad2=element.substr(close+1,element.length);
        element=cad1+conc[0]+cad2;
      }
      arr[x]=element;
    }
    return arr;
  }

  private async returnDate(str:string):Promise<Date>{
    if(isEmpty(str))return new Date('01-01-1990');
    let arr=str.split(' ');
    let d=Date.parse(arr[0]);
    if (isNaN(d) == false) {
      return new Date(d);
    }else{
      return new Date('01-01-1990');
    }
  }

  private async returnInteger(str:string):Promise<number>{
    if(isEmpty(str))return -1;
    let nu=parseInt(str);
    if(isNaN(nu))return -1;
    return nu;
  }

}

export default CargosExService;
