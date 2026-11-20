import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Usuariovistacomponent } from './usuariovistacomponent';

describe('Usuariovistacomponent', () => {
  let component: Usuariovistacomponent;
  let fixture: ComponentFixture<Usuariovistacomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Usuariovistacomponent],
    }).compileComponents();

    fixture = TestBed.createComponent(Usuariovistacomponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
