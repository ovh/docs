---
title: 'Comment sécuriser mon site web ?'
slug: day10
excerpt: 'Ou comment sécuriser votre site, son contenu et ses visiteurs ?'
section: 'Cas d''usage'
hidden: true
---

> [!warning]
>
> Ce tutoriel vous présente l’utilisation d’une ou de plusieurs solutions OVH avec des outils externes et vous décrit des manipulations réalisées dans un contexte précis. Pensez à les adapter en fonction de votre situation !
>
> Si vous rencontrez des difficultés lors de ces manipulations, nous vous invitons à faire appel à un prestataire spécialisé et/ou à poser vos questions à notre communauté sur <https://community.ovh.com/>. OVH ne sera pas en mesure de vous fournir une assistance.
>

Il existe de multiples outils et technologies pour développer un site web. Rondcoin a ainsi décidé d'utiliser le framework Laravel pour son site de petites annonces, ainsi que WordPress comme CMS de son blog. Quelles que soient les technologies employées, de nombreuses mesures de sécurité sont communes… et fortement recommandées pour protéger votre site, son contenu et vos visiteurs.

Nous avons vu hier [comment trouver l'origine des erreurs](https://docs.ovh.com/fr/hosting/24-days/day09/) constatées sur votre site ou sur l’infrastructure qui l’héberge. Maintenant que votre site est parfaitement fonctionnel, c’est le moment de penser à la sécurité.

## La securite, pourquoi est-ce important ?
Qu’il s’agisse d’un blog personnel, de votre site d’entreprise ou d’une boutique en ligne, votre site web est une vitrine pour votre société, vos produits, vos services… Bref, même si votre site web ne génère pas directement du chiffre d’affaire, il a un impact important sur votre image.

Imaginez que demain une personne mal intentionnée puisse modifier le contenu de votre page d’accueil, changer le prix de vos produits ou les informations pour vous contacter… De plus, préserver la confidentialité des informations personnelles de vos utilisateurs (par ex. leur adresse e-mail ou postale, numéro de téléphone, date de naissance, préférences, mot de passe, etc.) est primordial pour conserver leur confiance.

La sécurisation d’un site web repose sur un ensemble de briques complémentaires, chacune visant à renforcer un aspect spécifique de la sécurité.


## Les mises a jour
Lorsque vous dépendez d’applications externes, ou même seulement de librairies comme Laravel, ces dernières reçoivent régulièrement des mises à jour. WordPress possède par exemple un système de mises à jour automatique.

Il est important de vous assurer que les applications que vous utilisez soient à jour !

La plupart des mises à jour contiennent en effet, outre de nouvelles fonctionnalités et des corrections de bugs, des correctifs de sécurité. Les pirates analysent sans relâche les failles de sécurité affectant les applications les plus répandues sur le web pour compromettre les sites. Aussi, effectuer régulièrement les mises à jour disponibles est l’une des actions les plus efficaces pour réduire le champ d’action des pirates.

Pour vérifier si votre WordPress peut être mis à jour, il suffit de vous connecter sur l’interface d’administration puis de cliquer sur **Tableau de bord**.

Sur WordPress, faites particulièrement attention aux extensions et aux thèmes. Ils sont souvent à l’origine de failles de sécurité. Assurez-vous que les extensions que vous souhaitez installer sont utilisées par de nombreux autres sites web, regardez les avis en ligne à leur sujet et vérifiez à quand remonte la dernière mise à jour disponible. De la même manière, effectuez les mises à jour de vos extensions et thèmes WordPress dès qu’elles vous sont proposées.


## Les mots de passe
Associé à un identifiant, un mot de passe permet de vous authentifier, c’est-à-dire de prouver que vous êtes bien la personne que vous prétendez être. Ce système d’authentification est très répandu sur Internet.

Vous avez besoin de vous authentifier lorsque, par exemple, vous souhaitez accéder à votre espace client OVH, ou à l’interface d’administration de votre site.

Un bon mot de passe doit remplir les conditions suivantes : vous seul(e) devez en avoir connaissance ;

- vous seul(e) devez en avoir connaissance.
- il doit être unique et ne doit jamais être utilisé pour plusieurs sites. Lorsqu’un site est piraté et que les mots de passe qui s’y trouvent sont volés, ils alimentent des bases de données et sont souvent testés sur d’autres sites web par les pirates ;
- il doit être suffisamment robuste pour ne pas être vulnérable à une recherche exhaustive (quand un attaquant essaye toutes les combinaisons possibles afin de trouver la bonne). Idéalement, il doit être, d’une part, composé aléatoirement de minuscules, majuscules, chiffres et caractères spéciaux et, d’autre part, être long d’au moins 12 caractères.

Malheureusement, l’expérience montre que les mots de passe définis par un utilisateur remplissent très rarement ces conditions : les mots de passe sont difficiles à retenir et, démultipliés par le nombre de sites web sur lequel un internaute possède un compte, cela devient juste impossible à gérer.

Pour répondre à cette problématique, vous pouvez utiliser un gestionnaire de mots de passe. Le principe est simple : tout comme les trousseaux de clés, l’ensemble de vos mots de passe est regroupé et protégé au sein d’une même application.

L’application peut créer les mots de passe à votre place (plus besoin de les inventer) et s’assure qu’il remplissent les critères de sécurité essentiels. Votre trousseau est protégé par un mot de passe principal, déterminé par vous, permettant de déverrouiller l’application.

De nombreux outils existent. L’un des plus connus est [KeepassX](https://www.keepassx.org/){.external} disponible en open source sur Windows, Mac OS et Linux.



> [!primary]
>
> Lors de l’installation de votre WordPress (via “Module en 1 clic” dans l’espace client), OVH s’est chargé de générer pour vous un mot de passe robuste pour l’accès à l’interface d’administration ainsi qu’à votre base de données.
> Il en est de même pour l’accès FTP que vous avez reçu par e-mail lors de la création de votre site.
> 

Lors de l’installation de votre WordPress (via “Module en 1 clic” dans l’espace client), OVH s’est chargé de générer pour vous un mot de passe robuste pour l’accès à l’interface d’administration ainsi qu’à votre base de données. Il en est de même pour l’accès FTP que vous avez reçu par e-mail lors de la création de votre site.

Vous pouvez d’ailleurs activer la double authentification pour sécuriser votre compte OVH : [https://www.ovh.com/fr/news/articles/a1682.mot-de-passe-chronique-d-une-mort-annoncee](https://www.ovh.com/fr/news/articles/a1682.mot-de-passe-chronique-d-une-mort-annoncee){.external}

Passons aux vulnérabilités liées aux failles dans le code de votre site web.


## Les vulnerabilites classiques des sites web


> [!primary]
>
> Rassurez-vous, l'ensemble des CMS et applications actuelles ne sont pas vulnérables aux failles que nous allons décrire. Cette section s'adresse aux développeurs souhaitant sécuriser leur propre code.
> 


### Les failles XSS ou Cross-Site scripting
Pour un attaquant, exploiter cette vulnérabilité consiste à faire exécuter du code JavaScript par le navigateur des visiteurs de votre site. L’objectif est de nuire à l’image de la société, ou plus souvent d’extraire des données des utilisateurs de l’application visée.

Il y a de nombreuses méthodes possibles pour mener à bien ce type d’attaque. Par exemple, un site comportant une barre de recherche ne vérifiant pas le contenu des requêtes de l’utilisateur.

Plutôt que de saisir un mot clé, l’attaquant peut saisir du code JavaScript qui est ensuite exécuté chaque fois qu’un visiteur se rend la page, puisque le résultat est affiché et compris par le navigateur comme du code à exécuter.

Si le site comporte une interface d’administration se basant sur des cookies, l’attaquant peut se servir de ce script pour extraire les cookies du visiteur et ainsi accéder à son compte.

Heureusement, il existe de multiples solutions pour bloquer ce type d’attaque :

- toujours assainir les données en provenance des utilisateurs (ici, le contenu de la recherche) avant d’effectuer des requêtes, de les stocker ou de les retourner à l’utilisateur. L’assainissement des données peut se faire côté client (dans le navigateur, par JavaScript), mais doit toujours être fait également côté serveur, car l’attaquant peut bloquer les protections du navigateur ;
- pour les utilisateurs plus avancés, il est possible d’utiliser des en-têtes HTTP nommés Content-security-Policy. Ces en-têtes servent à dicter le comportement du navigateur lors du traitement de certaines ressources (script, images, code CSS, etc.) et d’empêcher l’exécution de code source si l’origine n’est pas validée.


### Les injections SQL
Il s’agit de nouveau d’une injection de code sur le site pour modifier son comportement normal. Contrairement aux vulnérabilités de type XSS qui utilisent le langage JavaScript, les injections SQL s’attaquent au contenu des bases de données.

Pour un attaquant, l’objectif est d’accéder à des informations protégées ou d’extraire des informations présentes en base de données. Pour certains attaquants, le plaisir est parfois de seulement détruire le contenu de la base de données afin de nuire au site web.

Imaginez par exemple que l’authentification pour accéder à l’interface d’administration de votre site s’effectue via le code PHP suivant :


```php
1. <?php
2. $adminOK = -1 ;
3. 
4. if (isset($_REQUEST["email"])) {
5.     $req = mysql_query($link, "SELECT * FROM users WHERE email = '".$_REQUEST["email"]."' AND password = '".$_REQUEST["password"]."' ");
6.     $res = mysql_fetch_row($req);
7. 
8.     if ($res <> false) {
9.         // Authentification OK
10.         session_start();
11.         // On stock les identifiants de l'utilisateur
12.         $_SESSION["admin"]["email"] = $_REQUEST["email"];
13.         $_SESSION["admin"]["password"] = $_REQUEST["password"];
14.         // Et on le redirige vers la page d'administration
15.         header("Location:index_admin.php");
16. 
17.     } else {
18.         // Authentification échouée.
19.         $adminKO = 0 ;
20.         // Indiquer à l'utilisateur que l'authentification a échouée
21.     }
22. }
23. ?>
```

Cet exemple comporte plusieurs erreurs. La plus importante est située à la ligne suivante :


```php
1. <?php
2. $req = mysqli_query($link, "SELECT * FROM users WHERE email = '".$_REQUEST["email"]."' AND password = '".$_REQUEST["password"]."' ");
3. ?>
```

Si l'attaquant saisit une adresse email contenant **' OR 1=1 '" --**, la requête va être considérée comme valide et retourner l'ensemble des données stockées dans **users**.

Pour éviter ce type d’attaque, il faut vérifier les données en provenance des utilisateurs. Tout comme pour éviter les attaques XSS. Ici, la variable **$_REQUEST** est directement utilisée pour construire une requête SQL, sans même que son contenu ait été vérifié.

Il est aussi possible d’utiliser des requêtes préparées, qui s’assurent que les données saisies agissent sur un champ particulier de la base de données, évitant ainsi l’utilisation d’autres requêtes web. Cela est possible en PHP avec l’utilisation plus que conseillée de [PDO](http://php.net/manual/fr/book.pdo.php){.external} pour la construction des requêtes SQL.

Des frameworks comme Laravel ont ajouté une abstraction de la base de données incluant par défaut des protections contre ce type d’attaque.


### CSRF ou Cross-site Request Forgery
Enfin une attaque qui n’est pas une injection de code ! Les attaques de type CSRF consistent à faire effectuer une action au nom d’un utilisateur légitime, à l’insu de ce dernier.

Prenons un exemple pour illustrer : un attaquant souhaite vous faire publier une publicité pour du des pilules prétendant lutter contre l’impuissance sexuelle sur votre réseau social favori. Comme de nombreuses personnes, vous avez toujours un onglet avec votre réseau social ouvert dans votre navigateur.

Pour y parvenir, l’attaquant cherche à vous attirer sur une page web qu’il contrôle. Une page qui buzz avec plein de petits hérissons trop cute devrait faire l’affaire.

Sur cette page, il inclut un code JavaScript qui effectue une requête vers le serveur de votre réseau social favori. Comme vous êtes authentifié, cette requête passe en votre nom. Vous êtes désormais l’auteur d’une super publicité pour du faux Viagra.

Bien entendu, pour éviter cela, le réseau social peut utiliser des protections contre les attaques CSRF. Le plus efficace est l’utilisation d’un token CSRF qui est fourni uniquement sur les pages web du réseau social, et n’est donc pas accessible à un éventuel attaquant.

Ce code sert ensuite au serveur à valider, ou non, l’origine de la requête. Si la requête ne contient pas le bon token, elle ne sera pas validée, et la ruse ne fonctionnera pas.

Laravel inclut aussi par défaut ce type de protections, évitant ainsi d’avoir à les développer à nouveau.


## Pour aller plus loin
Nous avons vu les principaux vecteurs d’attaques d’un site, mais ce ne sont pas les seuls bien entendu. Voici quelques pistes à explorer :


### Securiser Wordpress
La documentation officielle WordPress possède un chapitre dédié au renforcement de la sécurité: [Site Wordpress - Hardening Wordpress](https://codex.wordpress.org/Hardening_WordPress){.external} [En]

Vous pouvez également limiter l’accès à votre interface d’administration en filtrant les IP : [Bloquer certaines IP au niveau de mon site](https://docs.ovh.com/fr/hosting/mutualise-htaccess-comment-bloquer-certaines-ip-au-niveau-de-mon-site/).


### Projet OWASP
Le projet OWASP (pour Open Web Application Security Project) rassemble de très nombreuses bonnes pratiques et recommandations en matière de sécurité du Web : [Site OWASP](https://www.owasp.org/index.php){.external} [En]. Il réalise aussi, chaque année, le TOP 10 des failles les plus courantes.


### Les regles CSP
Les règles de CSP sont un moyen redoutablement efficace pour se protéger des attaques par injection de code XSS : [Site W3C](https://www.w3.org/TR/CSP/){.external} [En]. Ils fournissent aux navigateurs des règles concernant les sources autorisées (ou non) pour fournir du code JavaScript.

Cependant attention, appliquer des règles trop restrictives peut altérer voire rendre impossible l’utilisation d’un site.

Bien entendu, cette liste de bonnes pratiques n’est pas exhaustive et vous trouverez en ligne de nombreux sites vous permettant d’améliorer la sécurité de votre site web. Nous avons ici évoqué les piratages les plus souvent constatés sur les sites de nos clients.

Demain, nous retournerons auprès de l’équipe de développement de mypersonaldomain.ovh qui a décidé de [fournir une API](https://docs.ovh.com/fr/hosting/24-days/day11/) pour permettre aux développeurs d’interagir avec leur interface.

À demain !

| Article précédent | Article suivant |
|---|---|
| [Comprendre les statistiques et logs](https://docs.ovh.com/fr/hosting/24-days/day09/) | [Comment deployer une API ?](https://docs.ovh.com/fr/hosting/24-days/day11/) |