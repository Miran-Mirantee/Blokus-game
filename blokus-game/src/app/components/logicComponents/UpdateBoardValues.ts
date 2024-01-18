import CoordinatesArray from "@/app/types/CoordinatesArray";
import CreateSquareCallback from "@/app/types/CreateSquareCallback";
import CreatePiece from "./CreatePiece";
import RotatePiece from "./RotatePiece";
import GameLogic from "./GameLogic";

const UpdateBoardValues = (
  x: number,
  y: number,
  value: number,
  board: number[][],
  createSquareId: keyof typeof CreatePiece,
  rotateCount: number,
  resetCallback: any
) => {
  let updatedBoard = [...board]; // Assuming board is your original array

  // in case the piece id doesn't match any id at all (which is impossible of course)
  if (createSquareId in CreatePiece == false) {
    return updatedBoard;
  }

  // Retrieve the appropriate CreateSquare function based on the id
  const createSquareFunction = CreatePiece[
    createSquareId
  ] as CreateSquareCallback;

  // Call the callback function with the necessary parameters
  const coordinates: CoordinatesArray = createSquareFunction(x, y, value);
  const rotatedCoordinates: CoordinatesArray = RotatePiece(
    coordinates,
    rotateCount
  );

  // check if the blokus piece is placable
  if (!GameLogic.isPlacable(rotatedCoordinates)) {
    return updatedBoard;
  }

  // place a blokus piece on board
  rotatedCoordinates.forEach(([x, y, newValue]: [number, number, number]) => {
    updatedBoard = updatedBoard.map((row, cIndex) => {
      if (cIndex === y) {
        return row.map((value, rIndex) => (rIndex === x ? newValue : value));
      }
      return row;
    });
  });

  resetCallback();
  return updatedBoard;
};

export default UpdateBoardValues;
