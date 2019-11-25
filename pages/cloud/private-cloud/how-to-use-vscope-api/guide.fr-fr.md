---
title: 'Comment utiliser l’API de vScope'
slug: vscopeapi
excerpt: 'L’API vScope vous permet d’utiliser les données de monitoring dans vos applications'
section: 'Services et options OVH'
order: 1
---

**Dernière mise à jour le 25/11/2019**

## Objectif

OVHcloud vous met à disposition un outil de supervision et de monitoring de vos machines virtuelles et de votre infrastructure qui se nomme **vScope**.

Il s’agit d’une page web où sont rassemblées toutes les informations utiles concernant l'usage de vos ressources.

Ces informations sont également disponibles via l'APIv6 et l'API Metrics.

**Ce guide décrit l'utilisation de ces APIs**.

## En pratique

Le vScope met à disposition deux types d'informations :

- des informations **live**, qui correspondent aux informations des différents composants à un instant T.
- des graphiques présentant les données historiques de performance des différents composants. Ex: CPU, RAM d'une machine virtuelle.


### Collecter les données **live**

Les données **live**  sont les données disponibles depuis la page principale de l'interface vScope.

![vScope-API](images/vScope1.png){.thumbnail}

Vous pourrez récupérer ces données **live** pour les composants suivants :

- filers
- hosts
- virtual machines

L'utilisation de l'API se fait via ces trois appels APIv6 :

#### Filers

> [!api]
>
> @api {GET} /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/filer/{filerId}
>

#### Hosts

> [!api]
>
> @api {GET} /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/host/{hostId}
> 

#### Machine virtuelles

> [!api]
> 
> @api {GET} /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/vm/{vmId}
> 

### Collecter les données historiques (Graphs)

Pour collecter et utiliser les données historiques (Graphs), nous utilisons le produit **Metrics Data Platforms**.

Via le protocol Opentsdb ou WARP10, vous allez pouvoir récupérer vos données sous forme de points. Vous pourrez exploiter ces points via votre application ou directement les afficher selon le rendu souhaité.


Cet article couvrira l'utilisation du protocol Opentsdb pour un affichage brut des données (pas de rendu graphique).

Pour pouvoir utiliser **Metrics Data Platforms**, vous aurez besoin d'obtenir un token de lecture. Avec la nouvelle version du vScope, chaque utilisateur de l'infrastructure possède un token de lecture. 

Pour l'utilisateur souhaité, utilisez l'appel APIv6 suivant pour récupérer le token de lecture :

> [!api]
> 
> @api {POST} /dedicatedCloud/{serviceName}/user/{userId}/getVscopeMetricsToken
> 

Votre token se trouve dans le champ **token** du résultat.

```json
{
    "warpEndpoint": "https://warp10.gra1-ovh.metrics.ovh.net",
    "token": "XXXXXXXXXXXX_XXXXXXXXXXXZZZZZZZZZZZ_YYYYYYYYYYYYYY-XXXXXXXXX",
    "opentsdbEndpoint": "https://opentsdb.gra1-ovh.metrics.ovh.net"
}
```

Pour chaque type de composant, une liste de métriques est disponible et nécessite un nombre de paramètres (aussi appelé labels) très précis.

#### Filers

| Métriques | Description | Labels |
| ----------- | ----------- | ----------- |
| vscope.filer.datastore.diskspace.used | Utilisation du filer en kB | datacenter : pcc-37-187-228-180\_datacenter869, <br>datastore : pcc-000443 |

#### Hosts

