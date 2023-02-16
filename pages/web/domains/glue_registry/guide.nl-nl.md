---
deprecated: true
title: Glue Registry
excerpt: Waarvoor dient een Glue Registry
slug: glue_registry
legacy_guide_number: g1568
updated: 2018-10-26
---


## 
Met Glue Registry kunt u uw DNS servers aanpassen met uw domeinnaam. Uw naam wordt weergegeven in de Whois database in plaats van de naam van uw hosting provider. U kunt uw eigen DNS servers aanmaken in IPv4.

U kunt DNS servers aanpassen voor alle gTLD domeinen: 
.com, net. .org...
Om deze dienst te gebruiken gaat u direct naar uw [klantaccount](https://www.ovh.com/manager/web/login.html) en selecteert u er het betreffende domein in het Domeinen gedeelte.

![](images/img_2903.jpg){.thumbnail}
Selecteer de 'glue' tab en klik op 'Toevoegen'

![](images/img_2900.jpg){.thumbnail}
Er zal een pop-up scherm verschijnen zodat u de glue registry kunt configureren.

![](images/img_2901.jpg){.thumbnail}
U dient een subdomein en een IP-adres voor een geldige DNS server in te voeren.

![](images/img_2902.jpg){.thumbnail}


## 
Als u gebruik maakt van DNS servers die niet van OVH zijn dan moet u het subdomein in de bijbehorende DNS zone aanmaken en niet in de OVH zone
Zodra de glue is aangemaakt moet u een 'A' record in uw DNS zone aangeven. 

Selecteer de 'DNS zone' tab

![](images/img_2953.jpg){.thumbnail}
Selecteer vervolgens 'Voeg een invoer toe'[/blue[

![](images/img_2952.jpg){.thumbnail}
Klik op 'A'

![](images/img_2956.jpg){.thumbnail}
In ons voorbeeld is het 'A' record er om te creëren en valideren.

![](images/img_2954.jpg){.thumbnail}
Er zal een propagatietijd nodig zijn van 24 tot 48 uur.

