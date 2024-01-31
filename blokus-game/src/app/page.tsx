"use client";

import { useEffect, useState } from "react";
import RenderGrid from "./components/renderComponents/RenderGrid";
import RenderPiece from "./components/renderComponents/RenderPiece";
import RenderPiecePanel from "./components/renderComponents/RenderPiecePanel";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { Button } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import CreatePiece from "./components/logicComponents/CreatePiece";
import Player from "./components/Classes/Player";
import Game from "./components/Classes/Game";

// TODO:
//  - display player turn
//  - score calculation
//  - fix create player more than 4
//  - add "remove player" (optional)
//  - check endgame (if no more move is possible)

export default function Home() {
  const [pieceId, setPieceId] =
    useState<keyof typeof CreatePiece>("fiveSquare3");
  const [rotateCount, setRotateCount] = useState<number>(0);
  const [flipCount, setFlipCount] = useState<number>(0);
  const [position, setPosition] = useState({ x: 100, y: 100 });
  const [placeable, setPlaceable] = useState(false);
  const [players, setPlayers] = useState<Player[]>([]);
  const [game, setGame] = useState<Game>();

  const pieceSize = 25;

  // useEffect(() => {
  //   // temporary players
  //   const player1 = new Player("nu_ko", "red", 1);
  //   const player2 = new Player("mirantee", "blue", 2);
  //   setPlayers([player1, player2]);
  //   console.log("wassap daring");
  // }, []);

  useEffect(() => {
    if (players) {
      const newGame = Game.getInstance();
      newGame.setPlayers(players);
      setGame(newGame);
      console.log(players);
    }
  }, [players]);

  useEffect(() => {
    const handleKeyPress = (event: any) => {
      if (event.key === "r" || event.key === "R") {
        setRotateCount(rotateCount + 1);
      }
      if (event.key === "t" || event.key === "T") {
        setFlipCount(flipCount + 1);
      }
    };

    window.addEventListener("keypress", handleKeyPress);
    return () => {
      window.removeEventListener("keypress", handleKeyPress);
    };
  }, [rotateCount, flipCount]);

  const handleSelectPiece = (event: SelectChangeEvent) => {
    setPieceId(event.target.value as keyof typeof CreatePiece);
  };

  const handleChangePiece = (piece: keyof typeof CreatePiece) => {
    setPieceId(piece);
  };

  const handleClickAddRotateCount = () => {
    setRotateCount(rotateCount + 1);
  };

  const handleClickAddFlipCount = () => {
    setFlipCount(flipCount + 1);
  };

  const handleResetRotateCount = () => {
    setRotateCount(0);
  };

  const handleResetFlipCount = () => {
    setFlipCount(0);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  const handleDisablePlacement = () => {
    setPlaceable(false);
  };

  const handleEnablePlacement = () => {
    setPlaceable(true);
  };

  return (
    <div
      className="flex min-h-screen justify-center items-center gap-9 relative overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {placeable ? (
        <RenderPiece
          pieceId={pieceId}
          pieceRotateCount={rotateCount}
          pieceFlipCount={flipCount}
          position={position}
          size={40} // same size as one tile
        />
      ) : null}

      {/* render game is it exists */}
      {game ? (
        <>
          <div className="h-screen flex-1 bg-blue-200 border-solid border-blue-500 border flex flex-col justify-between">
            {/* render blokus pieces to select */}
            {game.players[0] ? (
              <RenderPiecePanel
                pieceSize={pieceSize}
                player={game.players[0]}
                changePieceFunction={handleChangePiece}
                enablePlacementFunction={handleEnablePlacement}
              />
            ) : (
              ""
            )}

            {game.players[1] ? (
              <RenderPiecePanel
                pieceSize={pieceSize}
                player={game.players[1]}
                changePieceFunction={handleChangePiece}
                enablePlacementFunction={handleEnablePlacement}
              />
            ) : (
              ""
            )}
          </div>
          {/* prevent player from placing a blokus piece when not selecting */}
          <div
            style={{
              pointerEvents: placeable ? "all" : "none",
            }}
          >
            <RenderGrid
              pieceId={pieceId}
              pieceRotateCount={rotateCount}
              pieceFlipCount={flipCount}
              resetCountFunction={handleResetRotateCount}
              resetFlipFunction={handleResetFlipCount}
              disablePlacementFunction={handleDisablePlacement}
              game={game}
            />
          </div>
          <div className="h-screen flex-1 bg-blue-200 border-solid border-blue-500 border flex flex-col justify-between">
            {game.players[2] ? (
              <RenderPiecePanel
                pieceSize={pieceSize}
                player={game.players[2]}
                changePieceFunction={handleChangePiece}
                enablePlacementFunction={handleEnablePlacement}
              />
            ) : (
              ""
            )}
            {/* this is for debugging */}
            <div className="">
              {/* <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={pieceId}
                label="pieceId"
                onChange={handleSelectPiece}
              >
                <MenuItem value={"oneSquare"}>oneSquare</MenuItem>
                <MenuItem value={"twoSquare"}>twoSquare</MenuItem>
                <MenuItem value={"threeSquare"}>threeSquare</MenuItem>
                <MenuItem value={"threeSquare2"}>threeSquare2</MenuItem>
                <MenuItem value={"fourSquare"}>fourSquare</MenuItem>
                <MenuItem value={"fourSquare2"}>fourSquare2</MenuItem>
                <MenuItem value={"fourSquare3"}>fourSquare3</MenuItem>
                <MenuItem value={"fourSquare4"}>fourSquare4</MenuItem>
                <MenuItem value={"fourSquare5"}>fourSquare5</MenuItem>
                <MenuItem value={"fiveSquare"}>fiveSquare</MenuItem>
                <MenuItem value={"fiveSquare2"}>fiveSquare2</MenuItem>
                <MenuItem value={"fiveSquare3"}>fiveSquare3</MenuItem>
                <MenuItem value={"fiveSquare4"}>fiveSquare4</MenuItem>
                <MenuItem value={"fiveSquare5"}>fiveSquare5</MenuItem>
                <MenuItem value={"fiveSquare6"}>fiveSquare6</MenuItem>
                <MenuItem value={"fiveSquare7"}>fiveSquare7</MenuItem>
                <MenuItem value={"fiveSquare8"}>fiveSquare8</MenuItem>
                <MenuItem value={"fiveSquare9"}>fiveSquare9</MenuItem>
                <MenuItem value={"fiveSquare10"}>fiveSquare10</MenuItem>
                <MenuItem value={"fiveSquare11"}>fiveSquare11</MenuItem>
                <MenuItem value={"fiveSquare12"}>fiveSquare12</MenuItem>
              </Select> */}
              <div>Current piece id: {pieceId}</div>
              <Button
                color="secondary"
                variant="contained"
                onClick={handleClickAddRotateCount}
              >
                Rotate: {rotateCount}
              </Button>
              <Button
                color="secondary"
                variant="contained"
                onClick={handleClickAddFlipCount}
              >
                Flip: {flipCount}
              </Button>
              <Button
                color="secondary"
                variant="contained"
                onClick={() => {
                  if (players.length < 4) {
                    console.log("adding new bois");
                    const newPlayer = new Player(
                      `name${game.players.length + 1}`,
                      "red",
                      game.players.length + 1
                    );
                    setPlayers([...players, newPlayer]);
                  }
                }}
              >
                Add new player
              </Button>
              <Button
                color="secondary"
                variant="contained"
                onClick={() => {
                  // check if players exist in the game more than 1
                  if (game.players.length > 1) {
                    console.log("start the DAMN GAME");
                    game.gameStart();
                  }
                }}
              >
                Start game
              </Button>
            </div>
            {game.players[3] ? (
              <RenderPiecePanel
                pieceSize={pieceSize}
                player={game.players[3]}
                changePieceFunction={handleChangePiece}
                enablePlacementFunction={handleEnablePlacement}
              />
            ) : (
              ""
            )}
          </div>
        </>
      ) : null}
    </div>
  );
}
