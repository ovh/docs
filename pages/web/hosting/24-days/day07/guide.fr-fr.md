---
title: 'Déploiement avancé avec SSH, Git et Composer'
slug: day07
excerpt: 'Déployer une application PHP moderne'
section: "Cas d'usage"
hidden: true
---

> [!warning]
>
> Ce tutoriel vous présente l’utilisation d’une ou de plusieurs solutions OVH avec des outils externes et vous décrit des manipulations réalisées dans un contexte précis. Pensez à les adapter en fonction de votre situation !
>
> Si vous rencontrez des difficultés lors de ces manipulations, nous vous invitons à faire appel à un prestataire spécialisé et/ou à poser vos questions à notre communauté sur <https://community.ovh.com/>. OVH ne sera pas en mesure de vous fournir une assistance.
>

Depuis quelques années, l'écosystème PHP s'est fortement professionnalisé. Les pratiques de développement se sont modifiées pour devenir plus efficace, et l'apparition de frameworks PHP tels que Zend Framework, Symfony ou encore Laravel, ont révolutionné le développement d'applications web.


 mypersonaldomain.ovh est une application complexe et ses développeurs ont sélectionné des outils modernes en PHP pour le développer : ils utilisent le framework **Laravel** qui leur permet de se concentrer sur les fonctionnalités de rondcoin plutôt  que de réinventer des algorithmes standards. Pour cela, ils utilisent l'outil **Composer** qui leur permet d'intégrer des librairies en PHP (des algorithmes standards distribués par d'autres développeurs). Enfin, ils utilisent **GIT** pour collaborer autour de leur code.

Les hébergements web d'OVH permettent d'utiliser ces mécanismes grâce à l'accès **SSH**. Cet accès permet d'exécuter des lignes de commandes depuis les serveurs d'OVH et de faciliter la mise en production du site de petites annonces.

Les développeurs peuvent ainsi facilement imaginer l'automatisation des mises en production après avoir lancé des tests permettant de valider le bon fonctionnement du code. C'est ce que l'on nomme l'intégration continue.


## Laravel ?
Laravel est un framework PHP assez récent qui permet de créer rapidement une application web comme mypersonaldomain.ovh. Dans notre cas, il s'agit d'une application comprenant un système d'authentification, de gestion des utilisateurs et de gestion des petites annonces. Si vous souhaitez créer une application web, vous pouvez découvrir le potentiel de Laravel dans leur documentation officielle : [https://laravel.com/docs/](https://laravel.com/docs/){.external}

L'équipe de mypersonaldomain.ovh a réalisé le code source de l'application et est prête à le déployer en production. D'ailleurs, si vous avez la curiosité de voir comment le site mypersonaldomain.ovh fonctionne ou que vous souhaitez tester son déploiement, vous pouvez trouver le code sur le github de OVH : [https://github.com/ovh/summit2016-webhosting-example-rondcoin](https://github.com/ovh/summit2016-webhosting-example-rondcoin){.external}


### Mise en place de lenvironnement de deploiement

## Connexion en SSH au serveur
Les offres **Pro** et **Performance** incluent un accès SSH aux serveurs des hébergements web. Cela permet de manipuler les fichiers de son site, mais aussi d'utiliser les outils modernes des applications PHP. Git, PHP en ligne de commande, et de nombreux autres outils, sont installés sur les serveurs.

Les accès SSH sont fournis au sein de l'email que vous avez reçu lors de la création de votre hébergement. Vous pouvez aussi créer des utilisateurs distincts avec des accès restreints au sein de l'un des dossiers de votre hébergement. Pour en savoir plus, [lisez le guide autour de SSH](https://docs.ovh.com/fr/hosting/mutualise-le-ssh-sur-les-hebergements-mutualises/).


## Arborescence de l'hebergement web
Nous allons utiliser plusieurs répertoires afin de stocker les informations du site. **$HOME** est une variable contenant le dossier racine de votre hébergement web.

- **$HOME/bin**, Ce répertoire, lorsqu'il existe, est ajouté au **$PATH**. C'est-à-dire que les programmes ou les scripts contenus dans ce répertoire peuvent être utilisés directement en ligne de commande. Nous l'utiliserons pour **Composer**.
- **$HOME/depot_git**, Ce dossier sera utilisé par **GIT**, comme dépôt distant. Il permettra d'envoyer directement les modifications de votre code depuis votre ordinateur ou machine, chargé de l'intégration continue.
- **$HOME/www**, L'application sera déployée dans ce dossier par GIT lors des modifications reçues sur le dépôt distant


## Prise en charge du fichier de la configuration PHP
La configuration de votre hébergement est définie par un fichier **.ovhconfig** se trouvant à la racine de votre hébergement. Il contient :

- La version PHP utilisée
- L'environnement d'exécution
- Le type d’environnement : Développement ou Production

Ce fichier est utilisé par les serveurs Web pour exécuter votre site web. Mais vous pouvez aussi l'utiliser lors de vos connexions SSH afin que le PHP en ligne de commande s'exécute dans la même version que votre site web. Pour cela, il faut ajouter le fichier **.bashrc** par celui qui vous est fourni sur [https://github.com/ovh/webhosting-ssh-bashrc/blob/master/.bashrc](https://github.com/ovh/webhosting-ssh-bashrc/blob/master/.bashrc){.external} :


```bash
wget -O- https://codeload.github.com/ovh/webhosting-ssh-bashrc/tar.gz/master | tar -zx --strip=1 webhosting-ssh-bashrc-master/.bashrc
```

Lors de votre prochaine connexion SSH, votre version de php correspondra à celle précisée dans le fichier ovhconfig.

Vous pouvez la vérifier avec la commande suivante :


```bash
php --version
```


## Installation de Composer
Nous allons installer **Composer** dans le dossier **$HOME/bin** afin qu'il soit accessible en ligne de commande.


```bash
mkdir -p $HOME/bin
wget -nv https://getcomposer.org/composer.phar -O bin/composer
chmod +x $HOME/bin/composer
```

Si votre dossier **$Home/bin** n'existait pas, il sera pris en compte à la prochaine connexion SSH.


## Initialisation du depot GIT
GIT est gestionnaire de versions. C'est-à-dire qu'il permet d'enregistrer toutes les versions du code source. Dans le cas de mypersonaldomain.ovh, il permet de travailler sur la version courante du site, mais aussi de préparer facilement une version avec de nouvelles fonctionnalités en parallèle.

Lorsque l'on travaille avec GIT en local, on conserve les changements sur son ordinateur avant de les *pousser* à ses collègues. C'est-à-dire d'envoyer sur leur ordinateur les changements que nous venons d'effectuer. Charge à l'un des collègues de les *pousser* ensuite sur le serveur.

Nous allons ici configurer le SSH des hébergements web comme un serveur GIT. Cela simplifie le travail de déploiement sur le serveur : il suffira ensuite d'une ligne pour envoyer une nouvelle version en production.

Tout d'abord, nous devons initialiser un dépôt GIT sur le serveur avec les commandes suivantes :


```bash
mkdir -p $HOME/depot_git
cd $HOME/depot_git
git init --bare
```

Dans le répertoire **$HOME/depot_git/hooks**, nous ajoutons un script qui s'exécutera lorsqu'un nouveau code sera envoyé sur le serveur. Ainsi, à chaque modification, nous allons nous assurer que l'application sera déployée en production. Ce code contient spécialement toutes les commandes permettant de déployer l'application mypersonaldomain.ovh en production.

Le code source de l'application sera automatiquement déployé dans le dossier **$HOME/webhosting-example-rondcoin**.

Pour cela, placez dans le fichier **$HOME/depot_git/hooks/post-receive** :


```bash
#!/bin/bash
# Hook post-receive

# Force source bash profile to update PATH
source ~/.bash_profile
source ~/.bashrc


GIT_REPO=$HOME/depot_git
DEPLOY_DIR=$HOME/webhosting-example-rondcoin

# Go to deploy directory to load ovhconfig
cd $DEPLOY_DIR
ovhConfig
cd -

while read prevsha1 newsha1 ref
do
    if [[ $ref =~ .*/master$ ]];
    then
        echo "Deploying master branch to production..."
        git --work-tree=$DEPLOY_DIR --git-dir=$GIT_REPO checkout -f
        cd $DEPLOY_DIR

        #Exemple for laravel
        if [[ -f composer.lock ]]
        then
            composer update --no-dev --no-interaction
        else
            composer install --no-dev --no-interaction
        fi
        php artisant key:generate
        php artisan migrate
    else
        echo "Ref: $ref isn't master. Nothing to do on production"
    fi
done
```


## Deployer le code source
Afin de déployer le code source depuis son ordinateur, il faut d'abord ajouter une nouvelle destination dans git. Pour cela, nous ajouter le dépôt distant avec la commande suivante :


```bash
git remote add ovh VOTRE_IDENTIFIANT@ftp.clusterXXX.hosting.ovh.net:depot_git
```

Ainsi, pour pousser le code situé sur la branche master (branche principale de git généralement), il suffit d'utiliser la commande :


```bash
git push ovh master
```


### Mettre en ligne le site web
Le code source de mypersonaldomain.ovh est désormais sur le serveur et l'ensemble des dépendances s'est téléchargé depuis le serveur. Mais le site n'est pas encore visible par nos utilisateurs.

Tout d'abord, il faut modifier le fichier **$HOME/webhosting-example-rondcoin/.env** avec les informations relatives à votre base de données. Si ce fichier n'existe pas, vous pouvez copier celui fourni par défaut.

Afin d'appliquer les modifications dans votre base de données, vous devrez lancer la commande suivante :


```bash
cd $HOME/webhosting-example-rondcoin
php artisan migrate
```

Tout est prêt ! Mais, le multisite **mypersonaldomain.ovh** ne pointe pas vers le bon dossier. De fait, les utilisateurs observent toujours la page d'accueil.

Laravel fournit un dossier **public** qui doit être le seul à être accessible depuis les clients. Cela permet d'éviter que quelqu'un ne tente de trouver une vulnérabilité depuis une autre partie du code source. C'est une bonne pratique des applications complexes en PHP.

Ainsi, la dernière étape avant que le site soit en ligne est donc de modifier le multisite **mypersonaldomain.ovh** pour changer le dossier de **www/** à **webhosting-example-rondcoin/public**.

Une fois la modification réalisée, il suffit d'attendre quelques minutes qu'elle soit déployée sur les serveurs web et le site mypersonaldomain.ovh est enfin en ligne.


### Felicitations !
mypersonaldomain.ovh est en ligne ! Il est temps de fêter cette première mise en production et d'aider les équipes de communication à lancer le buzz sur l'application.

Demain, nous allons voir comment s'assurer de meilleures performances en production en utilisant un [SQL privé](https://docs.ovh.com/fr/hosting/24-days/day08/){.ref}.

À demain !

| Article précédent | Article suivant |
|---|---|
| [Configurer et utiliser une base de données](https://docs.ovh.com/fr/hosting/24-days/day06/) | [Utiliser les SQL Privé](https://docs.ovh.com/fr/hosting/24-days/day08/) |