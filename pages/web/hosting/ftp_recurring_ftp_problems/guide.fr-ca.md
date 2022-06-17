---
title: "Résoudre les erreurs récurrentes lors de l’utilisation d’un logiciel FTP"
excerpt: "Retrouvez ici les anomalies les plus fréquentes liées à votre logiciel FTP"
slug: mutualise-les-problemes-ftp-recurrents
legacy_guide_number: 1996
section: FTP et SSH
order: 3
---

**Dernière mise à jour le 05/01/2022**

## Objectif

L'utilisation de logiciels FTP lors de la connexion à votre [hébergement Web Cloud](https://www.ovhcloud.com/fr-ca/web-hosting/) peut engendrer différentes anomalies. Ce guide vous permettra de résoudre les plus courantes d'entre elles.

**Découvrez comment résoudre les erreurs liées aux logiciels FTP.**

> [!warning]
>
> OVHcloud met à votre disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous revient de ce fait d'en assurer le bon fonctionnement.
>
> Nous mettons à votre disposition ce guide afin de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un [prestataire spécialisé](https://partner.ovhcloud.com/fr-ca/) et/ou de contacter l'éditeur du service si vous éprouvez des difficultés. En effet, nous ne serons pas en mesure de vous fournir une assistance. Plus d'informations dans la section [Aller plus loin](#aller-plus-loin) de ce guide.
>

## Prérequis

- Disposer d'une [offre d'hébergement Web Cloud](https://www.ovhcloud.com/fr-ca/web-hosting/).
- Être connecté à votre [espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/fr/&ovhSubsidiary=qc).

## En pratique

### « Ce serveur ne supporte pas FTP sur TLS » (FileZilla)

![filezilla_error](images/filezilla_error.png){.thumbnail}

Ce message sur le logiciel [FileZilla](https://docs.ovh.com/ca/fr/hosting/mutualise-guide-utilisation-filezilla/) indique que vous n'avez pas activé l'option SFTP ou SSH depuis votre [espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/fr/&ovhSubsidiary=qc). De ce fait, les informations échangées entre votre serveur d'hébergement OVHcloud et votre ordinateur ne seront pas chiffrées.

Si les données que vous souhaitez échanger par ce biais ne sont pas confidentielles, cliquez sur `OK`{.action}.

Dans le cas contraire, rendez-vous dans votre [espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/fr/&ovhSubsidiary=qc), partie `Web Cloud`{.action} puis `Hébergements`{.action}. Sélectionnez l'hébergement concerné puis choisissez l'onglet `FTP-SSH`{.action}.

Si vous disposez d'un hébergement [Perso](https://www.ovhcloud.com/fr-ca/web-hosting/personal-offer/), cochez la case `Désactivé`{.action} dans la colonne `SFTP`{.action} puis patientez quelques minutes.

Si vous disposez d'un hébergement [Pro](https://www.ovhcloud.com/fr-ca/web-hosting/professional-offer/) ou [Performance](https://www.ovhcloud.com/fr-ca/web-hosting/performance-offer/), cliquez sur le bouton `...`{.action} à droite de l'utilisateur FTP concerné puis sur `Modifier`{.action}.

Choisissez `SFTP`{.action} ou `Activé`{.action} (pour activer le protocole SSH sur votre hébergement), cliquez sur `Suivant`{.action} puis sur `Valider`{.action}. Patientez quelques minutes.

> [!primary]
>
> Pour tout autre message d'erreur, consultez la section `Diagnostic` de nos guides [Hébergements Web](../).
>

### J'ai transféré mes fichiers avec un logiciel FTP, mais mon site ne s'affiche pas.

Vérifiez tout d'abord que les fichiers et dossiers de votre site sont bien présents dans le [dossier racine](https://docs.ovh.com/ca/fr/hosting/mettre-mon-site-en-ligne/#3-telecharger-les-fichiers-sur-lespace-de-stockage) de votre hébergement.

Si vous avez réalisé une modification dans vos [serveurs ou votre zone DNS](https://docs.ovh.com/ca/fr/domains/editer-ma-zone-dns/#comprendre-la-notion-de-dns) il y a moins de 48 heures, patientez et redémarrez régulièrement vos appareils afin de vider leur cache.

### Mes identifiants FTP ne fonctionnent pas.

Si vous ne parvenez pas à vous authentifier, modifiez votre mot de passe FTP en suivant les instructions de ce [guide](https://docs.ovh.com/ca/fr/hosting/modifier-mot-de-passe-utilisateur-ftp/).

### Je rencontre des erreurs aléatoires sur mon site.

Le manque d'espace sur votre hébergement mutualisé peut entraîner des dysfonctionnements sur votre site lorsque vous tentez de le modifier ou de le mettre à jour.

Pour vérifier l'espace de stockage restant sur votre hébergement, connectez-vous à votre [espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/fr/&ovhSubsidiary=qc). Cliquez sur `Web Cloud`{.action} puis `Hébergements`{.action}. Sélectionnez l'hébergement concerné.

La quantité de données enregistrée sur votre serveur d'hébergement (hors bases de données) apparaît dans la partie `Informations générales`{.action} > `Espace disque`.

![disk_space](images/disk_space.png){.thumbnail}

### Je n'arrive pas à transférer mes fichiers vers le serveur FTP.

Vérifiez que votre logiciel FTP est connecté en « Mode Passif » (Mode de configuration d'un serveur FTP dans lequel le serveur détermine le port de connexion).

Par exemple pour [Filezilla](https://docs.ovh.com/ca/fr/hosting/mutualise-guide-utilisation-filezilla/), cliquez sur `Édition`{.action}, puis `Paramètres`{.action}, `Connexion`{.action}, `FTP`{.action} et choisissez `Passif (recommandé)`{.action}.

Limitez également la taille de vos transferts de données (vous ne pourrez pas envoyer plus de **5000 fichiers et dossiers** sur les serveurs mutualisés OVHcloud en un seul transfert). Effectuez vos imports en plusieurs fois si nécessaire en utilisant des dossiers compressés.

Si vous disposez d'une [formule Pro](https://www.ovhcloud.com/fr-ca/web-hosting/professional-offer/) ou [Performance](https://www.ovhcloud.com/fr-ca/web-hosting/performance-offer/), utilisez de préférence le [protocole SSH](https://docs.ovh.com/ca/fr/hosting/mutualise-le-ssh-sur-les-hebergements-mutualises/) pour réaliser vos imports de fichiers sur l'espace de stockage de fichiers de votre hébergement.

### Je n'arrive pas à supprimer le lien symbolique « index.html » sur mon espace FTP

Ce lien est installé par défaut sur les hébergements mutualisés OVHcloud. Il donne cet affichage :

![site_under_construction](images/site_under_construction.png){.thumbnail}

Si vous n'avez pas utilisé la fonctionnalité « [Module en 1 clic](https://docs.ovh.com/ca/fr/hosting/modules-en-1-clic/) » pour créer votre site, vous devrez utiliser le logiciel [Net2FTP](https://docs.ovh.com/ca/fr/hosting/connexion-espace-stockage-ftp-hebergement-web/#1-connexion-via-le-ftp-explorer) accessible via l'[espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/fr/&ovhSubsidiary=qc) afin de supprimer manuellement la page « Site en construction ».

## Aller plus loin <a name="aller-plus-loin"></a>

[Utilisation du logiciel FileZilla avec votre hébergement](https://docs.ovh.com/ca/fr/hosting/mutualise-guide-utilisation-filezilla/)

Pour des prestations spécialisées (référencement, développement, etc), contactez les [partenaires OVHcloud](https://partner.ovhcloud.com/fr-ca/).

Si vous souhaitez bénéficier d'une assistance à l'usage et à la configuration de vos solutions OVHcloud, nous vous invitons à consulter nos différentes [offres de support](https://www.ovhcloud.com/fr-ca/support-levels/).

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.
