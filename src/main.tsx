import { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./redux/features/store.ts";
import { Provider } from "react-redux";
import {
  createBrowserRouter,
  RouterProvider,
  useLocation,
} from "react-router-dom";
import App from "./App.tsx";
import { ProtectedRoute } from "./ProtectedRoute.tsx";
import Page404 from "./Page404.tsx";
import { Toaster } from "sonner";
import LoginRoute from "./LoginRoute.tsx";

import ScrollToTop from "react-scroll-to-top";

export type TRole = "admin" | "user";

const ScrollToTopAuto = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <ScrollToTopAuto />
        <ScrollToTop
          style={{
            backgroundColor: "#3B82F6",
            borderRadius: "9999px",
            padding: "10px",
            right: "1rem",
            bottom: "1rem",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
            height: "60px",
            width: "60px",
          }}
          component={
            <div>
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512"
                  className="w-8 h-9"
                >
                  <path
                    d="M32 448c-17.7 0-32 14.3-32 32s14.3 32 32 32l96 0c53 0 96-43 96-96l0-306.7 73.4 73.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 109.3 160 416c0 17.7-14.3 32-32 32l-96 0z"
                    fill="blue"
                  />
                </svg>
              </button>
            </div>
          }
          smooth
        />
        <App />
      </>
    ),
    
  },
  {
    path: "/admin",
    element: (
      <ProtectedRoute requiredRole="admin">
        <ScrollToTopAuto />
        <ScrollToTop
          style={{
            backgroundColor: "#3B82F6",
            borderRadius: "9999px",
            padding: "10px",
            right: "1rem",
            bottom: "1rem",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
            height: "60px",
            width: "60px",
          }}
          component={
            <div>
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512"
                  className="w-8 h-9"
                >
                  <path
                    d="M32 448c-17.7 0-32 14.3-32 32s14.3 32 32 32l96 0c53 0 96-43 96-96l0-306.7 73.4 73.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 109.3 160 416c0 17.7-14.3 32-32 32l-96 0z"
                    fill="blue"
                  />
                </svg>
              </button>
            </div>
          }
          smooth
        />
      </ProtectedRoute>
    ),
    
  },
  { path: "*", element: <Page404 /> },
  { path: "/login", element: <LoginRoute /> },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
      <Toaster />
    </Provider>
  </StrictMode>
);
