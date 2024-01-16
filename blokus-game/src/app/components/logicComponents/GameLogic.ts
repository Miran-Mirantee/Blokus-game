import CoordinatesArray from "@/app/types/CoordinatesArray";

const GameLogic = {
  isPlacable: (coordinates: CoordinatesArray) => {
    let result = true;
    coordinates.forEach((coordinate) => {
      if (coordinate[0] < 0 || coordinate[0] > 19) {
        result = false;
      }
      if (coordinate[1] < 0 || coordinate[1] > 19) {
        result = false;
      }
    });
    return result;
  },
};

export default GameLogic;
