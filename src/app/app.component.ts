import {Component, Inject} from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Formularios en AngularJS';
  form: FormGroup;

  constructor( public fb: FormBuilder) {
    this.form = this.fb.group({
      nombre:'',
      apellido:'',
      cedula:['',Validators.required],
      email:'',
      notificacion:'No',
      telefonosDT:this.fb.group({
        

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


public setAddTelefonos():void{




}



}
