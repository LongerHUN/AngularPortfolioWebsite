import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontendmentornfcComponent } from './frontendmentornfc.component';

describe('FrontendmentornfcComponent', () => {
  let component: FrontendmentornfcComponent;
  let fixture: ComponentFixture<FrontendmentornfcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrontendmentornfcComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrontendmentornfcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
