import { ChakraProvider, ColorModeProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Nizami from "./components/Nizami";
import Kingsley from "./components/Kingsley";
import Tobias from "./components/Tobias";
import Bruno from "./components/Bruno";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/nizami",
    element: <Nizami />,
  },
  {
    path: "/bruno",
    element: <Bruno />,
  },
  {
    path: "/kingsley",
    element: <Kingsley />,
  },
  {
    path: "/tobias",
    element: <Tobias />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
);
