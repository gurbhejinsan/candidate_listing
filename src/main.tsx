import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import ErrorBoundary from "./ErrorBoundary.tsx";
import { ToastContainer } from "react-toastify";
import "./tailwind.css";
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ErrorBoundary>
    <QueryClientProvider client={queryClient}>
      <App />
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </QueryClientProvider>
  </ErrorBoundary>
);
