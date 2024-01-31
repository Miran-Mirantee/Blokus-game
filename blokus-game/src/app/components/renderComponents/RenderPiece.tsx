"use client";

import CreatePiece from "../logicComponents/CreatePiece";
import RotatePiece from "../logicComponents/RotatePiece";
import FlipPiece from "../logicComponents/FlipPiece";
import CoordinatesArray from "@/app/types/CoordinatesArray";
import CreateSquareCallback from "@/app/types/CreateSquareCallback";

interface ParentComponentProps {
  pieceId: keyof typeof CreatePiece;
  pieceRotateCount: number;
  pieceFlipCount: number;
  position: any;
  size?: number;
}

const RenderPiece = ({
  pieceId,
  pieceRotateCount,
  pieceFlipCount,
  position,
  size = 40, // Default value for size
}: ParentComponentProps) => {
  // in case the piece id doesn't match any id at all (which is impossible of course)
  if (pieceId in CreatePiece == false) {
    return <div>ERROR</div>;
  }

  // Retrieve the appropriate CreateSquare function based on the id
  const createSquareFunction = CreatePiece[pieceId] as CreateSquareCallback;

  const coordinates: CoordinatesArray = createSquareFunction(0, 0, 1);
  const rotatedCoordinates: CoordinatesArray = RotatePiece(
    coordinates,
    pieceRotateCount
  );
  const flippedRotatedCoordinates: CoordinatesArray = FlipPiece(
    rotatedCoordinates,
    pieceFlipCount
  );

  return (
    <div
      className="absolute pointer-events-none z-10"
      style={{
        // top: `calc(50% - ${size / 2}px)`,
        // left: `calc(50% - ${size / 2}px)`,
        top: `${position.y - size / 2}px`,
        left: `${position.x - size / 2}px`,
      }}
    >
      {flippedRotatedCoordinates.map((coordinate, index) => (
        <div
          key={index}
          className={`absolute bg-violet-300 opacity-50 border border-solid border-violet-500 `}
          style={{
            // backgroundColor: `${
            //   coordinate[0] == 0 && coordinate[1] == 0 ? "red" : ""
            // }`,
            height: `${size}px`,
            width: `${size}px`,
            top: `${coordinate[1] * size}px`,
            left: `${coordinate[0] * size}px`,
          }}
        ></div>
      ))}
    </div>
  );
};

export default RenderPiece;
