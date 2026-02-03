---
title: "Backup Agent - Restaurer un serveur Bare Metal avec Veeam Backup Agent"
excerpt: "Découvrez comment restaurer l'intégralité de votre système - en ligne ou sur site - grâce à une image ISO de récupération et des sauvegardes Veeam hébergées chez OVHcloud"
updated: 2025-09-30
---

## Objectif

Découvrez comment restaurer l’intégralité de votre système à l’aide de la fonctionnalité Bare Metal Recovery de Veeam, en utilisant les sauvegardes stockées sur le dépôt Veeam Cloud Connect hébergé chez OVHcloud.

Vous apprendrez à :

- Créer une **image ISO de récupération** : ce fichier permet de démarrer votre machine en cas de dysfonctionnement au lancement du système.
- Utiliser votre image ISO pour accéder à votre dernière sauvegarde et la restaurer depuis l’infrastructure OVHcloud.

Ce guide s’adresse à tous les clients OVHcloud utilisant la solution de sauvegarde Veeam, que votre infrastructure soit hébergée chez OVHcloud ou sur vos propres équipements.

Il est adapté si vous utilisez :

- Un [VPS](/links/bare-metal/vps) sous Windows ou Linux.
- Une instance [Public Cloud Compute](/links/public-cloud/compute) sous Windows ou Linux.
- Un serveur [Bare Metal](/links/bare-metal/bare-metal) avec Veeam Agent.
- Une machine virtuelle [Hosted Private Cloud (PCC)](/links/hosted-private-cloud/hosted-private-cloud) sous Windows ou Linux.
- Une machine physique ou virtuelle sur site, sous Windows ou Linux.

> [!warning]
>
> Ce guide est basé sur le Veeam Agent pour Windows. Si vous utilisez le Veeam Agent pour Linux, la procédure est similaire, bien que l’interface soit en mode texte.

## Prérequis

Avant de commencer, assurez-vous de disposer des éléments suivants :

- Une solution [Veeam Enterprise](/links/hosted-private-cloud/veeam-enterprise) configurée avec OVHcloud.
- Un tenant provisionné avec l’Alpha Backup Agent.
- Une machine sur laquelle le Veeam Backup Agent est installé et a déjà envoyé au moins une sauvegarde vers le dépôt Veeam Cloud Connect.
- Un système d’exploitation pris en charge :
    - Windows Server 2012 ou version ultérieure.
    - Une distribution Linux compatible avec le Veeam Agent pour Linux.
- Un accès administrateur à la machine.
- Un moyen de démarrer à partir de l’ISO de récupération :
    - Utilisez une clé USB ou un disque externe si vous restaurez une machine physique.
    - Utilisez un lecteur CD/DVD virtuel si vous restaurez une machine virtuelle.

## En pratique

### Étape 1 : Créer l’ISO de récupération

Si votre ordinateur ne démarre plus, vous aurez besoin d’une image ISO de récupération pour le relancer.

Voici comment la créer :

1\. Ouvrez l’outil **Create Recovery Media**, inclus avec le Veeam Backup Agent, sur votre machine.

