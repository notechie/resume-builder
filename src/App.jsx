import React, { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import html2pdf from 'html2pdf.js';
import Sidebar from './components/Sidebar';
import Canvas from './components/Canvas';
import PropertyEditor from './components/PropertyEditor';

function App() {
  const [sections, setSections] = useState([]);
  const [selectedId, setSelectedId] = useState(null);

  const addSection = () => {
    const newSection = {
      id: Date.now(),
      heading: 'New Section',
      content: 'Section content here...',
    };
    setSections([...sections, newSection]);
  };

  const moveSection = (dragIndex, hoverIndex) => {
    const updated = [...sections];
    const [moved] = updated.splice(dragIndex, 1);
    updated.splice(hoverIndex, 0, moved);
    setSections(updated);
  };

  const updateSection = (id, field, value) => {
    setSections(sections.map(section =>
      section.id === id ? { ...section, [field]: value } : section
    ));
  };

  const deleteSection = (id) => {
    setSections(sections.filter(section => section.id !== id));
  };

  const downloadPDF = () => {
    const element = document.getElementById('resume-canvas');
    if (!element) {
      alert("No resume content found!");
      return;
    }

    html2pdf()
      .from(element)
      .set({
        margin: 0.5,
        filename: 'resume.pdf',
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
      })
      .save();
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="flex h-screen">
        <Sidebar addSection={addSection} downloadPDF={downloadPDF} />
        <Canvas
          sections={sections}
          moveSection={moveSection}
          setSelectedId={setSelectedId}
          deleteSection={deleteSection}
        />
        <PropertyEditor
          section={sections.find(s => s.id === selectedId)}
          updateSection={updateSection}
        />
      </div>
    </DndProvider>
  );
}

export default App;
