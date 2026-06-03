import { Sidebar } from "../components/Sidebar";
import { useEffect, useState } from "react";
import { getTousLesBenevoles, supprimerBenevole, ajouterBenevole, getParticipationsBenevole, annulerParticipationAdmin } from "../api/benevoles";

export const Benevoles = () => {

    // Liste de tous les bénévoles récupérés depuis l'API
    const [benevoles, setBenevoles] = useState([]);

    // Numéro de la page actuellement affichée
    const [pageCourante, setPageCourante] = useState(1);

    // Nombre de bénévoles affichés par page
    const benevoleParPage = 10;

    // true = la modale d'ajout de bénévole est ouverte
    const [modalBenevole, setModalBenevole] = useState(false);

    // Champs du formulaire d'ajout de bénévole
    const [nom, setNom] = useState("");
    const [prenom, setPrenom] = useState("");
    const [email, setEmail] = useState("");
    const [motDePasse, setMotDePasse] = useState("");
    const [adresse, setAdresse] = useState("");
    const [codePostal, setCodePostal] = useState("");
    const [dateNaissance, setDateNaissance] = useState("");

    // Message affiché temporairement après une action (ajout, suppression...)
    const [messageSucces, setMessageSucces] = useState("");

    // true = la modale des participations d'un bénévole est ouverte
    const [modalParticipations, setModalParticipations] = useState(false);

    // Liste des participations du bénévole sélectionné
    const [participationsBenevole, setParticipationsBenevole] = useState<any[]>([]);

    // Bénévole dont on consulte les participations
    const [benevoleSelectionne, setBenevoleSelectionne] = useState<any>(null);

    // Calcule quels bénévoles afficher selon la page courante
    // Ex : page 1 → indices 0 à 9, page 2 → indices 10 à 19
    function afficherDonnerParNombre() {
        const debut = (pageCourante - 1) * benevoleParPage;
        const fin = debut + benevoleParPage;
        const benevoleAffiches = benevoles.slice(debut, fin);
        return { benevoleAffiches, fin };
    }

    const { benevoleAffiches, fin } = afficherDonnerParNombre();

    // Charge tous les bénévoles depuis l'API au chargement de la page
    useEffect(() => {
        const fetchBenevoles = async () => {
            const data = await getTousLesBenevoles();
            setBenevoles(data);
        };
        fetchBenevoles();
    }, []);

    // Supprime un bénévole par son id puis rafraîchit la liste sans recharger la page
    async function supprimerUnBenevole(id: number) {
        await supprimerBenevole(id);
        const data = await getTousLesBenevoles();
        setBenevoles(data);
    }

    // Handlers pour les champs du formulaire d'ajout
    // Chaque fonction met à jour le state correspondant quand l'utilisateur tape
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

    // Envoie le nouveau bénévole à l'API, rafraîchit la liste et ferme la modale après 3 secondes
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

    // Charge les participations d'un bénévole et ouvre la modale pour les afficher
    async function voirParticipations(benevole: any) {
        const data = await getParticipationsBenevole(benevole.id);
        setParticipationsBenevole(data);
        setBenevoleSelectionne(benevole); // on retient quel bénévole est sélectionné
        setModalParticipations(true);
    }

    // Annule une participation depuis la modale admin, puis rafraîchit la liste des participations
    async function annulerParticipation(id: number) {
        await annulerParticipationAdmin(id);
        // Re-fetch les participations du bénévole actuellement affiché dans la modale
        const data = await getParticipationsBenevole(benevoleSelectionne.id);
        setParticipationsBenevole(data);
    }

    return (
        <div className="flex h-screen bg-gray-100">
            <Sidebar />
            <div className="flex-1 p-8 overflow-y-auto">
                <h1 className="text-3xl font-bold mb-6">Bénévoles</h1>

                {/* Bouton pour ouvrir la modale d'ajout */}
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

                {/* Modale d'ajout de bénévole : s'affiche uniquement si modalBenevole est true */}
                {modalBenevole && (
                    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
                        <div className="bg-white p-8 rounded-xl w-full max-w-md">
                            <h2 className="text-2xl font-bold mb-6">Ajouter un bénévole</h2>

                            {/* Message de succès après ajout */}
                            {messageSucces && (
                                <div className="bg-green-100 text-green-800 p-4 mb-4">{messageSucces}</div>
                            )}

                            {/* Champs du formulaire d'ajout */}
                            <div className="flex flex-col gap-4">
                                <input type="text" placeholder="Nom" className="border p-2 rounded" value={nom} onChange={handleNom} />
                                <input type="text" placeholder="Prénom" className="border p-2 rounded" value={prenom} onChange={handlePrenom} />
                                <input type="email" placeholder="Email" className="border p-2 rounded" value={email} onChange={handleEmail} />
                                <input type="password" placeholder="Mot de passe" className="border p-2 rounded" value={motDePasse} onChange={handleMotDePasse} />
                                <input type="text" placeholder="Adresse" className="border p-2 rounded" value={adresse} onChange={handleAdresse} />
                                <input type="text" placeholder="Code postal" className="border p-2 rounded" value={codePostal} onChange={handleCodePostal} />
                                <input type="date" className="border p-2 rounded" value={dateNaissance} onChange={handleDateNaissance} />
                            </div>

                            {/* Boutons Ajouter et Annuler */}
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
                {/* Fin modale ajout */}

                {/* Tableau listant tous les bénévoles de la page courante */}
                <div className="bg-white shadow-2xl p-8 mt-4 flex flex-col gap-4">

                    {/* En-têtes des colonnes */}
                    <div className="flex pb-2 border-gray-200">
                        <h2 className="font-bold w-1/4">Nom</h2>
                        <h2 className="font-bold w-1/4">Prénom</h2>
                        <h2 className="font-bold w-1/4">Email</h2>
                        <h2 className="font-bold w-1/4">Rôle</h2>
                    </div>

                    {/* Une ligne par bénévole avec ses boutons d'action */}
                    {benevoleAffiches.map((benevole: any) => (
                        <div className="flex text-black" key={benevole.id}>
                            <p className="w-1/4">{benevole.nom}</p>
                            <p className="w-1/4">{benevole.prenom}</p>
                            <p className="w-1/4">{benevole.email}</p>
                            {/* Ternaire : id_role 1 = Bénévole, sinon Admin */}
                            <p className="w-1/4">{benevole.id_role === 1 ? "Bénévole" : "Admin"}</p>

                            {/* Bouton rouge pour supprimer le bénévole */}
                            <button
                                className="px-2 py-1 bg-red-600 text-white rounded text-sm cursor-pointer"
                                onClick={() => { supprimerUnBenevole(benevole.id); }}>
                                Supprimer
                            </button>

                            {/* Bouton bleu pour ouvrir la modale des participations de ce bénévole */}
                            <button
                                onClick={() => { voirParticipations(benevole); }}
                                className="px-2 py-1 bg-blue-600 text-white rounded text-sm cursor-pointer ml-2"
                            >
                                Voir participations
                            </button>
                        </div>
                    ))}
                </div>
                {/* Fin tableau bénévoles */}

                {/* Modale des participations : s'affiche si un bénévole est sélectionné */}
                {modalParticipations && benevoleSelectionne && (
                    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
                        <div className="bg-white p-8 rounded-xl w-full max-w-2xl max-h-screen overflow-y-auto">
                            <h2 className="text-2xl font-bold mb-2">
                                Participations de {benevoleSelectionne.prenom} {benevoleSelectionne.nom}
                            </h2>

                            <div className="flex flex-col gap-2 mt-4">

                                {/* En-têtes des colonnes de la modale */}
                                <div className="flex pb-2 border-b-2 border-gray-200">
                                    <h3 className="font-bold w-1/4 text-gray-500 uppercase text-sm">Mission</h3>
                                    <h3 className="font-bold w-1/4 text-gray-500 uppercase text-sm">Lieu</h3>
                                    <h3 className="font-bold w-1/4 text-gray-500 uppercase text-sm">Date</h3>
                                    <h3 className="font-bold w-1/4 text-gray-500 uppercase text-sm">Statut</h3>
                                    <h3 className="font-bold w-1/4 text-gray-500 uppercase text-sm">Action</h3>
                                </div>

                                {/* Une ligne par participation avec son statut et un bouton pour annuler */}
                                {participationsBenevole.map((participation: any) => (
                                    <div className="flex items-center py-2 border-b border-gray-100" key={participation.id}>
                                        <p className="w-1/4">{participation.titre}</p>
                                        <p className="w-1/4">{participation.lieu}</p>
                                        <p className="w-1/4">{participation.date_mission}</p>

                                        {/* Badge vert si active, rouge si annulée */}
                                        <p className="w-1/4">
                                            <span className={`px-2 py-1 rounded-full text-xs font-semibold ${participation.statut === 'active' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                                                {participation.statut}
                                            </span>
                                        </p>

                                        {/* Bouton pour annuler la participation depuis le côté admin */}
                                        <button
                                            onClick={() => { annulerParticipation(participation.id); }}
                                            className="px-2 py-1 bg-red-600 text-white rounded text-sm cursor-pointer"
                                        >
                                            Annuler
                                        </button>
                                    </div>
                                ))}
                            </div>

                            {/* Bouton pour fermer la modale */}
                            <button
                                onClick={() => { setModalParticipations(false); }}
                                className="mt-6 px-4 py-2 bg-gray-200 rounded cursor-pointer"
                            >
                                Fermer
                            </button>
                        </div>
                    </div>
                )}
                {/* Fin modale participations */}

                {/* Pagination : Précédent désactivé en page 1, Suivant désactivé si plus de bénévoles à afficher */}
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
                        disabled={fin >= benevoles.length}
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