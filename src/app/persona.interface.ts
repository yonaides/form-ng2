import {ITelefonos} from './telefono.interface';
import {IDirecciones} from './direccion.interface';


export interface IPersona{
    nombre:string;
      apellido:string;
      cedula:string;
      email:string;
      notificacion:string;
      telefonosDT:ITelefonos;
      direccionesDT:IDirecciones;
      
}