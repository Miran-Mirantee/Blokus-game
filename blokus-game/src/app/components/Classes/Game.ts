import { Matrix } from "ts-matrix";
import Player from "./Player";

class Game {
  private static instance: Game | null = null;

  players: Player[];
  currentPlayer: Player | null;
  board: number[][];
  isFirstRound: boolean;

  private constructor(players: Player[]) {
    this.players = players;
    this.board = this.createBoard();
    this.currentPlayer = null;
    this.isFirstRound = true;
  }

  public static getInstance(players: Player[]): Game {
    if (!Game.instance) {
      Game.instance = new Game(players);
    }
    return Game.instance;
  }

  public setBoard(board: number[][]): void {
    this.board = board;
  }

  public changeTurn(): void {
    const prevPlayer = this.players.shift();
    console.log(this.players);
    // console.log("prevPlayer", prevPlayer);
    prevPlayer?.togglePlayerTurn();
    this.players[0].togglePlayerTurn();
    if (prevPlayer) {
      this.players.push(prevPlayer);
    }
    this.currentPlayer = this.players[0];
  }

  public createBoard(): number[][] {
    return new Matrix(20, 20).values;
  }

  public gameStart(): void {
    this.board = this.createBoard();
    this.players[0].isPlayerTurn = true;
    this.currentPlayer = this.players[0];
    this.isFirstRound = true;
  }

  public playerPlaceBlokus(blokusPiece: string): void {
    // will have a problem in the future for sure
    if (this.currentPlayer) {
      this.currentPlayer.pieces[blokusPiece].isUsed = true;
    }
    this.changeTurn();
  }
}

// const player1 = new Player("nu_ko", "red", 1);
// const player2 = new Player("mirantee", "blue", 2);
// const gameInstance = Game.getInstance([player1, player2]);
export default Game;
