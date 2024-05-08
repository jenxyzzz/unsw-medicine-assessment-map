// This is the grid that determines the layout of the containers
import "./index.css";

export function Grid({ children, columnHeadings, rowHeadings }) {
  // Calculate the number of rows needed based on the number of children
  const numRows = Math.ceil(children.length / 2);

  return (
    <div className="grid-container"
      style={{
        display: 'grid',
        gridTemplateColumns: 'minmax(100px, auto) 1fr 1fr', // Adjusted for the row headings column
        gridTemplateRows: `auto repeat(${numRows} auto`, // Adjusted for the column headings row
        justifyContent: 'center',
        alignItems: 'center',
        rowGap: '20px',
        columnGap: '20px',
        padding: '5px',
        maxWidth: 'calc(2 * var(--sortable-item-width) + 40px)',
        margin: 'auto',
      }}
      // custom style is applied here instead of index.css to allow for dynamic number of rows and for two columns to appear side by side
    >
      {/* Column Headings */}
      {columnHeadings.map((heading, index) => (
        <div key={index} style={{ gridArea: `1 / ${index + 2} / 2 / ${index + 3}`, textAlign: 'center' }}>
          {heading}
        </div>
      ))}

      {/* Row Headings */}
      {rowHeadings.map((heading, index) => (
        <div key={index} style={{ gridArea: `${index + 2} / 1 / ${index + 3} / 2`, textAlign: 'right'}}>
          {heading}
        </div>
      ))}

      {/* Distribute Children Across Columns */}
      {children.map((child, index) => (
        <div key={index} style={{ gridArea: `${Math.floor(index / 2) + 2} / ${(index % 2) + 2} / ${Math.floor(index / 2) + 3} / ${(index % 2) + 3}` }}>
          {child}
        </div>
      ))}
    </div>
  );
}
