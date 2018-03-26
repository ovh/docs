---
title: Activer l’optimisation PHP sur son Hebergement Mutualise OVH
legacy_guide_number: 1175
slug: activer-loptimisation-php-sur-son-hebergement-mutualise-ovh
excerpt: Ce guide vous aidera a activer PHP-FPM sur votre hebergement web mutualise chez OVH, en vue d'ameliorer les temps de reponse de votre site.
section: PHP
---


## Comment faire profiter votre site de PHP-FPM ?

### Qu'est-ce que PHP-FPM ?
PHP-FPM est une implémentation alternative à PHP FastCGI avec quelques fonctionnalités additionnelles particulièrement utiles pour les environnements à haute charge.

Nous avons adapté PHP-FPM à notre infrastructure Web dans le but d'accélérer la vitesse d'exécution des scripts PHP.

Concrètement, l'usage de PHP-FPM nous offre un gain en performance important, jusqu'à 7 fois plus rapide par rapport à PHP-CGI.



> [!success]
>
> Vous trouverez dans ce guide comment activer PHP-FPM et définir la version de PHP grâce au fichier .ovhconfig.
> Si vous le souhaitez vous pouvez réaliser ces modifications depuis votre espace client en vous aidant de ce guide <docs/web/hosting/mutualise_configurer_la_version_de_php_depuis_votre_espace_client/>.
> 



> [!alert]
>
> Il est conseillé d'utiliser les versions les plus récentes de PHP (5.6 ou 7.0)
> pour profiter des meilleures performances et d'une sécurité renforcée.
> L'usage des versions obsolètes de PHP (5.4, ou 5.5) est fortement déconseillé
> et vous expose à des possibles failles de sécurité.
> 


### Comment activer PHP-FPM ?
Il vous suffit de déposer le fichier  **.ovhconfig**  à la racine de votre espace disque via FTP ou SFTP.



> [!warning]
>
> Le fichier .ovhconfig est présent par défaut depuis les Hébergements Web 2014.
> Sur les offres antérieures, il faudra le créer et le placer à la racine de votre espace disque.
> Sachez également que le fichier n'est pas ajouté automatiquement sur les anciens Plans ainsi que et lors d'un changement d'offre, car certains paramètres peuvent ne pas être compatibles selon la version PHP que vous utilisez
> Enfin, le fichier ne peut être placé qu'à la racine ou dans un répertoire de premier niveau
> Il n'est pas possible d'utiliser plusieurs fichiers pour faire cohabiter des configurations PHP différentes sur un même hébergement (sauf multisite []({legacy}1332)).
> 

Le fichier  **.ovhconfig**  possède la structure suivante:


```bash
app.engine=php
app.engine.version=7.0
http.firewall=none
environment=production
container.image=stable
```


### Comment desactiver PHP-FPM ?
Il suffit de modifier le fichier **.ovhconfig** comme suit:


```bash
app.engine=phpcgi
app.engine.version=AUTO
```


### Quelles versions de PHP sont disponibles ?
Vous pouvez utiliser les versions PHP suivantes:

