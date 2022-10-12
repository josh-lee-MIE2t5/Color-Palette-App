import { SortableContainer } from "react-sortable-hoc";
import DraggableColorBox from "./DraggableColorBox";
import React from "react";

const DraggableColorList = SortableContainer((props) => {
  const { colors, removeColor } = props;
  return (
    <div style={{ height: "100%" }}>
      {colors.map((color, i) => (
        <DraggableColorBox
          index={i}
          color={color.color}
          name={color.name}
          handleClick={() => removeColor(color.name)}
          key={color.name}
        />
      ))}
    </div>
  );
});

export default DraggableColorList;
