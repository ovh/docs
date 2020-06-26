---
title: Premiers pas avec un hébergement web
slug: premiers-pas-avec-hebergement-web
excerpt: Découvrez comment bien débuter avec un hébergement web
section: Premiers pas
order: 1
---

**Dernière mise à jour le 05/05/2020**

## Objectif

Vous venez d’acquérir un hébergement web pour créer votre site internet. Cet hébergement va vous permettre d’installer un site issu d’une solution clés en main (WordPress, PrestaShop), ou de développer vous même votre plateforme sur des serveurs disponibles en permanence. Nous vous remercions de votre confiance et vous proposons ce guide pour apprendre comment ouvrir votre site web en toute simplicité.

**Découvrez comment bien débuter avec un hébergement web.**

## Prérequis

- Disposer d'une offre d'[hébergement web OVHcloud](https://www.ovh.com/ca/fr/hebergement-web/){.external}.
- Avoir reçu l'e-mail vous confirmant l'installation de votre hébergement web.
- Disposer d'un [nom de domaine](https://www.ovh.com/ca/fr/domaines/){.external} qui sera l'adresse sur laquelle votre site sera accessible.
- Être connecté à votre [espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager){.external}.


## En pratique

### Étape 1 : délimiter votre projet

Vous souhaitez créer un blog ou une boutique en ligne ? Partager une passion ou promouvoir votre activité professionnelle sur Internet ? Migrer un site déjà existant chez OVHcloud ? Afin de mener à bien votre projet, il est important de posséder une vision claire de votre objectif.

Grâce à votre hébergement web OVHcloud, vous pouvez créer un nouveau site internet ou migrer un existant.

- **Création d'un nouveau site web**

 Vous avez la possibilité de créer vous même votre site internet grâce à des compétences en programmation ou d'utiliser des sites clés en main comme des CMS (Content Management System). La première solution est plus technique, mais  offre la possibilité de créer un projet sur mesure. La seconde permet de bénéficier d’une structure de site prête à l’emploi sans compétences techniques requises.

Depuis son espace client, OVHcloud met à la disposition de ses clients un outil permettant d'installer en 1 clic un CMS à choisir parmi WordPress, PrestaShop, Drupal et Joomla. Si vous ne savez pas quel CMS utiliser, ce [comparatif](https://www.ovh.com/ca/fr/hebergement-web/site/comparatif-cms/){.external} devrait vous aider dans votre décision. Si le CMS que vous souhaitez installer n'est pas proposé par OVHcloud, vous pouvez l'installer manuellement sur votre hébergement.

- **Migrer un site web existant vers OVHcloud**

La migration d'un site peut s'avérer sensible, en particulier si elle se réalise sur des services actuellement en cours de production et sur lesquels une interruption n'est pas envisageable. En ce sens, ce guide ne reprend que quelques-unes des étapes à réaliser dans le cadre d'une migration de vos services. Pour connaître le processus complet de migration d'un site web, nous vous invitons à consulter le guide intitulé [Migrer mon site chez OVHcloud](../migrer-mon-site-chez-ovh/){.external}.


### Étape 2 : installer votre site

Une fois votre projet déterminé avec précision, il ne reste plus qu'à le réaliser sur votre hébergement. L'étape suivante concerne donc la mise en ligne de votre site internet. Pour cela, trois possibilités s'offrent à vous suivant le temps et les compétences techniques dont vous disposez sur le sujet.


#### Solution simple en 1 clic, sans compétences techniques

Cette solution utilise les modules en 1 clic OVHcloud, un outil permettant d'installer un CMS simplement et rapidement. OVHcloud réalise l'installation du site et vous communique vos identifiants d'administration.

Afin que l'installation du module OVHcloud puisse se réaliser, vous devez vous assurer que le répertoire d'installation du module soit vide (ce qui est le cas si vous ne vous êtes pas encore connecté à votre espace de stockage). Pour réaliser l'installation du module en 1 clic, connectez-vous dans votre [espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager){.external}. Dans la barre de services à gauche, rendez-vous dans la section `Hébergements`{.action}, puis sur le nom de l'hébergement web que vous venez de commander. Puis, dans l'onglet `Modules en 1 clic`{.action}, cliquez sur le bouton `Ajouter un module`{.action}.

![Accès aux modules en 1 clic](images/access_to_the_1_click_modules_section.png){/thumbnail}

Enfin, pour initier l'installation du module en 1 clic, sélectionnez le CMS que vous souhaitez installer, assurez-vous que la case `Installation en mode avancé`{.action} ne soit pas cochée, puis cliquez sur le bouton `Installer`{.action}.

Il ne vous reste plus qu'à patienter le temps de recevoir l'e-mail vous confirmant l'installation du module et comportant les informations pour vous connecter à l’administration du site. Vous pourrez ensuite poursuivre les étapes restantes ci-dessous.

Si vous désirez obtenir plus d'informations sur les modules en 1 clic OVHcloud, consultez notre documentation : [Installer son site avec les modules en 1 clic](../modules-en-1-clic/){.external}.


#### Solution rapide en quelques clics, sans compétences techniques

Cette solution utilise les modules OVHcloud, un outil permettant d'installer un CMS simplement. OVHcloud installe votre site grâce aux informations personnalisées que vous avez renseignées (par exemple : la personnalisation des identifiants de connexion au CMS). Cette solution nécessite de bénéficier d'au moins une base de données dans son offre.

Afin que l'installation du module OVHcloud puisse se réaliser, vous devez vous assurer que :

- le répertoire d'installation du module soit vide (ce qui est le cas si vous ne vous êtes pas encore connecté à votre espace de stockage) ;
- qu'une base de données soit déjà créée sur votre hébergement (rendez-vous sur l'onglet `Bases de données`{.action} puis sur `Créer une base de données`{.action} pour réaliser la manipulation).

