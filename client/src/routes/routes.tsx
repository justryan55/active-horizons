import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import App from "../App";
import Story from "../pages/Story";
import Pricing from "../pages/Pricing";
import Blog from "../pages/Blog";
import Team from "../pages/Team";
import Mission from "../pages/Mission";
import Physiotherapy from "../pages/Physiotherapy";
import NDIS from "../pages/NDIS";
import Layout from "../components/Layout";
import HowItWorks from "../pages/HowItWorks";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <App />
            </Layout>
          }
        />
        <Route
          path="/about"
          element={
            <Layout>
              <App />
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
          path="/story"
          element={
            <Layout>
              <Story />
            </Layout>
          }
        />
        <Route
          path="/team"
          element={
            <Layout>
              <Team />
            </Layout>
          }
        />
        <Route
          path="/mission"
          element={
            <Layout>
              <Mission />
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
          path="/how-it-works"
          element={
            <Layout>
              <HowItWorks />
            </Layout>
          }
        />
        <Route
          path="/ndis"
          element={
            <Layout>
              <NDIS />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
};

export default AppRouter;
