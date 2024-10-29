// src/components/ErrorBoundary/ErrorBoundary.jsx
import React from 'react';
import * as Sentry from '@sentry/react';
import ErrorFallback from './ErrorFallback';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    Sentry.captureException(error, { extra: errorInfo });
  }

  render() {
    if (this.state.hasError) {
      return <ErrorFallback error={new Error('Something went wrong')} resetErrorBoundary={() => this.setState({ hasError: false })} />;
    }

    return this.props.children; 
  }
}

export default ErrorBoundary;