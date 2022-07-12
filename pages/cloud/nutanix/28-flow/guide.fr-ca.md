---
title: Configurer Nutanix Flow
slug: nutanix-flow
excerpt: "Découvrez comment configurer et utiliser Nutanix Flow"
section: Réseau et sécurité
order: 09
kb: Hosted Private Cloud
category_l1: Hosted Private Cloud powered by Nutanix
category_l2: Networking and security
---

**Dernière mise à jour le 08/04/2022**

## Objectif

Nutanix Flow est disponible sur toutes les offres **Hosted Private Cloud Powered by Nutanix**. Cette option permet de sécuriser le réseau dans un ou plusieurs clusters gérés par **Prism Central**

**Apprenez à utiliser Nutanix Flow pour la sécurisation du réseau au sein d'un cluster Nutanix.**

> [!warning]
> OVHcloud vous met à disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous appartient donc de ce fait d’en assurer le bon fonctionnement.
>
> Ce guide a pour but de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un [prestataire spécialisé](https://partner.ovhcloud.com/fr-ca/) si vous éprouvez des difficultés ou des doutes concernant l’administration, l’utilisation ou la mise en place d’un service sur un serveur.
>

## En pratique

Connectez-vous à **Prism Central**.

Pour vous connecter à un cluster Nutanix, au besoin, reportez-vous à la section « [Aller plus loin](#gofurther) » de ce guide. 

### Activation de **Nutanix Flow**

Cliquez sur l'engrenage en haut à droite pour modifier les paramètres.

![Activate Flow 01](images/activatemicrosegmentation01.png){.thumbnail}

Cliquez sur `Microsegmentation`{.action} depuis la barre de défilement à gauche.

![Activate Flow 02](images/activatemicrosegmentation02.png){.thumbnail}

Cochez la case **Enable Microsegmentation** et cliquez sur `Save`{.action}.

![Activate Flow 03](images/activatemicrosegmentation03.png){.thumbnail}

La microsegmentation est activée. Il sera toujours possible de la désactiver.

![Activate Flow 04](images/activatemicrosegmentation04.png){.thumbnail}

### Configuration des catégories <a name="gocategoriesemanage"></a>

Une catégorie est un objet qui peut contenir une ou plusieurs valeurs

Lors de l'installation d'un cluster, certaines catégories existent déjà et elles sont modifiables, d'autres catégories peuvent être ajoutées.

Les entités comme les machines virtuelles, les sous-réseaux ou les images, peuvent faire partie des catégories utilisées pour un outil comme **Flow** par exemple.

#### Création d'une catégorie

Depuis le menu principal, cliquez sur `Categories`{.action} dans le sous-menu `Administration`.

![Create Category 01](images/configurecategories01.png){.thumbnail}

Cliquez sur `New Category`{.action}.

![Create Category 02](images/configurecategories02.png){.thumbnail}

Saisissez le nom de la catégorie dans **Name** puis cliquez sur `New value`{.action}.

![Create Category 03](images/configurecategories03.png){.thumbnail}

Saisissez un nom dans **Value** et cliquez sur le bouton de validation bleu à droite. 

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

Saisissez une valeur dans la colonne **Value** puis cliquez sur l'icône de validation.

![Create Isolation Rule 05](images/modifycategory05.png){.thumbnail}

Cliquez sur `New value`{.action}.

![Create Isolation Rule 06](images/modifycategory06.png){.thumbnail}

Saisissez une autre valeur dans la colonne **Value** puis cliquez sur l'icône de validation.

![Create Isolation Rule 07](images/modifycategory07.png){.thumbnail}

Cliquez sur `Save`{.action} pour valider la modification de la catégorie.

![Create Isolation Rule 08](images/modifycategory08.png){.thumbnail}

La catégorie est visible dans le tableau de bord des catégories avec ces deux nouvelles valeurs.

![Create Isolation Rule 09](images/modifycategory09.png){.thumbnail}

#### Affectation d'une catégorie à une machine virtuelle

Depuis le menu principal, cliquez sur `VMs`{.action} sous `Compute & Storage.`

![Add VM to Category 01](images/addvmtocategory01.png){.thumbnail}

Sélectionnez la machine virtuelle en cochant à gauche de celle-ci.

![Add VM to Category 02](images/addvmtocategory02.png){.thumbnail}

Cliquez sur `Actions`{.action} puis sur `Manage Categories`{.action}. 

![Add VM to Category 03](images/addvmtocategory03.png){.thumbnail}

Saisissez `nomdelacatégorie:valeur` et cliquez sur le signe `+`{.action}.

![Add VM to Category 04](images/addvmtocategory04.png){.thumbnail}

Cliquez sur `Save`{.action} pour enregistrer la machine virtuelle dans une catégorie.

![Add VM to Category 05](images/addvmtocategory05.png){.thumbnail} 

#### Affectation d'une catégorie à plusieurs machines virtuelles

Sélectionnez trois machines virtuelles en utilisant les `cases à cocher`{.action} à leurs gauches.

![Add category to multi VMs 01](images/multivmcategorychange01.png){.thumbnail}

Cliquez sur le menu `Actions`{.action} et sélectionnez `Manage Categories`{.action}.

![Add category to multi VMs 02](images/multivmcategorychange02.png){.thumbnail}

Saisissez `nomdelacatégorie:valeur` et cliquez sur `+`{.action}.

![Add category to multi VMs 03](images/multivmcategorychange03.png){.thumbnail}

Cliquez sur `Save`{.action}.

![Add category to multi VMs 04](images/multivmcategorychange04.png){.thumbnail}

#### Affectation d'une catégorie à des sous-réseaux

Depuis le menu principal, cliquez sur `Subnets`{.action} sous `Network & Security`.

![Add Category to subnet 01](images/addcategorytosubnet01.png){.thumbnail}

Sélectionnez les sous-réseaux en cochant à leur gauche. 

![Add Category to subnet 02](images/addcategorytosubnet02.png){.thumbnail}

Cliquez sur le menu `Actions`{.action} et sélectionnez `Manage Categories`{.action}.

![Add Category to subnet 03](images/addcategorytosubnet03.png){.thumbnail}

Saisissez `nomdelacatégorie:valeur` et cliquez sur `+`{.action}.

![Add Category to subnet 04](images/addcategorytosubnet04.png){.thumbnail}

Cliquez sur `Save`{.action}.

![Add Category to subnet 05](images/addcategorytosubnet05.png){.thumbnail}

### Gestion de la quarantaine réseau.

La quarantaine réseau permet d'isoler une machine virtuelle de l'ensemble du réseau ou de lui permettre un accès restreint à certains outils de réparations se trouvant sur le réseau.

#### Mise en quarantaine d'une VM

Depuis le menu principal et cliquez sur `VMs`{.action} sous `Compute & Storage.`

![Add VM to Quarantine 01](images/addvmtoquarantine01.png){.thumbnail}

Sélectionnez la machine virtuelle en cochant à gauche de celle-ci. 

![Add VM to Quarantine 02](images/addvmtoquarantine02.png){.thumbnail}

Cliquez sur `Actions`{.action} et choisissez `Quarantine VMs`{.action} dans le menu.

![Add VM to Quarantine 03](images/addvmtoquarantine03.png){.thumbnail}

Sélectionnez `Forensic`{.action} dans `quarantine Method` puis cliquez sur `Quarantine`{.action}.

![Add VM to Quarantine 04](images/addvmtoquarantine04.png){.thumbnail}

La machine virtuelle est à présent en quarantaine.

#### Personnalisation de la quarantaine réseau.

Pour l'instant aucun blocage n'affecte la machine virtuelle en quarantaine. Suivez ces instructions pour configurer la quarantaine.

Depuis le menu principal, cliquez sur `Security Policies`{.action} dans le sous-menu `Network & Security`.

![Configure Quarantine 01](images/configurequarantinerule01.png){.thumbnail}

Cliquez sur le numéro à coté de `Quarantined` pour afficher les machines virtuelles en quarantaine.

![Configure Quarantine 02](images/configurequarantinerule02.png){.thumbnail}

La liste des machines virtuelles en quarantaine apparait dans la colonne **Name**. Cliquez sur `Close`{.action} pour revenir au menu précédent.

![Configure Quarantine 03](images/configurequarantinerule03.png){.thumbnail}

Cliquez sur `Quarantine`{.action} en dessous de la colonne **Name** pour modifier la règle.

![Configure Quarantine 04](images/configurequarantinerule04.png){.thumbnail}

Le statut de la règle est en mode `Monitoring` comme indiqué en haut à gauche. 

Le trafic n'est pas bloqué mais surveillé. Les connexions entre les machines virtuelles mises en quarantaine et le reste du réseau sont représentés par des traits de couleurs orange reliés à des rectangles représentant l'adresse IP de la source ou de la destination.

Cliquez sur `Enforce`{.action} en haut à droite pour passer du mode **Monitoring** au mode **Enforcing** avec blocage du trafic.

![Configure Quarantine 05](images/configurequarantinerule05.png){.thumbnail}

Saisissez `ENFORCE`{.action} et cliquez sur `Confirm`{.action}.

![Configure Quarantine 06](images/configurequarantinerule06.png){.thumbnail}

Le statut de la règle est maintenant sur `Enforced`.

Le trafic est bloqué. Nous voyons les tentatives d'accès aux machines virtuelles en quarantaines via des lignes en pointillés rouges vers les blocs contenant l'adresse IP de la machine virtuelle.

Cliquez sur `Update`{.action} en haut à droite pour modifier la règle, afin d'autoriser certains flux réseaux.

![Configure Quarantine 07](images/configurequarantinerule07.png){.thumbnail}

Cliquez sur `Next`{.action}.

![Configure Quarantine 08](images/configurequarantinerule08.png){.thumbnail}

Positionnez la souris sur une tentative de connexion entrante et cliquez sur `Allow Traffic`{.action}

![Configure Quarantine 09](images/configurequarantinerule09.png){.thumbnail}

Cochez la case à gauche de la **Source** pour sélectionner le trafic découvert entrant, puis cliquez sur `Allow 1 Discovered Traffic`{.action} pour n'autoriser que le trafic découvert comme par exemple ci-dessous le protocole ICMP.

![Configure Quarantine 10](images/configurequarantinerule10.png){.thumbnail}

Positionez la souris sur une tentative de connexion sortante et cliquez sur `Allow Traffic`{.action}.

![Configure Quarantine 11](images/configurequarantinerule11.png){.thumbnail}

Cochez la case à gauche de la **Source** pour sélectionner le trafic découvert sortant puis cliquez sur `Allow 1 Discovered Traffic`{.action} pour n'autoriser que le trafic découvert.

![Configure Quarantine 12](images/configurequarantinerule12.png){.thumbnail}

Le trafic autorisé est maintenant visible par des lignes grises alors que le trafic bloqué est en rouge.

Pour créer une règle manuellement sans passer par la découverte du réseau, cliquez à gauche sur `Add Source`{.action} pour autoriser une connexion entrante vers la quarantaine.

![Configure Quarantine 13](images/configurequarantinerule13.png){.thumbnail}

Saisissez le nom de la catégorie ainsi que sa valeur dans `Add source by: Category` puis cliquez sur `Add`{.action}.

![Configure Quarantine 14](images/configurequarantinerule14.png){.thumbnail}

La source apparait dans `Configured`.

Cliquez sur `+`{.action} à gauche de **Quarantine: Forensics**.

![Configure Quarantine 15](images/configurequarantinerule15.png){.thumbnail}

Autorisez tous le trafic et cliquez sur `Save`{.action}.

![Configure Quarantine 16](images/configurequarantinerule16.png){.thumbnail}

Cliquez à droite sur `Add Destination`{.action} pour autoriser une règle sortante depuis la quarantaine.

![Configure Quarantine 17](images/configurequarantinerule17.png){.thumbnail}

Saisissez le nom de la catégorie ainsi que sa valeur dans `Add source by: Category`, puis cliquez sur `Add`{.action}.

![Configure Quarantine 18](images/configurequarantinerule18.png){.thumbnail}

Cliquez sur `+`{.action} à droite de **Quarantine: Forensics**.

![Configure Quarantine 19](images/configurequarantinerule19.png){.thumbnail}

Autorisez tout le trafic et cliquez sur `Save`{.action}.

![Configure Quarantine 20](images/configurequarantinerule20.png){.thumbnail}

Cliquez sur `Next`{.action}.

![Configure Quarantine 21](images/configurequarantinerule21.png){.thumbnail}

Cliquez sur `Save and Enforce`{.action} pour appliquer les changements sur la règle de quarantaine.

![Configure Quarantine 22](images/configurequarantinerule22.png){.thumbnail}

Cliquez sur `Quarantine`{.action} pour voir le détail de la règle de quarantaine.

![Configure Quarantine 23](images/configurequarantinerule23.png){.thumbnail}

Le statut de la règle est sur `Enforced`, le mode **Forensic** a été personnalisé.

Une machine virtuelle placée en mode **Strict** sera totalement isolée du réseau alors qu'en mode **Forensic** elle aura accès aux zones définies dans la règle de quarantaine.

![Configure Quarantine 24](images/configurequarantinerule24.png){.thumbnail}

### Création d'une règle d'isolation

Une règle d'isolation permet le blocage des communications réseaux entre deux types de catégories (machines virtuelles ou sous-réseaux).

Pour plus d'informations sur la gestion des catégories, reportez-vous à la section « [Configuration des catégories](#gocategoriesemanage) » de ce guide. 

Depuis le menu principal, cliquez sur `Securities Policies`{.action} dans le sous-menu `Network & Security`.

![Create Isolation Rule 03](images/createisolationrule03.png){.thumbnail}

Cliquez sur `Create Security Policy`{.action}.

![Create Isolation Rule 04](images/createisolationrule04.png){.thumbnail}

Sélectionnez `Isolate Environments (Isolation Policy)`{.action} puis cliquez sur `Create`{.action}.

![Create Isolation Rule 05](images/createisolationrule05.png){.thumbnail}

Saisissez le nom de la règle dans `Name`{.action} puis ajoutez un commentaire dans `Purpose`{.action}, choisissez une catégorie dans `Isolate this category`{.action}, suivi d'une autre catégorie dans `From this category`{.action}.

Sélectionnez `Enforce` dans **Select a Policy mode**, puis cliquez sur `Save and Enforce`{.action}. 

![Create Isolation Rule 06](images/createisolationrule06.png){.thumbnail}

La règle est active dans la liste des règles de sécurité.

Cliquez sur `Le nom de la règle`{.action} en dessous de la colonne **Name** pour voir le détail.

![Create Isolation Rule 07](images/createisolationrule07.png){.thumbnail}

Le statut de la règle indique `Enforced` et on peut voir qu'aucune tentative de connexion entre les deux zones n'est détectée, comme le signale ce message: **No Traffic between them has been discovered**.

![Create Isolation Rule 08](images/createisolationrule08.png){.thumbnail}

Si une tentative de connexion réseau est détectée entre ces deux zones, le message change et devient **Traffic between them has been discovered**.x

![Create Isolation Rule 09](images/createisolationrule09.png){.thumbnail}

### Mise en place d'une règle d'application.

Une règle d'application limite l'accès vers certains ports, protocoles ou services des membres d'une catégorie depuis une autre catégorie.

Cette règle n'est utilisable qu'avec une catégorie nommée **Applications** que l'on peut modifier mais pas supprimer.

Pour plus d'informations sur la gestion des catégories, reportez-vous à la section « [Configuration des catégories](#gocategoriesemanage) » de ce guide.

Depuis le menu principal, cliquez sur `Security Policies`{.action} dans le sous-menu `Network & Security`.

![Create Application Rule 01](images/createapplicationrule01.png){.thumbnail}

Cliquez sur `Create Security Policy`{.action}.

![Create Application Rule 02](images/createapplicationrule02.png){.thumbnail}

Sélectionnez `Secure Application (App Policy)`{.action} et cliquez sur `Create`{.action}.

![Create Application Rule 03](images/createapplicationrule03.png){.thumbnail}

Saisissez les champs **Name** pour le nom de de la règle, **Purpose** pour un commentaire, **Secure this App** en choisissant une catégorie existante d'applications et cliquez sur `Next`{.action}.

![Create Application Rule 04](images/createapplicationrule04.png){.thumbnail}

Cliquez sur `Add Source`{.action} à gauche.

![Create Application Rule 05](images/createapplicationrule05.png){.thumbnail}

Choisissez la `catégorie` concernant le VLAN et cliquez sur `Add`{.action}.

![Create Application Rule 06](images/createapplicationrule06.png){.thumbnail}

Cliquez sur `+`{.action} pour relier l'application à la source.

![Create Application Rule 07](images/createapplicationrule07.png){.thumbnail}

Sélectionnez `Select a Service`{.action} , choisir la catégorie dans **Protocol/Service**, recherchez le nom du service dans **Port/Service Details** et cliquez sur `Save`{.action}.

![Create Application Rule 08](images/createapplicationrule08.png){.thumbnail}

Cliquez sur `Next`{.action}.

![Create Application Rule 09](images/createapplicationrule09.png){.thumbnail}

Sélectionnez `Enforce`{.action} et cliquez sur `Save and Enforce`{.action} pour activer cette règle.

![Create Application Rule 10](images/createapplicationrule10.png){.thumbnail}

La règle créée se trouve dans la liste des règles.

![Create Application Rule 11](images/createapplicationrule11.png){.thumbnail}

## Aller plus loin <a name="gofurther"></a>

[Hyper-convergence Nutanix](https://docs.ovh.com/ca/fr/nutanix/nutanix-hci/)

[Présentation de Nutanix FLOW](https://portal.nutanix.com/page/documents/solutions/details?targetId=TN-2094-Flow:TN-2094-Flow)

[Règles de sécurité de Nutanix FLOW](https://portal.nutanix.com/page/documents/details?)

[Catégories dans Nutanix](https://portal.nutanix.com/page/documents/details?targetId=Prism-Central-Guide-Prism-vpc_2022_1:ssp-ssp-categories-manage-pc-c.html)


Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.
