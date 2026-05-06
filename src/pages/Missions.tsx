import { Sidebar } from "../components/Sidebar";
import { useEffect, useState } from "react";
// import { Mission } from "../mesClasses/classMission";


interface Mission {
  id: number;
  titre: string;
  lieu: string;
  date_mission: string;
  actif: number;
}

export const Missions = () => {
  const [missions, setMissions] = useState([]);

  useEffect(() => {
    fetch("http://localhost/api/Controller/MissionsController.php")
      .then((reponseApi) => reponseApi.json())
      .then((dataDeMissions) => {
        console.log(dataDeMissions);
        setMissions(dataDeMissions);
      });
  }, []);

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
          <button  className="px-4 py-2 bg-red-700 text-white cursor-pointer">
            Supprimer des Missions
          </button>
        </div>

        <div className="bg-white shadow-2xl p-8 mt-4 flex flex-col gap-4">
          <div className="flex pb-2  border-gray-200">
            <h2 className="font-bold w-1/4">Titre</h2>
            <h2 className="font-bold w-1/4">Lieu</h2>
            <h2 className="font-bold w-1/4">Date Mission</h2>
            <h2 className="font-bold flex-1">Etat</h2>
          </div>

          {missions.map((missionInterface: Mission) => (
            <div className="flex text-black" key={missionInterface.id}>
              <p className="w-1/4">{missionInterface.titre}</p>
              <p className="w-1/4">{missionInterface.lieu}</p>
              <p className="w-1/4">{missionInterface.date_mission}</p>
              {/* // ! c'est un ternaire comme faire un if et un else mais dans la meme ligne */}
              <p className="w-1/4">
                {missionInterface.actif === 1 ? "Actif" : "Terminée"}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
