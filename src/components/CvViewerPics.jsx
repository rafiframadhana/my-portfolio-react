const CVViewerPics = () => {
  return (
    <div className="cv-viewer-container">
      <iframe
        src={"/cv-example_pics.pdf"}
        title="CV Viewer"
        style={{ 
          width: "100%", 
          height: "100vh", 
          border: "none" 
        }}
      >
        <p>
          Your browser doesn't support PDF viewing. 
          <a href="/cv-example_pics.pdf" download>
            Click here to download the PDF
          </a>
        </p>
      </iframe>
    </div>
  );
};

export default CVViewerPics;