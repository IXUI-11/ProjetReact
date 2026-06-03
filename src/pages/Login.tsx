import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ConnexionAdmin } from "../api/login";

// Classes CSS réutilisables pour les champs, labels et boutons
const inputClass = "w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-600 transition-colors";
const labelClass = "block text-sm font-semibold text-gray-700 mb-2";
const btnPrimary = "w-full py-3 bg-indigo-600 text-white font-semibold rounded-full hover:bg-indigo-700 transition-all duration-200";
//const btnSecondary = "w-full py-3 bg-yellow-300 text-black font-semibold rounded-full hover:bg-yellow-400 transition-all duration-200";

export const Login = () => {

  // Bascule entre le formulaire connexion et inscription
  const [formulaireConnexion, setFormulaireConnexion] = useState(true);

  // Champs du formulaire
  const [adresseMail, setAdresseMail] = useState("");
  const [mot_de_passe, setMotDePasse] = useState("");

  // Message d'erreur si le login échoue
  const [messageErreur, setMessageErreur] = useState("");

  // Hook de navigation pour rediriger l'utilisateur après connexion
  const redirigerUtilisateur = useNavigate();

  // Fonction appelée lors de la soumission du formulaire
  // Elle envoie les identifiants à l'API et redirige selon le rôle
  async function soumettreConnexion(evenement: any) {
    evenement.preventDefault(); // Empêche le rechargement de la page

    // Appel à la fonction API définie dans login.ts
    const donneesConnexion = await ConnexionAdmin(adresseMail, mot_de_passe);

    if (donneesConnexion.success) {
      // Si le rôle est 1, c'est un admin → redirection vers /Admin
      if (donneesConnexion.role === 1) {
        localStorage.setItem("role", donneesConnexion.role);
        redirigerUtilisateur("/Admin");
      } else {
        // Sinon c'est un bénévole → on sauvegarde son id et on redirige vers /benevole
        localStorage.setItem("role", donneesConnexion.role);
        localStorage.setItem("id_benevole", donneesConnexion.id_benevole);
        redirigerUtilisateur("/benevole");
      }
    } else {
      // Si la connexion échoue, on affiche le message d'erreur renvoyé par l'API
      setMessageErreur(donneesConnexion.message);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FCF8F1] px-4">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">

        {/* Titre et sous-titre qui changent selon le formulaire affiché */}
        <h2 className="text-3xl font-bold mb-2 text-black">
          {formulaireConnexion ? "Connexion" : "Créer un compte"}
        </h2>
        <p className="text-gray-600 mb-8">
          {formulaireConnexion ? "Connectez-vous à votre compte BenoveAide" : "Rejoignez la communauté BenoveAide"}
        </p>

        {/* Affichage conditionnel du message d'erreur */}
        {messageErreur && <p className="text-red-500 mb-4">{messageErreur}</p>}

        {/* Formulaire avec gestion de la soumission */}
        <form className="space-y-6" onSubmit={soumettreConnexion}>

          {/* Champs Prénom et Nom affichés uniquement en mode inscription */}
          {!formulaireConnexion && (
            <>
              <div>
                <label className={labelClass}>Prénom</label>
                <input type="text" className={inputClass} placeholder="Votre prénom" />
              </div>
              <div>
                <label className={labelClass}>Nom</label>
                <input type="text" className={inputClass} placeholder="Votre nom" />
              </div>
            </>
          )}

          {/* Champ Email */}
          <div>
            <label className={labelClass}>Email</label>
            <input
              type="email"
              className={inputClass}
              placeholder="votre@email.com"
              value={adresseMail}
              onChange={(e) => { setAdresseMail(e.target.value); }}
            />
          </div>

          {/* Champ Mot de passe */}
          <div>
            <label className={labelClass}>Mot de passe</label>
            <input
              type="password"
              className={inputClass}
              placeholder="••••••••"
              value={mot_de_passe}
              onChange={(e) => { setMotDePasse(e.target.value); }}
            />
          </div>

          {/* Case "Se souvenir de moi" et lien mot de passe oublié, affichés uniquement en mode connexion */}
          {formulaireConnexion && (
            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span className="text-sm text-gray-600">Se souvenir de moi</span>
              </label>
              <a href="#" className="text-sm text-indigo-600 hover:underline">Mot de passe oublié ?</a>
            </div>
          )}

          {/* Bouton de soumission principal */}
          <button type="submit" className={btnPrimary}>
            {formulaireConnexion ? "Se connecter" : "Créer mon compte"}
          </button>
          {/* 
          <button type="button" onClick={basculerFormulaire} className={btnSecondary}>
            {formulaireConnexion ? "Créer un compte" : "Se connecter"}
          </button> */}
        </form>

        {/* Lien de redirection vers la page d'inscription */}
        <p className="text-center text-gray-600 mt-6 text-sm">
          {formulaireConnexion ? "Pas encore de compte ? " : "Déjà un compte ? "}
          {/* <button onClick={basculerFormulaire} className="text-indigo-600 hover:underline font-semibold">
            {formulaireConnexion ? "S'inscrire" : "Se connecter"}
          </button> */}

          <button onClick={() => { redirigerUtilisateur("/inscription"); }} className="text-indigo-600 hover:underline font-semibold">
            S'inscrire
          </button>
        </p>

      </div>
    </div >
  );
};