import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
  <section class="hero is-info is-bold is-fullheight">
    <div class="hero-body">
      <div class="container has-text-centered">
    <p class="title">
      About Page
    </p>
    <p class="subtitle">
      Info coming soon!
    </p>
      </div>
    </div>
  </section>
  `,
  styles: [`
    .hero {
      background-image: url('/assets/stones1.jpg') !important;
      background-size: cover;
      background-position: center center;
    }`
  ]
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
