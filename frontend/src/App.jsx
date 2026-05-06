import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import AppRoutes from "./routes/AppRoutes";
import Layout from "./components/layout/Layout";

export default function App() {
  return (
    <BrowserRouter>
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 3500,
          style: {
            fontFamily: "DM Sans, sans-serif",
            fontSize: "14px",
            borderRadius: "10px",
            border: "1px solid #dedad2",
            boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
          },
          success: {
            iconTheme: { primary: "#059669", secondary: "#fff" },
          },
          error: {
            iconTheme: { primary: "#e51b1b", secondary: "#fff" },
          },
        }}
      />
      <Layout>
        <AppRoutes />
      </Layout>
    </BrowserRouter>
  );
}
