---
deprecated: true
title: Vermijd SSL-problemen met uw website
excerpt: Vermijd SSL-problemen met uw website
id: '2220'
slug: vermijd_ssl-problemen_met_uw_website
legacy_guide_number: g2220
updated: 2022-10-05
---


## Mixed content
Heeft uw website problemen met het laden van externe elementen, zoals Facebook en Twitter knoppen? Functioneert communicatie op uw website niet als voorheen in HTTP? Dan is er waarschijnlijk sprake van 'mixed content'. 

Sinds een paar jaar hebben browsers als Google Chrome, Mozilla Firefox en Internet Explorer voorkomen dat HTTPS websites pagina-elementen kunnen laden als ze op een HTTP url zijn. Dit is om te verzekeren dat de vertrouwelijkheid van HTTPS niet wordt gecompenseerd door een element dat geladen is in HTTP. 

In de meeste situaties gaat het hierbij om externe scripts van andere websites, bijvoorbeeld sociaalnetwerksites. In dit geval hoeft u alleen maar 'http' met 'https' te vervangen om deze scripts te kunnen laden. 

Maar wees gewaarschuwd: sommige websites maken gebruik van CDNs voor het hosten van Javascript bibliotheken (zoals JQuery). Als de  CDNs de bibliotheek met een url in http leveren dan is het mogelijk van invloed op uw website. 

Hoe weet ik of mijn website is aangetast? 

Met foutopsporende en debugging tools van Mozilla Firefox en Google Chrome kunt u zien of uw website al dan niet elementen bevat die geblokkeerd zijn vanwege mixed content. Meer informatie over deze tools is te vinden op: [het Mozilla Developer Network](https://developer.mozilla.org/fr/docs/S%C3%A9curit%C3%A9/MixedContent).


## Duplicate content
'Duplicate content' betekent dat dezelfde inhoud bestaat op verschillende urls. Zoekmachine-organisaties stellen dit niet op prijs omdat dit gezien wordt als een poging tot het verbeteren van de ranking, de positionering in de zoekresultaten. Daarom worden websites met duplicate content door hen bestraft.  

Om dit probleem te voorkomen is het aan te raden om, wanneer uw site goed werkt in HTTPS, HTTP content door te sturen naar HTTPS. Dit houdt in dat uw bezoekers automatisch naar het HTTPS-adres gestuurd zullen worden en er slechts één adres beschikbaar zal zijn voor dezelfde content. 

Een voorbeeld redirection om te implementeren in een .htaccess bestand op de root van de website: 


```
RewriteEngine On
RewriteCond %{SERVER_PORT} 80
RewriteRule ^(.*)$ https://www.votredomaine.fr/$1 [R,L]
```




## Teruggaan van HTTP naar HTTPS
Als u uw website wilt doorsturen naar HTTP en niet het HTTP protocol wilt gebruiken dan moet u het forceren via het .https bestand. 

Daardoor zullen uw bezoekers automatisch naar het HTTP-adres worden gestuurd en zal er slechts één adres beschikbaar zijn voor dezelfde content, zelfs als ze deze openen in HTTPS. 

Een voorbeeld redirection om te implementeren in een .htaccess bestand op de root van de website om HTTPS naar HTTP te sturen:


```
RewriteEngine On
RewriteCond %{SERVER_PORT} 443
RewriteRule ^(.*)$ http://www.votredomaine.fr/$1 [R,L]
```



