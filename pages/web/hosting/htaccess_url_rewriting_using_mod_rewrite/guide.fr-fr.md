---
title: .htaccess&#58; reecriture d’URL grace au mod_rewrite
legacy_guide_number: 1971
slug: htaccess-reecriture-url-mod-rewrite
excerpt: Mod_rewrite est disponible chez OVH sur l'ensemble des hebergements mutualises (sauf 20gp). En savoir plus sur le site d'Apache.
section: Réécriture et authentification
---


## Les redirections

### Redirection simple
- Editez le fichier .htaccess :

```bash
RewriteEngine On
RewriteRule .* testing.php
```


Cette formule redirige chaque requête sur le script  **testing.php** .

- ou :

```bash
RewriteEngine On
RewriteRule letstest /test_wslash/testing.php
```


Cette formule redirige chaque requête  **/letstest**  sur le script  **/test_wslash/testing.php** .


### Rediriger exemple.com vers www.exemple.com
- Cela force l'adresse de votre site à être de type www.exemple.com, utile pour le référencement :

```bash
RewriteEngine on
Rewritecond %{HTTP_HOST} ^exemple.com$
Rewriterule ^(.*) http://www.exemple.com/$1 [QSA,L,R=301]
```



### Rediriger vers un dossier en particulier sans afficher le dossier concerne
- Si votre site est n'est pas présent dans le dossier cible, cela force l'adresse de votre site à être de type www.exemple.com, alors qu'en réalité la page appelée est : www.exemple.com/MonSite

```bash
RewriteEngine on
Rewritecond %{HTTP_HOST} ^exemple.com
Rewritecond %{REQUEST_URI} !^/MonSite
Rewriterule ^(.*)$ /MonSite/
```



### Reecriture des URL
Le module mod_rewrite permet la réécriture des URL.

- .htaccess :

```bash
RewriteEngine On
RewriteCond %{REQUEST_URI} !testing.php
RewriteRule (.*) testing.php?var=$1
```


Ces règles lancent le script  **testing.php**  avec la variable GET contenant l'URL mis par l'utilisateur.

- php :

```php
1. <?
2. print("testing server <br/>\n");
3. print("var: {$_GET['var']}\n");
4. ?>
```



### Rediriger automatiquement le visiteur en HTTPS quand il visite le site en HTTP
Le module mod_rewrite permet la réécriture des URL.


```bash
RewriteEngine On
RewriteCond %{SERVER_PORT} 80
RewriteRule ^(.*)$ https://www.votredomaine.fr/$1 [R,L]
```


## Le fichier .htaccess
Tout sur le fichier .htaccess sur le lien suivant : [Cliquer ici]({legacy}1967){.ref}