// URL de base pour la requête d'inscription
const BASE_URL = "http://localhost/api/Controller/inscription.php";

// Crée un nouveau compte bénévole en envoyant toutes ses informations personnelles à l'API
export async function creerCompte(nom: string, prenom: string, email: string, mot_de_passe: string, adresse: string, code_postal: string, date_naissance: string) {
    const reponse = await fetch(BASE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nom, prenom, email, mot_de_passe, adresse, code_postal, date_naissance })
    });
    return reponse.json();
}