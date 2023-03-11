import Header from "@components/Header";
import Navbar from "@components/Navbar";
import Content from "@components/Content";
import Modal from "@components/Modal";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Styled from "./style";
import { GamePage, Home, SandBox } from "./pages";

export default function App() {
  return (
    <Styled>
      <Header />
      <Content>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/boardgames/:id" element={<GamePage />} />
          <Route path="/lab" element={<SandBox />} />
        </Routes>
      </Content>
      <Navbar />
      <Modal />
      <ToastContainer />
    </Styled>
  );
}
