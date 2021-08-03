import { CargosExEntityVD } from '@/entity/cargosEx.entity';
import { ControlInternoEntityVD } from '@/entity/controlInterno.entity';
import { DocumentoEntityVD } from '@/entity/documento.entity';
import { EmpleadosEntityVD } from '@/entity/empleados.entity';
import { UsuarioEvEntityVD } from '@/entity/usuarioEv.entity';
import { HttpException } from '@/exceptions/HttpException';
import { ControlInterno } from '@/interfaces/controlInterno.interface';
import { Documento } from '@/interfaces/documento.interface';
import { Empleados } from '@/interfaces/empleados.iterface';
import { UsuarioEv } from '@/interfaces/usuarioEv.interfa';
import { isEmpty } from 'class-validator';
import fs from 'fs';
import { getRepository } from 'typeorm';

class CargosExService {
  public cargosEx = CargosExEntityVD;
  public usuarioEv = UsuarioEvEntityVD;
  public controlInterno = ControlInternoEntityVD;
  public documento = DocumentoEntityVD;
  public empleado = EmpleadosEntityVD;

  public async insert(): Promise<boolean> {
    //await this.cargosExInsert();
    //await this.usersEvInsert();
    //await this.controlInternoInsert();
    //await this.DocumentoInsert();
    //await this.empleadoInsert();
    return true;
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
        lmilitar:arr3[4]?arr3[4]:'null',
        sexo:arr3[5]?arr3[5]:'null',
        celular:arr3[6]?arr3[6]:'null',
        fnac:await this.returnDate(arr3[7]),
        lnac:arr3[8]?arr3[8]:'null',
        direc:arr3[9]?arr3[9]:'null',
        zona:arr3[10]?arr3[10]:'null',
        idgrado:await this.returnInteger(arr3[11]),
        tdomicilio:arr3[12]?arr3[12]:'null',
        ecivil:arr3[13]?arr3[13]:'null',
        notas:arr3[14]?arr3[14]:'null',
        estado:arr3[15]?arr3[15]:'null',
        e_mail:arr3[16]?arr3[16]:'null',
        ncuenta:arr3[17]?arr3[17]:'null',
        nit:arr3[18]?arr3[18]:'null',
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

      if(z<5)console.log(arr3);
      else return;

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
