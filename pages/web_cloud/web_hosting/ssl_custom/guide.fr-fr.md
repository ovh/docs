---
title: "Hébergement web - Installer un certificat SSL personnalisé"
excerpt: "Découvrez comment importer et installer un certificat SSL personnalisé sur votre hébergement Web OVHcloud"
updated: 2024-10-15
---

## Objectif

Les certificats Secure Socket Layer (SSL) permettent de chiffrer les échanges effectués depuis ou vers votre site web. Cela évite qu'une personne ou un robot malveillant ne vienne « écouter » clairement les requêtes envoyées ou émises avec votre site web.

OVHcloud propose plusieurs types de certificats SSL sur les offres d'[hébergement mutualisé OVHcloud](/links/web/hosting). Ils sont présentés dans notre guide « [Hébergement web - Gérer un certificat SSL](/pages/web_cloud/web_hosting/ssl_on_webhosting) ». Les certificats SSL sont incontournables pour la sécurité de votre site web.

En fonction de votre situation, il est possible que vous souhaitiez installer un certificat SSL différent de ceux proposés par OVHcloud sur votre hébergement web.

**Découvrez comment importer et installer un certificat SSL personnalisé sur votre hébergement Web OVHcloud**

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

Une fois la commande lancée, le terminal va vous demander chacune des informations suivantes (pour vous-même, votre entreprise ou votre association). Dès que vous avez répondu à la question posée, appuyez ensuite sur la touche `ENTREE`{.action} de votre clavier pour afficher la question suivante :

