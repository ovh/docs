---
title: 'Les problèmes récurrents lors de l’utilisation d’un logiciel FTP'
excerpt: 'Retrouvez ici les informations sur les problèmes récurrents que vous pouvez rencontrer sur votre logiciel FTP'
slug: mutualise-les-problemes-ftp-recurrents
legacy_guide_number: 1996
section: 'FTP et SSH'
---

**Dernière mise à jour le 18/10/2021**

## Objectif

L'utilisation de logiciels FTP lors de la connexion à votre [hébergement Web Cloud](https://www.ovh.com/fr/hebergement-web/) peut engendrer différentes anomalies. Ce guide vous permettra de résoudre les plus courantes d'entre elles.

**Découvrez comment résoudre les dysfonctionnements liés aux logiciels FTP.**

> [!warning]
>
> OVHcloud met à votre disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous revient de ce fait d'en assurer le bon fonctionnement.
>
> Nous mettons à votre disposition ce guide afin de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un prestataire spécialisé et/ou de contacter l'éditeur du service si vous éprouvez des difficultés. En effet, nous ne serons pas en mesure de vous fournir une assistance. Plus d'informations dans la section [Aller plus loin](#aller-plus-loin) de ce guide.
>

## Prérequis

- Disposer d'une [offre d'hébergement Web Cloud](https://www.ovh.com/fr/hebergement-web/)
- Être connecté à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr)

## En pratique

### « Ce serveur ne supporte pas FTP sur TLS » (FileZilla)

![filezilla_error](images/filezilla_error.png){.thumbnail}

Ce message sur le logiciel [FileZilla](../mutualise-guide-utilisation-filezilla/) indique que vous n'avez pas activé l'option SFTP ou SSH depuis votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr). De ce fait, les données échangées entre votre serveur d'hébergement et votre poste informatique ne seront pas chiffrées.

Si les données que vous souhaitez échanger par ce biais ne sont pas confidentielles, cliquez sur `OK`{.action}.

Dans le cas contraire, rendez-vous dans votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr), partie `Web Cloud`{.action} puis `Hébergements`{.action}. Sélectionnez l'hébergement concerné puis choisissez l'onglet `FTP-SSH`{.action}.

Cliquez sur le bouton `...`{.action} à droite de la ligne de l'utilisateur FTP concerné puis sur `Modifier`{.action}. Choisissez SFTP ou SSH (si vous disposez d'un hébergement [Pro](https://www.ovh.com/fr/hebergement-web/hebergement-pro.xml) ou [Performance](https://www.ovh.com/fr/hebergement-web/hebergement-performance.xml)), cliquez sur `Suivant`{.action} puis `Valider`{.action}.

> [!primary]
>
> Pour tout autre message d'erreur, consultez la section `Diagnostic` de nos guides [Hébergements Web](../).
>

### J'ai transféré mes fichiers avec un logiciel FTP, mais mon site ne s'affiche pas.

Vérifiez tout d'abord que les fichiers et dossiers de votre site sont bien présents dans le [Dossier racine](../mettre-mon-site-en-ligne/#3-telecharger-les-fichiers-sur-lespace-de-stockage) de votre hébergement.

Si vous avez réalisé une modification dans vos [serveurs ou votre zone DNS](../../domains/editer-ma-zone-dns/#comprendre-la-notion-de-dns) il y a moins de 48 heures, patientez et redémarrer régulièrement vos appareils afin de vider leurs caches.

### Mes identifiants FTP ne fonctionnent pas.

Si vous ne parvenez pas à vous authentifier, modifiez votre mot de passe FTP en suivant les instructions de ce [guide](../modifier-mot-de-passe-utilisateur-ftp/).

### Je rencontre des dysfonctionnements aléatoires sur mon site.

Le manque d'espace sur votre hébergement mutualisé peut générer des dysfonctionnements si vous tentez de mettre en ligne de nouveaux fichiers.

Pour vérifier l'espace de stockage restant sur votre serveur d'hébergement, connectez-vous à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr). Cliquez sur `Web Cloud`{.action} puis `Hébergements`{.action}. Sélectionnez l'hébergement concerné.

La quantité de données enregistrée sur votre serveur d'hébergement (Hors bases de données) apparaît dans la partie `Informations générales`{.action}, `Espace disque`{.action} :

![disk_space](images/disk_space.png){.thumbnail}

### Je n'arrive pas à télécharger mes fichiers sur le serveur FTP.

Vérifiez que votre logiciel FTP est connecté en « Mode Passif » (Mode de configuration d'un serveur FTP dans lequel le serveur détermine le port de connexion).

Pour [Filezilla](../mutualise-guide-utilisation-filezilla/), par exemple, Cliquez sur `Édition`{.action}, puis `Paramètres`{.action}, `Connexion`{.action}, `FTP`{.action} et choisissez `Passif (recommandé)`{.action}).

Limitez également la taille de vos imports (L'import de données sur les serveurs mutualisés OVHcloud est limité à 5000 fichiers et dossiers). Effectuez vos imports en plusieurs fois en utilisant des dossiers compressés.

Si vous diposez d'une formule [Pro](https://www.ovhcloud.com/fr/web-hosting/professional-offer/) ou [Performance](https://www.ovhcloud.com/fr/web-hosting/performance-offer/), utilisez le SSH pour réaliser vos imports de fichiers sur l'espace de stockage de votre hébergement.

### Je n'arrive pas à supprimer le lien symbolique « index.html » sur mon espace FTP

Ce lien est installé par défaut sur les hébergements mutualisés OVHcloud. Il donne cet affichage :

![site_under_construction](images/site_under_construction.png){.thumbnail}

Si vous n'utilisez pas la fonctionnalité « [Module en 1 clic](../modules-en-1-clic/) », vous devrez utiliser [Filezilla](../mutualise-guide-utilisation-filezilla/), afin de le supprimer manuellement.

## Aller plus loin <a name="aller-plus-loin"></a>

[Utilisation logiciel FileZilla avec votre hébergement](https://docs.ovh.com/fr/hosting/mutualise-guide-utilisation-filezilla/)

Pour des prestations spécialisées (référencement, développement, etc), contactez les [partenaires OVHcloud](https://partner.ovhcloud.com/fr/).

Si vous souhaitez bénéficier d'une assistance à l'usage et à la configuration de vos solutions OVHcloud, nous vous invitons à consulter nos différentes [offres de support](https://www.ovhcloud.com/fr/support-levels/).

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.