# Centralisation des appels API

## Problème de départ

Chaque composant faisait son propre `fetch` avec l'URL écrite en dur, ce qui causait :
- Des bugs (ex: `MissionsController.php` qui n'existait pas → 404)
- De la répétition de code dans chaque composant

---

## Fichiers créés

### `src/api/missions.ts`
Contient tous les appels API liés aux missions.

```ts
const BASE_URL = "http://localhost/api/Controller/missions.php"

export async function getToutLesMissions() {
    const reponse = await fetch(`${BASE_URL}?action=getToutLesMissions`)
    return reponse.json()
}

export async function getMissionsRecentes() {
    const reponse = await fetch(`${BASE_URL}?action=MissionRecent`)
    return reponse.json()
}
```

### `src/api/benevoles.ts`
Contient tous les appels API liés aux bénévoles.

```ts
const BASE_URL = "http://localhost/api/Controller/benevole.php"

export async function getTousLesBenevoles() {
    const reponse = await fetch(BASE_URL)
    return reponse.json()
}
```

---

## Fichiers modifiés

| Fichier | Avant | Après |
|---|---|---|
| `src/pages/Admin.tsx` | 3 `fetch` directs avec URL en dur | `getToutLesMissions()`, `getMissionsRecentes()`, `getTousLesBenevoles()` |
| `src/pages/Missions.tsx` | `fetch("...MissionsController.php")` → 404 | `getToutLesMissions()` |
| `src/pages/Benevoles.tsx` | `fetch("...benevole.php")` | `getTousLesBenevoles()` |

---

## Comment ajouter un nouvel appel API

1. Créer un fichier `src/api/nomDeLaRessource.ts`
2. Écrire la fonction `export async function ...`
3. L'importer dans le composant avec `import { ... } from "../api/nomDeLaRessource"`

---

## Structure finale

```
src/api/
├── missions.ts    → getToutLesMissions, getMissionsRecentes
└── benevoles.ts   → getTousLesBenevoles
```
