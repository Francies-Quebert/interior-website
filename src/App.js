import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Layout from "./Component/Layout";
import AboutMe from "./Pages/AboutMe";
function App() {
  return (
    <div className="font-body">
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<AboutMe />} />
            {/* <Route path="/messages" component={Messages} /> */}
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
