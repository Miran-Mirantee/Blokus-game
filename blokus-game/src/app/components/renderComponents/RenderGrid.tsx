"use client";

import CreateGrid from "../logicComponents/CreateGrid";
import { Matrix } from "ts-matrix";
import { useState } from "react";
import CoordinatesArray from "@/app/types/CoordinatesArray";
import CreatePiece from "../logicComponents/CreatePiece";

export const RenderGrid = () => {
  const matrix = new Matrix(20, 20);
  const [board, setBoard] = useState(matrix.values);

  const updateBoardValues = (
    x: number,
    y: number,
    value: number,
    callback: (x: number, y: number, value: number) => CoordinatesArray
  ) => {
    let updatedBoard = [...board]; // Assuming board is your original array
    const coordinates: CoordinatesArray = callback(x, y, value);

    coordinates.forEach(([x, y, newValue]: [number, number, number]) => {
      updatedBoard = updatedBoard.map((row, cIndex) => {
        if (cIndex === y) {
          return row.map((value, rIndex) => (rIndex === x ? newValue : value));
        }
        return row;
      });
    });

    return updatedBoard;
  };
  // const updateBoardValues = (coordinates: CoordinatesArray) => {
  //   let updatedBoard = [...board]; // Assuming board is your original array

  //   coordinates.forEach(([x, y, newValue]: [number, number, number]) => {
  //     updatedBoard = updatedBoard.map((row, cIndex) => {
  //       if (cIndex === y) {
  //         return row.map((value, rIndex) => (rIndex === x ? newValue : value));
  //       }
  //       return row;
  //     });
  //   });
  //   return updatedBoard;
  // };

  return (
    <div className="flex flex-col bg-red-100 shadow-none shadow-rose-700">
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
                      updateBoardValues(
                        rowIndex,
                        columnIndex,
                        1,
                        CreatePiece.oneSquare
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
