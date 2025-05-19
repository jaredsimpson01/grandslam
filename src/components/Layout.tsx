import NavBar from "./NavBar";
import "../css/Layout.css";
import Footer from "./Footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <NavBar />
      <main className="page-content">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
