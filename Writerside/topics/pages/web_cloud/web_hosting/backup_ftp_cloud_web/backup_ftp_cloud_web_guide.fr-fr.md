---
title: "Récupérer la sauvegarde de l'espace FTP de son hébergement Cloud Web"
excerpt: "Découvrez comment récupérer une sauvegarde de l'espace FTP de votre hébergement Cloud Web"
updated: 2023-11-16
---

## Objectif

Votre hébergement Cloud Web dispose d'un espace de stockage dans lequel vous pouvez héberger vos sites ou applications.

**Découvrez comment récupérer une sauvegarde de l'espace FTP de votre hébergement Cloud Web**.

> [!primary]
> 
> Les sauvegardes proposées par OVHcloud pour les hébergements Cloud Web sont non-contractuelles. Celles-ci sont mise à disposition pour compléter vos propres moyens de sauvegarde lors de situations urgentes. Nous vous recommandons donc de réaliser régulièrement vos propres sauvegardes de sécurité pour pallier à d'éventuelles pertes de données.
> 
> Lorsque vous effectuez une sauvegarde de sécurité pour votre site et que vous utilisez une base de données, faites également une sauvegarde de celle-ci. N'hésitez pas à consulter notre guide pour [récupérer une sauvegarde de votre base de données](sql_database_export1.).
> 

**Découvrez comment récupérer et restaurer une sauvegarde FTP de votre hébergement Cloud Web.**

## Prérequis

- Disposer d'un [hébergement Cloud Web](hosting-cloud-web-offer.){.external}
- Être connecté à votre [espace client OVHcloud](manager.){.external}.
- Avoir accès à l'adresse e-mail de contact associée à votre identifiant client.

## En pratique

Un hébergement Cloud Web dispose de sauvegardes automatiques déclenchées aux fréquences suivantes :

- le jour même, effectuée après 0 h 00.
- la veille, effectuée après 0 h 00.
- l’avant-veille, effectuée après 0 h 00.
- le dimanche précédent, effectuée après 01 h 00.

Seules les sauvegardes mentionnées ci-dessus pourront être proposées par OVHcloud, sous réserve que votre hébergement Cloud Web existait déjà aux dates indiquées et sous réserve des disponibilités de l'infrastructure au moment de la demande de la sauvegarde.

### Récupérer une sauvegarde

Contrairement aux hébergements mutualisés OVHcloud, il est impossible d'effectuer une restauration de l'espace FTP en un clic depuis [l'espace client OVHcloud](manager.){.external}.

Un lien de téléchargement de la sauvegarde est généré puis envoyé par e-mail à l'adresse e-mail associée à l'identifiant client administrateur de l'hébergement Cloud Web.

#### Etape 1 - Générer le lien de récupération envoyé par e-mail

Pour générer le lien de récupération, connectez-vous sur votre [espace client OVHcloud](manager.){.external}, rendez-vous dans la partie `Web Cloud`{.action}, cliquez sur `Hébergements`{.action} puis sur le Cloud Web concerné. 

Sélectionnez l'onglet `FTP - SSH`{.action} et cliquez sur le bouton `Générer une sauvegarde`{.action} à droite.

![backupftpcw](generate-a-backup.png){.thumbnail}

Dans la fenêtre qui s'ouvre, sélectionnez l'une des sauvegardes disponibles puis cliquez sur `Suivant`{.action}.

![backupftpcw](generate-a-backup-step-1.png){.thumbnail}

Une seconde fenêtre apparaît, vous précisant que le lien de récupération du fichier de sauvegarde vous sera envoyé par e-mail et qu'aucune restauration automatique sur votre hébergement Cloud Web ne sera faite par OVHcloud.

![backupftpcw](generate-a-backup-step-2.png){.thumbnail}

Cliquez sur `Confirmer`{.action} pour valider votre demande.

Si la génération de la sauvegarde est bien lancée, le message suivant apparaît dans votre [espace client OVHcloud](manager.){.external} :

![backupftpcw](message-backup-progress.png){.thumbnail}

La génération de la sauvegarde prend entre 10 et 15 minutes pour être réalisée.

#### Etape 2 - Récupérer la sauvegarde

Une fois la génération de la sauvegarde finalisée, vous recevez un e-mail sur l'adresse e-mail associée à l'identifiant administrateur de votre hébergement Cloud Web.<br>
Cet e-mail contient un lien de téléchargement **valable 9 jours** à compter de la réception de l'e-mail :

![backupftpcw](backup-information.png){.thumbnail}

Le fichier ainsi téléchargé est au format *.tar.gz*.

### Restaurer votre sauvegarde

Une fois vos fichiers téléchargés, vous pourrez vous [connecter à votre espace FTP](ftp_connection1.) à l'aide d'un logiciel FTP tel que [Filezilla](ftp_filezilla_user_guide1.) puis remplacer les fichiers que vous souhaitez par ceux récupérés.

> [!primary]
>
> Utilisez bien les ports indiqués dans votre [espace client OVHcloud](manager.){.external} pour les connexions en SFTP et SSH car le port 22 ne sera pas fonctionnel pour votre hébergement Cloud Web.
>

## Aller plus loin 

[Se connecter à l’espace de stockage de son hébergement Web](ftp_connection1.)

[Se connecter à l'aide du logiciel Filezilla](ftp_filezilla_user_guide1.)

Pour des prestations spécialisées (référencement, développement, etc), contactez les [partenaires OVHcloud](partner.).

Si vous souhaitez bénéficier d'une assistance à l'usage et à la configuration de vos solutions OVHcloud, nous vous proposons de consulter nos différentes [offres de support](support.).

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>