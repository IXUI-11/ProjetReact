// import {Navbar} from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Service } from "./components/Service";
import { Entreprise } from "./components/Entreprise";
import { Footer } from "./components/Footer";

export const App = () => {

    return (
    <div className="min-h-screen">
      {/* <Navbar /> */}
      <Hero/>
      <Service/>
      <Entreprise/>
      <Footer/>
    </div>
  );
}




