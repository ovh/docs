---
title: Les tâches automatisées (CRON) sur votre hébergement
slug: mutualise-taches-automatisees-cron
legacy_guide_number: 1990
excerpt: Retrouvez ici les actions possibles avec l'option des taches automatisees
section: Tâches automatisées (CRON)
---

Dans Linux, il existe un système permettant de traiter automatiquement des tâches après les avoir planifiées, en déterminant la fréquence d'exécution et la date et l'heure de lancement de la tâche. Ce genre de routine est très souvent utilisé pour des tâches d'administration système permettant de garder votre système à jour. Par exemple, effectuer des copies de sauvegarde périodiques, surveiller le système, exécuter des scripts personnalisés, etc.


## Gérer mes tâches CRON

### Créer une tâche automatisée

Sélectionnez votre hébergement dans la colonne de gauche (1), cliquez ensuite sur l'onglet "Plus +" et enfin sur "Tâches planifiées - Cron" (2) puis sur "Ajouter une planification" (3).


![hosting](images/3261.png){.thumbnail}

Pour cette première étape, vous devez indiquer le chemin vers votre script et le type de langage de programmation. Les deux autres cases sont facultatives. Le logs par e-mail vous permettra de recevoir le logs d'exécution de votre tâche Cron sur une adresse e-mail prédéfinie ou de votre choix.

- Cet e-mail vous sera envoyé uniquement en cas d'erreur.

Et enfin, vous avez la possibilité de mettre un descriptif de votre tâche Cron.


![hosting](images/3262.png){.thumbnail}

La deuxième étape concerne la périodicité d'exécution de votre tâche Cron.


![hosting](images/3264.png){.thumbnail}

Deux modes sont à votre disposition : le mode simple et le mode expert.


![hosting](images/3265.png){.thumbnail}

Une fois le paramétrage de votre tâche Cron terminé, une fenêtre récapitulative apparaît.

- Si les informations sont exactes, validez la création de votre tâche automatisée.


![hosting](images/3266.png){.thumbnail}

Ce message apparaîtra pour vous indiquer que votre demande est bien prise en compte.


![hosting](images/3267.png){.thumbnail}


### Modification d'une tâche automatisée

Sélectionnez votre hébergement dans la colonne de gauche (1), cliquez ensuite sur l'onglet "Plus +" et enfin sur "Tâches planifiées - Cron" (2). Cliquez sur le stylo (3) correspondant à la tâche automatisée que vous souhaitez modifier.


![hosting](images/3268.png){.thumbnail}

Vous pouvez à cette étape modifier le chemin ou le langage de programmation, activer les logs par e-mail et ajouter un descriptif à votre tâche Cron.


![hosting](images/3269.png){.thumbnail}


### Supprimer une tâche automatisée

Sélectionnez votre hébergement dans la colonne de gauche (1), cliquez ensuite sur l'onglet "Plus +" et enfin sur "Tâches planifiées - Cron" (2). Cliquez sur la corbeille (3) correspondant à la tâche automatisée que vous souhaitez supprimer.


![hosting](images/3270.png){.thumbnail}

Un récapitulatif de la tâche automatisée que vous souhaitez supprimer apparaît. Validez votre choix si tout est correct.


![hosting](images/3271.png){.thumbnail}


## Diagnostiquer une erreur sur ma tâche automatisée

### Tester l'exécution de votre tâche automatisée via un navigateur internet

Vous pouvez tester votre script directement depuis votre navigateur internet afin de voir si celui-ci occasionne une erreur. Par exemple, si votre Cron est dans le répertoire www/cron.php et que votre nom de domaine est test.com, vous devrez taper l'URL [http://test.com/cron.php](http://test.com/cron.php){.external}.


> [!success]
>
> Afin que le test soit optimum, il est préférable que la version de PHP de
> votre hébergement soit la même que celle que vous avez indiquée lors de la
> création de votre tâche automatisée.
> 

Si vous avez la présence d'une erreur, il sera nécessaire de corriger votre script. Si aucune erreur n'a été détectée, nous vous conseillons de regarder dans les logs liés à l'exécution de vos Crons.


### Regarder les logs dexecution de votre tâche automatisée

Sélectionnez votre hébergement dans la colonne de gauche, cliquez sur l'onglet `Plus +`{.action} :

![hosting](images/4012.png){.thumbnail}

Cliquez ensuite sur le lien `Logs`{.action} :

![hosting](images/4013.png){.thumbnail}

Si votre tâche automatisée a été exécutée dans le courant de la journée, vous pouvez regarder les logs d'exécution dans le OVH Speed Log (1).

-> Dans le cas où votre exécution date de plus de 24h, sélectionnez le fichier de logs du mois que vous souhaitez consulter (ici pour le mois de juin).


![hosting](images/3274.png){.thumbnail}

*Exemple de logs d'exécution d'une tâche automatisée :*


