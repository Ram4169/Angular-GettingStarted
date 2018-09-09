import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div><h2>{{ pageTitle }}</h2>
      <pm-products></pm-products>
    </div>
    `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pageTitle = 'ACME: Product Management';
}
