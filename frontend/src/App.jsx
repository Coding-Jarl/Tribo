import Header from "@components/Header";
import Navbar from "@components/Navbar";
import Content from "@components/Content";
import { Routes, Route } from "react-router-dom";
import Styled from "./style";
import { Home, SandBox } from "./pages";

export default function App() {
  return (
    <Styled>
      <Header />
      <Content>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lab" element={<SandBox />} />
        </Routes>
      </Content>
      <Navbar />
    </Styled>
  );
}
