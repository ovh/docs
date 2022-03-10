---
title: Récupérer les informations de statut de votre installation Nutanix
slug: nutanix-cluster-information
excerpt: Découvrez comment récupérer les informations essentielles sur le statut de votre cluster Nutanix.
section: Diagnostic
order: 01
---

**Dernière mise à jour le 08/03/2022**

## Objectif

Afin d'optimiser le traitement de vos demandes d'assistance sur l'offre Nutanix, il est essentiel de transmettre aux équipes OVHcloud un ensemble d'informations sur l'état de votre installation Nutanix.

**Découvrez comment récupérer les informations essentielles sur le statut de votre cluster Nutanix.**

## Prérequis

- Disposer d'un cluster Nutanix dans votre compte OVHcloud
- Être connecté à l'interface web Prism Central

## En pratique

Nous vous recommandons de récupérer **toutes les informations** détaillées dans ce guide avant de contacter le support OVHcloud.

### Informations sur l'AOS <a name="aos"></a>

Connectez-vous à Prism Central, ouvrez le menu principal en haut à gauche et cliquez sur `Hardware`{.action} puis `Clusters`{.action}.

![AOS - Hypervisor](images/hardware-clusters.png){.thumbnail}

Cliquez sur l'onglet `List`{.action} et prenez note, pour le cluster concerné, de la **version AOS** (*AOS Version*).

![AOS - Hypervisor](images/aos.png){.thumbnail}

### Informations sur l'hyperviseur <a name="hypervisor"></a>

Ouvrez à présent de nouveau le menu principal et cliquez sur `Hardware`{.action} puis `Hosts`{.action}.<br>
Sélectionnez un hôte dans la liste de ceux appartenant à votre cluster.

![AOS - Hypervisor](images/hypervisor01.png){.thumbnail}

Prenez note du **type d'hyperviseur** (*Hypervisor*) et de la **version de l'hyperviseur** (*Hypervisor Version*).<br>
Dans l'exemple ci-dessous, le type d'hyperviseur est « AHV » et la version de l'hyperviseur est « 20201105.1161 ».

![AOS - Hypervisor](images/hypervisor02.png){.thumbnail}

### Numéro de série du Node <a name="node-sn"></a>

Depuis le même onglet de résumé de l'hôte, prenez note du numéro de série du Node (*Node Serial*).

![Node Serial Number](images/serial02.png){.thumbnail}

### Rapport de santé Nutanix Cluster Check (NCC)

Le rapport de santé Nutanix Cluster Check (NCC) est un rapport complet sur l'état actuel du cluster, incluant de nombreux points de contrôle hardware et software.

Ce rapport NCC peut aider le support OVHcloud et Nutanix à mener des investigations sur un éventuel défaut rencontré sur votre cluster.

Pour obtenir ce rapport, connectez-vous à Prism Central, ouvrez le menu en haut à gauche et cliquez sur `Hardware`{.action} puis `Clusters`{.action}.

![AOS - Hypervisor](images/hardware-clusters.png){.thumbnail}

Sélectionnez le cluster concerné pour accéder à ses détails.
<br>Depuis l'onglet `Summary`{.action}, cliquez sur `Launch Prism Element`{.action}.

![Nutanix Cluster Check](images/ncc01.png){.thumbnail}

L'interface de gestion de votre cluster, Prism Element, s'ouvre alors.

#### Générer les vérifications NCC

Depuis l'interface Prism Element, ouvrez le menu déroulant en haut à gauche puis cliquez sur `Health`{.action}.

![Nutanix Cluster Check](images/ncc02.png){.thumbnail}

A droite de la fenêtre, cliquez maintenant sur `Actions`{.action} puis `Run NCC checks`{.action}.

![Nutanix Cluster Check](images/ncc03.png){.thumbnail}

