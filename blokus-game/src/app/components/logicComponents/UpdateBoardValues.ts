import CoordinatesArray from "@/app/types/CoordinatesArray";
import CreateSquareCallback from "@/app/types/CreateSquareCallback";
import CreatePiece from "./CreatePiece";
import RotatePiece from "./RotatePiece";
import GameLogic from "./GameLogic";
import Game from "../Classes/Game";
import FlipPiece from "./FlipPiece";

const UpdateBoardValues = (
  x: number,
  y: number,
  value: number,
  game: Game,
  createSquareId: keyof typeof CreatePiece,
  rotateCount: number,
  flipCount: number,
  resetRotateCallback: any,
  resetFlipCallback: any,
  disablePlacementCallback: any
) => {
  let updatedBoard = [...game.board]; // Assuming board is your original array

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
  const flippedRotatedCoordinates: CoordinatesArray = FlipPiece(
    rotatedCoordinates,
    flipCount
  );

  // check if the blokus piece is placable
  if (GameLogic.isOutOfBound(flippedRotatedCoordinates)) {
    return updatedBoard;
  }

  // check if the blokus piece is overlapping another piece
  if (GameLogic.isOverlap(updatedBoard, flippedRotatedCoordinates)) {
    return updatedBoard;
  }

  // check if the blokus piece is placeable according to game rules
  if (
    !GameLogic.isPlaceable(
      updatedBoard,
      flippedRotatedCoordinates,
      game.roundCount == 1
    )
  ) {
    return updatedBoard;
  }

  // place a blokus piece on board
  flippedRotatedCoordinates.forEach(
    ([x, y, newValue]: [number, number, number]) => {
      updatedBoard = updatedBoard.map((row, cIndex) => {
        if (cIndex === y) {
          return row.map((value, rIndex) => (rIndex === x ? newValue : value));
        }
        return row;
      });
    }
  );

  game.playerPlaceBlokus(createSquareId);
  resetRotateCallback();
  resetFlipCallback();
  disablePlacementCallback();
  return updatedBoard;
};

export default UpdateBoardValues;
