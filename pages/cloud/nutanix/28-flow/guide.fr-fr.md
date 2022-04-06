---
title: Nutanix Flow
slug: flow
excerpt: "Sécurisation du réseau à l'intérieur d'un CLUSTER au travers de FLOW"
section: Réseau et sécurité
order: 09
---

**Dernière mise à jour le 05/04/2022**

## Objectif

Connaitre et utiliser Nutanix Flow pour la sécurisation du réseau au sein d'un cluster Nutanix.

> [!warning]
> OVHcloud vous met à disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous appartient donc de ce fait d’en assurer le bon fonctionnement.
>
> Ce guide a pour but de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un prestataire spécialisé si vous éprouvez des difficultés ou des doutes concernant l’administration, l’utilisation ou la mise en place d’un service sur un serveur.
>

## Présentation de de **Nutanix Flow**

Cette option est disponible dans toutes les offres **Hosted Private Cloud Powered by Nutanix**. Elle permet de protéger le réseau sein d'un ou plusieurs clusters Nutanix gérés par **Prism Central**.

Il est possible :

* de mettre en quarantaine des machines virtuelles de manière stricte sans laisser la possibilité d'avoir accès au réseau ou d'une manière moins stricte en permettant l'accès à des outils de diagnostics disponibles sur d'autres machines virtuelles.
* D'isoler des machines virtuelles entre elles.
* D'autoriser l'accès partiel à certaines machines virtuelles au travers de règles d'applications.
* De bloquer l'accès à certaines machines virtuels pour du **VDI** avec des comptes ou des groupes d'un annuaire **Active directory**. 

## En pratique

Connectez-vous à **Prism Central**.

Pour plus d'informations sur la connexion au cluster reportez-vous à la section « [Aller plus loin](#gofurther) » de ce guide. 

### Activation de **Nutanix Flow**

Cliquez sur l'icône `engrenage`{.action} en haut à droite pour modifier les paramètres.

![Activate Flow 01](images/activatemicrosegmentation01.png){.thumbnail}

Faites défiler la `barre de défilement`{.action} à gauche et cliquez sur `Microsegmentation`{.action}.

![Activate Flow 02](images/activatemicrosegmentation02.png){.thumbnail}

Cliquez sur la `case à cocher`{.action} à gauche de **Enable Microsegmentation** et cliquez sur `Save`{.action}.

![Activate Flow 03](images/activatemicrosegmentation03.png){.thumbnail}

La micro-segmentation est activée. Il est possible de la désactiver.

![Activate Flow 04](images/activatemicrosegmentation04.png){.thumbnail}

### Configuration des catégories

Une catégorie est un objet qui peut contenir une ou plusieurs valeurs, certaines catégories sont présentes lors de l'installation de **Prism Central** et il est possible de créer des nouvelles catégories.

Les catégories permettent de faciliter la gestion d'un cluster Nutanix, il est possible de les affecter à des entités comme des machines virtuelles, des sous réseaux ou des images pour ensuite les utiliser dans des outils comme **Flow** par exemple.

### Création d'une catégorie

Nous allons créer une Catégories **Special Computers** avec une valeur nommée **Antivirus**.

Au travers du menu principal cliquez sur `Categories`{.action} dans le sous menu `Administration`.

![Create Category 01](images/configurecategories01.png){.thumbnail}

Cliquez sur `New Category`{.action}.

![Create Category 02](images/configurecategories02.png){.thumbnail}

Saisissez le nom de la catégorie dans `Name`{.action} ensuite cliquez sur `New value`{.action}.

![Create Category 03](images/configurecategories03.png){.thumbnail}

Saisissez un nom dans `Value`{.action} et cliquez sur le `bouton bleu`{.action} à droite. 

![Create Category 04](images/configurecategories04.png){.thumbnail}

Cliquez sur `Save`{.action} 

![Create Category 05](images/configurecategories05.png){.thumbnail}

La nouvelle catégorie apparait dans la liste des catégories

![Create Category 06](images/configurecategories06.png){.thumbnail}

#### Affectation d'une catégorie à une machine virtuelle

Allez dans le `Menu Principal`{.action} et cliquez sur `VMs`{.action} sous `Compute & Storage.`

![Add VM to Category 01](images/addvmtocategory01.png){.thumbnail}

`Sélectionnez`{.action} la machine virtuelle à gauche ensuite cliquez sur `Actions`{.action} et choisissez `Manage Categories`{.action}. dans le menu

