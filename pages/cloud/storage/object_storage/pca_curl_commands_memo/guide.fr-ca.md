---
title: Object Storage Swift - Mémo de commandes Curl
slug: pca/curl-commands-memo
excerpt: Retrouvez ici les principales commandes curl pour gérer vos conteneurs d'objets Public Cloud Archive
section: Spécificités de la classe de stockage d'archive OpenStack Swift
order: 060
---

**Dernière mise à jour le 27/10/2021**

## Objectif

Retrouvez dans ce guide les principales commandes curl pour gérer vos conteneurs d'objets Public Cloud Archive.

## Prérequis

Chargez les variables d'environnement suivantes :

> `export OS_AUTH_URL=https://auth.cloud.ovh.net/v3/`  
> `export OS_STORAGE_URL=https://storage.<region>.cloud.ovh.net/v1/AUTH_702xxxxxxxxxxxxxxxxxxxxxxxxxxdaf`  
> `export OS_USERNAME=user-xxxxxx`  
> `export OS_PASSWORD=xxx`  
> `export OS_TENANT_ID=702xxxxxxxxxxxxxxxxxxxxxxxxxxdaf`  
> `export OS_AUTH_TOKEN=$(curl -is -X POST ${OS_AUTH_URL}auth/tokens -H "Content-Type: application/json" -d ' { "auth": { "identity": { "methods": ["password"], "password": { "user": { "name": "'$OS_USERNAME'", "domain": { "id": "default" }, "password": "'$OS_PASSWORD'" } } }, "scope": { "project": { "id": "'$OS_TENANT_ID'", "domain": { "id": "default" } } } } }' | grep '^X-Subject-Token' | cut -d" " -f2 | tr -d "\r")`

## En pratique

### Créer un conteneur PCA

```bash
curl -i "${OS_STORAGE_URL}/<conteneur>" -X PUT -H "X-Auth-Token: ${OS_AUTH_TOKEN}" -H "X-Storage-Policy: PCA"
```

### Afficher les informations relatives à un compte

```bash
curl -i "${OS_STORAGE_URL}" -X HEAD -H "X-Auth-Token: ${OS_AUTH_TOKEN}"
```

### Afficher les informations relatives à un conteneur

```bash
curl -i "${OS_STORAGE_URL}/<conteneur>" -X HEAD -H "X-Auth-Token: ${OS_AUTH_TOKEN}"
```

### Afficher les informations relatives à un objet

```bash
curl -i "${OS_STORAGE_URL}/<conteneur>/<objet>" -X HEAD -H "X-Auth-Token: ${OS_AUTH_TOKEN}"
```

### Lister le(s) conteneur(s) relatif(s) à un compte

```bash
curl "${OS_STORAGE_URL}" -X GET -H "X-Auth-Token: ${OS_AUTH_TOKEN}"
```

### Lister le contenu d'un conteneur

```bash
curl "${OS_STORAGE_URL}/<conteneur>" -X GET -H "X-Auth-Token: ${OS_AUTH_TOKEN}"
```

### Upload d'un objet inférieur à 5GB

```bash
curl -i "${OS_STORAGE_URL}/<conteneur>/<objet>" -X PUT -H "X-Auth-Token: ${OS_AUTH_TOKEN}" -H "Content-Type: application/octet-stream" -d "@<objet>"
```

### Upload d'un objet supérieur à 5GB en mode SLO

```bash
FILE=/datas/6gb.img
CONTAINER=pcs-test
OBJECT=6gb.img
CHUNK_SIZE=500M

# Créer un dossier temporaire pour les chunks
TMPDIR="$(mktemp -d)"
cd "${TMPDIR}"

# Diviser le fichier en chunks
split -d -b "${CHUNK_SIZE}" "${FILE}" "$(basename $FILE)_"

# Créer les containers
curl -X PUT -H "X-Auth-Token: ${OS_AUTH_TOKEN}" -H "X-Storage-Policy: PCA" "${OS_STORAGE_URL}/${CONTAINER}"
curl -X PUT -H "X-Auth-Token: ${OS_AUTH_TOKEN}" -H "X-Storage-Policy: PCA" "${OS_STORAGE_URL}/${CONTAINER}_segments"

# Upload des chunks
for chunk in *; do
    curl -X PUT -H "X-Auth-Token: ${OS_AUTH_TOKEN}" -T "${chunk}" "${OS_STORAGE_URL}/${CONTAINER}_segments/${OBJECT}/${chunk}"
done
```

Créez le manifeste au format json en fonction des attributs suivants :

- **path** (Obligatoire)
  eg: `pcs-test_segments/6gb.img_01`
