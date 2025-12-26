import "../styles/global.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />

      {/* Main content wrapper */}
      <main className="page-content">
        {children}
      </main>

      <Footer />
    </>
  );
}
