import { getDocument } from "pdfjs-dist";

export const extractTextFromPDF = async (file) => {
  const pdf = await getDocument(file).promise;
  let extractedText = "";

  for (let i = 1; i <= pdf.numPages; i++) {
    const page = await pdf.getPage(i);
    const content = await page.getTextContent();
    const strings = content.items.map((item) => item.str);
    extractedText += strings.join(" ") + "\n";
  }

  return extractedText;
};
