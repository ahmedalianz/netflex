import { Route, Routes } from "react-router-dom";

import Home from "pages/home";
import Watch from "pages/watch";

export default function DentistRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/watch" element={<Watch />} />
    </Routes>
  );
}
