import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularAllInOneComponent } from './angular-all-in-one/angular-all-in-one.component';
import { PortfolioWebSiteComponent } from './portfolio-web-site/portfolio-web-site.component';

const routes: Routes = [
  { path: "PortfolioWebSite", component: PortfolioWebSiteComponent },
  { path: "AngularAllInOne", component: AngularAllInOneComponent },


  { path: "**", component: PortfolioWebSiteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
