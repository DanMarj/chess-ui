import { Component, OnInit, SimpleChanges } from '@angular/core';
import { Input } from '@angular/core';

export interface tile {
  name: string;
  occupiedBy: string;
  color: string;
  pieceColor: string;
}

export const RANK_NAMES = ["1","2","3","4","5","6","7","8"];
export const FILE_NAMES = ["a","b","c","d","e","f","g","h"];

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  @Input() enteredMove: string = '';

  board: tile[][];

  constructor() {
    let ret: tile[][] = [[],[],[],[],[],[],[],[]];
    for(let rank = 0; rank < 8; rank++) {
      for(let file = 0; file < 8; file++) {
        const tile = {
          name: FILE_NAMES[file] + RANK_NAMES[rank],
          occupiedBy: "",
          pieceColor: "",
          color: ((rank+file) % 2 == 0) ? "light" : "dark",
        } as tile;
        ret[rank][file] = tile;
      }
    }
    this.board = ret;
  }

  ngOnInit(): void {
    this.setInitialPiecePlacement();
  }

  ngOnChanges(changes: SimpleChanges) {
    if(changes['enteredMove']) {
      console.log("found new move on board: ", changes['enteredMove']);
      this.parseMoveString(changes['enteredMove'].currentValue);
    }
  }
  
  public setPiecePlacement(rank:number, file:number, piece:string, pieceColor:string) {
    this.board[rank][file] = {
      ...this.board[rank][file],
      occupiedBy: piece,
      pieceColor: pieceColor,
    } as tile;
  }

  public setInitialPiecePlacement() {
    this.setPiecePlacement(0,0,"Rook", "White");
    this.setPiecePlacement(0,1,"Knight", "White");
    this.setPiecePlacement(0,2,"Bishop", "White");
    this.setPiecePlacement(0,3,"King", "White");
    this.setPiecePlacement(0,4,"Queen", "White");
    this.setPiecePlacement(0,5,"Bishop", "White");
    this.setPiecePlacement(0,6,"Knight", "White");
    this.setPiecePlacement(0,7,"Rook", "White");

    this.setPiecePlacement(7,0,"Rook", "Black");
    this.setPiecePlacement(7,1,"Knight", "Black");
    this.setPiecePlacement(7,2,"Bishop", "Black");
    this.setPiecePlacement(7,3,"King", "Black");
    this.setPiecePlacement(7,4,"Queen", "Black");
    this.setPiecePlacement(7,5,"Bishop", "Black");
    this.setPiecePlacement(7,6,"Knight", "Black");
    this.setPiecePlacement(7,7,"Rook", "Black");

    for(let i = 0; i < 8; i++) {
      this.setPiecePlacement(1,i,"Pawn", "White");
      this.setPiecePlacement(6,i,"Pawn", "Black");
    }
  }

  // again, no validation so better type it right
  parseMoveString(moveString: string) {
    if(moveString.length == 2) {
      
    }
  }
}
