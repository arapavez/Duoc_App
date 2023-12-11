import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HomePage } from './home.page';
import { Storage } from '@ionic/storage-angular';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomePage],
      imports: [IonicModule.forRoot()],
      providers: [Storage]
    }).compileComponents();

    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display a message', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('p').textContent).toContain('Blue Hour Store');
   });

});
