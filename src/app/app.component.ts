import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-header></app-header>
    
    <router-outlet></router-outlet>

    <footer>
    <div class="navbar is-black">
      <div class="navbar-brand">
        <a class="navbar-item">
            TARge21 Henry Brindfeldt
        </a>
      </div>
    </div>
    </footer>
  `,
  styles: []
})
export class AppComponent {
  title = 'angular-site';
}