![Add VM to Category 02](images/addvmtocategory02.png){.thumbnail}

Saisissez `le nom de la catégorie et de sa valeur` ensuite cliquez sur le bouton `+`{.action}

![Add VM to Category 03](images/addvmtocategory03.png){.thumbnail}

Cliquez sur `Save`{.action} pour enregistrer la machine virtuelle dans une catégorie.

![Add VM to Category 04](images/addvmtocategory04.png){.thumbnail} pour que la machine virtuelle soit membre de cette catégorie.

### Gestion de la quarantaine réseau.

#### Mise en quarantaine d'une VM

La quarantaine est utilisable avec les options par défaut si la micro-segmentation est active. Elle peut s'appliquer à une ou plusieurs machines virtuelles.

Allez dans le `Menu Principal`{.action} et cliquez sur `VMs`{.action} sous `Compute & Storage.`

![Add VM to Quarantine 01](images/addvmtoquarantine01.png){.thumbnail}

`Sélectionnez`{.action} la machine virtuelle à gauche ensuite cliquez sur `Actions`{.action} et choisissez `Quarantine VMs`{.action} dans le menu.

![Add VM to Quarantine 02](images/addvmtoquarantine02.png){.thumbnail}

Choisissez `Forensic`{.action} dans `quarantine Method` et cliquez sur `Quarantine`{.action}.

![Add VM to Quarantine 03](images/addvmtoquarantine03.png){.thumbnail}

La machine virtuelle est en quarantaine.

#### Personnalisation de la quarantaine réseau.

Pour l'instant la machine virtuelle mise en quarantaine n'est pas bloquée, suivez ces instructions pour configurer la quarantaine.

A partir du menu principal cliquez sur `Security Policies`{.action} dans le sous menu `Network & Security`.

![Configure Quarantine 01](images/configurequarantinerule01.png){.thumbnail}


Cliquez sur le `numéro`{.action} à coté de `Quarantined` pour voir les machines virtuelles en quarantaine.

![Configure Quarantine 02](images/configurequarantinerule02.png){.thumbnail}

La liste des machines virtuelles en quarantaine apparait dans `Name` cliquez sur `Close`{.action} pour revenir au menu précèdent.

![Configure Quarantine 03](images/configurequarantinerule03.png){.thumbnail}

Cliquez sur `Quarantine`{.action} en dessous de Name à gauche pour modifier la règle.

![Configure Quarantine 04](images/configurequarantinerule04.png){.thumbnail}

Le statut de la règle est en mode `Monitoring ` comme indiqué en haut à gauche. 

Le trafic n'est pas bloqué mais surveillé. Les connexions entre les machines virtuelles mises en quarantaines et le reste du réseau sont représentées par des traits de couleurs orange reliés à des rectangles représentant l'adresse IP de source ou de destination.

Cliquez sur `Enforce`{.action} en haut à droite pour passer du mode **Monitoring** au mode **Enforcing** avec blocage du trafic.

![Configure Quarantine 05](images/configurequarantinerule05.png){.thumbnail}

Saisissez `ENFORCE`{.action} et cliquez sur `Confirm`{.action}.

![Configure Quarantine 06](images/configurequarantinerule06.png){.thumbnail}

Le statut de la règle est maintenant sur `Enforced` 

Le trafic est bloqué et il est possible de voir les tentatives d'accès aux machines virtuelles en quarantaines avec des fenêtres et des liens de couleur rouge.

Il est possible de modifier la règle de quarantaine pour autoriser certains flux.

Cliquez sur Cliquez sur `Update`{.action} en haut à droite pour modifier la règle.

![Configure Quarantine 07](images/configurequarantinerule07.png){.thumbnail}

Cliquez sur `Next`{.action}

![Configure Quarantine 08](images/configurequarantinerule08.png){.thumbnail}

Positionnez la souris sur une règle de blocage entrante et cliquez sur `Allow Traffic`{.action}

![Configure Quarantine 09](images/configurequarantinerule09.png){.thumbnail}

Cliquez sur la `case à cocher`{.action} à gauche de la règle pour Sélectionner le trafic découvert entrant. Ensuite cliquez sur `Allow 1 Discovered Traffic`{.action}.
Cette action n'autorise que le trafic spécifique découvert dans cet exemple c'est le protocole ICMP sur le ping, le reste du trafic venant de cette machine virtuelle sera bloqué.

![Configure Quarantine 10](images/configurequarantinerule10.png){.thumbnail}

