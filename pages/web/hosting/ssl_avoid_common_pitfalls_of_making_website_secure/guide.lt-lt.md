---
deprecated: true
title: Kaip išvengti SSL spąstų svetainei
excerpt: Kaip išvengti SSL spąstų svetainei
id: '2220'
slug: kaip_isvengti_ssl_spastu_svetainei
legacy_guide_number: g2220
---


## Mixed content
Jūsų svetainė neįkrauna išorinių elementų, pavyzdžiui, Facebook ar Twitter mygtukų? Jūsų puslapis veikia tik per HTTP? Greičiausiai susidūrėte su mišriojo turinio (mixed content) problema.

Jau keletą metų žiniatinklio naršyklės, pvz., Google Chrome, Mozilla Firefox ar Internet Explorer, neleidžia HTTPS svetainėms įkrauti puslapio elementų, jeigu šiems naudojama HTTP nuoroda. Taip siekiama užtikrinti, kad per HTTP įkraunamas elementas nepažeis HTTPS konfidencialumo.

Daugeliu atvejų, tai išoriniai skriptai, paimti iš kitų svetainių, pvz., socialinių tinklų, ir kreipimasis į šiuos skriptus galimas pakeitus http į https.

Dėmesio: kai kurios interneto svetainės naudoja CDN Javascrip bibliotekų (tokių kaip JQuery) talpinimui. Jeigu šie CDN teikia biblioteką su http nuoroda, tai gali turėti įtakos svetainės veikimui.

Kaip žinoti, ar ši klaida turės įtakos mano svetainei?

Mozilla Firefox ir Google Chrome siūlomi klaidų taisymo įrankiai nurodo, kad svetainės elementai blokuojami dėl mišriojo turinio klaidos. Daugiau informacijos apie šiuos įrankius (mišriojo turinio atveju) rasite [Mozilla Developer Network](https://developer.mozilla.org/fr/docs/S%C3%A9curit%C3%A9/MixedContent) dokumentacijoje.


## Duplicate content
Duplicate content - tai tas pats turinys, prieinamas per keletą skirtingų nuorodų. Paieškos varikliai nemėgsta šio fenomeno, kadangi tai laikoma bandymu pagerinti rezultatus paieškos sistemose, todėl tokias nuorodas naudojančios svetainės yra baudžiamos.

Kai svetainė teisingai veiks per HTTPS, rekomenduojame pridėti HTTP turinio nukreipimą į HTTPS, kad išvengtumėte šios problemos. Taip jūsų svetainės lankytojai bus automatiškai nukreipti į HTTPS adresą ir tam pačiam turiniui bus naudojamas tik vienas adresas.

Pateikiame nukreipimo pavyzdį su .htaccess failu jūsų svetainės šakniniame kataloge.


```
RewriteEngine On
RewriteCond %{SERVER_PORT} 80
RewriteRule ^(.*)$ https://www.jususvetaine.lt/$1 [R,L]
```




## HTTPS nukreipimas į HTTP
Jeigu norite apriboti savo HTTP svetainę ir nenaudoti HTTPS protokolo, šiuos veiksmus galite atlikti naudodami .htacces failą.

Jūsų svetainės lankytojai bus automatiškai nukreipiami į HTTP adresą, ir tam pačiam turiniui bus prieinamas tik vienas adresas, net jeigu jungiamasi per HTTPS.

Pateikiame nukreipimo pavyzdį su .htaccess failu jūsų svetainės šakniniame kataloge, jei norite nukreipti HTTPS į HTTP:


```
RewriteEngine On
RewriteCond %{SERVER_PORT} 443
RewriteRule ^(.*)$ http://www.votredomaine.fr/$1 [R,L]
```



