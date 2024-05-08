import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { itemDetails, iconMap } from './config';
import { CSS } from '@dnd-kit/utilities';
import './index.css';

const SortableItem = ({ item }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: item.id, disabled: !item.movable });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  const itemClasses = `sortable-item ${item.movable ? 'movable-item' : ''}`;
  // Extract the rows for this specific item
  const { rows } = itemDetails[item.id] || { rows: [] };

  return (
    <div ref={setNodeRef} style={style} {...listeners} {...attributes} className={itemClasses}>
      {item.movable && (
        <button className="drag-handle">
          ⣿ {/* Unicode drag handle */}
        </button>
      )}
      <h4 className="item-name">{item.name}</h4>
      {/* Iterate over each row and render dynamically */}
      {rows.map((row, index) => {
        // Retrieve the icon component using the mapping information in config.js
        const IconComponent = iconMap[row.icon]; // there is no fallback icon, so this will be undefined if the icon is not found;
        return (
          <div className="item-details" key={index}>
            <div className="item-column">{row.number}</div>
            <div className="item-column">
              <IconComponent className="icon" />
            </div>
            <div className="item-column">{row.weighting}%</div>
          </div>
        );
      })}
    </div>
  );
};
export default SortableItem;