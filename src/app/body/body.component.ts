import { Component } from '@angular/core';
import { HeaderComponent } from "../shared/header/header.component";
import { LogoSearchComponent } from "../shared/logo-search/logo-search.component";
import { CaruselComponent } from "../main-components/carusel/carusel.component";
import { FilmsComponent } from "../main-components/films/films.component";
import { BestsComponent } from "../main-components/bests/bests.component";
import { FooterComponent } from "../shared/footer/footer.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-body',
  imports: [HeaderComponent, LogoSearchComponent, CaruselComponent, FilmsComponent, BestsComponent, FooterComponent],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {}
