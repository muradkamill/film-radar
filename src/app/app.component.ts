import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./shared/header/header.component";
import { LogoSearchComponent } from './shared/logo-search/logo-search.component';
import { CaruselComponent } from './main-components/carusel/carusel.component';
import { FilmsComponent } from './main-components/films/films.component';
import { BestsComponent } from './main-components/bests/bests.component';
import { FooterComponent } from './shared/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, LogoSearchComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'FilmRadar';
}
