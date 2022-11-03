import React from "react";
import ReactCountryFlag from "react-country-flag";
import { useContext } from "react";
import { dataContext } from "./../../pages/index";

const LangButton = () => {
  const { lang, changeLang } = useContext(dataContext);
  return (
    <button
      type="button"
      className="absolute bottom-20 right-16"
      onClick={changeLang}
    >
      {lang === "hy" ? (
        <ReactCountryFlag
          countryCode="US"
          className="emojiFlag pointer-events-none"
          style={{
            fontSize: "2rem",
            lineHeight: "2rem",
          }}
          aria-label="United States"
          title="US"
          svg
        />
      ) : (
        <ReactCountryFlag
          style={{
            fontSize: "2rem",
            lineHeight: "2rem",
          }}
          aria-label="Republic of Armenia"
          title="AM"
          className="emojiFlag pointer-events-none"
          countryCode="AM"
          svg
        />
      )}
    </button>
  );
};

export default LangButton;