| Métriques | Description | Labels |
| ----------- | ----------- | ----------- |
| vscope.host.cpu.usage.perc | Utilisation processeur du host en pourcent | - datacenter : pcc-37-187-228-180\_datacenter869, <br>- host : 172.17.86.51 |
| vscope.host.mem.usage.perc | Utilisation mémoire du host en pourcent | - datacenter : pcc-37-187-228-180\_datacenter869, <br>- host : 172.17.86.51 |
| vscope.host.net.tx | Utilisation réseau du host en émission | - datacenter : pcc-37-187-228-180\_datacenter869, <br>- host : 172.17.86.51<br>- nicname : vmnic0/vmnic1/vmnic2/vmnic3 |
| vscope.host.net.rx | Utilisation réseau du host en réception | - datacenter : pcc-37-187-228-180\_datacenter869, <br>- host : 172.17.86.51<br>- nicname : vmnic0/vmnic1/vmnic2/vmnic3 |
| vscope.host.net.packetstx | Nombre de packets réseau transmis du host | - datacenter : pcc-37-187-228-180\_datacenter869, <br>- host : 172.17.86.51<br>- nicname : vmnic0/vmnic1/vmnic2/vmnic3 |
| vscope.host.net.packetsrx | Nombre de packets réseau reçus du host | - datacenter : pcc-37-187-228-180\_datacenter869, <br>- host : 172.17.86.51<br>- nicname : vmnic0/vmnic1/vmnic2/vmnic3 |

#### Machine Virtuelles

| Métriques | Description | Labels |
| ----------- | ----------- | ----------- |
| vscope.vm.cpu.usage.perc | Utilisation processeur de la vm en pourcent | - datacenter : pcc-37-187-228-180\_datacenter869, <br>- vm : vm-01254 |
| vscope.vm.mem.usage.perc | Utilisation mémoire de la vm en pourcent | - datacenter : pcc-37-187-228-180\_datacenter869, <br>- vm : vm-01254 |
| vscope.vm.cpu.ready |CPU Ready de la vm en millisecond | - datacenter : pcc-37-187-228-180\_datacenter869, <br>- vm : vm-01254 |
| vscope.vm.net.rx | Utilisation réseau de la vm en réception | - datacenter : pcc-37-187-228-180\_datacenter869, <br>- vm : vm-01254 |
| vscope.vm.net.tx | Utilisation réseau de la vm en transmission | - datacenter : pcc-37-187-228-180\_datacenter869, <br>- vm : vm-01254 |
| vscope.vm.net.packetsrx | Nombre de packets réseau reçus de la vm | - datacenter : pcc-37-187-228-180\_datacenter869, <br>- vm : vm-01254 |
| vscope.vm.net.packetstx | Nombre de packets réseau transmis de la vm | - datacenter : pcc-37-187-228-180\_datacenter869, <br>- vm : vm-01254 |
| vscope.vm.disk.io.read | Nombre d'IO en lecture par seconde de la vm | - datacenter : pcc-37-187-228-180\_datacenter869, <br>- vm : vm-01254 |
| vscope.vm.disk.io.write | Nombre d'IO en écriture par seconde de la vm | - datacenter : pcc-37-187-228-180\_datacenter869, <br>- vm : vm-01254 |
| vscope.vm.disk.bandwidth.read |  Bande passante du disk de la vm en lecture | - datacenter : pcc-37-187-228-180\_datacenter869, <br>- vm : vm-01254 |
| vscope.vm.disk.bandwidth.write | Bande passante du disk de la vm en écriture | - datacenter : pcc-37-187-228-180\_datacenter869, <br>- vm : vm-01254 |
| vscope.vm.disk.latency.read | Latence du disque de la vm en lecture | - datacenter : pcc-37-187-228-180\_datacenter869, <br>- vm : vm-01254 |
| vscope.vm.disk.latency.write | Latence du disque de la vm en écriture | - datacenter : pcc-37-187-228-180\_datacenter869, <br>- vm : vm-01254 |

#### Exemple de collecte en utilisant le protocol OpenTSDB

Maintenant que vous avez récupéré votre token, votre endpoint, et que vous avez la liste des métriques, vous allez récupérer les données d'utilisation mémoire d'un host sur une période de 1 jour.

Veuillez trouver ci-dessous un exemple de requête.

```
curl -XPOST https://read:XXXXXXXXXXXX_XXXXXXXXXXXZZZZZZZZZZZ_YYYYYYYYYYYYYY-XXXXXXXXX@opentsdb.gra1-ovh.metrics.ovh.net/api/query
-d '{ 
    "start":1564407950, 
    "queries":[ 
        { 
            "metric":"vscope.host.mem.usage.perc", 
            "aggregator":"sum",
            "downsample":"20m-max-zero",
            "tags": {
                "datacenter":"pcc-37-187-228-180_datacenter869",
                "host":"172.17.86.51" 
            } 
        } 
    ] 
}'
```

