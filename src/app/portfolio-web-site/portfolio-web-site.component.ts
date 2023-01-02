import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio-web-site',
  templateUrl: './portfolio-web-site.component.html',
  styleUrls: ['./portfolio-web-site.component.css']
})
export class PortfolioWebSiteComponent {
  title = 'Alex Asztalos | Junior Frontend developer';

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
