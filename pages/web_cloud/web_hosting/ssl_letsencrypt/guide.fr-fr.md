---
title: "Hébergement web - Activer un certificat SSL gratuit Let's Encrypt"
excerpt: "Découvrez comment activer un certificat SSL gratuit Let's Encrypt sur votre hébergement Web OVHcloud"
updated: 2024-10-18
---

## Objectif

Les certificats Secure Socket Layer (SSL) permettent de chiffrer les échanges effectués depuis ou vers votre site web. Cela évite qu'une personne ou un robot malveillant ne vienne « écouter » clairement les requêtes envoyées ou émises avec votre site web.

OVHcloud propose plusieurs types de certificats SSL sur nos offres d'[hébergement mutualisé OVHcloud](/links/web/hosting). Ils sont présentés dans notre guide « [Hébergement web - Gérer un certificat SSL](/pages/web_cloud/web_hosting/ssl_on_webhosting) ». Les certificats SSL sont incontournables pour la sécurité de votre site web.

Trois types de certificats SSL existent :

- Domain Validation (DV)
- Organization validation (OV)
- Extended Validation (EV)

Les niveaux de chiffrement SSL sont identiques entre ces trois types de certificat.

La principale différence réside dans le niveau de vérifications qui sera réalisé par l'Autorité de Certification (AC) qui délivre le certificat SSL et atteste de son authenticité.

> [!warning]
>
> Sachez qu'une fois la commande initiée et transmise auprès de notre fournisseur de certificats/autorité de certification Sectigo, **aucun remboursement ne sera possible**.
>

**Découvrez comment activer un certificat SSL gratuit Let's Encrypt sur votre hébergement Web OVHcloud.**

## Prérequis

- Être connecté à votre [espace client OVHcloud](/links/manager).
- Commander ou disposer d'un [hébergement mutualisé OVHcloud](/links/web/hosting) sur lequel aucun certificat SSL n'est déjà installé.
- Commander ou disposer d'un [nom de domaine](/links/web/domains) et disposer des droits exclusifs sur son utilisation. Le nom de domaine ne doit pas déjà être lié à un certificat SSL.

## En pratique