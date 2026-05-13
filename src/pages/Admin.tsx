import { useEffect, useState } from "react"
import { Sidebar } from "../components/Sidebar"

export const Admin = () => {
	const [missions, setMissions] = useState([])


    // ! Récupérer les missions pour le nombre de missions actives et finies
	useEffect(() => {
		const MissionActive = async () => {
			const reponseApi = await fetch("http://localhost/api/Controller/MissionsController.php")
			const dataDeMissions = await reponseApi.json()
			console.log(dataDeMissions)
			setMissions(dataDeMissions)
		}
		MissionActive()
	}, [])

    // ! Récupérer les bénévoles pour le nombre total de bénévoles
	const [Benevoles, setBenevoles] = useState([])
	useEffect(() => {
		const fetchBenevoles = async () => {
			const reponseAPiBenevole = await fetch("http://localhost/api/Controller/benevole.php")
			const dataDeBenevoles = await reponseAPiBenevole.json()
			setBenevoles(dataDeBenevoles)
		}
		fetchBenevoles()
	}, [])

	return (
		<div className="flex h-screen bg-[#f8f8f8da]">
			<Sidebar />

			{/* Contenu principal */}
			<div className="flex-1 p-8 overflow-y-auto">
				<h1 className="text-3xl font-bold mb-6">Espace Admin</h1>

				{/* Cards statistiques */}
				{/* // TODO a brancher avec l'api */}
				<div className="grid grid-cols-3 gap-6 min-h-48">
					{/* Bénévoles actifs */}
					<div className="bg-white p-6 flex flex-col justify-center shadow-[0_10px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.12)] transition-shadow duration-300">
						<p className="text-gray-500 text-sm">Nombre Total de Bénévoles </p>
						<p className="text-4xl font-bold mt-2">{Benevoles.length}</p>
					</div>
					{/* Missions actives */}
					<div className="bg-white p-6 flex flex-col justify-center shadow-[0_10px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.12)] transition-shadow duration-300">
						<p className="text-gray-500 text-sm">Missions actives</p>
						<p className="text-4xl font-bold mt-2">
							{missions.filter((mission: any) => mission.actif === 1).length}
						</p>
					</div>
					{/* Missions finies */}
					{/* filter pour filtrer un tableau comme le where dans mysql */}
					<div className="bg-white p-6 flex flex-col justify-center shadow-[0_10px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.12)] transition-shadow duration-300">
						<p className="text-gray-500 text-sm">Missions finies</p>
						<p className="text-4xl font-bold mt-2">
							{missions.filter((mission: any) => mission.actif === 0).length}
						</p>
					</div>
				</div>

				{/* Container de données */}
				<h1 className="text-3xl font-bold mb-6 mt-8">Missions récentes</h1>
				<div className="bg-white shadow-[0_8px_25px_rgba(0,0,0,0.06)] p-8 mt-10 flex flex-col gap-4 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)] transition-all duration-300">
					<div className="flex text-xl pb-2">
						<h1 className="font-bold w-1/5">Nom</h1>
						<h1 className="font-bold w-1/5">Lieu</h1>
						<h1 className="font-bold w-1/5">Mission</h1>
						<h1 className="font-bold w-1/5">Etat</h1>
						<h1 className="font-bold w-1/5">Date</h1>
					</div>
				</div>
			</div>
		</div>
	)
}