```bash
[2015-06-04 10:39:03] ## OVH ## START - 2015-06-04 10:39:03.700912 executing: /usr/local/php5.6/bin/php /homez.600/loginftp/www/cron.php
[2015-06-04 10:39:03] Could not open input file: /homez.600/loginftp/www/cron.php
[2015-06-04 10:39:03]
[2015-06-04 10:39:03] ## OVH ## END - 2015-06-04 10:39:03.762685 exitcode: 1
```

Dans ce cas, la ligne de log suivante indique que ma tâche automatisée n'a pas été exécutée correctement car le chemin d'accès jusqu'au script est erroné ou inexistant :


```bash
Could not open input file: /homez.600/loginftp/www/cron.php
```


## Informations utiles

### Limitations
- En hébergement mutualisé, il n'est pas possible de configurer les minutes à laquelle la tâche automatisée doit s'exécuter. De plus, celle-ci ne peut être exécutée qu'une fois par heure.
- La limitation du temps d'exécution est fixée à 60 minutes
- Les logs que la tâche planifiée va gérer ne dépasseront pas les 5Mo (stdout + stderr).


### Tâches automatisées avec variables
Il n'est pas possible de mettre en place des chemins de tâche automatisée avec des passages de variables.

*Exemple :*


```bash
/www/cron.php?variable=test
```



> [!primary]
>
> Vous pouvez par contre définir ces variables dans votre script ou créer
> un fichier cron1.php par exemple qui exécute cron.php?variable=test
> 


### Utilisation de chemins absolus

Pour que votre tâche CRON fonctionne, vous devez utiliser dans votre script des chemins absolus et non relatifs.


Pour obtenir l'adresse du chemin courant, vous pouvez utiliser la constante `__DIR__` (avec des doubles underscore avant et après DIR) : [Documentation PHP](http://php.net/manual/fr/language.constants.predefined.php){.external}.

Par exemple :

Si vous avez :

```
include("../accesGen.php");
```

Il faudra mettre en fait :

```
include(__DIR__ . "/../accesGen.php");
```

Si vous avez :

```
$fich_a_ecrire = 'anniversaires.txt';
```

Il faudra mettre en fait :

```
$fich_a_ecrire = __DIR__ . '/anniversaires.txt';
```


### Rapport d'exécution

Un seul e-mail de rapport d'exécution de votre tâche Cron est envoyé par jour.


### Appel d'un autre script

Si votre script utilisé par votre tâche CRON fait appel à d'autres scripts, vous devez utiliser un chemin absolu et non relatif pour que cela fonctionne. Le chemin absolu de votre hébergement commence par :


```bash
/home/loginFTP/
```


### En cas d'erreur d'exécution

Si votre tâche planifiée (Cron) est en erreur, celle-ci sera désactivée au bout de 10 tentatives d'exécution.


### Exemple de logs

Exécution correcte du script :

```bash
# OVH ## START - 2014-12-23 15:34:12.680711 executing: /homez.600/loginftp/test/run.sh
I am the client and I'm printing stuff with this nice 'echo' feature.

# OVH ## END - 2014-12-23 15:34:13.056472 exitcode: 0
```

Exécution en erreur du script car le fichier appelé n'a pas été trouvé :


```bash
# OVH ## START - 2014-12-23 15:36:16.206693 executing: /homez.600/loginftp/test/idontexist.sh
# OVH ## ERROR command '/homez.600/loginftp/test/idontexist.sh' not found

# OVH ## END - 2014-12-23 15:36:16.546574 exitcode: 255
```

Exécution en erreur du script suite à un timeout :


```bash
# OVH ## START - 2014-12-23 16:05:52.233058 executing: /homez.600/loginftp/test/sleep.sh
mardi 23 décembre 2014, 16:05:52 (UTC+0100)
Now sleeping 9000 sec

# OVH ## ERROR - CRON TASK INTERRUPTED BY OVH - reason: your script duration exceeded the maximum permitted (3600 seconds)
# OVH ## END - 2014-12-23 17:05:54.690413 exitcode: 0
```

Exécution en erreur du script suite à un dépassement de génération de données :


```bash
# OVH ## START - 2014-12-23 15:43:27.606083 executing: /homez.600/loginftp/test/echoer.sh
[...a lot of logs here...]
# OVH ## ERROR - CRON TASK INTERRUPTED BY OVH - reason: cron output (9288634 bytes) exceeds maximum permitted (5242880 bytes)
# OVH ## END - 2014-12-23 15:43:50.999934 exitcode: 255
```

Exécution en erreur du script suite à une erreur provenant de mauvais droits (chmod) ou d'une mauvaise configuration sur le fichier .ovhconfig :


```bash
[2015-01-08 18:07:10]
[2015-01-08 18:07:10] ## OVH ## Your job could not be initiated for an unknown reason. Please contact customer support for more information.
[2015-01-08 18:07:10] ## OVH ## END - 2015-01-08 18:07:10.969840 exitcode: 255
```

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.
