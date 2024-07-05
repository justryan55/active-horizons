import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import App from "../App";
import Pricing from "../pages/Pricing";
import Blog from "../pages/Blog";
import Physiotherapy from "../pages/Physiotherapy";
import Layout from "../components/Layout";
import About from "../pages/About";
import Policies from "../pages/Policies";
import Home from "../pages/Home";

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
          path="/pricing"
          element={
            <Layout>
              <Pricing />
            </Layout>
          }
        />
        <Route
          path="/blog"
          element={
            <Layout>
              <Blog />
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
      </Routes>
    </Router>
  );
};

export default AppRouter;
