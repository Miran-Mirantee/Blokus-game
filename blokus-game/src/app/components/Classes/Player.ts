import BlokusPieces from "@/app/types/BlokusPieces";

class Player {
  name: string;
  color: string;
  num: number;
  pieces: BlokusPieces;
  isPlayerTurn: boolean;

  constructor(name: string, color: string, num: number) {
    this.name = name;
    this.color = color;
    this.num = num;
    this.pieces = {
      oneSquare: { squares: 1, isUsed: false },
      twoSquare: { squares: 2, isUsed: false },
      threeSquare: { squares: 3, isUsed: false },
      threeSquare2: { squares: 3, isUsed: false },
      fourSquare: { squares: 4, isUsed: false },
      fourSquare2: { squares: 4, isUsed: false },
      fourSquare3: { squares: 4, isUsed: false },
      fourSquare4: { squares: 4, isUsed: false },
      fourSquare5: { squares: 4, isUsed: false },
      fiveSquare: { squares: 5, isUsed: false },
      fiveSquare2: { squares: 5, isUsed: false },
      fiveSquare3: { squares: 5, isUsed: false },
      fiveSquare4: { squares: 5, isUsed: false },
      fiveSquare5: { squares: 5, isUsed: false },
      fiveSquare6: { squares: 5, isUsed: false },
      fiveSquare7: { squares: 5, isUsed: false },
      fiveSquare8: { squares: 5, isUsed: false },
      fiveSquare9: { squares: 5, isUsed: false },
      fiveSquare10: { squares: 5, isUsed: false },
      fiveSquare11: { squares: 5, isUsed: false },
      fiveSquare12: { squares: 5, isUsed: false },
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
