import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistroPage } from './registro.page';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';

describe('RegistroPage', () => {
  let component: RegistroPage;
  let fixture: ComponentFixture<RegistroPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [SQLite]
    }).compileComponents();

    fixture = TestBed.createComponent(RegistroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have var empty', () => {
    var user = "";
    var pass = "";
    expect(component.usuario).toBe(user);
    expect(component.password).toBe(pass);
  });
});
