import { Uploader } from "uploader";
import { UploadButton } from "react-uploader";
import "../pages/baterPonto/styleBP.sass";
import { MdOutlineUploadFile } from "react-icons/md";

const uploader = Uploader({
  apiKey: "free"
});

// 2. Upload Options
const options = { multi: true };

function ButtonUpload() { 
  return (
    <UploadButton 
      uploader={uploader} 
      options={options}
      
      onComplete={(files) => {
        const fileUrls = files.map(file => file.fileUrl).join("\n");
        alert(fileUrls); 
      }}
    >
      {({ onClick }) => (
        <button id="uploadBox" onClick={onClick} >
          <MdOutlineUploadFile />
        </button>
      )}
    </UploadButton>
  );
}

export default ButtonUpload;