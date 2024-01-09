"use client";

import CreateGrid from "../logicComponents/CreateGrid";
import { Matrix } from "ts-matrix";
import { useState } from "react";

export const RenderGrid = () => {
  const grid = CreateGrid(20, 20);
  const board = new Matrix(20, 20);
  // console.log(board.values);
  return (
    <div className="flex flex-col bg-red-100 shadow-none shadow-rose-700">
      {board.values.map((column: any, columnIndex) => {
        return (
          <div
            key={columnIndex}
            className="flex border-solid border-red-400 first:border-t border-b "
          >
            {column.map((tile: any, tileIndex: any) => {
              return (
                <div
                  key={tileIndex}
                  className={`border-solid border-red-400 first:border-l border-r h-10 w-10 hover:bg-red-300`}
                  onMouseEnter={() => {
                    console.log("Mouse entered");
                  }}
                  onMouseLeave={() => {
                    console.log("Mouse left");
                  }}
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
