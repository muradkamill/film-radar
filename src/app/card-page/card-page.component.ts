import { Component } from '@angular/core';
import { InfoComponent } from "./info/info.component";

@Component({
  selector: 'app-card-page',
  imports: [ InfoComponent],
  templateUrl: './card-page.component.html',
  styleUrl: './card-page.component.css'
})
export class CardPageComponent {

}
