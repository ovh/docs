---
title: "Comment réagir face à une activité anormale détectée sur votre hébergement web"
excerpt: "Découvrez les étapes à suivre lorsqu’une activité anormale est détectée sur votre hébergement web OVHcloud"
updated: 2025-10-02
---

## Objectif

Ce guide vous explique pourquoi une **activité anormale** peut être détectée sur votre hébergement web, quelles en sont les **conséquences temporaires** (blocages de sécurité) et **comment rétablir** les fonctionnalités une fois le problème résolu.

**Découvrez comment réagir face à une activité inhabituelle sur votre hébergement OVHcloud.**

## Prérequis

- Disposer d’une offre d’[hébergement web OVHcloud](/links/web/hosting).
- Être connecté à votre [espace client OVHcloud](/links/manager).

## En pratique

> [!primary]
> Pour protéger votre site web et vos visiteurs, nous activons automatiquement des mesures de sécurité dès qu’une activité inhabituelle est détectée sur votre hébergement web. Il ne s’agit pas toujours d’une attaque : par exemple, la cause peut aussi être une mauvaise configuration de votre site web, un script tiers ou une extension défaillante.

### Pourquoi ce message s’affiche-t-il ?

Nous avons détecté une activité inhabituelle pouvant nuire à votre service :

- Cas 1 – **Malwares détectés** : présence probable de **fichiers malveillants**.
- Cas 2 – **Volume inhabituel d’envois d’e-mails via PHP** (scripts/applications).
- Cas 3 – **Volume inhabituel de requêtes sortantes** (connexions vers l’extérieur).

Par mesure de sécurité et en fonction de la situation, certaines fonctionnalités peuvent temporairement être bloquées :

- **Accès au site web** (cas 1)
- **Envoi d’e-mails via PHP** (cas 1 et cas 2).
- **Requêtes sortantes (TCP OUT)** (cas 1 et cas 3).

### Quelles sont les conséquences pour mon site web ?

- En fonction de l'activité inhabituelle détectée, votre **site web peut ne plus être en ligne** et accessible aux visiteurs.
- Les **envois d’e-mails via PHP** (formulaires, notifications, etc.) et/ou les **connexions sortantes** (API externes, webhooks, mises à jour via HTTP, etc.) peuvent être **temporairement désactivés**, selon le cas.

### Étapes à suivre pour résoudre la situation

#### Cas 1 — Malwares détectés

Votre hébergement contient très probablement des fichiers malveillants. Pour comprendre et traiter ces anomalies, suivez notre guide « [Cas d'usage - Conseils suite au piratage de votre site Web](/pages/web_cloud/web_hosting/cms_what_to_do_if_your_site_is_hacked) ».

**Une fois le nettoyage terminé**, consultez la section « [Lever les mesures de sécurité](#lift-security-measures) » ci-dessous.

#### Cas 2 — Volume inhabituel d’envois d’e-mails via PHP

Votre site web a émis un nombre d’e-mails via PHP supérieur à la normale. Cela peut être **légitime** (campagne, module newsletter) ou **non désiré** (utilisation abusive d'un formulaire, script mal configuré, extension compromise). Pour comprendre et résoudre ces anomalies, consultez notre guide « [Suivre et gérer les e-mails automatisés de son hébergement web](/pages/web_cloud/web_hosting/mail_function_script_records) ».

**Une fois la situation normalisée**, dirigez-vous vers la section « [lever les mesures de sécurité](#lift-security-measures) ».

> [!primary]
>
> Cette mesure ne concerne **pas** l’envoi de messages depuis votre adresse e-maill (via le webmail ou un client de messagerie). Elle s’applique uniquement aux **e-mails envoyés depuis vos scripts** (fonction `mail()` PHP ou envoi SMTP déclenché par une application depuis votre hébergement web).

#### Cas 3 — Volume inhabituel de requêtes sortantes (TCP OUT)

Votre site web effectue de nombreuses connexions externes (API, mises à jour, appels HTTP, etc.). Cela peut être révélateur d’un dysfonctionnement. Pour comprendre et résoudre ces anomalies, consultez notre guide « [Cas d'usage - Conseils suite au piratage de votre site Web](/pages/web_cloud/web_hosting/cms_what_to_do_if_your_site_is_hacked) ».

**Une fois le nettoyage terminé**, consultez la section « [Lever les mesures de sécurité](#lift-security-measures) » ci-dessous.

### Lever les mesures de sécurité <a name="lift-security-measures"></a>

> [!warning]
>
> N’effectuez cette étape **qu’après avoir appliqué les recommandations ci-dessus** (diagnostic, corrections/mises à jour, sécurisation). Si une activité anormale est à nouveau détectée lors d’un prochain scan, les **mesures de sécurité seront automatiquement réactivées**. Vous recevrez une nouvelle notification et les blocages resteront en place jusqu’à la **résolution définitive** de la situation.

1. Connectez-vous à votre [espace client OVHcloud](/links/manager), rendez-vous dans `Web Cloud`{.action} puis cliquez sur votre hébergement web.
2. Une **fenêtre d’alerte** s’affiche : `« Activité anormale sur votre hébergement »`. Si vous cliquez sur le bouton `Plus tard`{.action}, une **bannière d’alerte** `« Activité anormale détectée »` apparaît en haut de la page. Cliquez sur `En savoir plus`{.action} pour rouvrir la fenêtre d’alerte.
3. **Cochez** la case : `Je confirme avoir effectué toutes les actions nécessaires pour résoudre le problème`.
4. Cliquez sur `Lever les mesures de sécurité`{.action}.
5. Une **bannière de confirmation** s’affiche en haut de la page : `Votre hébergement est en cours d’analyse afin de lever les mesures de sécurité.` Suivez la progression en cliquant sur le lien `Voir les tâches en cours`{.action} ou directement depuis l’onglet `Tâches en cours`{.action}.

> [!warning]
>
> Assurez-vous que votre service est **éligible au déblocage automatique** (certains états ne permettent pas de lever immédiatement les mesures).

## Aller plus loin

[Comment sécuriser un site Web ?](/pages/web_cloud/web_hosting/secure_your_website)

Pour des prestations spécialisées (référencement, développement, etc), contactez les [partenaires OVHcloud](/links/partner).

Si vous souhaitez bénéficier d'une assistance à l'usage et à la configuration de vos solutions OVHcloud, nous vous proposons de consulter nos différentes [offres de support](/links/support).

Échangez avec notre [communauté d'utilisateurs](/links/community).

