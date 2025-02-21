import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileVerificationPageComponent } from './mobile-verification-page.component';

describe('MobileVerificationPageComponent', () => {
  let component: MobileVerificationPageComponent;
  let fixture: ComponentFixture<MobileVerificationPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MobileVerificationPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobileVerificationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
