import { Sidebar } from "../components/Sidebar";

export const Missions = () => {
    return (

        <div className="flex h-screen bg-gray-100">


            <Sidebar />


            {/* Contenu principal */}
            <div className="flex-1 p-8 overflow-y-auto">
                <h1 className="text-3xl font-bold mb-6">Missions</h1>

                <div className="flex justify-end mb-4 gap-1">
                    <button className="px-4 py-2 bg-amber-400 text-white cursor-pointer  hover:bg-indigo-700 transition-colors ">
                        Ajouter des Missions
                    </button>
                      <button className="px-4 py-2 bg-red-700 text-white cursor-pointer">
                        Supprimer des Missions
                    </button>

                </div>                
                
                <div className="bg-white shadow-2xl p-8 mt-4 flex flex-col gap-4">

                    <div className="flex pb-2  border-gray-200">
                        <h2 className="font-bold w-1/5">Titre</h2>
                        <h2 className="font-bold w-1/5">Lieu</h2>
                        <h2 className="font-bold w-1/5">Date</h2>
                        <h2 className="font-bold w-1/5">Etat</h2>
                        <h2 className="font-bold w-1/5">Bénévoles</h2>
                    </div>

                    <div className="flex">
                        <p className="w-1/5">Distribution de repas</p>
                        <p className="w-1/5">Lyon</p>
                        <p className="w-1/5">12 Mai 2025</p>
                        <p className="w-1/5">Active</p>
                        <p className="w-1/5">8</p>
                    </div>

                    <div className="flex">
                        <p className="w-1/5">Collecte de vêtements</p>
                        <p className="w-1/5">Bourg-en-Bresse</p>
                        <p className="w-1/5">18 Mai 2025</p>
                        <p className="w-1/5">En attente</p>
                        <p className="w-1/5">3</p>
                    </div>

                    <div className="flex">
                        <p className="w-1/5">Aide aux devoirs</p>
                        <p className="w-1/5">Villefranche</p>
                        <p className="w-1/5">20 Mai 2025</p>
                        <p className="w-1/5">Terminée</p>
                        <p className="w-1/5">12</p>
                    </div>

                    <div className="flex">
                        <p className="w-1/5">Nettoyage de plages</p>
                        <p className="w-1/5">Paris</p>
                        <p className="w-1/5">25 Mai 2025</p>
                        <p className="w-1/5">Active</p>
                        <p className="w-1/5">5</p>
                    </div>

                    <div className="flex">
                        <p className="w-1/5">Cours de français</p>
                        <p className="w-1/5">Marseille</p>
                        <p className="w-1/5">30 Mai 2025</p>
                        <p className="w-1/5">En attente</p>
                        <p className="w-1/5">2</p>
                    </div>

                    <div className="flex">
                        <p className="w-1/5">Accompagnement personnes âgées</p>
                        <p className="w-1/5">Bordeaux</p>
                        <p className="w-1/5">02 Juin 2025</p>
                        <p className="w-1/5">Active</p>
                        <p className="w-1/5">7</p>
                    </div>

                    <div className="flex">
                        <p className="w-1/5">Reforestation urbaine</p>
                        <p className="w-1/5">Toulouse</p>
                        <p className="w-1/5">05 Juin 2025</p>
                        <p className="w-1/5">Active</p>
                        <p className="w-1/5">15</p>
                    </div>

                    <div className="flex">
                        <p className="w-1/5">Aide alimentaire</p>
                        <p className="w-1/5">Nantes</p>
                        <p className="w-1/5">08 Juin 2025</p>
                        <p className="w-1/5">En attente</p>
                        <p className="w-1/5">4</p>
                    </div>

                    <div className="flex">
                        <p className="w-1/5">Soutien scolaire</p>
                        <p className="w-1/5">Strasbourg</p>
                        <p className="w-1/5">10 Juin 2025</p>
                        <p className="w-1/5">Active</p>
                        <p className="w-1/5">6</p>
                    </div>

                    <div className="flex">
                        <p className="w-1/5">Visite personnes isolées</p>
                        <p className="w-1/5">Lille</p>
                        <p className="w-1/5">12 Juin 2025</p>
                        <p className="w-1/5">Terminée</p>
                        <p className="w-1/5">9</p>
                    </div>

                    <div className="flex">
                        <p className="w-1/5">Collecte de jouets</p>
                        <p className="w-1/5">Rennes</p>
                        <p className="w-1/5">15 Juin 2025</p>
                        <p className="w-1/5">En attente</p>
                        <p className="w-1/5">1</p>
                    </div>

                    <div className="flex">
                        <p className="w-1/5">Aide alimentaire</p>
                        <p className="w-1/5">Nantes</p>
                        <p className="w-1/5">08 Juin 2025</p>
                        <p className="w-1/5">En attente</p>
                        <p className="w-1/5">4</p>
                    </div>

                    <div className="flex">
                        <p className="w-1/5">Soutien scolaire</p>
                        <p className="w-1/5">Strasbourg</p>
                        <p className="w-1/5">10 Juin 2025</p>
                        <p className="w-1/5">Active</p>
                        <p className="w-1/5">6</p>
                    </div>

                    <div className="flex">
                        <p className="w-1/5">Visite personnes isolées</p>
                        <p className="w-1/5">Lille</p>
                        <p className="w-1/5">12 Juin 2025</p>
                        <p className="w-1/5">Terminée</p>
                        <p className="w-1/5">9</p>
                    </div>

                    <div className="flex">
                        <p className="w-1/5">Collecte de jouets</p>
                        <p className="w-1/5">Rennes</p>
                        <p className="w-1/5">15 Juin 2025</p>
                        <p className="w-1/5">En attente</p>
                        <p className="w-1/5">1</p>
                    </div>

                    <div className="flex">
                        <p className="w-1/5">Aide alimentaire</p>
                        <p className="w-1/5">Nantes</p>
                        <p className="w-1/5">08 Juin 2025</p>
                        <p className="w-1/5">En attente</p>
                        <p className="w-1/5">4</p>
                    </div>

                  




                </div>
            </div>

        </div>
    );
};
