import * as React from "react";
import Header from "./components/Header";
import "./assets/css/App.css";
import "bootstrap/dist/css/bootstrap.css";
import AuthProvider from "./auth/AuthProvider";

function App() {
  return (
    <AuthProvider>
      <Header />
    </AuthProvider>
  );
}

export default App;
