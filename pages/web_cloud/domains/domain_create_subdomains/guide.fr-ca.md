---
title: "Comment créer un sous-domaine ?"
excerpt: "Découvrez la définition d'un sous-domaine et comment en créer chez OVHcloud"
updated: 2024-03-05
---

## Objectif <a name="goal"></a>

Internet est composé de serveurs et d'appareils qui interagissent entre eux via un réseau global. Lorsque ces serveurs et ces appareils sont connectés au réseau Internet, une **adresse IP publique** (équivalent à une adresse postale) leur est attribuée. Cette adresse IP permet de joindre à distance un serveur ou un appareil. Ainsi, un utilisateur est en mesure de consulter un site web en saisissant cette adresse IP grâce à son navigateur Internet installé sur son ordinateur.

Les **noms de domaine** ont été instaurés pour faciliter l'accès à un site web pour les utilisateurs du réseau Internet. En effet, il est plus aisé de retenir un nom composé d'une chaîne de caractères choisis (par exemple : ovhcloud.com), plutôt qu'une suite de chiffres qui compose une adresse IP (par exemple : 54.39.46.56).

Un **nom de domaine** est composé de niveaux. Ces niveaux sont eux-mêmes généralement séparés par un point `.` (à l'exception de certaines **extensions** du premier niveau comme *.co.uk*, *.gouv.fr* ou encore *.notaires.fr*):

- **T**op **L**evel **D**omain (**TLD**) représente les domaines de premier niveau. Nous les appelons plus communément les **extensions**. Il existe actuellement 4 types de domaine de premier niveau :
    - Les **c**ountry **c**ode **T**op **L**evel **D**omains (**ccTLDs**), composés de deux caractères. Ils correspondent aux différents pays du globe. Par exemple, les extensions *.fr*, *.es*, *.it* ou encore *.pl* sont des ccTLDs.
    - Les **g**eneric **T**op **L**evel **D**omains (**gTLDs**), composés d'au moins trois caractères. Ils représentent des thèmes ou des secteurs d'activité plus généraux. Par exemple, les extensions *.com*, *.net*, *.org* ou encore *.info* sont des gTLDs.
    - Les **new** **g**eneric **T**op **L**evel **D**omains (**new gTLDs**), nouvelles extensions créées à partir de 2012 par l'**I**nternet **C**orporation for **A**ssigned **N**ames and **N**umbers (**ICANN**) afin de répondre à la forte hausse des demandes de création de noms de domaine. Elles peuvent correspondre à des thèmes génériques, des marques, des régions ou des villes. Par exemple, les extensions *.love*, *.ovh* ou encore *.paris* sont des new gTLDs.
    - Les **Corp**oration **T**op **L**evel **D**omains (**CorpTLDs**). Il s'agit en réalité d'une sous catégorie des new GTLDs. Sur demande auprès de l'ICANN, les entreprises ou organisations peuvent demander la création de leur propre TLD. Par exemple, l'extension *.ovh* est une CorpTLD créée par OVHcloud il y a quelques années.

- **S**econd **L**evel **D**omain (**SLD**) représente les domaines de *deuxième niveau*. Nous les appelons plus communément les **labels**. Lorsque vous commandez un nom de domaine, c'est le label que vous pouvez définir librement (sous réserve que celui-ci n'ait pas déjà été enregistré par un autre utilisateur sur la même extension et dans la limite de 63 caractères). Par exemple, *ovhcloud* correspond au label du nom de domaine *ovhcloud.com*.

- Third Level Domain (**subdomain**). C'est à partir de ce troisième niveau que l'on parle de **sous-domaine**. Nous allons détailler sa définition dans ce guide et vous expliquer comment le mettre en place avec vos différents services.

![URL content](/pages/assets/schemas/domains/url-composition.png){.thumbnail}

**Découvrez les sous-domaines et comment en créer chez OVHcloud.**

## Prérequis

