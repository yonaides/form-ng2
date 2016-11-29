import { IModelos } from './models';
import { IYear } from './year';


export interface ICars {
    marca: string;
    modelo: IModelos;
    year: IYear;
}
