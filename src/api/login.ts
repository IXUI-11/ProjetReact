const BASE_URL= "http://localhost/api/Controller/login.php";

export async function ConnexionAdmin(email : string , mot_de_pass : string) {
    const reponse = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, mot_de_pass })
});
return reponse.json();

    
}