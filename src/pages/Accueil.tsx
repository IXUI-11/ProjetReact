import { Hero } from "../components/Hero";
import { Service } from "../components/Service";
import { Entreprise } from "../components/Entreprise";
import { Footer } from "../components/Footer";
export const Accueil = () => {
    return (
        <>
            <Hero />
            <Service />
            <Entreprise />
            <Footer />
        </>
    );
}