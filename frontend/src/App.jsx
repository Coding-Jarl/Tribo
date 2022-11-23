import Header from "@components/Header";
import Navbar from "@components/Navbar";
import Content from "@components/Content";
import Styled from "./style";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages";

export default function App() {
  return (
    <Styled>
      <Header />
      <Content>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Content>
      <Navbar />
    </Styled>
  );
}
