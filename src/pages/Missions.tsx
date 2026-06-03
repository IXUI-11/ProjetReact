import { Sidebar } from "../components/Sidebar";
import { useEffect, useState } from "react";
import { ajouterMission, getToutLesMissions, modifierMission, supprimerMission, changerStatutMission } from "../api/missions";

// Interface qui définit la structure d'une mission récupérée depuis l'API
// Chaque mission a un id, un titre, un lieu, une date et un statut actif (1 = active, 0 = terminée)
interface Mission {
  id: number;
  titre: string;
  lieu: string;
  date_mission: string;
  actif: number;
}

export const Missions = () => {

  // Tableau contenant toutes les missions récupérées depuis l'API
  const [missions, setMissions] = useState([]);

  // Numéro de la page actuellement affichée (commence à 1)
  const [pageCourante, setPageCourante] = useState(1);

  // Nombre fixe de missions affichées par page
  const missionParPage = 10;

  // true = la modale d'ajout est ouverte, false = elle est fermée
  const [modalMission, setModalMission] = useState(false);

  // Champs du formulaire d'ajout de mission
  const [titre, setTitre] = useState("");
  const [lieu, setLieu] = useState("");
  const [description, setDescription] = useState("");
  const [date_mission, setDateMission] = useState("");

  // Message affiché temporairement après une action (ajout, suppression, modification)
  const [messageSucces, setMessageSucces] = useState("");

  // Stocke la mission cliquée pour la modifier (contient toutes ses données)
  const [missionAModifer, setMissionAModifer] = useState<any>(null);

  // true = la modale de modification est ouverte, false = elle est fermée
  const [modaleModifierMission, setModaleModifierMission] = useState(false);

  // Calcule quelles missions afficher selon la page courante
  // Ex : page 1 → indices 0 à 9, page 2 → indices 10 à 19
  function afficherDonnerParNombre() {
    const debut = (pageCourante - 1) * missionParPage;
    const fin = debut + missionParPage;
    const missionsAffichees = missions.slice(debut, fin);
    return { missionsAffichees, fin };
  }

  // On appelle la fonction et on récupère les missions à afficher + l'indice de fin (pour désactiver le bouton "Suivant")
  const { missionsAffichees, fin } = afficherDonnerParNombre();

  // useEffect : s'exécute une seule fois au chargement de la page
  // Il appelle l'API pour récupérer toutes les missions et les stocker dans le state
  useEffect(() => {
    const fetchMissions = async () => {
      const dataDeMissions = await getToutLesMissions();
      setMissions(dataDeMissions);
    };
    fetchMissions();
  }, []); // [] = ne se relance pas, seulement au premier affichage

  // Handlers pour le formulaire d'ajout
  // Chaque fonction met à jour le state correspondant quand l'utilisateur tape dans le champ
  function handleTitre(evenement: any) {
    setTitre(evenement.target.value);
  }
  function handleLieu(evenement: any) {
    setLieu(evenement.target.value);
  }
  function handleDescription(evenement: any) {
    setDescription(evenement.target.value);
  }
  function handleDateMission(evenement: any) {
    setDateMission(evenement.target.value);
  }

  // Handlers pour le formulaire de modification
  // On utilise le spread operator (...missionAModifer) pour copier toutes les données existantes
  // et on remplace uniquement le champ modifié, sans écraser les autres
  function handleModifierTitre(evenement: any) {
    setMissionAModifer({ ...missionAModifer, titre: evenement.target.value });
  }
  function handleModifierLieu(evenement: any) {
    setMissionAModifer({ ...missionAModifer, lieu: evenement.target.value });
  }
  function handleModifierDescription(evenement: any) {
    setMissionAModifer({ ...missionAModifer, description: evenement.target.value });
  }
  function handleModifierDateMission(evenement: any) {
    setMissionAModifer({ ...missionAModifer, date_mission: evenement.target.value });
  }

  // Envoie la nouvelle mission à l'API via ajouterMission()
  // Ensuite rafraîchit la liste et ferme la modale après 3 secondes
  async function soumettreAjoutMission() {
    const resultat = await ajouterMission(titre, lieu, description, date_mission);
    setMessageSucces(resultat.message);
    const data = await getToutLesMissions();
    setMissions(data);
    setTimeout(() => {
      setMessageSucces("");
      setModalMission(false); // ferme la modale après 3 secondes
    }, 3000);
  }

  // Supprime la mission dont on passe l'id en paramètre
  // Rafraîchit la liste et efface le message après 3 secondes
  async function supprimerUneMission(id: number) {
    const resultat = await supprimerMission(id);
    setMessageSucces(resultat.message);
    const data = await getToutLesMissions();
    setMissions(data);
    setTimeout(() => {
      setMessageSucces("");
    }, 3000);
  }

  // Envoie les nouvelles données de la mission modifiée à l'API
  // Rafraîchit la liste et ferme la modale après 3 secondes
  async function soumettreModification() {
    const resultat = await modifierMission(
      missionAModifer.id,
      missionAModifer.titre,
      missionAModifer.lieu,
      missionAModifer.description,
      missionAModifer.date_mission
    );
    setMessageSucces(resultat.message);
    const data = await getToutLesMissions();
    setMissions(data);
    setTimeout(() => {
      setMessageSucces("");
      setModaleModifierMission(false);
    }, 3000);
  }

  // Inverse le statut actif d'une mission
  // Si actif vaut 1 (active) → on met 0 (terminée), et inversement
  async function changerStatut(id: number, actifActuel: number) {
    let nouvelActif: number;

    if (actifActuel === 1) {
      nouvelActif = 0; // on désactive la mission
    } else {
      nouvelActif = 1; // on réactive la mission
    }

    const resultat = await changerStatutMission(id, nouvelActif);
    setMessageSucces(resultat.message);
    const data = await getToutLesMissions();
    setMissions(data);
    setTimeout(() => {
      setMessageSucces("");
    }, 3000);
  }

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />

      {/* Contenu principal de la page */}
      <div className="flex-1 p-8 overflow-y-auto">
        <h1 className="text-3xl font-bold mb-6">Missions</h1>

        {/* Bouton pour ouvrir la modale d'ajout de mission */}
        <div className="flex justify-end mb-4 gap-1">
          <button
            onClick={() => setModalMission(true)}
            className="px-4 py-2 bg-amber-400 text-white cursor-pointer hover:bg-indigo-700 transition-colors">
            Ajouter des Missions
          </button>
        </div>

        {/* Modale d'ajout : s'affiche uniquement si modalMission est true */}
        {modalMission && (
          <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
            <div className="bg-white p-8 rounded-xl w-full max-w-md">
              <h2 className="text-2xl font-bold mb-6">Ajouter une mission</h2>

              {/* Message de succès affiché après l'ajout */}
              {messageSucces && (
                <div className="bg-green-100 text-green-800 p-4 mb-4">
                  {messageSucces}
                </div>
              )}

              {/* Champs du formulaire d'ajout */}
              <div className="flex flex-col gap-4">
                <input type="text" placeholder="Titre" className="border p-2 rounded" value={titre} onChange={handleTitre} />
                <input type="text" placeholder="Lieu" className="border p-2 rounded" value={lieu} onChange={handleLieu} />
                <textarea placeholder="Description" className="border p-2 rounded" value={description} onChange={handleDescription} />
                <input type="date" className="border p-2 rounded" value={date_mission} onChange={handleDateMission} />
              </div>

              {/* Boutons Ajouter et Annuler */}
              <div className="flex gap-2 mt-6">
                <button onClick={soumettreAjoutMission} className="flex-1 py-2 bg-amber-400 text-white rounded">
                  Ajouter
                </button>
                <button onClick={() => { setModalMission(false); }} className="flex-1 py-2 bg-gray-200 rounded">
                  Annuler
                </button>
              </div>
            </div>
          </div>
        )}
        {/* Fin modale ajout */}

        {/* Modale de modification : s'affiche si modaleModifierMission est true ET qu'une mission est sélectionnée */}
        {modaleModifierMission && missionAModifer && (
          <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
            <div className="bg-white p-8 rounded-xl w-full max-w-md">
              <h2 className="text-2xl font-bold mb-6">Modifier une mission</h2>

              {/* Message de succès affiché après la modification */}
              {messageSucces && (
                <div className="bg-green-100 text-green-800 p-4 mb-4">
                  {messageSucces}
                </div>
              )}

              {/* Champs pré-remplis avec les données de la mission sélectionnée */}
              <div className="flex flex-col gap-4">
                <input type="text" className="border p-2 rounded"
                  value={missionAModifer.titre}
                  onChange={handleModifierTitre} />
                <input type="text" className="border p-2 rounded"
                  value={missionAModifer.lieu}
                  onChange={handleModifierLieu} />
                <textarea className="border p-2 rounded"
                  value={missionAModifer.description}
                  onChange={handleModifierDescription} />
                <input type="date" className="border p-2 rounded"
                  value={missionAModifer.date_mission}
                  onChange={handleModifierDateMission} />
              </div>

              {/* Boutons Modifier et Annuler */}
              <div className="flex gap-2 mt-6">
                <button onClick={soumettreModification} className="flex-1 py-2 bg-blue-600 text-white rounded">
                  Modifier
                </button>
                <button onClick={() => { setModaleModifierMission(false); }} className="flex-1 py-2 bg-gray-200 rounded">
                  Annuler
                </button>
              </div>
            </div>
          </div>
        )}
        {/* Fin modale modification */}

        {/* Tableau listant les missions de la page courante */}
        <div className="bg-white shadow-2xl p-8 mt-4 flex flex-col gap-4">

          {/* En-têtes des colonnes du tableau */}
          <div className="flex pb-2 border-gray-200">
            <h2 className="font-bold w-1/4">Titre</h2>
            <h2 className="font-bold w-1/4">Lieu</h2>
            <h2 className="font-bold w-1/4">Date Mission</h2>
            <h2 className="font-bold flex-1">Etat</h2>
          </div>

          {/* On boucle sur les missions de la page courante et on affiche une ligne par mission */}
          {missionsAffichees.map((missionInterface: Mission) => (
            <div className="flex text-black" key={missionInterface.id}>
              <p className="w-1/4">{missionInterface.titre}</p>
              <p className="w-1/4">{missionInterface.lieu}</p>
              <p className="w-1/4">{missionInterface.date_mission}</p>

              {/* Ternaire : affiche "Actif" si actif vaut 1, sinon "Terminée" */}
              <p className="w-1/4">
                {missionInterface.actif === 1 ? "Actif" : "Terminée"}
              </p>

              {/* Bouton rouge pour supprimer la mission */}
              <button
                onClick={() => { supprimerUneMission(missionInterface.id); }}
                className="px-2 py-1 bg-red-600 text-white rounded text-sm cursor-pointer"
              >
                Supprimer
              </button>

              {/* Bouton orange si active (pour désactiver) ou vert si terminée (pour réactiver) */}
              <button
                onClick={() => { changerStatut(missionInterface.id, missionInterface.actif); }}
                className={`px-2 py-1 rounded text-sm cursor-pointer text-white ${missionInterface.actif === 1 ? 'bg-orange-500' : 'bg-green-500'}`}
              >
                {missionInterface.actif === 1 ? "Désactiver" : "Activer"}
              </button>

              {/* Bouton bleu pour ouvrir la modale de modification avec les données de cette mission */}
              <button
                onClick={() => {
                  setMissionAModifer(missionInterface); // on stocke la mission cliquée
                  setModaleModifierMission(true); // on ouvre la modale
                }}
                className="px-2 py-1 bg-blue-600 text-white rounded text-sm cursor-pointer ml-2"
              >
                Modifier
              </button>
            </div>
          ))}
        </div>
        {/* Fin tableau missions */}

        {/* Pagination : Précédent désactivé si on est page 1, Suivant désactivé si on a affiché toutes les missions */}
        <div className="flex justify-center gap-2 mt-4">
          <button
            onClick={() => { setPageCourante(pageCourante - 1); }}
            disabled={pageCourante === 1}
            className="px-4 py-2 bg-gray-200 cursor-pointer disabled:opacity-50"
          >
            Précédent
          </button>
          <span className="px-4 py-2">{pageCourante}</span>
          <button
            onClick={() => { setPageCourante(pageCourante + 1); }}
            disabled={fin >= missions.length}
            className="px-4 py-2 bg-gray-200 cursor-pointer disabled:opacity-50"
          >
            Suivant
          </button>
        </div>
        {/* Fin pagination */}

      </div>
    </div>
  );
};