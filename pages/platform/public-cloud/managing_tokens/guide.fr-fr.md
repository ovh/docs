---
title: 'Gestion des tokens'
slug: gestion-des-tokens
legacy_guide_number: 1872
section: 'Actions via API et lignes de commande'
---

## Préambule


> [!alert]
>
> Les informations détaillées ici sont valables pour la version 2.0 de l'API de
> Keystone.
> 


### Définitions
- Endpoint : Adresse HTTP pointant directement sur une API d'un service. par exemple [https://auth.cloud.ovh.net/v2.0](https://auth.cloud.ovh.net/v2.0){.external} pour le endpoint d'authentification ou [https://image.compute.gra1.cloud.ovh.net/](https://image.compute.gra1.cloud.ovh.net/){.external} pour le endpoint de gestion des images de la zone GRA1.
- Token : Chaine de caractère unique liée à une authentification et à des droits d'accès. Un token est demandé par l'utilisateur en fournissant ses credentials (informations de login) à l'API d'authentification. Il est généré et fournis avec une durée de validité limitée de 24h. Un token peut être "scoped" ou "unsocped", c'est à dire qu'il peut être directement concerné un tenant ou n'être lié à aucun tenant.


### Principe global
La plupart des requêtes soumises aux APIs OpenStack doivent répondre à un mécanisme d'autorisation. Ce mécanisme fonctionne par l'obtention de token (jeton en français) et validation de celui ci. Voici les grandes lignes du fonctionnement d'un appel depuis l'authentification jusqu'à l'exécution de l'appel.

- Demande de création de token auprès du endpoint d'authentification avec les credentials
- Requête sur le endpoint du service désiré (storage, compute, network, ...) en fournissant le token en paramètre
- L'API du service récupère le token et demande la vérification de validité auprès du service d'authentification
- Si la validité est vérifiée, le appel est pris en compte et exécute

Comme les tokens ont une durée de validité définit, ils expirent et doivent être renouvelés chaque fois que nécessaire.

De la même manière, si un token doit être révoqué avant sa date d'expiration, il est possible de le faire via l'API.

Pour plus d'information, consultez la documentation d'[OpenStack de l'API](http://docs.openstack.org/api/quick-start/content/){.external} et du [mécanisme d'authentification](http://docs.openstack.org/kilo/install-guide/install/apt/content/keystone-concepts.html){.external}.


## Operations manuelles
Les opérations qui suivent peuvent être effectuées manuellement, elles sont généralement utilisées à des fins pédagogiques ou de debugging.

Il est nécessaire de charger l'environnement à l'aide du fichier openrc (voir le guide).

Dans notre exemple, nous souhaitons obtenir les informations de metadata d'un objet stocké grâce à l'offre Public Cloud Storage. Les étapes sont :

- Demande de création d'un token
- Récupération des variables token ID et endpoint publicURL
- Requête sur l'objet avec les informations récupérées

L'outil en ligne de commande cURL permet de construire des requêtes de toutes pièce.


### Demande de creation d'un token

```python
curl -X POST $OS_AUTH_URL/tokens -H "Content-Type: application/json" -d '{"auth": {"tenantName": "'$OS_TENANT_NAME'", "passwordCredentials": {"username": "'$OS_USERNAME'", "password": "'$OS_PASSWORD'"}}}' | python -mjson.tool
```

- -X POST : méthode HTTP utilisée pour soumettre des données
- $OS_AUTH_URL/tokens : action sur l'élément tokens
- -H "Content-Type: application/json" : format de sortie attendue en JSON
- -d '{"auth": {"tenantName": "'$OS_TENANT_NAME'", "passwordCredentials": {"username": "'$OS_USERNAME'", "password": "'$OS_PASSWORD'"}}}' : corps de la requête, ce sont les information d'authentification
- python -mjson.tool : outil python permettant d'afficher la sortie de manière lisible

La réponse du serveur ressemble à ceci :


```json
 {
     "access": {
         "metadata": {
             "is_admin": 0,
             "roles": [
             "9fe...fd4"
             ]
        },
        "serviceCatalog": [
             [...]
             {
                 "endpoints": [
                     {
                         "adminURL": "https://image.compute.sbg1.cloud.ovh.net/",
                         "internalURL": "http://127.0.0.1:8888/v1/AUTH_9ea...ff0",
                         "publicURL": "https://storage.sbg1.cloud.ovh.net/v1/AUTH_9ea...ff0",
                         "region": "SBG1"
                    }
                 ],
                 "endpoints_links": [],
                 "name": "swift",
                 "type": "object-store"
             },
 
             [...]
         ],
         "token": {
            "audit_ids": [
                 "Mka...cmTw"
             ],
             "expires": "2015-10-02T14:53:15Z",
             "id": "a4331ec98754472032f031e18b16bd00",
             "issued_at": "2015-10-01T14:53:15.072501",
             "tenant": {
                 "description": null,
                 "enabled": true,
                 "id": "9ea...ff0",
                 "name": "361...868"
             }
         },
 
         [...]
    }
}
```


### Recuperation des variables token ID et endpoint publicURL
Les deux informations sont disponibles dans la sortie de la commande précédente.

Pour le endpoint publicURL, il faut rechercher dans la section "object-store" et la région qui convient, ici "SBG1".


```bash
export endpoint="https://storage.sbg1.cloud.ovh.net/v1/AUTH_9ea...ff0"
```

C'est l'adresse du endpoint du service d'object storage qui va permettre de requêter les informations sur l'objet.


```bash
export token=a4331ec98754472032f031e18b16bd00
```

Ce token est maintenant l'élément d'authentification qui sera utilisé pour la requête suivante.


### Requete sur l'objet avec les informations recuperees

```bash
curl -X GET $endpoint/photos/fullsize/ovh-summit-2014-backstage-DS.jpg -H "X-Auth-Token: $token" -I
```

- -X GET : méthode HTTP GET
- $endpoint/photos/fullsize/ovh-summit-2014-backstage-DS.jpg : adresse de l'objet
- -H "X-Auth-Token: $token" : élément d'authentification
- -I : option curl pour ne récupérer que les metadatas

La réponse ressemble à ceci :


```bash
HTTP/1.1 200 OK
Content-Length: 190046
Content-Type: image/jpeg
Accept-Ranges: bytes
Last-Modified: Thu, 24 Sep 2015 14:20:11 GMT
Etag: c93e12530b66f121d4bd5a6ae096ee77
X-Timestamp: 1443104410.15437
X-Object-Meta-Mtime: 1424095540.000000
X-Trans-Id: 95CAB26E:D200_052711B1:01BB_560D4CE7_1631931:2BB4
Date: Thu, 01 Oct 2015 15:10:31 GMT
Connection: close
```


## Gestion automatique &#58; librairie et SDK
Il est fortement recommandé d'utiliser les librairies permettant la gestion transparente des tokens. De cette manière, en fournissant simplement les credentials de connexion à la librairie, les tokens seront automatiquement générés, utilisés et renouvelés sans devoir en faire la gestion au niveau applicatif.

Il existe de nombreuses librairies dans les différents langages. Consulter la liste officielle pour plus d'informations.


### Exemple en Python
L'installation de la librairie se fait à l'aide de pip.


```python
pip install python-openstacksdk
```

Après l'initialisation de la connexion, les tokens sont gérés en arrière plan.


```bash
from openstack import connection
conn = connection.Connection(auth_url="https://auth.cloud.ovh.net/v2.0",
                             project_name="361...868",
                             username="vvQ...VBW",
                             password="jCr...RGj")
for cont in conn.object_store.containers():
    if(cont.name == "photos"):
        for obj in conn.object_store.objects(cont):
            if(obj.name == "fullsize/ovh-summit-2014-backstage-DS.jpg"):
                print conn.object_store.get_object_metadata(obj)
```


### Exemple en PHP

L'installation de la librairie require php-curl et composer.


```bash
apt-get install php5-curl
curl -sS https://getcomposer.org/installer | php
php composer.phar require rackspace/php-opencloud
```

L'utilisation fonctionne également avec un connecteur qui va gérer les tokens.


```php
<?php
require '/var/www/vendor/autoload.php';
use OpenCloud\OpenStack;
$client = new OpenStack("https://auth.cloud.ovh.net/v2.0", array(
    'username' => "vvQ...VBW",
    'password' => "jCr...RGj",
    'tenantName' => "361...868",
));
$objectStoreService = $client->objectStoreService('swift', "GRA1");
$cont = $objectStoreService->getContainer("photos");
$obj = $cont->getPartialObject('fullsize/ovh-summit-2014-backstage-DS.jpg');
print_r($obj->getMetadata());
?>
```