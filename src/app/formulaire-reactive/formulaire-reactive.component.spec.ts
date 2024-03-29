import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireReactiveComponent } from './formulaire-reactive.component';

describe('FormulaireReactiveComponent', () => {
  let component: FormulaireReactiveComponent;
  let fixture: ComponentFixture<FormulaireReactiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulaireReactiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormulaireReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
