import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ITelefonos } from './telefono.interface';
import { IDirecciones } from './direccion.interface';
import { IPersona } from './persona.interface';
import { MarcaCarsPipe } from './MarcaCarsPipe';
import { ModeloCarsPipe } from './ModeloCarsPipe';


import { ICars } from './cars';
import { IModelos } from './models';
import { IYear } from './year';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  public title = 'Formularios en AngularJS 2 Final';
  public form: FormGroup;
  public telefonos: ITelefonos[] = [];
  public direcciones: IDirecciones[] = [];
  public personas: IPersona[] = [];

  public carsList: ICars[] = [];
  public carsSelect: String;
  public modelsList: IModelos[] = [];
  public modeloSelect: String;
  public yearsList: IYear[] = [];



  ngOnInit() {
    var telefono1: ITelefonos = { tipo: "Casa", telefono: '256555' };
    var telefono2: ITelefonos = { tipo: "Privado", telefono: '5464' };

    this.telefonos.push(telefono1);
    this.telefonos.push(telefono2);

    var direccion1: IDirecciones = { tipo: "Casa", direccion: 'direccion de mi casa' };
    var direccion2: IDirecciones = { tipo: "Trabajo", direccion: 'direccion del trabajo' };

    this.direcciones.push(direccion1);
    this.direcciones.push(direccion2);

    var modelo1: IModelos = { modelo: "Sentra" };
    var modelo2: IModelos = { modelo: "murano" };
    var modelo3: IModelos = { modelo: "infinity" };
    var modelo4: IModelos = { modelo: "otro" };

    var modelo5: IModelos = { modelo: "civi" };
    var modelo6: IModelos = { modelo: "HR" };
    var modelo7: IModelos = { modelo: "CRV" };
    var modelo8: IModelos = { modelo: "OTro" };


    var yea1: IYear = { ano: "2011" };
    var yea2: IYear = { ano: "2012" };
    var yea3: IYear = { ano: "2013" };
    var yea4: IYear = { ano: "2014" };

    var yea5: IYear = { ano: "2015" };
    var yea6: IYear = { ano: "2016" };
    var yea7: IYear = { ano: "2017" };
    var yea8: IYear = { ano: "2018" };


    var carro1: ICars = { marca: "Nissan", modelo: modelo1, year: yea1 };
    var carro11: ICars = { marca: "Nissan", modelo: modelo1, year: yea2 };
    var carro12: ICars = { marca: "Nissan", modelo: modelo1, year: yea3 };

    var carro2: ICars = { marca: "Nissan", modelo: modelo2, year: yea2 };
    var carro3: ICars = { marca: "Nissan", modelo: modelo3, year: yea3 };
    var carro4: ICars = { marca: "Nissan", modelo: modelo4, year: yea4 };

    var carro5: ICars = { marca: "Honda", modelo: modelo5, year: yea5 };
    var carro6: ICars = { marca: "Honda", modelo: modelo6, year: yea6 };
    var carro7: ICars = { marca: "Honda", modelo: modelo7, year: yea7 };
    var carro8: ICars = { marca: "Honda", modelo: modelo8, year: yea8 };


    this.carsList.push(carro1);
    this.carsList.push(carro2);
    this.carsList.push(carro3);
    this.carsList.push(carro4);

    this.carsList.push(carro5);
    this.carsList.push(carro6);
    this.carsList.push(carro7);
    this.carsList.push(carro8);
    this.carsList.push(carro11);
    this.carsList.push(carro12);


  }


  constructor(public fb: FormBuilder) {
    this.form = this.fb.group({
      nombre: '',
      apellido: '',
      cedula: ['', Validators.required],
      email: '',
      notificacion: 'No',
      telefonosDT: this.fb.group({
        tipo: '',
        telefono: ''
      }),
      direccionesDT: this.fb.group({
        tipo: '',
        direccion: ''
      })

    });
  }


  public onChangeCarros(carro) {

    this.modelsList = [];
    this.carsList.forEach(cars => {
      if (cars.marca === carro) {
        this.modelsList.push(cars.modelo);
      }
    });

    this.carsSelect = carro;

  }


  public onChangeModelo(modelo) {
    this.yearsList = [];
    console.log('carSelect ', this.carsSelect);
    console.log('modelo ', modelo);

    this.carsList.forEach(cars => {
      console.log('car', cars.marca);
      console.log('modelo', cars.modelo);
      console.log('modelo', cars.modelo.modelo);
      if (cars.marca === this.carsSelect && cars.modelo.modelo === modelo) {
        this.yearsList.push(cars.year);
      } else {
        console.log('No ');
      }
    });


  }



  public setValores(): void {
    console.log('formularios', this.form.controls);

    this.form.controls['nombre'].setValue('yonaides');
    this.form.controls['apellido'].setValue('tavares');
    this.form.controls['cedula'].setValue('');
    this.form.controls['email'].setValue('yonaides@hotmail.com');
    this.form.controls['notificacion'].setValue('');



  }

  public reset(): void {
    this.form.reset();
  }

  public addTelefonos(modelo, valid): void {

    var i = this.telefonos.map(function (x) { return x.tipo }).indexOf(modelo.telefonosDT.tipo);

    console.log("index a modificar ", i);
    console.log("tipo telefono ", modelo.telefonosDT.tipo);
    console.log("telefonos de la lista ", this.telefonos);

    if (i != -1) {
      this.telefonos[i].telefono = modelo.telefonosDT.telefono;
    } else {
      this.telefonos.push(modelo.telefonosDT);
    }


    this.form.controls['telefonosDT'].setValue({ tipo: 'Tipo', telefono: '' });
    console.log('valores ', modelo);
    console.log('valores telefonosDT', modelo.telefonosDT);
    console.log('valores direccionDT', modelo.direccionDT);
    console.log('valid ', valid);


  }

  public setEditPhone(i): void {
    console.log("Editando el index ", i);
    this.form.controls['telefonosDT'].setValue({ tipo: this.telefonos[i].tipo, telefono: this.telefonos[i].telefono });


  }

  public setDeletePhone(i): void {
    console.log("borrando el index ", i);
    this.telefonos.splice(i, 1);

  }



  public addDireccion(modelo, valid): void {


    var i = this.direcciones.map(function (x) { return x.tipo }).indexOf(modelo.direccionesDT.tipo);

    console.log("index a modificar ", i);
    console.log("tipo direccion ", modelo.direccionesDT.tipo);
    console.log("direcciones de la lista ", this.direcciones);

    if (i != -1) {
      this.direcciones[i].direccion = modelo.direccionesDT.direccion;
    } else {
      this.direcciones.push(modelo.direccionesDT);
    }


    this.form.controls['direccionesDT'].setValue({ tipo: 'Tipo', direccion: '' });
    console.log('valores ', modelo);
    console.log('valores direccionesDT', modelo.direccionesDT);
    console.log('valores TelefonosDT', modelo.telefonosDT);
    console.log('valid ', valid);


  }


  public setEditDireccion(i): void {

    console.log("Editando el index ", i);
    this.form.controls['direccionesDT'].setValue({ tipo: this.direcciones[i].tipo, direccion: this.direcciones[i].direccion });


  }


  public setDeleteDireccion(i): void {
    console.log("borrando el index ", i);
    this.direcciones.splice(i, 1);


  }


}
