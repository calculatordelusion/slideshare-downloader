import { useContext, useState } from "react";
import { AppContext } from "../../store";
import { Button } from "../UI";
import { Download } from "../UI/Icons";
import styles from "./DownloadPDF.module.css";

const DownloadPDF = ({ label }) => {
  const { state } = useContext(AppContext);
  const [pdfData, setPdfData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleButtonClick = async () => {
    try {
      setIsLoading(true);
      const response = await fetch("/api/create-pdf", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(state.selected_slides),
      });

      if (!response.ok) {
        setIsLoading(false);
        throw new Error("API request failed");
      }

      const pdfBlob = await response.blob();
      setPdfData(pdfBlob);

      // save the PDF using FileSaver.js
      const FileSaver = require("file-saver");
      FileSaver.saveAs(pdfBlob, state.title);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.error("Error generating PDF:", error);
    }
  };

  return (
    <div className={styles.wrapper}>
      <Button
        className={styles.button}
        onClick={handleButtonClick}
        disabled={isLoading}
        isLoading={isLoading}
        icon={<Download />}
        label={label || "Download as PDF"}
      />
    </div>
  );
};

export default DownloadPDF;
