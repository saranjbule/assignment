import { useEffect, useState } from "react";

function Assignment1() {
  const [blockWidth, setBlockWidth] = useState(200);
  const [color, setColor] = useState("#ff0000");
  const [blockStyle, setBlockStyle] = useState({
    width: "200px",
    height: "200px",
    marginTop: "50px",
    marginBottom: "50px",
    backgroundColor: "#ff0000",
    boxShadow:
      "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
  });

  useEffect(() => {
    const newBlockStyle = {
      ...blockStyle,
      width: `${blockWidth}px`,
      backgroundColor: color,
    };
    setBlockStyle(newBlockStyle);
  }, [blockWidth, color]);

  return (
    <>
      <h1>Assignment 1</h1>
      <p>Enter width of block</p>
      <input
        type="number"
        value={blockWidth}
        onChange={(e) => setBlockWidth(e.target.value)}
      />
      <p>Enter color of block</p>
      <input
        type="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />

      <div style={blockStyle}></div>
    </>
  );
}

export default Assignment1;
