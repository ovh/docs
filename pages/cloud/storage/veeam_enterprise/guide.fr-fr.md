---
title: 'Mettre en place Veeam Backup & Replication'
slug: veeam-backup-replication
excerpt: 'Découvrez comment installer un serveur Veeam Backup & Replication avec Veeam Enterprise'
section: 'Veeam'
---

**Dernière mise à jour le 03/09/2021**

## Objectif

Veeam Backup & Replication est un logiciel de protection des données. Il offre diverses possibilités de sauvegarde, de réplication et de restauration.

**Apprenez à installer un serveur Veeam Backup & Replication, puis à l'enregistrer auprès du serveur de licences Veeam Enterprise de OVHcloud.**


## Prérequis

* Posséder une offre Veeam Enterprise.
* Avoir à disposition une machine Windows Server 2012 ou 2016.

> [!primary]
>
> Nos offres Veeam sont uniquement compatibles avec la dernière version (10) proposée par Veeam. Veuillez prendre en compte ce point lors de la configuration de Veeam pour vos services.
>

## En pratique

### Installer Veeam Backup & Replication

Téléchargez la solution **Veeam Backup & Replication** depuis le site de Veeam. Si vous n'avez pas de compte, il sera nécessaire d'en créer un (celui-ci est gratuit).

Le fichier se présente sous la forme d'une image disque au format ISO. Après l'avoir transférée sur votre serveur, sélectionnez le lecteur CD de la machine puis choisissez l'image.

Dans la machine, vous pouvez désormais lancer l'installeur. Sélectionnez alors `Veeam Backup & Replication Install`{.action}.

![installation Veeam](images/veeamBandR_inst_01.png){.thumbnail}

Après l'avoir lu, acceptez le contrat de licence en choisissant `Next`{.action}.

![contrat de licence](images/veeamBandR_inst_02.png){.thumbnail}

Passez l'étape de renseignement du fichier de licence avec `Next`{.action}.

![fichier de licence](images/veeamBandR_inst_03.png){.thumbnail}

Dans l'étape de sélection des composants à installer, ne modifiez rien. Selon vos besoins, vous pouvez cependant changer le chemin de destination de l'installation. Validez ensuite avec `Next`{.action}.

