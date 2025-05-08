import React from 'react';

function Sidebar({ addSection, downloadPDF }) {
  return (
    <div className="w-1/5 p-4 border-r">
      <h2 className="font-bold mb-4">Resume Builder</h2>
      <button
        onClick={addSection}
        className="block w-full py-2 px-4 bg-blue-500 text-white rounded mb-4"
      >
        + Add Section
      </button>
      <button
        onClick={downloadPDF}
        className="block w-full py-2 px-4 bg-green-500 text-white rounded"
      >
        Download as PDF
      </button>
    </div>
  );
}

export default Sidebar;
