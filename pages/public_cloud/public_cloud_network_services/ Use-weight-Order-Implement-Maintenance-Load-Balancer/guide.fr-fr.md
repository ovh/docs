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

```htlm
<html><head><title>Load Balanced Member 1</title></head><body><h1>You hit your OVHCloud load balancer member #1 !</h1></body></html>
<html><head><title>Load Balanced Member 0</title></head><body><h1>You hit your OVHCloud load balancer member #0 !</h1></body></html>
```

### Modifier le poids d’un membre à 0

Pour stopper l'envoi de trafic vers un membre spécifique, ajustez son poids à 0 :

```bash
openstack loadbalancer member set --weight 0 <pool> <member_0>
```
Le membre restera dans le pool, mais ne recevra plus de trafic.

### Étape 3 : Vérifier le statut du membre

Après avoir défini le poids à 0, le statut du membre passera de **ONLINE** à **DRAINING**. **Il est important de noter que dans l'état actuel du système, le membre restera en statut DRAINING même après que tout le trafic ait été drainé.**

Cela peut prêter à confusion, car certains utilisateurs s'attendent à un état final **DRAINED** lorsque tout le trafic a été complètement redirigé. Cependant, le système ne change pas automatiquement le statut en **DRAINED**. 

- **DRAINING** signifie simplement que le membre ne reçoit plus de trafic, et non qu'il est encore en train de drainer activement. 
- L'état **DRAINED** n'est pas encore pris en charge dans l'API OpenStack actuelle.

Si un état final comme **DRAINED** est essentiel pour vos processus, il est recommandé de soumettre une demande de fonctionnalité à OVHcloud pour l'ajout de cette fonctionnalité dans une future mise à jour.

Vous pouvez utiliser la commande suivante pour vérifier le statut du membre :

```bash
openstack loadbalancer member list <pool_name>
```

Vous devriez voir :

```bash

---------------------------------------------------------------------------------------------------
id                                   name       provisioning_status  operating_status   weight
---------------------------------------------------------------------------------------------------
27cfe834-7fef-4548-b71b-fa0ce67222f8 member_1   ACTIVE               ONLINE             1
118756ba-2cae-4141-b9c2-8b18b120c8dc member_0   ACTIVE               DRAINING           0
---------------------------------------------------------------------------------------------------

```

### Étape 4 : Confirmer que le trafic est dirigé vers le membre actif

Exécutez à nouveau le script de test. Vous devriez voir uniquement des réponses de `member_1` :

```htlm
<html><head><title>Load Balanced Member 1</title></head><body><h1>You hit your OVHCloud load balancer member #1 !</h1></body></html>
```

### Étape 5 : Effectuer la maintenance

Maintenant que `member_0` ne reçoit plus de trafic, vous pouvez procéder à la maintenance ou aux mises à jour en toute sécurité.

### Étape 6 : Restaurer le trafic vers le membre

Une fois la maintenance terminée, rétablissez le poids de `member_0` à sa valeur initiale (par exemple, 1) :

```bash
openstack loadbalancer member set --weight 1 <pool> <member_0>
```

Vérifiez que les deux membres reçoivent à nouveau du trafic :

```bash
openstack loadbalancer member list <pool_name>
```

Vous devriez voir les deux membres avec le statut `ONLINE` :

```bash

---------------------------------------------------------------------------------------------------
id                                   name       provisioning_status  operating_status   weight
---------------------------------------------------------------------------------------------------
27cfe834-7fef-4548-b71b-fa0ce67222f8 member_1   ACTIVE               ONLINE             1
118756ba-2cae-4141-b9c2-8b18b120c8dc member_0   ACTIVE               ONLINE             1
---------------------------------------------------------------------------------------------------

```

## Aller plus loin
 
Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.


