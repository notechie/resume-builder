import React from 'react';
import { useDrag, useDrop } from 'react-dnd';

function Section({ section, index, moveSection, onClick, onDelete }) {
  const ref = React.useRef(null);

  const [, drop] = useDrop({
    accept: 'SECTION',
    hover(item) {
      if (item.index === index) return;
      moveSection(item.index, index);
      item.index = index;
    },
  });

  const [{ isDragging }, drag] = useDrag({
    type: 'SECTION',
    item: { index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  drag(drop(ref));

  return (
    <div
      ref={ref}
      onClick={onClick}
      className={`relative p-4 mb-2 border rounded cursor-move bg-white ${
        isDragging ? 'opacity-50' : ''
      }`}
    >
      {/* Delete Button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onDelete(section.id);
        }}
        className="absolute top-0 right-0 p-1 w-8 text-red-500 hover:bg-red-200"
      >
        &times;
      </button>

      <h3 className="font-semibold text-lg">{section.heading}</h3>
      <div
        className="text-sm mt-2 whitespace-pre-wrap"
        dangerouslySetInnerHTML={{ __html: section.content }}
      ></div>
    </div>
  );
}

export default Section;
