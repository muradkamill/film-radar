import { Component } from '@angular/core';
import { FooterComponent } from '../shared/footer/footer.component';
import { HeaderComponent } from "../shared/header/header.component";
import { LogoSearchComponent } from "../shared/logo-search/logo-search.component";
import { InfoComponent } from "./info/info.component";

@Component({
  selector: 'app-card-page',
  imports: [FooterComponent, HeaderComponent, LogoSearchComponent, InfoComponent],
  templateUrl: './card-page.component.html',
  styleUrl: './card-page.component.css'
})
export class CardPageComponent {
  
}
