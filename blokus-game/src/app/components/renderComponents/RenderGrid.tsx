"use client";

import { useState, useEffect } from "react";
import CreatePiece from "../logicComponents/CreatePiece";
import UpdateBoardValues from "../logicComponents/UpdateBoardValues";
import Game from "../Classes/Game";
import Player from "../Classes/Player";

interface ParentComponentProps {
  pieceId: keyof typeof CreatePiece;
  pieceRotateCount: number;
  pieceFlipCount: number;
  resetCountFunction: any;
  resetFlipFunction: any;
  disablePlacementFunction: any;
  game: Game;
}

const RenderGrid = (props: ParentComponentProps) => {
  const [board, setBoard] = useState(props.game.board);
  const [currentPlayer, setCurrentPlayer] = useState<Player | null>(null);

  // its not the same as the one in game instance
  // for debuging only
  // useEffect(() => {
  //   let newBoard = [...board];
  //   // setBoard(game.board);
  //   newBoard[10][10] = 1;
  //   newBoard[10][11] = 2;
  // }, [board]);

  // useEffect(() => {
  //   console.log("game start!");
  //   props.game.gameStart();
  // }, [props.game]);

  // update board state when board in game updated
  useEffect(() => {
    setBoard(props.game.board);
  }, [props.game.board]);

  useEffect(() => {
    // console.log("game.currentPlayer", props.game.currentPlayer);
    setCurrentPlayer(props.game.currentPlayer);
  }, [props.game.currentPlayer]);

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
                  } ${tile == 2 ? "bg-cyan-300" : ""}`}
                  onClick={() => {
                    if (currentPlayer) {
                      props.game.setBoard(
                        UpdateBoardValues(
                          rowIndex,
                          columnIndex,
                          currentPlayer.num,
                          props.game,
                          props.pieceId,
                          props.pieceRotateCount,
                          props.pieceFlipCount,
                          props.resetCountFunction,
                          props.resetFlipFunction,
                          props.disablePlacementFunction
                        )
                      );
                    }
                  }}
                  onMouseEnter={() => {}}
                  onMouseLeave={() => {}}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default RenderGrid;
