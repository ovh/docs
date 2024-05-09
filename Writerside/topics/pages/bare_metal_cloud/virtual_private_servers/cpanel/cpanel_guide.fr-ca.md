---
title: "Déployer cPanel sur un VPS"
excerpt: "Découvrez comment instancier un VPS avec l’application cPanel pré-installée."
updated: 2024-01-31
---

## Objectif

cPanel est un panneau de configuration qui facilite la gestion d'hébergements web. Il rend les tâches complexes plus accessibles, y compris pour les nouveaux utilisateurs. Il offre une vaste gamme de fonctionnalités comme, par exemple, pour la gestion : 

- des e-mails
- des domaines
- des bases de données
- de la sécurité
- etc.

Grâce à une interface graphique permettant l'automatisation des paramètres, l'hébergement de sites web est ainsi simplifié.

**Découvrez comment déployer cPanel avec les applications pré-installées sur un VPS.**

## Prérequis

- Disposer d'une offre [VPS](https://www.ovhcloud.com/fr-ca/vps/){.external} avec une distribution [compatible](https://www.ovhcloud.com/fr-ca/vps/os/).
- Être connecté à votre [espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/fr/&ovhSubsidiary=qc){.external}.

## En pratique

Si vous disposez déjà d'un VPS et que vous souhaitez y installer cPanel, vous pouvez réinstaller le VPS à partir de votre [espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/fr/&ovhSubsidiary=qc) via un [OS compatible avec cPanel](https://www.ovhcloud.com/fr-ca/vps/os/).

> [!warning]
>
> Si vous réinstallez un VPS, toutes les données stockées sur le VPS seront perdues.
> 

Afin d'installer votre serveur cPanel, commandez un VPS avec la distribution cPanel.

![cPanel](cpanel_order.png){.thumbnail}

Quand votre VPS est prêt, vous recevez un e-mail vous donnant les accès pour vous connecter à votre serveur cPanel :

```
 |    Vos application(s):
 |    Application: cpanel
 |    Vous pouvez vous connecter à cpanel depuis https://<nomduserveur>:2087/<session_parameters>
```

### Première connexion

Une fois que vous avez reçu l'e-mail contenant le lien unique, cliquez sur ce lien pour effectuer la configuration initiale. Si le lien a déjà expiré, connectez-vous en [SSH](ssh_introduction1.) au serveur et exécutez la commande `sudo whmlogin` pour générer un nouveau lien.

L'URL générée par la commande `sudo whmlogin` vous permet de vous connecter sans informations d'identification (utilisateur et mot de passe) à votre interface WHM. WHM est une surcouche de cPanel. Vous pourrez accéder à cPanel après avoir effectué les étapes suivantes.

#### Étape 1 : lire et accepter les conditions d'utilisation de cPanel

Lisez et acceptez les conditions d'utilisation de cPanel.

![cPanel](license_validation.png){.thumbnail}

#### Étape 2 : compléter les champs requis

Indiquez les serveurs de messagerie et de noms (nameservers) que vous souhaitez définir sur le serveur VPS.

![cPanel](setup_config_cpanel.png){.thumbnail}

#### Étape 3 : définir le mot de passe root

![cPanel](images_change_root.png){.thumbnail}

Désormais, vous pouvez vous connecter à votre serveur en SSH en utilisant l'utilisateur root avec le mot de passe que vous venez de définir.

### Créer un compte cPanel depuis l’interface WHM

Une fois connecté à votre interface WHM, cliquez sur `Create a New Account`{.action} pour créer un compte cPanel.

![cPanel](create_new_account.png){.thumbnail}

Remplissez le formulaire puis validez pour confirmer la création de votre compte cPanel.

![cPanel](create_new_account_form.png){.thumbnail}

Sur le nouvel écran qui s'affiche, cliquez sur le boutton `Go to cPanel`{.action} à droite de l'écran.

![cPanel](go_to_cpanel.png){.thumbnail}

Vous êtes redirigé vers votre interface cPanel.

![cPanel](manager_cpanel.png){.thumbnail}

Vous pouvez désormais utiliser cPanel. Pour toute information complémentaire concernant cPanel, consultez la [documentation officielle](https://docs.cpanel.net/).

> [!primary]
>
> Dans la barre de navigation de votre navigateur, entrez les URLs suivantes pour vous connecter à :
>
> - cPanel : https&#58;//&#60;IP_V4&#62;:2083/ (utilisez les identifiants qui viennent d'être créés dans l'interface WHM)
> - WHM : https&#58;//&#60;IP_V4&#62;:2087/ (utilisez le nom d'utilisateur « root » ainsi que le mot de passe reçu dans l’e-mail d’achat du service ou le mot de passe SSH qui a été modifié dans l’interface WHM)
>
> Retrouvez votre adresse IPv4 dans l'e-mail que vous avez reçu suite à la commande de votre VPS avec la distribution cPanel.
>

### Sécurisation de votre service

Nous vous recommandons de prendre toutes les mesures nécessaires pour sécuriser votre WHM et votre VPS. Pour cela, nous vous recommandons de lire [les recommandations de cPanel](https://docs.cpanel.net/knowledge-base/security/tips-to-make-your-server-more-secure/).

Nous vous recommandons également de consulter notre guide pour [sécuriser un VPS](secure_your_vps1.), d'utiliser [nos solutions de sauvegarde](bare-metal-cloud-virtual-private-servers1.) et de configurer le [Edge Network Firewall](firewall_network1.).

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.
