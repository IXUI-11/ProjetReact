import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { creerCompte } from "../api/inscription";

const inputClass = "w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-600 transition-colors";
const labelClass = "block text-sm font-semibold text-gray-700 mb-2";

export const Inscription = () => {
    const [nom, setNom] = useState("");
    const [prenom, setPrenom] = useState("");
    const [email, setEmail] = useState("");
    const [motDePasse, setMotDePasse] = useState("");
    const [adresse, setAdresse] = useState("");
    const [codePostal, setCodePostal] = useState("");
    const [dateNaissance, setDateNaissance] = useState("");
    const [messageSucces, setMessageSucces] = useState("");
    const [messageErreur, setMessageErreur] = useState("");
    const redirigerUtilisateur = useNavigate();

    async function soumettreInscription(evenement: any) {
        evenement.preventDefault();
        const donnees = await creerCompte(nom, prenom, email, motDePasse, adresse, codePostal, dateNaissance);
        if (donnees.message) {
            setMessageSucces("Compte créé avec succès !");
            setTimeout(() => { redirigerUtilisateur("/login"); }, 2000);
        } else {
            setMessageErreur("Erreur lors de la création du compte");
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#FCF8F1] px-4">
            <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
                <h2 className="text-3xl font-bold mb-2 text-black">Créer un compte</h2>
                <p className="text-gray-600 mb-8">Rejoignez la communauté BenoveAide</p>

                {messageSucces && <p className="text-green-500 mb-4">{messageSucces}</p>}
                {messageErreur && <p className="text-red-500 mb-4">{messageErreur}</p>}

                <form className="space-y-6" onSubmit={soumettreInscription}>

                    <label className={labelClass}>Prénom</label>
                    <input type="text" className={inputClass} placeholder="Votre prénom"
                        value={prenom} onChange={(e) => { setPrenom(e.target.value); }} />

                    <label className={labelClass}>Nom</label>
                    <input type="text" className={inputClass} placeholder="Votre nom"
                        value={nom} onChange={(e) => { setNom(e.target.value); }} />

                    <label className={labelClass}>Email</label>
                    <input type="email" className={inputClass} placeholder="votre@email.com"
                        value={email} onChange={(e) => { setEmail(e.target.value); }} />

                    <label className={labelClass}>Mot de passe</label>
                    <input type="password" className={inputClass} placeholder="••••••••"
                        value={motDePasse} onChange={(e) => { setMotDePasse(e.target.value); }} />

                    <label className={labelClass}>Adresse</label>
                    <input type="text" className={inputClass} placeholder="Votre adresse"
                        value={adresse} onChange={(e) => { setAdresse(e.target.value); }} />

                    <label className={labelClass}>Code postal</label>
                    <input type="text" className={inputClass} placeholder="Code postal"
                        value={codePostal} onChange={(e) => { setCodePostal(e.target.value); }} />

                    <label className={labelClass}>Date de naissance</label>
                    <input type="date" className={inputClass}
                        value={dateNaissance} onChange={(e) => { setDateNaissance(e.target.value); }} />

                    <button type="submit">
                        Créer mon compte
                    </button>

                </form>

                <p className="text-center text-gray-600 mt-6 text-sm">
                    Déjà un compte ?{" "}
                    <button onClick={() => { redirigerUtilisateur("/login"); }} className="text-indigo-600 hover:underline font-semibold">
                        Se connecter
                    </button>
                </p>
            </div>
        </div>
    );
};