---
title: "Hébergement web - Installer un certificat SSL personnalisé"
excerpt: "Découvrez comment installer un certificat SSL personnalisé sur votre hébergement Web OVHcloud"
updated: 2024-10-11
---

## Objectif

Les certificats Secure Socket Layer (SSL) permettent de chiffrer les échanges effectués depuis ou vers votre site web. Cela évite qu'une personne ou un robot malveillant ne vienne « écouter » clairement les requêtes envoyées ou émises avec votre site web.

OVHcloud propose plusieurs types de certificats SSL sur nos offres d'[hébergement mutualisé OVHcloud](/links/web/hosting). Ils sont présentés dans notre guide « [Gérer un certificat SSL sur son hébergement web](/pages/web_cloud/web_hosting/ssl_on_webhosting) ». Les certificats SSL sont incontournables pour la sécurité de votre site web.

En fonction de votre situation, il est possible que vous souhaitiez installer un certificat SSL différent de ceux proposés par OVHcloud sur votre hébergement web.

**Découvrez comment installer un certificat SSL personnalisé sur votre hébergement Web OVHcloud**

## Prérequis 

- Être connecté à votre [espace client OVHcloud](/links/manager).
- Commander ou disposer d'un [hébergement mutualisé OVHcloud](/links/web/hosting) sur lequel aucun certificat SSL n'est déjà installé.
- Commander ou disposer d'un [nom de domaine](/links/web/domains) et disposer des droits exclusifs sur son utilisation. Le nom de domaine ne doit pas déjà être lié à un certificat SSL.
- Disposer d'un accès SSH (via un terminal d'ordinateur par exemple) avec OpenSSL installé.

## En pratique

> [!warning]
>
> OVHcloud met à votre disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous revient de ce fait d'en assurer le bon fonctionnement.
> 
> Nous mettons à votre disposition ce guide afin de vous accompagner au mieux sur des tâches courantes. Cependant, nous vous recommandons de faire appel à un [prestataire spécialisé](/links/partner) si vous éprouvez des difficultés. En effet, nous ne serons pas en mesure de vous fournir une assistance sur **l'installation ou la souscription d'un certificat SSL autre que [ceux proposés par OVHcloud](/links/web/hosting-options-ssl)**. Plus d'informations dans la section « [Aller plus loin](#go-further) » de ce guide.
>

### Etape 1 - Obtenir une Certificate Signing Request (CSR) SSL <a name="step-1"></a>

> [!primary]
>
> Cette étape est optionnelle si vous avez déjà généré et récupéré le certificat SSL auprès de votre fournisseur SSL ou si ce dernier propose la génération du CSR durant la commande du certificat SSL. Si tel est le cas, passez directement à l'[étape 2](#step-2).

#### 1.1 - Générer la clé privée et la CSR en SSH <a name="step-1.1"></a>

Ouvrez un terminal pour vous connecter en SSH. Cet outil est installé par défaut sur macOS ou Linux. Un environnement Windows nécessitera l’installation d’un logiciel comme PuTTY ou l’ajout de la fonctionnalité « OpenSSH ». Cette démarche étant spécifique au système d’exploitation que vous utilisez, nous ne pouvons pas la détailler dans cette documentation.

Dans le terminal, lancez la commande suivante :

```ssh
openssl req -nodes -newkey rsa:2048 -sha256 -keyout my_private.key -out your_file_name.csr -utf8
```

Remplacez les termes `my_private` et `your_file_name` par les noms de fichier de votre choix.

Une fois lancée, le terminal va vous demander une par une les informations suivantes (pour vous-même, votre entreprise ou votre association). Dès que vous avez répondu à la question posée, appuyez ensuite sur la touche `ENTRER`{.action} de votre clavier pour afficher la question suivante :

