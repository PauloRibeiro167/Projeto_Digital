// src/components/ErrorBoundary.jsx
import React, { Component } from 'react';
import { ErrorContext } from '@context/ErrorContext';

class ErrorBoundary extends Component {
  static contextType = ErrorContext;

  componentDidCatch(error, errorInfo) {
    this.context.addError({ error, errorInfo });
  }

  render() {
    return this.props.children;
  }
}

export default ErrorBoundary;