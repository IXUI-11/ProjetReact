import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { creerCompte } from "../api/inscription";

// Classes CSS réutilisables pour les champs du formulaire et les labels
const champsForm = "w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-600 transition-colors";
const labelClass = "block text-sm font-semibold text-gray-700 mb-2";

export const Inscription = () => {

    // États pour stocker les valeurs des champs du formulaire
    const [nom, setNom] = useState("");
    const [prenom, setPrenom] = useState("");
    const [email, setEmail] = useState("");
    const [motDePasse, setMotDePasse] = useState("");
    const [adresse, setAdresse] = useState("");
    const [codePostal, setCodePostal] = useState("");
    const [dateNaissance, setDateNaissance] = useState("");

    // États pour afficher les messages de succès ou d'erreur après soumission
    const [messageSucces, setMessageSucces] = useState("");
    const [messageErreur, setMessageErreur] = useState("");

    // Hook de navigation pour rediriger l'utilisateur vers une autre page
    const redirigerUtilisateur = useNavigate();

    // Handlers : chaque fonction récupère la valeur saisie dans le champ correspondant
    function handleNom(evenement: any) {
        setNom(evenement.target.value);
    }
    function handlePrenom(evenement: any) {
        setPrenom(evenement.target.value);
    }
    function handleEmail(evenement: any) {
        setEmail(evenement.target.value);
    }
    function handleMotDePasse(evenement: any) {
        setMotDePasse(evenement.target.value);
    }
    function handleAdresse(evenement: any) {
        setAdresse(evenement.target.value);
    }
    function handleCodePostal(evenement: any) {
        setCodePostal(evenement.target.value);
    }
    function handleDateNaissance(evenement: any) {
        setDateNaissance(evenement.target.value);
    }

    // Fonction appelée lors de la soumission du formulaire
    // Elle envoie les données à l'API et redirige vers /login si la création réussit
    async function soumettreInscription(evenement: any) {
        evenement.preventDefault(); // Empêche le rechargement de la page
        const donnees = await creerCompte(nom, prenom, email, motDePasse, adresse, codePostal, dateNaissance);
        if (donnees.message) {
            setMessageSucces("Compte créé avec succès !");
            setTimeout(() => { redirigerUtilisateur("/login"); }, 2000); // Redirection après 2 secondes
        } else {
            setMessageErreur("Erreur lors de la création du compte");
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#FCF8F1] px-4">
            <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">

                <h2 className="text-3xl font-bold mb-2 text-black">Créer un compte</h2>
                <p className="text-gray-600 mb-8">Rejoignez la communauté BenoveAide</p>

                {/* Affichage conditionnel du message de succès ou d'erreur */}
                {messageSucces && <p className="text-green-500 mb-4">{messageSucces}</p>}
                {messageErreur && <p className="text-red-500 mb-4">{messageErreur}</p>}

                {/* Formulaire d'inscription avec gestion de la soumission */}
                <form className="space-y-6" onSubmit={soumettreInscription}>

                    {/* Champ Prénom */}
                    <label className={labelClass}>Prénom</label>
                    <input type="text" className={champsForm} placeholder="Votre prénom"
                        value={prenom} onChange={handlePrenom} />

                    {/* Champ Nom */}
                    <label className={labelClass}>Nom</label>
                    <input type="text" className={champsForm} placeholder="Votre nom"
                        value={nom} onChange={handleNom} />

                    {/* Champ Email */}
                    <label className={labelClass}>Email</label>
                    <input type="email" className={champsForm} placeholder="votre@email.com"
                        value={email} onChange={handleEmail} />

                    {/* Champ Mot de passe */}
                    <label className={labelClass}>Mot de passe</label>
                    <input type="password" className={champsForm} placeholder="••••••••"
                        value={motDePasse} onChange={handleMotDePasse} />

                    {/* Champ Adresse */}
                    <label className={labelClass}>Adresse</label>
                    <input type="text" className={champsForm} placeholder="Votre adresse"
                        value={adresse} onChange={handleAdresse} />

                    {/* Champ Code postal */}
                    <label className={labelClass}>Code postal</label>
                    <input type="text" className={champsForm} placeholder="Code postal"
                        value={codePostal} onChange={handleCodePostal} />

                    {/* Champ Date de naissance */}
                    <label className={labelClass}>Date de naissance</label>
                    <input type="date" className={champsForm}
                        value={dateNaissance} onChange={handleDateNaissance} />

                    {/* Bouton de soumission du formulaire */}
                    <button type="submit">
                        Créer mon compte
                    </button>

                </form>

                {/* Lien de redirection vers la page de connexion */}
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