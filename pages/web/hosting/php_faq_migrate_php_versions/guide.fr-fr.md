---
title: Migration sur les dernieres versions de PHP sur votre hebergement mutualise
slug: mutualise-faq-migration-sur-les-dernieres-versions-de-php
legacy_guide_number: 1758
excerpt: Retrouvez ici les informations pour migrer sur les dernieres versions de PHP.
section: PHP
---

Vous avez certainement été alerté par mail (courant Mars-Avril 2015) de la nécessité de mettre à jour la version de PHP sur vos hébergements mutualisés. Cet article a pour but de vous renseigner sur les différentes questions que vous vous posez.

Retrouvez nos [différents guides mutualisés/hébergement Web](https://www.ovh.com/fr/hebergement-web/faq/){.external} disponibles.


## Généralités

### Informations liees a PHP
- Qu'est-ce que PHP ?

PHP est un langage de programmation libre, essentiellement utilisé pour produire des pages Web dynamiques. C'est le langage le plus utilisé sur Internet aujourd'hui, sur lequel s'appuient des gestionnaires de contenus comme Wordpress, Joomla, Drupal ...

- Pourquoi certaines versions PHP vont être désactivées par OVH ?

Comme tous les langages de programmation, PHP évolue. Les évolutions apportent de nouvelles fonctionnalités, corrigent des bugs ... Les anciennes versions sont maintenues pendant un cycle de vie défini clairement, puis arrêtées. Ces anciennes versions non maintenues comportent des risques de sécurité pour OVH et ses utilisateurs, c'est pourquoi nous allons les désactiver.

- En tant qu'utilisateur, quels sont les bénéfices de migrer sur les nouvelles versions PHP ?

En migrant votre site sur les dernières versions de PHP, qui sont maintenues, vous vous exposez beaucoup moins aux risques de sécurités (piratage) tout en profitant de nouveautés. De plus OVH vous propose l'optimisation gratuite PHP-FPM pour booster vos performances à partir de la 5.3, cliquez [ici](https://www.ovh.com/fr/hebergement-web/optimisation-php-fpm.xml){.external} pour plus d'informations.

- Quelles sont les versions concernées et à partir de quand seront-elles désactivées ?

Voici les versions concernées :


|Version|Fin de support officiel|Soit une fin de vie depuis...|
|---|---|---|
|4.X|7 Août 2008|plus de 9 ans|
|5.2|6 Janvier 2011|plus de 6 ans|
|5.3|14 Août 2014|plus de 3 ans|

- Fin de support officiel

Source : [http://php.net/eol.php](http://php.net/eol.php){.external}

Ces versions seront désactivées à partir du 24 Septembre 2015. Vous pouvez suivre la tâche travaux à cette adresse : [http://travaux.ovh.net/?do=details&id=12795](http://travaux.ovh.net/?do=details&id=12795){.external}

- Quels sont les hébergements concernés ?

Sont concernés tous nos contrats d'hébergement mutualisés sous Linux, exception faite de 60Free et Demo1G.

- Mon site ou une partie de mon site utilise d'anciennes versions PHP, que faire ?

Vos sites et vos tâches planifiées (CRON) passeront par défaut à PHP 5.6. Nous vous conseillons vivement de tester vos sites et tâches planifiées avec ces nouvelles versions dès maintenant. Nous expliquons dans la suite de cette foire aux questions comment faire.

- Pourquoi OVH ne migre pas mes scripts automatiquement

Vous pouvez modifier la version de PHP sur votre hébergement depuis votre espace client, pour ce faire, suivez notre guide : [Configurer la version de PHP depuis votre espace client]({legacy}1993){.ref}

Cependant, tous les sites étant uniques, OVH ne peut pas s'ajuster à chacun de ses clients, qui doivent réaliser ces opérations eux-mêmes.


## Comment migrer mon site vers une nouvelle version de PHP ?

### Étape 1 &#58; s'assurer que votre site est compatible
1. Si vous utilisez un gestionnaire de contenu comme Wordpress, Joomla, Dotclear PHPBB,... la première étape consiste à mettre à jour votre site en suivant leurs guides officiels :
- Wordress : [https://codex.wordpress.org/fr:Mettre_a_Jour_WordPress](https://codex.wordpress.org/fr:Mettre_a_Jour_WordPress){.external}
- Joomla : [https://docs.joomla.org/Portal:Upgrading_Versions/fr](https://docs.joomla.org/Portal:Upgrading_Versions/fr){.external}
- Drupal : [http://drupalfr.org/documentation/mise-a-jour](http://drupalfr.org/documentation/mise-a-jour){.external}
- Prestashop : [http://doc.prestashop.com/pages/viewpage.action?pageId=11272342](http://doc.prestashop.com/pages/viewpage.action?pageId=11272342){.external}
- ...

B) Si votre site se base sur une solution personnalisée, il faut se référer aux [guides de migrations officiels PHP](http://php.net/manual/fr/appendices.php){.external}. Si vous n'êtes pas le développeur de votre site, contactez votre webmaster.


### Étape 2 &#58; parametrer la version PHP de votre hebergement des aujourd'hui
Vous avez ici deux possibilités

- Modifier la version PHP depuis votre espace client
Pour ce faire, suivez notre guide : [Configurer la version de PHP depuis votre espace client]({legacy}1993){.ref}


Sinon, le faire manuellement, en suivant les instructions qui suivent : Rendez-vous à la racine de votre site via FTP. Si besoin, OVH propose un guide [ici]({legacy}1380){.ref}

- Si vous ne disposez pas de fichier .ovhconfig , il est nécessaire de le créer. A l'aide d'un éditeur de texte, insérez ces 4 lignes dans un fichier vierge (la version 5.6 est un exemple) :

Enregistrez ce fichier sous le nom ".ovhconfig", et uploadez-le à la racine de votre hébergement.

- Si vous disposez déjà sur votre hébergement d'un fichier .ovhconfig, vous pouvez l'éditer avec un éditeur de texte (Bloc-Notes, ...) et en vérifier le contenu.

Pour plus d'informations sur les paramètres de ce fichier, OVH propose un guide [ici]({legacy}1207){.ref}


## FAQ

### Cas d'utilisation
- Comment connaître la version de PHP utilisée par mon site ?

Vous pouvez télécharger le fichier ci-après (clic droit, puis "Enregistrer-sous") : [info.php](https://www.ovh.com/fr/documents/info.php){.external} Si vous souhaitez réaliser ce fichier par vous même, Il suffit de créer un fichier texte et d'y inclure: <?php phpinfo(); ?> Ensuite, enregistrez le au format .php : nommez le info.php

Publiez via FTP le fichier à la racine de votre site (ou de vos sites si vous en avez plusieurs rattachés à des sous-domaines). Par exemple /www/monwordpress/ Avec votre navigateur Web, rendez-vous ensuite sur ce info.php. Par exemple www.votre-site.com/monwordpress/info.php


![hosting](images/2601.png){.thumbnail}

OVH a également envoyé un e-mail préventif aux utilisateurs impactés courant Mars-Avril 2015, listant les versions PHP utilisées.

- Je dispose de sous-domaines ou d'une offre multi-domaines, puis-je activer différentes versions de PHP ?

Oui, OVH autorise une version de PHP différente pour chacun de vos sous-domaines (un multi-domaines est vu comme un sous-domaine). Pour ce faire, il suffit de créer un fichier .ovhconfig à la racine d'un sous-domaine particulier. Le fichier .ovhconfig est chargé de la manière suivante :

- Le fichier est ouvert à partir de la racine du domaine de la requête. Par exemple si « www.exemple.com » pointe vers le dossier « /www » et « beta.example.com » pointe vers le dossier « /beta », le fichier « /www/.ovhconfig » est pris en compte pour la requête [http://www.exemple.com/index.php](http://www.exemple.com/index.php){.external}, alors que le fichier « /beta/.ovhconfig » sera chargé pour une requête vers [http://beta.exemple.com/index.php](http://beta.exemple.com/index.php){.external}.
- Si le fichier .ovhconfig spécifique au sous domaine de l'étape 1 n'a pas été trouvé, alors le fichier « /.ovhconfig » est chargé
- Si aucun des deux fichiers ci-dessus n'existe, la configuration par défaut de votre compte est appliquée (PHP 5.6 avec FPM)

- J'ai configuré un fichier .htaccess pour forcer une version de PHP, qu'en adviendra t-il ?

Par défaut, vos sites migreront sur PHP 5.6. Si vous voulez forcer une version supérieure disponible (par exemple 7.0), ce paramétrage s'effectue via .ovhconfig (fichier présent sur votre FTP). Si votre fichier .htaccess contient d'autres directives (URL rewriting, redirection, ...), celles-ci seront toujours actives.

- Puis-je utiliser la version 7 de PHP ?

La version 7 de PHP est en effet disponible sur les hébergements web.

- Je rencontre des difficultés pendant la migration, comment puis-je procéder ?

Notre support client ne pourra pas migrer votre site à votre place, cependant il peut vous guider pour mettre à jour votre version de PHP (par le .ovhconfig). Notre support n'est pas tenu responsable des potentiels dysfonctionnements.

- Besoin d'aide ? Trouvez un prestataire Web dans notre réseau de partenaires agréés qui vous accompagnera dans la migration de votre site : [http://www.ovh.biz/](http://www.ovh.biz/){.external}