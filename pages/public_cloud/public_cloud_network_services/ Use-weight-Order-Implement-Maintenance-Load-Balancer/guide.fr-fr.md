---
title: 'Utilisation du poids pour effectuer une maintenance sur un membre du Load Balancer'
excerpt: 'Apprenez à ajuster le poids d’un membre d’un Load Balancer pour réaliser une maintenance sans le retirer du pool.'
updated: 2024-09-13
---

## Objectif

Découvrez comment utiliser la fonctionnalité de poids pour retirer temporairement un membre d'un Load Balancer du flux de trafic, afin de réaliser une maintenance sans interruption de service. En ajustant le poids à 0, le membre ne recevra plus de trafic, ce qui vous permet d'effectuer des mises à jour en toute sécurité.

## Prérequis

- Un compte OVHcloud Public Cloud.
- Un [Load Balancer configuré avec plusieurs membres](/pages/network/load_balancer/create_http_https/).
- [OpenStack CLI installé et configuré](/pages/public_cloud/compute/prepare_the_environment_for_using_the_openstack_api/).

## En pratique

### Étape 1 : Créer un Load Balancer avec deux membres

Utilisez le dépôt suivant pour créer un Load Balancer avec deux membres :

- [simple_http_lb](https://github.com/yomovh/tf-at-ovhcloud/tree/main/simple_http_lb)

Vérifiez que les deux membres reçoivent du trafic en exécutant ce script :

```bash
#!/bin/sh

while true; do
  curl http://<FIP>/
  sleep 1
done
```
Vous devriez voir des réponses alternées des deux membres :
