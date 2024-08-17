import React, { useState, useEffect, ReactNode } from "react";

// Example of an error logging function (can be customized or replaced)
const logErrorToMyService = (error: Error, info: string) => {
  // Example: Send error and info to an external logging service
  console.error("Logging error:", error, "with info:", info);
  // You can integrate with services like Sentry, LogRocket, etc.
};

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode; // Optional custom fallback UI
}

const ErrorBoundary: React.FC<ErrorBoundaryProps> = ({
  children,
  fallback,
}) => {
  const [hasError, setHasError] = useState<boolean>(false);

  useEffect(() => {
    const errorHandler = (error: Error, info: { componentStack: string }) => {
      setHasError(true);
      logErrorToMyService(error, info.componentStack);
    };

    const handleError = (errorEvent: ErrorEvent) => {
      errorHandler(errorEvent.error, { componentStack: "" });
    };

    window.addEventListener("error", handleError);

    return () => {
      window.removeEventListener("error", handleError);
    };
  }, []);

  if (hasError) {
    return fallback || <h1>Something went wrong.</h1>;
  }

  return <>{children}</>;
};

export default ErrorBoundary;
