export const Entreprise = () => {
  return (
    <section className="py-20 bg-[#FCF8F1] bg-opacity-30">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-6xl mb-16">
          <h2 className="mt-4 text-4xl font-bold text-black lg:text-5xl mb-8">À propos de BenoveAide</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-xl text-gray-700 mb-6 leading-relaxed">BenoveAide est née d'une vision simple mais ambitieuse : créer un pont solide entre les associations qui cherchent de l'aide et les citoyens désireux de s'engager dans des actions solidaires. Dans un monde où l'engagement bénévole est plus que jamais essentiel, nous avons constaté qu'il manquait une plateforme moderne, intuitive et efficace pour faciliter ces rencontres.</p>
              <p className="text-xl text-gray-700 mb-6 leading-relaxed">Notre mission va bien au-delà de la simple mise en relation. Nous voulons transformer l'expérience du bénévolat en France en rendant chaque étape accessible, transparente et gratifiante. Que vous soyez une petite association locale qui organise des maraudes, une grande ONG internationale qui coordonne des projets environnementaux, ou un particulier qui dispose de quelques heures par semaine pour aider sa communauté, BenoveAide est votre allié.</p>
              <p className="text-xl text-gray-700 leading-relaxed">La plateforme permet aux associations de publier leurs missions, de gérer les candidatures, de planifier les interventions et de suivre l'impact de leurs actions.</p>
            </div>
            <div>
              <p className="text-xl text-gray-700 mb-6 leading-relaxed">Pour les bénévoles, c'est l'opportunité de découvrir des centaines de missions adaptées à leurs compétences, leurs disponibilités et leurs centres d'intérêt. Vous êtes passionné par l'éducation ? Trouvez des missions de soutien scolaire. Vous aimez la nature ? Participez à des projets de reforestation. Vous avez des compétences en communication ? Aidez des associations à développer leur visibilité.</p>
              <p className="text-xl text-gray-700 leading-relaxed">Depuis notre lancement, nous avons accompagné plus de 500 associations et permis à plus de 2000 bénévoles de trouver leur mission idéale. Ensemble, ils ont réalisé plus de 5000 missions qui ont eu un impact concret sur le terrain : distribution de repas, accompagnement de personnes âgées, collectes de vêtements, cours de français pour réfugiés, nettoyage de plages, aide aux devoirs, et bien d'autres actions qui font la différence au quotidien.</p>
            </div>
          </div>
        </div>
        <div className="grid lg:grid-cols-3 gap-10 mb-16">
          <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-200">
            <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center mb-6"><span className="text-white text-3xl font-bold">1</span></div>
            <h3 className="text-2xl font-bold text-black mb-4">Pour les Associations</h3>
            <p className="text-gray-700 leading-relaxed mb-4">Gérez vos missions bénévoles de manière professionnelle et efficace. Publiez vos besoins en quelques clics, recevez des candidatures qualifiées, planifiez les interventions grâce à notre calendrier intégré, et suivez l'impact de vos actions avec nos outils de reporting.</p>
            <p className="text-gray-700 leading-relaxed">Notre plateforme vous aide également à fidéliser vos bénévoles en leur offrant une expérience fluide et valorisante. Chaque bénévole peut suivre son parcours, voir l'impact de ses contributions et recevoir des attestations pour valoriser son engagement.</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-200">
            <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mb-6"><span className="text-black text-3xl font-bold">2</span></div>
            <h3 className="text-2xl font-bold text-black mb-4">Pour les Bénévoles</h3>
            <p className="text-gray-700 leading-relaxed mb-4">Découvrez des centaines de missions qui correspondent à vos valeurs, vos compétences et vos disponibilités. Notre système de matching intelligent vous propose les opportunités les plus pertinentes en fonction de votre profil. Filtrez par thématique, localisation, durée d'engagement ou type de mission.</p>
            <p className="text-gray-700 leading-relaxed">Construisez votre parcours bénévole en participant à des missions variées, développez de nouvelles compétences, élargissez votre réseau et contribuez concrètement à des causes qui vous tiennent à cœur. Votre tableau de bord personnel vous permet de suivre toutes vos missions passées et à venir.</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-200">
            <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center mb-6"><span className="text-white text-3xl font-bold">3</span></div>
            <h3 className="text-2xl font-bold text-black mb-4">Notre Engagement</h3>
            <p className="text-gray-700 leading-relaxed mb-4">BenoveAide est et restera toujours une plateforme gratuite, car nous croyons que l'engagement solidaire ne doit pas avoir de barrière financière. Nous investissons continuellement dans la sécurité de vos données, la fluidité de l'expérience utilisateur et le développement de nouvelles fonctionnalités.</p>
            <p className="text-gray-700 leading-relaxed">Notre équipe support est disponible pour accompagner les associations et les bénévoles dans leur utilisation de la plateforme. Nous organisons régulièrement des webinaires de formation et nous publions des guides pratiques pour vous aider à tirer le meilleur parti de BenoveAide.</p>
          </div>
        </div>
     
        <div className="mt-16 max-w-4xl">
          <h3 className="text-3xl font-bold text-black mb-6">Rejoignez le mouvement</h3>
          <p className="text-xl text-gray-700 mb-6 leading-relaxed">Que vous représentiez une association ou que vous souhaitiez vous engager en tant que bénévole, BenoveAide vous attend. Ensemble, construisons une société plus solidaire, plus engagée et plus humaine. Chaque action compte, chaque heure donnée fait la différence, et chaque rencontre crée des liens qui transforment notre monde.</p>
          <p className="text-xl text-gray-700 mb-8 leading-relaxed">L'inscription est simple, rapide et entièrement gratuite. Rejoignez dès aujourd'hui notre communauté grandissante de citoyens engagés et d'associations innovantes. Votre aventure solidaire commence ici, sur BenoveAide.</p>
          <a href="#" className="inline-flex items-center px-6 py-4 font-semibold text-black transition-all duration-200 bg-yellow-300 rounded-full hover:bg-yellow-400 focus:bg-yellow-400" role="button">
            Rejoindre BenoveAide
            <svg className="w-6 h-6 ml-8 -mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};