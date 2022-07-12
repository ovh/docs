---
title: Gestion des règles de firewall et sécurité des ports sur les réseaux privés
slug: firewall_security_pci
excerpt: Découvrez le fonctionnement des groupes de sécurité sur Public Cloud
section: Gestion via OpenStack
---

**Dernière mise à jour le 16/06/2022**

## Objectif

La plateforme OpenStack gère la sécurité des pare-feu en combinant les règles de connexion en **groupes de sécurité**. Les règles sont ensuite appliquées en affectant des groupes de sécurité aux ports réseau.

Un **port** dans le cadre d'[OpenStack Neutron](https://docs.openstack.org/neutron/latest/index.html){.external} est un point de connexion entre les sous-réseaux et les éléments réseau (tels que des instances, load-balancers, routeurs, etc...).

**Découvrez comment sont gérés les groupes de sécurité pour les réseaux privés sur Public Cloud.**

> [!primary]
>
> Ce guide ne concerne que les configurations de réseaux privés. En ce qui concerne les réseaux publics, les règles de firewall sont globales.
>
> Nous vous invitons à prendre connaissance des [détails de la migration](#migration) ci-dessous concernant les changements apportés aux [régions](#regions) Public Cloud OpenStack.
>

## Prérequis

- [Préparer l’environnement pour utiliser l’API OpenStack](https://docs.ovh.com/ca/fr/public-cloud/preparer-lenvironnement-pour-utiliser-lapi-openstack/)
- [Charger les variables d’environnement OpenStack](https://docs.ovh.com/ca/fr/public-cloud/charger-les-variables-denvironnement-openstack/)

## En pratique

### Paramètres par défaut

Chaque port réseau est attaché à un groupe de sécurité qui contient des règles spécifiques.

Le groupe de sécurité « default » contient les règles suivantes :

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

Si vous souhaitez configurer des règles spécifiques, vous pouvez modifier le groupe de sécurité par défaut. Vous pouvez également créer un nouveau groupe de sécurité et lui associer votre port réseau.

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

#### Différences de comportement selon les régions <a name="regions"></a>

La configuration par défaut du réseau privé peut être différente selon la région utilisée.

> [!primary]
> Dans certaines régions, la propriété « port security » est considérée comme *enabled* même si elle n'applique aucune règle sur le réseau privé. Sur certaines autres régions (en fonction de la version d'OpenStack déployée), la propriété « port security » est vue comme *enabled* et les règles sont correctement appliquées sur le réseau privé.
> 

En résumé, les régions suivantes exécutent Newton OpenStack release et **aucune règle de pare-feu ne fonctionnera** pour vos réseaux privés, même si la sécurité des ports est activée :

- Singapour : SGP1
- Sydney : SYD1
- Hillsboro : US-WEST-OR-1
- Vint Hill : US-EAST-VA-1

Dans les régions suivantes (exécutant la version Stein OpenStack), les règles de pare-feu pour les réseaux privés **fonctionneront** comme prévu :

- Beauharnois : BHS1, BHS3, BHS5
- Francfort : DE1
- Gravelines : GRA1, GRA3, GRA5, GRA7, GRA9, GRA11
- Strasbourg : SBG5, SBG7
- Londres : UK1
- Varsovie : WAW1

OVHcloud va progressivement mettre à niveau toutes les régions de Newton vers Stein, afin que la fonctionnalité « port security » soit disponible.

Afin d'éviter toute interruption de service pendant la mise à jour, la valeur *False* sera attribuée à la propriété « port security » sur tous les réseaux déjà créés. Une fois qu'une région sera mise à niveau dans la version Stein OpenStack, si vous souhaitez utiliser des règles de pare-feu sur des réseaux privés, vous devrez définir la propriété « port security » sur *True*.

Excéutez la commande suivante pour vérifier si la propriété « port security » est activée sur votre port de réseau privé :

```bash
openstack port show d7c237cd-8dee-4503-9073-693d986baff3 -f value -c port_security_enabled
False
```

### Processus de migration <a name="migration"></a>

La mgration suivra le processus ci-dessous :

- Les règles de firewall pour les nouveaux ports ne seront pas appliquées tant que vous n'aurez pas activé la propriété « port security » sur le nouveau port. Rien ne change pour les ports existants.
- Les régions OpenStack passeront à la version Stein.
- Les regions OpenStack en version Stein passeront sur une nouvelle version d'OpenVSwitch.

> [!primary]
> À partir de cette étape, pour les utilisateurs de Terraform, il est nécessaire de forcer le paramétrage du [port security à "false"](https://registry.terraform.io/providers/terraform-provider-openstack/openstack/latest/docs/resources/networking_network_v2#port_security_enabled){.external} pour que les playbooks puissent fonctionner.
>

- Vous pourrez activer « port security » sur les régions Stein.
- Le « port security » par défaut sera modifié en **activé** (une communication globale sera envoyée en temps voulu).
- Les règles de firewall fonctionneront pour les nouveaux ports. Rien ne change pour les ports existants.
- L'option permettant d'activer la propriété « port security » sur les ports existants sera activée.

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.
