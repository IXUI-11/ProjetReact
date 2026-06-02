
// Lien pour l'inscription à une mission
const BASE_URL = "http://localhost/api/Controller/Participation.php";
export async function inscrireBenevole(id_benevole: number, id_mission: number) {
    const reponse = await fetch(`${BASE_URL}?action=inscrire`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id_benevole, id_mission })
    });
    return reponse.json();
}

// Voir les missions des bénévoles connectés
export async function getMesParticipations(id_benevole: number) {
    const reponse = await fetch(`${BASE_URL}?action=mesParticipations&id_benevole=${id_benevole}`);
    return reponse.json();
}

// Annuler une participation
export async function annulerParticipation(id: number) {

    const reponse = await fetch(`${BASE_URL}?action=annuler`, {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id })
    });
    return reponse.json();
}

// Récupérer l'historique des participations d'un bénévole
export async function getHistorique(id_benevole: number) {
    const reponse = await fetch(`${BASE_URL}?action=historique&id_benevole=${id_benevole}`);
    return reponse.json();
}

// Récupérer les missions à venir d'un bénévole
export async function getMissionsAVenir(id_benevole: number) {
    const reponse = await fetch(`${BASE_URL}?action=missionsAVenir&id_benevole=${id_benevole}`);
    return reponse.json();
}

// Récupérer les missions effectuées d'un bénévole
export async function getMissionsEffectuees(id_benevole: number) {
    const reponse = await fetch(`${BASE_URL}?action=missionsEffectuees&id_benevole=${id_benevole}`);
    return reponse.json();
}