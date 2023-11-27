import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { BdserviceService } from 'src/app/services/bdservice.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user1: string = "";
  pass1: string = "";
  mensaje1 = "usuario y/o contraseña no validos.";
 
  arregloUsuariosL: any = [
    {
      id_usuario: '',
      nombre_usuario: '',
      contrasenia: '',
      id_rol: ''
    }
  ]

  constructor(private servicioBD: BdserviceService, private storageService: StorageService, private router: Router, private toastController: ToastController) {
  }

  ngOnInit() {
    this.servicioBD.dbState().subscribe(res => {
      if (res) {
        this.servicioBD.fetchUsuarios().subscribe(item => {
          this.arregloUsuariosL = item;
        })
      }
    })
   }

  validaUser() {
    if (this.user1 != "" && this.pass1 != "") {
      this.servicioBD.buscarUsuario(this.user1, this.pass1).then(user => {
        if (user) {
          this.storageService.setInicioSesion(this.user1, 'token304')
          this.router.navigate(['/home']);
          this.user1 = "";
          this.pass1 = "";
        } else {
          this.user1 = "";
          this.pass1 = "";
          this.presentToast('middle', this.mensaje1);
        }
      });
    } else {
      this.presentToast('middle', "Por favor, complete los campos solicitados.");
    }
  }


  async presentToast(position: 'top' | 'middle' | 'bottom', mensaje: string) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 2000,
      position: position,
    });

    await toast.present();
  }

}
