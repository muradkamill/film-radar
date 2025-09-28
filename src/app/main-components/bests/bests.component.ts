import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { environment } from '../../enviroment/environment.prod.example';

@Component({
  selector: 'app-bests',
  imports: [],
  templateUrl: './bests.component.html',
  styleUrl: './bests.component.css',
})
export class BestsComponent implements OnInit {
  api: any[] = [];
  Id?: SafeResourceUrl | null = null;
  key = environment.youtubeApiKey;

  constructor(
    private httpClient: HttpClient,
    private sanitizer: DomSanitizer
  ) {}
  ngOnInit(): void {
    this.func();
  }
  func() {
    if (this.api.length < 4) {
      this.httpClient
        .get<any>(
          `https://www.googleapis.com/youtube/v3/search?part=snippet&q=The+Best+Movies&type=video&maxResults=1000&order=viewCount&regionCode=US&key=${this.key}`
        )
        .subscribe({
          next: (data) => {
            let x = Math.floor(Math.random() * 60);
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
          },
        });
    }
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
}
