import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import myRoutes from "./MyRoutes/MyRoutes";
import { RouterProvider } from "react-router-dom";
import AuthProvider from "./Auth/AuthProvider/AuthProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={myRoutes} />
      </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>
);
