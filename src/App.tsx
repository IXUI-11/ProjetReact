import { Route, Routes } from "react-router-dom";
import { Accueil } from "./pages/Accueil";
import { Login } from "./pages/Login";
import { Footer } from "./components/Footer";

export const App = () => {
  return (
    <div className="min-h-screen">
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </div>
  );
};
