import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <div className="page-content">{children}</div>
      <Footer />
    </>
  );
}
