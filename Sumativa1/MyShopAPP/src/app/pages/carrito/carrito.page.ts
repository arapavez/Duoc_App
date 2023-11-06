import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.page.html',
  styleUrls: ['./carrito.page.scss'],
})
export class CarritoPage implements OnInit {

  carrito: Array<{item:any, count:number, total:number}>=[];
  final=0;
  eliminado=false;

  constructor(private router:Router, private activedRouter:ActivatedRoute, private toastController:ToastController) { 
    this.activedRouter.queryParams.subscribe(params => {
      if(this.router.getCurrentNavigation()?.extras.state){
        this.carrito = this.router.getCurrentNavigation()?.extras?.state?.["items"];
        this.totalCompra();
      }
    })
  }

  ngOnInit() {
  }

  totalCompra(){
    this.final = 0;
    for(const item of this.carrito){
      this.final += item.total;
    }
  }

  eliminarCarro(){
    this.carrito = [];
    this.final =0;
    this.eliminado=true;
    setTimeout(() => {
      this.router.navigate(['/home']);
    },2000);
  }

  async presentToast(position: 'top' | 'middle' | 'bottom',mensaje:string) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 2000,
      position: position,
    });

    await toast.present();
  }

  pedido(){
    this.presentToast("middle","Compra realizada con exito");
    setTimeout(() => {
      this.router.navigate(['/home']);
    },2000);
    
  }

}
