---
title: "Comment réutiliser le wifi d'un modem Zyxel avec OverTheBox"
slug: comment-reutiliser-wifi-zyxel-otb
excerpt: "Découvrez comment réutiliser le wifi d'un modem Zyxel avec votre OverTheBox"
section: "Intégration avec les offres OverTheBox d'OVHcloud"
---

**Dernière mise à jour le 12/04/2021**

## Objectif

Lorsque vous connectez une OverTheBox au dos de votre modem zyxel, les réseaux wifi de ce dernier n'utilisent pas l'OverTheBox.
Bien qu'utilisable vous ne pouvez donc pas profiter des fonctionalités de l'OverTheBox : redondances, agrégation de lien, tunnel chiffré, ce qui diminue fortement l'interêt d'utiliser ces réseaux WiFi et nécessite un Point d'Accès WiFi dédié pour profiter du WiFi avec l'OverTheBox.

Dans ce guide, nous allons voir comment tirer partie de l'interface du modem Zyxel pour vous permettre d'isoler les réseaux Wifi dans leurs propre sous-réseau et ainsi profiter de toutes les features de l'OverTheBox en WiFi sans équipements supplémentaires.

**Apprenez à réutiliser les WiFi d'un modem Zyxel avec une OverTheBox**

## Prérequis

