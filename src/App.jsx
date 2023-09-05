import "./App.css";

import { Outlet } from "react-router-dom";
import Header from "./assets/layout/Header";
import Footer from "./assets/layout/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
