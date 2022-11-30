---
title: "Restreindre l'accès par IP à votre espace client OVHcloud"
slug: ovhcloud-control-panel-ip-restriction
excerpt: "Découvrez comment sécuriser votre compte OVHcloud en limitant les adresses IP autorisées à y accéder"
section: Sécurité
order: 03
---

**Dernière mise à jour le 30/11/2022**

## Objectif

OVHcloud met à votre disposition des options pour renforcer la sécurité de votre espace client OVHcloud et de vos services.

Vous pouvez notamment restreindre à certaines adresses IP l'accès à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr).
La mise en place de cette option, couplée à la sécurisation de votre compte par une [double authentification](https://docs.ovh.com/fr/customer/securiser-son-compte-avec-une-2FA/), permet de sécuriser de manère optimale votre espace client OVHcloud contre d'éventuelles tentatives d'intrusion.

**Découvrez comment sécuriser votre compte OVHcloud en limitant les adresses IP autorisées à y accéder**

> [!warning]
>
> La restriction d'accès par IP et/ou la double authentification ne sécurisent que l'accès à l'espace client OVHcloud depuis lequel vous pouvez commander, gérer, renouveler ou supprimer vos services OVHcloud. Ces options ne sécurisent pas vos services en eux-mêmes, pour lesquels vous devez mettre en place des mesures de sécurité spécifiques.
>

## Prérequis

- Être connecté à l'[espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr).
- Avoir pris connaissance des [recommandations sur la gestion du mot de passe d'accès à votre compte](https://docs.ovh.com/fr/customer/gerer-son-mot-de-passe/).

## En pratique

### Etape 1 - récupérer les adresses IP publiques autorisées à accéder à votre espace client OVHcloud

Il existe deux types d'adresses IP :

- **Les adresses IP publiques** : elles sont visibles sur l'ensemble du réseau Internet. Celles-ci sont par exemple utilisées par votre point d'accès/box Internet afin que vous ayez une adresse sur Internet pour accéder à l'ensemble du réseau.
- **Les adresses IP privées** : invisibles et inutilisables sur le réseau Internet, elles sont allouées dans un réseau local. Pour reprendre notre exemple, votre box Internet va allouer une adresse IP privée à chacun des appareils (ordinateurs, smartphones, tablettes, ...) connectés à celle-ci. Votre point d'accès/box Internet permet ainsi à ces appareils d'utiliser son IP publique pour accéder à Internet. Ces adresses IP sont faciles à reconnaître car elles commencent généralement par 10.0.X.X, 172.16.X.X ou 192.168.X.X (où les X sont des valeurs comprises entre 0 et 255).

Pour utiliser l'option de restriction par IP de l'espace client OVHcloud, vous devrez renseigner **uniquement** votre/vos adresse(s) IP publique(s).

Pour récupérer l'adresse IP publique d'un appareil qui sera autorisé à accéder à votre espace client OVHcloud, rendez-vous sur le site [mon-ip.com](https://mon-ip.com){.external} (non géré par OVHcloud).

Prenez note de l'adresse IP qui s'affiche puis répétez l'opération pour chacun des appareils qui sera autorisé à accéder à votre espace client OVHcloud.

Si vous utilisez un réseau 4G/5G en complément, n'oubliez pas de récupérer également l'adresse IP de ce(s) réseau(x).

> [!warning]
>
> La plupart des Fournisseurs d'Accès à Internet (FAI) allouent une adresse IP **dynamique** à votre point d'accès Internet/box. Ces adresses IP dynamiques changent au redémarrage de votre box ou toutes les 24/48 heures. Néanmoins, certains FAI peuvent vous allouer des adresses IP **fixes** sur demande.
>
> Pour une connexion en 3G/4G/5G, les IP sont systématiquement **dynamiques**.
>
> **Avant** de mettre en place une restriction par IP sur votre espace client OVHcloud, vérifiez auprès de votre FAI que les adresses IP récupérées précédemment sont bien des adresses IP **fixes**. Dans le cas contraire, vous risqueriez de perdre rapidement l'accès à votre espace client OVHcloud en déclarant une IP dynamique.
>

### Etape 2 - mettre en place une restriction d'accès par IP

Connectez-vous à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr). Cliquez sur votre `nom et prénom` en haut à droite **puis** sur vos `initiales` dans la colonne bleue qui apparaît sur votre droite.

![Access from Manager](images/ip1.png){.thumbnail}

Cliquez ensuite sur l'onglet `Sécurité`{.action} pour arriver sur la page suivante :

![Access from Manager](images/ip2.png){.thumbnail}

Cliquez sur `Activer`{.action} à droite de `Restriction d'accès par IP`.

#### Présentation de l'interface

![Access from Manager](images/ip3.png){.thumbnail}

Deux sections sont présentes pour la mise en place des restrictions par IP :

- **Règle par défaut**. Ce champ permet de :
    - soit refuser l'accès à l'ensemble des adresses IP sauf celles préalablement déclarées comme **autorisées** dans la seconde section *IP configurées*. 
    - soit autoriser l'accès à l'ensemble des adresses IP sauf celles préalablement déclarées comme **refusées** dans la seconde section *IP configurées*.
    > Cochez la case `Alerte`{.action} si vous voulez être notifié par e-mail, sur votre adresse e-mail de contact, lorsqu'une tentative de connexion non autorisée a été effectuée pour accéder à votre espace client.

- **IP configurées**. Ce champ permet de déclarer les adresses IP qui feront l'objet d'une restriction ou d'une autorisation d'accès. Il permet aussi de visualiser les règles préalablement mises en place.

> [!alert]
>
> Attention avant de poursuivre vos actions.
>
> Dans la section `Règle par défaut`{.action}, ne validez **jamais** la règle par défaut en statut `Refusé`{.action} **sans avoir autorisé** correctement et au préalable au moins une de vos adresses IP publiques dans la section `IP configurées`. 
>
> Dans le cas contraire, vous bloquerez **absolument toutes les IP publiques (y compris les vôtres)** sans aucune exception. Plus personne n'aura accès à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr) et vous devrez réaliser une procédure administrative pour débloquer votre situation.
>
> Soyez donc extrêmement vigilant sur ce point.
>

#### Refuser toutes les adresses IP à l'exception des adresses légitimes

Pour n'autoriser l'accès à l'espace client OVHcloud qu'à une ou plusieurs adresse(s) IP légitimes, cliquez sur le bouton `Ajouter une restriction`{.action}.

> Dans les captures écran qui vont suivre, l'IP **192.0.2.0** sera à remplacer par une IP qui vous concerne.
> 

![Add allow rule](images/ip4.png){.thumbnail}

Dans la fenêtre qui s'ouvre, renseignez l'adresse IP publique que vous souhaitez autoriser dans le formulaire `IP`{.action}. Cochez la case `Alerte`{.action} si vous souhaitez être notifié par mail des tentatives de connexion via cette adresse IP puis laissez la `Règle`{.action} sur le statut `Autorisé`{.action}.

Cliquez sur `Suivant`{.action} et vérifiez votre adresse IP ainsi que la règle avant de cliquer sur `Valider`{.action}.

![Add allow rule](images/ip5.png){.thumbnail}

La règle devrait alors apparaître dans la section `IP configurées`.

![Add allow rule](images/ip6.png){.thumbnail}

> [!primary]
>
> **Avant** de poursuivre les actions décrites dans cette étape, répétez l'opération ci-dessus pour toutes les autres éventuelles adresses IP que vous souhaitez autoriser à accéder à votre espace client OVHcloud.
>

Une fois **l'ensemble** de vos adresses IP publiques renseignées dans la section `IP configurées`, passez, dans la section `Règles par défaut`, la règle en statut `Refusé`{.action}. Cochez la case `Alerte`{.action} si vous souhaitez être notifié par e-mail des tentatives de connexion puis cliquez sur `Valider`{.action}.

![Add allow rule](images/ip7.png){.thumbnail}

> Désormais, **seules** les adresses IP publiques préalablement autorisées dans la section `IP configurées` peuvent accéder à votre espace client OVHcloud. 

#### Autoriser toutes les adresses IP à l'exception de certaines adresses

L'option de restriction d'accès par IP permet aussi d'autoriser toutes les adresses IP à accéder à votre espace client OVHcloud à l'exception de quelques unes que vous aurez préalablement identifiées comme illégitimes.

Pour bloquer l'accès à votre espace client OVHcloud à une ou plusieurs adresse(s) IP, cliquez, dans la section `IP configurées`, sur le bouton `Ajouter une restriction`{.action}.

![Add deny rule](images/ip9.png){.thumbnail}

Dans la fenêtre qui s'ouvre, renseignez l'adresse IP publique que vous souhaitez bloquer dans le champ `IP`{.action}. Cochez la case `Alerte`{.action} si vous souhaitez être notifié par e-mail des tentatives de connexion via cette adresse IP puis passez la `Règle`{.action} sur le statut `Refusé`{.action}.

Cliquez sur `Suivant`{.action}, vérifiez l'adresse IP ainsi que la règle avant de cliquer sur `Valider`{.action}.

![Add deny rule](images/ip10.png){.thumbnail}

La règle devrait alors apparaître dans la section `IP configurées`.

![Add deny rule](images/ip11.png){.thumbnail}

> [!primary]
>
> **Avant** de poursuivre les actions décrites dans cette étape, répétez l'opération pour toutes les autres éventuelles adresses IP dont vous souhaitez bloquer l'accès à votre espace client OVHcloud.
>

Une fois l'ensemble des adresses IP publiques renseignées dans la section `IP configurées`, laissez, dans la section `Règles par défaut`, la règle en statut `Autorisé`{.action}. Cochez la case `Alerte`{.action} si vous souhaitez être notifiés par e-mail des tentatives de connexion puis cliquez sur `Valider`{.action}.

![Add deny rule](images/ip12.png){.thumbnail}

> Désormais, **toutes** les adresses IP publiques peuvent accéder à votre espace client OVHcloud, **à l'exception de** celles déclarées dans la section `IP configurées`.

## Aller plus loin

[Mettre en place une double authentification sur votre espace client OVHcloud](https://docs.ovh.com/fr/customer/securiser-son-compte-avec-une-2FA/)

Pour des prestations spécialisées (référencement, développement, etc), contactez les [partenaires OVHcloud](https://partner.ovhcloud.com/fr/).

Si vous souhaitez bénéficier d'une assistance à l'usage et à la configuration de vos solutions OVHcloud, nous vous proposons de consulter nos différentes [offres de support](https://www.ovhcloud.com/fr/support-levels/).

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.
