import React from "react";
import { useState } from "react";

const SkillsSidebar = ({ suggestedSkills, onAddSkill }) => {
     const [customSkill, setCustomSkill] = useState("");

  const handleCustomSkillAdd = () => {
    if (customSkill.trim()) {
      onAddSkill(customSkill.trim());
      setCustomSkill("");
    }
};
  return (
    <aside className="w-64 p-4 bg-gray-50 border-r">
      <div>
        <h2 className="text-lg font-semibold mb-3">Suggested Skills</h2>
        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-1 gap-2">
          {suggestedSkills.map((skill, index) => (
            <li
              key={index}
              onClick={() => onAddSkill(skill)}
              className="cursor-pointer bg-blue-100 text-blue-700 px-3 py-1 rounded text-sm hover:bg-blue-200 transition text-center"
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>

      <div className="border-t pt-4">
        <h3 className="text-sm font-medium mb-2 text-gray-700">
          Add Custom Skill
        </h3>
        <div className="flex items-center space-x-2">
          <input
            type="text"
            placeholder="e.g. UI Design"
            value={customSkill}
            onChange={(e) => setCustomSkill(e.target.value)}
            className="border rounded px-2 py-1 text-sm flex-1"
          />
          <button
            onClick={handleCustomSkillAdd}
            className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 transition"
          >
            +
          </button>
        </div>
      </div>
    </aside>
  );
};

export default SkillsSidebar;
