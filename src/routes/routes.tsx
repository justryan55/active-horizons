import { Route, HashRouter as Router, Routes } from "react-router-dom";
import Physiotherapy from "../pages/Physiotherapy";
import Layout from "../components/Layout";
import About from "../pages/About";
import Policies from "../pages/Policies";
import Home from "../pages/Home";
import Contact from "../pages/Contact";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/about"
          element={
            <Layout>
              <About />
            </Layout>
          }
        />

        <Route
          path="/physiotherapy"
          element={
            <Layout>
              <Physiotherapy />
            </Layout>
          }
        />
        <Route
          path="/policies"
          element={
            <Layout>
              <Policies />
            </Layout>
          }
        />
        <Route
          path="/contact"
          element={
            <Layout>
              <Contact />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
};

export default AppRouter;
