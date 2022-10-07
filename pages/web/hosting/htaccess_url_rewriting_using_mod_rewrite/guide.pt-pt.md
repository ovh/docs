---
title: Partilhado htaccess, Rescrita de URLs graças ao mod_write
excerpt: O Mod_rewrite está disponível na OVH no conjunto dos alojamentos partilhados (exceto 20gp)
slug: partilhado_htaccess_rescrita_de_urls_gracas_ao_mod_write
section: Reescrita e autenticação
order: 03
---


## Reencaminhamento simples

- Edite o ficheiro .htaccess :


```
RewriteEngine On
RewriteRule .* testing.php
```



Esta formula reencaminha cada pedido para o script testing.php.


- ou :


```
RewriteEngine On
RewriteRule letstest /test_wslash/testing.php
```



Esta formula reencaminha cada pedido /letstest para o script /test_wslash/testing.php.


## Reencaminhar exemplo.com para www.exemplo.com

- Este código força o endereço do seu website a ser do tipo www.exemplo.com, útil para o referenciamento:


```
RewriteEngine on
RewriteCond %{HTTP_HOST} ^exemplo.com$
RewriteRule ^(.*) http://www.exemplo.com/$1 [QSA,L,R=301]
```





## Reencaminhar para uma pasta em particular sem mostrar a pasta em questão

- Se o seu website não está na pasta raiz, este código força o endereço do seu website a ser do tipo www.exemplo.com quando na realidade ele chama a página www.exemplo.com/MeuSite


```
RewriteEngine on
RewriteCond %{HTTP_HOST} ^exemplo.com
RewriteCond %{REQUEST_URI} !^/MeuSite
RewriteRule ^(.*)$ /MeuSite/
```





## Rescrita de URL
O módulo mod_rewrite permite que os URLs sejam rescritos.


- .htaccess:


```
RewriteEngine On
RewriteCond %{REQUEST_URI} !testing.php
RewriteRule (.*) testing.php?var=$1
```



Estas regras iniciam o script testing.php com a variável GET a conter o URL atualizado pelo utilizador.


- php:


```
<?
print("testing server <br/>\n");
print("var: {$_GET['var']}\n");
?>
```





## Reencaminhar automaticamente o visitante para o website em SSL quando este visita o website em modo não seguro
O módulo mod_rewrite permite que os URLs sejam rescritos.


```
RewriteEngine on
Rewritecond %{HTTP_HOST} ^nom_domaine.tld$
Rewriterule ^(.*) https://ssl5.ovh.net/~login_ftp/$1 [QSA,L,R=301]
```



- Para passar para o website seguro apenas para a visualização de uma página específica:


```
RewriteEngine on
RewriteCond %{HTTP_HOST} ^nom_domaine.tld$
RewriteCond %{REQUEST_URI} ~094/page.php
RewriteRule ^(.*) https://ssl5.ovh.net/~login_ftp/$1 [QSA,L,R=301]
```




## Nota:
Para conhecer o endereço seguro do seu plano: [Cliqu aqui](https://www.ovh.com/fr/g1594.mutualise_informations_sur_les_differents_types_de_certificat_ssl_chez_ovh).


## 
Tudo sobre o ficheiro .htaccess no seguinte link: [Clique aqui](https://www.ovh.com/fr/g1967.mutualise_tout_sur_le_fichier_htaccess)

