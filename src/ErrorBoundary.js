import React, { Component } from 'react';

// Interface for the props that the ErrorBoundary component expects.
// PropTypes can be used for prop validation in JavaScript files instead of TypeScript interfaces.
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false }; // Initially, no error has occurred
  }

  // This lifecycle method is called when an error is thrown in any of the child components.
  static getDerivedStateFromError() {
    return { hasError: true }; // When an error occurs, set hasError to true to trigger a re-render
  }

  // This lifecycle method is called after an error is thrown.
  // You can log the error information here or send it to a logging service.
  componentDidCatch(error, errorInfo) {
    console.error("Error caught by ErrorBoundary:", error, errorInfo); 
    // Logs the error and error information for debugging purposes
  }

  render() {
    // If an error has occurred, render fallback UI (an error message in this case)
    if (this.state.hasError) {
      return <h2>Something went wrong! 😞</h2>;
    }

    // If no error, render the children components
    return this.props.children;
  }
}

export default ErrorBoundary;
