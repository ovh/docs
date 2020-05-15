---
title: 'Déployer cPanel sur centOS7'
description: 'Découvrez comment déployer cPanel en un clic avec les applications pré-installées sur VPS.'
slug: cpanel
excerpt: 'Découvrez ici comment instancier un VPS avec l’application cPanel pré-installée.'
section: 'Utilisation avancée'
---

## Introduction
cPanel est un panneau de configuration conçu pour les hébergeurs web. Constitué d'une interface graphique permettant l'automatisation des paramètres, l'hébergement de site web est ainsi simplifié.


## Commande
Afin de créer votre serveur cPanel, il faut d'abord commander un VPS avec la distribution cPanel.


![horizon](images/cpanel_order.png)

Quand votre VPS est prêt, vous recevez un e-mail vous donnant les accès pour vous connecter à votre serveur cPanel:

```
 |    Vos application(s):
 |    Vous pouvez vous connecter à cpanel depuis https://<ip>:2087/<session_parameters>
```
Votre serveur cPanel est maintenant prêt à être utilisé.

## Première connection

L'url ci-dessus est une url qui vous permet de vous connecter sans login et mot de passe à votre manager cPanel.
Il faut dans un premier temps valider votre licence puis ensuite configurer votre mot de passe du user root afin de vous connecter dans le futur sur cette interface.

![horizon](images/license_validation.png)

L'url généré est une url temporaire afin de sécurité l'accès, si le lien vous demande de vous identifier cela signifie que le token dans l'url a expiré.
Vous pouvez regénérer cette url avec un outil disponible en ligne de commande sur votre vps. La procédure est expliqué ci-dessous

La page suivante vous demande de configurer votre adresse mail et les serveurs de nom que vous souhaitez utiliser.

![horizon](images/setup_config_cpanel.png)

## Regénérer votre url de connection

Connectez vous en ssh avec les identifiant fourni dans l'e-mail d'accès et exécuter la commande suivante :

```sh
sudo whmlogin
```

Vous pouvez maintenant cliquer sur le lien généré pour accéder à votre interface management et configurer votre mot de passe root.
