import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordStrengthChecklistComponent } from './password-strength-checklist.component';

describe('PasswordStrengthChecklistComponent', () => {
  let component: PasswordStrengthChecklistComponent;
  let fixture: ComponentFixture<PasswordStrengthChecklistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PasswordStrengthChecklistComponent]
    });
    fixture = TestBed.createComponent(PasswordStrengthChecklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
