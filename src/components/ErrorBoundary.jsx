import React from "react";
import PropTypes from "prop-types";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);

    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    alert(error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="ui negative large message">
          <i className="close icon"></i>
          <div name="header">We&apos;re sorry something went wrong</div>
          <p>{this.props.fallback}</p>
        </div>
      );
    } else {
      return this.props.children;
    }
  }
}

ErrorBoundary.propTypes = {
  fallback: PropTypes.string,
  children: PropTypes.object,
};

export default ErrorBoundary;
