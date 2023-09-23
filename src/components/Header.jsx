import React, { useState } from "react";
import PropTypes from "prop-types";

import CustomForm from "../components/Form.jsx";
import "../assets/styles/header.css";

export const Header = ({ text }) => {
  const [toggle, setToggle] = useState(false);

  const toggleInput = () => {
    setToggle(!toggle);
  };

  return (
    <>
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
      {toggle && <CustomForm />}
    </>
  );
};

Header.propTypes = {
  text: PropTypes.string,
};
