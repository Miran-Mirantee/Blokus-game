import { Matrix } from "ts-matrix";
import Player from "./Player";
import GameLogic from "../logicComponents/GameLogic";
import CoordinatesArray from "@/app/types/CoordinatesArray";
import CreatePiece from "../logicComponents/CreatePiece";
import CreateSquareCallback from "@/app/types/CreateSquareCallback";
import RotatePiece from "../logicComponents/RotatePiece";
import FlipPiece from "../logicComponents/FlipPiece";

class Game {
  private static instance: Game | null = null;

  players: Player[];
  currentPlayer: Player | null;
  board: number[][];
  roundCount: number;
  firstPlayer: Player | null;
  playerOrder: String[];

  private constructor() {
    this.players = [];
    this.board = this.createBoard();
    this.currentPlayer = null;
    this.roundCount = 1;
    this.firstPlayer = null;
    this.playerOrder = [];
  }

  public static getInstance(): Game {
    if (!Game.instance) {
      Game.instance = new Game();
    }
    return Game.instance;
  }

  public setBoard(board: number[][]): void {
    this.board = board;
    if (this.currentPlayer) {
      console.log(this.isGameOver(this.currentPlayer));
      console.log(this.currentPlayer);
    }
  }

  public setPlayers(players: Player[]): void {
    this.players = players;
  }

  public changeTurn(): void {
    console.log("changing turn");
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
    this.players.map((player: Player) => {
      player.isPlayerTurn = false;
    });
    this.players[0].isPlayerTurn = true;
    this.firstPlayer = this.players[0];
    this.currentPlayer = this.firstPlayer;
    this.roundCount = 1;
    this.playerOrder = [];
    this.players.map((player) => {
      this.playerOrder.push(player.name);
    });
  }

  // events happen after player place a blokus piece
  public playerPlaceBlokus(blokusPiece: string): void {
    // will have a problem in the future for sure
    // update a placed blokus piece status
    if (this.currentPlayer) {
      this.currentPlayer.pieces[blokusPiece].isUsed = true;
    }
    // change current player turn
    this.changeTurn();
  }

  public isGameOver(player: Player): boolean {
    const pieceKeys = Object.entries(player.pieces)
      .filter(([_, value]) => value.isUsed === false)
      .map(([key, _]) => key) as Array<keyof typeof CreatePiece>;
    console.log("pieceKeys", pieceKeys);
    // Iterate through each piece of the player
    for (const pieceKey of pieceKeys) {
      // Iterate through each cell of the piece
      for (let x = 0; x < 20; x++) {
        for (let y = 0; y < 20; y++) {
          // check if the blokus piece is placable
          // console.log("x", x, "y", y);
          // console.log("selected", pieceKey);
          for (let rotate = 0; rotate < 4; rotate++) {
            for (let flip = 0; flip < 2; flip++) {
              // Retrieve the appropriate CreateSquare function based on the id
              const createSquareFunction = CreatePiece[
                pieceKey
              ] as CreateSquareCallback;
              // console.log("flip", flip, "rotate", rotate);

              const coordinates: CoordinatesArray = createSquareFunction(
                x,
                y,
                player.num
              );
              const rotatedCoordinates: CoordinatesArray = RotatePiece(
                coordinates,
                rotate
              );
              const flippedRotatedCoordinates: CoordinatesArray = FlipPiece(
                rotatedCoordinates,
                flip
              );

              // if (!GameLogic.isOutOfBound(flippedRotatedCoordinates)) {
              //   console.log("??1");
              //   return true;
              // }

              // // check if the blokus piece is overlapping another piece
              // if (!GameLogic.isOverlap(board, flippedRotatedCoordinates)) {
              //   console.log("??2");
              //   return true;
              // }

              // check if the blokus piece is placeable according to game rules

              if (!GameLogic.isOutOfBound(flippedRotatedCoordinates)) {
                // console.log("??3");
                if (
                  !GameLogic.isOverlap(this.board, flippedRotatedCoordinates)
                ) {
                  // console.log("??2");
                  if (
                    GameLogic.isPlaceable(
                      this.board,
                      flippedRotatedCoordinates,
                      this.roundCount == 1
                    )
                  ) {
                    // console.log("??1");
                    return true;
                  }
                  break;
                  // return false;
                }
                break;
                // return false;
              }

              // if (!GameLogic.isOverlap(this.board, flippedRotatedCoordinates)) {
              //   console.log("??2");
              //   return true;
              // }
              // if (!GameLogic.isOutOfBound(flippedRotatedCoordinates)) {
              //   console.log("??1");
              //   return true;
              // }
            }
          }
        }
      }
    }
    return false;
  }
}

export default Game;
