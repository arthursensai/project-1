# Liste de vérification du contenu — coup'ART (aperçu non officiel)

Aucune des informations ci-dessous n'a été vérifiée : la recherche web n'a trouvé aucune source fiable
concernant ce salon. Le site n'affiche donc que des mentions « à confirmer ». Tout se renseigne dans
`src/data/business.ts` (passer `status` à `"verified"` seulement après confirmation du propriétaire).

| # | Élément | Statut | À obtenir auprès du propriétaire |
|---|---------|--------|----------------------------------|
| 1 | Nom exact « coup'ART » et graphie | Non vérifié | Confirmation de l'écriture officielle |
| 2 | Logo | Absent | Fichier vectoriel (SVG) ou PNG haute définition + autorisation d'usage |
| 3 | Palette et typographie de marque | Temporaires | Charte existante, enseigne, supports imprimés |
| 4 | Quartier (Hay Riad Ezzaitoune, Aïn Chkef) | Indiqué par le brief, non vérifié | Confirmation |
| 5 | Adresse postale précise | Absente | Rue, numéro, repère |
| 6 | Téléphone | Absent | Numéro confirmé |
| 7 | WhatsApp professionnel | Absent | Numéro confirmé (active le lien click-to-chat) |
| 8 | Horaires d'ouverture | Absents | Jours, horaires, pause, jour de fermeture |
| 9 | Prestations, tarifs, durées | Absents | Liste validée par le salon |
| 10 | Photographies du salon et des réalisations | Absentes | Photos réelles + autorisation écrite (et accord des clients visibles) + texte alternatif |
| 11 | Lien Google Maps | Absent | URL de la fiche officielle (active « Itinéraire ») |
| 12 | Lien d'avis Google | Absent | URL de la fiche officielle (affiche la section Avis) |
| 13 | Réseaux sociaux | Absents | Comptes officiels éventuels |
| 14 | Équipe | Section omise | Noms et photos approuvés si le salon le souhaite |
| 15 | Langues supplémentaires (arabe, darija) | Non incluses | Confirmation du besoin |
| 16 | Domaine de production | Inconnu | Domaine réel (renseigner `NEXT_PUBLIC_SITE_URL`) |
| 17 | Accord du salon | Aucun | Accord écrit avant tout passage en production |

Avant la mise en production : désactiver le mode aperçu (`NEXT_PUBLIC_PREVIEW_MODE=false`),
remplacer le wordmark temporaire, ajouter un favicon issu du logo réel.