Positionez la souris sur une règle de blocage sortante et cliquez sur `Allow Traffic`{.action}

![Configure Quarantine 11](images/configurequarantinerule11.png){.thumbnail}

Cliquez sur la `case à cocher`{.action} à gauche de la règle pour Sélectionner le trafic découvert sortant. Ensuite cliquez sur `Allow 1 Discovered Traffic`{.action}.
Cette action n'autorise que le trafic spécifique découvert dans cet exemple c'est le protocole ICMP sur le ping, le reste du trafic sortant vers cette machine virtuelle sera bloqué.


![Configure Quarantine 12](images/configurequarantinerule12.png){.thumbnail}

Le trafic autorisé est maintenant visible avec des traits de couleurs grises alors que le trafic bloqué est en rouge.

Ces autorisations sont fastidieuses à gérer car il faut attendre la découverte du trafic réseau et ensuite l'autoriser, il est possible de rajouter une règle manuellement sans passer par cette découverte.

Cliquez à gauche sur `Add Source`{.action} à gauche pour autoriser une règle entrante vers la quarantaine

![Configure Quarantine 13](images/configurequarantinerule13.png){.thumbnail}

Saisissez le nom de la catégorie ainsi que sa valeur dans `Add source by: category` pour faire une règle avec les machines virtuelles membres  de la catégorie choisie, ensuite cliquez sur `Add`{.action}.

![Configure Quarantine 14](images/configurequarantinerule14.png){.thumbnail}

La source apparait dans `Configured`

Cliquez sur le signe `+`{.action} à coté de **Quarantine: Forensics**

![Configure Quarantine 15](images/configurequarantinerule15.png){.thumbnail}

Cliquez sur `Save`{.action}

![Configure Quarantine 16](images/configurequarantinerule16.png){.thumbnail}

Cliquez à gauche sur `Add Destination`{.action} à droite pour autoriser une règle sortante depuis la quarantaine

![Configure Quarantine 17](images/configurequarantinerule17.png){.thumbnail}

Saisissez le nom de la catégorie ainsi que sa valeur dans `Add source by: category` pour faire une règle avec les machines virtuelles membres de la catégorie choisie, ensuite cliquez sur `Add`{.action}.

![Configure Quarantine 18](images/configurequarantinerule18.png){.thumbnail}

Cliquez sur `Next`{.action}

![Configure Quarantine 19](images/configurequarantinerule19.png){.thumbnail}

Cliquez sur `Save and Enforce`{.action} pour appliquez les changements sur la règle de quarantaine.

![Configure Quarantine 20](images/configurequarantinerule20.png){.thumbnail}

Cliquez sur `Quarantine`{.action} pour voir le détail de de la règle de quarantaine.

![Configure Quarantine 21](images/configurequarantinerule21.png){.thumbnail}

Le statut de de la règle est  sur `Enforced` , le mode **forensic** a été personnalisé.

Si l'on met une machine virtuelle en quarantaine **strict** rien ne sera autorisée, par contre en mode **forensics** les règles ajoutés s'appliquerons.

![Configure Quarantine 22](images/configurequarantinerule22.png){.thumbnail}

### Création d'une règle d'isolation du réseau.

Nous allons créez une règle d'isolation du réseau entre des machines virtuelles membres de catégories différentes pour quelles ne puissent pas communiquer entres elles.

#### Ajouter des valeurs dans une catégorie

Cliquez dans le menu principal sur `Catégories`{.action} dans le sous menu `Administration`.

![Create Isolation Rule 01](images/createisolationrule01.png){.thumbnail}

Sélectionnez la catégorie `Special-Computers`{.action}

![Create Isolation Rule 02](images/createisolationrule02.png){.thumbnail}

Cliquez sur `Update`{.action} dans le menu `Actions`{.action}

![Create Isolation Rule 03](images/createisolationrule03.png){.thumbnail}

Cliquez sur `New value`{.action}

![Create Isolation Rule 04](images/createisolationrule03.png){.thumbnail}

saisissez une valeur dans la `colonne Values`{.action} ensuite cliquez sur l'icône de validation.

![Create Isolation Rule 05](images/createisolationrule05.png){.thumbnail}

Cliquez sur `New value`{.action}

![Create Isolation Rule 06](images/createisolationrule06.png){.thumbnail}

saisissez une autre valeur dans la `colonne Values`{.action} ensuite cliquez sur l'icône de validation.

![Create Isolation Rule 07](images/createisolationrule07.png){.thumbnail}

