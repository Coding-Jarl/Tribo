import Header from "@components/Header";
import Footer from "@components/Footer";
import { Route, Routes } from "react-router-dom";
import { Home, SandBox, GamePage } from "@pages";
import Styled from "./style";

export default function App() {
  return (
    <>
      <Header />
      <Styled>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/games/:id" element={<GamePage />} />
          <Route path="/sandbox" element={<SandBox />} />
        </Routes>
      </Styled>
      <Footer />
    </>
  );
}
