# Dog Factory - Site de Toilettage Canin

Site web moderne pour le salon de toilettage Dog Factory, développé avec Next.js et Tailwind CSS.

## Prérequis

- Node.js (version 18 ou supérieure)
- npm (inclus avec Node.js)

## Installation

1. Clonez le dépôt :
```bash
git clone [url-du-depot]
cd dog-factory-next
```

2. Installez les dépendances :
```bash
npm install
```

3. Configuration de Google Maps :
- Créez un projet dans la [Console Google Cloud](https://console.cloud.google.com/)
- Activez l'API Maps JavaScript et obtenez une clé API
- Remplacez `YOUR_GOOGLE_MAPS_API_KEY` dans le fichier `src/components/Map.tsx` par votre clé API

## Développement

Pour lancer le serveur de développement :

```bash
npm run dev
```

Le site sera accessible à l'adresse [http://localhost:3000](http://localhost:3000)

## Production

Pour construire l'application pour la production :

```bash
npm run build
```

Pour lancer le serveur de production :

```bash
npm start
```

## Structure du Projet

- `src/app/` - Pages et layout principal
- `src/components/` - Composants réutilisables
- `public/` - Assets statiques

## Fonctionnalités

- Design responsive
- Navigation intuitive
- Intégration Google Maps
- Formulaire de contact
- Galerie photos
- Section prestations
