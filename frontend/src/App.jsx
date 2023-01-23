import Header from "@components/Header";
import Navbar from "@components/Navbar";
import Content from "@components/Content";
import { Routes, Route } from "react-router-dom";
import Styled from "./style";
import { GamePage, Home } from "./pages";

export default function App() {
  return (
    <Styled>
      <Header />
      <Content>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/games/:id" element={<GamePage />} />
        </Routes>
      </Content>
      <Navbar />
    </Styled>
  );
}
