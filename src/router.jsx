import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Product from "./pages/Product";
import HowItWorks from "./pages/HowItWorks";
import IndustryDomains from "./pages/IndustryDomains";
import Pricing from "./pages/Pricing";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ScheduleDemo from "./pages/ScheduleDemo";
import Connect from "./pages/Connect";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <Home />
      </Layout>
    ),
  },
  {
    path: "/product",
    element: (
      <Layout>
        <Product />
      </Layout>
    ),
  },
  {
    path: "/how-it-works",
    element: (
      <Layout>
        <HowItWorks />
      </Layout>
    ),
  },
  {
    path: "/industry-domains",
    element: (
      <Layout>
        <IndustryDomains />
      </Layout>
    ),
  },
  {
    path: "/pricing",
    element: (
      <Layout>
        <Pricing />
      </Layout>
    ),
  },
  {
    path: "/about",
    element: (
      <Layout>
        <About />
      </Layout>
    ),
  },
  {
    path: "/contact",
    element: (
      <Layout>
        <Contact />
      </Layout>
    ),
  },
  {
    path: "/login",
    element: (
      <Layout>
        <Login />
      </Layout>
    ),
  },
  {
    path: "/signup",
    element: (
      <Layout>
        <Signup />
      </Layout>
    ),
  },
  {
  path: "/schedule-demo",
  element: (
    <Layout>
      <ScheduleDemo />
    </Layout>
  ),
  },
  {
  path: "/connect",
  element: (
    <Layout>
      <Connect />
    </Layout>
  ),
},

]);
