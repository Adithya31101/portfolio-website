import { IconButton } from "../styles/docPages";

const DownloadButton = ({fileSrc}: {fileSrc: string}) => {
  
  const downloadFile = (url: string) => {
    const link = document.createElement('a');
    link.href = url;
    link.click();
    link.remove();
  }
  return (
    <IconButton textColor="white" bgColor="blue" iconSrc="/icons/download.svg" onClick={() => downloadFile(fileSrc)}>
      <span className="icon"></span>
      <span>Download</span>
    </IconButton>
  );
}

export default DownloadButton;