![chemin d'installation](images/veeamBandR_inst_04.png){.thumbnail}

L'installateur va maintenant effectuer un contrôle des prérequis. Si vous partez d'une installation brute de Windows, certains composants seront absents. Mais pas de panique : l'installeur téléchargera et installera ceux-ci automatiquement. Validez ensuite avec `Next`{.action}.

![validation](images/veeamBandR_inst_05.png){.thumbnail}

Patientez pendant l'installation des prérequis.

![installation prérequis](images/veeamBandR_inst_06.png){.thumbnail}

Après cette étape, validez l'installation de **Veeam Backup & Replication** avec `Next`{.action}.

![validation de l'installation](images/veeamBandR_inst_07.png){.thumbnail}

Lors de l'étape de personnalisation de l'installation, validez l'opération en choisissant `Install`{.action}.

![validation de l'installation](images/veeamBandR_inst_08.png){.thumbnail}

Patientez pendant l'installation.

![installation](images/veeamBandR_inst_09.png){.thumbnail}

Une fois celle-ci terminée, quittez l'installateur en cliquant sur `Finish`{.action}.

![fermeture de l'installateur](images/veeamBandR_inst_10.png){.thumbnail}

L'installateur vous demande de redémarrer Windows afin de finaliser l'opération. Choisissez alors `Yes`{.action}.

![redémarrer Windows](images/veeamBandR_inst_11.png){.thumbnail}

### Créer un compte de service Veeam Enterprise

#### Lancer un compte de service

Au préalable, il est nécessaire de générer un mot de passe **complexe**.

Créez ensuite un compte de service, en entrant ces lignes de commande depuis un accès administrateur :

```powershell
New-LocalUser "OVHVeeamEnterprise" -Password (ConvertTo-SecureString -AsPlainText "P@ssword01" -Force) -Description "OVH Service Account for Veeam Enterprise" -PasswordNeverExpires:$true -UserMayNotChangePassword:$true -AccountNeverExpires:$true
```

Notez que le nom du compte et le mot de passe correspondent à un exemple et doivent être remplacés :

 * Nom du compte : OVHVeeamEnterprise
 * Mot de passe : P@ssword01

#### Définir les autorisations du compte de service

Lancez la console Veeam.

![console Veeam](images/veeamBandR_use_12.png){.thumbnail}

Vérifiez que vous êtes en mode **Free Edition**, dans le coin en bas à droite.

![mode free edition](images/veeamBandR_conf_1.png){.thumbnail}

Allez dans le menu, puis cliquez sur `Users and Roles`{.action}.

![users and roles](images/veeamBandR_conf_2.png){.thumbnail}

Dans la fenêtre `Security`{.action}, choisissez `Add...`{.action}.

![ajout autorisation](images/veeamBandR_conf_3.png){.thumbnail}

Puis dans la fenêtre `Add User`{.action}, saisissez le compte de service précédemment créé. Sélectionnez le rôle **Veeam Backup Administrator** et validez enfin avec `OK`{.action}.

![ajout administrateur](images/veeamBandR_conf_4.png){.thumbnail}

De retour dans la fenêtre **Security**, vous pouvez vérifier que le compte est bien défini.

![](images/veeamBandR_conf_5.png){.thumbnail}

#### Autorisations d'exécution et d'activation

L'utilisateur OVHVeeamEntreprise est accessible uniquement en local, il faut donc ajouter les permissions dans l’interface graphique d’utilisateur Windows pour l'activation de la connexion à distance.

Via l’interface graphique d’utilisateur :

1. Dans votre barre de recherche Windows, tapez `Services de composants`{.action} et lancez le service.
2. Dans le menu à gauche et suivant l'arborescence, cliquez sur `Services de composants`{.action}, puis `Ordinateurs`{.action}, puis `Poste de travail`{.action}.
3. À droite, sous l'onglet `Actions`{.action}, cliquez sur `Autres actions`{.action} puis sur `Propriétés`{.action}.
4. Allez dans `Sécurité COM`{.action} et sous la deuxième option `Autorisations d'exécution d'activation`{.action}, cliquez sur `Modifier`{.action}.
5. Cliquez sur l'utilisateur `OVHVeeamEntreprise`{.action} et activez toutes les permissions.

![Propriétés Autorisations d'exécution et d'activation](images/permissionsuserveam.png){.thumbnail}

6. Cliquez sur `OK`{.action} pour confirmer et sur `Appliquer`{.action} pour valider les changements.

Votre utilisateur OVHVeeamEntreprise est maintenant accessible en local et à distance.

### Enregistrer le serveur Veeam Backup

## Depuis l'espace client OVHcloud

Connectez-vous à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr){.external}, accédez à la section `Hosted Private Cloud`{.action} et sélectionnez `Plateformes et services`{.action}. Sélectionnez alors votre service **backupserverenterprise** puis cliquez sur `Activer la licence`{.action} dans la section `Raccourcis`.

![espace client OVHcloud](images/veeam001.png){.thumbnail}

Dans la nouvelle fenêtre, saisissez les informations suivantes :

* L'adresse IP publique par laquelle votre serveur **Veeam Backup & Replication** peut être contacté.
* Le port de votre serveur **Veeam Backup & Replication** (usuellement **9392/TCP**).
* le login du compte de service précédemment créé.
* le mot de passe du compte de service.

Puis validez avec `OK`{.action}.

![activation licence](images/veeam03.png){.thumbnail}

Lorsque l'activation est faite, vous retrouvez les informations principales sur la page du service.

![licence activée](images/veeam02.png){.thumbnail}

## Avec l'API OVHcloud

D'abord, récupérez votre serviceName :

> [!api]
>
> @api {GET} /veeam/veeamEnterprise
>

Puis effectuez l'enregistrement :

> [!api]
>
> @api {POST} /veeam/veeamEnterprise/{serviceName}/register
>

Vous devez vous munir des informations suivantes :

* L'adresse IP publique par laquelle votre serveur **Veeam Backup & Replication** peut-etre contacté.
* Le port de votre veeam backup (usuellement **9392/TCP**)
* le login du compte de service précédemment crée
* le mot de passe du compte de service

Vous pouvez obtenir l'adresse IP publique utilisée par Veeam Enterprise pour contacter votre serveur **Veeam Backup & Replication** via :

> [!api]
>
> @api {GET} /veeam/veeamEnterprise/{serviceName}
>

### Vérifier l'enregistrement

Lancez la console Veeam.

![console Veeam](images/veeamBandR_use_12.png){.thumbnail}

Allez dans le menu, puis cliquez sur `Licence`{.action}.

![Licence Veeam](images/veeamBandR_lic_1.png){.thumbnail}

Dans les informations, vérifiez qu'il s'agit bien de votre licence OVHcloud.

![licence OVHcloud](images/veeamBandR_lic_2.png){.thumbnail}

## Aller plus loin

Échangez avec notre communauté d’utilisateurs sur <https://community.ovh.com/>.
