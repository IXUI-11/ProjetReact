import { Sidebar } from "../components/Sidebar";
import { useEffect, useState } from "react";
import { ajouterMission, getToutLesMissions, modifierMission, supprimerMission , changerStatutMission } from "../api/missions";


interface Mission {
  id: number;
  titre: string;
  lieu: string;
  date_mission: string;
  actif: number;
}

export const Missions = () => {
  const [missions, setMissions] = useState([]);
  const [pageCourante, setPageCourante] = useState(1);
  const missionParPage = 10;
  const [modalMission, setModalMission] = useState(false);
  const [titre, setTitre] = useState("");
  const [lieu, setLieu] = useState("");
  const [description, setDescription] = useState("");
  const [date_mission, setDateMission] = useState("");
  const [messageSucces, setMessageSucces] = useState("");
  const [missionAModifer, setMissionAModifer] = useState<any>(null);
  const [modaleModifierMission, setModaleModifierMission] = useState(false);

  // ! découper le tableau de missions en fonction de la page courante et du nombre de missions par page
  function afficherDonnerParNombre() {
    const debut = (pageCourante - 1) * missionParPage;
    const fin = debut + missionParPage;
    const missionsAffichees = missions.slice(debut, fin);
    return { missionsAffichees, fin };
  }

  const { missionsAffichees, fin } = afficherDonnerParNombre();

  // Todod  : a dépalcer 
  useEffect(() => {
    const fetchMissions = async () => {
      const dataDeMissions = await getToutLesMissions();
      setMissions(dataDeMissions);
    };
    fetchMissions();
  }, []);


  // 4 fonction pour les useState a revoir 

  function handleTitre(evenement: any) {
    setTitre(evenement.target.value)
  }

  function handleLieu(evenement: any) {
    setLieu(evenement.target.value)
  }

  function handleDescription(evenement: any) {
    setDescription(evenement.target.value)
  }

  function handleDateMission(evenement: any) {
    setDateMission(evenement.target.value)
  }

  // moodifer fonction 
  function handleModifierTitre(evenement: any) {
    setMissionAModifer({ ...missionAModifer, titre: evenement.target.value })
  }
  function handleModifierLieu(evenement: any) {
    setMissionAModifer({ ...missionAModifer, lieu: evenement.target.value })
  }
  function handleModifierDescription(evenement: any) {
    setMissionAModifer({ ...missionAModifer, description: evenement.target.value })
  }
  function handleModifierDateMission(evenement: any) {
    setMissionAModifer({ ...missionAModifer, date_mission: evenement.target.value })
  }


  // ajouter une mission et afficher le message de succes 
  async function soumettreAjoutMission() {
    const resultat = await ajouterMission(titre, lieu, description, date_mission);
    setMessageSucces(resultat.message);
    const data = await getToutLesMissions();
    setMissions(data);

    setTimeout(() => {
      setMessageSucces("");
      setModalMission(false);  // ferme la modal après 3 secondes
    }, 3000);
  }

  // supprimler une mission 
  async function supprimerUneMission(id: number) {
    const resultat = await supprimerMission(id);
    setMessageSucces(resultat.message);
    const data = await getToutLesMissions();
    setMissions(data);

    setTimeout(() => {
      setMessageSucces("");
    }, 3000);

  }
  // supprimler une mission

  // modifier une mission
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
  // modifier une mission

// changer le statut d'une mission (active ou finie) 0 pour finie et 1 pour active
async function changerStatut(id: number, actifActuel: number) {
    let nouvelActif: number;

    if (actifActuel === 1) {
        nouvelActif = 0;
    } else {
        nouvelActif = 1;
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

      {/* Contenu principal */}
      <div className="flex-1 p-8 overflow-y-auto">
        <h1 className="text-3xl font-bold mb-6">Missions</h1>


        <div className="flex justify-end mb-4 gap-1">
          <button
            onClick={() => setModalMission(true)}
            className="px-4 py-2 bg-amber-400 text-white cursor-pointer hover:bg-indigo-700 transition-colors">
            Ajouter des Missions
          </button>
          {/* <button className="px-4 py-2 bg-red-700 text-white cursor-pointer">
            Supprimer des Missions
          </button> */}
        </div>


        {/* Modal ajouter mission */}
        {modalMission && (
          <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
            <div className="bg-white p-8 rounded-xl w-full max-w-md">
              <h2 className="text-2xl font-bold mb-6">Ajouter une mission</h2>

              {/* message de succes */}
              {messageSucces && (
                <div className="bg-green-100 text-green-800 p-4 mb-4">
                  {messageSucces}
                </div>
              )}

              <div className="flex flex-col gap-4">
                <input type="text" placeholder="Titre" className="border p-2 rounded" value={titre} onChange={handleTitre} />
                <input type="text" placeholder="Lieu" className="border p-2 rounded" value={lieu} onChange={handleLieu} />
                <textarea placeholder="Description" className="border p-2 rounded" value={description} onChange={handleDescription} />
                <input type="date" className="border p-2 rounded" value={date_mission} onChange={handleDateMission} />
              </div>

              <div className="flex gap-2 mt-6">
                <button
                  onClick={soumettreAjoutMission}
                  className="flex-1 py-2 bg-amber-400 text-white rounded">
                  Ajouter
                </button>

                <button
                  onClick={() => { setModalMission(false); }}
                  className="flex-1 py-2 bg-gray-200 rounded"
                >
                  Annuler
                </button>
              </div>
            </div>
          </div>
        )}
        {/* Modal ajouter mission */}


        {/* Modal Modif Mission */}
        {modaleModifierMission && missionAModifer && (
          <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
            <div className="bg-white p-8 rounded-xl w-full max-w-md">
              <h2 className="text-2xl font-bold mb-6">Modifier une mission</h2>

              {/* message de succes */}
              {messageSucces && (
                <div className="bg-green-100 text-green-800 p-4 mb-4">
                  {messageSucces}
                </div>
              )}

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
        {/* Modal Modif Mission */}


        {/* tableau de missions */}
        <div className="bg-white shadow-2xl p-8 mt-4 flex flex-col gap-4">
          <div className="flex pb-2 border-gray-200">
            <h2 className="font-bold w-1/4">Titre</h2>
            <h2 className="font-bold w-1/4">Lieu</h2>
            <h2 className="font-bold w-1/4">Date Mission</h2>
            <h2 className="font-bold flex-1">Etat</h2>
          </div>

          {missionsAffichees.map((missionInterface: Mission) => (
            <div className="flex text-black" key={missionInterface.id}>
              <p className="w-1/4">{missionInterface.titre}</p>
              <p className="w-1/4">{missionInterface.lieu}</p>
              <p className="w-1/4">{missionInterface.date_mission}</p>
              {/* // ! c'est un ternaire comme faire un if et un else mais dans la meme ligne */}
              <p className="w-1/4">
                {missionInterface.actif === 1 ? "Actif" : "Terminée"}
              </p>
              <button
                onClick={() => { supprimerUneMission(missionInterface.id); }}
                className="px-2 py-1 bg-red-600 text-white rounded text-sm cursor-pointer"
              >
                Supprimer
              </button>

              <button
    onClick={() => { changerStatut(missionInterface.id, missionInterface.actif); }}
    className={`px-2 py-1 rounded text-sm cursor-pointer text-white ${missionInterface.actif === 1 ? 'bg-orange-500' : 'bg-green-500'}`}
>
    {missionInterface.actif === 1 ? "Désactiver" : "Activer"}
</button>

              <button
                onClick={() => {
                  setMissionAModifer(missionInterface);
                  setModaleModifierMission(true);
                }}
                className="px-2 py-1 bg-blue-600 text-white rounded text-sm cursor-pointer ml-2"
              >
                Modifier
              </button>
            </div>
          ))}
        </div>
        {/* tableau de missions */}



        {/* pagination */}
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
        {/* pagination */}

      </div>
    </div >

  );
};