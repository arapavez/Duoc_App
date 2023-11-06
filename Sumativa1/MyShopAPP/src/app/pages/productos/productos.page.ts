import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
})
export class ProductosPage implements OnInit {

  productos: any[] = [
    { id: 1, artista: "THE ROSE", album: "DUAL", version: "DAWN", precio: 34000, imagen: "assets/productos/dawn.png", descripcion:"'DUAL' es el segundo Álbum de estudio de larga duración de la banda THE ROSE."},
    { id: 2, artista: "BTS", album: "WINGS", version: "", precio: 25000, imagen: "assets/productos/wings.jpeg", descripcion:"'WINGS' contiene canciones sobre jóvenes que se enfrentan por primera vez a la tentación y deben reflexionar y agonizar ante ella."},
    { id: 3, artista: "RM", album: "INDIGO", version: "", precio: 29990, imagen: "assets/productos/indigo.png", descripcion:"El primer Álbum oficial en solitario de RM. 'INDIGO' relata los pensamientos y sentimientos más sinceros de Kim Namjoon."},
  ]
  constructor(private router: Router) { }

  ngOnInit() {
  }

  enviarDetalle(id: number) {
    let navigationExtras: NavigationExtras = {};
    let prod = this.productos.find(producto => producto.id === id);
    if (prod) { 
      navigationExtras.state = {
        producto: prod
      }
    }
    this.router.navigate(['/detalle-producto'], navigationExtras);
  }

}
