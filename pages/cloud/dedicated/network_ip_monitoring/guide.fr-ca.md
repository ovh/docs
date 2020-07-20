---
title: Quelles sont les adresses IP du monitoring OVHcloud ?
slug: monitoring-ip-ovh
excerpt: Retrouvez ici les adresses IP a renseigner lors de la mise en place d’un firewall pour que le monitoring OVHcloud continue de fonctionner sur votre serveur.
section: Réseau & IP
---


## Prérequis
Le service de monitoring permet de suivre l’état de votre machine et de déclencher automatiquement l’intervention d’un technicien dans le datacentre.

Tous les serveurs de nos clients ainsi que l'ensemble du réseau sont surveillés 24h/24 et 7j/7 par les équipes techniques d'OVHcloud.

OVHcloud intervient dès le déclenchement d'une alerte (non réponse aux pings) afin de limiter au maximum le temps d'indisponibilité des serveurs et du réseau.

Pour mettre en place un firewall restrictif, notamment sur l'ICMP, et continuer de bénéficier du monitoring OVHcloud, il est nécessaire d'autoriser les IPs que vous trouverez ci-après.

Pour ce faire, vous devez disposer de :

- Un produit OVHcloud sur lequel vous avez installé un Firewall.
- Avoir accès aux règles du Firewall.


## IP a autoriser
|Reverse|IP|Protocole|
|---|---|---|
|mrtg-rbx-100|37.187.231.251|icmp|
|mrtg-sbg-100|37.187.231.251|icmp|
|mrtg-gra-100|37.187.231.251|icmp|
|mrtg-bhs-100|37.187.231.251|icmp|
|mrtg-rbx-101|151.80.231.244|icmp|
|mrtg-rbx-102|151.80.231.245|icmp|
|mrtg-rbx-103|151.80.231.246|icmp|
|mrtg-gra-101|151.80.231.247|icmp|
|a2.ovh.net|213.186.33.62|icmp|
|---|---|---|
||92.222.184.0/24|icmp|
||92.222.185.0/24|icmp|
||92.222.186.0/24|icmp|
||167.114.37.0/24|icmp|
|---|---|---|
|proxy.p19.ovh.net|213.186.45.4|icmp|
|proxy.rbx.ovh.net|213.251.184.9|icmp|
|proxy.sbg.ovh.net|37.59.0.235|icmp|
|proxy.bhs.ovh.net|8.33.137.2|icmp|
|ping.ovh.net|213.186.33.13|icmp|
|proxy.ovh.net|213.186.50.98|icmp|
|---|---|---|
||xxx.xxx.xxx.250 (xxx.xxx.xxx.aaa étant l'ip du serveur)|icmp|
||xxx.xxx.xxx.251 (xxx.xxx.xxx.aaa étant l'IP du serveur)|icmp + port surveillé par le service monitoring|

**La communication entre le service RTM et votre serveur nécessite également que vous autorisiez les connexions entrantes et sortantes sur les ports UDP 6100 à 6200.**



> [!primary]
>
> Si votre serveur est situé à Roubaix 3, il faut récupérer la dernière IP via tcpdump.
>
> ```
> tcpdump host ip.fixe.du.serveur | grep ICMP
> ```
>
