import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
  <section class="hero is-info is-bold is-fullheight">
    <div class="hero-body">
      <div class="container has-text-centered">
    <p class="title">
      My Webpage
    </p>
    <p class="subtitle">
      Angular
    </p>
    <p class="subtitl2e">
      Henry Brindfeldt TARge21
    </p>
      </div>
      <form (ngSubmit)="submitForm()">
      <div class="field">
      <label class="label"></label>
      <input type="email" name="email" class="input is-rounded" placeholder="Newsletter sign-up!" [(ngModel)]="email">
      </div>
      <div class="buttons is-centered">
        <button class="button is-small is-rounded">Submit</button>
      </div>
      </form>
    </div>
  </section>

  
  `,
  styles: [`
    .hero {
      background-image: url('/assets/stones0.jpg') !important;
      background-size: cover;
      background-position: center center;
    }`
  ]
})
export class HomeComponent implements OnInit {
  email: string="";

  constructor() { }

  ngOnInit(): void {
  }

    submitForm() {
    alert('Submiting form!')
  }
}
