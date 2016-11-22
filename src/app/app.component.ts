import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import {ITelefonos} from './telefono.interface';
import {IDirecciones} from './direccion.interface';
import {IPersona} from './persona.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  public title = 'Formularios en AngularJS 2 Final';
  public form: FormGroup;
  public telefonos:ITelefonos[]=[];
  public direcciones:IDirecciones[]=[];
  public personas:IPersona[]=[];


ngOnInit(){
   var telefono1:ITelefonos= {tipo:"Casa", telefono:'256555'};
   var telefono2:ITelefonos= {tipo:"Privado", telefono:'5464'};

   this.telefonos.push(telefono1);
   this.telefonos.push(telefono2);

var direccion1:IDirecciones={tipo:"Casa", direccion:'direccion de mi casa'};
var direccion2:IDirecciones={tipo:"Trabajo", direccion:'direccion del trabajo'};

this.direcciones.push(direccion1);
this.direcciones.push(direccion2);


  }


  constructor( public fb: FormBuilder) {
    this.form = this.fb.group({
      nombre:'',
      apellido:'',
      cedula:['',Validators.required],
      email:'',
      notificacion:'No',
      telefonosDT:this.fb.group({
        tipo:'',
        telefono:''
      }),
      direccionesDT:this.fb.group({
        tipo:'',
        direccion:''
      })
        
    });
  }

public setValores():void{
console.log('formularios', this.form.controls);

  this.form.controls['nombre'].setValue('yonaides');
  this.form.controls['apellido'].setValue('tavares');
  this.form.controls['cedula'].setValue('');
  this.form.controls['email'].setValue('yonaides@hotmail.com');
  this.form.controls['notificacion'].setValue('');



}

public reset():void{
  this.form.reset();
}



public getTelefonoIndex(tipoTel:string ){




}



public addTelefonos(modelo, valid):void{

  var i = this.telefonos.map(function(x) {return x.tipo}).indexOf(modelo.telefonosDT.tipo);
    
  console.log("index a modificar ", i);
  console.log("tipo telefono " , modelo.telefonosDT.tipo) ;
  console.log("telefonos de la lista " , this.telefonos); 

  if (i != -1){
    this.telefonos[i].telefono = modelo.telefonosDT.telefono;
  }else {
    this.telefonos.push(modelo.telefonosDT);
  }
  

  this.form.controls['telefonosDT'].setValue({tipo:'Tipo', telefono:''});
  console.log('valores ', modelo);
  console.log('valores telefonosDT', modelo.telefonosDT);
  console.log('valores direccionDT', modelo.direccionDT);
  console.log('valid ', valid);


}

public setEditPhone(i):void{
console.log("Editando el index ", i);
this.form.controls['telefonosDT'].setValue({tipo:this.telefonos[i].tipo, telefono:this.telefonos[i].telefono});


}

public setDeletePhone(i):void{
  console.log("borrando el index " , i);
  this.telefonos.splice(i,1);

}



public addDireccion(modelo, valid):void{


var i = this.direcciones.map(function(x) {return x.tipo}).indexOf(modelo.direccionesDT.tipo);
    
  console.log("index a modificar ", i);
  console.log("tipo direccion " , modelo.direccionesDT.tipo) ;
  console.log("direcciones de la lista " , this.direcciones); 

  if (i != -1){
    this.direcciones[i].direccion = modelo.direccionesDT.direccion;
  }else {
    this.direcciones.push(modelo.direccionesDT);
  }
  

  this.form.controls['direccionesDT'].setValue({tipo:'Tipo', direccion:''});
  console.log('valores ', modelo);
  console.log('valores direccionesDT', modelo.direccionesDT);
  console.log('valores TelefonosDT', modelo.telefonosDT);
  console.log('valid ', valid);


}


public setEditDireccion(i):void{

console.log("Editando el index ", i);
this.form.controls['direccionesDT'].setValue({tipo:this.direcciones[i].tipo, direccion:this.direcciones[i].direccion});


}


public setDeleteDireccion(i):void{
  console.log("borrando el index " , i);
  this.direcciones.splice(i,1);

  
}


}
