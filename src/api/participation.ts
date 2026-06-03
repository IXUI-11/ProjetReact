// URL de base pour toutes les requêtes liées aux participations
const BASE_URL = "https://projetphp.salaheddinebelhaska.tech/Controller/Participation.php";

// Inscrit un bénévole à une mission en envoyant son id et l'id de la mission
export async function inscrireBenevole(id_benevole: number, id_mission: number) {
    const reponse = await fetch(`${BASE_URL}?action=inscrire`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id_benevole, id_mission })
    });
    return reponse.json();
}

// Récupère toutes les participations actives du bénévole connecté
export async function getMesParticipations(id_benevole: number) {
    const reponse = await fetch(`${BASE_URL}?action=mesParticipations&id_benevole=${id_benevole}`);
    return reponse.json();
}

// Annule une participation par son id (action effectuée par le bénévole lui-même)
export async function annulerParticipation(id: number) {
    const reponse = await fetch(`${BASE_URL}?action=annuler`, {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id })
    });
    return reponse.json();
}

// Récupère l'historique complet des participations d'un bénévole (annulées, terminées...)
export async function getHistorique(id_benevole: number) {
    const reponse = await fetch(`${BASE_URL}?action=historique&id_benevole=${id_benevole}`);
    return reponse.json();
}

// Récupère les missions à venir auxquelles le bénévole est inscrit
export async function getMissionsAVenir(id_benevole: number) {
    const reponse = await fetch(`${BASE_URL}?action=missionsAVenir&id_benevole=${id_benevole}`);
    return reponse.json();
}

// Récupère les missions déjà effectuées par le bénévole (missions terminées)
export async function getMissionsEffectuees(id_benevole: number) {
    const reponse = await fetch(`${BASE_URL}?action=missionsEffectuees&id_benevole=${id_benevole}`);
    return reponse.json();
}