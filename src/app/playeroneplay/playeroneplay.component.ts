import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-playeroneplay',
  templateUrl: './playeroneplay.component.html',
  styleUrls: ['./playeroneplay.component.css']
})
export class PlayeroneplayComponent implements OnInit {

  @Input() secondPlayerCarrierPosition: string[];
  @Input() secondPlayerFrigatePosition: string[];
  @Input() secondPlayerCruiserPosition: string[];
  @Input() secondPlayerSubmarinePosition: string[];
  @Input() secondPlayerDestroyerPosition: string[];

  firstPlayerHit: string[] = [];
  firstPlayerMiss: string[] = [];

  constructor() { }

  playerOneStrike (firstPlayerStrike: string) {
    if (this.secondPlayerCarrierPosition.includes(firstPlayerStrike)) {
      this.firstPlayerHit.push(firstPlayerStrike);
    } else if (this.secondPlayerFrigatePosition.includes(firstPlayerStrike)) {
      this.firstPlayerHit.push(firstPlayerStrike);
    } else if (this.secondPlayerCruiserPosition.includes(firstPlayerStrike)) {
      this.firstPlayerHit.push(firstPlayerStrike);
    } else if (this.secondPlayerSubmarinePosition.includes(firstPlayerStrike)) {
      this.firstPlayerHit.push(firstPlayerStrike);
    } else if (this.secondPlayerDestroyerPosition.includes(firstPlayerStrike)) {
      this.firstPlayerHit.push(firstPlayerStrike);
    } else {
      this.firstPlayerMiss.push(firstPlayerStrike);
    }
    console.log(this.firstPlayerHit);
  }

  playerOneStrikeSignal (playerOneGridStrikeValue: string) {
    if (this.firstPlayerHit.includes(playerOneGridStrikeValue)) {
      return 'hit';
    } else if (this.firstPlayerMiss.includes(playerOneGridStrikeValue)) {
      return 'miss';
    } else {
      return 'noClass';
    }
  }

  ngOnInit() {
  }

}