
export const downloadCV = () => {
    const pdfUrl = "/CV-Carlos-Jimenez.pdf";
    console.log(pdfUrl);
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "CV-Carlos-Jimenez.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };