---
title: "Comment créer un sous-domaine ?"
excerpt: "Découvrez la définition d'un sous-domaine et comment en créer chez OVHcloud"
updated: 2023-11-09
---

## Objectif <a name="goal"></a>

Internet est composé de *serveurs* et d'*appareils* mis en réseau pour interagir entre eux. Ses *serveurs* et ses *appareils* disposent respectivement d'une *adresse IP publique* (équivalent à une adresse postale) unique sur le réseau. Cette *adresse IP* permet, par exemple, à un utilisateur de consulter un site web spécifique grâce à un navigateur Internet installé sur son ordinateur.

Les **noms de domaine** ont été mis en place afin de faciliter l'accès à un site web pour les utilisateurs du réseau Internet. En effet, il est plus facile de retenir le nom d'un site web (sous la forme d'une chaîne de caractères) plutôt que l'*adresse IP* qui lui est associée.

Un **nom de domaine** est composé de niveaux. Ces niveaux sont eux-mêmes généralement séparés par un `.` (à l'exception de certaines **extensions** du *premier niveau* comme le *.co.uk*, *.gouv.fr* ou encore *.notaires.fr*):

- **T**op **L**evel **D**omain (**TLD**): représente les domaines de *premier niveaux*. Nous les appelons plus communément les **extensions**. Il existe actuellement 4 types de domaine de premier niveau : 

    - Les **c**ountry **c**ode **T**op **L**evel **D**omains (**ccTLDs**) : composés de deux caractères, ils correspondent aux différents pays du globe. Par exemple, les extensions *.fr*, *.es*, *.it* ou encore *.pl* sont des ccTLDs;
    - Les **g**eneric **T**op **L**evel **D**omains (**gTLDs**) : composés d'au moins trois caractères, ils représentent des thèmes ou des secteurs d'activité plus généraux. Par exemple, les extensions *.com*, *.net*, *.org* ou encore *.info* sont des gTLDs;
    - Les **new** **g**eneric **T**op **L**evel **D**omains (**new gTLDs**) :
    nouvelles extensions créées à partir de 2012 par l'**I**nternet **C**orporation for **A**ssigned **N**ames and **N**umbers (**ICANN**) afin de répondre à la forte hausse des demandes de création de noms de domaine. Elles peuvent correspondre à des thèmes génériques, des marques, des régions ou des villes. Par exemple, les extensions *.love*, *.ovh* ou encore *.paris* sont des new gTLDs;
    - Les **Corp**oration **T**op **L**evel **D**omains (**CorpTLDs**) : il s'agit en réalité d'une sous catégorie des new GTLDs. Sur demande auprès de l'**ICANN**, les entreprises ou organisations peuvent demander la création de leur propre TLD. Par exemple, l'extension *.ovh* est une CorpTLD créée par OVHcloud il y a quelques années.

- **S**econd **L**evel **D**omain (**SLD**) : représente les domaines de *deuxième niveau*. Nous les appelons plus communément les **labels**. Lorsque vous commandez un nom de domaine, c'est le **label** que vous pouvez définir librement (sous réserve que celui-ci n'ait pas déjà été enregistré par un autre utilisateur sur la même extension et dans la limite de 63 caractères). Par exemple, *ovhcloud* correspond au label du nom de domaine *ovhcloud.com*.

- Third Level Domain (**subdomain**) : c'est à partir de ce troisième niveau que l'on parle de *sous-domaine*. Nous allons détailler dans le présent guide sa définition et vous expliquer comment les mettre en place avec vos différents services.
  
**Découvrez la définition d'un sous-domaine et comment en créer chez OVHcloud**
  
## Prérequis

- Disposer d'au moins un [nom de domaine](https://www.ovhcloud.com/fr/domains/);
- Disposer d'une zone DNS active pour votre nom de domaine. Si besoin, consultez notre guide « [Créer une zone DNS OVHcloud](/pages/web_cloud/domains/dns_zone_create) »;
- Être connecté à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr);
- Disposer des droits suffisants sur l’ensemble des services concernées. Retrouvez plus d'informations sur notre guide [Gérer les contacts de ses services](/pages/account_and_service_management/account_information/managing_contacts).
  