- PHP 7.0 (version par défaut, meilleures performances)
- PHP 5.6 (supportée jusqu'au 31-12-2018)
- PHP 5.5 (obsolète, non recommandée)


## Questions frequentes (FAQ)

### IonCube est-il disponible avec PHP-FPM ?
Oui, **IonCube** est disponible avec les versions suivantes:

- PHP 5.6
- PHP 5.5 (obsolète, et non recommandée)

Pour l'utiliser, il faudra se servir de l'encodeur IonCube pour encoder vos scripts PHP. Ceux-ci pourront ainsi fonctionner sur votre hébergement mutualisé. Pour plus d'informations, vous pouvez vous rendre sur la FAQ IonCube: [FAQ IonCube](http://www.ioncube.com/faq.php){.external}


### J'ai cree mon .ovhconfig et j'ai une erreur &quot;Not Implemented&quot;
Cela signifie que le moteur ou la version spécifiée dans votre fichier .ovhconfig n'existe pas. N'hésitez pas à regarder le fichier error.log de votre site afin d'avoir plus d'information sur l'erreur.


### Que signifie la directive &quot;http.firewall&quot; ?
Cette directive vous permet d'activer un pare-feu applicatif de type *mod_security*.

Pour l'activer:


```bash
http.firewall=security
```

Pour le désactiver (par défaut):


```bash
http.firewall=none
```


### Que signifie la directive &quot;environment&quot; ?
Cette directive permet de spécifier le comportement du cache des fichiers statiques ainsi que du traitement des erreurs PHP.

En mode "development" :

- Aucun cache n'est appliqué
- Les erreurs PHP apparaissent sur votre site (display_errors=On)

En mode  "production" : (option par défaut)

- Les fichiers statiques tels que images, vidéo, audio ont une date d'expiration plus grande, ce qui maximise la mise en cache des fichiers sur les navigateurs.
- Les erreurs PHP n'apparaissent pas sur votre site (display_errors=Off)

Pour activer le mode "development":


```bash
environment=development
```

Pour activer le mode "production" (par défaut):


```bash
environment=production
```


### Que signifie la directive &quot;container.image&quot; ?
Cette directive définit la version du système (Linux) utilisée pour l'environnement d’exécution de PHP.

Concrètement, elle vous permet soit de bénéficier d'une configuration stable sur le long terme (valeur *stable*), soit de bénéficier des dernières mises à jour sur les logiciels fournis par OVH (valeur *latest*).

Retrouvez plus d'information à ce sujet dans [ce guide](../modifier_environnement_execution_hebergement_web_optmisation/guide.fr-fr.md){.ref}.


## Details sur le fichier .ovhconfig
Voici le détail d'application du fichier de config :


```text
1. ; ovhconfig
2. ;
3. ; this file must be placed in $HOME/.ovhconfig or in $DOCUMENT_ROOT/.ovhconfig
4. 
5. ; __app.engine__
6. ;
7. ; values: php (php engine + opcache accelerator)
8. ; notice: if php, a phpcgi engine will be activated as fallback (if previous engine crash)
9. ;
10. ;   php:
11. ;       IMPORTANT: register_globals and magic_quotes_gpc are off for security
12. ;       php optiones .htaccess (like php version) are ignored
13. ;   phpcgi:
14. ;       IMPORTANT this is a fallback to previous system
15. ;       in this case __app.engine.version__ will be considerated as AUTO and php version will be old system
16. ;       (meaning depending .htaccess or .phpX extension)
17. ;
18. app.engine=php
19. 
20. ; __app.engine.version__ specify version of your engine
21. ;
22. ; for php:
23. ;   default: 7.0
24. ; for phpcgi:
25. ;   this options is ignored (= fallback in AUTO)
26. ;
27. app.engine.version=7.0
28. 
29. ; __http.firewall__ used to add application firewall  (filter http requests)
30. ;
31. ; values: none | security
32. ; default: none
33. ;
34. http.firewall=none
35. 
36. ; __environment__
37. ;
38. ; values: production | development
39. ;
40. ;   production:
41. ;       apache will maximise local cache
42. ;       mod_expires will grow up TTL of js, css, pdf, images, video, audio
43. ;       you can override it changing expiration explicitly in your .htaccess
44. ;       feel free to look on our guide.
45. ;   development:
46. ;       no expiration is added, files are not locally in cache,
47. ;       will speed up tests but decrease performances
48. ;
49. ; choosen environment will also be available in your variable ENVIRONMENT unix env
50. ;
51. ; default: production
52. ;
53. environment=development
54. 
55. ; __container.image__
56. ;
57. ; values: legacy | stable | jessie.i386 | testing
58. ;
59. container.image=stable
```