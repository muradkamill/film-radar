import { Routes } from '@angular/router';
import { CardPageComponent } from './card-page/card-page.component';
import { ErrorComponent } from './error/error.component';
import { WatchlistComponent } from './watchlist/watchlist.component';
import { SearchComponent } from './search/search.component';
import { BodyComponent } from './body/body.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';

export const routes: Routes = [
  {
    path: '',
    component:BodyComponent,
    pathMatch:"full",
  },
  {
    path: 'search',
    component: SearchComponent,
  },
  {
    path: 'signup',
component:SignupComponent
  },
  {
    path: 'signin',
component:SigninComponent
  },
  {
    path: 'search/:name',
    component: SearchComponent,
  },

  {
    path: 'film',
    component: CardPageComponent,
  },
  {
    path: 'film/:name',
    component: CardPageComponent,
  },
  {
    path: 'watchlist',
    component: WatchlistComponent,
  },
  {
    path: '**',
    component: ErrorComponent,
  },
];