## En pratique

### Définition d'un sous-domaine

Un [nom de domaine](https://www.ovhcloud.com/fr/domains/) peut être associé à plusieurs types de services (serveur e-mail, site web, etc.).

L'inconvénient principal d'un nom de domaine est qu'il ne peut être associé qu'à un seul site web à la fois.

Cependant, certains utilisateurs ou organisations ont besoin de segmenter leurs sites web ou leurs services e-mail tout en gardant le même nom de domaine.

Les sous-domaines (parfois appelés **préfixes**) pallient à cet inconvénient. Ils offrent la possibilité au propriétaire d'un nom de domaine de décliner en plusieurs sous-groupes ou sous-catégories les services web associés à son nom de domaine. Ceci sans pour autant souscrire à un nouveau nom de domaine ou à un nom de domaine différent.

En d'autres termes, les sous-domaines permettent de structurer facilement l'ensemble des services web (serveurs DNS, site web, intranet, serveur e-mail, etc.) associés à un même nom de domaine.

Comme précisé plus haut dans la partie « [objectif](#goal) », les sous-domaines correspondent au *Third Level Domain* (troisième niveau) d'un nom de domaine. Le sous-domaine le plus connu des internautes est, à ce jour, le sous-domaine **W**orld **W**ide **W**eb (**www**).

En effet, beaucoup de sites web utilisent encore ce sous-domaine pour être consulté sur Internet.

Ainsi, *www.ovhcloud.com* est un sous-domaine du nom de domaine *ovhcloud.com*.

Vous pouvez créer un nombre quasi illimité de sous-domaines à partir d'un seul nom de domaine.

Si, par exemple, vous disposez du nom de domaine *domain.tld*, vous pouvez créer les sous-domaines suivants :

- *dns1.domain.tld* et *dns2.domain.tld* pour personnaliser vos serveurs DNS à l'aide des [GLUE records](/pages/web_cloud/domains/glue_registry);
- *www.domain.tld* pour afficher votre site web;
- *preprod.domain.tld* pour tester votre site web dans de nouvelles versions. Ceci sans couper l'accès de votre site web actuel à vos utilisateurs;
- *intranet.domain.tld* pour que vos collaborateurs puissent échanger entres-eux sur votre site web interne;
- *forum.domain.tld* ou *community.domain.tld* pour que votre communauté d'utilisateurs puisse échanger et partager son expérience;
- *app.domain.tld* pour accéder à votre application en ligne ou pour la télécharger directement;
- *recruitment.domain.tld* pour permettre à des candidats en recherche d'emploi de postuler sur votre propre interface de recrutement;
- *sav.domain.tld*, *sales.domain.tld*, *legal.domain.tld* pour permettre à vos clients de contacter différentes structures interne à votre entreprise ou encore pour hiérarchiser vos salariés en fonction des services internes auxquels ils appartiennent;
- etc.

> [!success]
>
> Au delà du troisième niveau de domaine (quatrième, cinquième, etc.), on considère qu'il s'agit là également de **sous-domaines**.
>
> Effectivement, pour reprendre l'un des exemples ci-dessus, vous pouvez tout à fait créer le sous-domaine *preprod.app.domain.tld* pour tester la nouvelle version de votre application web. Ceci sans couper l'accès à la version actuelle de votre application sur *app.domain.tld*.
>

## Aller plus loin <a name="go-further"></a>

[Créer une zone DNS OVHcloud](/pages/web_cloud/domains/dns_zone_create)

[Éditer une zone DNS OVHcloud](/pages/web_cloud/domains/dns_zone_edit)
 
Pour des prestations spécialisées (référencement, développement, etc), contactez les [partenaires OVHcloud](https://partner.ovhcloud.com/fr/directory/).
 
Si vous souhaitez bénéficier d'une assistance à l'usage et à la configuration de vos solutions OVHcloud, nous vous proposons de consulter nos différentes [offres de support](https://www.ovhcloud.com/fr/support-levels/).
 
Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.