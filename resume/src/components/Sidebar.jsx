import React from "react";
import { useState } from "react";

const Sidebar = ({ setThemeColor, setFont, toggleSection }) => {
  const [showSkills, setShowSkills] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  const handleSkillsToggle = () => {
    setShowSkills(!showSkills);
    toggleSection("skills");
  };
  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden bg-blue-600 text-white px-4 py-2 m-3 rounded-lg shadow-md"
      >
        {isOpen ? "Close Settings" : "Open Settings"}
      </button>
      <aside
        className={`${
          isOpen ? "block" : "hidden"
        } md:block w-full md:w-1/4 min-w-[250px] md:h-screen bg-gray-100 p-5 border-r overflow-y-auto`}
      >
        <h2 className="text-lg font-semibold m-4">Customize Resume</h2>

        {/* theme Color */}
        <div className="mb-5">
          <label className="block text-sm font-medium mb-1">Theme Color</label>
          <input
            type="color"
            className="w-24 h-10 cursor-pointer"
            onChange={(e) => setThemeColor(e.target.value)}
          />
        </div>

        {/* Font Style */}

        <div className="mb-5">
          <label className="block text-sm font-medium mb-1">Font Style</label>
          <select
            className="p-2 border rounded w-full "
            onChange={(e) => setFont(e.target.value)}
          >
            <option value="sans">Sans Serif</option>
            <option value="serif">Serif</option>
            <option value="mono">Monospace</option>
          </select>
        </div>

        {/* Toggle Skills */}

        <div className="flex item-center space-x-2">
          <input
            type="checkbox"
            checked={showSkills}
            onChange={handleSkillsToggle}
          />
          <label className="text-sm">Show Skills</label>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
