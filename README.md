# 🏠 Douala Luxury Stays - Premium Apartment Rental Platform

> **"Votre Confort, Notre Excellence"** - The premier destination for luxury apartment rentals in Douala, Cameroon.

[![Built with Vite](https://img.shields.io/badge/Built%20with-Vite-646CFF.svg)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-19+-61DAFB.svg)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4+-38B2AC.svg)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer%20Motion-Enabled-FF6B6B.svg)](https://www.framer.com/motion/)

## 🏠 Fonctionnalités

### ✅ Complété
- **Interface moderne** avec React + Vite + Tailwind CSS
- **PWA (Progressive Web App)** avec installation et mode hors ligne
- **Catalogue d'appartements** avec système de filtres avancés
- **Réservation WhatsApp** intégrée et automatisée
- **Newsletter** avec Google Forms et EmailJS
- **Pages détaillées** pour chaque appartement avec galeries
- **Design responsive** optimisé mobile et desktop
- **SEO** optimisé pour Douala et le Cameroun
- **Performance** optimisée (Lighthouse 90+)

### 📱 Technologies

- **Frontend**: React 19, Vite, Tailwind CSS 3
- **Routing**: React Router Dom 7
- **Icons**: Lucide React
- **PWA**: Service Workers, Manifest
- **Email**: EmailJS
- **Build**: Vite avec optimisations
- **Déploiement**: Vercel/Netlify ready

## 🚀 Installation et Développement

### Prérequis
- Node.js 22+
- npm ou yarn

### Installation
```bash
# Cloner le projet
git clone <repository-url>
cd appartements-douala

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

### Scripts disponibles
```bash
npm run dev      # Serveur de développement
npm run build    # Build de production
npm run preview  # Aperçu du build
npm run lint     # Vérification ESLint
```

## 🏗️ Structure du Projet

```
appartements-douala/
├── public/
│   ├── manifest.json       # PWA manifest
│   ├── sw.js              # Service Worker
│   ├── offline.html       # Page hors ligne
│   └── icons/             # Icônes PWA
├── src/
│   ├── components/
│   │   ├── common/        # Composants communs (Header, Footer, Layout)
│   │   ├── apartments/    # Composants appartements
│   │   ├── booking/       # Composants réservation
│   │   └── notifications/ # Newsletter et emails
│   ├── pages/             # Pages principales
│   ├── hooks/             # Hooks personnalisés
│   ├── utils/             # Utilitaires
│   ├── data/              # Données (appartements, témoignages)
│   └── assets/            # Images et ressources
├── vercel.json            # Configuration Vercel
├── netlify.toml           # Configuration Netlify
└── tailwind.config.js     # Configuration Tailwind
```

## 📊 Données

### Appartements
Le fichier `src/data/apartments.js` contient :
- **6 appartements** exemple dans 4 quartiers de Douala
- **Témoignages clients** authentiques
- **Informations entreprise** configurables

### Personnalisation
Pour adapter le site :
1. Modifier les données dans `src/data/apartments.js`
2. Remplacer les images dans `public/images/`
3. Configurer EmailJS dans `src/utils/email.js`
4. Mettre à jour le numéro WhatsApp dans `src/utils/whatsapp.js`

## 🔧 Configuration

### EmailJS
1. Créer un compte sur [EmailJS](https://www.emailjs.com/)
2. Configurer les templates email
3. Mettre à jour `src/utils/email.js` avec vos IDs

### Google Forms (Newsletter)
1. Créer un Google Form
2. Configurer les champs correspondants
3. Mettre à jour l'URL dans `src/components/notifications/NewsletterSignup.jsx`

### WhatsApp Business
1. Obtenir un numéro WhatsApp Business
2. Mettre à jour le numéro dans `src/utils/whatsapp.js`
3. Optionnel : Configurer l'API WhatsApp Business

## 🌍 Déploiement

### Vercel (Recommandé)
```bash
# Installer Vercel CLI
npm i -g vercel

# Déployer
vercel
```

### Netlify
```bash
# Build
npm run build

# Déployer le dossier dist/
# Ou connecter votre repository Git à Netlify
```

### Variables d'environnement
Créer un fichier `.env` pour la production :
```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_USER_ID=your_user_id
VITE_WHATSAPP_NUMBER=237XXXXXXXXX
VITE_GOOGLE_ANALYTICS_ID=GA_MEASUREMENT_ID
```

## 📈 Performance

### Optimisations incluses
- **Code splitting** automatique avec Vite
- **Lazy loading** des images
- **Service Worker** pour mise en cache
- **Bundle optimization** pour réduire la taille
- **SEO** avec meta tags et JSON-LD
- **Compression gzip** sur les assets

### Scores Lighthouse attendus
- Performance: 90+
- Accessibility: 95+
- Best Practices: 100
- SEO: 100
- PWA: 100

## 🔒 Sécurité

### Headers de sécurité
- Content Security Policy (CSP)
- X-Frame-Options: DENY
- X-Content-Type-Options: nosniff
- Strict-Transport-Security

### Bonnes pratiques
- Validation côté client des formulaires
- Sanitisation des données utilisateur
- Protection CSRF sur les formulaires
- Pas de données sensibles côté client

## 📝 Contenu et SEO

### Optimisé pour
- **Mots-clés**: "appartement meublé Douala", "location Douala", "logement Cameroun"
- **Géolocalisation**: Bonapriso, Bonanjo, Akwa, Bali
- **Schema.org**: LodgingBusiness markup
- **Open Graph**: Partage social optimisé

### Contenu local Douala
- Guide des quartiers
- Informations transports
- Conseils voyage d'affaires
- Culture et attractions locales

## 🤝 Support et Maintenance

### Maintenance recommandée
- Mise à jour mensuelle des dépendances
- Vérification des liens WhatsApp
- Test des formulaires EmailJS
- Monitoring des performances
- Sauvegarde des données

### Support
Pour toute question technique ou demande de modification :
- Créer une issue GitHub
- Contacter l'équipe de développement
- Consulter la documentation Vite/React

## 📜 Licence

Ce projet est développé pour Appartements Meublés Douala. Tous droits réservés.

---

**🚀 Développé avec ❤️ pour la ville de Douala, Cameroun**
