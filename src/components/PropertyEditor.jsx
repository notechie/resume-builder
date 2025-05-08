import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faGithub,
  faInstagram,
  faLinkedin,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faPhone,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";

// Add icons to library
library.add(
  faGithub,
  faInstagram,
  faLinkedin,
  faXTwitter,
  faEnvelope,
  faPhone,
  faGlobe
);

function PropertyEditor({ section, updateSection }) {
  const [fontSize, setFontSize] = useState(16);

  if (!section) {
    return <div className="w-1/5 p-4 border-l">Select a section to edit</div>;
  }

  const insertBullet = () => {
    const newContent = section.content + "\n• ";
    updateSection(section.id, "content", newContent);
  };

  const insertItalic = () => {
    const newContent = section.content + "<i>Your text here</i>";
    updateSection(section.id, "content", newContent);
  };

  const insertBold = () => {
    const newContent = section.content + "<b>Your text here</b>";
    updateSection(section.id, "content", newContent);
  };

  const insertFontSize = () => {
    const newContent =
      section.content +
      `<span style="font-size:${fontSize}px">Your text here</span>`;
    updateSection(section.id, "content", newContent);
  };

  const insertIcon = (iconName) => {
    const newContent =
      section.content +
      ` <i class="fa-brands fa-${iconName}"></i> `;
    updateSection(section.id, "content", newContent);
  };

  const insertSolidIcon = (iconName) => {
    const newContent =
      section.content +
      ` <i class="fa-solid fa-${iconName}"></i> `;
    updateSection(section.id, "content", newContent);
  };

  return (
    <div className="w-1/5 p-4 border-l">
      <h2 className="font-bold mb-4">Edit Section</h2>

      <label className="block text-sm font-medium">Heading</label>
      <input
        type="text"
        value={section.heading}
        onChange={(e) => updateSection(section.id, "heading", e.target.value)}
        className="w-full p-2 mb-4 border"
      />

      <div className="flex flex-wrap gap-2 mb-2">
        <button onClick={insertBullet} className="px-2 py-1 bg-gray-200 rounded">
          •
        </button>
        <button
          onClick={insertItalic}
          className="px-2 py-1 bg-gray-200 rounded italic"
        >
          i
        </button>
        <button
          onClick={insertBold}
          className="px-2 py-1 bg-gray-200 rounded font-bold"
        >
          B
        </button>

        <select
          value={fontSize}
          onChange={(e) => setFontSize(e.target.value)}
          className="border p-1 rounded"
        >
          {[12, 14, 16, 18, 20, 24, 30].map((size) => (
            <option key={size} value={size}>
              {size}px
            </option>
          ))}
        </select>

        <button
          onClick={insertFontSize}
          className="px-2 py-1 bg-gray-200 rounded"
        >
          Apply Size
        </button>
      </div>

      <div className="mb-4">
  <h3 className="font-semibold text-sm mb-2">Brand Icons</h3>
  <div className="grid grid-cols-4 gap-2 mb-3">
    <button
      onClick={() => insertIcon("github")}
      className="p-2 bg-gray-200 rounded"
      title="GitHub"
    >
      <FontAwesomeIcon icon={["fab", "github"]} />
    </button>
    <button
      onClick={() => insertIcon("instagram")}
      className="p-2 bg-gray-200 rounded"
      title="Instagram"
    >
      <FontAwesomeIcon icon={["fab", "instagram"]} />
    </button>
    <button
      onClick={() => insertIcon("linkedin")}
      className="p-2 bg-gray-200 rounded"
      title="LinkedIn"
    >
      <FontAwesomeIcon icon={["fab", "linkedin"]} />
    </button>
    <button
      onClick={() => insertIcon("x-twitter")}
      className="p-2 bg-gray-200 rounded"
      title="X (Twitter)"
    >
      <FontAwesomeIcon icon={["fab", "x-twitter"]} />
    </button>
  </div>

  <h3 className="font-semibold text-sm mb-2">Solid Icons</h3>
  <div className="grid grid-cols-3 gap-2">
    <button
      onClick={() => insertSolidIcon("envelope")}
      className="p-2 bg-gray-200 rounded"
      title="Mail"
    >
      <FontAwesomeIcon icon="envelope" />
    </button>
    <button
      onClick={() => insertSolidIcon("phone")}
      className="p-2 bg-gray-200 rounded"
      title="Phone"
    >
      <FontAwesomeIcon icon="phone" />
    </button>
    <button
      onClick={() => insertSolidIcon("globe")}
      className="p-2 bg-gray-200 rounded"
      title="Website"
    >
      <FontAwesomeIcon icon="globe" />
    </button>
  </div>
</div>


      <label className="block text-sm font-medium">Content</label>
      <textarea
        value={section.content}
        onChange={(e) => updateSection(section.id, "content", e.target.value)}
        className="w-full h-40 p-2 border"
      />
    </div>
  );
}

export default PropertyEditor;
