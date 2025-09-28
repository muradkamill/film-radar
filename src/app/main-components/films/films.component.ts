import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { ServiceService } from '../../services/service.service';
import { environment } from '../../enviroment/enviroment.prod';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-films',
  imports: [MatFormFieldModule, FormsModule, MatInputModule, MatButtonModule],
  templateUrl: './films.component.html',
  styleUrl: './films.component.css',
})
export class FilmsComponent implements OnInit {
  data?: any;

  sixFilms: any[] = [];
  omdbKey = environment.omdbApiKey;
  popularMovies: string[] = [
    'The+Shawshank+Redemption',
    'The+Godfather',
    'The+Dark+Knight',
    'The+Godfather+Part+II',
    '12+Angry+Men',
    "Schindler's+List",
    'The+Lord+of+the+Rings+The+Return+of+the+King',
    'Pulp+Fiction',
    'The+Lord+of+the+Rings+The+Fellowship+of+the+Ring',
    'The+Good+the+Bad+and+the+Ugly',
    'Forrest+Gump',
    'Fight+Club',
    'Inception',
    'The+Lord+of+the+Rings+The+Two+Towers',
    'The+Matrix',
    'Goodfellas',
    "One+Flew+Over+the+Cuckoo's+Nest",
    'Se7en',
    'Seven+Samurai',
    'Interstellar',
    'The+Silence+of+the+Lambs',
    'Saving+Private+Ryan',
    'City+of+God',
    'Life+Is+Beautiful',
    'The+Green+Mile',
    'Terminator+2+Judgment+Day',
    'Back+to+the+Future',
    'Spirited+Away',
    'Psycho',
    'Parasite',
    'Léon+The+Professional',
    'The+Lion+King',
    'Gladiator',
    'American+History+X',
    'The+Departed',
    'Whiplash',
    'The+Prestige',
    'The+Usual+Suspects',
    'Grave+of+the+Fireflies',
    'Harakiri',
    'Casablanca',
    'Cinema+Paradiso',
    'The+Great+Dictator',
    'The+Lives+of+Others',
    'The+Intouchables',
    'Modern+Times',
    'Once+Upon+a+Time+in+the+West',
    'Rear+Window',
    'Alien',
    'City+Lights',
    'Apocalypse+Now',
    'Memento',
    'Django+Unchained',
    'Raiders+of+the+Lost+Ark',
    'Wall-E',
    'The+Shining',
    'Sunset+Boulevard',
    'Paths+of+Glory',
    'The+Dark+Knight+Rises',
    'Avengers+Infinity+War',
    'Witness+for+the+Prosecution',
    'Oldboy',
    'Mononoke+Hime',
    'Spider-Man+Into+the+Spider-Verse',
    'Joker',
    'The+Wolf+of+Wall+Street',
    'Braveheart',
    'Avengers+Endgame',
    'Aliens',
    'Once+Upon+a+Time+in+America',
    'Coco',
    'Das+Boot',
    'American+Beauty',
    'Toy+Story',
    '3+Idiots',
    'Princess+Mononoke',
    'Requiem+for+a+Dream',
    'Good+Will+Hunting',
    'Amadeus',
    'Like+Stars+on+Earth',
    'Inglourious+Basterds',
    'Reservoir+Dogs',
    'Eternal+Sunshine+of+the+Spotless+Mind',
    'Full+Metal+Jacket',
    '2001+A+Space+Odyssey',
    "Singin'+in+the+Rain",
    'The+Hunt',
    'L.A.+Confidential',
    'Bicycle+Thieves',
    'The+Kid',
    'Snatch',
    'Scarface',
    'The+Truman+Show',
    'A+Clockwork+Orange',
    'To+Kill+a+Mockingbird',
    'Logan',
    'The+Secret+in+Their+Eyes',
    'The+Father',
    'Up',
    'Batman+Begins',
    'Toy+Story+3',
    'Das+Boot',
    'Jaws',
    'Rocky',
    'Zodiac',
    'The+Grand+Budapest+Hotel',
    'Rashomon',
    'No+Country+for+Old+Men',
    'Shutter+Island',
    'The+Elephant+Man',
    'Mad+Max+Fury+Road',
    'Gone+Girl',
    'Finding+Nemo',
    'A+Beautiful+Mind',
    'Inside+Out',
    'Dead+Poets+Society',
    "Howl's+Moving+Castle",
    'Pirates+of+the+Caribbean+The+Curse+of+the+Black+Pearl',
    'The+Help',
    'The+Hurt+Locker',
    'Prisoners',
    'La+La+Land',
    'Ratatouille',
    'Moonlight',
    'Blade+Runner+2049',
    'The+Irishman',
    'The+Social+Network',
    'Black+Swan',
    'The+Shape+of+Water',
    'Her',
    'The+Lighthouse',
    'Dune',
    'Everything+Everywhere+All+at+Once',
    'Oppenheimer',
    'Barbie',
    'The+Boy+and+the+Heron',
    'Past+Lives',
    'John+Wick',
    'The+Revenant',
    'Doctor+Strange',
    'Guardians+of+the+Galaxy',
    'Thor+Ragnarok',
    'The+Batman',
    'The+Super+Mario+Bros+Movie',
    'Nope',
    'The+Whale',
    'Aftersun',
    'Top+Gun+Maverick',
    'Spider-Man+No+Way+Home',
    'A+Quiet+Place',
    'Everything+Everywhere+All+at+Once',
    'Django+Unchained',
    'The+Great+Gatsby',
    'Interstellar',
    'The+Martian',
    'Tenet',
    'Avatar',
    'Avatar+The+Way+of+Water',
    'The+Little+Mermaid',
    'Frozen',
    'Encanto',
    'The+Incredibles',
    'The+Iron+Giant',
    'How+to+Train+Your+Dragon',
    'Shrek',
    'Shrek+2',
    'Zootopia',
    'Moana',
    'Big+Hero+6',
    'Inside+Out',
    'Luca',
    'Turning+Red',
    'Lightyear',
    'Soul',
    'Coco',
    'Wreck-It+Ralph',
    'Ralph+Breaks+the+Internet',
    'Spider-Man+Across+the+Spider-Verse',
    'Kung+Fu+Panda',
    'Kung+Fu+Panda+2',
    'Kung+Fu+Panda+3',
    'Megamind',
    'Puss+in+Boots+The+Last+Wish',
  ];
  constructor(
    private router: Router,
    private httpClient: HttpClient,
    private service: ServiceService,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        window.scrollTo(0, 0);
      });
    window.scrollTo(0, 0);
    for (let x = 0; x < 6; x++) {
      let i = Math.floor(Math.random() * this.popularMovies.length);

      this.httpClient
        .get<any>(
          `https://www.omdbapi.com/?t=${this.popularMovies[i]}&apikey=${this.omdbKey}`
        )
        .subscribe({
          next: (data) => {
            this.data = data;
            this.sixFilms.push(data);
          },
        });
    }
  }
  onClicked0() {
    this.router.navigate([`/film/${this.sixFilms[0].Title}`]);
  }
  onClicked1() {
    this.router.navigate([`/film/${this.sixFilms[1].Title}`]);
  }
  onClicked2() {
    this.router.navigate([`/film/${this.sixFilms[2].Title}`]);
  }
  onClicked3() {
    this.router.navigate([`/film/${this.sixFilms[3].Title}`]);
  }
  onClicked4() {
    this.router.navigate([`/film/${this.sixFilms[4].Title}`]);
  }
  onClicked5() {
    this.router.navigate([`/film/${this.sixFilms[5].Title}`]);
  }

  onWatch(sixFilms: any) {
    this.service.onWatch(sixFilms);
    this._snackBar.open(`${sixFilms?.Title} added to watchlist`, '', {
      duration: 1700, 
      horizontalPosition: 'right', 
      verticalPosition: 'top', 
    });
  }


  
}