- Disposer d'au moins un [nom de domaine](/links/web/domains).
- Disposer d'une zone DNS active pour votre nom de domaine. Si besoin, consultez notre guide « [Créer une zone DNS OVHcloud](/pages/web_cloud/domains/dns_zone_create) ».
- Être connecté à votre [espace client OVHcloud](/links/manager).
- Disposer des droits suffisants sur l’ensemble des services concernés. Retrouvez plus d'informations sur notre guide « [Gérer les contacts de ses services](/pages/account_and_service_management/account_information/managing_contacts) ».

## En pratique

### Définition d'un sous-domaine

Un [nom de domaine](/links/web/domains) peut être associé à plusieurs types de services (e-mail, site web, etc.). Néanmoins, un nom de domaine ne peut être associé qu'à un seul site web à la fois.

Certains utilisateurs ou organisations ont cependant besoin de segmenter leurs sites web ou leurs services e-mail tout en gardant le même nom de domaine.

Les sous-domaines (parfois appelés **préfixes**) répondent au besoin de segmenter un nom de domaine. Ils offrent la possibilité au propriétaire de décliner, en plusieurs sous-catégories, les services web associés à son nom de domaine, sans devoir souscrire à un nouveau nom de domaine.

En d'autres termes, les sous-domaines permettent de structurer facilement l'ensemble des services web (serveurs DNS, site web, intranet, e-mail, etc.) associés à un même nom de domaine.

