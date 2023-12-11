import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetalleProductoPage } from './detalle-producto.page';
import { ActivatedRoute } from '@angular/router';

describe('DetalleProductoPage', () => {
  const fakeActivatedRoute = {
    snapshot: { data: {}}
  } as ActivatedRoute;
  
  let component: DetalleProductoPage;
  let fixture: ComponentFixture<DetalleProductoPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [{provide: ActivatedRoute, useValue: fakeActivatedRoute}]
    }).compileComponents();

    fixture = TestBed.createComponent(DetalleProductoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
