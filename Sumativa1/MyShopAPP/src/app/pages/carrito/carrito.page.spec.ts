import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CarritoPage } from './carrito.page';
import { ActivatedRoute } from '@angular/router';

describe('CarritoPage', () => {
  const fActivatedRoute = {
    snapshot: { data: {}}
  } as ActivatedRoute;

  let component: CarritoPage;
  let fixture: ComponentFixture<CarritoPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [ {provide: ActivatedRoute, useValue: fActivatedRoute} ],
    }).compileComponents();

    fixture = TestBed.createComponent(CarritoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