Cliquez sur `Save`{.action} pour valider la modification de la valeur.

![Create Isolation Rule 08](images/createisolationrule08.png){.thumbnail}

La catégorie est visible dans le tableau de bord des catégories avec ces deux nouvelles veleurs.

![Create Isolation Rule 09](images/createisolationrule09.png){.thumbnail}

#### Affecter des valeurs à des machines virtuelles

Cliquez sur `Vms`{.action} se trouvant dans la catégorie `Compute & Storage` du menu principal.

![Create Isolation Rule 10](images/createisolationrule10.png){.thumbnail}

Sélectionnez la machine virtuelle en utilisant la `case à cocher à sa gauche`{.action}.

![Create Isolation Rule 11](images/createisolationrule11.png){.thumbnail}

Cliquez sur le menu `Actions`{.action} et sélectionnez `Manage Categories`{.action}.

![Create Isolation Rule 12](images/createisolationrule12.png){.thumbnail}

Saisissez le nom de votre valeur dans la `zone de saisie`{.action} et cliquez sur le bouton `+`{.action}.

![Create Isolation Rule 13](images/createisolationrule13.png){.thumbnail}

Cliquez sur `Save`{.action}

![Create Isolation Rule 14](images/createisolationrule14.png){.thumbnail}

Sélectionnez trois machines virtuelles en utilisant les `cases à cocher à leurs gauches`{.action}.

![Create Isolation Rule 15](images/createisolationrule15.png){.thumbnail}

Cliquez sur le menu `Actions`{.action} et selectionnez `Manage Categories`{.action}.

![Create Isolation Rule 16](images/createisolationrule16.png){.thumbnail}

Saisissez le nom de votre valeur dans la `zone de saisie`{.action} et cliquez sur le bouton `+`{.action}.

![Create Isolation Rule 17](images/createisolationrule17.png){.thumbnail}

Cliquez sur `Save`{.action}

![Create Isolation Rule 18](images/createisolationrule18.png){.thumbnail}

#### Créer la règle d'isolation entre deux catégories

maitenant que les machines virtuelles à isoler sont membre catégorie. Nous allons créer une règle d'isolation entre ces deux catégories.

Cliquez sur `Securities Policies`{.action} se trouvant dans la catégorie `Network & Security` du menu principal.

![Create Isolation Rule 19](images/createisolationrule19.png){.thumbnail}

Cliquez sur `Create Security Policy`{.action}.

![Create Isolation Rule 20](images/createisolationrule20.png){.thumbnail}

Sélectionnez `Isolate Environments (Isolation Policy)`{.action} ensuite cliquez sur `Create`{.action}.

![Create Isolation Rule 21](images/createisolationrule21.png){.thumbnail}

Saisissez le nom de la règle dans `Name`{.action} ensuite mettez un commentaire dans `Purpose`{.action}, Choisissez une catégorie dans `Isolate this category`{.action} suivi d'une autre catégorie dans `From this category`{.action}.

Sélectionnez Enforce dans `Select a Policy mode`{.action} et cliquez sur `Save and Enforce`{.action}. 

![Create Isolation Rule 22](images/createisolationrule22.png){.thumbnail}

La règle est active dans la liste des règles de sécurité.

Cliquez sur `Le nom de la règle`{.action} en dessous de `Name` pour voir le détail.

![Create Isolation Rule 23](images/createisolationrule23.png){.thumbnail}

Le statut de la règle est `Enforced` et l'on peut voir qu'aucune tentative de connexion entre les deux zones est détéctée car c'est marquée comme **No Traffic between them has been discovered**

![Create Isolation Rule 24](images/createisolationrule24.png){.thumbnail}

Si une connexion tentative de connexion réseau est detectée entre ces deux zones le message a changé en **Traffic between them has been discovered**

### Mise en place d'une règle d'application.


## Aller plus loin

[Hyper-convergence Nutanix](https://docs.ovh.com/fr/nutanix/nutanix-hci/)

[Présentation de Nutanix FLOW](https://portal.nutanix.com/page/documents/solutions/details?targetId=TN-2094-Flow:TN-2094-Flow)

[Régles de sécurité de Nutanix FLOW](https://portal.nutanix.com/page/documents/details?)

[Catégories dans Nutanix](https://portal.nutanix.com/page/documents/details?targetId=Prism-Central-Guide-Prism-vpc_2022_1:ssp-ssp-categories-manage-pc-c.html)


Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.
