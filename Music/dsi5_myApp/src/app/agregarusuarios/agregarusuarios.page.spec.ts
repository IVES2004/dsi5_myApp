// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { AgregarusuariosPage } from './agregarusuarios.page';

// describe('AgregarusuariosPage', () => {
//   let component: AgregarusuariosPage;
//   let fixture: ComponentFixture<AgregarusuariosPage>;

//   beforeEach(() => {
//     fixture = TestBed.createComponent(AgregarusuariosPage);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AgregarusuariosPage } from './agregarusuarios.page';

describe('AgregarusuariosPage', () => {
  let component: AgregarusuariosPage;
  let fixture: ComponentFixture<AgregarusuariosPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AgregarusuariosPage],
      imports: [IonicModule.forRoot(), FormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(AgregarusuariosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
