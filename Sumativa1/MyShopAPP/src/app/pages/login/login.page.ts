import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user1: string= "";
  pass1: string= "";
  mensaje1="usuario y/o contraseña no validos.";
  user2: string= "";
  pass2: string= "";

  constructor(private router:Router, private activedRouter: ActivatedRoute, private toastController:ToastController) {
    this.activedRouter.queryParams.subscribe(params => {
      if(this.router.getCurrentNavigation()?.extras.state){
        this.user2 = this.router.getCurrentNavigation()?.extras?.state?.['user'];
        this.pass2 = this.router.getCurrentNavigation()?.extras?.state?.['pass'];
      }
    })
   }

  ngOnInit() {
  }

  validaUser(){
    if(this.user1!="" && this.pass1!="") { //se verifica que no esten vacios, esto cambiará cuando se implemente la BD
      if(this.user1 === this.user2 && this.pass1 === this.pass2){
        this.router.navigate(['/home']);
      }else{
        this.user1="";
        this.pass1="";
        this.presentToast('middle',this.mensaje1);
      }  
    }else {
      this.presentToast('middle',"Por favor, complete los campos solicitados.");
    }
  }

  async presentToast(position: 'top' | 'middle' | 'bottom',mensaje:string) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 2000,
      position: position,
    });

    await toast.present();
  }
  
}
