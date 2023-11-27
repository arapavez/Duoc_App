import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { BdserviceService } from 'src/app/services/bdservice.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
})
export class ProductosPage implements OnInit {

  arregloProductos: any = [
    {
      id_producto: '',
      nombre_artista: '',
      nombre_producto: '',
      nombre_version: '',
      precio: '',
      imagen: '',
      descripcion: ''
    }
  ]

  constructor(private servicioBD: BdserviceService, private router: Router) { }

  ngOnInit() {
    this.servicioBD.dbState().subscribe(res => {
      if (res) {
        this.servicioBD.fetchProductos().subscribe(item => {
          this.arregloProductos = item;
        })
      }
    })
  }

  enviarDetalle(x: any) {
    let navigationExtras: NavigationExtras = {
      state: {
        producto:x
      }
    }
    this.router.navigate(['/detalle-producto'], navigationExtras);
  }

}


