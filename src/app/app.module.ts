import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FrontendmentornfcComponent } from './frontendmentornfc/frontendmentornfc.component';
import { FrontendmentoripcComponent } from './frontendmentoripc/frontendmentoripc.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PageProgressComponent } from './progressbar/progressbar';
import { AngularAllInOneComponent } from './angular-all-in-one/angular-all-in-one.component';
import { PortfolioWebSiteComponent } from './portfolio-web-site/portfolio-web-site.component';

@NgModule({
  declarations: [
    AppComponent,
    FrontendmentornfcComponent,
    FrontendmentoripcComponent,
    NavbarComponent,
    PageProgressComponent,
    AngularAllInOneComponent,
    PortfolioWebSiteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
