// URL de base pour toutes les requêtes liées aux bénévoles
const BASE_URL = "http://localhost/api/Controller/benevole.php";

// Récupère tous les bénévoles depuis l'API (requête GET simple)
export async function getTousLesBenevoles() {
    const reponse = await fetch(BASE_URL);
    return reponse.json();
}

// Supprime un bénévole par son id
export async function supprimerBenevole(id: number) {
    const reponse = await fetch(`${BASE_URL}?action=supprimerBenevole`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id })
    });
    return reponse.json();
}

// Ajoute un nouveau bénévole avec toutes ses informations personnelles
export async function ajouterBenevole(nom: string, prenom: string, email: string, mot_de_passe: string, adresse: string, code_postal: string, date_naissance: string) {
    const reponse = await fetch(`${BASE_URL}?action=ajouterBenevole`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nom, prenom, email, mot_de_passe, adresse, code_postal, date_naissance })
    });
    return reponse.json();
}

// Récupère toutes les participations d'un bénévole par son id (utilisé côté admin)
export async function getParticipationsBenevole(id: number) {
    const reponse = await fetch(`${BASE_URL}?action=getParticipations&id=${id}`);
    return reponse.json();
}

// Annule une participation d'un bénévole depuis le côté admin par l'id de la participation
// Utilise le fichier participation.php et non benevole.php
export async function annulerParticipationAdmin(id: number) {
    const reponse = await fetch(`http://localhost/api/Controller/participation.php?action=annulerAdmin`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id })
    });
    return reponse.json();
}