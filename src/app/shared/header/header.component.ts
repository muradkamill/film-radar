import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class HeaderComponent {
  constructor(private router:Router){}
  onSignin(){
this.router.navigate(['/signin']).then(r =>false )
  }
  onSignup(){
    this.router.navigate(['/signup'])

  }
}
