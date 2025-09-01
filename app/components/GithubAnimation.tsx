import { useEffect, useState } from "react";

const GitHubSnake = () => {

  const gridRows = 7;
  const gridCols = 20;

    const customGrid = [
    [0,1,0,0,0,1,0,0,0,0,1,0,0,1,0,0,0,1,0,0],
    [0,0,0,1,0,0,0,0,1,0,0,0,1,0,0,0,0,0,1,0],
    [0,0,0,0,0,1,0,0,0,1,0,0,0,0,1,0,0,0,0,0],
    [1,0,0,0,1,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1],
    [0,0,1,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,1,0],
    [0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0],
    [0,0,0,1,0,0,0,0,1,0,0,0,1,0,0,0,0,1,0,0],
  ];

  const [snake, setSnake] = useState([{ row: 0, col: 0 }]);

  useEffect(() => {
    const interval = setInterval(() => {
      setSnake((prev) => {
        const head = prev[0];
        let newHead = {
          row: (head.row + 1) % gridRows,
          col: (head.col + 1) % gridCols,
        };
        return [newHead, ...prev.slice(0, prev.length - 1)];
      });
    }, 300); 
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid gap-1" style={{ gridTemplateColumns: `repeat(${gridCols}, 20px)` }}>
      {customGrid.flatMap((gridarr, row) =>
        gridarr.map((cell, col) => {
          const isSnake = snake.some((s) => s.row == row && s.col == col);
          const isFood = cell == 1;
          return (
            <div
              key={`${row}-${col}`}
              className={`w-5 h-5 border rounded ${
                isSnake ? "bg-green-500" : isFood ? "bg-green-500 animate-pulse" : "bg-gray-200"
              }`}
            />
          );
        })
      )}
    </div>
  );
};

export default GitHubSnake;
