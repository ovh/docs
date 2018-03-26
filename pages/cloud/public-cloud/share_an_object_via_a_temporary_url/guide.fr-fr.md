---
title: Partager un objet avec une adresse temporaire
slug: partager-un-objet-avec-une-adresse-temporaire
legacy_guide_number: 2007
section: Object Storage
---


## Préambule
OpenStack Swift permet de stocker un grand nombre de fichiers. Afin de gérer vos fichiers, vous devez être authentifié à l'aide d'un token pour chacune de vos requêtes vers l'API. Cela permet de confirmer vos autorisations sur Swift (Lecture/Ecriture). Ce jeton provient du système d'authentification à l'aide de votre identifiant et mot de passe.

Partons donc du principe que vous souhaitez partager un fichier avec un ami ou un collègue, mais que vous ne souhaitez évidemment pas donner vos informations personnelles pour l'authentification. Dans ce cas, les URL temporaires (tempurl) pourront répondre à votre besoin.

Le **Temp url** est une fonctionnalité qui vous permet de contrôler les fichiers que vous souhaitez partager, mais aussi combien de temps vous souhaitez que le lien soit disponible.


### Comment cela fonctionne ?
La fonction **Temp url** génère une adresse temporaire en utilisant les éléments suivants :

- L'adresse du point d'accès (Exemple : "[https://storage.sbg1.cloud.ovh.net/](https://storage.sbg1.cloud.ovh.net/){.external}").
- Le chemin vers votre objet contenant votre **projet**, le **conteneur** et le **nom de l'object** (Exemple : "v1/AUTH_tenant/default/file").
- Le paramètre **tempurlsign**, qui correspondant à une signature qui a été générée selon votre clé secrète, la methode HTTP, le chemin du fichier et la date d'expiration.
- Le paramètre **url_expires** qui correspond à la date d'expiration de votre lien.


### Prérequis
- [Préparer l'environnement pour utiliser l'API OpenStack]({legacy}1851){.ref}
- [Charger les variables d'environnement OpenStack]({legacy}1852){.ref}
- Python installé sur votre poste
- Le script Python : [swift-temp-url](https://raw.githubusercontent.com/openstack/swift/master/bin/swift-temp-url){.external}


## Generer la Temp URL

### Generation de la cle
Dans un premier temps, il faudra générer une clé. Celle ci sera utilisable pour tout les fichiers de votre projet, une seule génération de clé suffit pour toutes futures **TempURL**. Il est donc conseillé de choisir une longue clé sécurisée. Sachez cependant qu'il est possible de régénérer une nouvelle clé à tout moment.

Pour générer votre clé, il est conseillé d'utiliser 20 caractères au moins. Vous pouvez utiliser l'un des outils suivants :

- [http://www.random.org/strings/](http://www.random.org/strings/){.external}
- La commande linux : **/dev/urandom**
- La commande linux : **date +%s | md5sum**

Une fois en possession de votre clé, vous pouvez configurer celle-ci sur votre projet à l'aide du client swift (remplacer la chaine "12345" par votre clé) :


```bash
swift post -m "Temp-URL-Key: 12345"
```

Ou en utilisant curl :


```bash
curl -i -X POST \ -H "X-Account-Meta-Temp-URL-Key: 12345" \ -H "X-Auth-Token: abcdef12345" \ https://storage.sbg1.cloud.ovh.net/v1/AUTH_ProjectID
```



> [!success]
>
> Le nom du header au complet est  X-Account-Meta-Temp-Url-Key  mais le client Swift utilise  Temp-Url-Key  car il ajoute  X-Account-Meta automatiquement.
> 

Maintenant que la clé est configurée sur le compte, on peut vérifier que **l'header** à correctement été appliqué grâce à la commande suivante en utilisant le client Swift :


```bash
swift stat
```

Ou avec curl :


```bash
curl -i -X HEAD \ -H "X-Auth-Token: abcdef12345" \ ttps://storage.sbg1.cloud.ovh.net/v1/AUTH_ProjectID
```


### Generation de l'URL
Les tâches suivantes peuvent être effectuées hors ligne.

Nous allons générer l'adresse URL temporaire à l'aide du script  **swift-temp-url**.

- **GET** : Methode HTTP.
- **60** : Lien disponible pendant 60 secondes (Vous pouvez personnaliser cette valeur).
- **12345** : A remplacer par votre clé.
- **/v1/AUTH_tenant/default/file** : Le chemin vers votre fichier (Il n'est pas nécessaire d'ajouter le point d'accès à ce stade de la procédure).


```python
1. python swift-temp-url GET 60 /v1/AUTH_tenant/default/file 12345
```

Vous obtenez la **tempURL** qui vous permet de visualiser le **chemin vers le fichier**, la **signature** et la **date d'expiration** comme expliqué précédemment.


```bash
v1/AUTH_tenant/default/file?temp_url_sig=8016dsdf3122d526afds60911cde59fds3&temp_url_expires=1401548543
```

Pour que votre URL fonctionne correctement, il faudra simplement ajouter l'adresse du point d'accès devant votre **tempURL** :


```None
1. https://storage.sbg1.cloud.ovh.net/v1/AUTH_tenant/default/file?temp_url_sig=8016dsdf3122d526afds60911cde59fds3&temp_url_expires=1401548543
```

Dans notre exemple, cette URL permet de télécharger le fichier **file** dans le conteneur **default**, pendant 60 secondes et cela sans authentification. Au-delà des 60 secondes, l'URL ne fonctionnera plus.



> [!success]
>
> Pour les utilisateurs les plus avancés qui veulent générer des tempURL sans le script swift-temp-url,
> il est possible d'avoir plus d'informations directement sur la documentation d'OpenStack.
> 