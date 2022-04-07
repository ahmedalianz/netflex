import AllRoutes from "./routes";
import Footer from "components/Footer";
import NavBar from "components/Navbar";

export default function Layout({ currentLanguageCode }) {
  return (
    <>
      <NavBar />
      <AllRoutes />
      <Footer currentLanguageCode={currentLanguageCode} />
    </>
  );
}
