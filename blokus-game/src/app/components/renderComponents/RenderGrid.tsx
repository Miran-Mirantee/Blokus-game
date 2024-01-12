"use client";

import { Matrix } from "ts-matrix";
import { useState } from "react";
import CreatePiece from "../logicComponents/CreatePiece";
import UpdateBoardValues from "../logicComponents/UpdateBoardValues";

interface ParentComponentProps {
  pieceId: keyof typeof CreatePiece;
}

export const RenderGrid = (prop: ParentComponentProps) => {
  const matrix = new Matrix(20, 20);
  const [board, setBoard] = useState(matrix.values);

  return (
    <div className="flex flex-col bg-red-100 shadow-none shadow-rose-700 ">
      {board.map((column: any, columnIndex) => {
        return (
          <div
            key={columnIndex}
            className="flex border-solid border-red-400 first:border-t border-b "
          >
            {column.map((tile: any, rowIndex: any) => {
              return (
                <div
                  key={rowIndex}
                  className={`border-solid border-red-400 first:border-l border-r h-10 w-10 hover:bg-yellow-300 ${
                    tile == 1 ? "bg-red-300" : ""
                  }`}
                  onClick={() => {
                    setBoard(
                      UpdateBoardValues(
                        rowIndex,
                        columnIndex,
                        1,
                        board,
                        prop.pieceId
                        // CreatePiece.oneSquare
                        // CreatePiece.twoSquare
                        // CreatePiece.threeSquare
                        // CreatePiece.threeSquare2
                        // CreatePiece.fourSquare
                        // CreatePiece.fourSquare2
                        // CreatePiece.fourSquare3
                        // CreatePiece.fourSquare4
                        // CreatePiece.fourSquare5
                        // CreatePiece.fiveSquare
                        // CreatePiece.fiveSquare2
                        // CreatePiece.fiveSquare3
                        // CreatePiece.fiveSquare4
                        // CreatePiece.fiveSquare5
                        // CreatePiece.fiveSquare6
                        // CreatePiece.fiveSquare7
                        // CreatePiece.fiveSquare8
                        // CreatePiece.fiveSquare9
                        // CreatePiece.fiveSquare10
                        // CreatePiece.fiveSquare11
                        // CreatePiece.fiveSquare12
                      )
                    );
                  }}
                  onMouseEnter={() => {}}
                  onMouseLeave={() => {}}
                ></div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default RenderGrid;
