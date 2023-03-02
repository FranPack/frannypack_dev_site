import React from "react";
import { Link } from "react-router-dom";
import HomeLayout from "../components/Layouts/HomeLayout";
import "./pages.css";
import { Document, Page, pdfjs } from "react-pdf";

const Resume = () => {
  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

  return (
    <HomeLayout>
      <div className="page-header">
        <h1 className="page-title">Resume</h1>
        <Link className="download-link" rel="noopener noreferrer" target="_blank" to="/assets/docs/FranciscoRivera_Resume_2023.pdf" download="Francisco Rivera Resume.pdf">Download</Link>
      </div>
      <div className="resume-container">
        <Document file="/assets/docs/FranciscoRivera_Resume_2023.pdf">
          <Page
            pageNumber={1}
            renderTextLayer={false}
            renderAnnotationLayer={false}
            renderMode="svg"
          />
        </Document>
      </div>
    </HomeLayout>
  );
};

export default Resume;
