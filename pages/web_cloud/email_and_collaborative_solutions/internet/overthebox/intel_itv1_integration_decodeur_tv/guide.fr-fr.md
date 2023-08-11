---
title: "Intégration d'un Décodeur TV"
excerpt: "Configurer votre OverTheBox pour continuer de profiter de vos services de télévision"
updated: 2021-04-14
---

**Dernière mise à jour le 14/04/2021**

> [!warning]
>
> Ce guide est déprécié et concerne la configuration d'équipements OverTheBox qui ne sont plus disponibles à la vente.
>

> [!alert]
>
> Pour les offres actuelles que sont OverTheBox Plus et OverTheBox IT v2, la configuration du modem reste inchangée, il faut donc laisser le décodeur TV branché directement sur le modem.
>

## Objectif

Afin d'attribuer toujours la même IP à un périphérique via le service DHCP, vous pouvez créer un bail DHCP permanent.
Cette opération est nécessaire pour les décodeurs TV puisque ces derniers ne peuvent pas fonctionner au travers le tunnel OverTheBox.

## En pratique

### Configuration

- Rendez-vous sur [http://overthebox.ovh (192.168.100.1)](http://overthebox.ovh){.external}.
- Cliquez sur le menu **" Network "** puis **" DHCP et DNS "**.
- Connectez vous avec votre compte si ce n'est pas encore fait.
- Dans la partie **" Static leases "**, cliquez sur **" Add "**.
- Renseignez :
    - **Hostname** : le nom du périphérique.
    - **Mac Address** : selectionnez l'adresse MAC de votre périphérique.
    - **Ipv4** : l'adresse à réserver pour ce périphérique.
    - **Gateway** : vous pouvez spécifier une passerelle par défaut, notamment pour les **box tv**.
- Enfin, terminez en cliquant sur **" Save & Apply "**.

> [!success]
>
> Exemple : Vous avez un décodeur TV fourni par votre opérateur Internet, la Box de cet opérateur correspond à l'interface if2 de l'OverTheBox.
> Voici donc ce qu'il faut indiquer :
>
> ![overthebox](images/4404.png){.thumbnail}
>
> Ce décodeur obtiendra toujours l'adresse IP 192.168.0.162 de façon automatique et surtout le flux TV passera directement par votre Box Internet et non par le système de tunnel OverTheBox.
>

> [!alert]
>
> Attention, si vous souhaitez simplement attribuer une IP fixe dans le réseau OverTheBox à un périphérique autre qu'un décodeur TV, veuillez laisser le paramètre Gateway sur "default".
>

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.
