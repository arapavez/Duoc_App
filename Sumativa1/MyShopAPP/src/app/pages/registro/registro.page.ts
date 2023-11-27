import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { BdserviceService } from 'src/app/services/bdservice.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  arregloUsuarios: any = [
    {
      id_usuario: '',
      nombre_usuario: '',
      contrasenia: '',
      id_rol: ''
    }
  ]

  usuario = "";
  password = "";

  constructor(private servicioBD: BdserviceService, private router: Router, private toastController: ToastController) {

  }

  ngOnInit() {
    this.servicioBD.dbState().subscribe(res => {
      if (res) {
        this.servicioBD.fetchUsuarios().subscribe(item => {
          this.arregloUsuarios = item;
        })
      }
    })
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
      if (!this.validaEmail(this.usuario.trim())) {
        this.usuario = "";
        this.password = "";
        console.log('malo');
        this.presentToast('middle', 'Por favor, ingrese un correo electrónico válido.');
        return;
      }
      this.servicioBD.agregarUsuario(this.usuario, this.password, 1).then(res => {
        if (res) {
          console.log('Usuario agregado correctamente');
          this.router.navigate(['/login']);
        } else {
          this.presentToast('middle', 'El correo ya se encuentra registrado, Ingrese otro.');
        }
      });
    } else {
      this.presentToast('middle', 'Por favor, debe completar los campos.');
      return;
    }

  }

  validaEmail(email: string) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  validaPass(passw: string) {
    if(passw.length >= 8) {
      return true;
    } else {
      return false;
    }
  }

}
