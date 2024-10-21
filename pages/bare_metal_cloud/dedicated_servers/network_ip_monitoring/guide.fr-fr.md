---
title: Quelles sont les adresses IP du monitoring OVHcloud ?
excerpt: Retrouvez ici les adresses IP a renseigner lors de la mise en place d’un firewall, afin que le monitoring OVHcloud continue de fonctionner sur votre serveur.
updated: 2024-09-06
---

## Objectif

Le service de monitoring permet de suivre l’état de votre machine et de déclencher automatiquement l’intervention d’un technicien dans le datacentre.

Tous les serveurs de nos clients ainsi que l'ensemble du réseau sont surveillés 24h/24 et 7j/7 par les équipes techniques d'OVHcloud.

OVHcloud intervient dès le déclenchement d'une alerte (non réponse aux pings) afin de limiter au maximum le temps d'indisponibilité des serveurs et du réseau.

Pour mettre en place un firewall restrictif, notamment sur l'ICMP, et continuer de bénéficier du monitoring OVHcloud, il est nécessaire d'autoriser les adresses IP que vous trouverez ci-après.

## Prérequis

- Un produit OVHcloud sur lequel vous avez installé un Firewall.
- Avoir accès aux règles du Firewall.

## En pratique

### Adresses IP à autoriser

|Reverse|IP|Protocole|
|---|---|---|
|netmon-rbx-probe|92.222.184.0/24|icmp|
|netmon-sbg-probe|92.222.185.0/24|icmp|
|netmon-gra-probe|92.222.186.0/24|icmp|
|netmon-bhs-probe|167.114.37.0/24|icmp|
|netmon-sgp-probe|139.99.1.144/28|icmp|
|netmon-waw-probe|193.70.125.118/32|icmp|
|ping.ovh.net|213.186.33.13|icmp|
|---|---|---|
||xxx.xxx.xxx.250 (xxx.xxx.xxx.aaa étant l'IP du serveur)|icmp|
||xxx.xxx.xxx.251 (xxx.xxx.xxx.aaa étant l'IP du serveur)|icmp + port surveillé par le service monitoring|

**La communication entre le service RTM et votre serveur nécessite également que vous autorisiez les connexions entrantes et sortantes sur les ports UDP 6100 à 6200.**

> [!primary]
>
> Si votre serveur est situé à Roubaix 3, il faut récupérer la dernière IP via tcpdump :
> <pre class="highlight language-console"><code class="language-console">tcpdump host server_ip | grep ICMP</code></pre>

### Activer ou désactiver le monitoring

Tout d’abord, connectez-vous à votre [espace client OVHcloud](/links/manager){.external} et sélectionnez l'onglet `Bare Metal Cloud`{.action}. Sélectionnez le serveur concerné dans le menu déroulant `Serveurs dédiés`{.action}.

Vous pouvez activer ou désactiver le monitoring d'un serveur dédié à partir de l'onglet `Informations générales`{.action}. L'option se situe dans la section `État des services`.

![Monitoring](images/monitoring-server.png){.thumbnail}

Cliquez sur le bouton `Configurer`{.action}. Dans la fenêtre qui apparaît, vous avez trois options pour le comportement du monitoring :

- **Désactivé** : cette option interrompt les messages d'alerte et les interventions d'OVHcloud. Choisissez cette option si vous exécutez des actions d'administration spécifiques sur le serveur et qui empêchent une réponse ICMP.
- **Activé avec intervention proactive** : si le serveur ne répond plus, un e-mail d'alerte vous est envoyé et le serveur est vérifié par un technicien.
- **Activé sans intervention proactive** : vous recevrez un message d'alerte par e-mail au cas où le serveur ne répondrait plus. Pour lancer une intervention, il est nécessaire de créer une demande d'assistance.

![Monitoring](images/monitoring-server2.png){.thumbnail}

Cliquez sur `Confirmer`{.action} pour mettre à jour votre configuration du monitoring.

## Aller plus loin

[Configurer le Network Firewall](/pages/bare_metal_cloud/dedicated_servers/firewall_network)

Rejoignez notre communauté d'utilisateurs sur <https://community.ovh.com/>.
