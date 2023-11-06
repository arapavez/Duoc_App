import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mi-cuenta',
  templateUrl: './mi-cuenta.page.html',
  styleUrls: ['./mi-cuenta.page.scss'],
})
export class MiCuentaPage implements OnInit {

  regiones:any[]=[
    {id:1, region:"Metropolitana"},
    {id:2, region:"Del Biobío"}
  ]

  data1:any={
    nombres:"",
    apellidos:"",
    rut:"",
    region:"",
    ciudad:"",
    comuna:"",
    direccion:""
  };
  
  data2:any={
    nombres:"",
    apellidos:"",
    rut:"",
    region:"",
    ciudad:"",
    comuna:"",
    direccion:""
  };

  
  constructor() { }

  ngOnInit() {
  }

}
