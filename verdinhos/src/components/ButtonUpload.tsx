import '../pages/baterPonto/styleBP.css';
import React, { useState } from 'react';
import axios from 'axios';
import { MdOutlineUploadFile } from "react-icons/md";

function ButtonUpload({ onFileSelect }) {
  const [files, setFiles] = useState([]);
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [arquivoAnexado, setArquivoAnexado] = useState(false);

  const handleFileChange = (event) => {
    const selectedFiles = Array.from(event.target.files);
    setFiles(selectedFiles);
    setArquivoAnexado(selectedFiles.length > 0);
    onFileSelect(selectedFiles.length > 0); // Atualiza o estado no componente pai
  };

  const handleMultipleSubmit = (event) => {
    event.preventDefault();

    if (!arquivoAnexado) {
      alert("Nenhum arquivo foi anexado. Selecione um arquivo para continuar.");
      return;
    }

    const url = 'http://localhost:3000/uploadFiles';
    const formData = new FormData();
    files.forEach((file, index) => {
      formData.append(`file${index}`, file);
    });

    const config = {
      headers: {
        'content-type': 'multipart/form-data',
      },
    };

    axios.post(url, formData, config)
      .then((response) => {
        console.log(response.data);
        setUploadedFiles(response.data.files);
      })
      .catch((error) => {
        console.error("Error uploading files: ", error);
      });
  };

  return (
    <div className="file-upload-container">
      <form onSubmit={handleMultipleSubmit}>
        <label htmlFor="file-upload" className="file-upload-label">
          {files.length > 0 ? files.map(file => file.name).join(', ') : <MdOutlineUploadFile />}
        </label>
        <input id="file-upload" type="file" multiple className="file-upload-input" onChange={handleFileChange} />
      </form>
      <div className="uploaded-files">
        {uploadedFiles.map((file, index) => (
          <img key={index} src={file} alt={`Uploaded content ${index}`} />
        ))}
      </div>
    </div>
  );
}

export default ButtonUpload;
