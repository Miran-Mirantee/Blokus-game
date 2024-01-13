import CoordinatesArray from "@/app/types/CoordinatesArray";

// Function to rotate a 2D array clockwise
const RotatePiece = (array: CoordinatesArray): CoordinatesArray => {
  const rows = array.length;
  const cols = array[0].length;

  // Transpose the array
  const transposedArray: CoordinatesArray = Array.from(
    { length: cols },
    (_, i) => Array.from({ length: rows }, (_, j) => array[j][i])
  );

  // Reverse each row to get the clockwise rotation
  const rotatedArray: CoordinatesArray = transposedArray.map((row) =>
    row.reverse()
  );

  return rotatedArray;
};

export default RotatePiece;

// Example usage:
// const originalArray = CreatePiece.twoSquare(0, 0, 1);
// console.log("Original Array:");
// console.log(originalArray);

// const rotatedArray = RotatePiece(originalArray);
// console.log("Rotated Array (Clockwise):");
// console.log(rotatedArray);
