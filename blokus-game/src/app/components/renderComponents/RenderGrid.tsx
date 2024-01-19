"use client";

import { Matrix } from "ts-matrix";
import { useState, useEffect } from "react";
import CreatePiece from "../logicComponents/CreatePiece";
import UpdateBoardValues from "../logicComponents/UpdateBoardValues";

interface ParentComponentProps {
  pieceId: keyof typeof CreatePiece;
  pieceRotateCount: number;
  resetCountFunction: any;
}

export const RenderGrid = (props: ParentComponentProps) => {
  const matrix = new Matrix(20, 20);
  const [board, setBoard] = useState(matrix.values);

  useEffect(() => {
    let newBoard = [...board];
    newBoard[10][10] = 1;
  }, [board]);

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
                        props.pieceId,
                        props.pieceRotateCount,
                        props.resetCountFunction
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
