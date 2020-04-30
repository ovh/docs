---
title: Activation du pare-feu applicatif
legacy_guide_number: 1937
slug: activation-pare-feu-applicatif
excerpt: Ce guide explique comment realiser l’activation du pare-feu applicatif sur un hebergement mutualise. L’activation du pare-feu (firewall) applicatif est de type mod_security.
section: Configuration de l'hébergement
order: 5
---

**Dernière mise à jour le 05/05/2020**

## Le mod_security
Ce module complémentaire d'Apache filtre toutes les requêtes entrantes sur vos serveurs web. Pour plus de sécurité, il les intercepte et les vérifie avant même qu'elles ne soient traitées par les scripts.

En activant Mod Security en un clic depuis votre manager, vous bénéficiez d'une protection renforcée.

Grâce au Core Rule Set (CRS), vous profitez d'emblée d'une pré-configuration optimale de votre Mod Security qui vous prémunit contre les attaques les plus courantes :

- Trojan,
- Injections d'emails,
- Faille des fichiers PDF,
- Injection de fichiers sur votre hébergement,
- injection de type SQL ou XSS,
- etc.


## Activation du pare-feu applicatif
Connectez-vous à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager){.external} à l'aide de votre couple identifiant (nic-handle) - mot de passe.


![hosting](images/3005.png){.thumbnail}

Sélectionnez votre hébergement dans la section "Hébergements"


![hosting](images/3006.png){.thumbnail}

Cliquez sur l'onglet "Site Web".


![hosting](images/3007.png){.thumbnail}

Par défaut le pare-feu applicatif est Désactivé. Cliquer sur le stylo noir de droite afin d'accéder aux options de votre hébergement mutualisé.


![hosting](images/3008.png){.thumbnail}

Cochez uniquement la case "Activer le firewall puis suivant.


![hosting](images/3010.png){.thumbnail}

Un récapitulatif des modifications vous sera alors affiché, on remarque que l'état du pare-feu (firewall) est bien activé. Cliquez sur valider pour terminer l'opération.


![hosting](images/3011.png){.thumbnail}

Le pare-feu est maintenant bien activé au niveau de votre hébergement mutualisé.


![hosting](images/3012.png){.thumbnail}