Pour créer la base de données, connectez-vous dans votre [espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager){.external}. Dans la barre de services à gauche, rendez-vous dans la section `Hébergements`{.action}, puis cliquez sur le nom de l'hébergement web que vous venez de commander. Dans l'onglet `Bases de données`{.action}, cliquez sur le bouton `Créer une base de données`{.action}. Complétez les informations demandées puis patientez le temps que l'installation s'effectue.

![Accès aux modules en 1 clic](images/create_a_database.png){/thumbnail}

Une fois la base de données créée, pour réaliser l'installation du module en 1 clic, rendez-vous dans l'onglet `Modules en 1 clic`{.action}, puis cliquez sur le bouton `Ajouter un module`{.action}. Sélectionnez le CMS que vous souhaitez installer, assurez-vous que la case `Installation en mode avancé`{.action} soit cochée, puis cliquez sur le bouton `Suivant`{.action}.

![Accès aux modules en 1 clic](images/access_to_the_1_click_modules_section.png){/thumbnail}

Suivez les informations demandées jusqu'à initier l'installation du module. Il ne vous reste plus qu'à patienter le temps de recevoir l'e-mail vous confirmant son installation, puis à poursuivre les étapes restantes ci-dessous.

Si vous désirez obtenir plus de détails sur l'installation d'un module en mode avancé, consultez notre documentation : [Installer son site avec les modules en 1 clic](../modules-en-1-clic/){.external}.


#### Solution manuelle, compétences techniques requises

Cette solution s'applique si vous souhaitez créer ou migrer un site internet sans utiliser les modules OVHcloud. Vous devrez être en possession des fichiers du site internet que vous souhaitez installer. Vous devrez donc vous connecter manuellement à votre espace de stockage pour y uploader les fichiers du site puis, si possible, lier ce dernier à une base de données préalablement créée.

Il n'existe pas de marche à suivre universelle tant les sites peuvent être différents les uns des autres, mais nous pouvons vous aiguiller sur les manipulations à réaliser dans votre hébergement web OVHcloud grâce à nos documentations : [Mettre mon site en ligne](../mettre-mon-site-en-ligne/){.external} et [Migrer mon site chez OVHcloud](../migrer-mon-site-chez-ovh/){.external} si ce dernier s'applique. Une fois le site installé manuellement sur votre hébergement web, poursuivez les étapes restantes ci-dessous.


