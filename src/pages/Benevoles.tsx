import { Sidebar } from "../components/Sidebar";
import { useEffect, useState } from "react";
import { getTousLesBenevoles } from "../api/benevoles";

export const Benevoles = () => {
    const [benevoles, setBenevoles] = useState([]);
    const [pageCourante, setPageCourante] = useState(1);
    const benevoleParPage = 10;

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

    return (
        <div className="flex h-screen bg-gray-100">
            <Sidebar />
            <div className="flex-1 p-8 overflow-y-auto">
                <h1 className="text-3xl font-bold mb-6">Bénévoles</h1>
                <div className="flex justify-end mb-4 gap-1">
                    <button className="px-4 py-2 bg-amber-400 text-white cursor-pointer hover:bg-indigo-700 transition-colors">
                        Ajouter un Bénévole
                    </button>
                    <button className="px-4 py-2 bg-red-700 text-white cursor-pointer">
                        Supprimer un Bénévole
                    </button>
                </div>
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
                        </div>
                    ))}
                </div>

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
        </div>
    );
};