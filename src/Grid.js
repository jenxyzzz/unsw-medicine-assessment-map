import React from "react";
import "./index.css";
import { items } from "./config";

export function Grid({ children, columnHeadings, rowHeadings }) {
  // Sort items by order
  const sortedItems = [...items].sort((a, b) => a.order - b.order);

  // This function finds the row and column index based on item order
  const getItemPosition = (index) => {
    const column = Math.floor(index / rowHeadings.length) + 2; // Starts from the 2nd column
    const row = (index % rowHeadings.length) + 2; // Starts from the 2nd row
    return { row, column };
  };

  return (
    <div className="grid-container"
      style={{
        display: 'grid',
        gridTemplateColumns: `minmax(100px, auto) repeat(${columnHeadings.length}, 1fr)`,
        gridTemplateRows: `auto repeat(${rowHeadings.length}, auto)`,
        justifyContent: 'center',
        alignItems: 'center',
        rowGap: '20px',
        columnGap: '20px',
        padding: '5px',
        maxWidth: `calc(${columnHeadings.length} * var(--sortable-item-width) + 40px)`,
        margin: 'auto',
      }}
    >
      {/* Column Headings */}
      {columnHeadings.map((heading, index) => (
        <div key={index} style={{ gridArea: `1 / ${index + 2} / 2 / ${index + 3}`, textAlign: 'center' }}>
          {heading}
        </div>
      ))}

      {/* Row Headings */}
      {rowHeadings.map((heading, index) => (
        <div key={index} style={{ gridArea: `${index + 2} / 1 / ${index + 3} / 2`, textAlign: 'right' }}>
          {heading}
        </div>
      ))}

      {/* Distribute Children Across Grid based on sortedItems */}
      {sortedItems.map((item, index) => {
        const { row, column } = getItemPosition(index);
        const child = children.find(child => child.props.id === `container${item.id}`);
        return (
          <div key={item.id} style={{ gridArea: `${row} / ${column} / ${row + 1} / ${column + 1}` }}>
            {child}
          </div>
        );
      })}
    </div>
  );
}
