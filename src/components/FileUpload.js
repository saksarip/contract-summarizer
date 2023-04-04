import React from "react";

const FileUpload = ({ onFileUpload }) => {
  const handleFileChange = (e) => {
    onFileUpload(e.target.files[0]);
  };

  return (
    <div>
      <label htmlFor="file-upload">Upload a PDF:</label>
      <input
        type="file"
        id="file-upload"
        accept=".pdf"
        onChange={handleFileChange}
      />
    </div>
  );
};

export default FileUpload;
