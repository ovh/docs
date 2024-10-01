---
title: "Cluster SAP HANA avec SLES sur VMware on OVHcloud"
excerpt: "Ce guide fournit les instructions pour configurer un cluster SAP HANA avec SLES sur VMware on OVHcloud en utilisant les services corosync et pacemaker"
updated: 2023-12-04
---

## Objectif

Ce guide fournit les instructions pour configurer un cluster SAP HANA avec SLES sur VMware on OVHcloud en utilisant les services corosync et pacemaker.

Cette configuration réduit la durée maximale d'interruption admissible (RTO), en cas de coupure de service de la machine virtuelle ou de l'hôte ESXi sur la même localisation OVHcloud.

![schema](images/sap_hana_cluster.png){.thumbnail}

## Prérequis

- Un accès à l'[espace client OVHcloud](/links/manager).
- Une solution [SAP HANA on Private Cloud](https://www.ovhcloud.com/fr/hosted-private-cloud/sap-hana/) déployée.
- Deux machines virtuelles SAP HANA déployées ayant la même version SAP HANA installée.

## En pratique

> [!primary]
>
> Dans tous les blocs de console :
>
> - Le nœud primaire SAP HANA est nommé `node1` et le nœud secondaire SAP HANA est nommé `node2`.
> - `<SID>` est le SID SAP HANA.
> - `<NI>` est le numéro d'instance SAP HANA.
>

La disponibilité de SAP HANA pourrait être affectée durant la configuration. Veillez à prendre toutes les précautions nécessaires avant de suivre les instructions de ce guide.

### Utilisateur vSphere

Pour autoriser le service corosync à obtenir les informations des nœuds SAP HANA, vous devez configurer un utilisateur avec les droits d'accès à l'interface vSphere.

Nous recommandons d'utiliser un utilisateur dédié avec des droits limités pour interagir avec vSphere.

Cet utilisateur dédié n'a besoin que du droit en « Lecture seule » sur le datacenter où sont hébergées les machines virtuelles SAP HANA. Pour connaître les étapes de création d'un utilisateur dédié, veuillez vous référer à [notre guide](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/change_users_rights).

### Paquets SUSE

Plusieurs paquets, incluant les binaires corosync et pacemaker, doivent être installés sur les deux nœuds SAP HANA.

Ces paquets sont uniquement disponibles avec l'extension SUSE Linux Enterprise High Availability. Veuillez vous assurer qu'elle est activée avant de continuer :

```bash
SUSEConnect --list-extensions | grep "SUSE Linux Enterprise High Availability Extension 15 SP4 x86_64"
```

- Résultat attendu :

```bash
SUSE Linux Enterprise High Availability Extension 15 SP4 x86_64 (Activated)
```

Dans les autres cas, veuillez exécuter la commande suivante dans laquelle `<ADDITIONAL REGCODE>` est le code d'enregistrement fourni par SUSE dans votre espace client SUSE.

```bash
SUSEConnect -p sle-ha/15.4/x86_64 -r <ADDITIONAL REGCODE>
```

Exécutez les commandes suivantes pour installer les paquets nécessaires :

```bash
zypper install -y -t pattern ha_sles
zypper install -y SAPHanaSR SAPHanaSR-doc
```

### Préparation de SAP HANA

#### Sauvegarde

Si vous exécutez cette configuration sur des nouvelles machines virtuelles SAP HANA, vous devez déclencher une sauvegarde du SYSTEMDB et du TENANTDB avant de continuer la configuration sur le futur nœud primaire. Ces sauvegardes sont obligatoires pour activer le système de réplication SAP HANA (HSR).

#### Python Hook SAPHanaSR

Le provider hook SAP HANA HA/SR améliore la détection d'erreurs SAP HANA.

1\. Arrêtez les services SAP HANA sur les deux nœuds :

```bash
sapcontrol -nr <NI> -function Stop
```

2\. Ajoutez ce bloc dans le fichier global.ini sur les deux nœuds :

```ini
[ha_dr_provider_SAPHanaSR]
provider = SAPHanaSR
path = /usr/share/SAPHanaSR
execution_order = 1

[trace]
ha_dr_saphanasr = info
```

#### Système de réplication

1\. Démarrez les services SAP HANA sur le nœud primaire :

```bash
sapcontrol -nr <NI> -function Start
```

2\. Avec l'utilisateur SAP HANA (sid)adm, activez le système de réplication SAP HANA (HSR) sur le nœud primaire qui sera la source de la réplication :  

```bash
hdbnsutil -sr_enable --name=node1
```

> [!primary]
>
> L'option `--name` est obligatoire et est utilisée pour définir le nœud SAP HANA dans le système de réplication.
>

3\. Pour autoriser le nœud secondaire à s'enregistrer sur le nœud primaire, vous devez transférer deux fichiers du nœud primaire sur le nœud secondaire :

- /usr/sap/`<SID>`/SYS/global/security/rsecssfs/data/SSFS_`<SID>`.DAT
- /usr/sap/`<SID>`/SYS/global/security/rsecssfs/key/SSFS_`<SID>`.KEY

```bash
scp /usr/sap/<SID>/SYS/global/security/rsecssfs/data/SSFS_<SID>.DAT \
node2:/usr/sap/<SID>/SYS/global/security/rsecssfs/data/SSFS_<SID>.DAT

scp /usr/sap/<SID>/SYS/global/security/rsecssfs/key/SSFS_<SID>.KEY \
node2:/usr/sap/<SID>/SYS/global/security/rsecssfs/key/SSFS_<SID>.KEY
```

4\. Une fois ces fichiers transférés sur le nœud secondaire, vous pouvez enregistrer le nœud secondaire sur le nœud primaire :

```bash
hdbnsutil -sr_register --name=node2 \
--remoteHost=node1 --remoteInstance=<instance_number> \
--replicationMode=[sync|syncmem|async] \
--operationMode=[delta_datashipping|logreplay|logreplay_readaccess]
```

Pour connaître les différences entre les modes de réplication et d'opération, nous vous recommandons la [documentation SAP](https://help.sap.com/docs/SAP_HANA_PLATFORM/4e9b18c116aa42fc84c7dbfd02111aba/2dd26de6360046309e1579accbd9e527.html).

Dans le cadre de notre guide, les deux nœuds SAP HANA sont hébergés sur la même localisation OVHcloud, nous recommandons d'utiliser les paramètres suivants :

| Paramètre       | Valeur   |
|-----------------|------------|
| replicationMode | sync       |
| operationMode   | logreplay  |

5\. Démarrez les services SAP HANA sur le nœud secondaire. Le démarrage des services SAP HANA déclenche l'initialisation de la réplication du nœud primaire vers le nœud secondaire :

```bash
sapcontrol -nr <NI> -function Start
```

Sur le nœud primaire, vous pouvez suivre l'initialisation de la réplication avec la commande suivante :

```bash
cdpy && python systemReplicationStatus.py
```

```bash
|Database   |Host  |Port    |Service Name |Volume ID |Site ID |Site Name |Secondary |Secondary   |Secondary |Secondary |Secondary     |Replication |Replication |Replication    |Secondary    |
|           |      |        |             |          |        |          |Host      |Port        |Site ID   |Site Name |Active Status |Mode        |Status      |Status Details |Fully Synced |
|---------- |----- |------- |------------ |--------- |------- |--------- |--------- |----------- |--------- |--------- |------------- |----------- |----------- |-------------- |------------ |
|SYSTEMDB   |node1 |3<NI>01 |nameserver   |        1 |      1 |node1     |node2     |    3<NI>01 |        2 |node2     |YES           |SYNC        |ACTIVE      |               |        True |
|<SID>      |node1 |3<NI>07 |xsengine     |        2 |      1 |node1     |node2     |    3<NI>07 |        2 |node2     |YES           |SYNC        |ACTIVE      |               |        True |
|<SID>      |node1 |3<NI>03 |indexserver  |        3 |      1 |node1     |node2     |    3<NI>03 |        2 |node2     |YES           |SYNC        |ACTIVE      |               |        True |

status system replication site "2": ACTIVE
overall system replication status: ACTIVE

Local System Replication State
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

mode: PRIMARY
site id: 1
site name: node1
```

La réplication peut prendre un certain temps, cela dépend du volume de données dans votre base de données SAP HANA. Une fois l'initialisation de la réplication terminée, le statut du système de réplication doit être `ACTIVE`.

### Corosync

> [!primary]
>
> Dans ce chapitre, toutes les commandes doivent être exécutées en tant que root.
>

1\. Sur le nœud primaire, générez le fichier /etc/corosync/authkey :

```bash
corosync-keygen
```

Ce fichier est la clef privée qui garantit l'authenticité et le chiffrement des messages échangés entre les nœuds du cluster.

2\. Créez le fichier /etc/corosync/corosync.conf sur le nœud primaire et ajoutez la configuration suivante (remplacez `<ip_address_node1>` et `<ip_address_node2>` par vos adresses IP) :

```console
totem {
  version: 2
  token: 5000
  token_retransmits_before_loss_const: 6
  secauth: on
  crypto_hash: sha1
  crypto_cipher: aes256
  clear_node_high_bit: yes
  transport: udpu
}
logging {
  fileline: off
  to_logfile: yes
  to_syslog: yes
  logfile: /var/log/cluster/corosync.log
  debug: off
  timestamp: on
  logger_subsys {
    subsys: QUORUM
    debug: off
  }
}
nodelist {
  node {
    ring0_addr: <ip_address_node1>
    nodeid: 1
  }
  node {
    ring0_addr: <ip_address_node2>
    nodeid: 2
  }
}
quorum {
  provider: corosync_votequorum
  expected_votes: 2
  two_node: 1
}
```

> [!primary]
>
> Pour découvrir tous les paramètres de configuration, veuillez vous référer au manuel corosync.conf.5 avec la commande `man corosync.conf.5`.
>

3\. Transférez ces fichiers sur le nœud secondaire pour partager la configuration et la clef privée :

```bash
scp /etc/corosync/authkey node2:/etc/corosync/authkey
scp /etc/corosync/corosync.conf node2:/etc/corosync/corosync.conf
```

### Pacemaker

1\. Démarrez les services corosync et pacemaker sur les deux nœuds :

```bash
service pacemaker start
service corosync start
```

2\. Nous conseillons de retarder le démarrage du service corosync lors du démarrage de la machine virtuelle.

a. Éditez le service corosync sur les deux nœuds :

```bash
systemctl edit corosync.service
```

b. Insérez ces lignes entre les lignes 3 et 6 :

```bash
[Service]
ExecStartPre=/bin/sleep 60
```

c. Rechargez la configuration :

```bash
systemctl daemon-reload
```

d. Si la configuration a été correctement chargée, la ligne `-override.conf` apparaît dans le statut du service corosync :

```bash
service corosync status
```

```console
* corosync.service - Corosync Cluster Engine
Loaded: loaded (/usr/lib/systemd/system/corosync.service; enabled; vendor preset: disabled)
Drop-In: /etc/systemd/system/corosync.service.d
  `-override.conf
Active: active (running) since Fri 2023-02-17 14:29:40 CEST; 1h 3min ago
```

e. Assurez-vous que les services corosync et pacemaker démarrent automatiquement durant le démarrage de la machine virtuelle :

```bash
systemctl enable pacemaker.service
systemctl enable corosync.service
systemctl enable corosync-notifyd.service
```

3\. Sur le nœud primaire, configurez les propriétés générales du cluster SUSE pour SAP HANA :

```bash
crm configure property stonith-enabled="true"
crm configure property stonith-action="off"
crm configure property stonith-timeout="150s"
crm configure property have-watchdog="false"
crm configure rsc_defaults resource-stickness="1000"
crm configure rsc_defaults migration-threshold="5000"
crm configure op_defaults timeout="600"
```

4\. Sur le nœud primaire, activez le mode maintenance du cluster :

```bash
crm configure property maintenance-mode=true
```

#### Ressource stonith

> [!primary]
>
> Les actions qui vont suivre doivent être réalisées sur le nœud primaire.
>

La ressource `stonith` vérifie l'état de santé des machines virtuelles à travers vSphere et peut décider d'éteindre la machine virtuelle.

> [!primary]
>
> L'identifiant et le mot de passe sont les identifiants créés dans le chapitre « [Créer un utilisateur vSphere](#creation-utilisateur-vsphere) ».
>

```bash
crm configure primitive stonith stonith:fence_vmware_rest \
    params ip=<pcc-xx-xx-xx-xx.ovh.com> login=<user> passwd="<password>" ssl=1 pcmk_reboot_timeout=900 power_timeout=60 \
    op monitor interval=3600 timeout=120 \
    op stop timeout=20s interval=0s \
    op start timeout=20s interval=0s
```

- Résultat attendu :

```bash
crm status
```

```console
Cluster Summary:
  * Stack: corosync
  * Current DC: node1 (version 2.1.2+20211124.ada5c3b36-150400.4.9.2-2.1.2+20211124.ada5c3b36) - partition with quorum
  * Last updated: Fri Feb 17 14:35:47 2023
  * Last change:  Fri Feb 17 14:35:03 2023 by root via crm_attribute on node1
  * 2 nodes configured
  * 1 resource instances configured

              *** Resource management is DISABLED ***
  The cluster will not attempt to start, stop or recover services

Node List:
  * Online: [ node1 node2 ]

Full List of Resources:
  * stonith	(stonith:fence_vmware_rest):	 Stopped (unmanaged)
```

#### Ressource adresse IP flottante

La ressource `res_vip_<SID>_HDB<NI>` gère et surveille l'adresse IP flottante qui est le point d'entrée des communications avec le nœud primaire.

> [!primary]
>
> - `<floating_ip_address>` est l'adresse IP flottante qui sera utilisée par le cluster.
> - Si vous avez plusieurs cartes réseau, vous pouvez spécifier la carte réseau en ajoutant le paramètre `nic`.
>

```bash
crm configure primitive res_vip_<SID>_HDB<NI> ocf:heartbeat:IPaddr2 \
    params ip="<floating_ip_address>" \
    op monitor interval="10s" timeout="20s" depth="0"
```

- Résultat attendu :

```bash
crm status
```

```console
Cluster Summary:
  * Stack: corosync
  * Current DC: node1 (version 2.1.2+20211124.ada5c3b36-150400.4.9.2-2.1.2+20211124.ada5c3b36) - partition with quorum
  * Last updated: Fri Feb 17 14:36:32 2023
  * Last change:  Fri Feb 17 14:36:05 2023 by root via crm_attribute on node1
  * 2 nodes configured
  * 2 resource instances configured

              *** Resource management is DISABLED ***
  The cluster will not attempt to start, stop or recover services

Node List:
  * Online: [ node1 node2 ]

Full List of Resources:
  * stonith	(stonith:fence_vmware_rest):	 Stopped (unmanaged)
  * res_vip_<SID>_HDB<NI>	(ocf::heartbeat:IPaddr2):	 Stopped (unmanaged)
```

#### Ressources SAP HANA

1\. La ressource `rsc_SAPHana_<SID>_HDB<NI>` gère et surveille les services SAP HANA sur les deux nœuds.

```bash
crm configure primitive rsc_SAPHana_<SID>_HDB<NI> ocf:suse:SAPHana \
    op start interval="0" timeout="3600" \
    op stop interval="0" timeout="3600" \
    op promote interval="0" timeout="3600" \
    op demote interval="0" timeout="320" \
    op monitor interval="60" role="Master" timeout="700" \
    op monitor interval="61" role="Slave" timeout="700" \
    params SID="<SID>" InstanceNumber="<NI>" PREFER_SITE_TAKEOVER="true" \
    DUPLICATE_PRIMARY_TIMEOUT="7200" AUTOMATED_REGISTER="false"

crm configure clone msl_SAPHana_<SID>_HDB<NI> rsc_SAPHana_<SID>_HDB<NI> \
    clone-max="2" clone-node-max="1"
```

> [!primary]
>
> Pour découvrir tous les paramètres de cette ressource, veuillez vous référer au manuel ocf_suse_SAPHana avec la commande `man ocf_suse_SAPHana`.
>

2\. La ressource `rsc_SAPHanaTopology_<SID>_HDB<NI>` surveille la réplication SAP HANA.

```bash
crm configure primitive rsc_SAPHanaTopology_<SID>_HDB<NI> ocf:suse:SAPHanaTopology \
    op monitor interval="10" timeout="600"  \
    op start interval="0" timeout="600" \
    op stop interval="0" timeout="300" \
    params SID="<SID>" InstanceNumber="00"

crm configure clone cln_SAPHanaTopology_<SID>_HDB<NI> rsc_SAPHanaTopology_<SID>_HDB<NI> \
    meta clone-node-max="1" interleave="true"

crm configure colocation col_SAPHana_vip_<SID>_HDB<NI> 2000: res_vip_<SID>_HDB<NI>:started \
    msl_SAPHana_<SID>_HDB<NI>:Master

crm configure order ord_SAPHana_<SID>_HDB<NI> Optional: cln_SAPHanaTopology_<SID>_HDB<NI> \
    msl_SAPHana_<SID>_HDB<NI>
```

- Résultat attendu :

```bash
crm status
```

```console
Cluster Summary:
  * Stack: corosync
  * Current DC: node1 (version 2.1.2+20211124.ada5c3b36-150400.4.9.2-2.1.2+20211124.ada5c3b36) - partition with quorum
  * Last updated: Fri Feb 17 14:39:35 2023
  * Last change:  Fri Feb 17 14:39:29 2023 by hacluster via crmd on node2
  * 2 nodes configured
  * 6 resource instances configured

Node List:
  * Online: [ node1 node2 ]

Full List of Resources:
  * stonith	(stonith:fence_vmware_rest):	 Started node1
  * res_vip_<SID>_HDB<NI>	(ocf::heartbeat:IPaddr2):	 Started node1
  * Clone Set: msl_SAPHana_<SID>_HDB<NI> [rsc_SAPHana_<SID>_HDB<NI>] (promotable, unmanaged):
    * rsc_SAPHana_<SID>_HDB<NI>	(ocf::suse:SAPHana):	 Slave node2 (unmanaged)
    * rsc_SAPHana_<SID>_HDB<NI>	(ocf::suse:SAPHana):	 Slave node1 (unmanaged)
  * Clone Set: cln_SAPHanaTopology_<SID>_HDB<NI> [rsc_SAPHanaTopology_<SID>_HDB<NI>] (unmanaged):
    * rsc_SAPHanaTopology_<SID>_HDB<NI>	(ocf::suse:SAPHanaTopology):	 Started node2 (unmanaged)
    * rsc_SAPHanaTopology_<SID>_HDB<NI>	(ocf::suse:SAPHanaTopology):	 Started node1 (unmanaged)
```

> [!primary]
>
> Pour découvrir tous les paramètres de cette ressource, veuillez vous référer au manuel ocf_suse_SAPHanaTopology avec la commande `man ocf_suse_SAPHanaTopology`.
>

> [!primary]
>
> Si la ressource `rsc_SAPHana_<SID>_HDB<NI>` est affichée en échec même si les services SAP HANA sont correctement actifs, exécutez la commande suivante pour rafraîchir le statut :
>
> `crm resource refresh`
>

3\. Pour éviter un comportement inattendu, nous vous conseillons de désactiver les ressources `rsc_SAPHana_<SID>_HDB<NI>` et `rsc_SAPHanaTopology_<SID>_HDB<NI>`

```bash
crm resource unmanage rsc_SAPHana_<SID>_HDB<NI>
crm resource unmanage rsc_SAPHanaTopology_<SID>_HDB<NI>
```

4\. Quittez le mode maintenance :

```bash
crm configure property maintenance-mode=false
'is-managed' conflicts with 'maintenance' in msl_SAPHana_<SID>_HDB<NI>. Remove it (y/n)? n
'is-managed' conflicts with 'maintenance' in cln_SAPHanaTopology_<SID>_HDB<NI>. Remove it (y/n)? n
```

5\. Rafraîchissez le cluster sur le nœud primaire :

```bash
crm resource refresh
```

6\. Activez les ressources précédemment désactivées à l'étape 3 :

```bash
crm resource manage rsc_SAPHana_<SID>_HDB<NI> && crm resource manage rsc_SAPHanaTopology_<SID>_HDB<NI>
```

- Résultat attendu après plusieurs secondes :

```bash
crm status
```

```console
Cluster Summary:
  * Stack: corosync
  * Current DC: node1 (version 2.1.2+20211124.ada5c3b36-150400.4.9.2-2.1.2+20211124.ada5c3b36) - partition with quorum
  * Last updated: Fri Feb 17 14:40:35 2023
  * Last change:  Fri Feb 17 14:40:29 2023 by hacluster via crmd on node2
  * 2 nodes configured
  * 6 resource instances configured

Node List:
  * Online: [ node1 node2 ]

Full List of Resources:
  * stonith	(stonith:fence_vmware_rest):	 Started node1
  * res_vip_<SID>_HDB<NI>	(ocf::heartbeat:IPaddr2):	 Started node1
  * Clone Set: msl_SAPHana_<SID>_HDB<NI> [rsc_SAPHana_<SID>_HDB<NI>] (promotable):
    * Masters: [ node1 ]
    * Slaves: [ node2 ]
  * Clone Set: cln_SAPHanaTopology_<SID>_HDB<NI> [rsc_SAPHanaTopology_<SID>_HDB<NI>]:
    * Started: [ node1 node2 ]
```

L'adresse IP flottante est attachée sur la carte réseau :

```bash
ip a
```

```console
1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN group default qlen 1000
  link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
  inet 127.0.0.1/8 scope host lo
    valid_lft forever preferred_lft forever
2: eth0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc mq state UP group default qlen 1000
  link/ether 00:50:56:a8:b7:17 brd ff:ff:ff:ff:ff:ff
  altname enp11s0
  altname ens192
  inet <ip_address> brd <broadcast_ip_address> scope global eth0
    valid_lft forever preferred_lft forever
  inet <floating_ip_address> brd <broadcast_ip_address> scope global secondary eth0
    valid_lft forever preferred_lft forever
```

7\. Créez le fichier /etc/sudoers.d/SAPHanaSR-srHook et ajoutez le contenu suivant sur les deux nœuds :

> [!primary]
>
> - Pour obtenir le nom du siteA et du siteB, exécutez la commande `crm status -A1 | grep site`.
> - `<sid>` est le SID SAP HANA en minuscule.
>

```console
# SAPHanaSR-ScaleUp entries for writing srHook cluster attribute
Cmnd_Alias SOK_SITEA   = /usr/sbin/crm_attribute -n hana_<sid>_site_srHook_<siteA> -v SOK   -t crm_config -s SAPHanaSR
Cmnd_Alias SFAIL_SITEA = /usr/sbin/crm_attribute -n hana_<sid>_site_srHook_<siteA> -v SFAIL -t crm_config -s SAPHanaSR
Cmnd_Alias SOK_SITEB   = /usr/sbin/crm_attribute -n hana_<sid>_site_srHook_<siteB> -v SOK   -t crm_config -s SAPHanaSR
Cmnd_Alias SFAIL_SITEB = /usr/sbin/crm_attribute -n hana_<sid>_site_srHook_<siteB> -v SFAIL -t crm_config -s SAPHanaSR
<sid>adm ALL=(ALL) NOPASSWD: SOK_SITEA, SFAIL_SITEA, SOK_SITEB, SFAIL_SITEB
```

### Test de bascule

Pour valider la configuration et son comportement, nous recommandons d'exécuter un test de bascule.

Vous pouvez simuler la perte d'un nœud SAP HANA de différentes manières :

- Arrêter la machine virtuelle sur vSphere
- Arrêter la machine virtuelle avec la commande OS
- Arrêter les services SAP HANA avec la commande OS
- Éteindre la carte réseau
- Simuler la perte d'un hôte ESXi avec l'[API OVHcloud](https://api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/datacenter/%7BdatacenterId%7D/host/%7BhostId%7D/resilience/enable~POST)
- Mettre en veille le nœud primaire dans le cluster

#### Perte du nœud SAP HANA primaire

Dans ce cas, le comportement attendu est la bascule de toutes les ressources hébergées sur le nœud primaire vers le nœud secondaire qui deviendra le nœud primaire.

> [!tabs]
> **Situation nominale**
>>
>> Le node1 est vu comme Master et le node2 comme Slave.
>>
>> Toutes les ressources sont correctement gérées et surveillées par le cluster.
>>
>> ```console
>> Cluster Summary:
>>   * Stack: corosync
>>   * Current DC: node1 (version 2.1.2+20211124.ada5c3b36-150400.4.9.2-2.1.2+20211124.ada5c3b36) - partition with quorum
>>   * Last updated: Fri Feb 17 14:39:35 2023
>>   * Last change:  Fri Feb 17 14:39:29 2023 by hacluster via crmd on node2
>>   * 2 nodes configured
>>   * 6 resource instances configured
>>  
>> Node List:
>>   * Online: [ node1 node2 ]
>>  
>> Full List of Resources:
>>   * stonith (stonith:fence_vmware_rest):     Started node1
>>   * res_vip_<SID>_HDB<NI>   (ocf::heartbeat:IPaddr2):    Started node1
>>   * Clone Set: msl_SAPHana_<SID>_HDB<NI> [rsc_SAPHana_<SID>_HDB<NI>] (promotable):
>>     * Masters: [ node1 ]
>>     * Slaves: [ node2 ]
>>   * Clone Set: cln_SAPHanaTopology_<SID>_HDB<NI> [rsc_SAPHanaTopology_<SID>_HDB<NI>]:
>>     * Started: [ node1 node2 ]
>> ```
>>
> **Démarrage de la bascule**
>>
>> Le cluster détecte la perte du node1 qui était le Master et déclenche la bascule sur le node2.
>>
>> La bascule peut prendre plusieurs minutes, cela dépend du volume de la base de données SAP HANA.
>>
>> ```console
>> Cluster Summary:
>>   * Stack: corosync
>>   * Current DC: node2 (version 2.1.2+20211124.ada5c3b36-150400.4.9.2-2.1.2+20211124.ada5c3b36) - partition with quorum
>>   * Last updated: Fri Feb 17 14:41:32 2023
>>   * Last change:  Fri Feb 17 14:40:50 2023 by root via crm_attribute on node2
>>   * 2 nodes configured
>>   * 6 resource instances configured
>>
>> Node List:
>>   * Online: [ node2 ]
>>   * OFFLINE: [ node1 ]
>>
>> Full List of Resources:
>>   * stonith	(stonith:fence_vmware_rest):	 Started node2
>>   * res_vip_<SID>_HDB<NI>	(ocf::heartbeat:IPaddr2):	 Started node2
>>   * Clone Set: msl_SAPHana_<SID>_HDB<NI> [rsc_SAPHana_<SID>_HDB<NI>] (promotable):
>>     * rsc_SAPHana_<SID>_HDB<NI>	(ocf::suse:SAPHana):	 Promoting node2
>>     * Stopped: [ node1 ]
>>   * Clone Set: cln_SAPHanaTopology_<SID>_HDB<NI> [rsc_SAPHanaTopology_<SID>_HDB<NI>]:
>>     * Started: [ node2 ]
>>     * Stopped: [ node1 ]
>> ```
>>
> **Fin de la bascule**
>>
>> Le node2 est maintenant vu comme le nouveau Master et le node1 est vu comme déconnecté.
>>
>> Une fois le problème réglé sur le node1, vous devez enregistrer le node1 vers le node2 et démarrer les services SAP HANA pour restaurer le cluster dans un état nominal.
>>
>> ```console
>> Cluster Summary:
>>   * Stack: corosync
>>   * Current DC: node1 (version 2.1.2+20211124.ada5c3b36-150400.4.9.2-2.1.2+20211124.ada5c3b36) - partition with quorum
>>   * Last updated: Fri Feb 17 14:43:35 2023
>>   * Last change:  Fri Feb 17 14:42:58 2023 by root via crm_attribute on node2
>>   * 2 nodes configured
>>   * 6 resource instances configured
>> 
>> Node List:
>>   * Online: [ node2 ]
>>   * OFFLINE: [ node1 ]
>> 
>> Full List of Resources:
>>   * stonith	(stonith:fence_vmware_rest):	 Started node2
>>   * res_vip_<SID>_HDB<NI>	(ocf::heartbeat:IPaddr2):	 Started node2
>>   * Clone Set: msl_SAPHana_<SID>_HDB<NI> [rsc_SAPHana_<SID>_HDB<NI>] (promotable):
>>     * Masters: [ node2 ]
>>     * Stopped: [ node1 ]
>>   * Clone Set: cln_SAPHanaTopology_<SID>_HDB<NI> [rsc_SAPHanaTopology_<SID>_HDB<NI>]:
>>     * Started: [ node2 ]
>>     * Stopped: [ node1 ]
>> ```
>>

#### Perte du nœud secondaire SAP HANA

Dans ce cas, le comportement attendu est uniquement la détection de la perte du nœud secondaire, aucune action ne doit être réalisée par le cluster.

> [!tabs]
> **Situation nominale**
>>
>> Le node1 est vu comme Master et le node2 comme Slave.
>>
>> Toutes les ressources sont correctement gérées et surveillées par le cluster.
>>
>> ```console
>> Cluster Summary:
>>   * Stack: corosync
>>   * Current DC: node1 (version 2.1.2+20211124.ada5c3b36-150400.4.9.2-2.1.2+20211124.ada5c3b36) - partition with quorum
>>   * Last updated: Fri Feb 17 14:50:33 2023
>>   * Last change:  Fri Feb 17 14:42:58 2023 by hacluster via crmd on node2
>>   * 2 nodes configured
>>   * 6 resource instances configured
>>  
>> Node List:
>>   * Online: [ node1 node2 ]
>>  
>> Full List of Resources:
>>   * stonith (stonith:fence_vmware_rest):     Started node1
>>   * res_vip_<SID>_HDB<NI>   (ocf::heartbeat:IPaddr2):    Started node1
>>   * Clone Set: msl_SAPHana_<SID>_HDB<NI> [rsc_SAPHana_<SID>_HDB<NI>] (promotable):
>>     * Masters: [ node1 ]
>>     * Slaves: [ node2 ]
>>   * Clone Set: cln_SAPHanaTopology_<SID>_HDB<NI> [rsc_SAPHanaTopology_<SID>_HDB<NI>]:
>>     * Started: [ node1 node2 ]
>> ```
>>
> **Détection du node2 comme déconnecté**
>>
>> Le node2 est vu comme déconnecté. Comme le nœud était Slave, aucune action n'a été réalisée par le cluster.
>>
>> Une fois le problème réglé sur le node2, démarrez les services SAP HANA pour restaurer le cluster dans un état nominal.
>>
>> ```console
>> Cluster Summary:
>>   * Stack: corosync
>>   * Current DC: node1 (version 2.1.2+20211124.ada5c3b36-150400.4.9.2-2.1.2+20211124.ada5c3b36) - partition with quorum
>>   * Last updated: Fri Feb 17 14:54:21 2023
>>   * Last change:  Fri Feb 17 14:49:35 2023 by root via crm_attribute on node1
>>   * 2 nodes configured
>>   * 6 resource instances configured
>> 
>> Node List:
>>   * Online: [ node1 ]
>>   * OFFLINE: [ node2 ]
>> 
>> Full List of Resources:
>>   * stonith	(stonith:fence_vmware_rest):	 Started node1
>>   * res_vip_<SID>_HDB<NI>	(ocf::heartbeat:IPaddr2):	 Started node1
>>   * Clone Set: msl_SAPHana_<SID>_HDB<NI> [rsc_SAPHana_<SID>_HDB<NI>] (promotable):
>>     * Masters: [ node1 ]
>>     * Stopped: [ node2 ]
>>   * Clone Set: cln_SAPHanaTopology_<SID>_HDB<NI> [rsc_SAPHanaTopology_<SID>_HDB<NI>]:
>>     * Started: [ node1 ]
>>     * Stopped: [ node2 ]
>> ```
>>

## Aller plus loin

- [Configurer un cluster SAP HANA](https://documentation.suse.com/sles-sap/15-SP1/html/SLES4SAP-guide/cha-s4s-cluster.html)
- [Configurer une réplication SAP HANA avec hdbnsutil](https://help.sap.com/docs/SAP_HANA_PLATFORM/4e9b18c116aa42fc84c7dbfd02111aba/2dd26de6360046309e1579accbd9e527.html)

Si vous avez besoin d'une formation ou d'une assistance technique pour la mise en oeuvre de nos solutions, contactez votre commercial ou cliquez sur [ce lien](https://www.ovhcloud.com/fr/professional-services/?_gl=1*835bqy*_gcl_au*MzU3MTAzMzA5LjE2ODY1NTk4MTE.) pour obtenir un devis et demander une analyse personnalisée de votre projet à nos experts de l’équipe Professional Services.

Échangez avec notre communauté d'utilisateurs sur [https://community.ovh.com](https://community.ovh.com).