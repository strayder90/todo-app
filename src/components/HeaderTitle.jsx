import React from "react";
import PropTypes from "prop-types";

export const HeaderTitle = ({ text, toggleInput }) => {
  return (
    <header className="wrapper">
      <h1 className="title">
        {text}
        <span>
          <i
            onClick={toggleInput}
            role="button"
            tabIndex={0}
            onKeyDown={toggleInput}
            className="pencil alternate small icon"
          ></i>
        </span>
      </h1>
    </header>
  );
};

HeaderTitle.propTypes = {
  text: PropTypes.string,
  toggleInput: PropTypes.func,
};
