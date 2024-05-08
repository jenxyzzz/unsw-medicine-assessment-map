//This is the container that houses a sortable item

import React from "react";
import { useDroppable } from "@dnd-kit/core";
import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";

import SortableItem from "./SortableItem";

export default function Container(props) {
  const { id, itemIDs } = props;
  const { setNodeRef } = useDroppable({ id });

  return (
    <SortableContext id={id} items={itemIDs} strategy={verticalListSortingStrategy}>
      <div ref={setNodeRef} className="container">
        {itemIDs.map((item) => (
          <SortableItem key={item.id} id={item.id} item={item} />
        ))}
      </div>
    </SortableContext>
  );
}
