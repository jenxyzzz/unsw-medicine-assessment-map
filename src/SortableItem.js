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
  const itemData = itemDetails[item.id] || { rows: [], subItems: {}, showParentItemDetails: true };
  const { rows, subItems = {}, showParentItemDetails } = itemData;

  return (
    <div ref={setNodeRef} style={style} {...listeners} {...attributes} className={itemClasses}>
      {item.movable && (
        <button className="drag-handle">
          ⣿ {/* Unicode drag handle */}
        </button>
      )}
      <h4 className="item-name">{item.name}</h4>
      <div className="item-details-container">
        {/* Render sub-items if they exist */}
        {Object.entries(subItems).map(([subItemKey, subItem], index) => (
          <div key={index} className="sub-block">
            {subItem.rows.map((row, subIndex) => {
              const IconComponent = iconMap[row.icon] || null;
              return (
                <div className="item-details" key={subIndex}>
                  <div className="item-column">{row.number}</div>
                  <div className="item-column">
                    {IconComponent ? <IconComponent className="icon" /> : <span>No Icon</span>}
                  </div>
                  <div className="item-column">{row.weighting}%</div>
                </div>
              );
            })}
          </div>
        ))}
        {/* Render parent rows and ensure icon is centered */}
        {rows.map((row, index) => {
          const IconComponent = iconMap[row.icon] || null;
          const parentRowClass = showParentItemDetails ? "item-details" : "icon-centered";
          return (
            <div className={parentRowClass} key={index}>
              {/* Number column */}
              {showParentItemDetails && <div className="item-column">{index + 1}</div>}
              {/* Icon column */}
              <div className="item-column">
                {IconComponent ? <IconComponent className="icon" /> : <span>No Icon</span>}
              </div>
              {/* Weighting column */}
              {showParentItemDetails && <div className="item-column">{row.weighting}%</div>}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SortableItem;
