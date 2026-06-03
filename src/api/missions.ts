// URL de base pour toutes les requêtes liées aux missions
const BASE_URL = "http://localhost/api/Controller/missions.php";

// Récupère toutes les missions disponibles
export async function getToutLesMissions() {
    const reponse = await fetch(`${BASE_URL}?action=getToutLesMissions`);
    return reponse.json();
}

// Récupère uniquement les 5 missions les plus récentes (utilisé dans le dashboard admin)
export async function getMissionsRecentes() {
    const reponse = await fetch(`${BASE_URL}?action=MissionRecent`);
    return reponse.json();
}

// Ajoute une nouvelle mission avec son titre, lieu, description et date
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

// Supprime une mission par son id
export async function supprimerMission(id: number) {
    const reponse = await fetch(`${BASE_URL}?action=supprimerMission`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id })
    });
    return reponse.json();
}

// Modifie les informations d'une mission existante par son id
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

// Change le statut d'une mission : actif = 1 (active) ou actif = 0 (terminée)
export async function changerStatutMission(id: number, actif: number) {
    const reponse = await fetch(`${BASE_URL}?action=changerStatut`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, actif })
    });
    return reponse.json();
}