# Site définitif — ce qui reste à compléter (mis à jour le 21/09/2026)

Le site est en ligne. Les points ci-dessous sont les blancs assumés :
ils sont marqués dans le code par un commentaire `<!-- BLANC : ... -->` quand ils
concernent une page précise.

| # | Blanc | Où | Qui | Quand |
|---|---|---|---|---|
| 1 | **Relier le domaine visionopale.fr** au projet Netlify (voir LISEZ-MOI.txt) sans toucher aux enregistrements de messagerie | registraire du domaine + Netlify | Yanis | dès que possible |
| 2 | **Adresse affichée** : c'est l'adresse d'immatriculation au RNE (Blagnac), donc un domicile. La loi impose de l'afficher tant qu'elle est celle de l'entreprise. Pour la masquer, prendre une domiciliation commerciale et déclarer le transfert sur le guichet unique (INPI), puis changer l'adresse sur le site et les documents | toutes les pages (pied de page), mentions légales, CGV, devis, facture | Yanis | si souhaité |
| 3 | **Téléphone de l'hébergeur** : Netlify ne publie pas de numéro ; les mentions indiquent son adresse et son email (support@netlify.com) | `mentions-legales.html`, article 2 | — | — |
| 4 | **Rôle de Ladji** : la micro-entreprise est au seul nom de Yanis. Ladji reste présenté comme co-fondateur et interlocuteur commercial ; sa rémunération ou son statut (associé, apporteur d'affaires, futur associé d'une société) est à formaliser par écrit hors du site | `a-propos.html` | Yanis et Ladji | avant la première facture |
| 5 | **Photos des deux co-fondateurs** (portrait carré, 800 px minimum) → `images/yanis.jpg` et `images/ladji.jpg` ; le monogramme sert de placeholder | `a-propos.html` | Yanis et Ladji | avant la première campagne |
| 6 | **Films de clients réels** : la page Films annonce qu'ils arriveront avec le Cercle Fondateur. À remplacer par 3 films dès la première autorisation de diffusion signée | `films.html` | Yanis | à la première Collection livrée |
| 7 | **Étude de cas chiffrée et témoignage** (contreparties du Cercle Fondateur) | nouvelle section de `films.html` ou page dédiée | Ladji | fin de saison |
| 8 | **Liens LinkedIn** des deux profils, une fois les pages à jour | pied de page | Ladji | S0 |
| 9 | **Numéro de TVA intracommunautaire**, si la franchise en base est dépassée ou si l'option pour la TVA est prise | `mentions-legales.html`, `cgv.html`, devis et facture | comptable | à l'option |
| 10 | **Vrai formulaire** (enregistrement des demandes) : aujourd'hui le formulaire ouvre la messagerie du visiteur. Netlify Forms est disponible sans rien installer, mais imposerait une mise à jour de la politique de confidentialité (données stockées chez Netlify) | `contact.html` | à décider | plus tard |
| 11 | **Preuve écrite des droits sur le film de démonstration** (origine des photographies, licence) à conserver dans le dossier Juridique | dossier `Juridique/` | Yanis | avant diffusion large |
| 12 | **Avis et recommandations** : aucune section d'avis n'a été créée tant qu'il n'y en a pas de véritables | — | — | quand il y en aura |
| 13 | **Mesure d'audience** : aucune. Si elle devient utile, les statistiques serveur de Netlify (sans cookie) évitent tout bandeau | — | à décider | plus tard |

## Décisions prises sans vous demander

### Le 21/09/2026 (passage en micro-entreprise)
- **Identité légale reprise du répertoire Sirene** (SIREN 992 211 409) : Yanis Ghezal, entrepreneur individuel, établissement à Blagnac, inscrit au Registre national des entreprises. La mention « EI » / « entrepreneur individuel » figure partout où apparaît le nom, comme l'exige la loi depuis 2022.
- **Plus de « Président »** : directeur de la publication et responsable des traitements = Yanis Ghezal.
- **CGV : tribunaux de Toulouse** au lieu de Paris, puisque l'entreprise est désormais en Haute-Garonne.
- **Politique de confidentialité** : Netlify ajouté comme hébergeur (journaux techniques, transfert vers les États-Unis encadré par le Data Privacy Framework).
- **Un seul email partout** : contact@visionopale.fr (le site n'en affichait déjà pas d'autre).
- **Page 404** et **adresses courtes** (visionopale.fr/offre, /contact, /en…) ajoutées.

### Le 21/09/2026 (première version)
- **Un film unique en page d'accueil**, lu automatiquement, sans son (le fichier n'en a pas), avec un bouton Pause. Le même film, avec les commandes, sur la page Films.
- **Prix publics affichés** (790 € HT, paliers 290 / 250 / 220 € HT, 490 et 890 € HT par mois) : la phase 4 autorise la fourchette publique par écrit ; le chiffrage précis reste réservé à la visio.
- **Pas de page « Réalisations » remplie avec des films empruntés** : une page honnête qui annonce les premiers films clients.
- **Sept pages plus quatre pages juridiques** (CGV publiées : la clientèle est professionnelle).
- **Aucun cookie, aucune ressource externe, polices hébergées** : pas de bandeau, rien à déclarer de plus que ce qui l'est déjà.
- **Version anglaise en une page** (`english.html`) plutôt qu'un site entier traduit : la clientèle anglophone arrive par email, pas par référencement.