Dans la fenêtre qui apparaît, cochez les cases « All Checks » et « Send the cluster check report in the email » (uniquement si vous souhaitez [recevoir le rapport par e-mail](#email)) puis cliquez sur `Run`{.action}.

![Nutanix Cluster Check](images/ncc04.png){.thumbnail}

Vous pouvez suivre l'exécution des tâches de vérification NCC en cliquant sur `Tasks`{.action} depuis le menu déroulant de l'interface Prism Element, ou en cliquant sur l'icône bleue des tâches en cours puis sur `View all tasks`{.action}.

![Nutanix Cluster Check](images/ncc05.png){.thumbnail}

Une fois la vérification terminée, cliquez sur `Succeeded`{.action} dans la colonne « Status ». 

![Nutanix Cluster Check](images/ncc06.png){.thumbnail}

Vous pouvez alors télécharger le rapport NCC au format .txt en cliquant sur `Download output`{.action}.

![Nutanix Cluster Check](images/ncc07.png){.thumbnail}

Une fois le rapport téléchargé, vous pourrez alors le transmettre à nos équipes, ainsi que les éléments préalablement récupérés :

- [version d'AOS](#aos);
- [type et version de l'Hyperviseur](#hypervisor);
- [numéro de série du Node](#node-sn)).

> [!primary]
> Utilisez l'outil [Plik](https://plik.ovhcloud.com/#/) pour téléverser votre rapport et nous le transmettre sous la forme d'un lien de téléchargement. Retrouvez plus d'informations sur l'utilisation de l'outil Plik sur [ce guide](https://docs.ovh.com/fr/customer/plik/).
>

#### Recevoir le rapport NCC par e-mail <a name="email"></a>

Afin de recevoir le rapport NCC par e-mail, il est nécessaire d'avoir renseigné au préalable un serveur SMTP ainsi qu'au moins une adresse e-mail pour qu'elle soit notifiée des alertes et rapports d'activité.

##### **Ajouter un serveur SMTP**

Dans l'interface Prism Element, ouvrez le menu déroulant en haut à gauche et cliquez sur `Settings`{.action}.

Faites défiler le menu de gauche jusqu'au sous-menu « Alerts and Notifications » et cliquez sur `SMTP Server`{.action}.

![Nutanix Cluster Check - SMTP](images/SMTP.png){.thumbnail}

Renseignez les détails de configuration de votre serveur SMTP puis cliquez sur `Save`{.action}.

##### **Ajouter une adresse e-mail**

Dans l'interface Prism Element, ouvrez le menu déroulant en haut à gauche et cliquez sur `Settings`{.action}.

Faites défiler le menu de gauche jusqu'au sous-menu « Alerts and Notifications » et cliquez sur `Alert Email Configuration`{.action}.

![Nutanix Cluster Check - email](images/email.png){.thumbnail}

Cochez au minimum la case « Every Single Alert » afin de pouvoir recevoir le rapport NCC. Saisissez une adresse e-mail valide dans le champ prévu à cet effet puis cliquez sur `Save`{.action}.

### Collecter Les logs pour un envoi au support NUTANIX

Lors d'une ouverture d'incident au support Nutanix, Nutanix fourni un numéro d'incident et il est parfois demandé de récupérer l'ensemble des logs des nœuds et de **Prism Central**.

Un outil existe au sein de l'interface Prism Element dans le menu **HEALTH** qui fait une collecte de logs et permet de l'envoyer au support Nutanix mais Nutanix recommande de ne plus utiliser cet outil pour envoyer des logs mais plutôt une commande à partir de la console.

Cet outil est sur chaque **CVM** d'un nœud et sur **Prism Central**. 


* Générer les logs et les envoyer directement au Support Nutanix avec le numéro d'incident. 
* Générer les logs et les récupérer en SSH pour les envoyer ultérieurement à partir du portail Nutanix avec le numéro d'incident.

#### Collecter les logs concernant **Prism Central**

Connectez-vous en ssh avec la commande **ssh** sous linux ou avec l'outil **putty** sur l'adresse IP de **Prism Central** comme par exemple sous linux ```ssh nutanix@adresseipprismcentral```

##### Collecter et envoyer les logs au support Nutanix

Collectez et envoyez les Logs au support Nutanix
```
logbay collect --dst=ftp://nutanix -c casenumber
```

##### Collecter les logs pour les envoyer ultérieurement au support Nutanix

Collectez les logs
```
logbay collect 
```

Affichez le nom du fichier généré
```
ls /home/nutanix/data/logbay/bundles
```

##### Récupération des logs collectés dans un fichier au format **zip**

Faites une copie des fichiers à partir d'un ordinateur sous linux avec la commande **scp** ou sous Windows avec **pscp**. 
```
scp nutanix@adresseipprismcentral:/home/nutanix/data/logbay/bundlesNTNX-Log-numerodemande-PC-adresseipprismcentral-CW.zip .
nutanix@adresseipprismcentral's password:
Saisissez le mot de passe
```

#### Collecter tous les logs des nœuds à partir de l'adresse IP de de **Prism Element**

Connectez-vous en ssh avec la commande **ssh** sous linux ou avec l'outil **putty** sur l'adresse IP du cluster comme par exemple sous linux ```ssh nutanix@adresseiprismelement```

##### Collecter les logs et les envoyer directement au support Nutanix

Collectez et envoyez tous les logs des nœuds au support avec le numéro d'incident.
```
allssh logbay collect --dst=ftp://nutanix -c casenumber
```

##### Collecter les logs pour les envoyer ultérieurement au support Nutanix

Collectez tous les logs des nœuds
```
allssh logbay collect
```

Affichez le nom de tous les fichiers générés
```
allssh ls /home/nutanix/data/logbay/bundles
```


##### Récupération des logs collectés dans des fichiers au format **zip**

Copiez chaque fichier généré sur chacun des nœuds
```
scp nutanix@CVM1:/home/nutanix/data/logbay/bundlesNTNX-Log-numerodemande-PE-adresseipprismelement.zip
nutanix@CVM1's password:
Saisissez le mot de passe

scp nutanix@CVMN:/home/nutanix/data/logbay/bundlesNTNX-Log-numerodemande-PE-adresseipprismelement.zip
nutanix@CVMN's password:
Saisissez le mot de passe
```

Pour plus de détails sur **Logbay** et **putty** reportez-vous à la section « [Aller plus loin](#gofurther) » de ce guide.
 

## Aller plus loin

[Lien vers Putty](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html)

[Documentation de Logbay par Nutanix](https://portal.nutanix.com/page/documents/kbs/details?targetId=kA00e000000LM3BCAW)

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.
