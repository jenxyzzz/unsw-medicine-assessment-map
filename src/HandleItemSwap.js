function findContainer(itemId, containers) {
    return Object.keys(containers).find(key => containers[key].includes(itemId));
  }
  
  export function handleItemSwap(activeId, overId, items, containers, setContainers) {
    const activeContainer = findContainer(activeId, containers);
    const overContainer = findContainer(overId, containers);
    const activeItem = items.find(item => item.id === activeId);
    const overItem = items.find(item => item.id === overId);
  
    // Check if the active item is movable and the over item (if exists) is not restricted
    if (activeItem.movable && (!overItem || overItem.movable)) {
      // Proceed with the swap...
      const activeItems = [...containers[activeContainer]];
      const overItems = [...containers[overContainer]];
  
      // Swap the items
      const activeIndex = activeItems.indexOf(activeId);
      const overIndex = overItems.indexOf(overId);
  
      activeItems[activeIndex] = overId;
      overItems[overIndex] = activeId;
  
      setContainers(prev => ({
        ...prev,
        [activeContainer]: activeItems,
        [overContainer]: overItems,
      }));
    }
  }
  