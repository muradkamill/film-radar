import { CommonModule } from '@angular/common';
import {
  Component,
  ElementRef,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from '../../services/service.service';
@Component({
  selector: 'app-logo-search',
  imports: [FormsModule, CommonModule],
  templateUrl: './logo-search.component.html',
  styleUrl: './logo-search.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class LogoSearchComponent {
  @ViewChild('search') search?: ElementRef<HTMLInputElement>;
  constructor(private router: Router, private service: ServiceService) {}
  onSearch() {
    if (!this.search?.nativeElement.value) {
    } else {
      let searchArr = this.search.nativeElement.value.replace(' ', '+');
      this.router.navigate([`/search/${searchArr}`]);
    }
  }
  onlistButton() {
    this.router.navigate(['/watchlist']);
  }
}
