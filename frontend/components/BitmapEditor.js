import { useState, useEffect } from "react";
import styled from "styled-components";

// Will change how big of bitmap image we are creating
const MATRIX_SIZE = 16; // TODO matrix should be configurable should only recreate test arrays if size changes
const BORDER_COLOR = "#666";

const emptyMatrix = Array.apply(null, Array(MATRIX_SIZE)).map(() =>
  Array.apply(null, Array(MATRIX_SIZE))
);

const Pixel = styled.div`
  width: 19px;
  height: 19px;
  line-height: 19px;
  border-right: ${(props) =>
    props.isGridVisible
      ? `1px dotted ${BORDER_COLOR}`
      : "1px solid transparent"};
  border-bottom: ${(props) =>
    props.isGridVisible
      ? `1px dotted ${BORDER_COLOR}`
      : "1px solid transparent"};
  background-color: ${(props) => props.backgroundColor};
`;

const Flex = styled.div`
  display: flex;
`;

const Card = styled.div`
  background: white;
  border-radius: 4px;
  box-shadow: 0 5px 10px 0 hsl(0deg 0% 78% / 20%);
  margin: 6px;
  padding: 6px;
`;

const GridWrapper = styled.div`
  border: ${(props) =>
    props.isBorderVisible
      ? `1px dotted ${BORDER_COLOR}`
      : "1px solid transparent"};
`;

// Hook to track if the user is holding the mouse down.
const useIsMouseDown = () => {
  const [isMouseDown, setIsMouseDown] = useState(false);
  useEffect(() => {
    const setMouseDown = () => setIsMouseDown(true);
    const setMouseUp = () => setIsMouseDown(false);
    window.addEventListener("mousedown", setMouseDown);
    window.addEventListener("mouseup", setMouseUp);

    return () => {
      window.removeEventListener("mousedown", setMouseDown);
      window.removeEventListener("mouseup", setMouseUp);
    };
  }, []);

  return isMouseDown;
};

// Hook to make setting nested state in our matrix easier.
const useGridState = (defaultState, onChange) => {
  const [state, setState] = useState(defaultState);
  const resetMatrix = () => setState(defaultState);
  const setCell = (row, column, value) => {
    const newState = [
      ...state.slice(0, row),
      [...state[row].slice(0, column), value, ...state[row].slice(column + 1)],
      ...state.slice(row + 1),
    ];
    setState(newState);
    onChange(newState);
  };

  return [state, setCell, resetMatrix];
};

// Hook to help validate custom input on colors
const useColorManager = (defaultColor) => {
  const [rawColorText, setRawColorText] = useState(defaultColor);
  const [lastValidColor, setLastValidColor] = useState(defaultColor);
  const setColorWrapper = (newColor) => {
    setRawColorText(newColor);
    if (/#[0-9A-Fa-f]{3}/.test(newColor)) {
      setLastValidColor(newColor);
    }
  };
  return [lastValidColor, setColorWrapper, rawColorText];
};

export const BitmapEditor = ({ children, onChange }) => {
  const [isGridVisible, setIsGridVisible] = useState(true);
  const [activeColor, setActiveColor, rawColorText] = useColorManager("#000");
  const [state, setPixelColor, resetMatrix] = useGridState(
    emptyMatrix,
    onChange
  );
  const isMouseDown = useIsMouseDown();

  return (
    <Flex>
      <GridWrapper isBorderVisible={!isGridVisible}>
        {state.map((_, row) => (
          <Flex key={row}>
            {state[row].map((_, column) => (
              <Pixel
                isGridVisible={isGridVisible}
                backgroundColor={state[row][column] || "transparent"}
                key={`${row} - ${column}`}
                onMouseDown={() => setPixelColor(row, column, activeColor)}
                onMouseUp={() => setPixelColor(row, column, activeColor)}
                onMouseOver={() => {
                  if (isMouseDown) {
                    setPixelColor(row, column, activeColor);
                  }
                }}
              />
            ))}
          </Flex>
        ))}
      </GridWrapper>
      <div>
        <Card>
          <button onClick={resetMatrix}>Clear</button>
        </Card>
        <Card>
          <button onClick={() => setActiveColor("#F00")}>Red</button>
          <button onClick={() => setActiveColor("#00F")}>Blue</button>
          <button onClick={() => setActiveColor("#0F0")}>Green</button>
          <input
            onChange={(e) => setActiveColor(e.target.value)}
            value={rawColorText}
          />
        </Card>
        <Card>
          <button onClick={() => setIsGridVisible(!isGridVisible)}>
            Toggle Grid
          </button>
        </Card>
        <Card>{children}</Card>
      </div>
    </Flex>
  );
};

export default BitmapEditor;
