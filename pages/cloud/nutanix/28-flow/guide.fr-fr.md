---
title: Configurer Nutanix Flow
slug: flow
excerpt: "Découvrez comment configurer et utiliser Nutanix Flow"
section: Réseau et sécurité
order: 09
---

**Dernière mise à jour le 08/04/2022**

## Objectif

Nutanix Flow est disponible dans toutes les offres **Hosted Private Cloud Powered by Nutanix**. Cette option permet de sécuriser le réseau à l'intérieur d'un ou plusieurs clusters gérés par **Prism Central**

**Apprenez à utiliser Nutanix Flow pour la sécurisation du réseau au sein d'un cluster Nutanix.**

> [!warning]
> OVHcloud vous met à disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous appartient donc de ce fait d’en assurer le bon fonctionnement.
>
> Ce guide a pour but de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un prestataire spécialisé si vous éprouvez des difficultés ou des doutes concernant l’administration, l’utilisation ou la mise en place d’un service sur un serveur.
>

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

### Configuration des catégories <a name="gocategoriesemanage"></a>

Une catégorie est un objet qui peut contenir une ou plusieurs valeurs

Lors de l'installation d'un cluster certaines catégories existent déjà, il est possible de les modifier.

Il est possible de rajouter des catégories supplémentaires.

Il est possible de les affecter à des entités comme des machines virtuelles, des sous réseaux ou des images pour ensuite les utiliser dans des outils comme **Flow** par exemple.

#### Création d'une catégorie

Nous allons créer une Catégories **Special-Computers** avec une valeur nommée **Antivirus**.

Au travers du menu principal cliquez sur `Categories`{.action} dans le sous menu `Administration`.

![Create Category 01](images/configurecategories01.png){.thumbnail}

Cliquez sur `New Category`{.action}.

![Create Category 02](images/configurecategories02.png){.thumbnail}

Saisissez le nom de la catégorie dans `Name`{.action} ensuite cliquez sur `New value`{.action}.

![Create Category 03](images/configurecategories03.png){.thumbnail}

Saisissez un nom dans `Value`{.action} et cliquez sur le `bouton bleu`{.action} à droite. 

![Create Category 04](images/configurecategories04.png){.thumbnail}

Cliquez sur `Save`{.action}.

![Create Category 05](images/configurecategories05.png){.thumbnail}

La nouvelle catégorie apparait dans la liste des catégories.

![Create Category 06](images/configurecategories06.png){.thumbnail}

#### Modification d'une catégorie

Sélectionnez la catégorie `Special-Computers`{.action}

![Create Isolation Rule 02](images/modifycategory02.png){.thumbnail}

Cliquez sur `Update`{.action} dans le menu `Actions`{.action}

![Create Isolation Rule 03](images/modifycategory03.png){.thumbnail}

Cliquez sur `New value`{.action}

![Create Isolation Rule 04](images/modifycategory04.png){.thumbnail}

Saisissez une valeur dans la `colonne Values`{.action} ensuite cliquez sur l'icône de validation.

![Create Isolation Rule 05](images/modifycategory05.png){.thumbnail}

Cliquez sur `New value`{.action}.

![Create Isolation Rule 06](images/modifycategory06.png){.thumbnail}

Saisissez une autre valeur dans la `colonne Values`{.action} ensuite cliquez sur l'icône de validation.

![Create Isolation Rule 07](images/modifycategory07.png){.thumbnail}

Cliquez sur `Save`{.action} pour valider la modification de la catégorie.

![Create Isolation Rule 08](images/modifycategory08.png){.thumbnail}

La catégorie est visible dans le tableau de bord des catégories avec ces deux nouvelles valeurs.

![Create Isolation Rule 09](images/modifycategory09.png){.thumbnail}


#### Affectation d'une catégorie à une machine virtuelle

Allez dans le `Menu Principal`{.action} et cliquez sur `VMs`{.action} sous `Compute & Storage.`

![Add VM to Category 01](images/addvmtocategory01.png){.thumbnail}

`Sélectionnez`{.action} la machine virtuelle à gauche.

![Add VM to Category 02](images/addvmtocategory02.png){.thumbnail}

Cliquez sur `Actions`{.action} et choisissez `Manage Categories`{.action}. 

![Add VM to Category 03](images/addvmtocategory03.png){.thumbnail}

