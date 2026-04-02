export const Service = () => {
  return (
    <section id="services"  className="py-16 bg-white">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="mt-4 text-4xl font-bold text-black lg:text-5xl">Des outils simples pour un impact maximal</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl">BenoveAide vous offre tous les outils nécessaires pour gérer vos missions bénévoles efficacement et créer un impact durable dans votre communauté.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-[#FCF8F1] bg-opacity-50 p-8 rounded-xl hover:shadow-lg transition-all duration-200">
            <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3 text-black">Gestion de missions</h3>
            <p className="text-gray-700 leading-relaxed">Créez, publiez et gérez vos missions bénévoles en quelques clics. Suivez les candidatures et coordonnez vos équipes facilement.</p>
          </div>
          <div className="bg-[#FCF8F1] bg-opacity-50 p-8 rounded-xl hover:shadow-lg transition-all duration-200">
            <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3 text-black">Planning intelligent</h3>
            <p className="text-gray-700 leading-relaxed">Coordonnez les disponibilités de vos bénévoles avec un calendrier intuitif. Recevez des rappels automatiques pour chaque mission.</p>
          </div>
          <div className="bg-[#FCF8F1] bg-opacity-50 p-8 rounded-xl hover:shadow-lg transition-all duration-200">
            <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3 text-black">Communication</h3>
            <p className="text-gray-700 leading-relaxed">Restez connecté avec votre équipe grâce à la messagerie intégrée. Partagez des mises à jour et coordonnez vos actions en temps réel.</p>
          </div>
          <div className="bg-[#FCF8F1] bg-opacity-50 p-8 rounded-xl hover:shadow-lg transition-all duration-200">
            <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3 text-black">Suivi des heures</h3>
            <p className="text-gray-700 leading-relaxed">Enregistrez et validez automatiquement les heures de bénévolat. Générez des attestations officielles pour valoriser l'engagement.</p>
          </div>
        </div>
      </div>
    </section>
  );
};