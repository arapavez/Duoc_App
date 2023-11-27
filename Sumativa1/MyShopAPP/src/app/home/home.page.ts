import { Component } from '@angular/core';
import { StorageService } from '../services/storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private storageService: StorageService, private router: Router) {}

  logOut() {
    this.storageService.clearSesion()
    this.router.navigate(['/login']);

  }
}
