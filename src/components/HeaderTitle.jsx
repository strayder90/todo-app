import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const HeaderTitle = ({ text, toggleInput }) => {
  return (
    <header className="wrapper">
      <h1 className="title">
        {text}
        <span>
          <i onClick={toggleInput} role="button" className="pencil alternate small icon"></i>
          {false && (
            <Link to={"/deleted"}>
              <i role="button" className="trash small icon button-delete" />
            </Link>
          )}
        </span>
      </h1>
      <h4>Klikni na olovku da dodas nov todo :)</h4>
    </header>
  );
};

HeaderTitle.propTypes = {
  text: PropTypes.string,
  toggleInput: PropTypes.func,
};
