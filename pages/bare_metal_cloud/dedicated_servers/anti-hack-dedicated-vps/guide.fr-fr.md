---
title: Informations Anti-Hack - Serveur dédié et VPS
excerpt: Découvrez les informations visibles et fournies lorsque la protection Anti-Hack interne d'OVHcloud est déclenchée
updated: 2026-04-29
---

**Découvrez ce qui se passe lorsque la protection Anti-Hack d'OVHcloud s'active sur votre Serveur dédié ou votre VPS.**

## Prérequis

- un Serveur dédié ou un VPS ayant été compromis
- un accès à l'[espace client OVHcloud](/links/manager)

## Informations anti-hack

### Serveur dédié

Lorsque la protection Anti-Hack est déclenchée sur votre Serveur dédié, un message s'affiche dans votre [espace client OVHcloud](/links/manager) : « *Votre serveur a été compromis. Veuillez contacter notre équipe d'assistance pour obtenir des instructions sur la marche à suivre.* »

Selon la criticité de la protection Anti-Hack déclenchée par OVHcloud, les actions suivantes seront autorisées/requises afin de rétablir le service complet sur le serveur.

| Statut | Actions attendues |
| ------ | --------- | ----------- |
| Compromis | Redémarrer le serveur ou demander à OVHcloud de réinstaller le serveur |
| CompromisBloqué | Collecter les données via FTP sur le serveur démarré en système rescue FTP |

![informations antihack SD](images/hacked-service.png){.thumbnail}

Dans le cas où votre serveur est placé en mode rescue FTP, OVHcloud ouvrira également un ticket de support en votre nom contenant les informations suivantes :

>
> Cher client,
>
> Votre serveur nsXXXXXXX.ip-XXX-XXX-XXX.eu représentant une menace trop importante pour notre réseau,
nous avons dû le placer en mode « rescue FTP ». Un e-mail
contenant un nom d'utilisateur et un mot de passe vous a été envoyé afin que vous puissiez
récupérer facilement les données encore présentes dans l'espace de stockage.
>
> N'hésitez pas à contacter notre support technique afin que cette
situation ne devienne pas critique.
>
> Vous trouverez ci-dessous les logs remontés par notre système qui ont déclenché cette alerte.
>
> - DÉBUT DES INFORMATIONS COMPLÉMENTAIRES -
>
>  <Détails de l'attaque>
>
> - FIN DES INFORMATIONS COMPLÉMENTAIRES -
>
> Cordialement,
>
> Support client OVHcloud
> L'équipe OVHcloud

### VPS

Lorsque la protection Anti-Hack est déclenchée sur votre VPS, celui-ci peut être placé en mode rescue selon la sévérité de la menace détectée.

![informations antihack VPS](images/hacked-vps.png){.thumbnail}

Dans le cas où votre VPS est placé en mode rescue, OVHcloud ouvrira également un ticket de support en votre nom contenant les informations suivantes :

>
> Cher client,
>
> Une activité anormale a été détectée sur votre VPS vps-XXXXXXXX.vps.ovh.net.
>
> Votre VPS a été placé en mode rescue. Cela vous permettra d'intervenir
sur votre VPS afin de résoudre les problèmes signalés. Un e-mail contenant des informations sur le mode rescue vous a été envoyé.
>
> Aucune action ne peut plus être effectuée sur votre VPS via votre Manager/API. Seules les actions suivantes sont possibles :
>
> - Réinstallation de votre VPS.
> - Utilisation du mode rescue pour résoudre les problèmes signalés.
>
> Une fois les problèmes résolus, veuillez contacter notre support technique pour le remettre en mode normal.
>
> N'hésitez pas à contacter notre équipe de support technique afin que cette situation ne devienne pas critique.
>
> Vous trouverez ci-dessous les logs remontés par notre système, qui ont déclenché cette alerte.
>

> [!primary]
> **Prenez note de la partie finale du message indiquant :** « *Une fois les problèmes résolus, veuillez contacter notre support technique pour le remettre en mode normal. N'hésitez pas à contacter notre équipe de support technique afin que cette situation ne devienne pas critique.* »
>

## Aller plus loin

Échangez avec notre [communauté d'utilisateurs](/links/community).