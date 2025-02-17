# Dog'Factory Website

Site web pour le salon de toilettage Dog'Factory.

## Installation

1. Clonez le dépôt
```bash
git clone [votre-depot]
cd DogFactoryNext
```

2. Installez les dépendances
```bash
npm install
```

3. Configurez les variables d'environnement
```bash
cp .env.example .env
```
Modifiez le fichier `.env` avec vos propres valeurs :
- `JWT_SECRET` : Une clé secrète pour l'authentification
- `ADMIN_USERNAME` : Nom d'utilisateur pour l'interface admin
- `ADMIN_PASSWORD` : Mot de passe pour l'interface admin
- `DATABASE_URL` : URL de votre base de données

4. Initialisez la base de données
```bash
npx prisma db push
```

5. Créez les dossiers nécessaires
```bash
mkdir -p public/images/avantapres
```

## Développement

```bash
npm run dev
```

## Production

1. Construisez l'application
```bash
npm run build
```

2. Démarrez le serveur
```bash
npm start
```

## Fonctionnalités

- Page d'accueil avec présentation du salon
- Galerie de photos avant/après
- Interface d'administration sécurisée
- Design responsive
- Gestion des photos avec corbeille

## Structure des dossiers

- `/app` - Pages et composants Next.js
- `/components` - Composants réutilisables
- `/public` - Fichiers statiques
- `/prisma` - Schéma de base de données
- `/lib` - Utilitaires et fonctions

## Sécurité

- L'interface d'administration est protégée par authentification
- Les tokens JWT sont utilisés pour la session
- Les fichiers sensibles sont exclus de git
- Les images sont stockées de manière sécurisée

## Maintenance

- Sauvegardez régulièrement la base de données
- Gérez les photos dans la corbeille
- Mettez à jour les dépendances régulièrement
