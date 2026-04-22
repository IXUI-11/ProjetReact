import { useState } from "react";

const inputClass = "w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-600 transition-colors";
const labelClass = "block text-sm font-semibold text-gray-700 mb-2";
const btnPrimary = "w-full py-3 bg-indigo-600 text-white font-semibold rounded-full hover:bg-indigo-700 transition-all duration-200";
const btnSecondary = "w-full py-3 bg-yellow-300 text-black font-semibold rounded-full hover:bg-yellow-400 transition-all duration-200";

export const Login = () => {
  const [estConnecter, setConnecter] = useState(true);
 const basculer = function() {
  setConnecter(!estConnecter);
};

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FCF8F1] px-4">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">

        <h2 className="text-3xl font-bold mb-2 text-black">
          {estConnecter ? "Connexion" : "Créer un compte"}
        </h2>
        <p className="text-gray-600 mb-8">
          {estConnecter ? "Connectez-vous à votre compte BenoveAide" : "Rejoignez la communauté BenoveAide"}
        </p>

        <form className="space-y-6">
          {!estConnecter && (
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

          <div>
            <label className={labelClass}>Email</label>
            <input type="email" className={inputClass} placeholder="votre@email.com" />
          </div>
          <div>
            <label className={labelClass}>Mot de passe</label>
            <input type="password" className={inputClass} placeholder="••••••••" />
          </div>

          {estConnecter && (
            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span className="text-sm text-gray-600">Se souvenir de moi</span>
              </label>
              <a href="#" className="text-sm text-indigo-600 hover:underline">Mot de passe oublié ?</a>
            </div>
          )}

          <button type="submit" className={btnPrimary}>
            {estConnecter ? "Se connecter" : "Créer mon compte"}
          </button>

          <button type="button" onClick={basculer} className={btnSecondary}>
            {estConnecter ? "Créer un compte" : "Se connecter"}
          </button>
        </form>

        <p className="text-center text-gray-600 mt-6 text-sm">
          {estConnecter ? "Pas encore de compte ? " : "Déjà un compte ? "}
          <button onClick={basculer} className="text-indigo-600 hover:underline font-semibold">
            {estConnecter ? "S'inscrire" : "Se connecter"}
          </button>
        </p>

      </div>
    </div>
  );
};