const BASE_URL = "http://localhost/api/Controller/benevole.php"

export async function getTousLesBenevoles() {
    const reponse = await fetch(BASE_URL)
    return reponse.json()
}

export async function supprimerBenevole(id: number) {
    const reponse = await fetch(`${BASE_URL}?action=supprimerBenevole`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id })
    });
    return reponse.json();
};

export async function ajouterBenevole(nom: string, prenom: string, email: string, mot_de_passe: string, adresse: string, code_postal: string, date_naissance: string) {
    const reponse = await fetch(`${BASE_URL}?action=ajouterBenevole`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nom, prenom, email, mot_de_passe, adresse, code_postal, date_naissance })
    });
    return reponse.json();
}

// ! Partie Admin Récupérer les participations d'un bénévole
export async function getParticipationsBenevole(id: number) {
    const reponse = await fetch(`${BASE_URL}?action=getParticipations&id=${id}`);
    return reponse.json();
}

// ! Partie Admin pour annuler une participation d'un bénévole
export async function annulerParticipationAdmin(id: number) {
    const reponse = await fetch(`http://localhost/api/Controller/participation.php?action=annulerAdmin`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id })
    });
    return reponse.json();
}