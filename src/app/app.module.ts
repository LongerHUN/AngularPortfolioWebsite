import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FrontendmentornfcComponent } from './frontendmentornfc/frontendmentornfc.component';
import { FrontendmentoripcComponent } from './frontendmentoripc/frontendmentoripc.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PageProgressComponent } from './progressbar/progressbar';

@NgModule({
  declarations: [
    AppComponent,
    FrontendmentornfcComponent,
    FrontendmentoripcComponent,
    NavbarComponent,
    PageProgressComponent
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
