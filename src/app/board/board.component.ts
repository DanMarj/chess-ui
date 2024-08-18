import { Component, OnInit, SimpleChanges } from '@angular/core';
import { Input } from '@angular/core';

export interface tile {
  name: string;
  occupiedBy: string;
  color: string;
  pieceColor: string;
}

export interface Board {
  tiles: tile[][];
  whiteMove: boolean;
  checkPresent: boolean;
  checkmatePresent: boolean;
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
  fileMap: Map<String, number>;

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

    this.fileMap = new Map<string, number>();
    this.initializeFileMap();
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

  parseMoveString(moveString: string) {
    // If length of move is 2, it must be a pawn move
    // Change this to "begins with a letter", be it a file, an x, or a disambiguating file.
    if(moveString.length == 2) {
      this.validateAndPerformPawnMove(moveString);
    }
  }

  validateAndPerformPawnMove(moveString: string) {
    const rank = moveString.charAt(1);
    const file = moveString.charAt(0);
    const originRankIfSingleMove = (parseInt(rank)-2);
    if(this.board[originRankIfSingleMove][this.getArrayIndexForFile(file)].occupiedBy == "Pawn" && this.board[parseInt(rank)-1][this.getArrayIndexForFile(file)].occupiedBy == "") {
      console.log("valid move!");
      this.performPawnMove(originRankIfSingleMove.toString(), rank, file);
    } else {
      console.log("invalid move");
    }
  }

  getArrayIndexForFile(file:string): number {
    return this.fileMap.get(file) || -1;
  }

  initializeFileMap() {
    this.fileMap.set("a",0);
    this.fileMap.set("b",1);
    this.fileMap.set("c",2);
    this.fileMap.set("d",3);
    this.fileMap.set("e",4);
    this.fileMap.set("f",5);
    this.fileMap.set("g",6);
    this.fileMap.set("h",7);
  }

  performPawnMove(originRank: string, targetRank: string, file: string) {
    // add pawn in target square
    this.board[parseInt(targetRank)-1][this.fileMap.get(file) || -1 ] = {
      ...this.board[parseInt(targetRank) -1][this.fileMap.get(file) || -1],
      occupiedBy: "Pawn",
      pieceColor: this.board[parseInt(originRank)][this.fileMap.get(file) || -1].pieceColor,
    } as tile;
    // remove pawn from initial square
    this.board[parseInt(originRank)][this.fileMap.get(file) || -1] = {
      ...this.board[parseInt(originRank)][this.fileMap.get(file) || -1],
      occupiedBy: "",
      pieceColor: "",
    } as tile;
    console.log(this.board);
  }
}
