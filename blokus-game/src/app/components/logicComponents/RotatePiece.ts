import CoordinatesArray from "@/app/types/CoordinatesArray";

// Function to rotate a 2D array clockwise
const RotatePiece = (
  array: CoordinatesArray,
  totalRotateCount: number
): CoordinatesArray => {
  const pivot = array[0];
  const rotatedArray: any = [];
  const rotateCount: number = totalRotateCount % 4;

  array.forEach((coordinate) => {
    switch (rotateCount) {
      case 1:
        rotatedArray.push([
          (coordinate[1] - pivot[1]) * -1 + pivot[0],
          (coordinate[0] - pivot[0]) * 1 + pivot[1],
          coordinate[2],
        ]);
        break;
      case 2:
        rotatedArray.push([
          (coordinate[0] - pivot[0]) * -1 + pivot[0],
          (coordinate[1] - pivot[1]) * -1 + pivot[1],
          coordinate[2],
        ]);
        break;
      case 3:
        rotatedArray.push([
          (coordinate[1] - pivot[1]) * 1 + pivot[0],
          (coordinate[0] - pivot[0]) * -1 + pivot[1],
          coordinate[2],
        ]);
        break;
      case 0:
        rotatedArray.push([
          (coordinate[0] - pivot[0]) * 1 + pivot[0],
          (coordinate[1] - pivot[1]) * 1 + pivot[1],
          coordinate[2],
        ]);
        break;
      default:
        break;
    }
  });
  return rotatedArray;
};

export default RotatePiece;
