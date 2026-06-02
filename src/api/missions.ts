const BASE_URL = "http://localhost/api/Controller/missions.php"

export async function getToutLesMissions() {
    const reponse = await fetch(`${BASE_URL}?action=getToutLesMissions`)
    return reponse.json()
}

export async function getMissionsRecentes() {
    const reponse = await fetch(`${BASE_URL}?action=MissionRecent`)
    return reponse.json()
}

// Partie Admin pour ajouter une mission 
export async function ajouterMission(titre: string, lieu: string, description: string, date_mission: string) {
    const reponse = await fetch(`${BASE_URL}?action=ajouterMission`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            titre: titre,
            lieu: lieu,
            description: description,
            date_mission: date_mission
        })
    });
    return reponse.json();
}

// Partie admin pour supprimer une mission
export async function supprimerMission(id: number) {
    const reponse = await fetch(`${BASE_URL}?action=supprimerMission`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id })
    });
    return reponse.json();
}

// Partie Admin modifer une mission
export async function modifierMission(id: number, titre: string, lieu: string, description: string, date_mission: string) {
    const reponse = await fetch(`${BASE_URL}?action=modifierMission`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            id: id,
            titre: titre,
            lieu: lieu,
            description: description,
            date_mission: date_mission
        })
    });
    return reponse.json();
}

// Partie Admin pour changer le statut d'une mission (active ou finie)
export async function changerStatutMission(id: number, actif: number) {
    const reponse = await fetch(`${BASE_URL}?action=changerStatut`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, actif })
    });
    return reponse.json();
}