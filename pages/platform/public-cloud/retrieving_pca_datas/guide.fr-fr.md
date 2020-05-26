---
title: Récupérer les donnees provenant de PCA
slug: recuperer-les-donnees-provenant-de-pca
legacy_guide_number: 2067
section: Stockage
order: 8
---


## Préambule
Comme vous avez pu le voir suite aux différentes communications effectuées, la beta de Public Cloud Archives (PCA) a maintenant pris fin.

Étant donné que depuis début Décembre vous ne pouvez plus uploader de données, nous en avons profité pour commencer la migration des données de PCA vers l'Object Storage.

Vous pouvez dès lors télécharger vos données grâce aux manipulations conseillées dans ce guide.


## Recuperation de vos donnees

### Avec le client OpenStack Swift
Installez pip le gestionnaire de package de python sur votre système puis récupérez le client Swift d'Openstack :


```python
1. pip install python-swiftclient
```

Vous pouvez alors interagir avec vos données, par exemple les lister :


```bash
swift --os-storage-url ${storageEndpoint} --os-auth-url ${authEndpoint} --os-username ${login} --os-password ${password} --os-region-name ${region} --os-tenant-id ${tenantId} list ${container}
```

Ou encore récupérer un fichier/dossier sous le chemin [path] (laisser vide pour récupérer l'intégralité des objets) :


```bash
swift --os-storage-url ${storageEndpoint} --os-auth-url ${authEndpoint} --os-username ${login} --os-password ${password} --os-region-name ${region} --os-tenant-id ${tenantId} download ${container} [path]
```

Pour plus d'informations vous pouvez consulter la [documentation officielle](http://docs.openstack.org/cli-reference/content/swiftclient_commands.html){.external}.
