---
title: 'Liste des adresses IP des clusters et hebergements web'
slug: liste-des-adresses-ip-des-clusters-et-hebergements-web
section: "Configuration de l'hébergement"
order: 3
---

**Dernière mise à jour le 07/01/2021**

## Objectif

Vous trouverez dans ce guide toutes les adresses IP des hébergements web OVHcloud. Cela vous permettra par exemple de trouver quelle adresse IP renseigner dans vos zones DNS, en fonction de :

- votre cluster
- vos options (CDN, SSL payant, SSL gratuit...)
- le pays recherché ...

> [!primary]
>
> Les adresses IP de l'option CDN sont "Anycast".
> C'est à dire qu'elles n'ont pas besoin de géolocalisation ([Plus d'informations ici](https://www.ovhcloud.com/fr/web-hosting/options/cdn/)).
> 
## Prérequis

- Être connecté à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr){.external}.
- Posséder une [offre d'hébergement web](https://www.ovhcloud.com/fr/web-hosting/){.external}.

## En pratique

Pour connaître le cluster d'hébergement web sur lequel se trouve votre service, connectez-vous à l'[espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr) et sélectionnez `Web Cloud`{.action}. Cliquez sur `Hébergements`{.action}, puis choisissez l'hébergement Web concerné. Ensuite, accédez à l'onglet `FTP - SSH`{.action}.
Vous pouvez vérifier le numéro de cluster de l'hébergement Web sur cette page sous **Serveur FTP**.

### Cluster 002

Retrouvez les adresses IP du **cluster** par pays (pour la géolocalisation) :

|Pays|Code Pays|IPv4|IPv6|
|---|---|----|---|
|France|FR|213.186.33.2|2001:41d0:1:1b00:213:186:33:2|
|Irlande|IE|188.165.7.2|2001:41d0:1:1b00:188:165:7:2|
|Portugal|PT|94.23.79.2|2001:41d0:1:1b00:94:23:79:2|
|Royaume-Uni|UK|87.98.255.2|2001:41d0:1:1b00:87:98:255:2|
|Italie|IT|94.23.64.2|2001:41d0:1:1b00:94:23:64:2|
|Espagne|ES|87.98.231.2|2001:41d0:1:1b00:87:98:231:2|
|Pologne|PL|87.98.239.2|2001:41d0:1:1b00:87:98:239:2|
|République tchèque|CZ|94.23.175.2|2001:41d0:1:1b00:94:23:175:2|
|Pays-Bas|NL|94.23.151.2|2001:41d0:1:1b00:94:23:151:2|
|Finlande|FI|188.165.143.2|2001:41d0:1:1b00:188:165:143:2|
|Lituanie|LT|188.165.31.2|2001:41d0:1:1b00:188:165:31:2|
|Allemagne|DE|87.98.247.2|2001:41d0:1:1b00:87:98:247:2|

Si le **CDN Legacy** est activé sur votre hébergement, vous devez utiliser cette adresse IP :

```bash
213.186.33.69
```

Si le **Shared CDN** (sorti le 19/11/2020) est activé sur votre hébergement, vous devez utiliser cette adresse IP :

```bash
46.105.204.2
```

Si le **Certificat SSL GlobalSign (payant)** est activé sur votre hébergement, vous devez utiliser cette adresse IP :

```bash
46.105.174.33
```

Si vous avez besoin de l'adresse IP de la **passerelle de sortie** de votre hébergement (gateway), vous devez utiliser cette adresse IP :

```bash
51.68.11.191
```

### Cluster 003

Retrouvez les adresses IP du **cluster** par pays (pour la géolocalisation) :

|Pays|Code Pays|IPv4|IPv6|
|---|---|----|---|
|France|FR|213.186.33.4|2001:41d0:1:1b00:213:186:33:4|
|Irlande|IE|188.165.7.4|2001:41d0:1:1b00:188:165:7:4|
|Portugal|PT|94.23.79.4|2001:41d0:1:1b00:94:23:79:4|
|Royaume-Uni|UK|87.98.255.4|2001:41d0:1:1b00:87:98:255:4|
|Italie|IT|94.23.64.4|2001:41d0:1:1b00:94:23:64:4|
|Espagne|ES|87.98.231.4|2001:41d0:1:1b00:87:98:231:4|
|Pologne|PL|87.98.239.4|2001:41d0:1:1b00:87:98:239:4|
|République tchèque|CZ|94.23.175.4|2001:41d0:1:1b00:94:23:175:4|
|Pays-Bas|NL|94.23.151.4|2001:41d0:1:1b00:94:23:151:4|
|Finlande|FI|188.165.143.4|2001:41d0:1:1b00:188:165:143:4|
|Lituanie|LT|188.165.31.4|2001:41d0:1:1b00:188:165:31:4|
|Allemagne|DE|87.98.247.4|2001:41d0:1:1b00:87:98:247:4|

Si le **CDN Legacy** est activé sur votre hébergement, vous devez utiliser cette adresse IP :

```bash
213.186.33.85
```

Si le **Shared CDN** (sorti le 19/11/2020) est activé sur votre hébergement, vous devez utiliser cette adresse IP :

```bash
46.105.204.3
```

Si le **Certificat SSL GlobalSign (payant)** est activé sur votre hébergement, vous devez utiliser cette adresse IP :

```bash
46.105.174.34
```

Si vous avez besoin de l'adresse IP de la **passerelle de sortie** de votre hébergement (gateway), vous devez utiliser cette adresse IP :

```bash
51.68.11.195
```

### Cluster 005

Retrouvez les adresses IP du **cluster** par pays (pour la géolocalisation) :

|Pays|Code Pays|IPv4|IPv6|
|---|---|----|---|
|France|FR|213.186.33.16|2001:41d0:1:1b00:213:186:33:16|
|Irlande|IE|188.165.7.16|2001:41d0:1:1b00:188:165:7:16|
|Portugal|PT|94.23.79.16|2001:41d0:1:1b00:94:23:79:16|
|Royaume-Uni|UK|87.98.255.16|2001:41d0:1:1b00:87:98:255:16|
|Italie|IT|94.23.64.16|2001:41d0:1:1b00:94:23:64:16|
|Espagne|ES|87.98.231.16|2001:41d0:1:1b00:87:98:231:16|
|Pologne|PL|87.98.239.16|2001:41d0:1:1b00:87:98:239:16|
|République tchèque|CZ|94.23.175.16|2001:41d0:1:1b00:94:23:175:16|
|Pays-Bas|NL|94.23.151.16|2001:41d0:1:1b00:94:23:151:16|
|Finlande|FI|188.165.143.16|2001:41d0:1:1b00:188:165:143:16|
|Lituanie|LT|188.165.31.16|2001:41d0:1:1b00:188.165.31.16|
|Allemagne|DE|87.98.247.16|2001:41d0:1:1b00:87:98:247:16|

Si le **CDN Legacy** est activé sur votre hébergement, vous devez utiliser cette adresse IP :

```bash
213.186.33.95
```

Si le **Shared CDN** (sorti le 19/11/2020) est activé sur votre hébergement, vous devez utiliser cette adresse IP :

```bash
46.105.204.5
```

Si le **Certificat SSL GlobalSign (payant)** est activé sur votre hébergement, vous devez utiliser cette adresse IP :

```bash
46.105.174.35
```

Si vous avez besoin de l'adresse IP de la **passerelle de sortie** de votre hébergement (gateway), vous devez utiliser cette adresse IP :

```bash
51.68.11.199
```

### Cluster 006

Retrouvez les adresses IP du **cluster** par pays (pour la géolocalisation) :

|Pays|Code Pays|IPv4|IPv6|
|---|---|----|---|
|France|FR|213.186.33.17|2001:41d0:1:1b00:213:186:33:17|
|Irlande|IE|188.165.7.17|2001:41d0:1:1b00:188:165:7:17|
|Portugal|PT|94.23.79.17|2001:41d0:1:1b00:94:23:79:17|
|Royaume-Uni|UK|87.98.255.17|2001:41d0:1:1b00:87:98:255:17|
|Italie|IT|94.23.64.17|2001:41d0:1:1b00:94:23:64:17|
|Espagne|ES|87.98.231.17|2001:41d0:1:1b00:87:98:231:17|
|Pologne|PL|87.98.239.17|2001:41d0:1:1b00:87:98:239:17|
|République tchèque|CZ|94.23.175.17|2001:41d0:1:1b00:94:23:175:17|
|Pays-Bas|NL|94.23.151.17|2001:41d0:1:1b00:94:23:151:17|
|Finlande|FI|188.165.143.17|2001:41d0:1:1b00:188:165:143:17|
|Lituanie|LT|188.165.31.17|2001:41d0:1:1b00:188:165:31:17|
|Allemagne|DE|87.98.247.17|2001:41d0:1:1b00:87:98:247:17|

Si le **CDN Legacy** est activé sur votre hébergement, vous devez utiliser cette adresse IP :

```bash
213.186.33.97
```

Si le **Shared CDN** (sorti le 19/11/2020) est activé sur votre hébergement, vous devez utiliser cette adresse IP :

```bash
46.105.204.6
```

Si le **Certificat SSL GlobalSign (payant)** est activé sur votre hébergement, vous devez utiliser cette adresse IP :

```bash
46.105.174.36
```

Si vous avez besoin de l'adresse IP de la **passerelle de sortie** de votre hébergement (gateway), vous devez utiliser cette adresse IP :

```bash
51.68.11.203
```

### Cluster 007

Retrouvez les adresses IP du **cluster** par pays (pour la géolocalisation) :

|Pays|Code Pays|IPv4|IPv6|
|---|---|----|---|
|France|FR|213.186.33.18|2001:41d0:1:1b00:213:186:33:18|
|Irlande|IE|188.165.7.18|2001:41d0:1:1b00:188:165:7:18|
|Portugal|PT|94.23.79.18|2001:41d0:1:1b00:94:23:79:18|
|Royaume-Uni|UK|87.98.255.18|2001:41d0:1:1b00:87:98:255:18|
|Italie|IT|94.23.64.18|2001:41d0:1:1b00:94:23:64:18|
|Espagne|ES|87.98.231.18|2001:41d0:1:1b00:87:98:231:18|
|Pologne|PL|87.98.239.18|2001:41d0:1:1b00:87:98:239:18|
|République tchèque|CZ|94.23.175.18|2001:41d0:1:1b00:94:23:175:18|
|Pays-Bas|NL|94.23.151.18|2001:41d0:1:1b00:94:23:151:18|
|Finlande|FI|188.165.143.18|2001:41d0:1:1b00:188:165:143:18|
|Lituanie|LT|188.165.31.18|2001:41d0:1:1b00:188:165:31:18|
|Allemagne|DE|87.98.247.18|2001:41d0:1:1b00:87:98:247:18|

Si le **CDN Legacy** est activé sur votre hébergement, vous devez utiliser cette adresse IP :

```bash
213.186.33.105
```

Si le **Shared CDN** (sorti le 19/11/2020) est activé sur votre hébergement, vous devez utiliser cette adresse IP :

```bash
46.105.204.7
```

Si le **Certificat SSL GlobalSign (payant)** est activé sur votre hébergement, vous devez utiliser cette adresse IP :

```bash
46.105.174.37
```

Si vous avez besoin de l'adresse IP de la **passerelle de sortie** de votre hébergement (gateway), vous devez utiliser cette adresse IP :

```bash
51.68.11.207
```

### Cluster 010

Retrouvez les adresses IP du **cluster** par pays (pour la géolocalisation) :

|Pays|Code Pays|IPv4|IPv6|
|---|---|----|---|
|France|FR|213.186.33.19|2001:41d0:1:1b00:213:186:33:19|
|Irlande|IE|188.165.7.19|2001:41d0:1:1b00:188:165:7:19|
|Portugal|PT|94.23.79.19|2001:41d0:1:1b00:94:23:79:19|
|Royaume-Uni|UK|87.98.255.19|2001:41d0:1:1b00:87:98:255:19|
|Italie|IT|94.23.64.19|2001:41d0:1:1b00:94:23:64:19|
|Espagne|ES|87.98.231.19|2001:41d0:1:1b00:87:98:231:19|
|Pologne|PL|87.98.239.19|2001:41d0:1:1b00:87:98:239:19|
|République tchèque|CZ|94.23.175.19|2001:41d0:1:1b00:94:23:175:19|
|Pays-Bas|NL|94.23.151.19|2001:41d0:1:1b00:94:23:151:19|
|Finlande|FI|188.165.143.19|2001:41d0:1:1b00:188:165:143:19|
|Lituanie|LT|188.165.31.19|2001:41d0:1:1b00:188:165:31:19|
|Allemagne|DE|87.98.247.19|2001:41d0:1:1b00:87:98:247:19|

Si le **CDN Legacy** est activé sur votre hébergement, vous devez utiliser cette adresse IP :

```bash
213.186.33.107
```

Si le **Shared CDN** (sorti le 19/11/2020) est activé sur votre hébergement, vous devez utiliser cette adresse IP :

```bash
46.105.204.10
```

Si le **Certificat SSL GlobalSign (payant)** est activé sur votre hébergement, vous devez utiliser cette adresse IP :

```bash
46.105.174.38
```

Si vous avez besoin de l'adresse IP de la **passerelle de sortie** de votre hébergement (gateway), vous devez utiliser cette adresse IP :

```bash
51.68.11.211
```

### Cluster 011

Retrouvez les adresses IP du **cluster** par pays (pour la géolocalisation) :

|Pays|Code Pays|IPv4|IPv6|
|---|---|----|---|
|France|FR|213.186.33.40|2001:41d0:1:1b00:213:186:33:40|
|Irlande|IE|188.165.7.40|2001:41d0:1:1b00:188:165:7:40|
|Portugal|PT|94.23.79.40|2001:41d0:1:1b00:94:23:79:40|
|Royaume-Uni|UK|87.98.255.40|2001:41d0:1:1b00:87:98:255:40|
|Italie|IT|94.23.64.40|2001:41d0:1:1b00:94:23:64:40|
|Espagne|ES|87.98.231.40|2001:41d0:1:1b00:87:98:231:40|
|Pologne|PL|87.98.239.40|2001:41d0:1:1b00:87:98:239:40|
|République tchèque|CZ|94.23.175.40|2001:41d0:1:1b00:94:23:175:40|
|Pays-Bas|NL|94.23.151.40|2001:41d0:1:1b00:94:23:151:40|
|Finlande|FI|188.165.143.40|2001:41d0:1:1b00:188:165:143:40|
|Lituanie|LT|188.165.31.40|2001:41d0:1:1b00:188:165:31:40|
|Allemagne|DE|87.98.247.40|2001:41d0:1:1b00:87:98:247:40|

Si le **CDN Legacy** est activé sur votre hébergement, vous devez utiliser cette adresse IP :

```bash
213.186.33.151
```

Si le **Shared CDN** (sorti le 19/11/2020) est activé sur votre hébergement, vous devez utiliser cette adresse IP :

```bash
46.105.204.11
```

Si le **Certificat SSL GlobalSign (payant)** est activé sur votre hébergement, vous devez utiliser cette adresse IP :

```bash
46.105.174.39
```

Si vous avez besoin de l'adresse IP de la **passerelle de sortie** de votre hébergement (gateway), vous devez utiliser cette adresse IP :

```bash
51.68.11.215
```

### Cluster 012

Retrouvez les adresses IP du **cluster** par pays (pour la géolocalisation) :

|Pays|Code Pays|IPv4|IPv6|
|---|---|----|---|
|France|FR|213.186.33.48|2001:41d0:1:1b00:213:186:33:48|
|Irlande|IE|188.165.7.48|2001:41d0:1:1b00:188:165:7:48|
|Portugal|PT|94.23.79.48|2001:41d0:1:1b00:94:23:79:48|
|Royaume-Uni|UK|87.98.255.48|2001:41d0:1:1b00:87:98:255:48|
|Italie|IT|94.23.64.48|2001:41d0:1:1b00:94:23:64:48|
|Espagne|ES|87.98.231.48|2001:41d0:1:1b00:87:98:231:48|
|Pologne|PL|87.98.239.48|2001:41d0:1:1b00:87:98:239:48|
|République tchèque|CZ|94.23.175.48|2001:41d0:1:1b00:94:23:175:48|
|Pays-Bas|NL|94.23.151.48|2001:41d0:1:1b00:94:23:151:48|
|Finlande|FI|188.165.143.48|2001:41d0:1:1b00:188:165:143:48|
|Lituanie|LT|188.165.31.48|2001:41d0:1:1b00:188:165:31:48|
|Allemagne|DE|87.98.247.48|2001:41d0:1:1b00:87:98:247:48|

Si le **CDN Legacy** est activé sur votre hébergement, vous devez utiliser cette adresse IP :

```bash
213.186.33.153
```

Si le **Shared CDN** (sorti le 19/11/2020) est activé sur votre hébergement, vous devez utiliser cette adresse IP :

```bash
46.105.204.12
```

Si le **Certificat SSL GlobalSign (payant)** est activé sur votre hébergement, vous devez utiliser cette adresse IP :

```bash
46.105.174.40
```

Si vous avez besoin de l'adresse IP de la **passerelle de sortie** de votre hébergement (gateway), vous devez utiliser cette adresse IP :

```bash
51.68.11.219
```

### Cluster 013

Retrouvez les adresses IP du **cluster** par pays (pour la géolocalisation) :

|Pays|Code Pays|IPv4|IPv6|
|---|---|----|---|
|France|FR|213.186.33.24|2001:41d0:1:1b00:213:186:33:24|
|Irlande|IE|188.165.7.24|2001:41d0:1:1b00:188:165:7:24|
|Portugal|PT|94.23.79.24|2001:41d0:1:1b00:94:23:79:24|
|Royaume-Uni|UK|87.98.255.24|2001:41d0:1:1b00:87:98:255:24|
|Italie|IT|94.23.64.24|2001:41d0:1:1b00:94:23:64:24|
|Espagne|ES|87.98.231.24|2001:41d0:1:1b00:87:98:231:24|
|Pologne|PL|87.98.239.24|2001:41d0:1:1b00:87:98:239:24|
|République tchèque|CZ|94.23.175.24|2001:41d0:1:1b00:94:23:175:24|
|Pays-Bas|NL|94.23.151.24|2001:41d0:1:1b00:94:23:151:24|
|Finlande|FI|188.165.143.24|2001:41d0:1:1b00:188:165:143:24|
|Lituanie|LT|188.165.31.24|2001:41d0:1:1b00:188:165:31:24|
|Allemagne|DE|87.98.247.24|2001:41d0:1:1b00:87:98:247:24|

Si le **CDN Legacy** est activé sur votre hébergement, vous devez utiliser cette adresse IP :

```bash
213.186.33.83
```

Si le **Shared CDN** (sorti le 19/11/2020) est activé sur votre hébergement, vous devez utiliser cette adresse IP :

```bash
46.105.204.13
```

Si le **Certificat SSL GlobalSign (payant)** est activé sur votre hébergement, vous devez utiliser cette adresse IP :

```bash
46.105.174.41
```

Si vous avez besoin de l'adresse IP de la **passerelle de sortie** de votre hébergement (gateway), vous devez utiliser cette adresse IP :

```bash
51.68.11.223
```

### Cluster 014

Retrouvez les adresses IP du **cluster** par pays (pour la géolocalisation) :

|Pays|Code Pays|IPv4|IPv6|
|---|---|----|---|
|France|FR|213.186.33.87|2001:41d0:1:1b00:213:186:33:87|
|Irlande|IE|188.165.7.87|2001:41d0:1:1b00:188:165:7:87|
|Portugal|PT|94.23.79.87|2001:41d0:1:1b00:94:23:79:87|
|Royaume-Uni|UK|87.98.255.87|2001:41d0:1:1b00:87:98:255:87|
|Italie|IT|94.23.64.87|2001:41d0:1:1b00:94:23:64:87|
|Espagne|ES|87.98.231.87|2001:41d0:1:1b00:87:98:231:87|
|Pologne|PL|87.98.239.87|2001:41d0:1:1b00:87:98:239:87|
|République tchèque|CZ|94.23.175.87|2001:41d0:1:1b00:94:23:175:87|
|Pays-Bas|NL|94.23.151.87|2001:41d0:1:1b00:94:23:151:87|
|Finlande|FI|188.165.143.87|2001:41d0:1:1b00:188:165:143:87|
|Lituanie|LT|188.165.31.87|2001:41d0:1:1b00:188:165:31:87|
|Allemagne|DE|87.98.247.87|2001:41d0:1:1b00:87:98:247:87|

Si le **CDN Legacy** est activé sur votre hébergement, vous devez utiliser cette adresse IP :

```bash
213.186.33.169
```

Si le **Shared CDN** (sorti le 19/11/2020) est activé sur votre hébergement, vous devez utiliser cette adresse IP :

```bash
46.105.204.14
```

Si le **Certificat SSL GlobalSign (payant)** est activé sur votre hébergement, vous devez utiliser cette adresse IP :

```bash
46.105.174.42
```

Si vous avez besoin de l'adresse IP de la **passerelle de sortie** de votre hébergement (gateway), vous devez utiliser cette adresse IP :

```bash
51.68.11.227
```

### Cluster 015

Retrouvez les adresses IP du **cluster** par pays (pour la géolocalisation) :

|Pays|Code Pays|IPv4|IPv6|
|---|---|----|---|
|France|FR|213.186.33.3|2001:41d0:1:1b00:213:186:33:3|
|Irlande|IE|188.165.7.3|2001:41d0:1:1b00:188:165:7:3|
|Portugal|PT|94.23.79.3|2001:41d0:1:1b00:94:23:79:3|
|Royaume-Uni|UK|87.98.255.3|2001:41d0:1:1b00:87:98:255:3|
|Italie|IT|94.23.64.3|2001:41d0:1:1b00:94:23:64:3|
|Espagne|ES|87.98.231.3|2001:41d0:1:1b00:87:98:231:3|
|Pologne|PL|87.98.239.3|2001:41d0:1:1b00:87:98:239:3|
|République tchèque|CZ|94.23.175.3|2001:41d0:1:1b00:94:23:175:3|
|Pays-Bas|NL|94.23.151.3|2001:41d0:1:1b00:94:23:151:3|
|Finlande|FI|188.165.143.3|2001:41d0:1:1b00:188:165:143:3|
|Lituanie|LT|188.165.31.3|2001:41d0:1:1b00:188:165:31:3|
|Allemagne|DE|87.98.247.3|2001:41d0:1:1b00:87:98:247:3|

Si le **CDN Legacy** est activé sur votre hébergement, vous devez utiliser cette adresse IP :

```bash
213.186.33.171
```

Si le **Shared CDN** (sorti le 19/11/2020) est activé sur votre hébergement, vous devez utiliser cette adresse IP :

```bash
46.105.204.15
```

Si le **Certificat SSL GlobalSign (payant)** est activé sur votre hébergement, vous devez utiliser cette adresse IP :

```bash
46.105.174.43
```

Si vous avez besoin de l'adresse IP de la **passerelle de sortie** de votre hébergement (gateway), vous devez utiliser cette adresse IP :

```bash
51.68.11.231
```

### Cluster 017

Retrouvez les adresses IP du **cluster** par pays (pour la géolocalisation) :

|Pays|Code Pays|IPv4|IPv6|
|---|---|----|---|
|France|FR|213.186.33.50|2001:41d0:1:1b00:213:186:33:50|
|Irlande|IE|188.165.7.50|2001:41d0:1:1b00:188:165:7:50|
|Portugal|PT|94.23.79.50|2001:41d0:1:1b00:94:23:79:50|
|Royaume-Uni|UK|87.98.255.50|2001:41d0:1:1b00:87:98:255:50|
|Italie|IT|94.23.64.50|2001:41d0:1:1b00:94:23:64:50|
|Espagne|ES|87.98.231.50|2001:41d0:1:1b00:87:98:231:50|
|Pologne|PL|87.98.239.50|2001:41d0:1:1b00:87:98:239:50|
|République tchèque|CZ|94.23.175.50|2001:41d0:1:1b00:94:23:175:50|
|Pays-Bas|NL|94.23.151.50|2001:41d0:1:1b00:94:23:151:50|
|Finlande|FI|188.165.143.50|2001:41d0:1:1b00:188:165:143:50|
|Lituanie|LT|188.165.31.50|2001:41d0:1:1b00:188:165:31:50|
|Allemagne|DE|87.98.247.50|2001:41d0:1:1b00:87:98:247:50|

Si le **CDN Legacy** est activé sur votre hébergement, vous devez utiliser cette adresse IP :

```bash
213.186.33.173
```

Si le **Shared CDN** (sorti le 19/11/2020) est activé sur votre hébergement, vous devez utiliser cette adresse IP :

```bash
46.105.204.17
```

Si le **Certificat SSL GlobalSign (payant)** est activé sur votre hébergement, vous devez utiliser cette adresse IP :

```bash
46.105.174.44
```

Si vous avez besoin de l'adresse IP de la **passerelle de sortie** de votre hébergement (gateway), vous devez utiliser cette adresse IP :

```bash
51.68.11.239
```

### Cluster 020

Retrouvez les adresses IP du **cluster** par pays (pour la géolocalisation) :

|Pays|Code Pays|IPv4|IPv6|
|---|---|----|---|
|France|FR|46.105.57.169|2001:41d0:301::20|
|Irlande|IE|51.254.78.227|2001:41d0:301:3::20|
|Portugal|PT|5.135.59.60|2001:41d0:301:2::20|
|Royaume-Uni|UK|51.254.94.183|2001:41d0:301:12::20|
|Italie|IT|37.59.236.156|2001:41d0:301:11::20|
|Espagne|ES|37.59.203.111|2001:41d0:301:4::20|
|Pologne|PL|178.32.149.185|2001:41d0:301:5::20|
|République tchèque|CZ|51.254.181.43|2001:41d0:301:6::20|
|Pays-Bas|NL|37.59.164.205|2001:41d0:301:7::20|
|Finlande|FI|5.196.208.117|2001:41d0:301:8::20|
|Lituanie|LT|5.196.129.52|2001:41d0:301:9::20|
|Allemagne|DE|5.135.108.219|2001:41d0:301:1::20|
|Belgique|BE|5.196.203.200|2001:41d0:301:10::20|

Si le **CDN Legacy** est activé sur votre hébergement, vous devez utiliser cette adresse IP :

```bash
213.186.33.176
```

Si le **Shared CDN** (sorti le 19/11/2020) est activé sur votre hébergement, vous devez utiliser cette adresse IP :

```bash
46.105.204.20
```

Si vous avez besoin de l'adresse IP de la **passerelle de sortie** de votre hébergement (gateway), vous devez utiliser cette adresse IP :

```bash
91.134.248.253
```

### Cluster 021

Retrouvez les adresses IP du **cluster** par pays (pour la géolocalisation) :

|Pays|Code Pays|IPv4|IPv6|
|---|---|----|---|
|France|FR|188.165.53.185|2001:41d0:301::21|
|Irlande|IE|188.165.6.20|2001:41d0:301:6::21|
|Portugal|PT|94.23.75.235|2001:41d0:301:2::21|
|Royaume-Uni|UK|94.23.152.220|2001:41d0:301:12::21|
|Italie|IT|94.23.69.227|2001:41d0:301:11::21|
|Espagne|ES|87.98.230.241|2001:41d0:301:4::21|
|Pologne|PL|188.165.23.19|2001:41d0:301:5::21|
|République tchèque|CZ|94.23.173.184|2001:41d0:301:6::21|
|Pays-Bas|NL|94.23.144.60|2001:41d0:301:7::21|
|Finlande|FI|188.165.139.219|2001:41d0:301:8::21|
|Lituanie|LT|188.165.30.41|2001:41d0:301:9::21|
|Allemagne|DE|94.23.162.9|2001:41d0:301:1::21|
|Belgique|BE|178.32.40.72|2001:41d0:301:10::21|

Si le **CDN Legacy**  est activé sur votre hébergement, vous devez utiliser cette adresse IP :

```bash
213.186.33.177
```

Si le **Shared CDN** (sorti le 19/11/2020)est activé sur votre hébergement, vous devez utiliser cette adresse IP :

```bash
46.105.204.21
```

Si vous avez besoin de l'adresse IP de la **passerelle de sortie** de votre hébergement (gateway), vous devez utiliser cette adresse IP :

```bash
91.134.248.245
```

### Cluster 023

Retrouvez les adresses IP du **cluster** par pays (pour la géolocalisation) :

|Pays|Code Pays|IPv4|IPv6|
|---|---|----|---|
|France|FR|164.132.235.17|2001:41d0:301::23|
|Irlande|IE|79.137.112.24|2001:41d0:301:3::23|
|Portugal|PT|5.135.68.66|2001:41d0:301:2::23|
|Royaume-Uni|UK|178.32.59.150|2001:41d0:301:12::23|
|Italie|IT|178.32.140.171|2001:41d0:301:11::23|
|Espagne|ES|51.254.16.36|2001:41d0:301:4::23|
|Pologne|PL|87.98.235.184|2001:41d0:301:5::23|
|République tchèque|CZ|94.23.169.83|2001:41d0:301:6::23|
|Pays-Bas|NL|94.23.148.187|2001:41d0:301:7::23|
|Finlande|FI|178.32.17.246|2001:41d0:301:8::23|
|Lituanie|LT|37.59.69.122|2001:41d0:301:9::23|
|Allemagne|DE|87.98.242.65|2001:41d0:301:1::23|
|Belgique|BE|137.74.229.68|2001:41d0:301:10::23|

Si le **CDN Legacy** est activé sur votre hébergement, vous devez utiliser cette adresse IP :

```bash
213.186.33.186
```

Si le **Shared CDN** (sorti le 19/11/2020) est activé sur votre hébergement, vous devez utiliser cette adresse IP :

```bash
46.105.204.23
```

Si vous avez besoin de l'adresse IP de la **passerelle de sortie** de votre hébergement (gateway), vous devez utiliser cette adresse IP :

```bash
91.134.248.235
```

### Cluster 024

Retrouvez les adresses IP du **cluster** par pays (pour la géolocalisation) :

|Pays|Code Pays|IPv4|IPv6|
|---|---|----|---|
|France|FR|188.165.61.82|2001:41d0:301::24|
|Irlande|IE|188.165.6.81|2001:41d0:301:3::24|
|Portugal|PT|5.135.68.67|2001:41d0:301:2::24|
|Royaume-Uni|UK|178.32.59.194|2001:41d0:301:12::24|
|Italie|IT|178.32.140.172|2001:41d0:301:11::24|
|Espagne|ES|51.255.132.41|2001:41d0:301:4::24|
|Pologne|PL|94.23.88.105|2001:41d0:301:5::24|
|République tchèque|CZ|94.23.169.75|2001:41d0:301:6::24|
|Pays-Bas|NL|94.23.149.14|2001:41d0:301:7::24|
|Finlande|FI|188.165.138.2|2001:41d0:301:8::24|
|Lituanie|LT|164.132.150.73|2001:41d0:301:9::24|
|Allemagne|DE|178.33.38.88|2001:41d0:301:1::24|
|Belgique|BE|213.32.81.103|2001:41d0:301:10::24|

Si le **CDN Legacy** est activé sur votre hébergement, vous devez utiliser cette adresse IP :

```bash
213.186.33.187
```

Si le **Shared CDN** (sorti le 19/11/2020) est activé sur votre hébergement, vous devez utiliser cette adresse IP :

```bash
46.105.204.24
```

Si vous avez besoin de l'adresse IP de la **passerelle de sortie** de votre hébergement (gateway), vous devez utiliser cette adresse IP :

```bash
91.134.248.230
```

### Cluster 026

Retrouvez les adresses IP du **cluster** par pays (pour la géolocalisation) :

|Pays|Code Pays|IPv4|IPv6|
|---|---|----|---|
|France|FR|87.98.154.146|2001:41d0:301::26|
|Irlande|IE|188.165.4.35|2001:41d0:301:3::26|
|Portugal|PT|51.254.64.107|2001:41d0:301:2::26|
|Royaume-Uni|UK|91.134.201.112|2001:41d0:301:12::26|
|Italie|IT|94.23.66.212|2001:41d0:301:11::26|
|Espagne|ES|188.165.129.145|2001:41d0:301:4::26|
|Pologne|PL|178.32.205.96|2001:41d0:301:5::26|
|République tchèque|CZ|137.74.234.211|2001:41d0:301:6::26|
|Pays-Bas|NL|137.74.180.117|2001:41d0:301:7::26|
|Finlande|FI|137.74.48.119|2001:41d0:301:8::26|
|Lituanie|LT|188.165.29.126|2001:41d0:301:9::26|
|Allemagne|DE|94.23.160.29|2001:41d0:301:1::26|
|Belgique|BE|178.32.43.46|2001:41d0:301:10::26|

Si le **CDN Legacy** est activé sur votre hébergement, vous devez utiliser cette adresse IP :

```bash
188.165.51.93
```

Si le **Shared CDN** (sorti le 19/11/2020) est activé sur votre hébergement, vous devez utiliser cette adresse IP :

```bash
46.105.204.26
```

Si vous avez besoin de l'adresse IP de la **passerelle de sortie** de votre hébergement (gateway), vous devez utiliser cette adresse IP :

```bash
91.134.248.211
```

### Cluster 027

Retrouvez les adresses IP du **cluster** par pays (pour la géolocalisation) :

|Pays|Code Pays|IPv4|IPv6|
|---|---|----|---|
|France|FR|54.36.91.62|2001:41d0:301::27|
|Irlande|IE|54.36.31.145|2001:41d0:301:3::27|
|Portugal|PT|193.70.24.82|2001:41d0:301:2::27|
|Royaume-Uni|UK|54.36.203.165|2001:41d0:301:12::27|
|Italie|IT|178.32.138.212|2001:41d0:301:11::27|
|Espagne|ES|213.32.37.233|2001:41d0:301:4::27|
|Pologne|PL|178.32.203.125|2001:41d0:301:5::27|
|République tchèque|CZ|54.37.182.230|2001:41d0:301:6::27|
|Pays-Bas|NL|54.36.41.83|2001:41d0:301:7::27|
|Finlande|FI|188.165.140.194|2001:41d0:301:8::27|
|Lituanie|LT|51.255.97.18|2001:41d0:301:9::27|
|Allemagne|DE|91.134.179.251|2001:41d0:301:1::27|
|Belgique|BE|193.70.58.226|2001:41d0:301:10::27|

Si le **CDN Legacy** est activé sur votre hébergement, vous devez utiliser cette adresse IP :

```bash
145.239.51.129
```

Si le **Shared CDN** (sorti le 19/11/2020) est activé sur votre hébergement, vous devez utiliser cette adresse IP :

```bash
46.105.204.27
```

Si vous avez besoin de l'adresse IP de la **passerelle de sortie** de votre hébergement (gateway), vous devez utiliser cette adresse IP :

```bash
54.37.121.239
```

### Cluster 028

Retrouvez les adresses IP du **cluster** par pays (pour la géolocalisation) :

|Pays|Code Pays|IPv4|IPv6|
|---|---|----|---|
|France|FR|51.91.236.193|2001:41d0:301::28|
|Irlande|IE|92.222.139.190|2001:41d0:301:3::28|
|Portugal|PT|217.182.39.251|2001:41d0:301:2::28|
|Royaume-Uni|UK|193.70.71.149|2001:41d0:301:12::28|
|Italie|IT|51.255.117.202|2001:41d0:301:11::28|
|Espagne|ES|54.36.145.173|2001:41d0:301:4::28|
|Pologne|PL|213.32.10.111|2001:41d0:301:5::28|
|République tchèque|CZ|54.38.116.114|2001:41d0:301:6::28|
|Pays-Bas|NL|176.31.23.191|2001:41d0:301:7::28|
|Finlande|FI|51.255.135.35|2001:41d0:301:8::28|
|Lituanie|LT|51.83.29.135|2001:41d0:301:9::28|
|Allemagne|DE|54.37.173.127|2001:41d0:301:1::28|
|Belgique|BE|193.70.70.144|2001:41d0:301:10::28|

Si le **CDN Legacy** est activé sur votre hébergement, vous devez utiliser cette adresse IP :

```bash
51.255.119.116
```

Si le **Shared CDN** (sorti le 19/11/2020) est activé sur votre hébergement, vous devez utiliser cette adresse IP :

```bash
46.105.204.28
```

Si vous avez besoin de l'adresse IP de la **passerelle de sortie** de votre hébergement (gateway), vous devez utiliser cette adresse IP :

```bash
91.134.248.249
```

### Cluster 029

Retrouvez les adresses IP du **cluster** par pays (pour la géolocalisation) :

|Pays|Code Pays|IPv4|IPv6|
|---|---|----|---|
|France|FR|51.91.236.255|2001:41d0:301::29|
|Irlande|IE|92.222.139.156|2001:41d0:301:3::29|
|Portugal|PT|46.105.159.220|2001:41d0:301:2::29|
|Royaume-Uni|UK|178.32.48.109|2001:41d0:301:12::29|
|Italie|IT|178.32.137.139|2001:41d0:301:11::29|
|Espagne|ES|188.165.132.144|2001:41d0:301:4::29|
|Pologne|PL|213.32.10.205|2001:41d0:301:5::29|
|République tchèque|CZ|5.196.248.55|2001:41d0:301:6::29|
|Pays-Bas|NL|51.83.124.4|2001:41d0:301:7::29|
|Finlande|FI|79.137.116.129|2001:41d0:301:8::29|
|Lituanie|LT|164.132.14.117|2001:41d0:301:9::29|
|Allemagne|DE|145.239.222.45|2001:41d0:301:1::29|
|Belgique|BE|178.32.44.140|2001:41d0:301:10::29|

Si le **CDN Legacy** est activé sur votre hébergement, vous devez utiliser cette adresse IP :

```bash
 51.255.215.242 
```

Si le **Shared CDN** (sorti le 19/11/2020) est activé sur votre hébergement, vous devez utiliser cette adresse IP :

```bash
46.105.204.29
```

Si vous avez besoin de l'adresse IP de la **passerelle de sortie** de votre hébergement (gateway), vous devez utiliser cette adresse IP :

```bash
91.134.248.192
```

### Cluster 030

Retrouvez les adresses IP du **cluster** par pays (pour la géolocalisation) :

|Pays|Code Pays|IPv4|IPv6|
|---|---|----|---|
|France|FR|145.239.37.162|2001:41d0:301::30|
|Irlande|IE|178.32.77.113|2001:41d0:301:3::30|
|Portugal|PT|5.135.68.91|2001:41d0:301:2::30|
|Royaume-Uni|91.134.177.228|2001:41d0:301:12::30|
|Italie|IT|94.23.73.16|2001:41d0:301:11::30|
|Espagne|ES|149.202.105.228|2001:41d0:301:4::30|
|Pologne|PL|188.165.21.8|2001:41d0:301:5::30|
|République tchèque|CZ|94.23.168.143|2001:41d0:301:6::30|
|Pays-Bas|NL|149.202.25.75|2001:41d0:301:7::30|
|Finlande|FI|188.165.140.151|2001:41d0:301:8::30|
|Lituanie|LT|188.165.24.146|2001:41d0:301:9::30|
|Allemagne|DE|51.255.232.79|2001:41d0:301:1::30|
|Belgique|BE|213.32.107.241|2001:41d0:301:10::30|

Si le **CDN Legacy** est activé sur votre hébergement, vous devez utiliser cette adresse IP :

```bash
54.36.13.47
```

Si le **Shared CDN** (sorti le 19/11/2020) est activé sur votre hébergement, vous devez utiliser cette adresse IP :

```bash
46.105.204.30
```

Si vous avez besoin de l'adresse IP de la **passerelle de sortie** de votre hébergement (gateway), vous devez utiliser cette adresse IP :

```bash
51.178.146.199
```

### Cluster 031

Retrouvez les adresses IP du **cluster** par pays (pour la géolocalisation) :

|Pays|Code Pays|IPv4|IPv6|
|---|---|----|---|
|France|FR|146.59.209.152|2001:41d0:301::31|
|Irlande|IE|188.165.5.107|2001:41d0:301:3::31|
|Portugal|PT|51.178.229.47|2001:41d0:301:2::31|
|Royaume-Uni|178.32.52.177|2001:41d0:301:12::31|
|Italie|IT|94.23.66.84|2001:41d0:301:11::31|
|Espagne|ES|51.255.26.63|2001:41d0:301:4::31|
|Pologne|PL|87.98.236.253|2001:41d0:301:5::31|
|République tchèque|CZ|217.182.52.81|2001:41d0:301:6::31|
|Pays-Bas|NL|213.32.108.83|2001:41d0:301:7::31|
|Finlande|FI|178.32.10.72|2001:41d0:301:8::31|
|Lituanie|LT|188.165.30.182|2001:41d0:301:9::31|
|Allemagne|DE|151.80.4.219|2001:41d0:301:1::31|
|Belgique|BE|217.182.187.17|2001:41d0:301:10::31|

Si le **Shared CDN** (sorti le 19/11/2020) est activé sur votre hébergement, vous devez utiliser cette adresse IP :


```bash
46.105.204.31
```

Si vous avez besoin de l'adresse IP de la **passerelle de sortie** de votre hébergement (gateway), vous devez utiliser cette adresse IP :


```bash
141.94.87.67
```

### Cluster 051

Retrouvez les adresses IP du **cluster** par pays (pour la géolocalisation) :

|Pays|Code Pays|IPv4|IPv6|
|---|---|----|---|
|Canada|CA|51.161.122.78|2607:5300:202:0:0::51|

Si le *CDN Legacy** est activé sur votre hébergement, vous devez utiliser cette adresse IP :

```bash
178.32.120.166
```

Si le **Shared CDN** (sorti le 19/11/2020) est activé sur votre hébergement, vous devez utiliser cette adresse IP :

```bash
46.105.204.51
```

Si vous avez besoin de l'adresse IP de la **passerelle de sortie** de votre hébergement (gateway), vous devez utiliser cette adresse IP :

```bash
51.161.94.36
```

## Aller plus loin

Échangez avec notre communauté d’utilisateurs sur [https://community.ovh.com/](https://community.ovh.com/){.external}.