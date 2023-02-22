---
title: 'Maîtriser et sécuriser votre serveur dédié ESXi dès son premier démarrage'
slug: esxi-hardening
excerpt: 'Découvrez ou redécouvrez les différents moyens vous permettant de sécuriser efficacement votre serveur dédié ESXi'
section: 'Utilisation avancée'
---

**Dernière mise à jour le 21/02/2023**

## Objectif

Cette documentation aura pour but de vous accompagner pour élaborer au mieux la sécurisation pour votre système ESXi.  
En particulier, nous allons voir comment:  

* limiter l'accès à votre ESXi à une adresse IP ou une plage réseau spécifique.  
* désactiver des services augmentant la surface d'attaque de votre serveur.  

Nous nous appuierons pour cela sur les fonctions embarquées que propose VMware, mais aussi celles offertes par OVHcloud.


> [!warning]
> 
> Récemment, les systèmes ESXi ont été victime d'une faille que des groupes malveillants ont exploitée très rapidement à travers les réseaux publics.  
> Vous trouverez plus d'informations sur cette attaque dans [une FAQ complémentaire](https://docs.ovh.com/fr/dedicated/esxi-faq/).
>


### Rappel des bonnes pratiques de sécurité :

* Mettez à jour régulièrement vos systèmes ESXi.
* Restreignez l’accès aux seules adresses IP de confiance.
* Désactivez les ports ainsi que les services inutilisés.
* Assurez-vous que les accès à vos serveurs ou vos équipements réseaux sont limités, contrôlés et protégés avec des mots de passe robustes.
* Sauvegardez vos données critiques dans des disques externes et des serveurs de backup protégés et isolés d’Internet.

Optionnel:

* Mettez en place des solutions de journalisation nécessaires pour contrôler les évènements survenus sur vos serveurs critiques et vos équipements réseaux.
* Mettez en place des packs de sécurité pour la détection des actions malveillantes, des intrusions (IPS / NIDS) et pour le contrôle de la bande passante de trafic réseau.


## Prérequis

