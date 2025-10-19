import { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import ResumePreview from "./components/ResumePreview";
import "./App.css";

function App() {
  const [themeColor, setThemeColor] = useState("#2563eb");
  const [font, setFont] = useState("sans");
  const [section, setSection] = useState({ skills: true });

  const toggleSection = (section) => {
    setSection((prev) => ({ ...prev, [section]: !prev[section] }));
  };
  return (
    <div className="min-h-screen  flex flex-col bg-gray-50">
      <Header />
      <div className="flex flex-grow m:flex-row overflow-hidden">
        <Sidebar
          setThemeColor={setThemeColor}
          setFont={setFont}
          toggleSection={toggleSection}
        />
        
        <div className="flex-1 overflow-y-auto">
          <ResumePreview
            themeColor={themeColor}
            font={font}
            section={section}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
