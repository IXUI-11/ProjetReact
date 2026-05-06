import { Route, Routes } from "react-router-dom";
import { Accueil } from "./pages/Accueil";
import { Login } from "./pages/Login";
import { Admin } from "./pages/Admin";
import { Missions } from "./pages/Missions";


export const App = () => {
  return (
    <div className="min-h-screen">
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Admin" element={<Admin />}/>
        <Route path="/Missions" element={<Missions />} />
      </Routes>
    </div>
  );
};
