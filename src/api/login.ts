// URL de base pour la requête de connexion
const BASE_URL = "http://localhost/api/Controller/login.php";

// Envoie l'email et le mot de passe à l'API et retourne les données de connexion
// (success, role, id_benevole)
export async function ConnexionAdmin(email: string, mot_de_passe: string) {
    const reponse = await fetch(BASE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, mot_de_passe })
    });
    return reponse.json();
}