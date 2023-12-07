---
title: "Mettre en place un monitoring de Octavia Load Balancer avec Prometheus"
excerpt: "Découvrez les différentes options disponibles pour surveiller votre Load Balancer Octavia"
updated: 2023-12-07
---

## Objectif

Octavia offre plusieurs façons de surveiller vos Load Balancers. Vous pouvez effectuer des requêtes de statistiques via l'API Octavia ou directement depuis votre Load Balancer.

Ce guide vous présente les différentes options disponibles pour surveiller votre Load Balancer Octavia.

## En pratique

### Monitoring via l’API Octavia

Octavia collecte les métriques clés de tous les Load Balancers, y compris les Load Balancers construits avec des drivers de fournisseurs tiers qui prennent en charge la collecte de statistiques. Octavia agrège ces statistiques et les rend disponibles via l’API Octavia. Les statistiques du Load Balancer sont disponibles au niveau du Load Balancer ou du listener.

Les statistiques du Load Balancer peuvent être interrogées en utilisant le [client OpenStack](https://docs.openstack.org/python-openstackclient/latest/).

```bash
$ openstack loadbalancer stats show <lb id>

+--------------------+-----------+
| Field              | Value     |
+--------------------+-----------+
| active_connections | 0         |
| bytes_in           | 2236722   |
| bytes_out          | 100973832 |
| request_errors     | 0         |
| total_connections  | 3606      |
+--------------------+-----------+
```

Les statistiques de listeners individuels peuvent également être interrogés à l'aide du [client OpenStack](https://docs.openstack.org/python-openstackclient/latest/).

```bash
$ openstack loadbalancer listener stats show <listener id>

+--------------------+-------+
| Field              | Value |
+--------------------+-------+
| active_connections | 0     |
| bytes_in           | 89    |
| bytes_out          | 237   |
| request_errors     | 0     |
| total_connections  | 1     |
+--------------------+-------+
```

Les statistiques du Load Balancer interrogées via l'API Octavia incluent des métriques pour tous les protocoles des listeners.

### Monitoring avec Prometheus

Certains drivers de fournisseurs, tels que le driver Octavia amphora, fournissent un point de terminaison Prometheus. Cela vous permet de configurer votre infrastructure Prometheus pour collecter des métriques des Load Balancers Octavia.

Pour ajouter un point de terminaison Prometheus sur un Load Balancer Octavia, créez un listener avec un protocole spécial `PROMETHEUS`. Cela activera le point de terminaison en tant qye `/metrics` sur le listener. Le listener prend en charge toutes les fonctionnalités d'un Load Balancer Octavia, telles que `allowed_cidrs,` mais ne prend pas en charge les pools attachés ou les stratégies L7. Toutes les métriques seront identifiées par les ID d'objet Octavia (UUID) des ressources.

> [!primary]
>
> Actuellement, lors de l'utilisation du fournisseur amphora, les métriques UDP et SCTP ne sont pas signalées via les points de terminaison Prometheus.
>

Pour créer un point de terminaison Prometheus sur le port 8088 pour le Load Balancer lb1, exécutez la commande suivante :

```bash
$ openstack loadbalancer listener create --name stats-listener --protocol PROMETHEUS --protocol-port 8088 lb1

+-----------------------------+--------------------------------------+
| Field                       | Value                                |
+-----------------------------+--------------------------------------+
| admin_state_up              | True                                 |
| connection_limit            | -1                                   |
| created_at                  | 2023-11-30T01:44:25                  |
| default_pool_id             | None                                 |
| default_tls_container_ref   | None                                 |
| description                 |                                      |
| id                          | fb57d764-470a-4b6b-8820-627452f55b96 |
| insert_headers              | None                                 |
| l7policies                  |                                      |
| loadbalancers               | b081ed89-f6f8-48cb-a498-5e12705e2cf9 |
| name                        | stats-listener                       |
| operating_status            | OFFLINE                              |
| project_id                  | 4c1caeee063747f8878f007d1a323b2f     |
| protocol                    | PROMETHEUS                           |
| protocol_port               | 8088                                 |
| provisioning_status         | PENDING_CREATE                       |
| sni_container_refs          | []                                   |
| timeout_client_data         | 50000                                |
| timeout_member_connect      | 5000                                 |
| timeout_member_data         | 50000                                |
| timeout_tcp_inspect         | 0                                    |
| updated_at                  | None                                 |
| client_ca_tls_container_ref | None                                 |
| client_authentication       | NONE                                 |
| client_crl_container_ref    | None                                 |
| allowed_cidrs               | None                                 |
| tls_ciphers                 | None                                 |
| tls_versions                | None                                 |
| alpn_protocols              | None                                 |
| tags                        |                                      |
+-----------------------------+--------------------------------------+
```

Une fois que le listener `PROMETHEUS` est `ACTIVE`, vous pouvez configurer Prometheus pour collecter des métriques à partir du Load Balancer en mettant à jour le fichier `prometheus.yml`.

```yaml
[scrape_configs]
- job_name: 'Octavia LB1'
  static_configs:
  - targets: ['192.0.2.10:8088']
```

Pour plus d’informations sur la mise en place de Prometheus, consultez le [site web du projet Prometheus](https://prometheus.io/).

> [!primary]
>
> Les métriques exposées via le point de terminaison `/metrics` utiliseront un namespace Octavia personnalisé.
>

Vous pouvez connecter [Grafana](https://grafana.com) à l'instance [Prometheus](https://prometheus.io) pour fournir des fonctionnalités supplémentaires de représentation graphique et de tableau de bord. Un tableau de bord Grafana pour les Load Balancers Octavia est inclus dans le répertoire `etc/grafana` du code Octavia.

## Aller plus loin

Si vous avez besoin d'une formation ou d'une assistance technique pour la mise en oeuvre de nos solutions, contactez votre commercial ou cliquez sur [ce lien](https://www.ovhcloud.com/fr/professional-services/) pour obtenir un devis et demander une analyse personnalisée de votre projet à nos experts de l’équipe Professional Services.

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.

Rejoignez notre [Discord](https://discord.gg/PwPqWUpN8G) pour discuter avec les membres de l'équipe OVHcloud et d'autre utilisateurs.