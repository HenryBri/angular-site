import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <div class="navbar is-black">
      <div class="navbar-brand">
        <a class="navbar-item">
            <img src="assets/robot2.png">
            
        </a>
      </div>
      <div class="navbar-menu">
        <div class="navbar-start">
          <a class="navbar-item" routerLink="/">Home</a>
          <a class="navbar-item" routerLink="about">About</a>
          <a class="navbar-item" routerLink="contact">Contact</a>
        </div>
      </div>
    </div>
  `,
  styles: [
  ]
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
