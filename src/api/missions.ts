const BASE_URL = "http://localhost/api/Controller/missions.php"

export async function getToutLesMissions() {
    const reponse = await fetch(`${BASE_URL}?action=getToutLesMissions`)
    return reponse.json()
}

export async function getMissionsRecentes() {
    const reponse = await fetch(`${BASE_URL}?action=MissionRecent`)
    return reponse.json()
}