Explication des différents champs utilisés :

- read : user utilisé pour effectuer la requête (sera toujours read);
- XXXXXXXXXXXX_XXXXXXXXXXXZZZZZZZZZZZ_YYYYYYYYYYYYYY-XXXXXXXXX : token précédemment récupéré via l'APIv6;
- opentsdb.gra1-ovh.metrics.ovh.net : endpoint OpenTSDB, également récupéré via l'APIv6. Ce endpoint peut varier selon votre localisation;
- start : timestamp correspondant à la date de début de la requête;
- queries : tableau contenant les metriques à récupérer. Plusieurs métriques peuvent être récupérées en une seule requête;
- metric : nom de la métrique à récupérer;
- aggregator : nom de la fonction d'agrégation (se reporter à la documentation OpenTSDB pour plus de détails);
- downsample : nom de la fonction d'échantillonnage (permet de réduire le nombre de donnée à récupérer. Paramètre optionnel);
- tags : liste des labels sous la forme clé / valeur;

D'autres paramètres peuvent également être fournis. Veuillez vous reporter à la documentation de l'api OpenTSDB pour plus de détails.

Vous aurez alors en retour un json avec le récapitulatif de la requête, ainsi que les timestamps associés à leur valeur dans le champ **dps**.
Exemple :

```json
[
    {
        "metric":"vscope.host.mem.usage.perc",
        "tags":{
            "datacenter":"pcc-37-187-228-180_datacenter869",
            "env":"prod",
            "host":"172.17.86.51",
            "servicename":"pcc-37-187-228-180",
            "servicetype":"vscope"
        },
        "query":{
            "index":0
        },
        "aggregateTags":[],
        "dps":{
            "1564409391":4.38,
            "1564410591":4.35,
            "1564411791":4.37,
            "1564412991":4.38,
            "1564414191":4.35,
            "1564415391":4.38,
            "1564416591":4.35,
            "1564417791":4.36,
            "1564418991":4.36,
            "1564420191":4.37,
            "1564421391":4.37,
            "1564422591":4.37,
            "1564423791":4.37,
            "1564424991":4.38,
            "1564426191":4.36,
            "1564427391":4.35,
            "1564428591":4.37,
            "1564429791":4.36,
            "1564430991":4.38,
            "1564432191":4.35,
            "1564433391":4.37,
            "1564434591":4.36,
            "1564435791":4.37,
            "1564436991":4.37,
            "1564438191":4.37,
            "1564439391":4.38,
            "1564440591":4.36,
            "1564441791":4.36,
            "1564442991":4.37,
            "1564444191":4.37,
            "1564445391":4.35,
            "1564446591":4.36,
            "1564447791":4.36,
            "1564448991":4.36,
            "1564450191":4.35,
            "1564451391":4.37,
            "1564452591":4.37,
            "1564453791":4.35,
            "1564454991":4.36,
            "1564456191":4.37,
            "1564457391":4.37,
            "1564458591":4.36,
            "1564459791":4.37,
            "1564460991":4.34,
            "1564462191":4.36,
            "1564463391":4.34,
            "1564464591":4.37,
            "1564465791":4.34,
            "1564466991":4.37,
            "1564468191":4.34,
            "1564469391":4.36,
            "1564470591":4.36,
            "1564471791":4.36,
            "1564472991":4.37,
            "1564474191":4.37,
            "1564475391":4.36,
            "1564476591":4.35,
            "1564477791":4.36,
            "1564478991":4.35,
            "1564480191":4.35,
            "1564481391":4.37,
            "1564482591":4.36,
            "1564483791":4.34,
            "1564484991":4.37,
            "1564486191":4.38,
            "1564487391":4.35,
            "1564488591":4.34,
            "1564489791":4.36,
            "1564490991":4.35,
            "1564492191":4.36,
            "1564493391":4.36,
            "1564494591":4.36
        }
    }
]
```

Pour plus de détails sur les requêtes OpenTSDB, vous pouvez vous reporter à la documentation suivante : [OpenTSDB api query](http://opentsdb.net/docs/build/html/api_http/query/index.html)

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.
