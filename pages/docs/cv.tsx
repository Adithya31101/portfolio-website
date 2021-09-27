import DownloadButton from "../../components/general/DownloadButton";
import { Container, PageContainer, PDFEmbed } from "../../components/styles/docPages";

const cv = () => {
  return (
   <PageContainer>
    <Container>
      <h1>Curriculum Vitae</h1>
      <DownloadButton fileSrc="/files/cv.pdf"/>
    </Container>
    <PDFEmbed src="/files/cv.pdf"></PDFEmbed>
   </PageContainer> 
  );
}

export default cv;