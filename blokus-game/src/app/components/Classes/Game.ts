import { Matrix } from "ts-matrix";
import Player from "./Player";

class Game {
  private static instance: Game | null = null;

  players: Player[];
  // players: any;
  board: number[][];

  private constructor(players: Player[]) {
    this.players = players;
    this.board = this.createBoard();
  }

  // public static getInstance(players: Player[]): Game {
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
    const prevPlayer = this.players.pop();
    prevPlayer?.togglePlayerTurn();
    this.players[0].togglePlayerTurn();
    if (prevPlayer) {
      this.players.push(prevPlayer);
    }
  }

  public createBoard(): number[][] {
    return new Matrix(20, 20).values;
  }

  public gameStart(): void {
    this.board = this.createBoard();
    this.players[0].isPlayerTurn = true;
  }

  public playerPlaceBlokus(player: Player, blokusPiece: string): void {
    // will have a problem in the future for sure
    player.pieces[blokusPiece].isUsed = true;
    this.changeTurn();
  }
}

export default Game;
