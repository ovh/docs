---
title: 'Comment accéder à distance à une OverTheBox'
excerpt: "Découvrez comment accéder à distance à votre OverTheBox"
updated: 2024-10-24
---

## Objectif

Ajouter un accès à distance à votre OverTheBox permet une gestion et une surveillance sécurisées de votre réseau depuis n'importe quel endroit. Cette fonctionnalité est essentielle pour les administrateurs réseau qui ont besoin de maintenir une continuité opérationnelle et de réagir rapidement à des événements critiques, quel que soit leur emplacement.

**Découvrez comment ajouter un accès à distance sur OverTheBox.**

## Prérequis

- Disposer d'un service **OverTheBox** fourni par OVHcloud.
<!-- CP-NAV-START:telecom-otb -->
---

### Accès à l'espace client OVHcloud

- **Lien direct :** [OverTheBox](/links/control-panel/telecom-otb)
- **Pour accéder à vos services :** `Télécom`{.action} > `OverTheBox`{.action} > Sélectionnez votre service

---
<!-- CP-NAV-END:telecom-otb -->

## En pratique

### Création de l'accès à distance

<!-- CP-STEPS-START:creation-acces-distance -->
Depuis votre [espace client OVHcloud](/links/control-panel/telecom-otb), sélectionnez le service OverTheBox auquel vous souhaitez accéder à distance et cliquez sur `Accès à distance`{.action}.

Informations à inscrire dans la partie `Ajouter un accès à distance`{.action} :

- **IP autorisée** : Cette adresse IP publique sera la seule autorisée à se connecter sur l'OverTheBox à distance. Laissez ce champ vide si l'IP autorisée doit être celle de votre connexion actuelle.
- **Port exposé** : Port de l'**OverTheBox** qui sera contacté lors de l'accès à distance. Choisissez **443** pour un accès à distance via le navigateur ou **22** pour un accès via SSH.
- **Date d'expiration** : Date à laquelle l'accès à distance sera fermé.
- **Clef publique** : Obligatoire pour les connexions de type SSH, cette clef permet une connexion sécurisée.
- Validez la création à l'aide du bouton `Valider`{.action}.
- Une fois l'action créée, patientez quelques minutes le temps que l'accès à distance se configure.

> [!primary]
>
> L'**OverTheBox** se connecte sur notre infrastructure, aucune ouverture de port sur les modems en amont de l'**OverTheBox** n'est nécessaire.
>

![overthebox](images/step1-create-2024.png){.thumbnail}
<!-- CP-STEPS-END:creation-acces-distance -->

### Connexion à distance

<!-- CP-STEPS-START:connexion-distance -->
> [!primary]
>
> Pour une connexion sur l'interface web, il est possible que le navigateur alerte sur un possible problème de sécurité. La connexion est bien chiffrée mais le navigateur ne reconnaît pas le certificat SSL car il n'est pas signé par une autorité de certification.
>

> [!tabs]
> HTTPS
>>
>> Une fois l'accès à distance créé, vous pouvez vous connecter à votre **OverTheBox** en cliquant sur le lien.
>>
>> ![overthebox](images/step2-connecthttps-2024.png){.thumbnail}
>>
> SSH
>>
>> Une fois l'accès à distance créé, vous pouvez vous connecter à votre **OverTheBox** en entrant la commande affichée dans votre terminal.
>>
>> ![overthebox](images/step2-connectssh-2024.png){.thumbnail}
>>
<!-- CP-STEPS-END:connexion-distance -->

### Suppression de l'accès à distance

<!-- CP-STEPS-START:suppression-acces-distance -->
Vous pouvez supprimer un accès à distance en cliquant sur le symbole en forme de poubelle.

![overthebox](images/step3-delete-2024.png){.thumbnail}
<!-- CP-STEPS-END:suppression-acces-distance -->

## Aller plus loin

### Configurer un autre type d'ouverture de port

Pour plus de détails sur l'ouverture de port afin d'accéder à un autre équipement sur votre réseau local, consultez le guide « [Comment configurer le pare-feu (firewall) sur OverTheBox ?](/pages/web_cloud/internet/overthebox/middle_redirection_de_port) ».

Échangez avec notre [communauté d'utilisateurs](/links/community).