* Être connecté à l'[espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr){.external}.
* Possédez un serveur dédié avec la solution ESXi déployée.
* Avoir souscrit à une offre compatible avec notre fonctionnalité [Network Firewall](https://docs.ovh.com/fr/dedicated/firewall-network/) si vous souhaitez l'utiliser pour effectuer le filtrage.


## En pratique

### Protection anti-intrusion native

Rappel avec sa définition et son principe de fonctionnement :  

> [!primary]
> 
> Le système ESXi embarque un mécanisme de sécurité lié au compte administrateur.  
> En effet, en cas de plusieurs tentatives d'accès érronées, le compte administrateur est temporairement vérrouillé.  
> Ceci permet de protéger votre système et ainsi d'éviter les tentatives de connexions malveillantes.  

> [!warning]
> 
> Si ce système se déclenche et que vous souhaitez vous connecter à votre ESXi immédiatement, il vous faudra déverrouiller manuellement le compte administrateur.  
>
> Pour cela, il vous sera nécessaire de [redémarrer](https://docs.ovh.com/fr/dedicated/premiers-pas-serveur-dedie/#redemarrage-de-votre-serveur-dedie_1) votre serveur ESXi à travers l'espace client OVHcloud.  
> 

Il est possible de consulter l'historique des logs d'accès dans les fichiers suivants à partir d'un shell :  

`/var/run/log/vobd.log` contient les logs qui peuvent être utilisés pour la supervision et la résolution de problèmes :  
```
2023-02-13T16:22:22.897Z: [UserLevelCorrelator] 410535559us: [vob.user.account.locked] Remote access for ESXi local user account 'root' has been locked for 900 seconds after 6 failed login attempts.
2023-02-13T16:22:22.897Z: [GenericCorrelator] 410535559us: [vob.user.account.locked] Remote access for ESXi local user account 'root' has been locked for 900 seconds after 6 failed login attempts.
2023-02-13T16:22:22.897Z: [UserLevelCorrelator] 410535867us: [esx.audit.account.locked] Remote access for ESXi local user account 'root' has been locked for 900 seconds after 6 failed login attempts.
```

`/var/run/log/hostd.log` contient les logs de l'hôte ESXi (tâches, accès à l'interface Web, etc.) :  
```
2023-02-21T08:44:19.711Z error hostd[2101004] [Originator@6876 sub=Default opID=esxui-d48c-26a4] [module:pam_lsass]pam_do_authenticate: error [login:root][error code:2]
2023-02-21T08:44:19.711Z error hostd[2101004] [Originator@6876 sub=Default opID=esxui-d48c-26a4] [module:pam_lsass]pam_sm_authenticate: failed [error code:2]
2023-02-21T08:44:19.712Z warning hostd[2101004] [Originator@6876 sub=Default opID=esxui-d48c-26a4] Rejected password for user root from xxx.xxx.xxx.xxx
2023-02-21T08:44:19.712Z info hostd[2101004] [Originator@6876 sub=Vimsvc.ha-eventmgr opID=esxui-d48c-26a4] Event 175 : Cannot login root@xxx.xxx.xxx.xxx
```

Toutes ces informations sont également disponibles à travers l'interface d'administration web :  

Cliquez sur le menu `Host`{.action} et accéder à la section `Monitor`{.action}, puis cliquez sur `Logs`{.action}.

![interface](images/gui_logs_.png){.thumbnail}

### Solution Network Firewall

Nous vous proposons d'activer et d'utiliser notre solution de filtrage [Network Firewall](https://docs.ovh.com/fr/dedicated/firewall-network/).  
Cette solution vous permettra de gérer facilement les accès légitimes en complément de ceux que vous aurez mis en place à travers votre système ESXi.  

Cette solution vous évitera de verrouiller inopinément votre compte administrateur en cas d'attaque.  

Il est donc recommandé de filtrer les accès légitimes de cette manière :  
La régle 1 (Priority 0) : autorise les accès externes qui auront besoin d'accèder à votre système ESXi.  
La régle 2 (Priority 1) : bloque tout le reste.  

![Network_Firewall](images/firewall_network_.png){.thumbnail}


### Filtrage sous ESXi

> [!primary]
>
> De plus, vous avez également la possibilité de filtrer les accès à votre système ESXi grâce au pare-feu intégré.  
> Vous pourrez également désactiver les services inutiles en fonction de votre usage.  
>

> [!warning]
> 
> La désactivation des services **ssh** et **slp** est fortement conseillée.  
> Ceci est valable également pour les accès au **shell**.  
> Ne prévilégiez que le strict nécessaire pour chacun de vos besoins.  

#### Manipulation via l'interface graphique

**Services**

Cliquez sur le menu `Host`{.action} et accéder à la section `Manage`{.action}, puis cliquez sur `Services`{.action}.

Sous l'onglet `Name`, faites défiler la liste et faites un clic droit sur `TSM-SSH`{.action}.

Modifiez la `Policy` comme sur l'exemple présenté et choisissez l'option `Start an stop manually`{.action} afin d'éviter que le service ne soit actif au démarrage du serveur.  

Arrêtez le service :  
![services_ssh](images/stop_service.png){.thumbnail}

Selectionnez la `Policy`:  
![services_ssh](images/ssh_disabled_.png){.thumbnail} 

Appliquer/Vérifiez les mêmes paramètres pour le service `slpd`:  
![services_slp](images/slpd_.png){.thumbnail}  
  
  
  
**Règles de pare-feu**

Cliquez sur le menu `Networking`{.action}, puis sur `Firewall rules`{.action} et choisissez `Edit settings`{.action} :

![rules](images/firewall_web_.png){.thumbnail}

Éditez la règle pour n'ajouter que la ou les adresses IP, ou encore réseau(x), à pouvoir se connecter à votre système ESXi.  

Exemple avec une adresse privée :

![custom](images/custom_fw_rule.png){.thumbnail}


#### Manipulation via le shell

**Services**

Désactivez les services inutiles :  

Service SLP

```bash
/etc/init.d/slpd stop
esxcli network firewall ruleset set -r CIMSLP -e 0
chkconfig slpd off
```

Service SSH  

```bash
/etc/init.d/SSH stop
esxcli network firewall ruleset set -r sshServer -e 0
chkconfig SSH off
```

Vérifiez l'ensemble des services actifs au démarrage :  

```bash
chkconfig --list|grep on
```
<br/>
<br/>

**Règles de pare-feu**  
  
Afficher les règles de pare-feu existantes :  
```bash
esxcli network firewall ruleset list
esxcli system account list
```
<br/>
<br/>

Exemple de modification/ajustement de régle d'accès avec le service `vSphereClient` :  
```bash
esxcli network firewall ruleset list --ruleset-id vSphereClient
```
<br/>
<br/>
Assurez vous que le service soit actif :  
```bash
esxcli network firewall ruleset set --ruleset-id vSphereClient --enabled true
```
<br/>
<br/>

Obtenez le statut du tag `allowedAll` (autorisé pour tous) pour le service :  
```bash
esxcli network firewall ruleset allowedip list --ruleset-id vSphereClient
```
<br/>
<br/>

Changer le statut du tag en le désactivant :  
```bash
esxcli network firewall ruleset set --ruleset-id vSphereClient --allowed-all false
```
<br/>
<br/>

Ajouter l'adresse privée légitime 192.168.1.10 :  
```bash
esxcli network firewall ruleset allowedip add --ruleset-id vSphereClient --ip-address 192.168.1.10
```
<br/>
<br/>

Vérifier l'adresse dans la liste d'accès :  
```bash
esxcli network firewall ruleset allowedip list --ruleset-id vSphereClient
```
<br/>
<br/>

Recharger la configuration avec la nouvelle régle :  
```bash
esxcli network firewall refresh
```

## Aller plus loin
Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.
