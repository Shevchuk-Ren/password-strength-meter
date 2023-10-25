import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PassowordStrengthBarComponent } from './password-strength-bar.component';

describe('PasswordStrengthBarComponent', () => {
  let component: PassowordStrengthBarComponent;
  let fixture: ComponentFixture<PassowordStrengthBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PassowordStrengthBarComponent]
    });
    fixture = TestBed.createComponent(PassowordStrengthBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
