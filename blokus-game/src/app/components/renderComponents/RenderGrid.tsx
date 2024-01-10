"use client";

import CreateGrid from "../logicComponents/CreateGrid";
import { Matrix } from "ts-matrix";
import { useState } from "react";

type CoordinatesArray = Array<[number, number, number]>;

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

  const pieces = {
    oneSquare: (x: number, y: number, value: number) => {
      return [
        [x, y, value],
        [x - 1, y, value],
        [x + 1, y, value],
        [x, y - 1, value],
        [x, y + 1, value],
      ] as CoordinatesArray;
    },
  };

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
                        pieces.oneSquare
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
