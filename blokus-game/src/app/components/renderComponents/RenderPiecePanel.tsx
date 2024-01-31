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

const getPlayerColor = (player: Player) => {
  switch (player.num) {
    case 1:
      return "rgb(252 165 165)";
    case 2:
      return "rgb(103 232 249)";
    case 3:
      return "rgb(134 239 172)";
    case 4:
      return "rgb(253 224 71)";
  }
};

const RenderPiecePanel = ({
  pieceSize,
  player,
  changePieceFunction,
  enablePlacementFunction,
}: ParentComponentProps) => {
  return (
    <div
      className="bg-gray-100 border-solid border-8 m-4 flex gap-2 flex-wrap p-4"
      style={{
        pointerEvents: player.isPlayerTurn ? "all" : "none",
        borderColor: getPlayerColor(player),
        backgroundColor: player.isPlayerTurn
          ? getPlayerColor(player)
          : "rgb(243 244 246)",
      }}
    >
      {Object.keys(player.pieces).map((piece) => {
        // get isUsed status from blokus piece
        const isUsed = player.pieces[piece].isUsed;

        // return only unused blokus piece
        return isUsed ? null : (
          <div
            className="flex justify-center items-center"
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
                pieceRotateCount={0}
                pieceFlipCount={0}
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
