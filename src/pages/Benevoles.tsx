import { Sidebar } from "../components/Sidebar";
import { useEffect, useState } from "react";
import { getTousLesBenevoles, supprimerBenevole, ajouterBenevole, getParticipationsBenevole , annulerParticipationAdmin } from "../api/benevoles";

export const Benevoles = () => {
    const [benevoles, setBenevoles] = useState([]);
    const [pageCourante, setPageCourante] = useState(1);
    const benevoleParPage = 10;
    const [modalBenevole, setModalBenevole] = useState(false);
    const [nom, setNom] = useState("");
    const [prenom, setPrenom] = useState("");
    const [email, setEmail] = useState("");
    const [motDePasse, setMotDePasse] = useState("");
    const [adresse, setAdresse] = useState("");
    const [codePostal, setCodePostal] = useState("");
    const [dateNaissance, setDateNaissance] = useState("");
    const [messageSucces, setMessageSucces] = useState("");
    const [modalParticipations, setModalParticipations] = useState(false);
    const [participationsBenevole, setParticipationsBenevole] = useState<any[]>([]);
    const [benevoleSelectionne, setBenevoleSelectionne] = useState<any>(null);




    // ! découper le  tableau de bénévoles en fonction de la page courante et du nombre de bénévoles par page
    function afficherDonnerParNombre() {
        const debut = (pageCourante - 1) * benevoleParPage;
        const fin = debut + benevoleParPage;
        const benevoleAffiches = benevoles.slice(debut, fin);
        return { benevoleAffiches, fin };
    }

    const { benevoleAffiches, fin } = afficherDonnerParNombre();

    useEffect(() => {
        const fetchBenevoles = async () => {
            const data = await getTousLesBenevoles();
            setBenevoles(data);
        };
        fetchBenevoles();
    }, []);


    async function supprimerUnBenevole(id: number) {
        await supprimerBenevole(id);
        // Re-fetch les bénévoles pour mettre à jour l'affichage sans recharger la page
        const data = await getTousLesBenevoles();
        setBenevoles(data);
    }

    function handleNom(evenement: any) {
        setNom(evenement.target.value);
    }
    function handlePrenom(evenement: any) {
        setPrenom(evenement.target.value);
    }
    function handleEmail(evenement: any) {
        setEmail(evenement.target.value);
    }
    function handleMotDePasse(evenement: any) {
        setMotDePasse(evenement.target.value);
    }
    function handleAdresse(evenement: any) {
        setAdresse(evenement.target.value);
    }
    function handleCodePostal(evenement: any) {
        setCodePostal(evenement.target.value);
    }
    function handleDateNaissance(evenement: any) {
        setDateNaissance(evenement.target.value);
    }


    async function soumettreAjoutBenevole() {
        const resultat = await ajouterBenevole(nom, prenom, email, motDePasse, adresse, codePostal, dateNaissance);
        setMessageSucces(resultat.message);
        const data = await getTousLesBenevoles();
        setBenevoles(data);
        setTimeout(() => {
            setMessageSucces("");
            setModalBenevole(false);
        }, 3000);
    }

    // ! voir les participations d'un bénévole
    async function voirParticipations(benevole: any) {
        const data = await getParticipationsBenevole(benevole.id);
        setParticipationsBenevole(data);
        setBenevoleSelectionne(benevole);
        setModalParticipations(true);
    }

    // ! annuler une participation d'un bénévole (cette fonction est appelée depuis la modale des participations d'un bénévole)
    async function annulerParticipation(id: number) {
    await annulerParticipationAdmin(id);
    // Re-fetch les participations du bénévole sélectionné
    const data = await getParticipationsBenevole(benevoleSelectionne.id);
    setParticipationsBenevole(data);
}

    return (
        <div className="flex h-screen bg-gray-100">
            <Sidebar />
            <div className="flex-1 p-8 overflow-y-auto">
                <h1 className="text-3xl font-bold mb-6">Bénévoles</h1>
                <div className="flex justify-end mb-4 gap-1">
                    <button
                        onClick={() => { setModalBenevole(true); }}
                        className="px-4 py-2 bg-amber-400 text-white cursor-pointer hover:bg-indigo-700 transition-colors">
                        Ajouter un Bénévole
                    </button>
                    {/* <button className="px-4 py-2 bg-red-700 text-white cursor-pointer">
                        Supprimer un Bénévole
                    </button> */}
                </div>

                {/* Modal pour Ajouter un bénévole */}*


                {modalBenevole && (
                    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
                        <div className="bg-white p-8 rounded-xl w-full max-w-md">
                            <h2 className="text-2xl font-bold mb-6">Ajouter un bénévole</h2>

                            {messageSucces && (
                                <div className="bg-green-100 text-green-800 p-4 mb-4">{messageSucces}</div>
                            )}

                            <div className="flex flex-col gap-4">
                                <input type="text" placeholder="Nom" className="border p-2 rounded" value={nom} onChange={handleNom} />
                                <input type="text" placeholder="Prénom" className="border p-2 rounded" value={prenom} onChange={handlePrenom} />
                                <input type="email" placeholder="Email" className="border p-2 rounded" value={email} onChange={handleEmail} />
                                <input type="password" placeholder="Mot de passe" className="border p-2 rounded" value={motDePasse} onChange={handleMotDePasse} />
                                <input type="text" placeholder="Adresse" className="border p-2 rounded" value={adresse} onChange={handleAdresse} />
                                <input type="text" placeholder="Code postal" className="border p-2 rounded" value={codePostal} onChange={handleCodePostal} />
                                <input type="date" className="border p-2 rounded" value={dateNaissance} onChange={handleDateNaissance} />
                            </div>

                            <div className="flex gap-2 mt-6">
                                <button onClick={soumettreAjoutBenevole} className="flex-1 py-2 bg-amber-400 text-white rounded">
                                    Ajouter
                                </button>
                                <button onClick={() => { setModalBenevole(false); }} className="flex-1 py-2 bg-gray-200 rounded">
                                    Annuler
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                <div className="bg-white shadow-2xl p-8 mt-4 flex flex-col gap-4">
                    <div className="flex pb-2 border-gray-200">
                        <h2 className="font-bold w-1/4">Nom</h2>
                        <h2 className="font-bold w-1/4">Prénom</h2>
                        <h2 className="font-bold w-1/4">Email</h2>
                        <h2 className="font-bold w-1/4">Rôle</h2>
                    </div>
                    {benevoleAffiches.map((benevole: any) => (
                        <div className="flex text-black" key={benevole.id}>
                            <p className="w-1/4">{benevole.nom}</p>
                            <p className="w-1/4">{benevole.prenom}</p>
                            <p className="w-1/4">{benevole.email}</p>
                            <p className="w-1/4">{benevole.id_role === 1 ? "Bénévole" : "Admin"}</p>
                            <button className="px-2 py-1 bg-red-600 text-white rounded text-sm cursor-pointer"
                                onClick={() => { supprimerUnBenevole(benevole.id); }}>Supprimer</button>

                            <button
                                onClick={() => { voirParticipations(benevole); }}
                                className="px-2 py-1 bg-blue-600 text-white rounded text-sm cursor-pointer ml-2"
                            >
                                Voir participations
                            </button>
                        </div>


                    ))}
                </div>

                {/* Modale pour voir les participations d'un bénévole */}
                {modalParticipations && benevoleSelectionne && (
                    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
                        <div className="bg-white p-8 rounded-xl w-full max-w-2xl max-h-screen overflow-y-auto">
                            <h2 className="text-2xl font-bold mb-2">
                                Participations de {benevoleSelectionne.prenom} {benevoleSelectionne.nom}
                            </h2>

                            <div className="flex flex-col gap-2 mt-4">
                                <div className="flex pb-2 border-b-2 border-gray-200">
                                    <h3 className="font-bold w-1/4 text-gray-500 uppercase text-sm">Mission</h3>
                                    <h3 className="font-bold w-1/4 text-gray-500 uppercase text-sm">Lieu</h3>
                                    <h3 className="font-bold w-1/4 text-gray-500 uppercase text-sm">Date</h3>
                                    <h3 className="font-bold w-1/4 text-gray-500 uppercase text-sm">Statut</h3>
                                    <h3 className="font-bold w-1/4 text-gray-500 uppercase text-sm">Action</h3>
                                </div>

                                {participationsBenevole.map((participation: any) => (
                                    <div className="flex items-center py-2 border-b border-gray-100" key={participation.id}>
                                        <p className="w-1/4">{participation.titre}</p>
                                        <p className="w-1/4">{participation.lieu}</p>
                                        <p className="w-1/4">{participation.date_mission}</p>
                                        <p className="w-1/4">
                                            <span className={`px-2 py-1 rounded-full text-xs font-semibold ${participation.statut === 'active' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                                                {participation.statut}
                                            </span>
                                        </p>
                                        <button
                                            onClick={() => { annulerParticipation(participation.id); }} // ! annuler la participation
                                            className="px-2 py-1 bg-red-600 text-white rounded text-sm cursor-pointer"
                                        >
                                            Annuler
                                        </button>
                                    </div>
                                ))}
                            </div>

                            <button
                                onClick={() => { setModalParticipations(false); }}
                                className="mt-6 px-4 py-2 bg-gray-200 rounded cursor-pointer"
                            >
                                Fermer
                            </button>
                        </div>
                    </div>
                )}

                {/* Modale pour voir les participations d'un bénévole */}

                {/* Pagination  */}
                <div className="flex justify-center gap-2 mt-4">
                    <button
                        onClick={() => { setPageCourante(pageCourante - 1); }}
                        // ! désactiver le bouton précédent si la page courante est égale à 1
                        disabled={pageCourante === 1}
                        className="px-4 py-2 bg-gray-200 cursor-pointer disabled:opacity-50"
                    >
                        Précédent
                    </button>
                    <span className="px-4 py-2">{pageCourante}</span>
                    <button

                        onClick={() => { setPageCourante(pageCourante + 1); }}
                        disabled={fin >= benevoles.length}
                        className="px-4 py-2 bg-gray-200 cursor-pointer disabled:opacity-50"
                    >
                        Suivant
                    </button>
                </div>
            </div>
        </div >
    );
};