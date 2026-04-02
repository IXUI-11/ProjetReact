export const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FCF8F1] bg-opacity-30 px-4">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold mb-2 text-black">Connexion</h2>
        <p className="text-gray-600 mb-8">Connectez-vous à votre compte BenoveAide</p>
        <form className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
            <input type="email" id="email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-600 transition-colors" placeholder="votre@email.com" />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-2">Mot de passe</label>
            <input type="password" id="password" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-600 transition-colors" placeholder="••••••••" />
          </div>
          <div className="flex items-center justify-between">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              <span className="text-sm text-gray-600">Se souvenir de moi</span>
            </label>
            <a href="#" className="text-sm text-indigo-600 hover:underline">Mot de passe oublié ?</a>
          </div>
          <button type="submit" className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-full hover:bg-indigo-700 transition-all duration-200">Se connecter</button>
          <button type="button" className="w-full py-3 bg-yellow-300 text-black font-semibold rounded-full hover:bg-yellow-400 transition-all duration-200">Créer un compte</button>
        </form>
        <p className="text-center text-gray-600 mt-6 text-sm">Pas encore de compte ? <a href="#" className="text-indigo-600 hover:underline font-semibold">S'inscrire</a></p>
      </div>
    </div>
  );
};