![Lancer l'outil Create Recovery Media](images/bare_metal_recovery_01.png){.thumbnail}

2\. Veeam vous demandera si vous souhaitez inclure des pilotes supplémentaires.

> [!primary]
>
> Si vous utilisez du matériel spécifique (comme un contrôleur RAID ou une clé Wi-Fi), sélectionnez les pilotes nécessaires. Sinon, les options par défaut conviennent généralement.

![Sélectionner les pilotes pour l'image de démarrage](images/bare_metal_recovery_02.png){.thumbnail}

3\. Choisissez l’emplacement d’enregistrement de l’ISO et donnez-lui un nom.

![Définir l'emplacement et le nom de l'ISO](images/bare_metal_recovery_03.png){.thumbnail}

4\. Patientez jusqu'à la fin de l'opération, le fichier ISO sera généré.

![ISO de récupération créé](images/bare_metal_recovery_04.png){.thumbnail}

![ISO de récupération](images/bare_metal_recovery_05.png){.thumbnail}

Vous pouvez maintenant utiliser cet ISO pour créer une clé USB bootable à l’aide d’un outil comme Rufus.  
Dans le cas où vous restaurez une VM, montez l’ISO directement depuis la console de gestion de la machine virtuelle.

### Étape 2 : Démarrer la machine à partir de l’ISO de récupération

Si votre système ne démarre plus et que vous devez le restaurer :

1\. Branchez la clé USB ou montez l’ISO dans la console de votre VM, puis démarrez la machine à partir de celui-ci.

> [!primary]
>
> **Vous ne savez pas comment démarrer depuis une clé USB ?**  
> Redémarrez votre machine physique et appuyez sur la touche indiquée (généralement F2, F12, ESC ou DEL) pour accéder au menu de démarrage.  
> **Pour les machines virtuelles** :  
> Utilisez l’interface de votre hyperviseur (par exemple OpenStack, vSphere, Proxmox) pour monter l’ISO et démarrer dessus.

2\. Une fois le système lancé, l’assistant de restauration Veeam s’ouvrira. Cliquez sur `Bare Metal Recovery`{.action}.

![Lancer Bare Metal Recovery](images/step2_01.png){.thumbnail}

3\. Sélectionnez `Network Storage`{.action} pour accéder à vos sauvegardes en ligne.

> [!warning]
>
> Si le réseau n’est pas détecté, vous devrez peut-être le configurer manuellement. Cliquez sur `Configure network settings`{.action} et chargez les pilotes manquants.

![Sélectionner Network Storage](images/step2_02.png){.thumbnail}

4\. Sélectionnez `Veeam Cloud Connect repository`{.action}.

![Choisir le dépôt Veeam Cloud Connect](images/step2_03.png){.thumbnail}

5\. Saisissez l’adresse suivante lorsqu’il vous est demandé de renseigner le fournisseur de service :

```bash
backup.private.ovhcloud.dev
```

![Renseigner les DNS](images/step2_04.png){.thumbnail}

6\. Saisissez votre nom d’utilisateur et votre mot de passe pour vous connecter.

![Renseigner les informations d'identification](images/step2_05.png){.thumbnail}

7\. Sélectionnez le `serveur`{.action} que vous souhaitez restaurer.

![Sélectionner le serveur](images/step2_06.png){.thumbnail}

8\. Choisissez le `point de restauration (date/heure)`{.action} auquel vous souhaitez revenir.

Nous vous recommandons d’utiliser la dernière sauvegarde réussie, sauf si vous avez une raison particulière de revenir à une version antérieure.

![Choisir un point de restauration](images/step2_07.png){.thumbnail}

9\. Choisissez le `mode de restauration`{.action} adapté à votre situation (choisissez **Entire computer** pour une restauration complète).

![Mode de restauration](images/step2_08.png){.thumbnail}

10\. Vérifiez le résumé, puis lancez la `restauration`{.action}.

![Lancer la restauration - confirmation](images/step2_09.png){.thumbnail}

![Lancer la restauration - progression](images/step2_10.png){.thumbnail}

> [!warning]
>
> La durée du processus de restauration dépend de la taille de votre sauvegarde et de la vitesse de votre connexion Internet. Une fois terminé, votre système redémarrera avec l’état correspondant au point de restauration sélectionné.

## Aller plus loin

Si vous avez besoin de formation ou d’une assistance technique pour mettre en œuvre nos solutions, contactez votre Technical Account Manager ou cliquez sur [ce lien](/links/professional-services) pour demander un devis auprès de notre équipe Professional Services.

Posez vos questions, donnez votre avis et échangez directement avec l’équipe en charge du Hosted Private Cloud sur notre salon [Discord dédié](https://discord.gg/ovhcloud).

Échangez avec notre [communauté d’utilisateurs](/links/community).
