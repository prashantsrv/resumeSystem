import React from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas-pro";
import{ useState } from "react";

const DownloadPDF = ({ resumeRef, setIsDownloading ,fileName = "My_Resume.pdf" }) => {
  // const [isDownloading, setIsDownloading] = useState(false);
   const [isProcessing, setIsProcessing] = useState(false);


  const handleDownloadPDF = async () => {
    const element = resumeRef.current;
    if (!element) return;
     setIsProcessing(true);
    setIsDownloading(true);

     await new Promise((resolve) => setTimeout(resolve, 100));

    const canvas = await html2canvas(element, {
      scale: 2,
      useCORS: true,
      backgroundColor: "#ffffff",
    });

    const imageData = canvas.toDataURL("image/png");

    const pdf = new jsPDF("p", "mm", "a4");
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

    pdf.addImage(imageData, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save(fileName);

    setIsDownloading(false);
     setIsProcessing(false);

  };
  return (
    <div className="p-4 text-center border-t bg-white">
      <button
        onClick={handleDownloadPDF}
        className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
      >
          {isProcessing ? "Generating..." : "Download Resume as PDF"}
      </button>
    </div>
  );
};

export default DownloadPDF;
