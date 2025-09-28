import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from '../../services/service.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { environment } from '../../../environments/environment.development';


@Component({
  selector: 'app-info',
  imports: [],
  templateUrl: './info.component.html',
  styleUrl: './info.component.css',

})
export class InfoComponent implements OnInit {

  name?: any;
  search?: string;
  response?: string;
  data?: any;
  datas: any[] = [];
  InternetMovieDatabase: any;
  rottenTomatoesRating: any;
  Metacritic: any;
  Id?: SafeResourceUrl | null = null;
  api: any[] = [];
  key=environment.youtubeApiKey;
  omdbKey=environment.omdbApiKey;

  constructor(
    private _snackBar: MatSnackBar,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private httpClient: HttpClient,
    private sanitizer: DomSanitizer,
    private service: ServiceService
  ) {
    activatedRoute.paramMap.subscribe({
      next: (data) => (this.name = data.get('name')),
    });

    httpClient
      .get<any>(`https://www.omdbapi.com/?t=${this.name}&apikey=${this.omdbKey}`)
      .subscribe({
        next: (data) => {
          this.data = data;
          this.datas.push(this.data);
          this.response = data.Response;
          this.search = this.name;
          this.InternetMovieDatabase =
            data.Ratings.find(
              (r: { Source: string; Value: string }) =>
                r.Source === 'Internet Movie Database'
            )?.Value || 'NOT EXIST!';
          this.rottenTomatoesRating =
            data.Ratings.find(
              (r: { Source: string; Value: string }) =>
                r.Source === 'Rotten Tomatoes'
            )?.Value || 'NOT EXIST!';
          this.Metacritic =
            data.Ratings.find(
              (r: { Source: string; Value: string }) =>
                r.Source === 'Metacritic'
            )?.Value || 'NOT EXIST!';
        },
      });
  }
  ngOnInit(): void {this.func()}

  func(){
    this.httpClient
      .get<any>(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${this.name}&type=video&maxResults=20&order=viewCount&regionCode=US&key=${this.key}`
      )
      .subscribe({
        next: (data) => {
          for (let i = 0; i < 4; i++) {
            let x = Math.floor(Math.random() * 15);
            if (
              data.items[x] !== data.items[x + 1] &&
              data.items[x] !== data.items[x + 3] &&
              data.items[x] !== data.items[x + 2] &&
              data.items[x + 1] !== data.items[x + 2] &&
              data.items[x + 1] !== data.items[x + 3] &&
              data.items[x + 2] !== data.items[x + 3]
            ) {
              this.api.push(data.items[x]);
              this.api.push(data.items[x + 1]);
              this.api.push(data.items[x + 2]);
              this.api.push(data.items[x + 3]);
            } else {
              this.func();
            }
          }


        },
      });
  }


  onClicked(videoId: string) {
    this.Id = this.sanitizer.bypassSecurityTrustResourceUrl(
      `https://www.youtube.com/embed/${videoId}`
    );
    return videoId;
  }
  onClose() {
    this.Id = null;
  }





  onWatchClicked() {
      this.service.onWatch(this.data);
      this._snackBar.open(`${this.data?.Title} added to watchlist`, '', {
        duration: 1700,
        horizontalPosition: 'right',
        verticalPosition: 'top',
      });
    }
  }
