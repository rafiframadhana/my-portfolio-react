const CVViewer = () => {
  return (
    <div className="cv-viewer-container">
      <iframe
        src={"/RafifRamadhana_CV.pdf"}
        title="CV Viewer"
        style={{ 
          width: "100%", 
          height: "100vh", 
          border: "none" 
        }}
      >
        <p>
          Your browser doesn't support PDF viewing. 
          <a href="/RafifRamadhana_CV.pdf" download>
            Click here to download the PDF
          </a>
        </p>
      </iframe>
    </div>
  );
};

export default CVViewer;