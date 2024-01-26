import { Matrix } from "ts-matrix";
import Player from "./Player";

class Game {
  private static instance: Game | null = null;

  players: Player[];
  currentPlayer: Player | null;
  board: number[][];
  roundCount: number;
  firstPlayer: Player | null;
  playerOrder: String[];

  private constructor(players: Player[]) {
    this.players = players;
    this.board = this.createBoard();
    this.currentPlayer = null;
    this.roundCount = 1;
    this.firstPlayer = null;
    this.playerOrder = [];
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
    const prevPlayerName = this.playerOrder.shift();
    const prevPlayer = this.players.find(
      (player) => player.name === prevPlayerName
    );
    const currentPlayerName = this.playerOrder[0];
    const currentPlayer = this.players.find(
      (player) => player.name === currentPlayerName
    );
    prevPlayer?.togglePlayerTurn();
    currentPlayer?.togglePlayerTurn();
    if (prevPlayerName) {
      this.playerOrder.push(prevPlayerName);
    }
    if (currentPlayer) {
      this.currentPlayer = currentPlayer;
    }

    // end one round
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
    this.playerOrder = [];
    this.players.map((player) => {
      this.playerOrder.push(player.name);
    });
  }

  public playerPlaceBlokus(blokusPiece: string): void {
    // will have a problem in the future for sure
    console.log(this.currentPlayer);
    if (this.currentPlayer) {
      this.currentPlayer.pieces[blokusPiece].isUsed = true;
    }
    this.changeTurn();
  }
}

export default Game;
