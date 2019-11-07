---
title: 'Envoyer des SMS avec l’API OVHcloud en PHP'
slug: envoyer_des_sms_avec_lapi_ovh_en_php
excerpt: 'Comment envoyer des SMS avec l’API OVHcloud RESTful en PHP'
legacy_guide_number: g1639
section: 'Envoyer des SMS'
---

**Dernière mise à jour le 04/11/2019**

## Objectif

Les SMS sont largement utilisés pour diffuser des informations pratiques, suivre l'état d'une commande ou d'un processus transactionnel, être alerté d'un évènement inhabituel ou encore rappeler des rendez-vous. Ce guide détaille la méthode d'envoi d'un premier SMS avec l'API OVHcloud RESTful en PHP. 

**Apprenez comment envoyer des SMS avec l'API RESTful en PHP**

## Prérequis

- Disposer d’un environnement de développement PHP
- Disposer d'un compte SMS OVHcloud avec des crédits SMS

## En pratique

### Étape 1 : Récupération du Wrapper PHP for OVH APIs

Rendez vous sur le projet [https://github.com/ovh/php-ovh](https://github.com/ovh/php-ovh)

Vous allez pouvoir intégrer le wrapper PHP rapidement grâce à composer : [https://getcomposer.org/](https://getcomposer.org/)

Suivez les instructions sur GitHub, créez le fichier composer.json comme indiqué dans le projet :
GitHub> Readme > Quickstart

Vous allez récupérer dans votre projet le répertoire ./vendor/ovh/ovh/  ainsi que le fichier autoload.php permettant de gérer toutes les dépendances et les imports.

![votre projet avec Composer](images/img_2450.jpg){.thumbnail}


### Étape 2 : Création des identifiants

Des identifiants sont nécessaires pour consommer l’API SMS. Ces identifiants sont créés une fois pour identifier l’application qui va envoyer des SMS. La durée de vie de ces identifiants est paramétrable.

Créez vos identifiants de Script (all keys at once) sur cette page :
[https://api.ovh.com/createToken](https://eu.api.ovh.com/createToken/index.cgi?GET=/sms&GET=/sms/*/jobs/&POST=/sms/*/jobs/) (cette url vous permet d'avoir automatiquement les bons droits pour pour les étapes décrites dans ce guide).


![création des tokens](images/img_2451.jpg){.thumbnail}

Dans cet exemple simple, nous récupérons les droits pour avoir accès aux informations sur le compte, à la possibilité de voir les envois en attente et à la possibilité d’envoyer des SMS.


- GET /sms
- GET /sms/*/jobs/
- POST /sms/*/jobs/


L’étoile (*) active les appels à ces méthodes pour tous vos comptes SMS, vous pouvez également restreindre les appels à un seul compte si vous gérez plusieurs comptes SMS sur votre compte OVH en remplaçant '/sms' par '/sms/NOM-DU-COMPTE' et '/sms/*' par '/sms/NOM-DU-COMPTE/*'

Vous récupérez vos identifiants pour votre script :

- Application Key (identifie votre application)
- Application Secret (authentifie votre application)
- Consumer Key (autorise l'application à accéder aux méthodes choisies)



![récupération des tokens](images/img_2452.jpg){.thumbnail}

L'environnement est prêt, les identifiants sont créés, vous êtes prêt pour coder votre script PHP.


### Étape 3 : Mise en place d'un SDK PHP

Pour plus de simplicité nous avons mis en place un SDK PHP que vous pouvez retrouver [ici](https://github.com/ovh/php-ovh-sms).


### Étape 4 : Connexion basique à l'API

Vous pouvez maintenant tester la bonne connexion à l’API en affichant les détails de chaque compte SMS:

```
<?php
/**
 * Liste et affiche le détail de chaque compte SMS
 * 
 * Rendez-vous sur https://eu.api.ovh.com/createToken/index.cgi?GET=/sms&GET=/sms/*/jobs/&POST=/sms/*/jobs/
 * pour générer les clés d'accès API pour:
 *
 * GET /sms
 * GET /sms/*/jobs/
 * POST /sms/*/jobs/
 */

require __DIR__ . '/vendor/autoload.php';
use \Ovh\Api;

$endpoint = 'ovh-eu';
$applicationKey = "your_app_key";
$applicationSecret = "your_app_secret";
$consumer_key = "your_consumer_key";

$conn = new Api(    $applicationKey,
                    $applicationSecret,
                    $endpoint,
                    $consumer_key);
     
$smsServices = $conn->get('/sms/');
foreach ($smsServices as $smsService) {

    print_r($smsService);
}

?>
```


Vous devriez récupérer au lancement de ce script la liste de vos comptes SMS.


### Étape 5 : Envoi du premier SMS

Pour envoyer des SMS, utilisez la méthode POST jobs : [https://api.ovh.com/console/#/sms/{serviceName}/jobs#POST](https://api.ovh.com/console/#/sms/{serviceName}/jobs#POST)

> [!primary]
>
> **Uniquement pour les comptes OVHcloud en France :**
> 
> Le paramètre senderForResponse va permettre d’utiliser un numéro court, ce qui vous permet d’envoyer directement des SMS sans devoir créer un expéditeur alphanumérique (par exemple: votre nom).
> 
> Les numéros courts permettent aussi de recevoir des réponses de la part des destinataires de votre SMS, ce qui peut être utile pour une enquête de satisfaction, une application de vote, un jeu...
>
>



```
<?php
/**
 * Envoie un SMS puis affiche la liste des SMS en attente d’envoi.
 * 
 * Rendez-vous sur https://eu.api.ovh.com/createToken/index.cgi?GET=/sms&GET=/sms/*/jobs/&POST=/sms/*/jobs/
 * pour générer les clés d'accès API pour:
 *
 * GET /sms
 * GET /sms/*/jobs/
 * POST /sms/*/jobs/
 */

require __DIR__ . '/vendor/autoload.php';
use \Ovh\Api;

$endpoint = 'ovh-eu';
$applicationKey = "your_app_key";
$applicationSecret = "your_app_secret";
$consumer_key = "your_consumer_key";

$conn = new Api(    $applicationKey,
                    $applicationSecret,
                    $endpoint,
                    $consumer_key);
     
$smsServices = $conn->get('/sms/');
foreach ($smsServices as $smsService) {

    print_r($smsService);
}

$content = (object) array(
	"charset"=> "UTF-8",
	"class"=> "phoneDisplay",
	"coding"=> "7bit",
	"message"=> "Bonjour les SMS OVH par api.ovh.com",
	"noStopClause"=> false,
	"priority"=> "high",
	"receivers"=> [ "+3360000000" ],
	"senderForResponse"=> true,
	"validityPeriod"=> 2880
);
$resultPostJob = $conn->post('/sms/'. $smsServices[0] . '/jobs/', $content);

print_r($resultPostJob);

$smsJobs = $conn->get('/sms/'. $smsServices[0] . '/jobs/');
print_r($smsJobs);
        
?>
```


Voici le type de réponse attendue :

```
sms-XXXXXX-1
Array
(
    [totalCreditsRemoved] => 1
    [invalidReceivers] => Array
        (
        )

    [ids] => Array
        (
            [0] => 26929925
        )

    [validReceivers] => Array
        (
            [0] => +3360000000
        )

)
Array
(
)
```


Vous récupérez bien le compte SMS (ServiceName). Vous obtenez une réponse avec 1 crédit consommé pour un numéro valide. Enfin, vous constatez qu'il n’y pas de SMS en attente d’envoi.


## Aller plus loin

La console d'API ([https://api.ovh.com/console/#/sms](https://api.ovh.com/console/#/sms)) vous permettra de découvrir d'autres méthodes pour faciliter l'intégration de services SMS tels que : SMS permettant la réponse (uniquement pour les comptes OVHcloud en France), envoi en masse avec fichier CSV, publipostage, suivi des accusés de réception...


Échangez avec notre communauté d'utilisateurs sur [https://community.ovh.com](https://community.ovh.com).

