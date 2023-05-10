import React from 'react';
import { type FallbackProps } from 'react-error-boundary';

export const ErrorFallback = ({ error, resetErrorBoundary }: FallbackProps) => {
  console.error(error);

  return (
    <fieldset>
      <h1>Oh dear</h1>
      <p>
        This went wrong :|
      </p>
      <small>Error: {error.message}</small><br />
      <button onClick={resetErrorBoundary}>Try again</button>
    </fieldset>
  );
};
