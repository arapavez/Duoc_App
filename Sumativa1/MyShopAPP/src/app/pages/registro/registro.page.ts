import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  usuario = "";
  password = "";

  constructor(private router: Router, private toastController: ToastController) {

  }

  ngOnInit() {
  }

  async presentToast(position: 'top' | 'middle' | 'bottom', mensaje: string) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 2000,
      position: position,
    });

    await toast.present();
  }


  enviarRegistro() {
    if (this.usuario != "" && this.password != "") {
      if (!this.validaEmail(this.usuario)) {
        this.usuario = "";
        this.password = "";
        this.presentToast('middle', 'Por favor, ingrese un correo electrónico válido.');
        return;
      }
    } else {
      this.presentToast('middle', 'Por favor, debe completar los campos.');
      return;
    }
    let navigationExtras: NavigationExtras = {
      state: {
        user: this.usuario,
        pass: this.password
      }
    };
    this.router.navigate(['/login'], navigationExtras);
  }

  validaEmail(email: string) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

}