- **etag** (Facultatif)
  Checksum MD5 du segment. Cette valeur est disponible dans le metadata `Etag` du segment via : `curl -i -X HEAD "$OS_STORAGE_URL/<conteneur>/<objet>" -H "X-Auth-Token:$OS_AUTH_TOKEN"`
- **size_bytes** (Facultatif)
  Taille du segment. Cette valeur est disponible dans le metadata `Content-Length` du segment via : `curl -i -X HEAD "$OS_STORAGE_URL/<conteneur>/<objet>" -H "X-Auth-Token:$OS_AUTH_TOKEN"`

Voici un exemple de manifeste :

```json
[
  {
    "path":"pcs-test_segments/myLargeObject_00",
    "etag":"11a3e229084349bc25d97e29393ced1d",
    "size_bytes":"10485760"
  },
  {
    "path":"pcs-test_segments/myLargeObject_01",
    "etag":"6ccef1b25ea58fb8be3ca1a1a744ea53",
    "size_bytes":"10485760"
  },
  {
    "path":"pcs-test_segments/myLargeObject_02",
    "etag":"82c16692a7f9040f3a6eb6a6a3f3c141",
    "size_bytes":"10485760"
  }
  [...]
]
```

```bash
# Upload du fichier manifest
curl -X PUT -H "X-Auth-Token: ${OS_AUTH_TOKEN}" -T manifest.json "$OS_STORAGE_URL/$CONTAINER/$OBJECT?multipart-manifest=put"

# Nettoyage
cd
rm -rf "${TMPDIR}"
```

### Upload d'un objet supérieur à 5GB en mode DLO

```bash
FILE=/datas/6gb.img
CONTAINER=pcs-test
OBJECT=6gb.img
CHUNK_SIZE=500M

# Créer un dossier temporaire pour les chunks
TMPDIR="$(mktemp -d)"
cd "${TMPDIR}"

# Diviser le fichier en chunks
split -d -b "${CHUNK_SIZE}" "${FILE}" "$(basename $FILE)_"

# Créer les containers
curl -X PUT -H "X-Auth-Token: ${OS_AUTH_TOKEN}" -H "X-Storage-Policy: PCA" "${OS_STORAGE_URL}/${CONTAINER}"
curl -X PUT -H "X-Auth-Token: ${OS_AUTH_TOKEN}" -H "X-Storage-Policy: PCA" "${OS_STORAGE_URL}/${CONTAINER}_segments"

# Upload des chunks
for chunk in *; do
    curl -X PUT -H "X-Auth-Token: ${OS_AUTH_TOKEN}" -T "${chunk}" "${OS_STORAGE_URL}/${CONTAINER}_segments/${OBJECT}/${chunk}"
done

# Créer le manifeste
curl -X PUT -H "X-Auth-Token: ${OS_AUTH_TOKEN}" -H "X-Object-Manifest: ${CONTAINER}_segments/${OBJECT}/" --data-binary "" "${OS_STORAGE_URL}/${CONTAINER}/${OBJECT}"

# Nettoyage
cd
rm -rf "${TMPDIR}"
```

### Download d'un objet

```bash
curl "${OS_STORAGE_URL}/<conteneur>/<objet>" -X GET -H "X-Auth-Token: ${OS_AUTH_TOKEN}" -o <output_file>
```

### Supprimer un conteneur vide

```bash
curl "${OS_STORAGE_URL}/<conteneur>" -X DELETE -H "X-Auth-Token: ${OS_AUTH_TOKEN}"
```

### Supprimer un conteneur non vide de moins de 10000 objets

> [!primary]
>
> Si le conteneur contient des LargeObject, il faudra supprimer manuellement le conteneur : `<conteneur_segments>`
>

```bash
OBJECTS=$(curl -s "${OS_STORAGE_URL}/<conteneur>" -X GET -H "X-Auth-Token: ${OS_AUTH_TOKEN}")
for obj in $OBJECTS
do
  curl "${OS_STORAGE_URL}/<conteneur>/$obj" -X DELETE -H "X-Auth-Token: ${OS_AUTH_TOKEN}"
done
curl "${OS_STORAGE_URL}/<conteneur>" -X DELETE -H "X-Auth-Token: ${OS_AUTH_TOKEN}"
```

### Vider un conteneur de plus de 10000 objets

> [!primary]
>
> Si le conteneur contient des LargeObject, il faudra supprimer manuellement le conteneur : `<conteneur_segments>`
>

