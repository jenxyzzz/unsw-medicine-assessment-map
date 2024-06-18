// App.js
import React, { useState } from "react";
import {
  DndContext,
  DragOverlay,
  PointerSensor,
  useSensor,
  useSensors,
  pointerWithin,
  rectIntersection,
} from "@dnd-kit/core";
import { SortableContext, rectSortingStrategy } from "@dnd-kit/sortable";
import { handleItemSwap } from './HandleItemSwap';
import Container from "./Container";
import SortableItem from "./SortableItem";
import { Grid } from "./Grid";
import { items, initialContainers, columnHeadings, rowHeadings } from './config';  // Importing from config.js
import './index.css';

// Custom collision detection strategy to check for pointerIntersection first before using rectIntersection
const customCollisionDetection = (args) => {
  const pointerIntersections = pointerWithin(args);
  const intersections =
    pointerIntersections.length > 0
      ? pointerIntersections
      : rectIntersection(args);
  return intersections;
};

export default function App() {
  // Set up state with the imported initial containers
  const [containers, setContainers] = useState(initialContainers);
  const [activeId, setActiveId] = useState(null);

  const sensors = useSensors(
    useSensor(PointerSensor)
    // If you need KeyboardSensor, make sure to import and configure it here
  );

  // Handle the start of the drag action by setting the active item ID
  function handleDragStart(event) {
    setActiveId(event.active.id);
  }

  // Handle the end of the drag action by swapping items if needed
  function handleDragEnd(event) {
    const { active, over } = event;
    setActiveId(null);

    if (over) {
      const overId = over.id;
      const overItem = items.find(item => item.id === overId);
      // Only proceed if the overId corresponds to an item
      if (overItem) {
        handleItemSwap(active.id, overId, items, containers, setContainers);
      }
      // If it's not over an item, do nothing (item returns to the original position)
    }
  }

  return (
    <div className='page'>
      <header className="header">
        <h1 className="h1">Medicine Program Assessment Map</h1>
        <p className="p">
          This is an example of assessments for Phase 3 (Year 5 and Year 6) of the UNSW Medicine Program in 2024. Depending on your rotation, your schedule will look different. To help you visualise things better, this page allows you to drag and drop elements that can be moved. Non-movable elements will stay put. Please use this as a visual example only, for more accurate and up-to-date information, please refer to your program and course guides.
        </p>
        <p className="pRight">
          School of Clinical Medicine, 18th June 2024
        </p>
      </header>
      <DndContext
        sensors={sensors}
        collisionDetection={customCollisionDetection}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
      >
        {/*
          DndContext manages the drag-and-drop capabilities of the app.
          - 'sensors' determine how user input triggers drag operations.
          - 'collisionDetection' defines how elements detect they are being dragged over another.
          - 'onDragStart' and 'onDragEnd' handle what happens when dragging starts and ends.
        */}
        <SortableContext items={Object.keys(containers)} strategy={rectSortingStrategy}>
          <Grid
            columns={2}
            columnHeadings={columnHeadings}
            rowHeadings={rowHeadings}
          >
            {Object.keys(containers).map((key) => (
              <Container key={key} id={key} itemIDs={containers[key].map((itemId) => items.find(item => item.id === itemId))} />
            ))}
          </Grid>
          {/* 
            SortableContext is used to define which elements are sortable.
            We pass the keys of the "containers" object, making each container a sortable element.
            Grid component defines the layout of the containers, with column and row headings.
            For each ID in the container's list, you find the corresponding item from the 'items' array using 'items.find()'.
            This transforms IDs into full item objects.
            Container component iterates over the 'itemIDs' prop (which now contains item objects) and renders each item using the component <SortableItem>.
          */}
        </SortableContext>
        <DragOverlay>
          {activeId ? <SortableItem id={activeId} item={items.find(item => item.id === activeId)} /> : null}
        </DragOverlay>
        {/*
          DragOverlay component renders the item being dragged.
          If there is an activeId, it renders a SortableItem component with the corresponding item object.
          If there is no activeId, it renders nothing.
          SortableItem is rendered with the currently active item's details, which allows the item to be visually moved across the screen as the user drags it.
        */}
      </DndContext>
    </div>
  );
}
