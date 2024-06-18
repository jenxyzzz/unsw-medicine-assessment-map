import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { itemDetails, iconMap } from './config';
import { CSS } from '@dnd-kit/utilities';
import { Tooltip as ReactTooltip } from 'react-tooltip';
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

  const renderIcons = (icons) => {
    return (
      <span className="icon-container">
        {icons.map((icon, index) => {
          const IconComponent = iconMap[icon].component;
          const hoverText = iconMap[icon].hoverText;
          if (!IconComponent) {
            console.error(`Icon component for ${icon} is not defined.`);
            return null;
          }
          return (
            <React.Fragment key={index}>
              <span data-tooltip-id={`tooltip-${item.id}-${index}`} data-tooltip-content={hoverText}>
                <IconComponent className="icon" />
              </span>
              {index < icons.length - 1 && <span className="icon-separator">/</span>}
              <ReactTooltip id={`tooltip-${item.id}-${index}`} className="custom-tooltip" effect="solid" delayShow={0} />
            </React.Fragment>
          );
        })}
      </span>
    );
  };

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
            {subItem.rows.map((row, subIndex) => (
              <div className="item-details" key={subIndex}>
                <div className="item-column">{row.number}</div>
                <div className="item-column icons">{renderIcons(row.icons)}</div>
                <div className="item-column">{row.weighting}%</div>
              </div>
            ))}
          </div>
        ))}
        {/* Render parent rows and ensure icon is centered */}
        {rows.map((row, index) => (
          <div className={showParentItemDetails ? "item-details" : "icon-centered"} key={index}>
            {/* Number column */}
            {showParentItemDetails && <div className="item-column">{index + 1}</div>}
            {/* Icon column */}
            <div className="item-column icons">
              {renderIcons(row.icons)}
            </div>
            {/* Weighting column */}
            {showParentItemDetails && <div className="item-column">{row.weighting}%</div>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SortableItem;