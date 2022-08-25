---
title: Gestion des règles de firewall et port security sur les réseaux utilisant OpenStack CLI
slug: firewall_security_pci
excerpt: Découvrez le fonctionnement des groupes de sécurité sur Public Cloud
section: Gestion via OpenStack
---

<style>
 pre {
     font-size: 14px;
 }
 pre.console {
   background-color: #300A24; 
   color: #ccc;
   font-family: monospace;
   padding: 5px;
   margin-bottom: 5px;
 }
 pre.console code {
   border: solid 0px transparent;
   font-family: monospace !important;
   font-size: 0.75em;
   color: #ccc;
 }
 .small {
     font-size: 0.75em;
 }
</style>

**Dernière mise à jour le 25/08/2022**

## Objectif

La plateforme OpenStack gère la sécurité des pare-feu en combinant les règles de connexion en **groupes de sécurité**. Les règles sont ensuite appliquées en affectant des groupes de sécurité aux ports réseau.

Un **port** dans le cadre d'[OpenStack Neutron](https://docs.openstack.org/neutron/latest/index.html){.external} est un point de connexion entre les sous-réseaux et les éléments réseau (tels que des instances, load-balancers, routeurs, etc...).

**Découvrez comment sont gérés les groupes de sécurité pour les réseaux publics et privés sur Public Cloud.**

## Prérequis

