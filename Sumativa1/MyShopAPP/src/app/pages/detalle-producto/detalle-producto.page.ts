import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.page.html',
  styleUrls: ['./detalle-producto.page.scss'],
})
export class DetalleProductoPage implements OnInit {
  cantidad = 1;
  producto:any;
  precio = 0;
  totalItem = 0;
  carrito: Array<{item:any, count:number, total:number}> = [];

  constructor(private router:Router, private activedRouter: ActivatedRoute) {
    this.activedRouter.queryParams.subscribe(params => {
      if(this.router.getCurrentNavigation()?.extras.state){
        this.producto = this.router.getCurrentNavigation()?.extras?.state?.['producto'];
        this.precio = this.producto.precio;
        this.totalItem = this.producto.precio;
      }
    })
   }

  ngOnInit() {
  }

  validaCantidad() {
    if (this.cantidad < 1) {
      this.cantidad = 1;
    }
    this.totalxItem();
  }

  totalxItem() {
    if (this.cantidad) {
      this.totalItem = this.precio * this.cantidad;
    }
  }

  agregaraCarro(){
    const prodExiste = this.carrito.find(item => item.item.id === this.producto.id);
    if (prodExiste) { //modifica los datos cuando un producto ya esta en el carrito
      prodExiste.count = this.cantidad;
      prodExiste.total = this.totalItem;
    }else{
      this.carrito.push({
        item:  this.producto,
        count: this.cantidad,
        total: this.totalItem
      });
    }
    console.log("Carrito actual:", this.carrito);

    let navigationExtras: NavigationExtras = {
      state: {
        items: this.carrito,
      }
    };
    this.router.navigate(['/carrito'], navigationExtras);
  }

}
