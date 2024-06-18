import "./App.css";
import { Header, Main,Dashboard, Footer } from "./components/index";
import { BrowserRouter, Routes, Route } from "react-router-dom";
export default function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}
