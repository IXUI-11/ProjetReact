export const Footer = () => {
  return (
    <footer id="contact" className="bg-black text-white py-16">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">BenoveAide</h3>
            <p className="text-gray-400 leading-relaxed">La plateforme qui connecte bénévoles et associations pour un monde plus solidaire.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-6">Navigation</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-yellow-300 transition-colors duration-200">Accueil</a></li>
              <li><a href="#" className="text-gray-400 hover:text-yellow-300 transition-colors duration-200">Services</a></li>
              <li><a href="#" className="text-gray-400 hover:text-yellow-300 transition-colors duration-200">À propos</a></li>
              <li><a href="#" className="text-gray-400 hover:text-yellow-300 transition-colors duration-200">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-6">Pour les associations</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-yellow-300 transition-colors duration-200">Publier une mission</a></li>
              <li><a href="#" className="text-gray-400 hover:text-yellow-300 transition-colors duration-200">Gérer les bénévoles</a></li>
              <li><a href="#" className="text-gray-400 hover:text-yellow-300 transition-colors duration-200">Tarifs</a></li>
              <li><a href="#" className="text-gray-400 hover:text-yellow-300 transition-colors duration-200">Support</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-6">Suivez-nous</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-yellow-300 hover:text-black transition-all duration-200">
                <span className="font-bold">f</span>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-yellow-300 hover:text-black transition-all duration-200">
                <span className="font-bold">𝕏</span>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-yellow-300 hover:text-black transition-all duration-200">
                <span className="font-bold">in</span>
              </a>
            </div>
            <div className="mt-8">
              <a href="#" className="inline-flex items-center justify-center px-6 py-3 font-semibold text-black bg-yellow-300 rounded-full hover:bg-yellow-400 transition-all duration-200">
                S'inscrire gratuitement
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400">&copy; 2026 BenoveAide. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};