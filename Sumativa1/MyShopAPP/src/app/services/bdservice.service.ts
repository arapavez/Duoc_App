import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';
import { Platform, ToastController } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BdserviceService {
  public database!: SQLiteObject;
  tablaRol: string = "CREATE TABLE IF NOT EXISTS rol(id_rol INTEGER PRIMARY KEY autoincrement, descrip_rol VARCHAR(7) NOT NULL);";
  registroRol: string = "INSERT or IGNORE INTO rol(id_rol, descrip_rol) VALUES(1, 'cliente');";
  tablaUsuario: string = "CREATE TABLE IF NOT EXISTS usuario(id_usuario INTEGER PRIMARY KEY autoincrement, nombre_usuario VARCHAR(50) UNIQUE NOT NULL, contrasenia VARCHAR(50) NOT NULL, id_rol INTEGER, FOREIGN KEY(id_rol) REFERENCES rol(id_rol));";
  //de momento solo serán tres productos, por lo cual no serán necesarias otras tablas como por ej. categoria
  tablaProducto: string = "CREATE TABLE IF NOT EXISTS producto(id_producto INTEGER PRIMARY KEY autoincrement, nombre_artista VARCHAR(25) NOT NULL, nombre_producto VARCHAR(25) NOT NULL, nombre_version VARCHAR(25), precio INTEGER NOT NULL, imagen TEXT NOT NULL, descripcion TEXT NOT NULL);";
  registroProd1: string = "INSERT or IGNORE INTO producto(id_producto, nombre_artista, nombre_producto, nombre_version, precio, imagen, descripcion) VALUES(1, 'THE ROSE', 'DUAL', 'DAWN', 34000, 'assets/productos/dawn.png', 'DUAL es el segundo Álbum de estudio de larga duración de la banda THE ROSE.');";
  registroProd2: string = "INSERT or IGNORE INTO producto(id_producto, nombre_artista, nombre_producto, nombre_version, precio, imagen, descripcion) VALUES(2, 'BTS', 'WINGS', NULL, 25000, 'assets/productos/wings.jpeg', 'WINGS contiene canciones sobre jóvenes que se enfrentan por primera vez a la tentación y deben reflexionar y agonizar ante ella.');";
  registroProd3: string = "INSERT or IGNORE INTO producto(id_producto, nombre_artista, nombre_producto, nombre_version, precio, imagen, descripcion) VALUES(3, 'RM', 'INDIGO', NULL, 29990, 'assets/productos/indigo.png', 'El primer Álbum oficial en solitario de RM. INDIGO relata los pensamientos y sentimientos más sinceros de Kim Namjoon.');";
  tablaPedido: string = "CREATE TABLE IF NOT EXISTS pedido(id_pedido INTEGER PRIMARY KEY autoincrement, fecha_pedido DATE NOT NULL, id_usuario INTEGER, FOREIGN KEY(id_usuario) REFERENCES usuario(id_usuario));";
  tablaDetalle: string = "CREATE TABLE IF NOT EXISTS detalle_pedido(id_detalle_pedido INTEGER PRIMARY KEY autoincrement, id_pedido INTEGER, id_producto INTEGER, cantidad INTEGER, FOREIGN KEY(id_pedido) REFERENCES pedido(id_pedido), FOREIGN KEY(id_producto) REFERENCES producto(id_producto));";
  //observables x tablas
  private isBDReady: BehaviorSubject<boolean> = new BehaviorSubject(false)

  constructor(private sqlite: SQLite, private platform: Platform, private toastController: ToastController) { 
    this.crearBD();
  }

  async presentToast(position: 'top' | 'middle' | 'bottom', mensaje: string) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 2000,
      position: position,
    });

    await toast.present();
  }

  crearBD() {
    this.platform.ready().then(() => {
      this.sqlite.create({
        name: 'dbshopbh.bd',
        location: 'default'
      }).then((db: SQLiteObject) => {
        this.database = db;
        //this.crearTablas();
      }).catch(e => {
        this.presentToast('middle', 'error BD:' + e);
      })
    })
  }

  async crearTablas() {
    try {
      await this.database.executeSql(this.tablaRol, [])
      await this.database.executeSql(this.tablaUsuario, [])
      await this.database.executeSql(this.tablaProducto, [])
      await this.database.executeSql(this.tablaPedido, [])
      await this.database.executeSql(this.tablaDetalle, [])
      await this.database.executeSql(this.registroRol, [])
      await this.database.executeSql(this.registroProd1, [])
      await this.database.executeSql(this.registroProd2, [])
      await this.database.executeSql(this.registroProd3, [])
      this.isBDReady.next(true);
    } catch (e) {
      this.presentToast('middle', 'error creartabla:' + e);
    }    
  }

}

