import "../src/assets/ReactArticle/ReactArticle.css";
import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
// import Nizami from "./routes/Nizami";
import ArticleHTML from "./routes/ArticleHTML";
import WordPress from "./routes/WordPress";
import MongoDB from "./routes/MongoDB";
import Express from "./routes/Express";
import "./index.css";
import "./App2.css";
import "./Html.css";
import "./assets/ReactArticle/ReactArticle.css";
import ReactArticle from "./assets/ReactArticle/ReactArticle";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/reactarticle",
    element: <ReactArticle />,
  },
  {
    path: "/mongodb",
    element: <MongoDB />,
  },
  {
    path: "/articlehtml",
    element: <ArticleHTML />,
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
