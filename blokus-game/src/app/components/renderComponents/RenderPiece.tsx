"use client";

import CreatePiece from "../logicComponents/CreatePiece";
import RotatePiece from "../logicComponents/RotatePiece";
import CoordinatesArray from "@/app/types/CoordinatesArray";
import CreateSquareCallback from "@/app/types/CreateSquareCallback";

interface ParentComponentProps {
  pieceId: keyof typeof CreatePiece;
  pieceRotateCount: number;
  position: any;
}

const RenderPiece = (prop: ParentComponentProps) => {
  // in case the piece id doesn't match any id at all (which is impossible of course)
  if (prop.pieceId in CreatePiece == false) {
    return <div>ERROR</div>;
  }

  // Retrieve the appropriate CreateSquare function based on the id
  const createSquareFunction = CreatePiece[
    prop.pieceId
  ] as CreateSquareCallback;

  //   console.log("im moving");
  const coordinates: CoordinatesArray = createSquareFunction(0, 0, 1);
  const rotatedCoordinates: CoordinatesArray = RotatePiece(
    coordinates,
    prop.pieceRotateCount
  );

  return (
    <div
      className="absolute pointer-events-none"
      style={{
        top: `${prop.position.y - 20}px`,
        left: `${prop.position.x - 20}px`,
      }}
    >
      {rotatedCoordinates.map((coordinate, index) => (
        <div
          key={index}
          className={`absolute h-10 w-10 bg-violet-400 opacity-50`}
          style={{
            top: `${coordinate[1] * 40}px`,
            left: `${coordinate[0] * 40}px`,
          }}
        ></div>
      ))}
    </div>
  );
};

export default RenderPiece;
