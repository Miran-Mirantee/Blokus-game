"use client";

import CreateGrid from "../logicComponents/CreateGrid";

export const RenderGrid = () => {
  const grid = CreateGrid(20, 20);
  console.log(grid);
  return (
    <div className="flex flex-col bg-red-100 shadow-none shadow-rose-700">
      {grid.map((column, columnIndex) => {
        return (
          <div
            key={columnIndex}
            className="flex border-solid border-red-400 first:border-t border-b "
          >
            {column.map((tile, tileIndex) => {
              return (
                <div
                  key={tileIndex}
                  className="border-solid border-red-400 first:border-l border-r h-10 w-10"
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