Comme précisé plus haut dans la partie « [objectif](#goal) », les sous-domaines correspondent au troisième niveau (*Third Level Domain*) d'un nom de domaine. Le sous-domaine le plus connu des internautes est, à ce jour, le sous-domaine **W**orld **W**ide **W**eb (**www**). En effet, beaucoup de sites web utilisent encore ce sous-domaine pour être consulté sur Internet.

Ainsi, *www.ovhcloud.com* est un sous-domaine du nom de domaine *ovhcloud.com*.

Vous pouvez créer une infinité de sous-domaines à partir d'un seul nom de domaine.

Si, par exemple, vous disposez du nom de domaine *example.com*, vous pouvez créer les sous-domaines suivants :

- *dns1.example.com* et *dns2.example.com* pour personnaliser vos serveurs DNS à l'aide des [GLUE records](/pages/web_cloud/domains/glue_registry) ;
- *www.example.com* pour afficher votre site web ;
- *preprod.example.com* pour tester votre site web dans de nouvelles versions. Ceci sans couper l'accès de votre site web actuel à vos utilisateurs ;
- *intranet.example.com* pour que vos collaborateurs puissent échanger entre eux sur votre site web interne ;
- *forum.example.com* ou *community.example.com* pour que votre communauté d'utilisateurs puisse échanger et partager leurs expériences ;
- *app.example.com* pour accéder à votre application en ligne ou pour la télécharger directement ;
- *recruitment.example.com* pour permettre à des candidats en recherche d'emploi de postuler sur votre propre interface de recrutement ;
- *sav.example.com*, *sales.example.com*, *legal.example.com* pour permettre à vos clients de contacter différentes structures internes à votre entreprise ou encore pour hiérarchiser vos salariés en fonction des services internes auxquels ils appartiennent ;
- etc.

Au delà du troisième niveau de domaine, on considère qu'il s'agit là également de sous-domaines. Pour reprendre l'un des exemples ci-dessus, vous pouvez tout à fait créer le sous-domaine *preprod.app.example.com* pour tester la nouvelle version de votre application web. Ceci sans couper l'accès à la version actuelle de votre application sur *app.example.com*.

### Créer un sous-domaine

Les [noms de domaine](/links/web/domains) ont tous besoin d'une **zone DNS** pour fonctionner. La zone DNS se compose d’informations techniques, appelées « enregistrements DNS ». Elle est, en quelque sorte, comme un centre d'aiguillage.

Pour plus de détails sur les zones DNS, consultez notre guide « [Créer une zone DNS OVHcloud](/pages/web_cloud/domains/dns_zone_create) » et « [Editer une zone DNS OVHcloud](/pages/web_cloud/domains/dns_zone_edit) ».

**Tous les sous-domaines se configurent dans la zone DNS active du nom de domaine, en y ajoutant des enregistrements DNS**

#### 1 - Identifier l'endroit où se trouve la zone DNS active de votre nom de domaine

Deux cas de figure sont possibles :

- La zone DNS active de votre nom de domaine est présente chez OVHcloud.
- La zone DNS active de votre nom de domaine est hébergée ailleurs.

> [!warning]
>
> La zone DNS active de votre nom de domaine n'est pas obligatoirement gérée auprès du même fournisseur que votre nom de domaine.
>
> 1 : Pour identifier l'endroit où se trouve la zone DNS active d'un nom de domaine enregistré chez OVHcloud, vous pouvez vous aider de notre guide « [Modifier les serveurs DNS d'un nom de domaine OVHcloud](/pages/web_cloud/domains/dns_server_edit) ».
>
> 2 : Si votre nom de domaine n'est pas enregistré chez OVHcloud, rapprochez-vous du *bureau d'enregistrement* actuel de votre nom de domaine afin de connaître l'endroit où est hébergée sa zone DNS active. Sachez que vous pouvez utiliser notre guide « [Transférer son nom de domaine vers OVHcloud](/pages/web_cloud/domains/transfer_incoming_generic_domain) » si vous souhaitez réaliser cette action.
>

Si les serveurs DNS déclarés pour votre nom de domaine ont l'une des deux formes suivantes :

- `dnsXX.ovh.ca` et `nsXX.ovh.ca` (où chacun des « X » représente un chiffre)
- `dns200.anycast.me` et `ns200.anycast.me`

Cela signifie que la zone DNS active de votre nom de domaine est bien active chez OVHcloud.

Dans le cas contraire, contactez votre fournisseur DNS pour créer des sous-domaines avec votre nom de domaine.

#### 2 - Créer les enregistrements DNS pour vos sous-domaines

Pour ajouter vos sous-domaines dans la zone DNS active de votre nom de domaine, consultez notre guide « [Editer une zone DNS OVHcloud](/pages/web_cloud/domains/dns_zone_edit) ».

Par exemple, vous pourrez y ajouter :

- L'adresse IP (enregistrements DNS de type *A* et *AAAA*) de votre hébergement web pour afficher l'un de vos sites web avec un sous-domaine.
- Les serveurs e-mail (enregistrements DNS de type *MX*) vers lesquels votre sous-domaine doit rediriger les e-mails qu'il reçoit. Cela vous permet de les consulter sur votre (vos) adresse(s) e-mail(s) personnalisée(s) avec votre sous-domaine.
- Des informations liées à la sécurité / l'authentification de vos services (hébergement web, serveur web, e-mail, etc.) associés à l'un de vos sous-domaines (enregistrements DNS de type *SPF*, *DKIM*, *DMARC*, etc.).

> [!primary]
>
> La modification d'une zone DNS associée à un nom de domaine entraine un délai de propagation de **4** à **24** heures maximum pour que celle-ci soit effective.
>
> De plus et comme pour un nom de domaine en tant que tel, la création seule d'un enregistrement DNS pour un sous-domaine ne suffit généralement pas à le faire fonctionner avec le service « cible » que vous lui avez défini dans l'enregistrement DNS. 
>
> Effectivement, pour des raisons de sécurité, vous devrez également autoriser le sous-domaine à pouvoir accéder au service « cible » (hébergement web, e-mail, etc.).
>

Dans la partie suivante, découvrez comment autoriser un sous-domaine à pouvoir accéder aux différents services de l'univers Web Cloud (hébergement web, serveur Exchange, etc.) proposés par OVHcloud.

> [!warning]
>
> Si vous souhaitez configurer un sous-domaine pour un service hébergé ailleurs que chez OVHcloud, nous ne serons pas en mesure de vous apporter une assistance. Nous vous invitons à contacter le fournisseur de votre service externe pour poursuivre votre configuration. 
>

### Associer, autoriser et configurer votre sous-domaine avec un service OVHcloud

Plusieurs services de l'univers Web cloud peuvent être utilisés avec un sous-domaine. Les procédures d'association sont similaires à celles que vous devriez exécuter avec un nom de domaine. Nous allons vous exposer uniquement les cas les plus courants.

Pour les services qui ne seraient pas mentionnés, consultez la documentation relative au service concerné, afin d'identifier si ce dernier peut êre utilisé avec un sous-domaine.

#### Cas 1 - Afficher un site web présent sur mon hébergement web OVHcloud avec un sous-domaine

Tout comme pour un nom de domaine, pour autoriser un sous-domaine à afficher le contenu d'un dossier « cible » présent sur un hébergement web, connectez-vous à l'[espace client OVHcloud](/links/manager){.external} et sélectionnez `Web Cloud`{.action}. Cliquez sur `Hébergements`{.action} dans la colonne de gauche, sélectionnez l'offre concernée où se trouve votre site web puis choisissez l'onglet `Multisite`{.action}.

C'est ici que vous autorisez l'accès de votre sous-domaine à votre hébergement web où se trouve votre site web.

Pour plus de détails sur la configuration d'un domaine ou d'un sous-domaine sur un hébergement web, consultez notre guide « [Partager son hébergement entre plusieurs sites](/pages/web_cloud/web_hosting/multisites_configure_multisite) ». Qu'il s'agisse d'un nom de domaine ou d'un sous-domaine, la procédure est la même.

> [!warning]
>
> L'ajout en multisite d'un nom de domaine ou d'un sous-domaine peut nécessiter la mise en place d'un token de validation. Pour un sous-domaine, ce même token n'est pas pris en compte et doit être ajouté non pas pour le sous-domaine mais pour le nom de domaine. Dans ce cas, ajoutez en complément, dans la zone DNS active de votre nom de domaine, le token sous la forme d'un enregistrement DNS de type TXT pour le nom de domaine.
>

#### Cas 2 - Créer des adresses e-mail Exchange avec un sous-domaine

Pour débloquer la création d'adresses e-mail Exchange personnalisées avec un sous-domaine, connectez-vous à l'[espace client OVHcloud](/links/manager){.external} et sélectionnez `Web Cloud`{.action}. Cliquez sur `Microsoft`{.action} dans la colonne de gauche puis sur `Exchange`{.action}. Sélectionnez ensuite la plateforme Exchange que vous souhaitez utiliser avec votre sous-domaine. Sur la page qui s'affiche, rendez-vous dans l'onglet `Domaine associés`{.action} puis cliquez sur le bouton `Ajouter un domaine`{.action} à droite.

Vous pourrez ainsi déclarer votre sous-domaine sur votre plateforme Exchange.

Pour plus de détails sur la configuration d'une plateforme Exchange, consultez les guides suivants :

- [Premiers pas avec le service Hosted Exchange](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/exchange_starting_hosted)
- [Ajouter un nom de domaine sur une plateforme e-mail](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/exchange_adding_domain)
- [Ajouter un enregistrement CNAME pour valider votre domaine sur votre offre e-mail](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/exchange_dns_cname)

## Aller plus loin <a name="go-further"></a>

[Créer une zone DNS OVHcloud](/pages/web_cloud/domains/dns_zone_create)

[Éditer une zone DNS OVHcloud](/pages/web_cloud/domains/dns_zone_edit)

[Modifier les serveurs DNS d'un nom de domaine OVHcloud](/pages/web_cloud/domains/dns_server_edit)

[Partager son hébergement entre plusieurs sites](/pages/web_cloud/web_hosting/multisites_configure_multisite)

[Premiers pas avec le service Hosted Exchange](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/exchange_starting_hosted)

[Ajouter un nom de domaine sur une plateforme e-mail](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/exchange_adding_domain)

[Ajouter un enregistrement CNAME pour valider votre domaine sur votre offre e-mail](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/exchange_dns_cname)

Pour des prestations spécialisées (référencement, développement, etc), contactez les [partenaires OVHcloud](/links/partner).

Si vous souhaitez bénéficier d'une assistance à l'usage et à la configuration de vos solutions OVHcloud, nous vous proposons de consulter nos différentes [offres de support](/links/support).

Échangez avec notre [communauté d'utilisateurs](/links/community).