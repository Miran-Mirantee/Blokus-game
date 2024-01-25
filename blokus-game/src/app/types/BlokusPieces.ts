type BlokusPieces = {
  [key: string]: {
    squares: number;
    isUsed: boolean;
    height: number;
    width: number;
    offset: { x: number; y: number };
  };
};

export default BlokusPieces;
