import React from 'react';
import Section from './Section';

function Canvas({ sections, moveSection, setSelectedId, deleteSection }) {
  return (
    <div id="resume-canvas" className="flex-1 p-6 overflow-auto bg-gray-50 border-l-2 border-gray-200">
      <h2 className="font-bold text-2xl mb-6 text-gray-800">Resume Layout</h2>
      {sections.length > 0 ? (
        sections.map((section, index) => (
          <Section
            key={section.id}
            section={section}
            index={index}
            moveSection={moveSection}
            onClick={() => setSelectedId(section.id)}
            onDelete={deleteSection}
          />
        ))
      ) : (
        <p className="text-gray-500">No sections added yet. Start by adding a section.</p>
      )}
    </div>
  );
}

export default Canvas;