```bash
#!/bin/bash

START_TIME=$(date '+%s')
RENEW_TOKEN_AFTER=72000 # = 20h
CONTAINER="pcs-test"
OS_STORAGE_URL="https://storage.${OS_REGION_NAME,,}.cloud.ovh.net/v1/AUTH_${OS_TENANT_ID}/${CONTAINER}"
unset OS_AUTH_TOKEN

get_token(){
  export OS_AUTH_TOKEN=$(curl -is -X POST ${OS_AUTH_URL}auth/tokens -H "Content-Type: application/json" -d ' { "auth": { "identity": { "methods": ["password"], "password": { "user": { "name": "'$OS_USERNAME'", "domain": { "id": "default" }, "password": "'$OS_PASSWORD'" } } }, "scope": { "project": { "id": "'$OS_TENANT_ID'", "domain": { "id": "default" } } } } }' | grep '^X-Subject-Token' | cut -d" " -f2 | tr -d "\r") && wait
}
delete_objects(){
  while : ;
  do
    CURRENT_TIME=$(date '+%s')
    if [ $(($CURRENT_TIME - $START_TIME)) -gt $RENEW_TOKEN_AFTER ]
    then
      get_token
    fi
    OBJECTS=$(curl -s "${OS_STORAGE_URL}" -X GET -H "X-Auth-Token:$OS_AUTH_TOKEN")
    if [[ ! -z $OBJECTS ]]
    then
      for obj in $OBJECTS
      do
        echo "DELETING OBJECT: $obj"
        curl -s "${OS_STORAGE_URL}/$obj" -X DELETE -H "X-Auth-Token:$OS_AUTH_TOKEN" && wait
      done
    else
      break
    fi
  done
}

if [[ -z $OS_AUTH_TOKEN ]]
then
  get_token
fi
while [ $(curl -is "${OS_STORAGE_URL}" -X HEAD -H "X-Auth-Token:$OS_AUTH_TOKEN" | awk -F ": " '/X-Container-Object-Count/ {print $2}' | tr -d "\r") -ne 0 ]
do
  delete_objects
done

```

### Supprimer un objet

```bash
curl "${OS_STORAGE_URL}/<conteneur>/<objet>" -X DELETE -H "X-Auth-Token: ${OS_AUTH_TOKEN}"
```

### Supprimer un objet supérieur à 5Gb

```bash
curl "${OS_STORAGE_URL}/<conteneur>/<objet>?multipart-manifest=delete" -X DELETE -H "X-Auth-Token: ${OS_AUTH_TOKEN}"
```

> [!primary]
>
> Sans l'argument `?multipart-manifest=delete`, cela ne supprimera que le fichier manifest sans les segments.
>

### Ajouter un metadata à un conteneur

```bash
curl "${OS_STORAGE_URL}/<conteneur>" -X POST -H "X-Auth-Token: ${OS_AUTH_TOKEN}" -H "X-Container-Meta-Access-Control-Allow-Origin:http://example.com"
```

### Ajouter un metadata à un objet

```bash
curl "${OS_STORAGE_URL}/<conteneur>/<objet>" -X POST -H "X-Auth-Token: ${OS_AUTH_TOKEN}" -H "X-Object-Meta-my-custom-key:value"
```

### Supprimer un metadata d'un conteneur

```bash
curl "${OS_STORAGE_URL}/<conteneur>" -X POST -H "X-Auth-Token: ${OS_AUTH_TOKEN}" -H "X-Remove-Container-Meta-Access-Control-Allow-Origin"
```

### Supprimer un metadata d'un objet

```bash
curl "${OS_STORAGE_URL}/<conteneur>/<objet>" -X POST -H "X-Auth-Token: ${OS_AUTH_TOKEN}" -H "X-Remove-Object-My-Custom-Key"
```

### Définir l'ACL de lecture sur un conteneur

```bash
curl "${OS_STORAGE_URL}/<conteneur>" -X POST -H "X-Auth-Token: ${OS_AUTH_TOKEN}" -H "X-Container-Read:${OS_TENANT_ID}:*"
```

### Définir l'ACL d'écriture sur un conteneur

```bash
curl "${OS_STORAGE_URL}/<conteneur>" -X POST -H "X-Auth-Token: ${OS_AUTH_TOKEN}" -H "X-Container-Write:${OS_TENANT_ID}:*"
```

### Supprimer l'ACL de lecture sur un conteneur

```bash
curl "${OS_STORAGE_URL}/<conteneur>" -X POST -H "X-Auth-Token: ${OS_AUTH_TOKEN}" -H "X-Remove-Container-Read:x"
```

### Supprimer l'ACL d'écriture sur un conteneur

```bash
curl "${OS_STORAGE_URL}/<conteneur>" -X POST -H "X-Auth-Token: ${OS_AUTH_TOKEN}" -H "X-Remove-Container-Write:x"
```

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur [https://community.ovh.com](https://community.ovh.com){.external}.
