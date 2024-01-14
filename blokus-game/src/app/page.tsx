"use client";

import { useState } from "react";
import RenderGrid from "./components/renderComponents/RenderGrid";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { Button } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import CreatePiece from "./components/logicComponents/CreatePiece";

export default function Home() {
  const [pieceId, setPieceId] =
    useState<keyof typeof CreatePiece>("fiveSquare3");
  const [rotateCount, setRotateCount] = useState<number>(0);

  const handleChange = (event: SelectChangeEvent) => {
    setPieceId(event.target.value as keyof typeof CreatePiece);
  };

  const handleClickRotate = () => {
    setRotateCount(rotateCount + 1);
  };

  return (
    <div className="flex min-h-screen justify-center items-center gap-9">
      <div className="h-screen flex-1 bg-blue-200 border-solid border-blue-500 border flex flex-col ml-9"></div>
      <RenderGrid pieceId={pieceId} pieceRotateCount={rotateCount} />
      <div className="h-screen flex-1 bg-blue-200 border-solid border-blue-500 border flex flex-col mr-9">
        {/* this is for debugging */}
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={pieceId}
          label="pieceId"
          onChange={handleChange}
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
        </Select>
        <div>Current piece id: {pieceId}</div>
        <Button
          color="secondary"
          variant="contained"
          onClick={handleClickRotate}
        >
          Rotate: {rotateCount}
        </Button>
      </div>
    </div>
  );
}
