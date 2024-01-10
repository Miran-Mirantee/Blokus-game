import CoordinatesArray from "@/app/types/CoordinatesArray";

const CreatePiece = {
  oneSquare: (x: number, y: number, value: number) => {
    return [[x, y, value]] as CoordinatesArray;
  },
  twoSquare: (x: number, y: number, value: number) => {
    return [
      [x, y, value],
      [x + 1, y, value],
    ] as CoordinatesArray;
  },
  threeSquare: (x: number, y: number, value: number) => {
    return [
      [x, y, value],
      [x - 1, y, value],
      [x + 1, y, value],
    ] as CoordinatesArray;
  },
  threeSquare2: (x: number, y: number, value: number) => {
    return [
      [x, y, value],
      [x - 1, y, value],
      [x, y - 1, value],
    ] as CoordinatesArray;
  },
  fourSquare: (x: number, y: number, value: number) => {
    return [
      [x, y, value],
      [x - 1, y, value],
      [x + 1, y, value],
      [x + 2, y, value],
    ] as CoordinatesArray;
  },
  fourSquare2: (x: number, y: number, value: number) => {
    return [
      [x, y, value],
      [x - 1, y, value],
      [x + 1, y, value],
      [x + 1, y + 1, value],
    ] as CoordinatesArray;
  },
  fourSquare3: (x: number, y: number, value: number) => {
    return [
      [x, y, value],
      [x - 1, y, value],
      [x + 1, y, value],
      [x, y - 1, value],
    ] as CoordinatesArray;
  },
  fourSquare4: (x: number, y: number, value: number) => {
    return [
      [x, y, value],
      [x + 1, y, value],
      [x, y - 1, value],
      [x + 1, y - 1, value],
    ] as CoordinatesArray;
  },
  fourSquare5: (x: number, y: number, value: number) => {
    return [
      [x, y, value],
      [x + 1, y, value],
      [x + 1, y - 1, value],
      [x, y + 1, value],
    ] as CoordinatesArray;
  },
  fiveSquare: (x: number, y: number, value: number) => {
    return [
      [x, y, value],
      [x - 1, y, value],
      [x - 2, y, value],
      [x + 1, y, value],
      [x + 2, y, value],
    ] as CoordinatesArray;
  },
  fiveSquare2: (x: number, y: number, value: number) => {
    return [
      [x, y, value],
      [x - 1, y, value],
      [x - 2, y, value],
      [x, y - 1, value],
      [x, y - 2, value],
    ] as CoordinatesArray;
  },
  fiveSquare3: (x: number, y: number, value: number) => {
    return [
      [x, y, value],
      [x - 1, y, value],
      [x, y - 1, value],
      [x + 1, y, value],
      [x + 2, y, value],
    ] as CoordinatesArray;
  },
  fiveSquare4: (x: number, y: number, value: number) => {
    return [
      [x, y, value],
      [x - 1, y, value],
      [x - 2, y, value],
      [x + 1, y, value],
      [x + 1, y + 1, value],
    ] as CoordinatesArray;
  },
  fiveSquare5: (x: number, y: number, value: number) => {
    return [
      [x, y, value],
      [x - 1, y, value],
      [x - 1, y + 1, value],
      [x, y - 1, value],
      [x + 1, y - 1, value],
    ] as CoordinatesArray;
  },
  fiveSquare6: (x: number, y: number, value: number) => {
    return [
      [x, y, value],
      [x - 1, y, value],
      [x + 1, y, value],
      [x, y + 1, value],
      [x, y - 1, value],
    ] as CoordinatesArray;
  },
  fiveSquare7: (x: number, y: number, value: number) => {
    return [
      [x, y, value],
      [x - 1, y, value],
      [x - 1, y + 1, value],
      [x, y - 1, value],
      [x, y - 2, value],
    ] as CoordinatesArray;
  },
  fiveSquare8: (x: number, y: number, value: number) => {
    return [
      [x, y, value],
      [x, y + 1, value],
      [x - 1, y + 1, value],
      [x, y - 1, value],
      [x + 1, y - 1, value],
    ] as CoordinatesArray;
  },
  fiveSquare9: (x: number, y: number, value: number) => {
    return [
      [x, y, value],
      [x, y - 1, value],
      [x + 1, y, value],
      [x, y + 1, value],
      [x - 1, y + 1, value],
    ] as CoordinatesArray;
  },
  fiveSquare10: (x: number, y: number, value: number) => {
    return [
      [x, y, value],
      [x, y - 1, value],
      [x, y + 1, value],
      [x - 1, y + 1, value],
      [x - 1, y, value],
    ] as CoordinatesArray;
  },
  fiveSquare11: (x: number, y: number, value: number) => {
    return [
      [x, y, value],
      [x, y - 1, value],
      [x + 1, y - 1, value],
      [x, y + 1, value],
      [x + 1, y + 1, value],
    ] as CoordinatesArray;
  },
  fiveSquare12: (x: number, y: number, value: number) => {
    return [
      [x, y, value],
      [x - 1, y, value],
      [x + 1, y, value],
      [x + 1, y - 1, value],
      [x + 1, y + 1, value],
    ] as CoordinatesArray;
  },
};

export default CreatePiece;
