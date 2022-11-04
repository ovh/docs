---
title: "Utilisation du diagnostic d'erreurs Exchange"
slug: exchange-que-verifier-lors-dun-probleme-denvoi-ou-de-reception
legacy_guide_number: 2277
excerpt: 'Découvrez comment réaliser un diagnostic automatisé des erreurs sur les comptes Exchange'
section: 'Diagnostic Exchange'
order: 1
---

**Dernière mise à jour le 08/07/2022**

## Objectif

Les erreurs sur les comptes e-mail Exchange peuvent avoir une multitude de causes. Un diagnostic automatique des fonctionnalités du compte permet de réduire ce nombre de causes. Les résultats de ces tests seront également utiles en cas de demande d'assistance concernant votre service Exchange.

**Découvrez comment lancer un diagnostic Exchange et en interpréter les résultats.**

## Prérequis

- Disposer d'une [solution Exchange OVHcloud](https://www.ovhcloud.com/fr/emails/hosted-exchange/) déjà installée
- Disposer des informations d'identification pour le compte Exchange à vérifier
- Être connecté à l'[espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr)
- Être à jour dans les [paiements](https://docs.ovh.com/fr/billing/gerer-factures-ovh/#pay-bills) de ce service et du nom de domaine lié.

## En pratique

### Réaliser un diagnostic

Connectez-vous à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr) dans la partie `Web Cloud`{.action}. Sélectionnez `Microsoft`{.action} puis cliquez sur `Exchange`{.action} et sélectionnez votre service.

![Diagnostic Exchange](images/img_4450.png){.thumbnail}

Cliquez sur l'onglet `Diagnostics`{.action} et choisissez le compte Exchange concerné dans le menu déroulant. Saisissez le mot de passe du compte dans le champ prévu à cet effet, puis cliquez sur `Lancer le diagnostic`{.action}.

![Diagnostic Exchange](images/img_4451.png){.thumbnail}

La procédure de diagnostic prendra environ 3 à 10 minutes. Voici un exemple de résultats :

![Diagnostic Exchange](images/img_4471.png){.thumbnail}

La page de résultats propose deux actions pour continuer :

- `Nouveau diagnostic`{.action} : lance un autre diagnostic.

- `Créer une demande d'assistance`{.action} : vous permet de créer un ticket auprès de notre support technique. Le ticket contiendra les résultats du diagnostic.

### Explications des erreurs

Reportez-vous au résumé suivant des erreurs possibles pour trouver la solution la plus rapide.

### Le compte est bloqué pour envoi de spam <a name="blocked"></a>

Un compte bloqué reçoit toujours des e-mails mais l'envoi a été désactivé par le système de protection automatique contre le spam.

Vous pouvez le vérifier dans l'onglet `Comptes e-mail`{.action} de votre service Exchange. Le compte aura une mention `SPAM` dans la colonne « statut » du tableau.

Veuillez consulter notre guide [Que faire en cas de compte bloqué pour spam ?](../bloque-pour-spam/) pour permettre à nos équipes de sécurité de réactiver le compte.

### L'abonnement au compte est expiré <a name="expired"></a>

Votre abonnement n'étant plus actif, l'envoi et la réception ont été désactivés.<br>
Pour réactiver votre abonnement, il suffit de reconfigurer sa [périodicité de facturation](https://docs.ovh.com/fr/microsoft-collaborative-solutions/gestion-facturation-exchange/#periodicity) dans l'[espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr).

### Le compte est bloqué par la politique de sécurité

Si une politique de sécurité est activée dans l'[espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr), le compte peut être temporairement verrouillé.

Vous pouvez, par exemple, décider que le compte sera verrouillé après plusieurs tentatives de connexion infructueuses, pour une période déterminée par vos soins.

Dans ce cas, vous pouvez attendre que le compte soit de nouveau disponible ou contacter nos équipes Exchange en créant une demande d'assistance.

Pour plus d'informations sur cette fonctionnalité, consultez notre [guide sur la politique de sécurité](../gerer-politique-de-securite-mot-de-passe/).

### L'authentification au webmail a échoué <a name="password"></a>

Cela peut être dû à la saisie d'un mot de passe de compte incorrect. Vérifiez d'abord que le mot de passe est correct, en vous connectant au [webmail](../exchange-2016-guide-utilisation-outlook-web-app/), puis redémarrez le diagnostic.

Si nécessaire, vous pouvez modifier le mot de passe du compte concerné dans l'onglet `Comptes e-mail`{.action} de votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr). Si le problème persiste, créez une demande d'assistance.

### L'enregistrement MX du domaine n'est pas valide

Cette erreur indique que les e-mails ne peuvent pas être reçus et sera également liée à cette erreur « **ATTENTION: L'e-mail de test n'a pas été reçu.** ».

En fonction de l'utilisation de votre service Exchange, les serveurs MX suivants sont valides :

- Exchange seul : mx0.mail.ovh.net, mx1.mail.ovh.net, mx2.mail.ovh.net, mx3.mail.ovh.net et mx4.mail.ovh.net
- Exchange + E-mail POP/IMAP hébergé par OVHcloud: mx0.mail.ovh.net, mx1.mail.ovh.net, mx2.mail.ovh.net, mx3.mail.ovh.net et mx4.mail.ovh.net
- Exchange + E-mail POP/IMAP non hébergé par OVHcloud: ex**?**.mail.ovh.net

<a name="hostname"></a>

> [!warning] 
> Dans nos guides, nous utilisons comme nom de serveur: ex<b>?</b>.mail.ovh.net. Vous devrez remplacer le « ? » par le numéro correspondant au serveur de votre service Exchange.<br>
> Vous trouverez ces informations dans l'espace client OVHcloud, dans la section `Web Cloud`{.action}.  Ouvrez `Microsoft`{.action}, puis `Exchange`{.action} et sélectionnez votre service. Le nom du serveur s'affiche dans la zone **Connexion** de l'onglet `Informations générales`{.action}.
>

> [!primary]
>
> Le nom technique d'un service Exchange OVHcloud se compose d'un préfixe (**hosted-** ou **private-**), d'une partie de votre « identifiant client » et d'un numéro incrémentiel indiquant le nombre de services Exchange hébergés ou privés enregistrés dans votre compte client.
>

### L'enregistrement SRV du domaine n'est pas valide

L'enregistrement SRV sert à la configuration automatique de votre compte Exchange avec un logiciel de messagerie compatible tel que Microsoft Outlook.

Vous pouvez vérifier ces paramètres dans la [zone DNS de votre domaine](../../domains/editer-ma-zone-dns/).

Voici les valeurs pour un service Exchange:

Champ | Valeur
------------ | -------------
Sous domaine | _autodiscover._tcp
Priorité | 0
Poids | 0
Port | 443
Cible | [ex**?**.mail.ovh.net ](#hostname) (remplacez le « ? » par le numéro correspondant au serveur de votre service Exchange)

### L'email de test n'a pas pu être envoyé à partir du compte

Cette erreur indique un échec général d'envoi d'e-mails pouvant avoir plusieurs causes:

- [Votre compte a été suspendu](#expired)
- [Le mot de passe entré est incorrect](#password)
- [Votre compte a été bloqué pour l'envoi de courrier indésirable](#blocked)
- [Un incident s'est produit sur l'infrastructure](https://web-cloud.status-ovhcloud.com/)

## Aller plus loin

Rejoignez notre communauté d'utilisateurs sur <https://community.ovh.com/>.
