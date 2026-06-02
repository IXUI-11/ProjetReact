import { useEffect, useState } from "react";
import { getToutLesMissions } from "../api/missions";
import { getBenevoleParId } from "../api/utilisateur";
import { inscrireBenevole, getMesParticipations, annulerParticipation, getHistorique, getMissionsAVenir, getMissionsEffectuees } from "../api/participation";

export const Utilisateur = () => {
    const [missions, setMissions] = useState([]);
    const [benevole, setBenevole] = useState<any>(null);
    const [messagesInscriptions, setMessagesInscriptions] = useState("");
    const [messagesAnnulations, setMessagesAnnulations] = useState("");
    const [participations, setParticipations] = useState([]);
    const [historique, setHistorique] = useState([]);
    const [missionsAVenir, setMissionsAVenir] = useState([]);
    const [missionsEffectuees, setMissionsEffectuees] = useState([]);

    useEffect(() => {
        async function chargerMissions() {
            const data = await getToutLesMissions();
            setMissions(data);
        }
        chargerMissions();
    }, []);

    useEffect(() => {
        async function chargerBenevole() {
            const id = localStorage.getItem("id_benevole");
            const data = await getBenevoleParId(id);
            setBenevole(data);
        }
        chargerBenevole();
    }, []);

    // useEffect pour charger les participations du benevole a revoir aussi
    useEffect(() => {
        async function chargerParticipations() {
            const id_benevole = Number(localStorage.getItem("id_benevole"))
            const data = await getMesParticipations(id_benevole)
            setParticipations(data)
        }
        chargerParticipations();
    }, []);

    // useEffect pour charger l'historique des participations
    useEffect(() => {
        async function chargerHistorique() {
            const id_benevole = Number(localStorage.getItem("id_benevole"));
            const data = await getHistorique(id_benevole);
            setHistorique(data);
        }
        chargerHistorique();
    }, []);

    // useEffect pour charger les missions à venir
    useEffect(() => {
        async function chargerMissionsAVenir() {
            const id_benevole = Number(localStorage.getItem("id_benevole"));
            const data = await getMissionsAVenir(id_benevole);
            setMissionsAVenir(data);
        }
        chargerMissionsAVenir();
    }, []);

    useEffect(() => {
        async function chargerMissionEffectuees() {
            const id_benevole = Number(localStorage.getItem("id_benevole"));
            const data = await getMissionsEffectuees(id_benevole);
            console.log("missions effectuées:", data);
            setMissionsEffectuees(data);
        }
        chargerMissionEffectuees();
    }, []);

    // Fonction pour s'inscrire à une mission
    async function sInscrire(id_mission: number) {
        const id_benevole = Number(localStorage.getItem("id_benevole"));
        const resultat = await inscrireBenevole(id_benevole, id_mission);
        setMessagesInscriptions(resultat.message);

        const dataParticipations = await getMesParticipations(id_benevole);
        setParticipations(dataParticipations);

        const dataAVenir = await getMissionsAVenir(id_benevole);
        setMissionsAVenir(dataAVenir);

        const dataEffectuees = await getMissionsEffectuees(id_benevole);
        setMissionsEffectuees(dataEffectuees);

        setTimeout(() => {
            setMessagesInscriptions("");
        }, 3000);
    }

    // A revoirr 
    async function annuler(id: number) {
        const resultat = await annulerParticipation(id);
        setMessagesAnnulations(resultat.message);

        // Recharger les participations après annulation
        const id_benevole = Number(localStorage.getItem("id_benevole"));
        // Re-fetch les participations actives
        const data = await getMesParticipations(id_benevole);
        setParticipations(data);

        const dataAVenir = await getMissionsAVenir(id_benevole);
        setMissionsAVenir(dataAVenir);

        // Re-fetch l'historique pour mettre à jour l'affichage
        const dataHistorique = await getHistorique(id_benevole);
        setHistorique(dataHistorique);

        setTimeout(() => {
            setMessagesAnnulations("")
        }, 3000);
    }

    return (
        <div className="p-8">

            {benevole && (
                <div className="bg-white rounded-2xl p-5 mb-8 shadow-[0_2px_20px_-4px_rgba(0,0,0,0.05)] border border-gray-100 flex items-center gap-5">
                    {/* Informations regroupées */}
                    <div className="flex flex-col">
                        <p className="text-xs font-bold text-amber-500 mb-0.5 tracking-wider uppercase">
                            Bénévole connecté
                        </p>
                        <h2 className="text-xl font-extrabold text-gray-900 leading-tight">
                            {benevole.prenom} {benevole.nom}
                        </h2>
                        {/* L'ID affiché comme un badge technique discret */}
                        <div className="flex items-center gap-2 mt-2">
                            <span className="inline-flex items-center px-2.5 py-1 rounded-md bg-gray-50 text-gray-500 text-xs font-semibold border border-gray-200/80">
                                ID : {benevole.id}
                            </span>
                        </div>
                    </div>
                </div>
            )}

            {/* Missions disponibles */}
            <h1 className="text-3xl font-extrabold text-slate-800 mb-8 tracking-tight">Missions disponibles</h1>
            {messagesInscriptions && <div className="bg-emerald-50 border-l-4 border-emerald-500 text-emerald-800 p-4 mb-8 rounded-r-md shadow-sm font-medium">{messagesInscriptions}</div>}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
                {missions.map((mission: any) => (
                    <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-100 flex flex-col overflow-hidden" key={mission.id}>
                        <div className="h-2 bg-amber-400 w-full"></div>
                        <div className="p-6 flex flex-col flex-grow">
                            <h3 className="text-xl font-bold text-slate-800 mb-4 line-clamp-2 leading-snug">{mission.titre}</h3>
                            <div className="space-y-4 mb-6 flex-grow">
                                <p className="text-slate-400 text-xs flex items-center font-mono">
                                    <strong className="mr-1">Mission ID :</strong> {mission.id}
                                </p>
                                <p className="text-slate-600 text-sm mb-4 line-clamp-3">
                                    <strong className="text-slate-800">Description :</strong> {mission.description}
                                </p>
                                <p className="text-slate-700 text-sm flex items-center bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                                    <strong className="mr-1">Lieu : </strong>{mission.lieu}
                                </p>
                                <p className="text-slate-700 text-sm flex items-center bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                                    <strong className="mr-1">Date : </strong>{mission.date_mission}
                                </p>
                                <p>
                                    <span className={`inline-block px-2 py-1 rounded-full text-xs font-semibold ${mission.actif === 1 ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'}`}>
                                        {mission.actif === 1 ? "Active" : "Terminée"}
                                    </span>
                                </p>
                            </div>
                            {mission.actif === 1 ? (
                                <button
                                    className="mt-auto w-full px-4 py-3 bg-amber-400 hover:bg-amber-500 text-amber-950 font-bold rounded-xl transition-colors duration-200 cursor-pointer shadow-sm"
                                    onClick={() => sInscrire(mission.id)}
                                >
                                    S'inscrire
                                </button>
                            ) : (
                                <button
                                    disabled
                                    className="mt-auto w-full px-4 py-3 bg-gray-300 text-gray-500 font-bold rounded-xl cursor-not-allowed"
                                >
                                    Mission terminée
                                </button>
                            )}
                        </div>
                    </div>
                ))}
            </div>
            {/* Missions disponibles */}

            {/* Missions à venir */}
            <h1 className="text-3xl font-bold mb-6 mt-8">Missions à venir / En cours</h1>
            {messagesAnnulations && <div className="bg-red-100 text-red-800 p-4 mb-4 rounded-lg">{messagesAnnulations}</div>}
            <div className="bg-white shadow-2xl p-8 mt-4 flex flex-col">
                <div className="flex pb-3 border-b-2 border-gray-200 mb-2">
                    <h2 className="font-bold w-1/4 text-gray-500 uppercase text-sm">Mission</h2>
                    <h2 className="font-bold w-1/4 text-gray-500 uppercase text-sm">Lieu</h2>
                    <h2 className="font-bold w-1/4 text-gray-500 uppercase text-sm">Date</h2>
                    <h2 className="font-bold w-1/4 text-gray-500 uppercase text-sm">Action</h2>
                </div>
                {missionsAVenir.map((participation: any) => (
                    <div className="flex items-center py-3 border-b border-gray-100 hover:bg-gray-50" key={participation.id}>
                        <p className="w-1/4">{participation.titre}</p>
                        <p className="w-1/4">{participation.lieu}</p>
                        <p className="w-1/4">{participation.date_mission}</p>
                        <button onClick={() => { annuler(participation.id); }} className="px-3 py-1 bg-red-500 text-white rounded-lg text-sm cursor-pointer">
                            Annuler
                        </button>
                    </div>
                ))}
            </div>
            {/* Missions à venir */}

            {/* Missions effectuées */}
            <h1 className="text-3xl font-bold mb-6 mt-8">Missions effectuées</h1>
            <div className="bg-white shadow-2xl p-8 mt-4 flex flex-col">
                <div className="flex pb-3 border-b-2 border-gray-200 mb-2">
                    <h2 className="font-bold w-1/4 text-gray-500 uppercase text-sm">Mission</h2>
                    <h2 className="font-bold w-1/4 text-gray-500 uppercase text-sm">Lieu</h2>
                    <h2 className="font-bold w-1/4 text-gray-500 uppercase text-sm">Date</h2>
                    <h2 className="font-bold w-1/4 text-gray-500 uppercase text-sm">Statut</h2>
                </div>
                {missionsEffectuees.map((participation: any) => (
                    <div className="flex items-center py-3 border-b border-gray-100 hover:bg-gray-50" key={participation.id}>
                        <p className="w-1/4">{participation.titre}</p>
                        <p className="w-1/4">{participation.lieu}</p>
                        <p className="w-1/4">{participation.date_mission}</p>
                        <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs font-semibold">Effectuée</span>
                    </div>
                ))}
            </div>
            {/* Missions effectuées */}

            {/* Historique des missions */}
            <h1 className="text-3xl font-bold mb-6 mt-8">Historique</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
                {historique.map((participation: any) => (
                    <div key={participation.id} className="bg-white rounded-xl shadow-sm border border-gray-100 flex flex-col overflow-hidden">
                        <div className="h-2 bg-gray-400 w-full"></div>
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-gray-800 mb-4">{participation.titre}</h3>
                            <p className="text-gray-600"><strong>Lieu :</strong> {participation.lieu}</p>
                            <p className="text-gray-600 mt-2"><strong>Date :</strong> {participation.date_mission}</p>
                            <p className="text-gray-600 mt-2"><strong>Statut :</strong> {participation.statut}</p>
                            <p className="text-gray-600 mt-2"><strong>Date d'annulation :</strong> {participation.date_annulation}</p>
                            {/* Annulé par */}
                            <p className="text-gray-600 mt-2"><strong>Annulé par :</strong> {participation.annule_par === 'admin' ? "L'admin" : "Le bénévole"}</p>
                        </div>
                    </div>
                ))}
            </div>
            {/* Historique des missions */}

        </div>
    );
};