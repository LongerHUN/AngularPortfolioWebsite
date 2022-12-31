import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Alex Asztalos | Junior Frontend developer';

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
