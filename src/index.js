import React from "react";
import { createRoot } from "react-dom/client";  // gunakan createRoot
import { App } from "./app/App";
import "./index.css";

// Menggunakan createRoot untuk render
const root = createRoot(document.getElementById("root"));
root.render(<App />);
