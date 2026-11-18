import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Usuariocomponent } from './usuariocomponent';

describe('Usuariocomponent', () => {
  let component: Usuariocomponent;
  let fixture: ComponentFixture<Usuariocomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Usuariocomponent],
    }).compileComponents();

    fixture = TestBed.createComponent(Usuariocomponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
