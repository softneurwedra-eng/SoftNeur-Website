# Site vitrine SoftNeur

Site statique en français, sans dépendance JavaScript ni étape de compilation. Les fichiers publiables sont exclusivement dans `site/`.

## Aperçu local

Les sept pages sont générées par `python build_site.py` : accueil, solutions, services, à propos, contact, mentions légales et confidentialité. Modifier ce script pour les contenus partagés, puis régénérer. Le CSS est dans `site/assets/multipage.css`.

Coordonnées publiques : +226 74 39 48 47 et contact@softneur.com. Le formulaire utilise `mailto:` : il prépare un brouillon, sans envoi serveur. Aucun message n'est stocké par le site. Les statistiques et témoignages non vérifiés ne sont pas publiés.

`python -m http.server 8002 --directory site --bind 127.0.0.1`

## GitHub Pages

Publier ce dépôt sur GitHub avec la branche `main`, puis sélectionner **Settings → Pages → Source → GitHub Actions**. Le workflow publie seulement `site/`. Les chemins relatifs prennent en charge une URL de projet GitHub Pages. Aucun domaine personnalisé n’est présumé.

## Identité

Logo hybride fourni par le propriétaire. Sora pour les titres et Inter pour les textes, hébergées localement. Les licences des polices sont conservées dans `site/assets/fonts/`.

Les coordonnées et informations légales non confirmées ne sont pas publiées. Les contenus présentent SoftNeur et DeepAMC sans références clients ni statistiques inventées.
