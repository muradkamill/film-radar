import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ServiceService } from '../services/service.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { environment } from '../../environments/environment.development';

@Component({
  selector: 'app-search',
  imports: [
    CommonModule,
    RouterModule,
  ],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export class SearchComponent {
  MovieApi: any;
  name?: any;
  search?: string;
  response?: string;
  data?: any;
  omdbKey=environment.omdbApiKey;

  constructor(
    private _snackBar: MatSnackBar,
    private activatedRoute: ActivatedRoute,
    private httpClient: HttpClient,
    private router: Router,
    private service:ServiceService
  ) {
    activatedRoute.paramMap.subscribe({
      next: (data) => {
        this.name = data.get('name');
        this.fetchMovieData();
      },
    });
  }
     onClicked() {
    this.router.navigate([`/film/${this.name}`]);
  }

  fetchMovieData() {
    if (!this.name) return;

    this.httpClient
      .get<any>(`https://www.omdbapi.com/?t=${this.name}&apikey=${this.omdbKey}`)
      .subscribe({
        next: (data) => {
          this.data = data;
          this.response = data.Response;
          this.search = this.name;
        },
      });
  }
  onWatchlist(){
this.service.onWatch(this.data);
this._snackBar.open(`${this.data?.Title} added to watchlist`, '', {
  duration: 1700,
  horizontalPosition: 'right',
  verticalPosition: 'top',
});
  }
}
