import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginPage } from './login.page';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';
import { StorageService } from 'src/app/services/storage.service';
import { Storage } from '@ionic/storage-angular';

describe('LoginPage', () => {
  let component: LoginPage;
  let fixture: ComponentFixture<LoginPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [SQLite, StorageService, Storage]
    }).compileComponents();
    
    fixture = TestBed.createComponent(LoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have var empty', () => {
    var user = "";
    var pass = "";
    expect(component.user1).toBe(user);
    expect(component.pass1).toBe(pass);
  });

});
