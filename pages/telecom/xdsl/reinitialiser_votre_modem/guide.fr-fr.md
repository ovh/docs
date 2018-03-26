---
title: Réinitialiser votre modem
excerpt: Insert Here A Short Desc
slug: reinitialiser_votre_modem
legacy_guide_number: g1377
section: Configuration de mon offre
---


## 
Il est possible de réinitialiser de plusieurs façon votre modem :


- Depuis votre espace client en ayant activé au préalable le contrôle du modem;
- Physiquement sur le modem;
- Par une commande Telnet.




## 
Rendez-vous dans la partie "Configuration" puis "xDSL" de votre [espace client ](https://www.ovhtelecom.fr/espaceclient/login.html)

![](images/img_1880.jpg){.thumbnail}


## 
Pour effectuez une réinitialisation de votre modem, cliquez sur "Configuration du modem" puis "Restaurer la configuration initiale".

![](images/img_1881.jpg){.thumbnail}


## 
Sélectionnez l'accès concerné dans la liste.

![](images/img_1882.jpg){.thumbnail}


## 
Validez la demande de confirmation de réinitialisation de votre modem.
Celle-ci sera effective sous 10 minutes.

![](images/img_1883.jpg){.thumbnail}


## 
Pour effectuer une réinitialisation directement sur le modem, munissez-vous d'un trombone ou d'un cure-dent afin d'exercer une pression sur le bouton "Reset".


## 
Sur le modèle Thomson 788, le bouton "Reset" se situe au dos du modem.
Il suffit alors de le laisser enfoncé pendant 10-15 secondes jusqu’à ce que le voyant "Upgrade" en façade du modem passe au bleu.

Relâcher alors la pression : le modem est en phase de réinitialisation.

Il faut compter en moyenne 2 minutes pour que le modem retrouve sa configuration d'origine et redevienne fonctionnel.

![](images/img_1660.jpg){.thumbnail}


## Sur Windows
Modems compatibles: TG784 / TG788 / TG789

Étape 1 : Connexion en Telnet au modem (via une invite de commande)

telnet 192.168.1.254

- user: Administrator
- password: (aucun)




## 
Étape 2 : Renseignez la commande ci-dessous

system reset factory yes proceed yes

\\Ainsi, le modem retrouve ses réglages d'usine (reset) et se réinitialise totalement. 

![](images/img_1879.jpg){.thumbnail}


## Sur Windows (installation Telnet)
Si vous obtenez ce message d'erreur (cf capture ci-contre) lors d'une connexion Telnet par invite de commande, il est probable que le service Telnet ne soit pas activé sur votre machine.

![](images/img_1717.jpg){.thumbnail}


## 
Dans ce cas, rendez-vous dans le "Menu" de votre Windows 
puis "Panneau de configuration".

![](images/img_1718.jpg){.thumbnail}


## 
Rendez-vous ensuite dans "Programmes et fonctionnalités".

![](images/img_1719.jpg){.thumbnail}


## 
Cliquez sur "Activer ou désactiver des fonctionnalités Windows".

![](images/img_1720.jpg){.thumbnail}


## 
Cochez "Client Telnet" puis "OK".

![](images/img_1721.jpg){.thumbnail}


## 
Il faut compter plusieurs minutes pour que les modifications soient prises en compte.

![](images/img_1722.jpg){.thumbnail}


## Sur Mac
Sur Mac, il faut passer par le "Terminal" afin de renseigner la commande Telnet.

Pour cela rendez-vous dans le menu "Aller" puis "Utilitaires".

![](images/img_1723.jpg){.thumbnail}


## 
Sélectionnez enfin "Terminal" et renseignez la commande Telnet fournie ci-dessous

![](images/img_1724.jpg){.thumbnail}


## 
Étape 1 : Connexion en telnet au modem

telnet 192.168.1.254

- user: Administrator
- password: (aucun)




## 
Étape 2 : Renseignez la commande ci-dessous

system reset factory yes proceed yes

\\ Ainsi, le modem retrouve ses réglages d'usine (reset) et se réinitialise totalement.

