---
title: 'Mettre en place votre propre solution de monitoring'
slug: build-your-own-monitoring-solution
excerpt: 'Mettre en place votre propre solution de monitoring de vos accès Internet en utilisant OVHcloud Insight et Grafana'
section: 'Diagnostic et dépannage'
order: 5
---

> [!primary]
> Une version en langue anglaise de ce guide est disponible [ici](https://docs.ovh.com/gb/en/xdsl/build-your-own-monitoring-solution/)
>

**Dernière mise à jour le 05/02/2021**

## Objectif

OVH propose avec sa solution Insight de partager les métriques de vos services pour les intégrer à vos propres solutions.

**Découvrez comment activer Insight et mettre en place votre premier tableau de bord Grafana pour monitorer vos accès Internet.**

## Prérequis

* Disposer d’un [accès internet xDSL ou fibre OVHcloud](https://www.ovhtelecom.fr/offre-internet/){.external};
* La configuration à distance est de votre modem doit être activée.

## En pratique

### Etape 1 : Récupérer votre jeton de lecture de métrique OVH Insight

1. Rendez-vous sur la console APIv6 à cette adresse : [https://api.ovh.com/console/](https://api.ovh.com/console/){.external}

2. Authentifiez-vous avec vos indentifiants OVHcloud

3. Executez la méthode suivante pour récupérer votre jeton de lecture :

> [!api]
>
> @api {GET} /me/insight
>

![apiGetInsightToken](images/token.png){.thumbnail}

4. Enregistrez de manière sécurisé votre jeton de lecture retourné sous la clé `access`.

### Etape 2 : Mettre en place votre premier tableau de bord Grafana

1. Rendez-vous sur l'interface Grafana fournie par OVHcloud à l'adresse : [https://grafana.metrics.ovh.net](https://grafana.metrics.ovh.net){.external}

2. Authentifiez-vous avec vos indentifiants OVHcloud

3. Choisissez `Add data source`{.action}

![grafanaAddSource](images/grafana1.png){.thumbnail}

4. Configurez la source de donnée tel que :

```
Name : Insight Warp10

Type : Warp10

Url  : https://warp10.insight.eu.metrics.ovh.net
```

5. Ajoutez une constante nommée `token` en utilisant votre jeton de lecture OVHcloud Insight

![grafanaAddConstant](images/grafana2.png){.thumbnail}

6. Cliquez sur `Add`{.action} pour finaliser

7. Cliquez sur l'icône Grafana en haut à gauche et choisissez dans le menu : `Dashboard`{.action}, puis `Import`{.action}

8. Uploader le template suivant : [internet-access-grafana-dashboard-v1.json](http://files.isp.ovh.net/grafana/internet-access-grafana-dashboard-v1.json)

9. Cliquez sur `Import`{.action} pour finaliser

![grafanaDashboard](images/grafana3.png){.thumbnail}

> [!primary]
>
> Félicitations !
>
> Vous avez maintenant votre premier tableau de bord Grafana de surveillance de vos accès Internet OVHcloud.
>


Les informations suivantes sont actuellement disponibles pour vos accès Internet :

* traffic entrant et sortant,

* latence.


Et si votre modem est compatible :

* synchronisation,

* SNR *(Signal to Noise Ratio)*,

* atténuation,

* erreurs CRC *(Contrôle de Redondance Cyclique)*,

* uptime de la synchronisation, de la connection et du modem.
