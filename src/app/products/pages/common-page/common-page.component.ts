import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-common-page',
  templateUrl: './common-page.component.html',
  styleUrl: './common-page.component.css',
})
export class CommonPageComponent {
  public name: string = 'Adrian';
  public gender: 'male' | 'female' = 'male';
  public clients: string[] = ['adrian', 'jose', 'pepe', 'natalia', 'gabriela'];
  public person = {
    name: 'Adrian',
    age: 38,
    addess: 'Mar del plata'
  }


  public invitationMap = {
    'male': 'invitarlo',
    'female': 'invitarla'
  }
  public clientsMap = {
    '=0': 'No tenemos clientes esperando',
    '=1': 'Tenemos un cliente esperando',
    'other': 'Tenemos # clientes esperando'
  }


  public handleChange(){
    this.name = 'Josefina';
    this.gender = 'female';
  }
  public deleteClient(){
    this.clients.pop()
  }
  public MyObservableTimer = interval(2000)

}
