import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  value="this is my value";

  employee = [
    'Ahmed Ali Khan',
    'Ali Saqib  ',
    'Bilal khan Sulani',
    'Munsif khan ',
    'Javed memon ',
    'Wahab memon',
    'jalal sons',
    'junaif javed choudry'
  ];
}
