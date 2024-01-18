import CoordinatesArray from "@/app/types/CoordinatesArray";

const GameLogic = {
  isPlacable: (coordinates: CoordinatesArray) => {
    let result = true;
    coordinates.forEach((coordinate) => {
      if (coordinate[0] < 0 || coordinate[0] > 19) {
        result = false;
      }
      if (coordinate[1] < 0 || coordinate[1] > 19) {
        result = false;
      }
    });
    return result;
  },
  isOverlap: (board: number[][], coordinates: CoordinatesArray) => {
    for (const coordinate of coordinates) {
      const x = coordinate[0];
      const y = coordinate[1];
      // "y" go first, you idiot.
      // can't believe I stuck onto this stupid problem for HOUR!!!!
      if (board[y][x]) {
        return true;
      }
    }
    return false;
  },
};

export default GameLogic;
