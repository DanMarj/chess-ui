import { Injectable } from '@angular/core';
import { Board } from 'src/app/board/board.component';

@Injectable({
  providedIn: 'root'
})
export class ValidateMoveService {

  constructor() { }

  public validateAndPerformMove(board: Board, move: string): Board {
    // use board state ("who's move") to determine if it must be a move for white or black
    if(board.whiteMove) {
      validateAndPerformWhiteMove();
    } else {

    }
    // use appropriate validator
    // perform move, returning new board state
    // whether check or checkmate is present on the board should be attached to the board object
    // returned
    // return new updated board, with black/white move updated
    return board;
  }

  /**
   * If bad move, throws InvalidMoveException (which I have to add, lol)
   * @param board 
   * @param move 
   * @returns 
   */
  public validateBlackMove(board: Board , move: string): boolean {
    // Is move legal, as the pieces move?

    // Was there check on the board, against black, before the move?
    // If so, is there no longer check after the move has been performed?

    // If all above is yes, valid move. Else not.
    return false;
  }

  validateWhiteMove() {}
}
