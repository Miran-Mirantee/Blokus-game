import { Matrix } from "ts-matrix";
import Player from "./Player";

class Game {
  private static instance: Game | null = null;

  //   players: Player[];
  players: any;
  board: number[][];

  private constructor(players: Player[]) {
    this.players = players;
    this.board = new Matrix(20, 20).values;
  }

  //   public static getInstance(players: Player[]): Game {
  public static getInstance(players: any): Game {
    if (!Game.instance) {
      Game.instance = new Game(players);
    }

    return Game.instance;
  }

  public setBoard(board: number[][]): void {
    this.board = board;
  }
}

export default Game;
