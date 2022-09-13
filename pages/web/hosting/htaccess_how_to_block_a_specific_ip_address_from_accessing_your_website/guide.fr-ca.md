---
title: "Tutoriel - Comment bloquer l'accès à mon site pour certaines adresses IP via un fichier .htaccess ?"
slug: mutualise-htaccess-comment-bloquer-certaines-ip-au-niveau-de-mon-site
excerpt: "Découvrez les actions possibles via un fichier « .htaccess » afin de bloquer l'accès à votre site à certaines adresses IP"
section: Réécriture et authentification
order: 01
---

**Dernière mise à jour le 12/09/2022**

## Objectif

Ce tutoriel a pour objectif de vous aider à sécuriser l'accès à vos sites du réseau extérieur, à prévenir ou corriger d'éventuelles intrusions ou tentatives d'attaques DDoS (attaques par déni de service).

Vous pouvez réaliser ceci grâce à un fichier « .htaccess », un fichier texte particulier, détecté par le serveur web (Apache), et qui permet de définir des règles spéciales sur un répertoire et l'ensemble de ses sous-répertoires.

Vous pouvez créer plusieurs fichiers « .htaccess » dans [l'espace FTP](https://docs.ovh.com/ca/fr/hosting/connexion-espace-stockage-ftp-hebergement-web/) de votre hébergement mais **un seul** par répertoire ou sous-répertoire afin d'éviter les conflits entre différents fichiers « .htaccess ».

**Découvrez comment bloquer l'accès à votre site pour certaines adresses IP via un fichier « .htaccess ».**

> [!warning]
>
> OVHcloud met à votre disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous revient de ce fait d'en assurer le bon fonctionnement.
> 
> Nous mettons à votre disposition ce guide afin de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un [prestataire spécialisé](https://partner.ovhcloud.com/fr-ca/) si vous éprouvez des difficultés. En effet, nous ne serons pas en mesure de vous fournir une assistance. Plus d'informations dans la section [« Aller plus loin »](#go-further) de ce guide.
>

## Prérequis

- Disposer d'un [hébergement mutualisé OVHcloud](https://www.ovhcloud.com/fr-ca/web-hosting/)

## En pratique

> [!primary]
>
> Le fichier « .htaccess » peut être placé dans plusieurs dossiers différents tout en respectant la règle d'un **seul** fichier « .htaccess » par dossier ou sous-dossier.
>
> Les paramètres définis par un fichier « .htaccess » s'appliquent au répertoire où il est installé ainsi qu'à tous ses sous-répertoires.
>
> Pour éditer (ou créer) ces répertoires, connectez-vous à l'espace FTP de votre hébergement. Au besoin, aidez-vous du guide « [Accéder à mon espace de stockage](https://docs.ovh.com/fr/hosting/connexion-espace-stockage-ftp-hebergement-web/) ».
>

### Bloquer une IP, une plage d'IPs, un domaine ou toutes les IPs d'un Pays 

Plusieurs règles sont disponibles afin de bloquer les accès à votre hébergement via le « .htaccess ».<br>
Soyez vigilant sur la syntaxe et sur les paramètres que vous bloquez afin de ne pas vous retrouver vous-même bloqué lors de la consultation de vos sites et/ou scripts hébergés.<br>
En cas d'erreur, vous pouvez toujours vous connecter à [l'espace FTP](https://docs.ovh.com/ca/fr/hosting/connexion-espace-stockage-ftp-hebergement-web/) de votre hébergement pour corriger la situation. 

> [!primary]
>
> Les hébergements mutualisés fonctionnent actuellement avec **Apache 2.4**. Depuis la version **Apache 2.3**, des variables ont été implémentées et la syntaxe de rédaction des restrictions/autorisations d'accès a évolué.
>
> Du fait que l'ancienne syntaxe est très utilisée, celle-ci est toujours active sur nos infrastructures. Cependant, elle est considérée comme obsolète par *Apache* et pourrait prochainement ne plus être disponible. Vous trouverez donc dans ce tutoriel des exemples détaillant les deux syntaxes.
>
> Pour plus de détails sur la nouvelle syntaxe, vous pouvez consulter les pages officielles suivantes :
>
> - [Documentation sur le contrôle d'accès Apache 2.4](https://httpd.apache.org/docs/2.4/fr/howto/access.html){.external}
> - [Documentation sur le module mod_authz_core Apache 2.4](https://httpd.apache.org/docs/2.4/mod/mod_authz_core.html){.external}
>

#### Bloquer une IP

Pour bloquer une adresse IP spécifique, insérez l'un des deux codes suivants dans votre fichier « .htaccess » :

> [!tabs]
> Syntaxe historique
>>
>> ```bash
>> Deny from IP_address
>> ```
>>
> Syntaxe à partir d'Apache 2.3
>>
>> ```bash
>> <RequireAll>
>> Require all granted
>> Require not ip IP_address
>> </RequireAll>
>> ```
>>

- **Exemple** : si vous souhaitez bloquer l'adresse IP 192.168.1.2, vous devrez écrire l'un des deux codes suivants :

> [!tabs]
> Syntaxe historique
>>
>> ```bash
>> Deny from 192.168.1.2
>> ```
>>
> Syntaxe à partir d'Apache 2.3
>>
>> ```bash
>> <RequireAll>
>> Require all granted
>> Require not ip 192.168.1.2
>> </RequireAll>
>> ```
>>

#### Bloquer une plage d'IPs

Pour bloquer une plage d'adresses IP, insérez l'un des deux codes suivants dans votre fichier « .htaccess » :

> [!tabs]
> Syntaxe historique
>>
>> ```bash
>> Deny from IP_range
>> ```
>>
> Syntaxe à partir d'Apache 2.3
>>
>> ```bash
>> <RequireAll>
>> Require all granted
>> Require not ip IP_range
>> </RequireAll>
>> ```
>>

- **Exemple** : si vous souhaitez bloquer toutes les IPs en 192.168.x.x, vous devrez écrire l'un des deux codes suivants :

> [!tabs]
> Syntaxe historique
>>
>> ```bash
>> Deny from 192.168
>> ```
>>
> Syntaxe à partir d'Apache 2.3
>>
>> ```bash
>> <RequireAll>
>> Require all granted
>> Require not ip 192.168
>> </RequireAll>
>> ```
>>

#### Bloquer un domaine

Certains domaines peuvent accéder à votre hébergement via des redirections ou des requêtes.

Pour bloquer un domaine, insérez l'un des deux codes suivants dans votre fichier « .htaccess » :

> [!tabs]
> Syntaxe historique
>>
>> ```bash
>> Deny from domain
>> ```
>>
> Syntaxe à partir d'Apache 2.3
>>
>> ```bash
>> <RequireAll>
>> Require not host domain
>> </RequireAll>
>> ```
>>

- **Exemple** : si vous souhaitez bloquer le domaine domain.tld, vous devrez écrire l'un des deux codes suivants :

> [!tabs]
> Syntaxe historique
>>
>> ```bash
>> Deny from domain.tld
>> ```
>>
> Syntaxe à partir d'Apache 2.3
>>
>> ```bash
>> <RequireAll>
>> Require not host domain.tld
>> </RequireAll>
>> ```
>>

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
> Plusieurs sites listent les pays et leurs « Country Codes » respectifs, dont [https://www.iban.com/country-codes](https://www.iban.com/country-codes){.external} (indépendant d'OVHcloud).
>

Pour bloquer l'ensemble des IPs d'un pays, insérez l'un des deux codes suivants dans votre fichier « .htaccess » :

> [!tabs]
> Syntaxe historique
>>
>> ```bash
>> SetEnvIf GEOIP_COUNTRY_CODE Country_Code BlockCountry
>> Deny from env=BlockCountry
>> ```
>>
> Syntaxe à partir d'Apache 2.3 
>> À placer tout en haut de votre « .htaccess »
>>
>> ```bash
>> RewriteCond %{ENV:GEOIP_COUNTRY_CODE} ^(Country_Code)$
>> RewriteRule ^(.*)$ - [F,L]
>> ```
>>

- **Exemple** : si vous souhaitez bloquer les adresses IPs géolocalisées aux îles Fidji (FJ) et au Groenland (GR), vous devrez écrire l'un des deux codes suivants :

> [!tabs]
> Syntaxe historique
>>
>> ```bash
>> SetEnvIf GEOIP_COUNTRY_CODE FJ BlockCountry
>> SetEnvIf GEOIP_COUNTRY_CODE GR BlockCountry
>> Deny from env=BlockCountry
>> ```
>>
> Syntaxe à partir d'Apache 2.3 
>> À placer tout en haut de votre « .htaccess »
>>
>> ```bash
>> RewriteCond %{ENV:GEOIP_COUNTRY_CODE} ^(FJ|GR)$
>> RewriteRule ^(.*)$ - [F,L]
>> ```
>>

### Pour autoriser seulement quelques IPs, une plage d'IPs ou l'ensemble des IPs d'un pays

Plutôt que de restreindre l'accès à une ou plusieurs IPs et laisser les autres accéder à votre hébergement, vous pouvez effectuer la démarche inverse en bloquant l'ensemble des IPs puis en n'autorisant qu'une ou plusieurs IPs à accéder à votre service.

#### Autoriser une ou plusieurs IPs

Pour n'autoriser qu'une seule IP à accéder à votre service, insérez l'un des deux codes suivants dans votre fichier « .htaccess » :

> [!tabs]
> Syntaxe historique
>>
>> ```bash
>> order deny,allow
>> deny from all
>> Allow from IP_address
>> ```
>>
> Syntaxe à partir d'Apache 2.3
>>
>> ```bash
>> Require ip IP_address
>> ```
>>

- **Exemple** : si vous souhaitez autoriser uniquement les IPs 192.168.1.2 et 192.168.1.3 à accéder à votre hébergement, vous devrez écrire l'un des deux codes suivants :

> [!tabs]
> Syntaxe historique
>>
>> ```bash
>> order deny,allow
>> deny from all
>> Allow from 192.168.1.2
>> Allow from 192.168.1.3
>> ```
>>
> Syntaxe à partir d'Apache 2.3
>>
>> ```bash
>> Require ip 192.168.1.2 192.168.1.3
>> ```
>>

#### Autoriser une plage d'IPs

Pour autoriser une plage d'IPs à accéder à votre service, insérez l'un des deux codes suivants dans votre fichier « .htaccess » :

> [!tabs]
> Syntaxe historique
>>
>> ```bash
>> order deny,allow
>> deny from all
>> Allow from IP_range
>> ```
>>
> Syntaxe à partir d'Apache 2.3 
>> À placer tout en haut de votre « .htaccess »
>>
>> ```bash
>> Require ip IP_range
>> ```
>>

- **Exemple** : si vous souhaitez autoriser uniquement la plage d'IPs 192.168.1.x à accéder à votre hébergement, vous devrez écrire l'un des deux codes suivants :

> [!tabs]
> Syntaxe historique
>>
>> ```bash
>> order deny,allow
>> deny from all
>> Allow from 192.168.1
>> ```
>>
> Syntaxe à partir d'Apache 2.3 
>> À placer tout en haut de votre « .htaccess »
>>
>> ```bash
>> Require ip 192.168.1
>> ```
>>

#### Autoriser l'ensemble des IPs d'un pays

Pour autoriser l'ensemble des IPs d'un pays à accéder à votre service, insérez l'un des deux codes suivants dans votre fichier « .htaccess » :

> [!tabs]
> Syntaxe historique
>>
>> ```bash
>> order deny,allow
>> deny from all
>> SetEnvIf GEOIP_COUNTRY_CODE Country_Code AllowCountry
>> Allow from env=AllowCountry
>> ```
>>
> Syntaxe à partir d'Apache 2.3 
>> À placer tout en haut de votre « .htaccess »
>>
>> ```bash
>> RewriteCond %{ENV:GEOIP_COUNTRY_CODE} !^(Country_Code)$
>> RewriteRule ^(.*)$ - [F,L]
>> ```
>>

- **Exemple** : si vous souhaitez autoriser uniquement les îles Fidji (FJ) et le Groenland (GR) à accéder à votre hébergement, vous devrez écrire l'un des deux codes suivants :

> [!tabs]
> Syntaxe historique
>>
>> ```bash
>> order deny,allow
>> deny from all
>> SetEnvIf GEOIP_COUNTRY_CODE FJ AllowCountry
>> SetEnvIf GEOIP_COUNTRY_CODE GR AllowCountry
>> Allow from env=AllowCountry
>> ```
>>
> Syntaxe à partir d'Apache 2.3 
>> À placer tout en haut de votre « .htaccess »
>>
>> ```bash
>> RewriteCond %{ENV:GEOIP_COUNTRY_CODE} !^(FJ|GR)$
>> RewriteRule ^(.*)$ - [F,L]
>> ```
>>

### Compléments sur le fichier « .htaccess »

Indépendamment de la sécurité sur l'accès général à l'hébergement, le fichier « .htaccess » permet de réaliser d'autres actions. Vous trouverez ci-après trois autres tutoriels OVHcloud sur le sujet :

- [Protéger l'interface d'administration de votre site via le « .htaccess »](https://docs.ovh.com/ca/fr/hosting/mutualise-htaccess-comment-proteger-lacces-a-un-repertoire-par-une-authentification/).
- [Réécrire vos URLs grâce au « mod_rewrite »](https://docs.ovh.com/ca/fr/hosting/htaccess-reecriture-url-mod-rewrite/).
- [Effectuer d'autres opérations avec le fichier « .htaccess »](https://docs.ovh.com/ca/fr/hosting/mutualise-htaccess-les-autres-operations-realisables-avec-des-fichiers-htaccess/).

## Aller plus loin <a name="go-further"></a>

Pour des prestations spécialisées (référencement, développement, etc), contactez les [partenaires OVHcloud](https://partner.ovhcloud.com/fr-ca/).

Si vous souhaitez bénéficier d'une assistance à l'usage et à la configuration de vos solutions OVHcloud, nous vous proposons de consulter nos différentes [offres de support](https://www.ovhcloud.com/fr-ca/support-levels/).

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.
