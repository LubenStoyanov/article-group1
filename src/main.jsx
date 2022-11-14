import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Nizami from "./components/Nizami";
import Kingsley from "./components/Kingsley";
import WordPress from "./routes/WordPress";
import MongoDB from "./routes/MongoDB";
import Express from "./routes/Express";
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
    path: "/mongodb",
    element: <MongoDB />,
  },
  {
    path: "/kingsley",
    element: <Kingsley />,
  },
  {
    path: "/wordpress",
    element: <WordPress />,
  },
  {
    path: "/express",
    element: <Express />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
);
