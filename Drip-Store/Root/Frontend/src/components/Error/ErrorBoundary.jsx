import React, { Component } from 'react';
import { ErrorContext } from '@context/ErrorContext';
import ErrorFallback from './ErrorFallback';

class ErrorBoundary extends Component {
  static contextType = ErrorContext;

  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    if (this.context && this.context.addError) {
      this.context.addError({ error: error.toString(), errorInfo: JSON.stringify(errorInfo) });
    }
  }

  resetErrorBoundary = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (this.state.hasError) {
      return (
        <ErrorFallback
          error={this.state.error}
          resetErrorBoundary={this.resetErrorBoundary}
        />
      );
    }

    return this.props.children; 
  }
}

export default ErrorBoundary;