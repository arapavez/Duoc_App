import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private _storage: Storage | null = null;

  constructor(private storage: Storage) {
    this.init();
   }

   async init(){
    const storage = await this.storage.create();
    this._storage = storage;
   }

   async setInicioSesion(username: string, token: string){
    await this._storage?.set('username', username);
    await this._storage?.set('token', token);
   }

   async getInicioSesion(){
    const username = await this._storage?.get('username');
    const token = await this._storage?.get('token');
    return {username,token};
   }

   async clearSesion(){
    await this._storage?.remove('username');
    await this._storage?.remove('token');
   }
}
