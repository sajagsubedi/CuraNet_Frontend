import "./App.css";
import { Header, Main, Footer,Login } from "./components/index";
import { BrowserRouter, Routes, Route } from "react-router-dom";
export default function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route exact path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}
