import CoordinatesArray from "@/app/types/CoordinatesArray";

const UpdateBoardValues = (
  x: number,
  y: number,
  value: number,
  board: number[][],
  callback: (x: number, y: number, value: number) => CoordinatesArray
) => {
  let updatedBoard = [...board]; // Assuming board is your original array
  const coordinates: CoordinatesArray = callback(x, y, value);

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
