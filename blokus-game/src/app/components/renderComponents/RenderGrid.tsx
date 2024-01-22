"use client";

import { useState, useEffect } from "react";
import CreatePiece from "../logicComponents/CreatePiece";
import UpdateBoardValues from "../logicComponents/UpdateBoardValues";
import Game from "../Classes/Game";
import Player from "../Classes/Player";

interface ParentComponentProps {
  pieceId: keyof typeof CreatePiece;
  pieceRotateCount: number;
  resetCountFunction: any;
}

export const RenderGrid = (props: ParentComponentProps) => {
  // not an ideal practice, but this will do for now
  const player1 = new Player("nu_ko", "red", 1);
  const player2 = new Player("mirantee", "blue", 2);
  const game = Game.getInstance([player1, player2]);
  const [board, setBoard] = useState(game.board);
  const [currentPlayer, setCurrentPlayer] = useState<Player | null>(null);

  // its not the same as the one in game instance
  // for debuging only
  useEffect(() => {
    let newBoard = [...board];
    // setBoard(game.board);
    newBoard[10][10] = 1;
  }, [board]);

  useEffect(() => {
    console.log("game start!");
    game.gameStart();
  }, [game]);

  // update board state when board in game updated
  useEffect(() => {
    setBoard(game.board);
    // game.playerPlaceBlokus(props.pieceId);
  }, [game.board]);

  useEffect(() => {
    console.log("game.currentPlayer", game.currentPlayer);
    setCurrentPlayer(game.currentPlayer);
  }, [game.currentPlayer]);

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
                      game.setBoard(
                        UpdateBoardValues(
                          rowIndex,
                          columnIndex,
                          currentPlayer.num,
                          game.board,
                          props.pieceId,
                          props.pieceRotateCount,
                          props.resetCountFunction,
                          game
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
