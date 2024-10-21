---
title: 'Installer Veeam Backup & Replication'
excerpt: 'Découvrez comment installer un serveur Veeam Backup & Replication avec Veeam Enterprise'
updated: 2024-09-26
---

## Objectif

Veeam Backup & Replication est un logiciel de protection des données. Il offre diverses possibilités de sauvegarde, de réplication et de restauration.

**Apprenez à installer un serveur Veeam Backup & Replication, puis à l'enregistrer auprès du serveur de licences Veeam Enterprise de OVHcloud.**

## Prérequis

- Posséder une [offre Veeam Enterprise](/links/hosted-private-cloud/veeam-enterprise).
- Avoir à disposition une machine Windows Server 2012 ou une version plus récente.

## En pratique

### Installer Veeam Backup & Replication

Téléchargez la solution **Veeam Backup & Replication** depuis le site de [Veeam](https://www.veeam.com/downloads.html?ad=top-sub-menu). Si vous n'avez pas de compte, il sera nécessaire d'en créer un (celui-ci est gratuit).

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

Vous serez redirigé vers l'assistant d'installation, il vous suffit de fermer la fenêtre.

<a name="create"></a>

### Créer un compte de service Veeam Enterprise

#### Étape 1 - Lancer un compte de service

Au préalable, il est nécessaire de générer un mot de passe **complexe**.

Pour commencer, lancez Windows Powershell en tant qu'administrateur.

Créez ensuite un compte de service, en entrant ces lignes de commande :

```powershell
New-LocalUser "OVHVeeamEnterprise" -Password (ConvertTo-SecureString -AsPlainText "P@ssword01" -Force) -Description "OVH Service Account for Veeam Enterprise" -PasswordNeverExpires:$true -UserMayNotChangePassword:$true -AccountNeverExpires:$true
```

Notez que le nom du compte et le mot de passe correspondent à un exemple et doivent être remplacés :

* Nom du compte : OVHVeeamEnterprise
* Mot de passe : P@ssword01

####  Étape 2 - Définir les autorisations du compte de service

Lancez la console Veeam.

![console Veeam](images/veeamBandR_use_12.png){.thumbnail}

Vérifiez que vous êtes en mode **Community Edition**, dans le coin en bas à droite.

![mode free edition](images/Veeamcommunity.png){.thumbnail}

Allez dans le menu, puis cliquez sur `Users and Roles`{.action}.

![users and roles](images/veeamBandR_conf_2.png){.thumbnail}

Dans la fenêtre `Security`{.action}, choisissez `Add...`{.action}.

![ajout autorisation](images/veeamBandR_conf_3.png){.thumbnail}

Puis dans la fenêtre `Add User`{.action}, saisissez le compte de service précédemment créé. Sélectionnez le rôle **Veeam Backup Administrator** et validez enfin avec `OK`{.action}.

![ajout administrateur](images/veeamBandR_conf_4.png){.thumbnail}

De retour dans la fenêtre **Security**, vous pouvez vérifier que le compte est bien défini.

![](images/veeamBandR_conf_5.png){.thumbnail}

####  Étape 3 - Autorisations d'exécution et d'activation

L'utilisateur OVHVeeamEntreprise est accessible uniquement en local, il faut donc ajouter les permissions dans l’interface graphique d’utilisateur Windows pour l'activation de la connexion à distance.

Via l’interface graphique d’utilisateur :

1. Dans votre barre de recherche Windows, tapez `Services de composants`{.action} et lancez le service.
2. Dans le menu à gauche et suivant l'arborescence, cliquez sur `Services de composants`{.action}, puis `Ordinateurs`{.action}, puis `Poste de travail`{.action}.
3. À droite, sous l'onglet `Actions`{.action}, cliquez sur `Autres actions`{.action} puis sur `Propriétés`{.action}.
4. Allez dans `Sécurité COM`{.action} et sous la deuxième option `Autorisations d'exécution d'activation`{.action}, cliquez sur `Modifier les limites`{.action}. Ensuite, cliquez sur `Ajouter...`{.action}.

![Propriétés Autorisations d'exécution et d'activation](images/veeamuseradd.png){.thumbnail}

<ol start="5">
  <li>Cliquez sur <code class="action">Avancé...</code> pour localiser le compte de service précédemment ajouté. Cliquez ensuite sur <code class="action">Rechercher</code> et sélectionnez l'utilisateur <code class="action">OVHVeeamEnterprise</code> dans la liste des utilisateurs.</li>
</ol>

![Propriétés Autorisations d'exécution et d'activation](images/veeamuseradd1.png){.thumbnail}

<ol start="6">
  <li>Cliquez sur <code class="action">OK</code> pour confirmer la sélection et sur <code class="action">OK</code> pour valider. Ensuite, activez toutes les permissions sur l'utilisateur <code class="action">OVHVeeamEnterprise</code>.</li>
</ol>

![Autorisations de lancement et d'activation](images/veeamuseradd3.png){.thumbnail}

<ol start="7">
  <li>Cliquez sur <code class="action">OK</code> pour confirmer et sur <code class="action">Appliquer</code> pour valider les changements.</li>
</ol>

Votre utilisateur OVHVeeamEntreprise est maintenant accessible en local et à distance.

###  Étape 4 - Enregistrer le serveur Veeam Backup

#### Depuis l'espace client OVHcloud

Connectez-vous à votre [espace client OVHcloud](/links/manager), accédez à la section `Hosted Private Cloud`{.action} et sélectionnez `Plateformes et services`{.action}. Sélectionnez alors votre service **backupserverenterprise** puis cliquez sur `Activer la licence`{.action} dans la section `Raccourcis`.

Pour configurer votre environnement, assurez-vous d'avoir ouvert les ports d'OVHcloud vers vos serveurs Veeam Backup and Replication :

- `Port 9392/TCP`
- `Port 9405/TCP`

![installation Veeam](images/architecture.png){.thumbnail}

![espace client OVHcloud](images/veeam001.png){.thumbnail}

Dans la nouvelle fenêtre, saisissez les informations suivantes :

- L'adresse IP publique par laquelle votre serveur **Veeam Backup & Replication** peut être contacté.
- Le login du compte de service précédemment créé.
- Le mot de passe du compte de service.

Puis validez avec `OK`{.action}.

![activation licence](images/veeam03.png){.thumbnail}

Lorsque l'activation est faite, vous retrouvez les informations principales sur la page du service.

![licence activée](images/veeam02.png){.thumbnail}

**Mise à jour des identifiants de connexion depuis l'espace client** :

Pour mettre à jour vos identifiants de connexion, vous pouvez utiliser le bouton `Mettre à jour mes informations`{.action}.

![Update 1](images/veeam_update_cred.png){.thumbnail}

Dans la fenêtre qui s'affiche, renseignez l'`IP`, le `Nom d'utilisateur`, et le `Mot de passe`. 

Pour terminer, cliquez sur `OK`{.action}.

![Update 2](images/veeam_update_cred_2.png){.thumbnail}

#### Via l'API OVHcloud

D'abord, récupérez votre serviceName :

> [!api]
>
> @api {v1} /veeam/veeamEnterprise GET /veeam/veeamEnterprise
>

Puis effectuez l'enregistrement :

> [!api]
>
> @api {v1} /veeam/veeamEnterprise POST /veeam/veeamEnterprise/{serviceName}/register
>

Vous devez vous munir des informations suivantes :

- L'adresse IP publique par laquelle votre serveur **Veeam Backup & Replication** peut-etre contacté.
- Le port de votre Veeam Backup (usuellement **9392/TCP**)
- le login du compte de service précédemment crée
- le mot de passe du compte de service

Vous pouvez obtenir l'adresse IP publique utilisée par Veeam Enterprise pour contacter votre serveur **Veeam Backup & Replication** via :

> [!api]
>
> @api {v1} /veeam/veeamEnterprise GET /veeam/veeamEnterprise/{serviceName}
>

> [!primary]
> L'activation de votre serveur Veeam Backup & Replication peut prendre plusieurs heures.

**Mise à jour des identifiants de connexion depuis l'API** :

> [!api]
>
> @api {v1} /veeam/veeamEnterprise POST /veeam/veeamEnterprise/{serviceName}/update
>

> **Paramètres** :
> 
> `serviceName` : Le nom de votre service, exemple `pcc-XXX-XXX-XXX-XXX`
> 

Exemple de **REQUEST BODY** nécessaire :

```json
{
  "ip": "192.0.2.0",
  "password": "XXX",
  "username": "string"
}
```

###  Étape 5 - Vérifier l'enregistrement

Lancez la console Veeam.

![console Veeam](images/veeamBandR_use_12.png){.thumbnail}

Allez dans le menu, puis cliquez sur `Licence`{.action}.

![Licence Veeam](images/veeamBandR_lic_1.png){.thumbnail}

Dans les informations, vérifiez qu'il s'agit bien de votre licence OVHcloud.

Si tout s'est bien passé, vous devriez voir "Edition : Entreprise Plus".

> [!primary]
> Vous pouvez maintenant désactiver l'utilisateur que vous avez créé pour créer l'enregistrement.

![licence OVHcloud](images/veeamBandR_lic_2.png){.thumbnail}

## Aller plus loin

Si vous avez besoin d'une formation ou d'une assistance technique pour la mise en œuvre de nos solutions, contactez votre Technical Account Manager ou rendez-vous sur [cette page](/links/professional-services) pour obtenir un devis et demander une analyse personnalisée de votre projet à nos experts de l’équipe Professional Services.

Échangez avec notre [communauté d'utilisateurs(/links/community), ou sur le channel dédié [Discord](https://discord.gg/ovhcloud).
