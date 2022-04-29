//sans-mono
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";

import { AuthProvider } from "../Contexts/AuthContext";
import {Chats} from "./Chats";
export default function App() {
  return (
    <div style={{ fontFamily: "Noto Sans Mono" }}>
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/chats" element={<Chats />} />
            <Route path="/" element={<Login />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}