- `Country Name (2 letter code) [AU]` : saisissez en majuscule le **Country Code** de votre pays. Si besoin, retrouvez la liste de tous les **Country Codes** [ici](https://www.iban.com/country-codes){.external}.
- `State or Province Name (full name) [Some-State]` : saisissez en majuscule le nom de votre région (ou de votre Etat si vous êtes, par exemple, aux USA).
- `Locality Name (eg, city) []` : saisissez en majuscule le nom de votre ville.
- `Organization Name (eg, company) [Internet Widgits Pty Ltd]` : saisissez le nom de votre organisation, entreprise ou association. **Si vous êtes un particulier, ne répondez pas à cette question et appuyez directement sur la touche `ENTRER`{.action} de votre clavier pour afficher la question suivante**.
- `Organizational Unit Name (eg, section) []` : saisissez le nom de votre département ou de votre service au sein de votre organisation, entreprise ou association. **Si vous êtes un particulier, ne répondez pas à cette question et appuyez directement sur la touche `ENTRER`{.action} de votre clavier pour afficher la question suivante**.
- `Common Name (e.g. server FQDN or YOUR name) []` : saisissez le nom de domaine (exemple : `domain.tld`) ou le sous-domaine (exemple : `sub.domain.tld`) pour lequel vous souhaitez obtenir un certificat SSL. **Un seul** nom de domaine ou sous-domaine peut être renseigné ici. En fonction du fournisseur SSL, vous devrez préciser soit votre nom de domaine seul (exemple : `domain.tld`), soit son sous-domaine en « www » (exemple : `www.domain.tld`). Renseignez-vous au préalable auprès de votre fournisseur SSL à ce sujet.
- `Email Address []` : saisissez votre adresse e-mail.

A partir d'ici, les questions posées sont optionnelles et concernent principalement les utilisateurs avertis. En cas de doute, nous vous recommandons vivement de les passer en appuyant sur la touche `ENTRER`{.action} de votre clavier jusqu'à ce que le terminal ne vous pose plus de questions.

- `A challenge password []` : pour les utilisateurs avertis, saisissez un mot de passe secret qui sera utilisé entre vous et le fournisseur de certificat SSL. Sachez que, côté OVHcloud, la CSR et la clé privée ne doivent pas être protégées par un mot de passe pour être ajoutées à un hébergement mutualisé OVHcloud.
- `An optional company name []` : pour les utilisateurs avertis, vous pouvez saisir un autre nom pour votre organisation, entreprise ou association.

#### 1.2 - Récupérer la clé privée en SSH

Pour récupérer la clé privée générée précédemment et toujours depuis votre terminal, lancez la commande suivante : 

```ssh
cat my_private.key
```

Remplacez le terme `my_private` par le nom de fichier que vous avez choisi précédemment lors de l'[étape 1.1](#step-1.1) de ce guide.

La clé privée s'affiche alors dans votre terminal sous cette forme : 

```ssh
-----BEGIN CERTIFICATE REQUEST-----
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
XXXXXXXX The Private Key XXXXXXXXXX
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
------END CERTIFICATE REQUEST------
```

Ouvrez un logiciel de traitement de texte (bloc note, libre office, etc.), puis `copiez/collez`{.action} l'intégralité de la clé privée, y compris les termes `-----BEGIN CERTIFICATE REQUEST-----` et `-----END CERTIFICATE REQUEST-----`.

Enregistrez ce fichier est conservez-le précieusement pour la suite de ce guide si votre fournisseur SSL vous le demande lors de votre future commande.

#### 1.3 - Récupérer la CSR en SSH

Pour récupérer la CSR générée précédemment et toujours depuis votre terminal, lancez la commande suivante : 

```ssh
cat your_file_name.csr
```

Remplacez le terme `your_file_name` par le nom de fichier que vous avez choisi précédemment lors de l'[étape 1.1](#step-1.1) de ce guide.

La clé CSR s'affiche alors dans votre terminal sous cette forme : 

```ssh
-----BEGIN CERTIFICATE REQUEST-----
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
XXXXXXXXXXXX The CSR XXXXXXXXXXXXXX
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
------END CERTIFICATE REQUEST------
```

Ouvrez un logiciel de traitement de texte (bloc note, libre office, etc.), puis `copiez/collez`{.action} l'intégralité de la CSR, y compris les termes `-----BEGIN CERTIFICATE REQUEST-----` et `-----END CERTIFICATE REQUEST-----`.

Enregistrez ce fichier est conservez-le précieusement pour la suite de ce guide si votre fournisseur SSL vous le demande lors de votre future commande

> [!warning]
>
> Le fichier contenant la clé privée et le fichier contenant la CSR sont liés et ne sont pas interchangeables. Si vous avez généré plusieurs clés privées ou plusieurs CSR, assurez-vous de ne pas mélanger vos différentes clés privées et vos différentes CSR.

### Etape 2 - Commander le certificat SSL auprès de votre fournisseur SSL <a name="step-2"></a>

> [!primary]
>
> Cette étape est optionnelle si vous avez déjà généré et récupéré le certificat SSL auprès de votre fournisseur SSL. Si tel est le cas, passez directement à l'[étape 3](#step-3).

Commandez le certificat SSL auprès de votre fournisseur SSL. Si ce dernier en a besoin, transmettez-lui le contenu de la CSR générée lors de l'[étape 1](#step-1) de ce guide. S'il vous demande en complément la clé privée générée lors de l'[étape 1](#step-1), transmettez-lui également.

Suite à votre commande, le fournisseur de certificat SSL doit vous fournir 3 fichiers :

- le fichier `certificate.crt` ;
- le fichier `private.key` ;
- le fichier `ca_bundle.crt`.

C'est le contenu de chacun de ses fichiers qui sera nécessaire pour réaliser l'[étape 3](#step-3) de ce guide.

> [!warning]
>
> Certains fournisseurs SSL délivrent le contenu des fichiers `certificate.crt` et `ca_bundle.crt` dans un seul et même fichier. Vous devrez séparer le contenu de ce fichier afin de reformer les fichiers `certificate.crt` et `ca_bundle.crt`. Ceci avant de réaliser l'[étape 3](#step-3) de ce guide.
>
> D'autres fournisseurs SSL délivrent le fichier `ca_bundle.crt` en plusieurs parties/fichiers. Vous devrez concaténer les contenus de ces fichiers afin de reformer un seul fichier `ca_bundle.crt`. Ceci avant de réaliser l'[étape 3](#step-3) de ce guide.
>
> Si vous êtes concernés par cette situation et vous éprouvez des difficultés à réaliser ces opérations, contactez votre fournisseur SSL sur le sujet. Précisez-lui  que l'ensemble du contenu qu'il vous a délivré doit être réparti uniquement dans 3 fichiers `certificate.crt`, `ca_bundle.crt` et `private.key` afin que vous puissiez procéder à l'installation du certificat SSL.

### Etape 3 -  <a name="step-3"></a>