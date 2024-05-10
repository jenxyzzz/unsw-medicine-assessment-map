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
  // const { rows } = itemDetails[item.id] || { rows: [] };
  const itemData = itemDetails[item.id] || { rows: [], subItems: {} };
  const { rows, subItems = {} } = itemData;

return (
  <div ref={setNodeRef} style={style} {...listeners} {...attributes} className={itemClasses}>
    {item.movable && (
      <button className="drag-handle">
        ⣿ {/* Unicode drag handle */}
      </button>
    )}
    <h4 className="item-name">{item.name}</h4>
    <div className="item-details-container">
      {/* Parent rows */}
      {rows.map((row, index) => {
        const IconComponent = iconMap[row.icon] || null;
        return (
          <div className="item-details" key={index}>
            <div className="item-column">{row.number}</div>
            <div className="item-column">{IconComponent ? <IconComponent className="icon" /> : <span>No Icon</span>}</div>
            <div className="item-column">{row.weighting}%</div>
          </div>
        );
      })}
      {/* Render Sub-Items */}
      {Object.values(subItems).map((subItem, index) => (
        <div key={index} className="sub-block">
          {subItem.rows.map((row, subIndex) => {
            const IconComponent = iconMap[row.icon] || null;
            return (
              <div className="item-details" key={subIndex}>
                <div className="item-column">{row.number}</div>
                <div className="item-column">{IconComponent ? <IconComponent className="icon" /> : <span>No Icon</span>}</div>
                <div className="item-column">{row.weighting}%</div>
              </div>
            );
          })}
        </div>
      ))}
    </div>
  </div>
);
};
export default SortableItem;