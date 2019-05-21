---
title: Placer un conteneur de l’Object Storage derriere un nom de domaine
slug: placer-un-conteneur-de-lobject-storage-derriere-un-nom-de-domaine
legacy_guide_number: 2006
section: Tutoriels
---


## Préambule
Lorsque vous créez un conteneur de type  **Public** , tout le monde sera en mesure d'accéder à vos données. Cela est une bonne solution pour partager vos fichiers via Internet. Cependant, pour pouvoir partager vos fichiers avec vos amis par exemple, vous devrez leur fournir une longue URL qui est en général compliquée à retenir. De plus, il est possible aussi que vous souhaitiez utiliser ces objets sur votre site Web sans pour autant utiliser un domaine différent de celui que votre site utilise. Grâce à un nom de domaine, vous serez en mesure de fournir une URL personnalisée pour partager vos données.

Ce guide vous explique donc comment configurer un nom de domaine sur vos conteneurs afin d'en faciliter l'accès.


### Prérequis
- [Ajouter des espaces de stockage]({legacy}1790){.ref}
- Un nom de domaine


## Comment cela fonctionne ?

### En theorie
Quand une requête HTTP arrive sur l'Object Storage d'OpenStack, une vérification est effectué au niveau de l'entête  **"host"** . Si cela diffère de l'actuel nom d'hôte, le système considère cela comme une entrée mappée et fait une requête DNS afin d'obtenir l'entrée DNS au complet qui correspond à l'hôte. Si une entrée DNS est trouvé, la réponse sera divisé afin de retrouver et d'extraire le conteneur, le compte et l'objet cherché, puis la requête est réécrite. Soyez sur que votre client à correctement mis en place l'entête  **"host"** , sinon l'Object Storage ne sera pas en mesure de détecter et de traiter votre requête.


### HTTP et HTTPS
La fonctionnalité fonctionne correctement avec HTTP. Cependant, vous aurez une erreur de certificat si vous utilisez HTTPS, étant donné que nous ne possédons pas votre certificat privé. Vous serez toujours en mesure d'utiliser HTTPS mais vous recevrez des alertes concernant le certificat dans la majorité des navigateurs récents.


### Enregistrement CNAME ou TXT
Parmi ces 2 choix d'enregistrements, un seul à la fois ne pourra être utilisé :

- CNAME : C'est l'enregistrement historique et par défaut. Utilisez celui ci si vous êtes en mesure de gérer la zone DNS, il suivra notre point d'accès automatiquement même si l'adresse IP change.
- TXT : Utilisez celui ci uniquement si vous avez besoin de configurer votre nom de domaine sur un support différent, comme un CDN par exemple. Vous devrez par contre surveiller si l'adresse IP du point d'accès change. Vous pouvez aussi utiliser un "virtuel CNAME" si votre fournisseur de CDN vous le permet.


## Configurer votre DNS

### Avec CNAME
Choisissez un sous domaine (comme par exemple static.mypersonaldomain.ovh), ajouter un champ de type CNAME puis ajouter la cible en suivant les règles expliquées ci dessous.

Le CNAME doit suivre les règles suivantes afin d'être compris par l'Object Storage, vous devez adapter les  **[VARIABLES]**  afin de correspondre à la bonne valeur :


```bash
[NOM_DU_CONTENEUR].auth-[PROJECT_ID].storage.[REGION].cloud.ovh.net.
```

Par exemple, pour un conteneur nommé  **staticct**  et un projet  **123xxxx456**  qui sera utilisé sur SBG1 :


```bash
staticct.auth-123xxxx456.storage.sbg1.cloud.ovh.net.
```

Votre enregistrement DNS sera donc :


```bash
static IN CNAME staticct.auth-123xxxx456.storage.sbg1.cloud.ovh.net.
```


### Avec TXT
Ajoutez un champ de type TXT et ajouter la valeur en suivant les règles expliquées ci dessous.

Le champt TXT doit suivre les règles suivantes afin d'être compris par l'Object Storage :


```bash
'_swift-remap.' + sous domaine
```

Soit par exemple pour un sous domaine static.mypersonaldomain.ovh :


```bash
_swift-remap.static
```

Tout comme le CNAME, il doit aussi suivre les règles suivantes en adaptant les  **[VARIABLES]**  afin de correspondre à la bonne valeur :


```bash
[NOM_DU_CONTENEUR].auth-[PROJECT_ID].storage.[REGION].cloud.ovh.net.
```

Par exemple, pour un conteneur nommé  **staticct**  et un projet  **123xxxx456**  qui sera utilisé sur SBG1 :


```bash
staticct.auth-123xxxx456.storage.sbg1.cloud.ovh.net.
```

Votre enregistrement DNS sera donc :


```bash
_swift-remap.static IN TXT staticct.auth-123xxxx456.storage.sbg1.cloud.ovh.net.
```

Si vous ne souhaitez pas utiliser de sous domaine, vous pouvez faire ainsi :


```bash
_swift-remap IN TXT staticct.auth-123xxxx456.storage.sbg1.cloud.ovh.net.
```

Enfin, la dernière étape pour la configuration du champ TXT est d'ajouter un champ A pour votre (sous-)domaine pointant vers l'adresse IP de l'Object Storage du Public Cloud. Vous pouvez l'obtenir à l'aide des commandes suivantes :


```bash
dig storage.sbg1.cloud.ovh.net
dig storage.gra1.cloud.ovh.net
dig storage.bhs1.cloud.ovh.net
```



> [!alert]
>
> Vous ne pouvez pas utiliser les caractères suivant dans votre nom de conteneur
> :
> - [ . ]
> - [ _ ] selon votre fournisseur DNS
> - Ne pas utiliser de majuscules
> - Remplacer auth-ProjectID par auth_ProjectID
> 
> 