---
title: "Récupérer la sauvegarde de l'espace FTP de son hébergement Cloud Web"
excerpt: "Découvrez comment récupérer une sauvegarde de l'espace FTP de votre hébergement Cloud Web"
updated: 2026-03-31
---

## Objectif

Votre hébergement Cloud Web dispose d'un espace de stockage dans lequel vous pouvez héberger vos sites ou applications.

**Découvrez comment récupérer une sauvegarde de l'espace FTP de votre hébergement Cloud Web**.

> [!primary]
> 
> Les sauvegardes proposées par OVHcloud pour les hébergements Cloud Web sont non-contractuelles. Celles-ci sont mises à disposition pour compléter vos propres moyens de sauvegarde lors de situations urgentes. Nous vous recommandons donc de réaliser régulièrement vos propres sauvegardes de sécurité pour pallier à d'éventuelles pertes de données.
> 
> Lorsque vous effectuez une sauvegarde de sécurité pour votre site et que vous utilisez une base de données, faites également une sauvegarde de celle-ci. N'hésitez pas à consulter notre guide pour [récupérer une sauvegarde de votre base de données](/pages/web_cloud/web_hosting/sql_database_export).
> 

**Découvrez comment récupérer et restaurer une sauvegarde FTP de votre hébergement Cloud Web.**

## Prérequis

- Disposer d'un [hébergement Cloud Web](/links/web/hosting-cloud-web-offer)
- Avoir accès à l'adresse e-mail de contact associée à votre identifiant client.

<!-- CP-NAV-START:web-hosting -->
---

### Accès à l'espace client OVHcloud

- **Lien direct :** [Hébergements](/links/control-panel/web-hosting)
- **Pour accéder à vos services :** `Web Cloud`{.action} > `Hébergements`{.action} > Sélectionnez votre hébergement web

---
<!-- CP-NAV-END:web-hosting -->

## En pratique

Un hébergement Cloud Web dispose de sauvegardes automatiques déclenchées aux fréquences suivantes :

- le jour même, effectuée après 0 h 00.
- la veille, effectuée après 0 h 00.
- l’avant-veille, effectuée après 0 h 00.
- le dimanche précédent, effectuée après 01 h 00.

Seules les sauvegardes mentionnées ci-dessus pourront être proposées par OVHcloud, sous réserve que votre hébergement Cloud Web existait déjà aux dates indiquées et sous réserve des disponibilités de l'infrastructure au moment de la demande de la sauvegarde.

### Récupérer une sauvegarde

Contrairement aux hébergements mutualisés OVHcloud, il est impossible d'effectuer une restauration de l'espace FTP en un clic depuis l'espace client OVHcloud.

Un lien de téléchargement de la sauvegarde est généré puis envoyé par e-mail à l'adresse e-mail associée à l'identifiant client administrateur de l'hébergement Cloud Web.

Cliquez sur les onglets ci-dessous pour afficher successivement chacune des **5** étapes.

> [!tabs]
> **Étape 1**
>>
>> Accédez à la page [Hébergements](/links/control-panel/web-hosting), puis choisissez le Cloud Web concerné.
>>
>> ![Hébergements web](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Étape 2**
>>
>> Sélectionnez l'onglet `FTP - SSH`{.action} et cliquez sur le bouton `Générer une sauvegarde`{.action} à droite.
>>
>> ![Bouton Générer une sauvegarde](/pages/assets/screens/control_panel/product-selection/web-cloud/cloud-web/ftp-ssh/generate-a-backup.png){.thumbnail}
>>
> **Étape 3**
>>
>> Dans la fenêtre qui s'ouvre, sélectionnez l'une des sauvegardes disponibles puis cliquez sur `Suivant`{.action}.
>>
>> ![Sélection de la sauvegarde à récupérer](/pages/assets/screens/control_panel/product-selection/web-cloud/cloud-web/ftp-ssh/generate-a-backup-step-1.png){.thumbnail}
>>
> **Étape 4**
>>
>> Une seconde fenêtre vous indique que le lien de téléchargement de la sauvegarde vous sera envoyé par e-mail et qu'aucune restauration automatique sur votre hébergement Cloud Web ne sera faite par OVHcloud.
>>
>> ![Message de confirmation de génération de la sauvegarde](/pages/assets/screens/control_panel/product-selection/web-cloud/cloud-web/ftp-ssh/generate-a-backup-step-2.png){.thumbnail}
>>
>> Cliquez sur `Confirmer`{.action} pour valider votre demande.
>>
> **Étape 5**
>>
>> Si la génération de la sauvegarde est bien lancée, le message suivant apparaît dans votre espace client OVHcloud :
>>
>> ![Message de confirmation de lancement de la sauvegarde](/pages/assets/screens/control_panel/product-selection/web-cloud/cloud-web/ftp-ssh/message-backup-progress.png){.thumbnail}
>>
>> La sauvegarde prend entre 10 et 15 minutes.

### Télécharger la sauvegarde

Une fois la sauvegarde finalisée, vous recevez un e-mail sur l'adresse e-mail associée à l'identifiant administrateur de votre hébergement Cloud Web.

Cet e-mail contient un lien de téléchargement **valable 9 jours** à compter de la réception de l'e-mail :

![E-mail contenant le lien de téléchargement de la sauvegarde](/pages/assets/screens/email-sending-to-customer/cloud-web/backup-information.png){.thumbnail}

Le fichier ainsi téléchargé est au format *.tar.gz*.

### Restaurer votre sauvegarde

Une fois vos fichiers téléchargés, vous pourrez vous [connecter à votre espace FTP](/pages/web_cloud/web_hosting/ftp_connection) à l'aide d'un logiciel FTP tel que [Filezilla](/pages/web_cloud/web_hosting/ftp_filezilla_user_guide) puis remplacer les fichiers que vous souhaitez par ceux récupérés.

> [!primary]
>
> Utilisez bien les ports indiqués dans votre [espace client OVHcloud](/links/manager) pour les connexions en SFTP et SSH car le port 22 ne sera pas fonctionnel pour votre hébergement Cloud Web.
>

## Aller plus loin 

[Se connecter à l’espace de stockage de son hébergement Web](/pages/web_cloud/web_hosting/ftp_connection)

[Se connecter à l'aide du logiciel Filezilla](/pages/web_cloud/web_hosting/ftp_filezilla_user_guide)

Pour des prestations spécialisées (référencement, développement, etc), contactez les [partenaires OVHcloud](/links/partner).

Si vous souhaitez bénéficier d'une assistance à l'usage et à la configuration de vos solutions OVHcloud, nous vous proposons de consulter nos différentes [offres de support](/links/support).

Échangez avec notre [communauté d'utilisateurs](/links/community)