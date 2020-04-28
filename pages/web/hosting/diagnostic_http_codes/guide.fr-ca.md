---
title: Les codes de reponse d’un serveur HTTP
legacy_guide_number: 1991
slug: mutualise-les-codes-de-reponse-dun-serveur-http
excerpt: Ce guide a pour objectif de vous lister les codes de retour d’un serveur HTTP et pour certains d’entre eux, de vous proposer des solutions pour ne plus les avoir.
section: Diagnostic
---

**Dernière mise à jour le 05/05/2020**

## Erreurs HTTP

### Les Categories
Un serveur HTTP retourne 5 catégories de code décrit ci-dessous :

- 100 - 199 : Informations retournées
- 200 - 299 : Requête traîtée avec succès
- 300 - 399 : Redirection
- 400 - 499 : Requête incomplète
- 500 - 599 : Erreur du serveur HTTP

Pour une lecture plus facile, nous allons scinder ces catégories en deux sections : codes corrects et codes erreurs. Les codes 100 à 299 sont englobés dans les codes corrects et les codes 300 à 599 englobés dans les codes erreurs.


### Codes corrects
- 200 : Requête traitée avec succès (OK)
- 202 : Requête acceptée mais non traitée
- 205 : Réinitialisation d'un formulaire (CGI)


### Codes erreurs
- 301 : Ressource demandée n'est plus disponible sur le serveur
- 302 : Ressource demandée temporairement indisponible sur le serveur
- 305 : Utilisation obligatoire du Proxy
- 400 : Détection d'une erreur de syntaxe
- 401 : Document ou répertoire protégé
- 403 : Interdiction de visualiser le répertoire (accès interdit)
- 404 : Document introuvable
- 414 : URL trop longue
- 415 : Le format du média n'est pas supporté
- 500 : Erreur interne du serveur ( [Que faire en cas d’erreur 500 Internal Server Error ?](/erreur-500-internal-server-error/){.external} )
- 501 : Action non gérée par le serveur
- 503 : Indisponiblité temporaire du serveur
- 505 : Version du protocole non supporté par le serveur
