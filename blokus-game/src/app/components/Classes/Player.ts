import BlokusPieces from "@/app/types/BlokusPieces";

class Player {
  name: string;
  num: number;
  pieces: BlokusPieces;
  isPlayerTurn: boolean;

  constructor(name: string, num: number) {
    this.name = name;
    this.num = num;
    this.pieces = {
      oneSquare: {
        squares: 1,
        isUsed: false,
        width: 1,
        height: 1,
        offset: { x: 0, y: 0 },
      },
      twoSquare: {
        squares: 2,
        isUsed: false,
        width: 2,
        height: 1,
        offset: { x: -1, y: 0 },
      },
      threeSquare: {
        squares: 3,
        isUsed: false,
        width: 3,
        height: 1,
        offset: { x: 0, y: 0 },
      },
      threeSquare2: {
        squares: 3,
        isUsed: false,
        width: 2,
        height: 2,
        offset: { x: 1, y: 1 },
      },
      fourSquare: {
        squares: 4,
        isUsed: false,
        width: 4,
        height: 1,
        offset: { x: -1, y: 0 },
      },
      fourSquare2: {
        squares: 4,
        isUsed: false,
        width: 3,
        height: 2,
        offset: { x: 0, y: -1 },
      },
      fourSquare3: {
        squares: 4,
        isUsed: false,
        width: 3,
        height: 2,
        offset: { x: 0, y: 1 },
      },
      fourSquare4: {
        squares: 4,
        isUsed: false,
        width: 2,
        height: 2,
        offset: { x: -1, y: 1 },
      },
      fourSquare5: {
        squares: 4,
        isUsed: false,
        width: 2,
        height: 3,
        offset: { x: -1, y: 0 },
      },
      fiveSquare: {
        squares: 5,
        isUsed: false,
        width: 5,
        height: 1,
        offset: { x: 0, y: 0 },
      },
      fiveSquare2: {
        squares: 5,
        isUsed: false,
        width: 3,
        height: 3,
        offset: { x: 2, y: 2 },
      },
      fiveSquare3: {
        squares: 5,
        isUsed: false,
        width: 4,
        height: 2,
        offset: { x: -1, y: 1 },
      },
      fiveSquare4: {
        squares: 5,
        isUsed: false,
        width: 4,
        height: 2,
        offset: { x: 1, y: -1 },
      },
      fiveSquare5: {
        squares: 5,
        isUsed: false,
        width: 3,
        height: 3,
        offset: { x: 0, y: 0 },
      },
      fiveSquare6: {
        squares: 5,
        isUsed: false,
        width: 3,
        height: 3,
        offset: { x: 0, y: 0 },
      },
      fiveSquare7: {
        squares: 5,
        isUsed: false,
        width: 2,
        height: 4,
        offset: { x: 1, y: 1 },
      },
      fiveSquare8: {
        squares: 5,
        isUsed: false,
        width: 3,
        height: 3,
        offset: { x: 0, y: 0 },
      },
      fiveSquare9: {
        squares: 5,
        isUsed: false,
        width: 3,
        height: 3,
        offset: { x: 0, y: 0 },
      },
      fiveSquare10: {
        squares: 5,
        isUsed: false,
        width: 2,
        height: 3,
        offset: { x: 1, y: 0 },
      },
      fiveSquare11: {
        squares: 5,
        isUsed: false,
        width: 2,
        height: 3,
        offset: { x: -1, y: 0 },
      },
      fiveSquare12: {
        squares: 5,
        isUsed: false,
        width: 3,
        height: 3,
        offset: { x: 0, y: 0 },
      },
    };
    this.isPlayerTurn = false;
  }

  togglePlayerTurn() {
    this.isPlayerTurn = !this.isPlayerTurn;
  }

  placeBlokusPiece(selectPiece: string) {
    this.pieces[selectPiece].isUsed = true;
    this.isPlayerTurn = false;
  }

  calculateScore() {
    let score: number = 0;
    Object.keys(this.pieces).forEach((key) => {
      if (!this.pieces[key].isUsed) {
        score += this.pieces[key].squares;
      }
    });
    return score;
  }
}

export default Player;
