const BASE_URL = "http://localhost/api/Controller/Utilisateur.php";
// Récupérer les informations d'un bénévole par son ID
export async function getBenevoleParId(id: any) {
    const reponse = await fetch(`${BASE_URL}?id=${id}`);
    return reponse.json();
}

// les missions passées d'un utilisateur (bénévole)
export async function getMissionsPassees(id_benevole: number) {
    const reponse = await fetch(`${BASE_URL}?action=missionsPassees&id_benevole=${id_benevole}`);
    return reponse.json();
}