Saisissez `le nom de la catégorie et de sa valeur` ensuite cliquez sur le bouton `+`{.action}.

![Add VM to Category 04](images/addvmtocategory04.png){.thumbnail}

Cliquez sur `Save`{.action} pour enregistrer la machine virtuelle dans une catégorie.

![Add VM to Category 05](images/addvmtocategory05.png){.thumbnail} pour que la machine virtuelle soit membre de cette catégorie.

#### Affectation d'une catégorie à plusieurs machines virtuelles

Sélectionnez trois machines virtuelles en utilisant les `cases à cocher à leurs gauches`{.action}.

![Add category to multi VMs 01](images/multivmcategorychange01.png){.thumbnail}

Cliquez sur le menu `Actions`{.action} et sélectionnez `Manage Categories`{.action}.

![Add category to multi VMs 02](images/multivmcategorychange02.png){.thumbnail}

Saisissez le nom de votre valeur dans la `zone de saisie`{.action} et cliquez sur le bouton `+`{.action}.

![Add category to multi VMs 03](images/multivmcategorychange03.png){.thumbnail}

Cliquez sur `Save`{.action}

![Add category to multi VMs 04](images/multivmcategorychange04.png){.thumbnail}

#### Affectation d'une catégorie à des sous réseaux

Nous allons voir comment affecter une catégorie à un ou plusieurs sous réseaux.

Allez dans le `Menu Principal`{.action} et cliquez sur `Subnets`{.action} sous `Network & Security`.

![Add Category to subnet 01](images/addcategorytosubnet01.png){.thumbnail}

Sélectionnez les `sous réseaux`{.action} en cliquant sur les case à cocher à gauche 

![Add Category to subnet 02](images/addcategorytosubnet02.png){.thumbnail}

Cliquez sur le menu `Actions`{.action} et sélectionnez `Manage Categories`{.action}.

![Add Category to subnet 03](images/addcategorytosubnet03.png){.thumbnail}

Saisissez `NOMCATEGORIE:VALEUR`{.action} et cliquez sur le signe `+`{.action}.

![Add Category to subnet 04](images/addcategorytosubnet04.png){.thumbnail}

Cliquez sur `Save`{.action}.

![Add Category to subnet 05](images/addcategorytosubnet05.png){.thumbnail}

### Gestion de la quarantaine réseau.

La quarantaine réseau permet à partir de la gestion de VM d'isoler une machine virtuelle de l'ensemble du réseau ou de lui permettre un accès restreint à certains outils de réparations sur le réseau.

#### Mise en quarantaine d'une VM

La quarantaine est utilisable avec les options par défaut si la micro-segmentation est active. Elle peut s'appliquer à une ou plusieurs machines virtuelles.

Allez dans le `Menu Principal`{.action} et cliquez sur `VMs`{.action} sous `Compute & Storage.`

![Add VM to Quarantine 01](images/addvmtoquarantine01.png){.thumbnail}

`Sélectionnez`{.action} la machine virtuelle à gauche. 

![Add VM to Quarantine 02](images/addvmtoquarantine02.png){.thumbnail}

Cliquez sur `Actions`{.action} et choisissez `Quarantine VMs`{.action} dans le menu.

![Add VM to Quarantine 03](images/addvmtoquarantine03.png){.thumbnail}

Choisissez `Forensic`{.action} dans `quarantine Method` et cliquez sur `Quarantine`{.action}.

![Add VM to Quarantine 04](images/addvmtoquarantine04.png){.thumbnail}

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

Le trafic n'est pas bloqué mais surveillé. Les connexions entre les machines virtuelles mises en quarantaines et le reste du réseau sont représentées par des traits de couleurs orange reliés à des rectangles représentant l'adresse IP de la source ou de la destination.

Cliquez sur `Enforce`{.action} en haut à droite pour passer du mode **Monitoring** au mode **Enforcing** avec blocage du trafic.

![Configure Quarantine 05](images/configurequarantinerule05.png){.thumbnail}

Saisissez `ENFORCE`{.action} et cliquez sur `Confirm`{.action}.

![Configure Quarantine 06](images/configurequarantinerule06.png){.thumbnail}

Le statut de la règle est maintenant sur `Enforced` 

Le trafic est bloqué nous voyons les tentatives d'accès aux machines virtuelles en quarantaines via des traits de couleurs rouges vers des rectangles contenant l'adresse IP de la machine virtuelle.

