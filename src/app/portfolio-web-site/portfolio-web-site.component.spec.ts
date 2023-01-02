import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioWebSiteComponent } from './portfolio-web-site.component';

describe('PortfolioWebSiteComponent', () => {
  let component: PortfolioWebSiteComponent;
  let fixture: ComponentFixture<PortfolioWebSiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfolioWebSiteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortfolioWebSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
