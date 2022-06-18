import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokecard',
  templateUrl: './pokecard.component.html',
  styleUrls: ['./pokecard.component.css']
})
export class PokecardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }
  longText = "Capable of copying an enemy's genetic code to instantly transform itself into a duplicate of the enemy.";

}
