import { Component, NgModule, OnInit } from '@angular/core';
import { ServiceService } from '../services/service.service';
import { FooterComponent } from '../shared/footer/footer.component';
import { LogoSearchComponent } from '../shared/logo-search/logo-search.component';
import { HeaderComponent } from '../shared/header/header.component';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrl: './watchlist.component.css',
  imports: [
    FormsModule,
    CommonModule,
  ],
})
export class WatchlistComponent implements OnInit {
  arr?: any[] = [];

  constructor(public service: ServiceService, public router: Router) {}

  ngOnInit() {
    this.arr = this.service.arr;
  }
  onClicked(item: any) {
    this.router.navigate([`/film/${item.Title}`]);
  }

}
