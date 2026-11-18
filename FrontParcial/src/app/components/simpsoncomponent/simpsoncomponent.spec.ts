import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Simpsoncomponent } from './simpsoncomponent';

describe('Simpsoncomponent', () => {
  let component: Simpsoncomponent;
  let fixture: ComponentFixture<Simpsoncomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Simpsoncomponent],
    }).compileComponents();

    fixture = TestBed.createComponent(Simpsoncomponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
