---
title: Reconstruire des manifestes pour récupérer des objets inaccessibles
slug: pcs/reconstruire-manifestes
section: Object Storage
hidden: true
---

**Dernière mise à jour le 03/04/2021**

## Objectif

Suite à l'incident survenu à SBG, une très petite proportion des objets contenus dans l'Object Storage (PCS) de la région SBG a été irrémédiablement perdue. Les clients dans cette situation ont reçu une communication avec la liste de leurs objets non récupérables.

Pour chacun des objets listés, quatre situations peuvent se présenter :

1. L'objet listé est un objet simple : l'impact est circonscrit à l'objet lui-même.
2. L'objet listé est un segment référencé par un manifeste SLO : lors du téléchargement du « Large Object », vous rencontrerez une erreur de type « 409 Conflict ».
3. L'objet listé est un segment référencé par un manifeste DLO : le téléchargement du « Large Object » retournera un objet incomplet du segment en question. Le « Large Object » sera donc corrompu.
4. L’objet listé est un manifeste SLO ou DLO : si vous êtes capable de reconstruire le contenu du manifeste, l’objet sera accessible à condition qu’aucun objet segment n’ait été détruit (voir les points 2 et 3).

**Découvez comment regénérer des manifestes de type DLO et SLO pour rendre de nouveau accessible des « Larges Objects » pour lesquels tous les fragments sont encore disponibles.**

## Prérequis

- [Générer un token Keystone](https://docs.ovh.com/fr/public-cloud/gestion-des-tokens/#etape-2-recuperation-des-variables-token-id-et-endpoint-publicurl).
- [Préparer l'environment pour utiliser l'API Openstack](https://docs.ovh.com/fr/public-cloud/debuter-avec-lapi-swift/).

## En pratique

### Régénérer un manifeste DLO

Supposons que le manifeste manquant est situé dans le container nommé `container` et concerne l'objet appelé `large_file`.

- Listez les segments restants :

```bash
$ swift list container_segments --prefix large_file

large_file/1617355176.707751/5242880/2097152/00000000
large_file/1617355176.707751/5242880/2097152/00000001
large_file/1617355176.707751/5242880/2097152/00000002
```

- Uploadez le nouveau manifest DLO :

```bash
$ TOKEN="xxx"

$ curl -i -H "X-Auth-Token: $TOKEN" -X PUT -H "Content-Length: 0" -H "x-object-manifest: container_segments/large_file/1617355176.707751/5242880/2097152/" https://storage.sbg.pcs.ovh.net:443/v1/AUTH_XXX/container/large_file
```

- Téléchargez l'objet `large_file` :

```bash
$ swift download container large_file
```

### Régénérer un manifeste SLO

Supposons que le manifeste manquant est situé dans le container nommé `container` et concerne l'objet appelé `large_file`.

- Listez les segments restants :

```bash
$ swift list container_segments --prefix large_file

large_file/slo/1617355964.943691/5242880/2097152/00000000
large_file/slo/1617355964.943691/5242880/2097152/00000001
large_file/slo/1617355964.943691/5242880/2097152/00000002
```

- Générez un fichier **manifest** contenant le json suivant :

```bash
$ cat manifest.json
[
{ "path": "/container_segments/large_file/slo/1617355964.943691/5242880/2097152/00000000" },
{ "path": "/container_segments/large_file/slo/1617355964.943691/5242880/2097152/00000001" },
{ "path": "/container_segments/large_file/slo/1617355964.943691/5242880/2097152/00000002" }
]
```

- Uploadez le manifesto SLO :

```bash
$ TOKEN="xxx"

$ curl -i -H "X-Auth-Token: $TOKEN" -X PUT -d@manifest.json "https://storage.sbg.pcs.ovh.net:443/v1/AUTH_XXX/container/large_file?multipart-manifest=put"
```

- Téléchargez l'objet `large_file` :

```bash
$ swift download container large_file
```

## Aller plus loin

[Documentation officielle OpenStack](https://docs.openstack.org/swift/latest/overview_large_objects.html){.external}
 
Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.
