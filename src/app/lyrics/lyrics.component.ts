import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-lyrics',
  templateUrl: './lyrics.component.html',
  styleUrls: ['./lyrics.component.css']
})
export class LyricsComponent implements OnInit {

  lyrics = ["Veleros", "Sincero", "Florecer", "Nuestro único idioma", "Sonriendo a la tristeza", "Rizos"];

  constructor() { }

  ngOnInit() {
  }

}
