import React from "react";
import ReactCountryFlag from "react-country-flag";

const CustomLangButton = ({lang, changeLang, }) => {
  return (
    <button
      type="button"
      className="fixed top-5 right-5"
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

export default CustomLangButton;
