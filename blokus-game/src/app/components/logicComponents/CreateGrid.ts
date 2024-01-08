const CreateGrid = (x: number, y: number): any[][] => {
  return Array.from({ length: x }, () => Array.from({ length: y }, () => 0));
};

export default CreateGrid;
