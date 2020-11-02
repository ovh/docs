---
deprecated: true
title: 'Svetainių talpinimas: htaccess ir URL perrašymas naudojant mod_rewrite'
excerpt: Mod_rewrite modulis galimas su visais OVH svetainių talpinimo planais (išskyrus 20gp).
id: '1971'
slug: svetainiu_talpinimas_htaccess_ir_url_perrasymas_naudojant_mod_rewrite
legacy_guide_number: g1971
---


## Paprasti nukreipimai

- redaguokite .htaccess failą: 


```
RewriteEngine On
RewriteRule .* testing.php
```



Ši taisyklę nukreips visas užklausas į failą testing.php.


- arba:


```
RewriteEngine On
RewriteRule testas /test_wslash/testing.php
```



Ši taisyklė nukreips visas užklausas į /testas katalogą į failą /test_wslash/testing.php.


## pavyzdys.com nukreipimas į www.pavyzdys.com

- Tai visais atvejais pakeis svetainės adresą į www.pavyzdys.com, kuris patogesnis susiejimams:


```
RewriteEngine on
Rewritecond %{HTTP_HOST} ^pavyzdys.com$
Rewriterule ^(.*) http://www.pavyzdys.com/$1 [QSA,L,R=301]
```





## Nukreipimas į katalogą nenurodant to adrese

- Jeigu jūsų svetainė įkelta ne į pagrindinį katalogą, o į subkatalogą, galima padaryti, jog lankytojams matomas adresas būtų www.pavyzdys.com, nors svetainė būtų kraunama iš www.pavyzdys.com/svetainė:


```
RewriteEngine on
Rewritecond %{HTTP_HOST} ^pavyzdys.com
Rewritecond %{REQUEST_URI} !^/svetainė
Rewriterule ^(.*)$ /svetainė/
```





## URL perrašymas
Modulis mod_rewrite leidžia perrašyti URL.


- .htaccess:


```
RewriteEngine On
RewriteCond %{REQUEST_URI} !testing.php
RewriteRule (.*) testing.php?var=$1
```



Tai kreipsis į failą testing.php ir iškart pateiks URL su GET tipo kintamuoju, kurio lankytojui nereikia įvesti.


- php:


[code]
<?
print("testing server <br/>\n");
print("var: {$_GET['var']}\n");
?>


## Automatinis lankytojo nukreipimas į SSL apsaugotą svetainę, kai atidaroma neapsaugota svetainė
mod_rewrite URL perrašymas leidžia nukreipti lankytojus į SSL apsaugotą svetainę:



```
RewriteEngine on
Rewritecond %{HTTP_HOST} ^domenas.tld$
Rewriterule ^(.*) https://ssl5.ovh.net/~ftp_login/$1 [QSA,L,R=301]
```



- Jeigu norite nukreipti tik kai atidaromi tam tikri puslapiai:


```
RewriteEngine on
RewriteCond %{HTTP_HOST} ^domenas.tld$
RewriteCond %{REQUEST_URI} ~094/puslapis.php
RewriteRule ^(.*) https://ssl5.ovh.net/~ftp_login/$1 [QSA,L,R=301]
```




## Pastaba:
Norėdami sužinoti daugiau apie svetainės apsaugojimą, [spragtelėkite čia](https://www.ovh.lt/g1594.informacija_apie_skirtingu_tipu_SSL_sertifikatus_OVH).


## 
Daugiau informacijos apie .htaccess failą ir jo galimybes rasite [čia](https://www.ovh.lt/g1967.viskas_apie_htaccess_faila).

