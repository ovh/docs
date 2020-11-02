---
deprecated: true
title: Vältä SSL-sudenkuopat omalla verkkosivulla
excerpt: Vältä SSL-sudenkuopat omalla verkkosivulla
id: '2220'
slug: valta_ssl-sudenkuopat_omalla_verkkosivulla
legacy_guide_number: g2220
---


## Mixed content
Eikö sivusi lataa ulkoisiua elementtejä kuten Facebook- tai Twitter-painikkeita? Eivätkö sivun interaktiot toimi kuten HTTP:llä? Kyseessä on todennäköisesti mixed content -ongelma.

Verkkoselaimet, kuten Google Chrome, Mozilla Firefox tai Internet Explorer, ovat joidenkin vuosien ajan estäneet HTTPS-sivuja lataamasta sivulle elementtejä, jos ne käyttävät HTTP-protokollaa. Tämä tapahtuu siksi, ettei HTTPS-tilan luottamuksellisuus vaarantuisi HTTP:llä ladatun elementin vuoksi.

Useimmissa tapauksissa on kyse ulkopuolisista skripteistä, jotka tulevat toisilta verkkosivuilta kuten sosiaalisista verkostoista. Tällöin skriptin kutsumiseksi riittää http-muodon korvaaminen https-muodolla.

Huomaa kuitenkin, että jotkut sivut käyttävät CDN-palvelua ylläpitämään Javascript-kirjastoja (kuten JQuery). Mikäli nämä CDN-palvelut välittävät tietoja kirjastoon http-muodossa, voi sillä olla vaikutuksia sivun toimintaan.

Mistä tiedän koskeeko tämä verkkosivuani?

Mozilla Firefoxin ja Google Chromen tarjoamat työkalut ohjelmistovirheiden korjaukseen ilmoittavat, kun sivulla on mixed content -ongelman vuoksi estettyjä elementtejä. Seuraavalla sivulla olevan dokumentaation [Mozilla Developer Network](https://developer.mozilla.org/fr/docs/S%C3%A9curit%C3%A9/MixedContent) avulla voit lukea lisää näistä työkaluista mixed content -tapauksissa.


## Duplikoitu sisältö
"Duplicate content", tarkoittaa sitä, että sama sisältö löytyy useiden eri url-osoitteiden kautta. Hakukoneet eivät hyväksy tätä toimintaa, joka niiden mukaan johtuu yrityksistä parantaa sijoittumista tuloksissa. Niinpä ne rankaisevat sivuja, jotka käyttävät sitä.

Tämän tyyppisen ongelman välttämiseksi on suositeltua lisätä uudelleenohjaus HTTP-sisällöstä HTTPS-sisältöön, kun sivu toimii ensin oikein HTTPS-muodossa. Näin vierailijat ohjataan automaattisesti HTTPS-osoitteeseen, ja vain yksi osoite on saatavilla samalle sisällölle. 

Tässä esimerkki uudelleenohjauksesta, jonka voi asettaa .htaccess-tiedostossa verkkosivusi juuressa.


```
RewriteEngine On
RewriteCond %{SERVER_PORT} 80
RewriteRule ^(.*)$ https://www.verkkotunnuksesi.fi/$1 [R,L]
```




## Siirtyminen HTTPS:stä takaisin HTTP:hen
Jos haluat rajoittaa sivusi HTTP:hen etkä halua käyttää HTTPS-protokollaa, se täytyy pakottaa .htaccess-tiedoston kautta.

Näin vierailijat ohjataan automaattisesti HTTP-osoitteeseen ja vain yksi osoite on mahdollinen samalle sisällölle, vaikka sinne yhdistäisi HTTPS-tilassa.

Tässä on esimerkki uudellenohjauksesta, jonka voi toteuttaa .htaccess-tiedostossa webhotellisi juuressa muodostamaan ohjaus HTTPS:stä HTTP:hen:


```
RewriteEngine On
RewriteCond %{SERVER_PORT} 443
RewriteRule ^(.*)$ http://www.verkkotunnuksesi.fi/$1 [R,L]
```



