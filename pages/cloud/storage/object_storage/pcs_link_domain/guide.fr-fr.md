---
title: Object Storage Swift - Lier un conteneur a un nom de domaine
slug: pcs/link-domain
excerpt: Retrouvez ici comment lier un nom de domaine a un conteneur.
section: Spécificités de la classe de stockage OpenStack Swift
order: 120
---

**Dernière mise à jour le 27/10/2021**

## Objectif

Un conteneur de type Public est une bonne solution pour partager vos fichiers via internet, puisque tout le monde est en mesure d'accéder à vos données. Afin de faciliter ce partage sans utiliser une longue URL, il est possible d'utiliser un nom de domaine, qui peut être le même que celui de votre site.

Ce guide vous explique donc comment configurer un nom de domaine sur vos conteneurs afin d'en faciliter l'accès.


### Prérequis

- Consultez le guide [Création de conteneur de stockage](https://docs.ovh.com/fr/storage/pcs/creation-de-conteneur/)
- Un nom de domaine

## Comment cela fonctionne ?

### Principe
Quand une requête HTTP arrive sur l'Object Storage d'OpenStack, une vérification est effectuée au niveau de l'entête  **"host"**. Si cela diffère de l'actuel nom d'hôte, le système considère cela comme une entrée mappée et fait une requête DNS afin d'obtenir l'entrée DNS au complet qui correspond à l'hôte. Si une entrée DNS est trouvée, la réponse sera divisée afin de retrouver et d'extraire le conteneur, le compte et l'objet cherché, puis la requête est réécrite. Soyez sûr que votre client a correctement mis en place l'entête  **"host"**, sinon l'Object Storage ne sera pas en mesure de détecter et de traiter votre requête.


### HTTP et HTTPS
La fonctionnalité est correctement opérationnelle avec HTTP. Cependant, vous aurez une erreur de certificat si vous utilisez HTTPS, étant donné que nous ne possédons pas votre certificat privé. Vous serez toujours en mesure d'utiliser HTTPS mais vous recevrez des alertes concernant le certificat dans la majorité des navigateurs récents.


### Enregistrement CNAME ou TXT
Vous pouvez enregistrer soit le CNAME ou soit le TXT. :

- CNAME : C'est l'enregistrement historique et par défaut. Utilisez celui-ci si vous êtes en mesure de gérer la zone DNS, il suivra notre point d'accès automatiquement même si l'adresse IP change.
- TXT : Utilisez celui ci uniquement si vous avez besoin de configurer votre nom de domaine sur un support différent, comme un CDN par exemple. Vous devrez par contre surveiller si l'adresse IP du point d'accès change. Vous pouvez aussi utiliser un "virtuel CNAME" si votre fournisseur de CDN vous le permet.


## Configurez votre DNS

### Avec CNAME
Choisissez un sous-domaine (comme par exemple static.mypersonaldomain.ovh), ajoutez un champ de type CNAME puis ajoutez la cible en suivant les règles expliquées ci-dessous.

Le CNAME doit suivre les règles suivantes afin d'être compris par l'Object Storage, vous devez adapter les  **[VARIABLES]**  afin de correspondre à la bonne valeur :


```bash
[NOM_DU_CONTENEUR].auth-[PROJECT_ID].storage.[REGION].cloud.ovh.net.
```

Par exemple, pour un conteneur nommé  **staticct**  et un projet  **123xxxx456**  qui sera utilisé sur SBG :


```bash
staticct.auth-123xxxx456.storage.sbg.cloud.ovh.net.
```

Votre enregistrement DNS sera donc :


```bash
static IN CNAME staticct.auth-123xxxx456.storage.sbg.cloud.ovh.net.
```


### Avec TXT
Ajoutez un champ de type TXT et ajoutez la valeur en suivant les règles expliquées ci-dessous.

Le champt TXT doit suivre les règles suivantes afin d'être compris par l'Object Storage :


```bash
'_swift-remap.' + sous domaine
```

Soit par exemple pour un sous domaine static.mondomaine.tld :


```bash
_swift-remap.static
```

Tout comme le CNAME, il doit aussi suivre les règles suivantes en adaptant les  **[VARIABLES]**  afin de correspondre à la bonne valeur :


```bash
[NOM_DU_CONTENEUR].auth-[PROJECT_ID].storage.[REGION].cloud.ovh.net.
```

Par exemple, pour un conteneur nommé  **staticct**  et un projet  **123xxxx456**  qui sera utilisé sur SBG :


```bash
staticct.auth-123xxxx456.storage.sbg.cloud.ovh.net.
```

Votre enregistrement DNS sera donc :


```bash
_swift-remap.static IN TXT staticct.auth-123xxxx456.storage.sbg.cloud.ovh.net.
```

Si vous ne souhaitez pas utiliser de sous-domaine, vous pouvez faire ainsi :


```bash
_swift-remap IN TXT staticct.auth-123xxxx456.storage.sbg.cloud.ovh.net.
```

Enfin, la dernière étape pour la configuration du champ TXT est d'ajouter un champ A pour votre (sous-)domaine pointant vers l'adresse IP de l'Object Storage du Public Cloud. Vous pouvez l'obtenir à l'aide des commandes suivantes :


```bash
dig storage.sbg.cloud.ovh.net
dig storage.gra.cloud.ovh.net
dig storage.bhs.cloud.ovh.net
```



> [!alert]
>
> Vous ne pouvez pas utiliser les caractères suivants dans votre nom de conteneur :
>
> - [ . ]
> - [ _ ] selon votre fournisseur DNS
> - Ne pas utiliser de majuscules
> - Remplacer auth-ProjectID par auth_ProjectID
>
>
