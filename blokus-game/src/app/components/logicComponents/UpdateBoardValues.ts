import CoordinatesArray from "@/app/types/CoordinatesArray";
import CreatePiece from "./CreatePiece";

type CreateSquareCallback = (
  x: number,
  y: number,
  value: number
) => CoordinatesArray;

const UpdateBoardValues = (
  x: number,
  y: number,
  value: number,
  board: number[][],
  createSquareId: keyof typeof CreatePiece
  //   callback: (x: number, y: number, value: number) => CoordinatesArray
) => {
  let updatedBoard = [...board]; // Assuming board is your original array
  //   const coordinates: CoordinatesArray = callback(x, y, value);
  if (createSquareId in CreatePiece == false) {
    return updatedBoard;
  }
  // Retrieve the appropriate CreateSquare function based on the id
  const createSquareFunction = CreatePiece[
    createSquareId
  ] as CreateSquareCallback;

  // Call the callback function with the necessary parameters
  const coordinates: CoordinatesArray = createSquareFunction(x, y, value);

  coordinates.forEach(([x, y, newValue]: [number, number, number]) => {
    updatedBoard = updatedBoard.map((row, cIndex) => {
      if (cIndex === y) {
        return row.map((value, rIndex) => (rIndex === x ? newValue : value));
      }
      return row;
    });
  });

  return updatedBoard;
};

export default UpdateBoardValues;
