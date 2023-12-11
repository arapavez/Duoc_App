import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ApirestPage } from './apirest.page';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('ApirestPage', () => {
  let component: ApirestPage;
  let fixture: ComponentFixture<ApirestPage>;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      providers: [HttpClient, HttpHandler]
    }).compileComponents();

    fixture = TestBed.createComponent(ApirestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
