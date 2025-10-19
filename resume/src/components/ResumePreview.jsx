import React from "react";
import { useRef, useState } from "react";
import DownloadPDF from "../components/DownloadPdf";
import SkillsSidebar from "../components/SkillsSideBar";

const ResumePreview = ({ themeColor, font, section }) => {
  const resumeRef = useRef();
  // edit preview

  const [name, setName] = useState("Jack Rab");
  const [title, setTitle] = useState("Frontend Developer");
  const [education, setEducation] = useState(
    "B.Tech in Computer Science - 2025"
  );
  const [project, setProject] = useState(
    "Resume Builder - Built a live Preview & customization UI using React & Tailwind CSS."
  );

  const [isDownloading, setIsDownloading] = useState(false);


  const [skills, setSkills] = useState([
    "React.js",
    "Tailwind CSS",
    "JavaScript",
  ]);
  const fontClass =
    font === "serif"
      ? "font-serif"
      : font === "mono"
      ? "font-mono"
      : "font-sans";

  const suggestedSkills = [
    "HTML",
    "CSS",
    "Bootstrap",
    "React.js",
    "Next.js",
    "Node.js",
    "Git",
    "Figma",
    "Redux",
    "TypeScript",
  ];

  const handleAddSkill = (skill) => {
    if (!skills.includes(skill)) {
      setSkills([...skills, skill]);
    }
  };

  const EditableText = ({ value, onChange, className, style }) => {
    const [editing, setEditing] = useState(false);
    const [tempValue, setTempValue] = useState(value);
    const inputRef = useRef();

    React.useEffect(() => {
      setTempValue(value);
    }, [value]);

    const handleBlur = () => {
      setEditing(false);
      onChange(tempValue);
    };

    const handleKeyDown = (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        setEditing(false);
        onChange(tempValue);
      }
    };

    React.useEffect(() => {
      if (editing && inputRef.current) {
        inputRef.current.focus();
      }
    }, [editing]);
    return editing ? (
      <input
        ref={inputRef}
        value={tempValue}
        onChange={(e) => setTempValue(e.target.value)}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
        className={`border-b border-gray-400 focus:outline-none w-full ${className}`}
        style={style}
        autoFocus
      />
    ) : (
      <span
        onClick={() => setEditing(true)}
        className={`${className} cursor-text hover:bg-gray-100 px-1 rounded`}
        style={style}
      >
        {value}
      </span>
    );
  };
  // Remove skill
  const handleRemoveSkill = (skillToRemove) => {
    setSkills(skills.filter((skill) => skill !== skillToRemove));
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-200">
      {/* Sidebar */}
      <SkillsSidebar
        suggestedSkills={suggestedSkills}
        onAddSkill={handleAddSkill}
      />

      <section
        className={`p-4 sm:p-6 md:p-8 bg-white ${fontClass} flex flex-1 flex-col justify-start`}
        style={{
          borderTop: ` ${themeColor}`,
          transition: "all 0.3 ease",
        }}
      >
        <div
          ref={resumeRef}
          className="max-w-[794px] w-full mx-auto bg-white p-4 sm:p-6 md:p-8 shadow-lg rounded-lg"
        >
          {/* name */}
          <h1 className="text-3xl font-bold mb-1" style={{ color: themeColor }}>
            <EditableText value={name} onChange={setName} />
          </h1>
          {/* title */}
          <p className="text-gray-600 mb-4">
            <EditableText value={title} onChange={setTitle} />
          </p>

          {/* Education Section */}
          <div className="space-y-6">
            <div>
              <h2
                className="text-xl font-semibold border-b pb-1 mb-2"
                style={{ color: themeColor }}
              >
                Education
              </h2>
              <EditableText value={education} onChange={setEducation} />
            </div>

            {/* Projects Section */}
            <div>
              <h2
                className="text-xl font-semibold border-b pb-1 mb-2"
                style={{ color: themeColor }}
              >
                Projects
              </h2>
              <EditableText value={project} onChange={setProject} />
            </div>

            {/* Skills Section */}
            {section.skills && (
              <div>
                <h2
                  className="text-xl font-semibold border-b pb-1 mb-2 flex items-center justify-between"
                  style={{ color: themeColor }}
                >
                  Skills
                </h2>
                <ul className="list-disc ml-2 space-y-1">
                  {skills.map((skill, index) => (
                    <li
                      key={index}
                      className="flex items-center bg-gray-100 px-3 py-1 rounded-md text-sm"
                    >
                      <span>{skill}</span>
                      {!isDownloading && (
                        <button
                          onClick={() => handleRemoveSkill(skill)}
                          className="ml-2 text-red-500 hover:text-red-700 font-bold"
                        >
                          ×
                        </button>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        <DownloadPDF resumeRef={resumeRef} setIsDownloading={setIsDownloading} />
      </section>
    </div>
  );
};

export default ResumePreview;
