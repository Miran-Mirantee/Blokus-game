import CoordinatesArray from "@/app/types/CoordinatesArray";

// Function to rotate a 2D array clockwise
const RotatePiece = (
  array: CoordinatesArray,
  totalRotateCount: number
): CoordinatesArray => {
  const pivot = array[0];
  const rotatedArray: any = [];
  const rotateCount: number = totalRotateCount % 4;

  if (rotateCount == 1) {
    array.forEach((coordinate) => {
      rotatedArray.push([
        (coordinate[1] - pivot[1]) * -1 + pivot[0],
        (coordinate[0] - pivot[0]) * 1 + pivot[1],
        coordinate[2],
      ]);
    });
  } else if (rotateCount == 2) {
    array.forEach((coordinate) => {
      rotatedArray.push([
        (coordinate[0] - pivot[0]) * -1 + pivot[0],
        (coordinate[1] - pivot[1]) * -1 + pivot[1],
        coordinate[2],
      ]);
    });
  } else if (rotateCount == 3) {
    array.forEach((coordinate) => {
      rotatedArray.push([
        (coordinate[1] - pivot[1]) * 1 + pivot[0],
        (coordinate[0] - pivot[0]) * -1 + pivot[1],
        coordinate[2],
      ]);
    });
  } else if (rotateCount == 0) {
    array.forEach((coordinate) => {
      rotatedArray.push([
        (coordinate[0] - pivot[0]) * 1 + pivot[0],
        (coordinate[1] - pivot[1]) * 1 + pivot[1],
        coordinate[2],
      ]);
    });
  }
  return rotatedArray;
};

export default RotatePiece;

// const RotatePiece = (array: CoordinatesArray): CoordinatesArray => {
//   const pivot = array[0];
//   const angle = 90;
//   const clockwise = true;
//   const rotatedArray: any = [];

//   const cosTheta = clockwise ? Math.cos(angle) : Math.cos(-angle);
//   const sinTheta = clockwise ? Math.sin(angle) : Math.sin(-angle);

//   array.forEach((coordinate) => {
//     const x = coordinate[0] - pivot[0];
//     const y = coordinate[1] - pivot[1];

//     const newX = x * cosTheta - y * sinTheta + pivot[0];
//     const newY = x * sinTheta + y * cosTheta + pivot[1];

//     rotatedArray.push([newX, newY, coordinate[2]]);
//   });

//   return rotatedArray;
// };

// export default RotatePiece;

// Example usage:
// const originalArray = /* your original array */;
// const pivotPoint = /* your pivot point */;
// const rotatedArrayClockwise = rotateCoordinates(originalArray, pivotPoint, Math.PI / 2, true);
// const rotatedArrayCounterClockwise = rotateCoordinates(originalArray, pivotPoint, Math.PI / 2, false);