Cliquez sur Cliquez sur `Update`{.action} en haut à droite pour modifier la règle afin d'autoriser certains flux réseaux.

![Configure Quarantine 07](images/configurequarantinerule07.png){.thumbnail}

Cliquez sur `Next`{.action}

![Configure Quarantine 08](images/configurequarantinerule08.png){.thumbnail}

Positionnez la souris sur une règle de blocage entrante et cliquez sur `Allow Traffic`{.action}

![Configure Quarantine 09](images/configurequarantinerule09.png){.thumbnail}

Cliquez sur la `case à cocher`{.action} à gauche de la règle pour Sélectionner le trafic découvert entrant ensuite cliquez sur `Allow 1 Discovered Traffic`{.action} pour n'autoriser que le trafic spécifique découvert comme par exemple le protocole ICMP.

![Configure Quarantine 10](images/configurequarantinerule10.png){.thumbnail}

Positionez la souris sur une règle de blocage sortante et cliquez sur `Allow Traffic`{.action}

![Configure Quarantine 11](images/configurequarantinerule11.png){.thumbnail}

Cliquez sur la `case à cocher`{.action} à gauche de la règle pour Sélectionner le trafic découvert sortant. Ensuite cliquez sur `Allow 1 Discovered Traffic`{.action} pour n'autoriser que le trafic spécifique découvert.

![Configure Quarantine 12](images/configurequarantinerule12.png){.thumbnail}

Le trafic autorisé est maintenant visible avec des traits de couleurs grises alors que le trafic bloqué est en rouge.


Pour créer une règle manuellement sans passer par la découverte du réseau, cliquez à gauche sur `Add Source`{.action} pour autoriser une règle entrante vers la quarantaine.

![Configure Quarantine 13](images/configurequarantinerule13.png){.thumbnail}

Saisissez le nom de la catégorie ainsi que sa valeur dans `Add source by: category` ensuite cliquez sur `Add`{.action}.

![Configure Quarantine 14](images/configurequarantinerule14.png){.thumbnail}

La source apparait dans `Configured`

Cliquez sur le signe `+`{.action} à coté de **Quarantine: Forensics**

![Configure Quarantine 15](images/configurequarantinerule15.png){.thumbnail}

Cliquez sur `Save`{.action}

![Configure Quarantine 16](images/configurequarantinerule16.png){.thumbnail}

Cliquez à gauche sur `Add Destination`{.action} à droite pour autoriser une règle sortante depuis la quarantaine

![Configure Quarantine 17](images/configurequarantinerule17.png){.thumbnail}

Saisissez le nom de la catégorie ainsi que sa valeur dans `Add source by: category` ensuite cliquez sur `Add`{.action}.

![Configure Quarantine 18](images/configurequarantinerule18.png){.thumbnail}

Cliquez sur `Next`{.action}.

![Configure Quarantine 19](images/configurequarantinerule19.png){.thumbnail}

Cliquez sur `Save and Enforce`{.action} pour appliquer les changements sur la règle de quarantaine.

![Configure Quarantine 20](images/configurequarantinerule20.png){.thumbnail}

Cliquez sur `Quarantine`{.action} pour voir le détail de de la règle de quarantaine.

![Configure Quarantine 21](images/configurequarantinerule21.png){.thumbnail}

Le statut de de la règle est sur `Enforced` , le mode **forensic** a été personnalisé.

Une machine virtuelle placée en mode **Strict** sera totalement isolée du réseau alors qu'en mode **Forensic** elle aura accès aux machines virtuelles définies dans la règle de quarantaine.

![Configure Quarantine 22](images/configurequarantinerule22.png){.thumbnail}

### Création d'une règle d'isolation

Un règle d'isolations permet le blocage de communication entre deux types de catégories (machines virtuelles ou sous réseaux)

Au travers du menu principal cliquez sur `Categories`{.action} dans le sous menu `Administration`.

![Create Isolation Rule 01](images/createisolationrule01.png){.thumbnail}

Assurez-vous d'avoir correctement configuré les valeurs dans la catégorie avant de continuer le paramètrage.

Pour plus d'informations sur la gestion des catégories reportez-vous à la section « [Configuration des catégories](#gocategoriesemanage) » de ce guide. 

![Create Isolation Rule 02](images/createisolationrule02.png){.thumbnail}

