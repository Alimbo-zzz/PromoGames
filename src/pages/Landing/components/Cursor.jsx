import React from "react";
import useCursorCoordinates from "@/hooks/useCursorCoordinates";
import { StyledCursor } from "@/styles/components/StyledCursor";

const Cursor = ({ radius, color }) => {
  const coords = useCursorCoordinates();
  return (
    <StyledCursor
      style={{
        backgroundColor: color,
        top: `${coords.y - 0.5 * radius}px`,
        left: `${coords.x - 0.5 * radius}px`,
        opacity: coords.y ? 1 : 0,
      }}
    />
  );
};

export default Cursor;
