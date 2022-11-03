import React from "react";
import { FaFileDownload } from "react-icons/fa";
import downloadPdf from "./downloading";
const DowbloadCvButton = () => {
  return (
    <button
      onClick={() => downloadPdf("NarekGrigoryan.pdf")}
      className="uppercase py-3 flex items-center
     hover:border-yellow-900 transition-color duration-500 justify-center min-w-[300px] 2xl:max-w-[320px]
      flex-col text-3xl  w-full border gap-4 border-stone-800 dark:border-stone-300 "
    >
      <span> Download Cv</span>
      <span>
        <FaFileDownload />
      </span>
    </button>
  );
};

export default DowbloadCvButton;
