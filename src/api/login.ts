const BASE_URL = "https://projetphp.salaheddinebelhaska.tech/Controller/login.php";

export async function ConnexionAdmin(email: string, mot_de_passe: string) {
    const reponse = await fetch(BASE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, mot_de_passe })
    });
    return reponse.json();


}