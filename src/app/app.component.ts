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
    'Ali Saqib Memon ',
    'Bilal khan Sulani',
    'Munsif khan baba',
    'Javed memon Jarawala',
    'Wahab memon',
    'jalal sons',
    'junaif javed choudry'
  ];
}
