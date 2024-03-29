import CoordinatesArray from "@/app/types/CoordinatesArray";

const GameLogic = {
  // check if the piece is out of bound
  isOutOfBound: (coordinates: CoordinatesArray) => {
    let result = false;
    coordinates.forEach((coordinate) => {
      if (coordinate[0] < 0 || coordinate[0] > 19) {
        result = true;
      }
      if (coordinate[1] < 0 || coordinate[1] > 19) {
        result = true;
      }
    });
    return result;
  },
  // check if the piece is on top of each other
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
  isPlaceable: (
    board: number[][],
    coordinates: CoordinatesArray,
    isFirstRound: boolean
  ) => {
    const isValidCoordinate = (x: number, y: number) =>
      x >= 0 && y >= 0 && x < board[0].length && y < board.length;

    // if first round, check if player place blokus piece on corner
    if (isFirstRound) {
      const boardCorners = [
        [0, 0],
        [0, 19],
        [19, 0],
        [19, 19],
      ];
      for (const [x, y] of coordinates) {
        if (boardCorners.some(([cx, cy]) => cx === x && cy === y)) {
          return true;
        }
      }
      return false;
    } else {
      // check neighbors
      // if 'self' value is found in neighbors, then return 'false'
      for (const [x, y, self] of coordinates) {
        const neighbors = [
          [x, y - 1], // top
          [x, y + 1], // bottom
          [x + 1, y], // right
          [x - 1, y], // left
        ];

        for (const [nx, ny] of neighbors) {
          if (isValidCoordinate(nx, ny) && board[ny][nx] === self) {
            return false;
          }
        }
      }

      // check corners
      // if 'self' value is found in corners, then return 'true'
      for (const [x, y, self] of coordinates) {
        const corners = [
          [x + 1, y - 1], // top right
          [x - 1, y - 1], // top left
          [x + 1, y + 1], // bottom right
          [x - 1, y + 1], // bottom left
        ];
        for (const [nx, ny] of corners) {
          if (isValidCoordinate(nx, ny) && board[ny][nx] === self) {
            return true;
          }
        }
      }

      // didn't meet criterias
      return false;
    }
  },
};

export default GameLogic;
