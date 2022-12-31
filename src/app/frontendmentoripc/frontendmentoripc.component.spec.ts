import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontendmentoripcComponent } from './frontendmentoripc.component';

describe('FrontendmentoripcComponent', () => {
  let component: FrontendmentoripcComponent;
  let fixture: ComponentFixture<FrontendmentoripcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrontendmentoripcComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrontendmentoripcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
