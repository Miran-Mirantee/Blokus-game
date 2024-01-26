"use client";

import Player from "../Classes/Player";
import RenderPiece from "./RenderPiece";
import CreatePiece from "../logicComponents/CreatePiece";

interface ParentComponentProps {
  pieceSize: number;
  player: Player;
  changePieceFunction: any;
  enablePlacementFunction: any;
}

const RenderPiecePanel = ({
  pieceSize,
  player,
  changePieceFunction,
  enablePlacementFunction,
}: ParentComponentProps) => {
  return (
    <div
      className="border-green-500 bg-green-200 border-solid border m-4 flex gap-2 flex-wrap p-4"
      style={{ pointerEvents: player.isPlayerTurn ? "all" : "none" }}
    >
      {Object.keys(player.pieces).map((piece) => {
        // get isUsed status from blokus piece
        const isUsed = player.pieces[piece].isUsed;

        // return only unused blokus piece
        return isUsed ? null : (
          <div
            className="border border-solid border-yellow-400 flex justify-center items-center"
            style={{
              height: `${pieceSize * player.pieces[piece].height}px`,
              width: `${pieceSize * player.pieces[piece].width}px`,
            }}
            key={piece}
            onClick={() => {
              changePieceFunction(piece as keyof typeof CreatePiece);
              enablePlacementFunction();
            }}
          >
            <div className="relative">
              <RenderPiece
                pieceId={piece as keyof typeof CreatePiece}
                pieceRotateCount={0} // for fun
                position={{
                  x: (player.pieces[piece].offset.x * pieceSize) / 2,
                  y: (player.pieces[piece].offset.y * pieceSize) / 2,
                }}
                size={pieceSize}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default RenderPiecePanel;