- Disposer d’un [accès internet xDSL ou fibre OVHcloud](https://www.ovhtelecom.fr/offre-internet/){.external} et d'un modem Zyxel fourni par OVHcloud.
- Être connecté à l'[espace client OVHcloud](https://www.ovhtelecom.fr/manager/#/){.external} dans la partie `Accès Internet`{.action}.
- Cette fonctionnalité est disponible uniquement si la configuration à distance du modem est désactivée.
- Disposer d'un [service et d'un boitier OverThebox](https://www.ovhtelecom.fr/overthebox/)
- Ce guide ne fonctionne que si vous possedez une OverTheBox Plus ou une OverTheBox IT v2 (boitier bleu avec 4 ports) qui fonctionne sans changement de DHCP des modems.
- Vous aurez besoin de 2 cables Ethernet RJ45. Le premier servira à brancher le port LAN1 du modem vers un des ports WAN de l'OverTheBox. Le second pour brancher le port LAN4 du modem vers un des port LAN de l'OverTheBox.

## En pratique

> [!primary]
>
> Ce guide ne concerne que les modems de marque Zyxel. Si vous possedez un modem Thomson ou Technicolor, vous pouvez demander un échange de comfort facturé 70€HT/84€TTC. Pour cela depuis votre [espace client OVHcloud](https://www.ovhtelecom.fr/manager/#/){.external} partie « Télécom », cliquez sur `Accès Internet`{.action} dans la barre de services à gauche, puis sélectionnez le pack et l’accès à Internet concerné. Assurez-vous d'être positionné sur l'onglet `Mon Accès`{.action}, en bas de la page à gauche cliquez sur le bouton « Echanger mon modem ».
>

### Étape 1 : Accéder à l'outil de configuration à distance

Connectez-vous à votre [espace client OVHcloud](https://www.ovhtelecom.fr/manager/#/){.external}, partie « Télécom ». Cliquez sur `Accès Internet`{.action} dans la barre de services à gauche, puis sélectionnez le pack et l’accès à Internet concerné. Assurez-vous d'être positionné sur l'onglet `Mon modem`{.action}.

Dans le cadre « Configuration à distance », vérifiez que la case à côté de `Configuration à distance activée` est bien décochée. Dès lors, deux possibilités :

- **La configuration à distance est désactivée**: Poursuivez la lecture de cette documentation à l'étape 2 « [Connectez-vous à l'interface locale du modem](./#etape-2-connectez-vous-a-linterface-locale-du-modem) » ;

- **la configuration à distance est activée**: Vous devez désactiver la configuration à distance si vous souhaitez paramétrer votre modem Zyxel localement . Pour ce faire, décochez la case à côté de `Configuration à distance activée`, confirmez la manipulation, puis patientez quelques minutes le temps de la désactivation.

![reutiliserWifiOTB](images/reutiliserWifiOTB-step1.png){.thumbnail}

### Étape 2 : Connectez-vous à l'interface locale du modem

Connectez-vous à l'interface locale du modem, celle-ci est disponible à l'adresse IP locale de votre modem, 192.168.1.1 par défaut. Si vous avez modifié l'adresse IP locale de votre modem via la configuration du LAN, utilisez l'adresse IP que vous avez définie.

Un couple user/password vous est alors demandé :

- Si la configuration à distance de votre modem était déjà désactivée à l'étape 1, utilisez l'utilisateur **admin** ainsi que le mot de passe que vous avez personnalisé.
- Si la configuration à distance de votre modem était déjà désactivée et que vous avez effectué un reset, utilisez l'utilisateur **admin** ainsi que le mot de passe sur l'étiquette au dos du modem.
- Si la configuration à distance de votre modem n'était pas désactivée, utilisez l'utilisateur **admin** ainsi que le mot de passe qui vous a été transmis par e-mail. L'objet de cet e-mail contient la mention « Réinitialisation du mot de passe du modem de votre accès ».

![reutiliserWifiOTB](images/reutiliserWifiOTB-step2.png){.thumbnail}

> [!primary]
> L'ensemble des e-mails envoyés par OVHcloud sont accessibles depuis votre espace client. Pour retrouver vos derniers identifiants de connexion reçus par e-mail, connectez-vous à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr) depuis un autre accès à Internet ou un smartphone. Une fois connecté, cliquez puis sur `E-mails de service`{.action} à droite de l'écran.
>

### Étape 3 : Accéder aux options de groupe d'interface

Une fois connecté à l'interface locale du modem, accédez à la page de configuration `Interface Grouping`. Cliquez sur l'icône menu en haut à droite, la page `Interface Grouping` se trouve dans le menu `Network Setting`.

![reutiliserWifiOTB](images/reutiliserWifiOTB-step3-1.png){.thumbnails

Sur cette page, cliquez sur le bouton `+ Add New Interface Group`

![reutiliserWifiOTB](images/reutiliserWifiOTB-step3-2.png){.thumbnail}

Donnez un nouveau nom au groupe, `OverTheBox` dans l'exemple, selectionnez l'interface WAN utilisez par votre modem, en cas de doute, le type de votre connexion est disponible sur l'espace client OVHcloud (voir image ci-dessous).

- **PTM Type - VDSL**: Pour une connexion de type VDSL
- **ATM Type - ADSL**: Pour une connexion de type ADSL
- **ETH Type - ETHWAN**: Pour une connexion de type FTTH

Dans la dernière partie vous avez deux listes, `Available LAN Interfaces` et `Selected LAN Interfaces`. Vous devez déplacer vers la droite les interfaces que vous souhaitez ajouter au LAN de votre OverTheBox. Dans le cadre de ce guide, il vous faut déplacer vers la droite, au moins un port LAN, ainsi que les réseaux Wifi présent sur le modem. Si vous le souhaitez vous pouvez également déplacer le port LAN2 et LAN3 afin qu'ils soient également présent dans le LAN de votre OverTheBox.

Une fois les interfaces souhaitées déplacées dans la section `Selected LAN Interfaces` cliquez sur le bouton `OK` pour valider votre choix. Le modem va alors déplacer les interfaces dans le groupe `OverTheBox`, il est possible que l'interface prenne un petit délais avant d'afficher les deux groupes d'interfaces `Default` et `OverTheBox`.

![reutiliserWifiOTB](images/reutiliserWifiOTB-step3-3.png){.thumbnail}

### Étape 4 : Modifier la gestion du DHCP pour le groupe OverTheBox

A l'aide du menu, accédez à la page `Home Networking` qui se trouve dans la section `Network Settings` du menu. Dans cette page nous allons désactiver le DHCP du modem sur le groupe `OverTheBox`, pour que le serveur DHCP utilisé soit celui de l'OverTheBox.

![reutiliserWifiOTB](images/reutiliserWifiOTB-step4.png){.thumbnail}

Dans la section `Interface Group` sélectionnez le groupe `OverTheBox`. Dans le cadre de ce guide, nous utilisons le DHCP par défaut de l'OverTheBox (192.168.100/24), la section `LAN IP Setup` n'a donc pas besoin d'être modifiée, elle peut nécessitée une modification pour eviter les conflits si vous utiliser une autre plage pour le DHCP de votre OverTheBox. Une fois connecté sur le LAN de l'OverTheBox, l'interface web du modem Zyxel sera accessible à l'IP indiqué (192.168.2.1 dans le cadre ce ce guide).

Enfin dans la partie `DHCP Server State`, cliquez sur `disable` afin de ne pas utiliser le DHCP.
Une fois terminé, cliquez sur le bouton `Apply` pour appliquer votre configuration.

### Étape 5 : Relier physiquement le groupe OverTheBox au LAN de votre boîtier OverTheBox

Pour que le groupe `OverTheBox` configuré sur votre modem Zyxel soit inclus dans le LAN de votre boîtier OverTheBox, il faut les relier physiquement à l'aide du cable Ethernet RJ45. Pour cela branchez le cable dans le port LAN4 du modem Zyxel, ainsi que dans le port LAN1 de votre boîtier OverTheBox. Vous pouvez également vous brancher sur un switch derrière votre boîtier OverTheBox, l'important est que le port LAN4 du modem Zyxel, soit bien branché dans le LAN de votre OverTheBox.

### Étape 6 : Tester votre nouvelle configuration

A l'aide d'un appareil pouvant se connecter au Wifi, connectez vous au Wifi partagé par votre modem Zyxel, si vous avez besoin d'aide pour configurer le réseau WiFi de votre modem Zyxel, vous pouvez consulter le [guide utilisateur Zyxel (en anglais)](http://files.isp.ovh.net/zyxel/VMG8823-B50B_V5.13_5.50.pdf){.external}.

Une fois votre appareil connecté au WiFi, vérifier que votre addresse IP correspond au DHCP de l'OverTheBox. Dans l'image ci-dessous, sur un téléphone Android, l'addresse IP 192.168.100.189 est bien inclus dans la plage d'addresse du DHCP de l'OverTheBox (192.168.100.0/24) et l'IP de la passerelle, 192.168.100.1, correspond bien à l'IP du boitier OverTheBox au sein du LAN.

Pour vérifier que votre appareil utilise bien le service OverTheBox, vous pouvez faire un test de debit sur notre site [proof.ovh.net](http://proof.ovh.net){.external}, et vérifier que le champs IPv4 correspond à l'addresse IP publique de votre service OverTheBox (151.127.x.y dans l'image).

![reutiliserWifiOTB](images/reutiliserWifiOTB-step6.png){.thumbnail}

## Aller plus loin

N'hésitez pas à échangez avec notre communauté d'utilisateurs sur vos produits Télécom sur notre site [OVHcloud community](https://community.ovh.com/c/telecom)
