---
title: "Tutoriel - Comment bloquer l'accès à mon site pour certaines adresses IP via un fichier .htaccess ?"
slug: mutualise-htaccess-comment-bloquer-certaines-ip-au-niveau-de-mon-site
excerpt: "Découvrez les actions possibles via un fichier « .htaccess » afin de bloquer l'accès à votre site à certaines adresses IP"
section: Réécriture et authentification
order: 01
---

**Dernière mise à jour le 06/09/2022**

## Objectif

La sécurité de vos sites présents sur votre hébergement est primordiale.<br>
Ce tutoriel a notamment pour  objectif de prévenir ou corriger d'éventuelles intrusions ou tentatives d'attaques DDoS (attaques par déni de service).

Vous pouvez réaliser ceci grâce à un fichier « .htaccess », un fichier texte particulier, détecté par le serveur web (Apache), et qui permet de définir des règles spéciales sur un répertoire et l'ensemble de ses sous-répertoires.

**Découvrez comment bloquer bloquer l'accès à votre site pour certaines adresses IP via un fichier « .htaccess ».**

> [!warning]
>
> OVHcloud met à votre disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous revient de ce fait d'en assurer le bon fonctionnement.
> 
> Nous mettons à votre disposition ce guide afin de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un [prestataire spécialisé](https://partner.ovhcloud.com/fr/) si vous éprouvez des difficultés. En effet, nous ne serons pas en mesure de vous fournir une assistance. Plus d'informations dans la section [« Aller plus loin »](#go-further) de ce guide.
> 

## En pratique

> [!primary]
>
> Le fichier « .htaccess » peut être placé dans plusieurs dossiers différents.
>
> Les paramètres définis par un fichier « .htaccess » s'appliquent au répertoire où il est installé ainsi qu'à tous ses sous-répertoires.
>
> Pour éditer (ou créer) ces répertoires, connectez-vous à l'espace FTP de votre hébergement. Au besoin, aidez-vous du guide « [Accéder à mon espace de stockage](https://docs.ovh.com/fr/hosting/connexion-espace-stockage-ftp-hebergement-web/) ».
>

### Bloquer une IP, une plage d'IPs, un domaine ou toutes les IPs d'un Pays 

Plusieurs règles sont disponibles afin de bloquer les accès à votre hébergement via le « .htaccess ». Soyez vigilant sur la syntaxe et sur les paramètres que vous bloquez, afin de ne pas vous retrouver bloqué lors de la consultation de vos sites et/ou scripts hébergés.<br>
En cas d'erreur, vous pouvez toujours vous connecter à [l'espace FTP](https://docs.ovh.com/fr/hosting/connexion-espace-stockage-ftp-hebergement-web/) de votre hébergement pour corriger la situation. 

#### Bloquer une IP

Pour bloquer une adresse IP spécifique, insérez la ligne suivante dans votre fichier « .htaccess » :

```bash
Deny from adresse_IP
```

- *Exemple* : si vous souhaitez bloquer l'adresse IP 192.168.1.2, vous devrez écrire la ligne suivante :

```bash
Deny from 192.168.1.2
```

#### Bloquer une plage d'IPs

Pour bloquer une plage d'adresses IP, insérez la ligne suivante dans votre fichier « .htaccess » :

```bash
Deny from plage_IP
```

*Exemple* : si vous souhaitez bloquer toutes les IPs en 192.168.x.x, vous devrez écrire la ligne suivante :

```bash
Deny from 192.168
```

#### Bloquer un domaine

Certains domaines peuvent accéder à votre hébergement via des redirections ou des requêtes.

Pour bloquer un domaine, insérez la ligne suivante dans votre fichier « .htaccess » :

```bash
Deny from domain
```

- *Exemple* : si vous souhaitez bloquer le domaine domain.tld, vous devrez écrire la ligne suivante :

```bash
Deny from domain.tld
```

#### Bloquer les IPs d'un pays

> [!primary]
>
> L'ensemble des adresses IP (notamment les adresses IP publiques) disposent d'une géolocalisation à l'échelle d'un pays. Ceci permet d'avoir un aperçu de la provenance des flux d'une IP et de repérer physiquement l'IP. 
>
> Le « .htaccess » permet, grâce à cet élément, de bloquer l'ensemble des IPs géolocalisées dans un pays. 
> En d'autres termes, toutes les personnes qui tenteront de visiter votre site depuis ce pays seront bloquées (sauf si elles utilisent une connexion VPN avec une IP géolocalisée dans un autre pays).
>
> Les blocages via le « .htaccess » s'effectuent par le biais des « Country Codes » à deux lettres (Norme ISO 3166-1 alpha2) des pays.
>
> Plusieurs sites listent les pays et leurs « Country Codes » respectifs, dont [https://www.iban.com/country-codes](https://www.iban.com/country-codes){.external} (indépendant de OVHcloud).
>

Pour bloquer l'ensemble des IPs d'un pays, insérez les lignes suivantes dans votre fichier « .htaccess » :

```bash
SetEnvIf GEOIP_COUNTRY_CODE Country_Code BlockCountry
Deny from env=BlockCountry
```

- *Exemple* : si vous souhaitez bloquer les adresses IPs géolocalisées en Russie (RU) et aux USA (US), vous devrez écrire les lignes suivantes :

```bash
SetEnvIf GEOIP_COUNTRY_CODE RU BlockCountry
SetEnvIf GEOIP_COUNTRY_CODE US BlockCountry
Deny from env=BlockCountry
```

### Pour autoriser seulement quelques IPs, une plage d'IPs ou l'ensemble des IPs d'un pays

Plutôt que de restreindre une ou plusieurs IPs et laisser les autres accéder à votre hébergement, vous pouvez effectuer la démarche inverse en bloquant l'ensemble des IPs puis en n'autorisant qu'une ou plusieurs IPs à accéder à votre service.

#### Autoriser une ou plusieurs IPs

Pour n'autoriser qu'une seule IP à accéder à votre service, insérez les lignes suivantes dans votre fichier « .htaccess » :

```bash
order deny,allow
deny from all
Allow from adresse_IP
```

- *Exemple* : si vous souhaitez autoriser uniquement les IPs 192.168.1.2 et 192.168.1.3 à accéder à votre hébergement, vous devrez écrire les lignes suivantes :

```bash
order deny,allow
deny from all
Allow from 192.168.1.2
Allow from 192.168.1.3
```

#### Autoriser une plage d'IPs

Pour autoriser une plage d'IPs à accéder à votre service, insérez les lignes suivantes dans votre fichier « .htaccess » :

```bash
order deny,allow
deny from all
Allow from plage_IP
```

- *Exemple* : Si vous souhaitez autoriser uniquement la plage d'IPs 192.168.1.x à accéder à votre hébergement, vous devrez écrire les lignes suivantes :

```bash
order deny,allow
deny from all
Allow from 192.168.1
```

#### Autoriser l'ensemble des IPs d'un pays

Pour autoriser l'ensemble des IPs d'un pays à accéder à votre service, insérez les lignes suivantes dans votre fichier « .htaccess » :

```bash
order deny,allow
deny from all
SetEnvIf GEOIP_COUNTRY_CODE Country_Code AllowCountry
Allow from env=AllowCountry
```

- *Exemple* : Si vous souhaitez autoriser uniquement la Russie (RU) et les USA (US) à accéder à votre hébergement, vous devrez écrire les lignes suivantes :

```bash
order deny,allow
deny from all
SetEnvIf GEOIP_COUNTRY_CODE RU AllowCountry
SetEnvIf GEOIP_COUNTRY_CODE US AllowCountry
Allow from env=AllowCountry
```

### Compléments sur le fichier « .htaccess »

Indépendamment de la sécurité sur l'accès général à l'hébergement, le fichier « .htaccess » permet de réaliser d'autres actions. Vous trouverez ci-après trois autres tutoriels OVHcloud sur le sujet :

- [Protéger l'interface d'administration de votre site via le « .htaccess »](https://docs.ovh.com/fr/hosting/mutualise-htaccess-comment-proteger-lacces-a-un-repertoire-par-une-authentification/).
- [Réécrire vos URLs grâce au « mod_rewrite »](https://docs.ovh.com/fr/hosting/htaccess-reecriture-url-mod-rewrite/).
- [Effectuer d'autres opérations avec le fichier « .htaccess »](https://docs.ovh.com/fr/hosting/mutualise-htaccess-les-autres-operations-realisables-avec-des-fichiers-htaccess/).

## Aller plus loin <a name="go-further"></a>

Pour des prestations spécialisées (référencement, développement, etc), contactez les [partenaires OVHcloud](https://partner.ovhcloud.com/fr/).

Si vous souhaitez bénéficier d'une assistance à l'usage et à la configuration de vos solutions OVHcloud, nous vous proposons de consulter nos différentes [offres de support](https://www.ovhcloud.com/fr/support-levels/).

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.
