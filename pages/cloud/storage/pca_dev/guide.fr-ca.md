---
title: Guide du développeur
slug: pca/dev
excerpt: OVH Public Cloud Archive référence pour les développeurs.
section: Public Cloud Archive
order: 10
---


## Qu'est-ce que OVH Public Cloud Archive?
[OVH Public Cloud Archive](https://www.ovhcloud.com/fr-ca/public-cloud/cloud-archive/){.external} est une solution de stockage extrêmement peu coûteuse destinée à l'archivage de données à long terme.

OVH Public Cloud Archive est soutenu par [Openstack Swift](https://swift.openstack.org){.external}, un magasin d'objets à code source ouvert, hautement disponible, distribué et éventuellement cohérent. Il donne aux développeurs l'accès à une infrastructure de stockage de données hautement évolutive, fiable et peu coûteuse qu'OVH utilise pour faire fonctionner certaines de ses propres solutions internes.

OVH Public Cloud Archive est conçu pour les données rarement consultées : moins une opération de descellement d'archives est demandée, plus le temps de latence de la récupération est réduit.  Cela fait des archives publiques dans le nuage OVH une solution formidable pour la recherche d'un stockage durable et peu coûteux, sans avoir à attendre plusieurs heures pour récupérer des données importantes au moment où vous en avez réellement besoin.

Si vos données sont soumises à un accès fréquent, envisagez d'utiliser [OVH Public Cloud
Storage](https://www.ovhcloud.com/fr-ca/public-cloud/object-storage/){.external} instead.



> [!primary]
>
> Vous cherchez un kit de développement logiciel ? Visitez le SDK officiel d'Openstack
> liste.
> 

Ce guide fournit des explications approfondies sur les concepts fondamentaux de OVH Public Cloud Archive comme les régions, les comptes, les conteneurs, les archives et la manière de travailler avec ces ressources en utilisant l'interface de programmation d'application (API) Openstack Swift.


## Authentification
Comme les archives publiques dans le nuage OVH sont soutenues par Openstack Swift, l'authentification est traitée comme les autres services Openstack en utilisant la couche ordinaire de gestion des utilisateurs, [Keystone](https://docs.openstack.org/developer/keystone/){.external}.



> [!primary]
>
> Visitez la référence officielle de l'API Openstack Keystone
> ici.
> 

Une authentification réussie renvoie un **jeton d'authentification**, un **project id** et un **catalogue de services** permettant de continuer à utiliser les services Openstack. Le jeton doit être transmis parallèlement aux interactions avec les interfaces de programmation d'un service donné. Un jeton est valable pour une portée et une période de temps données, spécifiées par le service d'authentification à distance. La génération de jetons est une opération soumise à une limitation de débit, un utilisateur ne peut pas récupérer plus de 60 jetons par minute.

Note: Voici la syntaxe de l'autorisation non écrite, par example le jeton sera valable pour le projet par défaut id. Se référer à la keystone API si vous souhaitez utiliser une autorisation scopée.

**Syntaxe**

```
 POST /v3/auth/tokens HTTP/1.1
 Host: auth.cloud.ovh.net
 Content-Length: <length>
 Content-Type: application/json
 
 {
     "auth": {
         "identity": {
             "methods": [
                 "password"
             ],
             "password": {
                 "user": {
                     "name": "<username>",
                     "domain": {
                         "name": "Default"
                     },
                     "password": "<password>"
                 }
             }
         }
     }
 }
```

**Exemple de réponse**

```
 HTTP/1.1 201 Created
 Vary: X-Auth-Token
 X-Subject-Token: 3caec5b614a94326b0e9b847661e3d6a
 Content-Length: 2299
 Content-Type: application/json
 Date: Thu, 09 Mar 2017 11:21:04 GMT
 
 {
    "token" : {
       "methods" : [
          "password"
       ],
       "expires_at" : "2017-03-10T12:38:46.046846Z",
       "issued_at" : "2017-03-09T12:38:46.046871Z",
       "catalog" : [
          {
             "type" : "object-store",
             "id" : "9afff7a684eb4830b08366fce2b94c57",
             "endpoints" : [
                {
                   "url" : "https://storage.bhs1.cloud.ovh.net/v1/AUTH_e80c212388cd4d509abc959643993b9f",
                   "id" : "35ed7954cd8241b384da3c2d6c7277bb",
                   "interface" : "public",
                   "region_id" : "BHS1"
                },
                {
                   "region_id" : "SBG1",
                   "interface" : "public",
                   "id" : "3ccc82bbd33d4cdfbc5f03aef2724ab0",
                   "url" : "https://storage.sbg1.cloud.ovh.net/v1/AUTH_e80c212388cd4d509abc959643993b9f"
                },
                {
                   "url" : "https://storage.gra1.cloud.ovh.net/v1/AUTH_e80c212388cd4d509abc959643993b9f",
                   "id" : "c96f61d071a74e36bd3c07e53d241ce3",
                   "region_id" : "GRA1",
                   "interface" : "public"
                }
             ]
          },
       ],
       "roles" : [
          {
             "name" : "_member_",
             "id" : "9fe3fd9ee4291b1895a90975d3e92baf"
          }
       ],
       "extras" : {},
       "user" : {
          "domain" : {
             "name" : "Default",
             "id" : "default"
          },
          "name" : "ktZeF8Uqluqm",
          "id" : "200ba261af11471db447526575dcb9fb"
       },
       "audit_ids" : [
          "BN_StzM0SFmGB5uYiIhA7Q"
       ],
       "project" : {
          "id" : "e80c212388cd4d509abc959643993b9f",
          "domain" : {
             "name" : "Default",
             "id" : "default"
          },
          "name" : "3635872342124167"
       }
    }
 }
```

## Régions
OVH Public Cloud Archive est disponible dans différentes régions géographiques. Les régions sont composées de zones, elles-mêmes formées par un ensemble de ressources potentiellement placées dans des centres de données distincts. Chaque région est assortie d'un point d'extrémité de service. Une liste exhaustive des régions utilisables pour les archives et le stockage dans le nuage public d'OVH est facilement identifiable dans le catalogue de services de l'étape [d'authentication](#authentication){.internal}.


## Politiques de stockage
Les données stockées dans OVH Object Storage ou OVH Public Cloud Archive est alloué par une couche de stockage encline à gérer diverses politiques. Une politique de stockage peut généralement différer selon les supports de stockage utilisés ou l'algorithme de redondance responsable du placement des données afin de maximiser la durabilité globale.

Les politiques de stockage suivantes sont exposées:

Politique pour OVH **P**ublic **C**loud **A**rchive offre. Optimisé pour le stockage au repos, rarement accessible. Les données sont stockées à l'aide d'un [Code d'effacement](https://fr.wikipedia.org/wiki/Code_d%27effacement){.external} caractérisé par une *taux de codage* de 0.8, formé par 12 fragments de données et 3 fragments de parité. Son accès est régi par une latence de récupération qui peut varier de quelques minutes à quelques heures en fonction des opérations précédentes.

Offre OVH **P**ublic **C**loud **S**torage. Optimisé pour le stockage à chaud, fréquemment utilisé. Les données sont répliquées 3 fois en écrivant 3 copies de chaque objet et leur accès est immédiat.



## Comptes
Chaque projet de OVH Public Cloud est identifié par une id. Pour que vous puissiez gérer vos données de manière organisée, OVH Public Cloud Archive et OVH Public Cloud Storage fournir un concept de base appelé "compte". Un compte est comme un cloud storage project, il est capable de contenir des ensembles de données appelés conteneurs. Un compte est appelé *AUTH_<project_id>* où l'identifiant du projet provient de l'authentification de [l'authentication](#authentication){.internal}.


## Conteneurs
OVH Public Cloud Archive est un service de stockage dans le nuage. Pour pouvoir transférer vos archives, vous devez d'abord créer un conteneur dans l'une des régions du OVH Public Cloud.

Dans cette section, nous expliquerons comment travailler avec des conteneurs en utilisant le [Openstack Swift API](https://developer.openstack.org/api-ref/object-storage/){.external}.


### Création d'un conteneur
Lorsque vous créez un conteneur, vous fournissez un nom et une politique de stockage. Vous choisissez une région en choisissant le terminal de service auquel vous envoyez la demande de création. Vous pouvez créer un nombre quelconque de conteneurs et, à l'intérieur de ceux-ci, un nombre quelconque d'archives.

Les conteneurs peuvent être créés de l'une des manières suivantes:

- Créer un conteneur dans la section "cloud" de l'interface client d'OVH.
- Créer un conteneur par le biais de passerelles pour les protocoles de transfert basés sur SSH.
- Créer un conteneur avec l'API d'OVH.
- Créer un conteneur avec l'API d'Openstack.

Lors de l'utilisation de la Openstack Swift API, la politique de stockage par défaut, if not specified at container creation time, is *PCS*. Afin de créer un conteneur pour OVH Public Cloud Archive il est nécessaire de préciser la politique correspondante.

Note que la politique de stockage d'un conteneur est immuable.

**Syntaxe**

```
 PUT /v1/<account>/<container> HTTP/1.1
 Host: storage.<region>.cloud.ovh.net
 X-Auth-Token: <token>
 X-Storage-Policy: PCA
```

**Exemple de demande**

```
 PUT /v1/AUTH_e80c212388cd4d509abc959643993b9f/archives
 Host: storage.gra1.cloud.ovh.net
 X-Auth-Token: 3caec5b614a94326b0e9b847661e3d6a
 X-Storage-Policy: PCA
```
**Exemple de réponse**

```
 HTTP/1.1 201 Created
 Content-Length: 0
 X-Trans-Id: tx2acf06eb506d441ab605a-0058c15384
 X-Openstack-Request-Id: tx2acf06eb506d441ab605a-0058c15384
 Date: Thu, 09 Mar 2017 13:07:17 GMT
```

### Obtenir un inventaire des conteneurs
Lorsque vous téléchargez une archive, OVH Public Cloud Archive met à jour l'inventaire des conteneurs avec des informations sur ces archives. Cet inventaire est créé et disponible pour lecture immédiatement après la réception complète des données d'archives.

Afin de prendre en compte les particularités du stockage au repos, OVH a légèrement modifié la génération de cet inventaire par rapport aux infrastructures régulières d'Openstack Swift dans le but d'inclure des informations supplémentaires liées à son processus de stockage particulier. Cela vous assure d'avoir des informations essentielles sur votre archive, telles que son état de descellement et le délai de récupération avant qu'elle ne soit prête à être téléchargée.

Voir plus de détails sur cette [demande](https://docs.ovh.com/ca/fr/storage/pca/api/){.external}.

**Syntaxe**

```
 GET /v1/<account>/<container>?policy_extra=true HTTP/1.1
 Host: storage.<region>.cloud.ovh.net
 Accept: application/json
 X-Auth-Token: <token>
```
**Exemple de demande**

```
 GET /v1/AUTH_e80c212388cd4d509abc959643993b9f/archives?policy_extra=true HTTP/1.1
 Host: storage.gra1.cloud.ovh.net
 Accept: application/json
 X-Auth-Token: 3caec5b614a94326b0e9b847661e3d6a
```
**Exemple de réponse**

```
 HTTP/1.1 200 OK
 Content-Length: 913
 Accept-Ranges: bytes
 X-Container-Object-Count: 3
 X-Storage-Policy: PCA
 Last-Modified: Fri, 24 Feb 2017 10:06:54 GMT
 X-Timestamp: 1487930813.23049
 X-Container-Bytes-Used: 3072
 Content-Type: application/json; charset=utf-8
 X-Trans-Id: tx1f9a222e5d004f3198fcf-0058c15d1a
 X-Openstack-Request-Id: tx1f9a222e5d004f3198fcf-0058c15d1a
 Date: Thu, 09 Mar 2017 13:48:10 GMT
 
 [
    {
       "hash" : "l0dad6ursvjudy1ea4xyfftbwdsfqhqq",
       "policy_retrieval_state" : "sealed",
       "bytes" : 1024,
       "last_modified" : "2017-02-24T10:09:12.026940",
       "policy_retrieval_delay" : null,
       "name" : "archive1.zip",
       "content_type" : "application/octet-stream"
    },
    {
       "hash" : "d69eegihauxczrutglltkkz4k9xwwfsp",
       "policy_retrieval_state" : "unsealing",
       "bytes" : 1024,
       "last_modified" : "2017-02-24T10:09:12.031512",
       "policy_retrieval_delay" : 1851,
       "name" : "archive2.tar.gz",
       "content_type" : "application/octet-stream"
    },
    {
       "policy_retrieval_delay" : null,
       "content_type" : "application/octet-stream",
       "name" : "archive3.xz",
       "bytes" : 1024,
       "policy_retrieval_state" : "unsealed",
       "hash" : "k9pzyglnvupkqbrniqoo16kb95y68vms",
       "last_modified" : "2017-03-07T15:13:42.624310"
    }
 ]
```

### Suppression d'un conteneur
Si vous souhaitez supprimer un conteneur, vous devez d'abord supprimer toutes les archives qu'il contient. Une fois qu'un conteneur est vide, la suppression est une opération simple qui ne nécessite que le nom du conteneur.

**Syntaxe**

```
 DELETE /v1/<account>/<container> HTTP/1.1
 Host: storage.<region>.cloud.ovh.net
 X-Auth-Token: <token>
```
**Exemple de demande**

```
 DELETE /v1/AUTH_e80c212388cd4d509abc959643993b9f/archives HTTP/1.1
 Host: storage.gra1.cloud.ovh.net
 X-Auth-Token: 3caec5b614a94326b0e9b847661e3d6a
```
**Exemple de réponse**

```
 HTTP/1.1 204 No Content
 Content-Length: 0
 X-Trans-Id: txc578ec094c764908a9feb-0058c153cc
 X-Openstack-Request-Id: txc578ec094c764908a9feb-0058c153cc
 Date: Thu, 09 Mar 2017 13:08:28 GMT
```

## Archives
OVH Public Cloud Archive vous offre la possibilité de transférer des objets génériques appelés archives. Une archive peut être de n'importe quelle taille et son contenu peut être de n'importe quel type. Une archive diffère d'une archive traditionnelle Openstack Swift object car il comporte un attribut supplémentaire : le *état de récupération*. En effet, les archives peuvent être scellées et descellées.


### Téléchargement d'une archive
Une archive téléchargée sur OVH Public Cloud Archive sera immédiatement scellé par la couche de stockage. Pour le récupérer, vous devrez d'abord le desceller.

Vous pouvez télécharger des archives d'une taille maximale de 5 Go en une seule opération. Les archives plus volumineuses doivent être divisées en segments ne dépassant pas 5 Go chacun, référencés par un manifeste. Un manifeste est un concept important d'Openstack Swift qui permet de supporter des objets de grande taille. Vous pouvez en savoir plus à ce sujet [ici](https://docs.openstack.org/developer/swift/overview_large_objects.html){.external}. La taille minimale du segment est de 1 octet. Les objets SLO sont limités à 1000 segments et la taille maximale du manifeste est de 2 MiB.

Lors du téléchargement d'une archive vers OVH Public Cloud Archive, il est très important de vérifier que la copie locale et la copie distante des données sont indentiques. C'est la garantie que les données reçues à distance sont correctes et que personne n'a pu en modifier le contenu.

- Lorsque vous téléchargez des archives segmentées, vous devez calculer la somme de contrôle md5 de chaque segment puis former une chaîne avec la concaténation de chaque somme de contrôle md5 dans l'ordre correct. La somme de contrôle md5 de cette chaîne doit ensuite être transmise dans la demande de création du manifeste.
- Lors du téléchargement d'archives non segmentées, vous devez calculer sa somme de contrôle md5 et l'inclure dans la demande de création d'archives.

**Syntaxe**

```
 PUT /v1/<account>/<container>/<archive> HTTP/1.1
 Host: storage.<region>.cloud.ovh.net
 X-Auth-Token: <token>
 Content-Length: <archive_size>
 Etag: <archive_md5sum>
```
**Exemple de demande**

```
 PUT /v1/AUTH_e80c212388cd4d509abc959643993b9f/archives/archive.zip HTTP/1.1
 Host: storage.gra1.cloud.ovh.net
 X-Auth-Token: 3caec5b614a94326b0e9b847661e3d6a
 Content-Length: 1024
 Etag: 1e50210a0202497fb79bc38b6ade6c34
 
 [bytes]
```
**Exemple de réponse**

```
 HTTP/1.1 201 Created
 Content-Length: 0
 Last-Modified: Thu, 09 Mar 2017 15:02:12 GMT
 Etag: 1e50210a0202497fb79bc38b6ade6c34
 X-Trans-Id: txa1e833e835c749a883ff4-0058c16e71
 X-Openstack-Request-Id: txa1e833e835c749a883ff4-0058c16e71
 Date: Thu, 09 Mar 2017 15:02:18 GMT
```

### Désceller une archive
L'OVH Public Cloud Archive stocke les données de manière à ce que le coût soit optimal, au détriment d'une certaine latence dans le processus d'extraction. Pour accéder à vos archives, une demande de descellement doit être reçue avec le nom du conteneur et de l'archive auxquels elle se rapporte.

Les demandes de descellement d'archives sont identiques aux demandes de téléchargement d'archives. Seule la réponse envoyée par OVH Public Cloud Archive diffère et constitue une particularité de l'Openstack Swift l'infrastructure que gère OVH. Une fois qu'une demande de descellement est reçue, elle ne peut être annulée. Les demandes de levée de scellés ultérieures n'auront d'autre effet que d'interroger l'opération ETA. 

Voir les explications supplémentaires concernant cette [demande](https://docs.ovh.com/ca/fr/storage/pca/api/).

**Syntaxe**

```
 GET /v1/<account>/<container>/<archive> HTTP/1.1
 Host: storage.<region>.cloud.ovh.net
 X-Auth-Token: <token>
```
**Demande d'échantillon**

```
 GET /v1/AUTH_e80c212388cd4d509abc959643993b9f/archives/archive.zip HTTP/1.1
 Host: storage.gra1.cloud.ovh.net
 X-Auth-Token: 3caec5b614a94326b0e9b847661e3d6a
```
**Réponse de l'échantillon**

```
 HTTP/1.1 429 Too Many Requests
 Retry-After: 637
 Content-Length: 64
 X-Trans-Id: txe9fad9afaf7b4950a16af-0058c17f11
 X-Openstack-Request-Id: txe9fad9afaf7b4950a16af-0058c17f11
 Date: Thu, 09 Mar 2017 16:13:05 GMT
 
 <html><h1>Too Many Requests</h1><p>Too Many Requests.</p></html>
```

### Downloading an archive
Once you archive has been unsealed in OVH Public Cloud Archive, you can download it during 24 hours with unlimited throughput and access frequency. At the end of the retrieval span, the archive will be sealed again.

Since OVH Public Cloud Archive is optimized for at-rest storage, if a new unsealing request is received relatively soon after the retrieval period has elapsed, it will take **significantly longer** to complete.

**Syntax**

```
 GET /v1/<account>/<container>/<archive> HTTP/1.1
 Host: storage.<region>.cloud.ovh.net
 X-Auth-Token: <token>
```
**Demande d'échantillon**

```
 GET /v1/AUTH_e80c212388cd4d509abc959643993b9f/archives/archive.zip HTTP/1.1
 Host: storage.gra1.cloud.ovh.net
 X-Auth-Token: 3caec5b614a94326b0e9b847661e3d6a
```
**Réponse de l'échantillon**

```
 HTTP/1.1 200 OK
 Content-Length: 1024
 Content-Type: application/octet-stream
 Etag: 1e50210a0202497fb79bc38b6ade6c34
 
 [bytes]
```

### Suppression d'une archive
Même si le téléchargement d'archives implique une latence inhérente, la suppression d'archives est une opération en une seule étape traitée immédiatement par OVH Public Cloud Archive. Sachez qu'en tant que telle, cette opération est irrévocable et ne peut être annulée. Pour supprimer une archive, vous devez fournir son nom et le conteneur dans lequel elle est stockée.

**Syntaxe**

```
 DELETE /v1/<account>/<container>/<archive> HTTP/1.1
 Host: storage.<region>.cloud.ovh.net
 X-Auth-Token: <token>
```
**Demande d'échantillon**

```
 DELETE /v1/AUTH_e80c212388cd4d509abc959643993b9f/archives/archive1.zip HTTP/1.1
 Host: storage.gra1.cloud.ovh.net
 X-Auth-Token: 3caec5b614a94326b0e9b847661e3d6a
```
**Réponse de l'échantillon**

```
 HTTP/1.1 204 No Content
 Content-Length: 0
 X-Trans-Id: txcf8e98d30f714c85a323d-0058c16813
 X-Openstack-Request-Id: txcf8e98d30f714c85a323d-0058c16813
 Date: Thu, 09 Mar 2017 14:35:00 GMT
```