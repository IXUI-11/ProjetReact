import { useEffect, useState } from "react"
import { Sidebar } from "../components/Sidebar"
import { getToutLesMissions, getMissionsRecentes } from "../api/missions"
import { getTousLesBenevoles } from "../api/benevoles"
import { useNavigate } from "react-router-dom"

export const Admin = () => {

	// Liste de toutes les missions (utilisée pour compter les actives et finies)
	const [missions, setMissions] = useState([])

	// Liste des 5 dernières missions ajoutées
	const [missionsRecentes, setMissionsRecentes] = useState([])

	// Hook de navigation pour rediriger si l'utilisateur n'est pas admin
	const rediriger = useNavigate();

	// Récupère le rôle stocké dans le localStorage lors de la connexion
	// role === "1" signifie admin, sinon c'est un bénévole
	const role = localStorage.getItem("role");

	// Charge toutes les missions pour calculer les statistiques (actives / finies)
	useEffect(() => {
		const MissionActive = async () => {
			const dataDeMissions = await getToutLesMissions()
			setMissions(dataDeMissions)
		}
		MissionActive()
	}, [])

	// Charge uniquement les 5 missions les plus récentes pour le tableau d'aperçu
	useEffect(() => {
		const fetchMissionsRecentes = async () => {
			const data = await getMissionsRecentes()
			setMissionsRecentes(data)
		}
		fetchMissionsRecentes()
	}, [])

	// Liste de tous les bénévoles (utilisée pour afficher le nombre total)
	const [Benevoles, setBenevoles] = useState([])

	// Charge tous les bénévoles pour afficher leur nombre dans la carte statistique
	useEffect(() => {
		const fetchBenevoles = async () => {
			const dataDeBenevoles = await getTousLesBenevoles()
			setBenevoles(dataDeBenevoles)
		}
		fetchBenevoles()
	}, [])

	// Si le rôle n'est pas 1 (admin), on redirige vers la page de connexion
	if (role !== "1") {
		rediriger("/login");
	}

	return (
		<div className="flex h-screen bg-[#f8f8f8da]">
			<Sidebar />

			{/* Contenu principal */}
			<div className="flex-1 p-8 overflow-y-auto">
				<h1 className="text-3xl font-bold mb-6">Espace Admin</h1>

				{/* Cartes statistiques : bénévoles, missions actives, missions finies */}
				<div className="grid grid-cols-3 gap-6 min-h-48">

					{/* Carte : nombre total de bénévoles */}
					<div className="bg-white p-6 flex flex-col justify-center shadow-[0_10px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.12)] transition-shadow duration-300">
						<p className="text-gray-500 text-sm">Nombre Total de Bénévoles</p>
						<p className="text-4xl font-bold mt-2">{Benevoles.length}</p>
					</div>

					{/* Carte : nombre de missions dont actif === 1 */}
					<div className="bg-white p-6 flex flex-col justify-center shadow-[0_10px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.12)] transition-shadow duration-300">
						<p className="text-gray-500 text-sm">Missions actives</p>
						<p className="text-4xl font-bold mt-2">
							{missions.filter((mission: any) => mission.actif === 1).length}
						</p>
					</div>

					{/* Carte : nombre de missions dont actif === 0 */}
					<div className="bg-white p-6 flex flex-col justify-center shadow-[0_10px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.12)] transition-shadow duration-300">
						<p className="text-gray-500 text-sm">Missions finies</p>
						<p className="text-4xl font-bold mt-2">
							{missions.filter((mission: any) => mission.actif === 0).length}
						</p>
					</div>
				</div>

				{/* Tableau des 5 missions les plus récentes */}
				<h1 className="text-3xl font-bold mb-6 mt-8">Missions récentes</h1>
				<div className="bg-white shadow-[0_8px_25px_rgba(0,0,0,0.06)] p-8 mt-10 flex flex-col gap-4 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)] transition-all duration-300">

					{/* En-têtes des colonnes */}
					<div className="flex text-xl pb-2">
						<h1 className="font-bold w-1/5">Nom</h1>
						<h1 className="font-bold w-1/5">Lieu</h1>
						<h1 className="font-bold w-1/5">Mission</h1>
						<h1 className="font-bold w-1/5">Etat</h1>
						<h1 className="font-bold w-1/5">Date</h1>
					</div>

					{/* Une ligne par mission récente */}
					{missionsRecentes.map((mission: any) => (
						<div key={mission.id} className="flex text-sm py-2">
							<p className="w-1/5">{mission.titre}</p>
							<p className="w-1/5">{mission.lieu}</p>
							<p className="w-1/5">{mission.description}</p>
							{/* Ternaire : affiche "Active" si actif vaut 1, sinon "Finie" */}
							<p className="w-1/5">{mission.actif === 1 ? "Active" : "Finie"}</p>
							<p className="w-1/5">{mission.date_mission}</p>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}