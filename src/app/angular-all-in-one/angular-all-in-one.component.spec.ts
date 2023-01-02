import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularAllInOneComponent } from './angular-all-in-one.component';

describe('AngularAllInOneComponent', () => {
  let component: AngularAllInOneComponent;
  let fixture: ComponentFixture<AngularAllInOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularAllInOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularAllInOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
