import DownloadButton from "../../components/general/DownloadButton";
import { Container, PageContainer, PDFEmbed } from "../../components/styles/docPages";

const resume = () => {
  return (
   <PageContainer>
    <Container>
      <h1>Resume</h1>
      <DownloadButton fileSrc="/files/resume.pdf"/>
    </Container>
    <PDFEmbed src="/files/resume.pdf"></PDFEmbed>
   </PageContainer> 
  );
}

export default resume;