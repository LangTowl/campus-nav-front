import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileMapManagerComponent } from './mobile-map-manager.component';

describe('MobileMapManagerComponent', () => {
  let component: MobileMapManagerComponent;
  let fixture: ComponentFixture<MobileMapManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MobileMapManagerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobileMapManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
