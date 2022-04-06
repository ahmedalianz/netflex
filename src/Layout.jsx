import AllRoutes from "./routes";
import Footer from "components/Footer";
import NavBar from "components/Navbar";

export default function Layout() {
  return (
    <>
      <NavBar />
      <AllRoutes />
      <Footer />
    </>
  );
}