Cliquez sur `Securities Policies`{.action} se trouvant dans la catégorie `Network & Security` du menu principal.

![Create Isolation Rule 03](images/createisolationrule04.png){.thumbnail}

Cliquez sur `Create Security Policy`{.action}.

![Create Isolation Rule 05](images/createisolationrule05.png){.thumbnail}

Sélectionnez `Isolate Environments (Isolation Policy)`{.action} ensuite cliquez sur `Create`{.action}.

![Create Isolation Rule 06](images/createisolationrule06.png){.thumbnail}

Saisissez le nom de la règle dans `Name`{.action} ensuite mettez un commentaire dans `Purpose`{.action}, Choisissez une catégorie dans `Isolate this category`{.action} suivi d'une autre catégorie dans `From this category`{.action}.

Sélectionnez Enforce dans `Select a Policy mode`{.action} et cliquez sur `Save and Enforce`{.action}. 

![Create Isolation Rule 07](images/createisolationrule07.png){.thumbnail}

La règle est active dans la liste des règles de sécurité.

Cliquez sur `Le nom de la règle`{.action} en dessous de `Name` pour voir le détail.

![Create Isolation Rule 08](images/createisolationrule08.png){.thumbnail}

Le statut de la règle est `Enforced` et l'on peut voir qu'aucune tentative de connexion entre les deux zones est détectée comme indiquée sur ce message. **No Traffic between them has been discovered**

![Create Isolation Rule 09](images/createisolationrule09.png){.thumbnail}

Si une tentative de connexion réseau est détectée entre ces deux zones le message a changé en **Traffic between them has been discovered**

### Mise en place d'une règle d'application.

Une règle d'application permet de limiter l'accès à une catégorie d'applications à certains port protocoles ou services.

La catégorie d'applications est deja existante dans les catégories avec des valeurs prédéfinies mais il est possible d'ajouter d'autres valeurs.

Pour plus d'informations sur la gestion des catégories reportez-vous à la section « [Configuration des catégories](#gocategoriesemanage) » de ce guide.

A partir du menu principal cliquez sur `Security Policies`{.action} dans le sous menu `Network & Security`.

![Create Application Rule 01](images/createapplicationrule01.png){.thumbnail}

Cliquez sur `Create Security Policy`{.action}.

![Create Application Rule 02](images/createapplicationrule02.png){.thumbnail}

Sélectionnez `Secure Application (App Policy)`{.action} et cliquez sur `Create`{.action}.

![Create Application Rule 03](images/createapplicationrule03.png){.thumbnail}

Saisissez ces champs `Name` par un nom de règle, `Purpose` avec un commentaire , `Secure this App` en choisissant une catégorie existante d'applications et cliquez sur `Next`{.action}.

![Create Application Rule 04](images/createapplicationrule04.png){.thumbnail}

Cliquez sur `Add Source`{.action} à gauche

![Create Application Rule 05](images/createapplicationrule05.png){.thumbnail}

Choisissez la `catégorie` concernant le VLAN et cliquez sur `Add`{.action}

![Create Application Rule 06](images/createapplicationrule06.png){.thumbnail}

Cliquez sur le signe `+`{.action} pour relier à l'application à la source.

![Create Application Rule 07](images/createapplicationrule07.png){.thumbnail}

Sélectionnez `Select a Service`{.action} , choisir la catégorie dans `Protocol/Service`{.action}, recherchez le nom du service dans `Port/Service Details`{.action} et cliquez sur `Save`{.action}.

![Create Application Rule 08](images/createapplicationrule08.png){.thumbnail}

Cliquez sur `Next`{.action} pour finaliser la création de la règle.

![Create Application Rule 09](images/createapplicationrule09.png){.thumbnail}


## Aller plus loin <a name="gofurther"></a>

[Hyper-convergence Nutanix](https://docs.ovh.com/fr/nutanix/nutanix-hci/)

[Présentation de Nutanix FLOW](https://portal.nutanix.com/page/documents/solutions/details?targetId=TN-2094-Flow:TN-2094-Flow)

[Règles de sécurité de Nutanix FLOW](https://portal.nutanix.com/page/documents/details?)

[Catégories dans Nutanix](https://portal.nutanix.com/page/documents/details?targetId=Prism-Central-Guide-Prism-vpc_2022_1:ssp-ssp-categories-manage-pc-c.html)


Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.
