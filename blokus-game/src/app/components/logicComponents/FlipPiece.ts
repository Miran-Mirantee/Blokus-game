import CoordinatesArray from "@/app/types/CoordinatesArray";

// Function to flip a 2D array horizontally
const FlipPiece = (array: CoordinatesArray, totalFlipCount: number) => {
  const pivot = array[0];
  const flippedArray: any = [];
  const flipCount: number = totalFlipCount % 2;

  array.forEach((coordinate) => {
    switch (flipCount) {
      case 1:
        flippedArray.push([
          (coordinate[0] - pivot[0]) * -1 + pivot[0],
          (coordinate[1] - pivot[1]) * 1 + pivot[1],
          coordinate[2],
        ]);
        break;
      case 0:
        flippedArray.push([
          (coordinate[0] - pivot[0]) * 1 + pivot[0],
          (coordinate[1] - pivot[1]) * 1 + pivot[1],
          coordinate[2],
        ]);
        break;
      default:
        break;
    }
  });
  return flippedArray;
};

export default FlipPiece;