- `Country Name (2 letter code) [AU]` : saisissez en majuscule le **Country Code** de votre pays. Si besoin, retrouvez la liste de tous les **Country Codes** [ici](https://www.iban.com/country-codes){.external}.
- `State or Province Name (full name) [Some-State]` : saisissez en majuscule le nom de votre région (ou de votre Etat si vous êtes, par exemple, aux USA).
- `Locality Name (eg, city) []` : saisissez en majuscule le nom de votre ville.
- `Organization Name (eg, company) [Internet Widgits Pty Ltd]` : saisissez le nom de votre organisation, entreprise ou association. **Si vous êtes un particulier, ne répondez pas à cette question et appuyez directement sur la touche `ENTREE`{.action} de votre clavier pour afficher la question suivante**.
- `Organizational Unit Name (eg, section) []` : saisissez le nom de votre département ou de votre service au sein de votre organisation, entreprise ou association. **Si vous êtes un particulier, ne répondez pas à cette question et appuyez directement sur la touche `ENTREE`{.action} de votre clavier pour afficher la question suivante**.
- `Common Name (e.g. server FQDN or YOUR name) []` : saisissez le nom de domaine (exemple : `domain.tld`) ou le sous-domaine (exemple : `sub.domain.tld`) pour lequel vous souhaitez obtenir un certificat SSL. **Un seul** nom de domaine ou sous-domaine peut être renseigné ici. En fonction du fournisseur SSL, vous devrez préciser soit votre nom de domaine seul (exemple : `domain.tld`), soit son sous-domaine en « www » (exemple : `www.domain.tld`). Renseignez-vous à ce sujet au préalable auprès de votre fournisseur SSL.
- `Email Address []` : saisissez votre adresse e-mail.

Les questions posées ensuite sont optionnelles et concernent principalement les utilisateurs avertis. En cas de doute, nous vous recommandons vivement de les passer en appuyant sur la touche `ENTREE`{.action} de votre clavier jusqu'à ce que le terminal ne vous pose plus de questions.

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
-----BEGIN PRIVATE KEY-----
XXXXXXXXXXXXXXXXXXXXXXXXXXX
XXXXX The Private Key XXXXX
XXXXXXXXXXXXXXXXXXXXXXXXXXX
------END PRIVATE KEY------
```

Ouvrez un logiciel de traitement de texte (bloc note, LibreOffice, etc.), puis `copiez/collez`{.action} l'intégralité de la clé privée, y compris les termes `-----BEGIN PRIVATE KEY-----` et `-----END PRIVATE KEY-----`.

Enregistrez ce fichier est conservez-le précieusement pour la suite de ce guide si votre fournisseur SSL vous le demande lors de votre future commande.

#### 1.3 - Récupérer la CSR en SSH

Pour récupérer la CSR générée précédemment et toujours depuis votre terminal, lancez la commande suivante : 

```ssh
cat your_file_name.csr
```

Remplacez le terme `your_file_name` par le nom de fichier que vous avez choisi précédemment lors de l'[étape 1.1](#step-1.1) de ce guide.

La CSR s'affiche alors dans votre terminal sous cette forme : 

```ssh
-----BEGIN CERTIFICATE REQUEST-----
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
XXXXXXXXXXXX The CSR XXXXXXXXXXXXXX
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
------END CERTIFICATE REQUEST------
```

Ouvrez un logiciel de traitement de texte, puis `copiez/collez`{.action} l'intégralité de la CSR, y compris les termes `-----BEGIN CERTIFICATE REQUEST-----` et `-----END CERTIFICATE REQUEST-----`.

Enregistrez ce fichier est conservez-le précieusement pour la suite de ce guide si votre fournisseur SSL vous le demande lors de votre future commande.

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

<a name="3files"></a>

> [!warning]
>
> Certains fournisseurs SSL délivrent le contenu des fichiers `certificate.crt` et `ca_bundle.crt` dans un seul et même fichier. Vous devrez séparer le contenu de ce fichier afin de reformer les fichiers `certificate.crt` et `ca_bundle.crt`. Ceci avant de réaliser l'[étape 3](#step-3) de ce guide.
>
> D'autres fournisseurs SSL délivrent le fichier `ca_bundle.crt` en plusieurs parties/fichiers. Vous devrez concaténer les contenus de ces fichiers afin de reformer un seul fichier `ca_bundle.crt` et ainsi suivre l'[étape 3](#step-3) de ce guide.
>
> Si vous êtes concernés par cette situation et si vous éprouvez des difficultés à réaliser ces opérations, contactez votre fournisseur SSL sur le sujet. Précisez-lui  que l'ensemble du contenu qu'il vous a délivré doit être réparti uniquement dans 3 fichiers (`certificate.crt`, `ca_bundle.crt` et `private.key`) afin que vous puissiez procéder à l'installation du certificat SSL.

### Etape 3 -  Installer le certificat SSL personnalisé sur votre hébergement web <a name="step-3"></a>

Si vous démarrez directement la lecture de ce guide à cette étape car vous disposez déjà d'un certificat SSL externe commandé auprès d'un fournisseur SSL, vérifiez que vous disposez bien uniquement des 3 fichiers suivants : `certificate.crt`, `private.key` et `ca_bundle.crt`. Si ne n'est pas le cas, consultez les informations [ci-dessus](#3files).

**Avant de finaliser l'installation du certificat SSL sur votre hébergement web**, vérifiez que **l'ensemble des noms de domaine et/ou sous-domaines** concernés par votre certificat SSL : 

- pointent vers l'adresse IP de votre hébergement web ; 
- sont déclarés en multisite sur votre hébergement web ;

Vérifiez également les point suivants :

- La case `SSL` ne doit pas être cochée lors de l'ajout en multisite d'un nom de domaine/sous-domaine concerné par votre certificat SSL externe.
- Le statut `A générer` ou `Actif` ne doit pas déjà être présent pour chacun des noms de domaine/sous-domaines concernés par votre certificat SSL externe.

Si besoin et pour vous en assurer, consultez nos guides « [Partager son hébergement entre plusieurs sites](/pages/web_cloud/web_hosting/multisites_configure_multisite) » et « [Éditer une zone DNS OVHcloud](/pages/web_cloud/domains/dns_zone_edit) ».

Dès lors où tous ces prérequis sont respectés, vous pourvez commencer la finalisation de l'installation de votre certificat SSL personnalisé sur votre hébergement web.

Pour cela, effectuez les actions suivantes :

1. Connectez-vous à votre [espace client OVHcloud](/links/manager).
2. Sur la ligne située en haut de l'espace client, cliquez sur l'onglet `Web Cloud`{.action}.
3. Dans la colonne de gauche, cliquez sur le menu déroulant `Hébergements`{.action}.
4. Sélectionnez l'hébergement web concerné.
5. Sur la page qui s'affiche, restez dans l'onglet `Informations générales`{.action}.
6. Positionnez-vous dans l'encadré intitulé `Configuration`.
7. A droite de la mention `Certificat SSL`, cliquez sur le bouton `...`{.action}, puis sur `Commander un certificat SSL`{.action}.

![Order an SSL certificate](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/order-an-ssl-certificate.png){.thumbnail}

Dans la fenêtre qui apparaît, sélectionnez `Import de votre certificat SSL`{.action} parmi la liste des choix possibles, puis cliquez sur `Suivant`{.action}.

![Order an SSL certificate](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/order-an-ssl-certificate-step-1-custom.png){.thumbnail}

La fenêtre suivante s'affiche avec 3 formulaires à compléter :

![Order an SSL certificate](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/order-an-ssl-certificate-step-2-custom-empty.png){.thumbnail}

- `Copier le contenu de votre certificat (RSA uniquement)`{.action} : saisissez le contenu du fichier **certificate.crt** délivré par votre fournisseur SSL, y compris les termes `-----BEGIN CERTIFICATE-----` et `-----END CERTIFICATE-----` (ou leurs équivalents). Le chiffrement RSA correspond au chiffrement standard des certificats SSL.
- `Copier le contenu de votre clé privée (non chiffrée)`{.action} : saisissez le contenu du fichier **private.key** délivré par votre fournisseur SSL, y compris les termes `-----BEGIN RSA PRIVATE KEY-----` et `-----END RSA PRIVATE KEY-----` (ou leurs équivalents). La mention *non chiffrée* signifie que la clé privée ne doit pas être protégée par un mot de passe ou une passphrase. Dans le cas contraire, l'installation du certificat échouera.
- `Copier le contenu de votre chaîne de certificats`{.action} : saisissez le contenu du fichier **ca_bundle.crt** délivré par votre fournisseur SSL, y compris les termes `-----BEGIN CERTIFICATE-----` et `-----END CERTIFICATE-----` (ou leurs équivalents).

![Order an SSL certificate](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/order-an-ssl-certificate-step-2-custom.png){.thumbnail}

Une fois les 3 formulaires complétés, cliquez sur `Valider`{.action} pour terminer l'importation du certificat SSL personnalisé sur votre hébergement web.

Si le certificat SSL a été correctement généré par le fournisseur SSL et si les prérequis sont respectés, un message apparait précisant que l'activation du certificat SSL sur votre hébergement web est en cours.

> [!warning]
>
> Si vous rencontrez l'erreur `error check SAN from certificate`, cela est dû à au moins l'une des deux situations suivantes :
>
> - au moins un nom de domaine/sous-domaine déclaré dans votre certificat SSL ne pointe pas vers l'adresse IP de votre hébergement web ;
> - au moins un nom de domaine/sous-domaine déclaré dans votre certificat SSL n'est pas déclaré dans l'onglet `Multisite` de votre hébergement web.
>
> Consultez nos guides « [Partager son hébergement entre plusieurs sites](/pages/web_cloud/web_hosting/multisites_configure_multisite) » et « [Éditer une zone DNS OVHcloud](/pages/web_cloud/domains/dns_zone_edit) » pour régler cette situation.

L'installation prend plusieurs minutes.

Pour vérifier que l'installation est terminée, effectuez les actions suivantes :

1. Connectez-vous à votre [espace client OVHcloud](/links/manager).
2. Sur la ligne située en haut de l'espace client, cliquez sur l'onglet `Web Cloud`{.action}.
3. Dans la colonne de gauche, cliquez sur le menu déroulant `Hébergements`{.action}.
4. Sélectionnez l'hébergement web concerné.
5. Sur la page qui s'affiche, restez dans l'onglet `Informations générales`{.action}.
6. Positionnez-vous dans l'encadré intitulé `Configuration`.

Si tout est terminé, vous devez retrouver, en dessous de la mention `Certificat SSL`, une valeur équivalente à celle-ci : `Oui - CUSTOM - CUSTOM`.

![Order an SSL certificate](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/ssl-certificate-custom-enable.png){.thumbnail}

Votre certificat SSL personnalisé est désormais installé et actif. Vous pouvez dès à présent l'utiliser avec votre site web en passant, par exemple, votre [site web en HTTPS](/pages/web_cloud/web_hosting/ssl-activate-https-website).

## Aller plus loin <a name="go-further"></a>

[Hébergement web - Gérer un certificat SSL](/pages/web_cloud/web_hosting/ssl_on_webhosting).

[Hébergement web - Passer son site web en HTTPS](/pages/web_cloud/web_hosting/ssl-activate-https-website).

[Erreurs courantes liées à la sécurisation de votre site web avec le SSL](/pages/web_cloud/web_hosting/ssl_avoid_common_pitfalls_of_making_website_secure).
 
Pour des prestations spécialisées (référencement, développement, etc), contactez les [partenaires OVHcloud](/links/partner).
 
Si vous souhaitez bénéficier d'une assistance à l'usage et à la configuration de vos solutions OVHcloud, nous vous proposons de consulter nos différentes [offres de support](/links/support).
 
Échangez avec notre [communauté d'utilisateurs](/links/community).