const BASE_URL = "http://localhost/api/Controller/benevole.php"

export async function getTousLesBenevoles() {
    const reponse = await fetch(BASE_URL)
    return reponse.json()
}
