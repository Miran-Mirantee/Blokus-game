import { Matrix } from "ts-matrix";
import Player from "./Player";

class Game {
  private static instance: Game | null = null;

  players: Player[];
  currentPlayer: Player | null;
  board: number[][];
  roundCount: number;
  firstPlayer: Player | null;

  private constructor(players: Player[]) {
    this.players = players;
    this.board = this.createBoard();
    this.currentPlayer = null;
    this.roundCount = 1;
    this.firstPlayer = null;
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
    prevPlayer?.togglePlayerTurn();
    this.players[0].togglePlayerTurn();
    if (prevPlayer) {
      this.players.push(prevPlayer);
    }
    this.currentPlayer = this.players[0];
    if (this.firstPlayer == this.currentPlayer) {
      this.roundCount++;
    }
  }

  public createBoard(): number[][] {
    return new Matrix(20, 20).values;
  }

  public gameStart(): void {
    this.board = this.createBoard();
    this.players[0].isPlayerTurn = true;
    this.firstPlayer = this.players[0];
    this.currentPlayer = this.firstPlayer;
    this.roundCount = 1;
  }

  public playerPlaceBlokus(blokusPiece: string): void {
    // will have a problem in the future for sure
    if (this.currentPlayer) {
      this.currentPlayer.pieces[blokusPiece].isUsed = true;
    }
    this.changeTurn();
  }
}

export default Game;
