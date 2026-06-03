// URL de base pour toutes les requêtes liées aux utilisateurs
const BASE_URL = "https://projetphp.salaheddinebelhaska.tech/Controller/Utilisateur.php";

// Récupère les informations d'un bénévole (nom, prénom, email...) par son id
export async function getBenevoleParId(id: any) {
    const reponse = await fetch(`${BASE_URL}?id=${id}`);
    return reponse.json();
}

// Récupère les missions passées (terminées) d'un bénévole par son id
export async function getMissionsPassees(id_benevole: number) {
    const reponse = await fetch(`${BASE_URL}?action=missionsPassees&id_benevole=${id_benevole}`);
    return reponse.json();
}