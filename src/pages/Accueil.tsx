import { Hero } from "../components/Hero";
import { Service } from "../components/Service";
import { Entreprise } from "../components/Entreprise";

export const Accueil = () => {
    return (
        <>
            <Hero />
            <Service />
            <Entreprise />
        </>
    );
}