- [Préparer l’environnement pour utiliser l’API OpenStack](https://docs.ovh.com/ca/fr/public-cloud/preparer-lenvironnement-pour-utiliser-lapi-openstack/)
- [Charger les variables d’environnement OpenStack](https://docs.ovh.com/ca/fr/public-cloud/charger-les-variables-denvironnement-openstack/)

## En pratique

### Procédure d'activation <a name="activation"></a>

> [!primary]
>
> Cette section du guide ne concerne que les configurations de réseaux privés.

#### Pour un réseau privé déjà créé

Afin d'éviter toute rupture de configuration lors des montées de version d'OpenStack Stein et d'Open vSwitch, le paramètre "port security" a été défini sur "False" sur les réseaux existants.

Vous devez utiliser la CLI `openstack` pour activer le "port security" sur vos ports et votre réseau existant.

Tout d'abord, si vous souhaitez utiliser des règles de pare-feu sur des réseaux privés, vous devrez définir la propriété "port security" à "True" :

```bash
openstack network set --enable-port-security <network_ID>
```

Ensuite, vous devrez activer le "port security" sur le port de votre service dans ce réseau. 

> [!primary]
> Pour rappel, pour récupérer le port, vous pouvez utiliser la CLI OpenStack. Exécutez la commande `openstack port list --server <server_ID>` pour récupérer les ports sur un serveur donné.
>

Pour tous les services ayant un port actif dans ce réseau, activez le "port security" :

```bash
openstack port set --enable-port-security <port_ID>
```

Vous pouvez ensuite vérifier si le "port security" est activée sur un port en particulier :

```bash
openstack port show <port-ID> -f value -c port_security_enabled
```

Le résultat devrait être similaire à ceci :

<pre class="console"><code>$ openstack port show d7c237cd-8dee-4503-9073-693d986baff3 -f value -c port_security_enabled
False
</code></pre>

#### Pour un nouveau réseau privé :

La mise à niveau vers la version Stein sur les régions OpenStack et la nouvelle version d'Open vSwitch étant réalisées ([Private network port default configuration change](https://public-cloud.status-ovhcloud.com/incidents/z6qq4bcvsn11)), le paramètre de "port security" sera défini sur "True" par défaut sur tout réseau privé nouvellement créé.

Cela nous assurera de rester cohérents avec la politique "True" par défaut, comme sur les déploiements vanilla OpenStack.

### Paramètres par défaut

Chaque port réseau est attaché à un groupe de sécurité qui contient des règles spécifiques.

Le groupe de sécurité "default" contient les règles suivantes :

```bash
openstack security group rule list default

+--------------------------------------+-------------+-----------+-----------+------------+-----------------------+
| ID                                   | IP Protocol | Ethertype | IP Range  | Port Range | Remote Security Group |
+--------------------------------------+-------------+-----------+-----------+------------+-----------------------+
| 3a5564b7-5b68-4923-b796-26eb623c5b53 | None        | IPv6      | ::/0      |            | None                  |
| 43f2b673-9cbc-4bac-ad66-22ef4789d0fc | None        | IPv6      | ::/0      |            | None                  |
| a6a1ecfd-4713-4316-a020-74eccd49fd6c | None        | IPv4      | 0.0.0.0/0 |            | None                  |
| cd66a601-de94-4dbe-ae21-44792229d351 | None        | IPv4      | 0.0.0.0/0 |            | None                  |
+--------------------------------------+-------------+-----------+-----------+------------+-----------------------+
```

Le retour obtenu montre que toutes les connexions sont autorisées pour tout protocole et dans les deux sens.

Selon les régions, l'implémentation peut être différente mais le résultat est identique : toutes les connexions sont autorisées.

En conséquence, tous les ports réseau (publics et privés) permettent chaque connexion au démarrage d’une instance.

### Gérer les règles de votre firewall privé

#### Ajouter des règles

Si vous souhaitez configurer des règles spécifiques, vous pouvez créer un nouveau groupe de sécurité et lui associer votre port réseau.

Utilisez cette commande pour créer le groupe :

```bash
openstack security group create private

+-----------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Field           | Value                                                                                                                                                                      |
+-----------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| created_at      | 2021-11-05T15:14:37Z                                                                                                                                                       |
| description     | private                                                                                                                                                                    |
| id              | eeae05a8-c81e-40a4-a3aa-fdbebcbf72b4                                                                                                                                       |
| location        | cloud='', project.domain_id=, project.domain_name='Default', project.id='9ea425f44c284d488c6d8e28ccc8bff0', project.name='3614264792735868', region_name='GRA11', zone=    |
| name            | private                                                                                                                                                                    |
| project_id      | 9ea425f44c284d488c6d8e28ccc8bff0                                                                                                                                           |
| revision_number | 1                                                                                                                                                                          |
| rules           | created_at='2021-11-05T15:14:37Z', direction='egress', ethertype='IPv4', id='54fae025-3439-4e45-8745-2ffe5b261f72', revision_number='1', updated_at='2021-11-05T15:14:37Z' |
|                 | created_at='2021-11-05T15:14:37Z', direction='egress', ethertype='IPv6', id='ad1aa507-79bd-434f-b674-221ef41d9ba6', revision_number='1', updated_at='2021-11-05T15:14:37Z' |
| stateful        | None                                                                                                                                                                       |
| tags            | []                                                                                                                                                                         |
| updated_at      | 2021-11-05T15:14:37Z                                                                                                                                                       |
+-----------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
```

Cet exemple de groupe de sécurité n'a que des règles de sortie, ce qui signifie qu'aucune communication d'entrée ne sera autorisée.

Pour ajouter une règle pour, par exemple, les connexions SSH, vous pouvez utiliser la commande suivante :

```bash
openstack security group rule create --protocol tcp --dst-port 22 private

+-------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Field             | Value                                                                                                                                                                   |
+-------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| created_at        | 2021-11-05T15:19:37Z                                                                                                                                                    |
| description       |                                                                                                                                                                         |
| direction         | ingress                                                                                                                                                                 |
| ether_type        | IPv4                                                                                                                                                                    |
| id                | 8f026e18-1c8b-4042-8655-10c9a773d131                                                                                                                                    |
| location          | cloud='', project.domain_id=, project.domain_name='Default', project.id='9ea425f44c284d488c6d8e28ccc8bff0', project.name='3614264792735868', region_name='GRA11', zone= |
| name              | None                                                                                                                                                                    |
| port_range_max    | 22                                                                                                                                                                      |
| port_range_min    | 22                                                                                                                                                                      |
| project_id        | 9ea425f44c284d488c6d8e28ccc8bff0                                                                                                                                        |
| protocol          | tcp                                                                                                                                                                     |
| remote_group_id   | None                                                                                                                                                                    |
| remote_ip_prefix  | 0.0.0.0/0                                                                                                                                                               |
| revision_number   | 1                                                                                                                                                                       |
| security_group_id | eeae05a8-c81e-40a4-a3aa-fdbebcbf72b4                                                                                                                                    |
| tags              | []                                                                                                                                                                      |
| updated_at        | 2021-11-05T15:19:37Z                                                                                                                                                    |
+-------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
```

Entrez la commande suivante pour associer votre groupe de sécurité à votre port :

```bash
openstack port set --security-group private 5be009d9-fc2e-4bf5-a152-dab52614b02d
```

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.
