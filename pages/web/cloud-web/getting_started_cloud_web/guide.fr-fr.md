---
title: Premiers pas avec un hébergement Cloud Web
slug: premiers-pas-avec-cloud-web
excerpt: Découvrez comment bien débuter avec un hébergement Cloud Web
section: Premiers pas
---

**Dernière mise à jour le 04/05/2022**

## Objectif

Notre offre d’hébergement Cloud Web allie nos vingt ans d’expérience dans l’hébergement web et la puissance de notre Public Cloud. Comme sur nos hébergements web classiques, vos sites internet sont hébergés sur un service managé 24 h/24 et 7 j/7, tout en vous offrant bien plus de fonctionnalités, comme les performances de nos disques SSD.

**Découvrez comment débuter avec un hébergement Cloud Web.**


## Prérequis

- Disposer d'une offre d'hébergement [Cloud Web](https://www.ovhcloud.com/fr/web-hosting/cloud-web-offer/).
- Avoir reçu l’e-mail vous confirmant l’installation de votre hébergement Cloud Web.
- Disposer d’un [nom de domaine](https://www.ovhcloud.com/fr/domains/) qui sera l’adresse à laquelle votre site sera accessible.
- Être connecté à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr).


## En pratique

### Étape 1 : définir votre projet

L'hébergement Cloud Web offre davantage de possibilités de configuration qu'un hébergement web classique. Avant de débuter votre projet, nous vous conseillons de :

- **Définir ce que vous souhaitez mettre en place sur votre hébergement** : créer un blog ou une boutique en ligne ? Partager une passion ou promouvoir votre activité professionnelle sur Internet ?

- **Identifier les prérequis techniques pour l'installation** : il est possible que le projet que vous souhaitez mettre en place nécessite des prérequis techniques spécifiques.

- **S'assurer de la compatibilité technique de votre projet avec l'hébergement Cloud Web** : besoin d'un moteur d'exécution ou d'un service SQL en particulier ? Si ce n'est pas encore fait, assurez-vous que celui-ci est disponible avec votre hébergement [Cloud Web](https://www.ovhcloud.com/fr/web-hosting/cloud-web-offer/).

Après avoir évalué les différentes possibilités et délimité avec précision votre projet, vous pouvez à présent mettre en place votre projet.

### Étape 2 : choisir le moteur d'exécution

L'offre Cloud Web met à votre disposition de multiples langages de développement pour construire votre projet. Si vous souhaitez utiliser un autre langage que PHP, qui est le choix par défaut, vous devrez sélectionner un « moteur d’exécution » correspondant à votre langage.

Les langages actuellement disponibles sont :

- PHP
- Node.js
- Python
- Ruby

Pour accéder aux moteurs d'exécution de votre hébergement Cloud Web, connectez-vous à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr){.external}, cliquez sur `Hébergements`{.action} dans la barre de services à gauche, puis choisissez le nom de l'hébergement Cloud Web concerné. Positionnez-vous enfin sur l'onglet `Moteurs d'exécution`{.action}.

Un moteur est automatiquement créé lors de l'installation de votre hébergement. Il est renseigné comme `Choix par défaut` dans le tableau qui s'affiche. Pour modifier un moteur déjà paramétré, cliquez sur le bouton `...`{.action} à droite, puis sur `Modifier`{.action}. 

Vous pouvez également ajouter des moteurs d'exécution supplémentaires selon votre offre [Cloud Web](https://www.ovhcloud.com/fr/web-hosting/cloud-web-offer/) en cliquant sur le bouton `Actions`{.action}, puis sur `Ajouter un moteur d'exécution`{.action}. Notez que le nombre maximum de moteurs d’exécution est dépendant de l’offre Cloud Web que vous avez commandée.

Dès lors, assurez-vous de disposer du ou des moteurs d'exécution nécessaires à votre projet avant de poursuivre.

![cloudweb](images/cloud-web-first-steps-step1.png){.thumbnail}

### Étape 3 : créer des variables d'environnement (facultatif)

Lorsque vous souhaitez déployer plusieurs fois votre projet dans des environnements différents (par exemple : développement, test ou production), vous devez fournir des variables afin que votre code réagisse en conséquence. Pour cela, Cloud Web propose la définition de variables d’environnement accessibles par le code de votre site ou de votre application web.

Par exemple, cela permet de ne pas définir de fichier « .env » dans le framework, comme sur PHP Laravel : <https://laravel.com/docs/master/configuration>.

Pour ajouter une variable d'environnement, cliquez sur l'onglet `Variables d'environnement`{.action}. Un tableau affiche les variables d'environnement créées sur votre offre. Pour en ajouter une nouvelle, cliquez sur le bouton `Actions`{.action}, puis sur `Ajouter une variable d'environnement`{.action}. Suivez alors les indications en fonction de la variable que vous souhaitez créer.

![cloudweb](images/cloud-web-first-steps-step2.png){.thumbnail}

Si vous n’utilisez pas de framework de développement intégrant les variables d’environnement ou si vous souhaitez simplement vérifier le bon fonctionnement de vos variables, vous pouvez créer un script qui effectuera cette vérification. Vous trouverez, ci-dessous, deux exemples pouvant vous aider dans votre démarche, mais ils ne se substituent pas à l’aide d’un webmaster.

- **Pour PHP** :

```php
<?php echo "ENV: " . $_ENV['DB_DATABASE']; ?>
```

- **Pour Node.js** :

```sh
var http = require('http');

http.createServer(function(request, response) {  
    response.writeHeader(200, {"Content-Type": "text/html"});  

    response.write( process.env.DB_DATABASE);

    response.end();  
}).listen(80);
```

Prenez soin de remplacer l'information générique présente dans ces scripts « DB_DATABASE » par la variable d'environnement concernée.

### Étape 4 : configurer des domaines additionnels en tant que Multisite (facultatif)

Maintenant que l'environnement technique de votre hébergement Cloud Web est prêt, vous pouvez configurer des noms de domaine additionnels à celui-ci en tant que Multisite. Ceci vous permet de partager votre espace afin d'y héberger plusieurs sites internet par exemple. Si cela correspond à votre projet, toujours positionné sur l'hébergement Cloud Web concerné, cliquez sur l'onglet `Multisite`{.action}.

Le tableau qui s’affiche contient les noms de domaine ajoutés à votre hébergement. Certains d’entre eux ont été créés automatiquement lors de l’installation de votre hébergement. Pour en ajouter un nouveau, cliquez sur le bouton `Ajouter un domaine ou sous-domaine`{.action} et suivez les indications qui apparaissent. La manipulation peut être différente si le nom de domaine concerné est enregistré chez OVHcloud ou non. 

Nous vous invitons à être vigilant lors de la complétion des informations suivantes :

- **dossier racine** : il s'agit du répertoire où le nom de domaine renseigné devra être hébergé sur l'espace de stockage de votre hébergement Cloud Web ; 

- **Moteur d'exécution** : il s'agit du moteur d'exécution, préalablement paramétré, qui sera utilisé par le Multisite que vous êtes en train de configurer.

> [!warning]
>
> Si vous avez ajouté un nom de domaine considéré comme externe, vous devrez paramétrer un champ TXT appelé **ovhcontrol** à sa configuration DNS. Il permet à OVHcloud de s'assurer que l'ajout est légitime. Il s'avère donc indispensable et s'il n’est pas réalisé, l’ajout sera annulé. 
>

Répétez cette manipulation si vous souhaitez ajouter plusieurs noms de domaine à votre hébergement Cloud Web. Pour obtenir plus d'informations sur l'ajout d'un nom de domaine en tant que Multisite, consultez notre documentation : [« Partager son hébergement entre plusieurs sites »](https://docs.ovh.com/fr/hosting/multisites-configurer-un-multisite-sur-mon-hebergement-web/){.external}.

![cloudweb](images/cloud-web-first-steps-step3.png){.thumbnail}

### Étape 5 : installer votre projet sur l'hébergement Cloud Web

Deux démarches sont possibles pour réaliser l'installation de votre projet. Répétez les éléments de la démarche la plus adéquate si vous souhaitez en mettre en ligne plusieurs.

#### 1. Utiliser nos modules en 1 clic

Cette solution vous permet de bénéficier d’une structure de site prête à l’emploi à personnaliser (thème, textes, etc.). OVHcloud en propose quatre avec ses modules en 1 clic à découvrir sur la page [« Créer un site internet avec les modules en 1 clic »](https://www.ovhcloud.com/fr/web-hosting/uc-website/){.external}.

Si votre choix se porte sur l'utilisation de nos modules en 1 clic, toujours positionné sur l'hébergement Cloud Web concerné, cliquez sur l'onglet `Modules en 1 clic`{.action}, puis sur `Ajouter un module`{.action}. Vous pourrez alors initier une installation en mode « simple » (non personnalisable) ou en mode « avancé » (possibilité de personnaliser certains éléments).

Si vous désirez obtenir plus d'informations sur les modules en 1 clic OVHcloud, consultez notre documentation : [« Installer son site avec les modules en 1 clic »](https://docs.ovh.com/fr/hosting/modules-en-1-clic/){.external}.

> [!primary]
>
> Pour utiliser ces derniers, vous devez impérativement utiliser le moteur d'exécution PHP.
>

![cloudweb](images/cloud-web-first-steps-step4.png){.thumbnail}

#### 2. Installer manuellement votre projet

Qu'il s'agisse d'un nouveau site internet ou de la migration d'un site déjà existant, l'installation manuelle peut se révéler plus technique et devra être effectuée en fonction de vos propres connaissances. Pour cela, nous vous recommandons de faire appel à un [prestataire spécialisé](https://partner.ovhcloud.com/fr/) et/ou de contacter l’éditeur du service si vous éprouvez des difficultés. 

Si votre choix se porte sur l'installation manuelle, vous devrez être en possession de l'ensemble des fichiers du site internet ou de l'application que vous souhaitez installer ainsi que, si cela est requis pour son bon fonctionnement, des identifiants d'une base de données préalablement créée sur votre hébergement Cloud Web. Dans le cadre de la migration d'un site internet, munissez-vous de la copie complète de ce dernier.

Il n'existe pas de marche à suivre universelle tant les projets peuvent être différents les uns des autres, mais nos documentations [« Mettre mon site en ligne »](https://docs.ovh.com/fr/hosting/mettre-mon-site-en-ligne/){.external} et [« Migrer mon site chez OVHcloud »](https://docs.ovh.com/fr/hosting/migrer-mon-site-chez-ovh/){.external} peuvent vous aider concernant les manipulations à réaliser.

### Étape 6 : modifier la configuration du nom de domaine

À cette étape, votre projet doit être installé sur votre hébergement Cloud Web et vos adresses e-mail créées. Si ceux-ci ne sont pas encore fonctionnels, il se peut que la configuration de votre nom de domaine ne soit pas correcte. Si tel est le cas, ou si vous n’êtes pas sûr de vous, nous vous recommandons de poursuivre l’étape actuelle.

Notez toutefois que si vous êtes en train de migrer vos services chez OVHcloud, les manipulations liées aux DNS peuvent occasionner une indisponibilité de vos services si elles ne sont pas effectuées au bon moment. En accord avec les différentes étapes décrites dans notre documentation [« Migrer mon site chez OVHcloud »](https://docs.ovh.com/fr/hosting/migrer-mon-site-chez-ovh/){.external}, vous devrez modifier les serveurs DNS de votre domaine en fin de processus.

#### 1. Connaître les enregistrements DNS OVHcloud 

Il existe plusieurs enregistrements DNS inhérents à OVHcloud. Nous allons nous intéresser à deux d'entre eux en particulier qui permettent de garantir l’accessibilité de votre site internet et la réception des messages sur vos adresses e-mail OVHcloud. Suivez les indications ci-dessous pour savoir où les récupérer :

|Enregistrement DNS|Service associé|Où le récupérer ?|
|---|---|---|
|A|Pour le site internet|Dans votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr){.external}, positionné dans la section `Hébergements`{.action} sur l'hébergement Cloud Web concerné. Récupérez l'adresse IP qui apparaît à côté de « IPv4 » depuis l'onglet `Informations générales`{.action}.|
|MX|Pour les e-mails|Dans votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr){.external}, positionné dans la section `Emails`{.action} sur le nom de domaine concerné. Récupérez les informations qui apparaissent à côté de « Champs MX » depuis l'onglet `Informations générales`{.action}.|

#### 2. Vérifier et/ou modifier les enregistrement DNS

Maintenant que vous connaissez les enregistrements DNS inhérents à votre hébergement Cloud Web et votre offre e-mail OVHcloud, vous devez vérifier si ces derniers sont bien configurés et les modifier si nécessaire. Ces deux manipulations doivent impérativement s'effectuer chez le prestataire gérant la configuration DNS (la zone DNS) de votre nom de domaine.

> [!warning]
>
> - Si votre nom de domaine n'utilise pas la configuration DNS OVHcloud, vous devez réaliser la modification depuis l'interface du prestataire gérant cette dernière.
> 
> - Si votre nom de domaine est enregistré chez OVHcloud, vous pouvez vérifier si ce dernier utilise notre configuration DNS. Pour cela, rendez-vous dans votre [espace client](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr){.external}, onglet `Serveurs DNS`{.action} une fois positionné sur le nom de domaine concerné.
>

Reportez-vous aux indications ci-dessous pour savoir où effectuer les manipulations :

|Configuration DNS utilisée|Où réaliser les manipulations ?|
|---|---|
|OVHcloud|Dans votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr){.external}, positionné dans la section `Noms de domaine`{.action} sur le nom de domaine concerné. Depuis l'onglet `Zone DNS`{.action}, vérifiez et modifiez les informations nécessaires. Vous pouvez vous aider de notre documentation [« Éditer une zone DNS OVHcloud »](https://docs.ovh.com/fr/domains/editer-ma-zone-dns/){.external} si nécessaire.|
|Autre|Depuis l'interface du prestataire gérant la configuration DNS de votre nom de domaine. Nous vous invitons à prendre contact avec ce dernier si vous éprouvez des difficultés pour réaliser les manipulations.|

Une fois la configuration DNS de votre nom de domaine modifiée, un temps de propagation de 24 heures maximum est nécessaire afin que les modifications soient effectives. Si vous avez ajouté plusieurs noms de domaine à votre hébergement Cloud Web en tant que Multisite, vous devrez réaliser ces deux manipulations pour chacun d'entre eux. 

### Étape 7 : personnaliser votre site

Cette étape peut être facultative si vous avez migré un site déjà existant et personnalisé ! Cependant, dans le cas où vous venez d'installer un nouveau site internet via nos modules par exemple, vous pouvez le personnaliser en modifiant le thème et en y publiant vos premiers contenus.

Si vous désirez obtenir de l’aide concernant les fonctionnalités de votre site, nous vous invitons à vous rapprocher du site de l’éditeur de ce dernier où vous trouverez de la documentation pour vous accompagner.

### Étape 8 : utiliser vos adresses e-mail

Il ne reste plus qu'à utiliser vos adresses e-mail. Pour cela, OVHcloud met à votre disposition un applicatif en ligne (webmail) : Roundcube. Ce dernier est accessible à l'adresse <https://www.ovh.com/fr/mail/> où vous devrez y renseigner les identifiants relatifs à votre adresse e-mail créée chez OVHcloud.

Si vous désirez obtenir plus de détails sur l'utilisation de Roundcube, consultez notre guide : [« Utilisation de Roundcube » ](https://docs.ovh.com/fr/emails/utilisation-roundcube/){.external}. Si vous souhaitez configurer votre adresse e-mail sur un logiciel de messagerie ou un appareil (comme un smartphone ou une tablette), consultez nos documentations depuis ce portail : <https://docs.ovh.com/fr/emails/>.

## Aller plus loin

[Migrer mon site chez OVHcloud](https://docs.ovh.com/fr/hosting/migrer-mon-site-chez-ovh/){.external}

[Mettre mon site en ligne](https://docs.ovh.com/fr/hosting/mettre-mon-site-en-ligne/){.external}

[Installer son site avec les modules en 1 clic](https://docs.ovh.com/fr/hosting/modules-en-1-clic/){.external}

[Partager son hébergement entre plusieurs sites](https://docs.ovh.com/fr/hosting/multisites-configurer-un-multisite-sur-mon-hebergement-web/){.external}

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>