### Étape 3 : créer vos adresses e-mail

Cette étape peut être facultative si vous ne souhaitez pas utiliser les adresses e-mail comprises avec votre offre d'[hébergement web](https://www.ovh.com/ca/fr/hebergement-web/){.external}. Pour créer une une plusieurs adresses e-mail, assurez-vous dans un premier temps d'être connecté dans votre [espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager){.external}. Dans la barre de services à gauche, rendez-vous dans la section `Emails`{.action} puis sur le nom de l'hébergement web que vous venez de commander. Puis, dans l'onglet `Emails`{.action}, cliquez sur le bouton `Créer une adresse e-mail`{.action}.

![Créer une adresse e-mail](images/create_an_email_address.png){/thumbnail}

Suivez les informations demandées jusqu'à la création de votre adresse e-mail. Répétez cette étape pour en créer plusieurs. Si vous êtes dans un processus de migration de vos e-mails chez OVHcloud, nous vous invitons à utiliser notre outil [OVHcloud Mail Migrator](https://omm.ovh.net/){.external} afin de vous aider dans vos démarches. 

Si vous désirez obtenir plus d'informations sur la création d'une adresse e-mail ou sur la migration de vos services chez OVHcloud, consultez nos documentations : [Comment créer une adresse e-mail](../../emails/generalites-sur-les-emails-mutualises/#etape-2-creer-vos-adresses-e-mail_1){.external} et [Migrer mon site chez OVHcloud](../migrer-mon-site-chez-ovh/){.external} si ce dernier s'applique.


### Étape 4 : vérifier ou modifier la configuration de votre domaine

À cette étape, votre site doit être installé sur votre hébergement web OVHcloud et vos adresses e-mail créées. Il se peut que ces dernières ne soient pas encore fonctionnelles si la configuration de votre nom de domaine n'est pas correcte. Celle-ci est liée aux champs DNS qui permettent de garantir l’accessibilité de votre site internet et la réception des messages sur vos adresses e-mail utilisant votre nom de domaine.

Par exemple, lorsqu'un visiteur accède à votre site internet, il renseigne dans son navigateur l'adresse de votre site (votre nom de domaine). Dès lors, une résolution DNS s'effectue. C'est ce processus qui permet de faire le rapprochement entre votre nom de domaine et le serveur sur lequel est hébergé votre site. Cette corrélation est possible grâce à des informations renseignées dans une zone DNS : une sorte d'annuaire où la configuration de votre domaine est inscrite.

Si vous avez commandé votre nom de domaine avec votre hébergement web OVHcloud et que vous n'avez réalisé aucune modification dans la zone DNS depuis l'espace client OVHcloud, vous pouvez de suite poursuivre à l'étape suivante. Dans le cas contraire, ou si vous n'êtes pas sûr de vous, nous vous recommandons de poursuivre l'étape actuelle.


#### Connaître les enregistrements DNS OVHcloud 

Il existe plusieurs champs DNS inhérents à OVHcloud. Nous allons nous intéresser à deux d'entre eux en particulier qui permettent de garantir l’accessibilité de votre site internet et la réception des messages sur vos adresses e-mail.

- **Le champ A, pour le site internet**

Pour vérifier le champ A que vous devez utiliser dans la zone DNS de votre domaine, connectez-vous dans votre [espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager){.external}. Dans la barre de services à gauche, rendez-vous dans la section `Hébergements`{.action} et sur le nom de l'hébergement web que vous venez de commander. Puis, dans l'onglet `Informations générales`{.action}, récupérez l'adresse IP qui apparaît à côté de "IPv4".

![Modifier le champ A](images/know_the_OVH_A_records.png){/thumbnail}

- **Les champs MX, pour les e-mails**

Pour vérifier les champs MX que vous devez utiliser dans la zone de votre domaine, connectez-vous dans votre [espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager){.external}. Dans la barre de services à gauche, rendez-vous dans la section `E-mails`{.action} puis sur le nom de l'hébergement web que vous venez de commander. Enfin, dans l'onglet `Informations générales`{.action}, récupérez les informations qui apparaissent à côté de "Champs MX". Ces derniers peuvent être différents d'un service à un autre suivant le filtre DNS que vous avez décidé d'appliquer.

![Modifier les champs MX](images/know_the_OVH_MX_records.png){/thumbnail}


#### Vérifier et/ou modifier les enregistrement DNS

Maintenant que vous connaissez les enregistrements DNS inhérents à votre hébergement web OVHcloud, il vous faut les vérifier et les modifier si nécessaire. Les manipulations diffèrent suivant le projet que vous réalisez.

- **Commande d'un nom de domaine avec un hébergement web OVHcloud**

La configuration de votre domaine est déjà correcte. Poursuivez vers l'étape suivante. Cependant, si vous avez réalisé des manipulations dans votre [espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager){.external} sur la zone DNS de votre domaine, il se peut que cette dernière ne le soit plus.
    
Pour accéder à la zone DNS de votre domaine OVHcloud, rendez-vous dans la section `Domaines`{.action} dans la barre de services à gauche, puis cliquez sur le nom de domaine concerné. Enfin, dans l'onglet `Zone DNS`{.action}, vérifiez et modifiez les informations nécessaires.


- **Nom de domaine n'utilisant pas la zone DNS d'OVHcloud**
    
Vous devrez vérifier la zone DNS de votre domaine chez le prestataire qui gère cette dernière. Si nécessaire, modifiez les informations.


- **Migrer vos services (sites et e-mail) vers OVHcloud**

Dans ce type de cas, les manipulations liées aux DNS peuvent occasionner une indisponibilité de vos services si elles ne sont pas réalisées au bon moment. En accord avec les différentes étapes décrites dans notre documentation [Migrer mon site chez OVHcloud](../migrer-mon-site-chez-ovh/){.external}, vous devrez modifier les serveurs DNS de votre domaine à la fin processus.


> [!primary]
>
> Une modification dans une zone DNS nécessite un temps de propagation de 4 à 24 heures maximum avant d'être pleinement effective.
>


### Étape 5 : personnaliser votre site

Votre site est à présent accessible. Cette étape peut être facultative si vous avez migré un site déjà existant et donc déjà personnalisé ! Cependant, dans le cas où vous venez d'installer un nouveau site internet par le biais de nos modules par exemple, vous pouvez le personnaliser en modifiant le thème et en y publiant vos premiers contenus.

Si vous désirez obtenir de l’aide concernant les fonctionnalités de votre site, nous vous invitons à vous rapprocher du site de l’éditeur de ce dernier où vous trouverez de la documentation pour vous accompagner.


### Étape 6 : utiliser vos adresses e-mail

Il ne reste plus qu'à utiliser vos adresses e-mail. Pour cela, OVHcloud met à disposition un applicatif en ligne (webmail) : RoundCube. Ce dernier est accessible à l'adresse <https://www.ovh.com/ca/fr/mail/> où vous devrez y renseigner les identifiants relatifs à votre adresse e-mail créée chez OVHcloud.

Si vous désirez obtenir plus de détails sur l'utilisation de RoundCube, consultez notre guide : [Utilisation de RoundCube](../../emails/utilisation-roundcube/){.external}. Si vous souhaitez configurer votre adresse e-mail sur un logiciel de messagerie ou un appareil (comme un smartphone ou une tablette), consultez nos documentations depuis ce portail : <https://docs.ovh.com/ca/fr/emails/>.


## Aller plus loin

[Migrer mon site chez OVHcloud](../migrer-mon-site-chez-ovh/){.external}

[Mettre mon site en ligne](../mettre-mon-site-en-ligne/){.external}

[Installer son site avec les modules en 1 clic](../modules-en-1-clic/){.external}

[Comment créer une adresse e-mail](../../emails/generalites-sur-les-emails-mutualises/#etape-2-creer-vos-adresses-e-mail_1){.external}

[Utilisation de RoundCube](../../emails/utilisation-roundcube/){.external}

[Les certificats SSL sur les hébergements web](../les-certificats-ssl-sur-les-hebergements-web/){.external}


Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.
