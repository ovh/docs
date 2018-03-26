---
title: 'IMAPCopy: Käyttöohje'
excerpt: ''
slug: imapcopy_kayttoohje
legacy_guide_number: g1310
---


## Mikä on IMAPCopy?
IMAPCopy on erittäin käytännöllinen jos haluat kopioida kaikki sähköpostisi toisesta postitilistäsi tiliin, jota olet siirtymässä käyttämään.

Voit syöttää:
1. Tilin josta postit siirretään.
2. Tilin johon postit siirretään.
3. Kun synkronointi on käynnistetty, voit sulkea sivuston sillä sähköpostit kopioidaan tilille, johon postit siirretään. Tässä voi kestää jonkin aikaa postien määrästä riippuen.

![](images/img_1423.jpg){.thumbnail}


## Työkaluun siirtyminen OVH:n sivulta
Kun olet [OVH:n sivulla](http://www.ovh-hosting.fi), klikkaa yläoikealla olevasta osiosta kohtaa Webmail. Tämän jälkeen saat eteesi webmail-käyttöliittymän.

![](images/img_2846.jpg){.thumbnail}
Pystyvalikosta yläoikealta (Webmail sinisellä) löydät kohdan Sähköpostityökalut.

Klikkaamalla sitä, saat eeteesi suoraan sähköpostien työkalujen käyttöliittymän, josta löytyy IMAPCopy.

Voit nyt klikata linkkiä ”IMAPCopy”.

![](images/img_2411.jpg){.thumbnail}


## Palvelun valinta
IMAPCopy mahdollistaa 3. osapuolten ulkoisten postilaatikkojen datan siirtämisen OVH:lla isännöityyn postilaatikkoon.

Seuraavat ovat yleisimmät sähköpostipalveluntarjoajat (maksulliset tai maksuttomat):

- Gmail
- Hotmail
- Yahoo
- suomi24.fi
- OVH Webhotelli
- Muut mahdolliset


Mikäli sähköpostipalveluntarjoajasi ei ole listassa, valitse ”Muu” tai ”Other”.
Tässä esimerkissä OVH:n webhotellipostilaatikosta kopioidaan sähköpostit Exchange 2013 -postitilille valitsemalla ”OVH Webhotelli”lähdepostilaatikkopalveluksi.

![](images/img_1426.jpg){.thumbnail}


## Asetukset
Asettaaksesi lähdepostitilin asetukset oikein, alla eri arvot jotka täytyy olla syötettynä lomakkeeseen:
1. Palvelu: ks. ylhäältä ([tässä esimerkissä i]OVH Webhotelli)
2. Kirjautuminen: täysi lähdepostiosoitteesi (tässä esimerkissä support@ovh.net, OVH:n webhotellin postilaatikko).
3. Salasana: lähdetiliin liittyvä salasana (luonnollisesti vain sinä tiedät sen).
4. IMAP-palvelin: postipalvelin johon yhdistetään (esimerkissämme ssl0.ovh.net, palvelin joka tukee SSL-yhteyksiä).
5. SSL: rastita tämä jos lähdepalvelin tukee salattuja SSL-yhteyksiä (Secured Socket Layer) (rastitettuna tässä esimerkissä).

Kun olet varmistanut kaikkien asetusten olevan oikein, klikkaa ”Vahvista”.

![](images/img_1427.jpg){.thumbnail}


## Yhdistäminen lähdepostitiliin
Kun olet vahvistanut yhteysasetukset lähdepostitiliin, tapahtumat ovat seuraavat:

1. Yhteyden testaus nykyiseen tiliisi.
2. Yhteys muodostaminen onnistunut ongelmitta.

![](images/img_1428.jpg){.thumbnail}


## Palvelun valinta
IMAPCopy on suunniteltu OVH-sähköpostien tai 3. osapuolten postilaatikkojen siirtoon OVH-postitilille (Exchange- tai webhotellipostilaatikko).
Jos käytössäsi on uusi Exchange 2013 -palvelu, sähköpostit voidaan kopioida 3. osapuolen/OVH:n webhotellipostilaatikosta myös siihenkin.

Ohessa yleisimmät sähköpostipalvelut joita tarjoamme:

- Exchange 25 GB
- Exchange Corporate
- Exchange Reseller
- OVH Webhotelli
- Muu


Jos kohdepostitiliä ei ole listalla, valitse ”Muu”.

Tässä esimerkissä kopioimme OVH:n webhotellipostilaatikon sisällön Exchange 2013 -postilaatikkoon valitsemalla pudotusvalikosta ”Muu”kohdepostiosoitteeksi.

![](images/img_1429.jpg){.thumbnail}


## Asetukset
Asettaaksesi kohdepostitilin asetukset oikein, alla eri arvot jotka täytyy olla syötettynä lomakkeeseen:
1. Palvelu: ks. ylhäältä ([tässä esimerkissä Muu)
2. Kirjautuminen: täysi lähdepostiosoitteesi (tässä esimerkissä exchange@ovh.net, Exchange 2013 -osoite) tai käyttäjätunnus kirjautumisessa (se mikä on ennen "@").
3. Salasana: lähdetiliin liittyvä salasana (luonnollisesti vain sinä tiedät sen).
4. IMAP-palvelin: postipalvelin johon yhdistetään (esimerkissämme ex.mail.ovh.net, palvelin joka tukee SSL-yhteyksiä).
5. SSL: rastita tämä jos lähdepalvelin tukee salattuja SSL-yhteyksiä (Secured Socket Layer) (rastitettuna tässä esimerkissä).

Kun olet varmistanut kaikkien asetusten olevan oikein, klikkaa ”Vahvista”.

![](images/img_1430.jpg){.thumbnail}


## Yhdistäminen kohdepostitiliin
Tapahtumat kohdepostitiliin yhdistämisessä ovat seuraavat eli samat kuin lähdepostitiliin yhdistettäessä:

1. Yhteyden testaus nykyiseen tiliisi.
2. Yhteys muodostaminen onnistunut ongelmitta.

![](images/img_1431.jpg){.thumbnail}


## Synkronointi
Kun yhteys kohdepostiosoitteeseen on muodostettu Synkronoi-nappi ilmestyy eteesi.

Klikkaa sitä kopioidaksesi tilin A (lähde) postit tiliin B (kohde).

Esimerkissämme järjestelmä kopioi kaikki viestit support@ovh.net-tilistä Exchange 2013 -tiliin exchange@ovh.net.

Seuraava viesti tulee näytölle:
Tiliesi synkronointi on meneillään. Tarkistaaksesi tilan, syötä alla olevaan laatikkoon sähköpostiosoitteesi.

![](images/img_1432.jpg){.thumbnail}
Koska synkronointi on IMAP-tyyppinen, sellaiset olemassa olevat sähköpostikansiot jotka sijaitsevat lähdepostitilillä mutta eivät kohdepostitilillä, luodaan kohdepostitilille riippumatta siitä ovatko ne tyhjiä vai eivät.


## Synkronointi — virheet
Kun synkronointi on aloitettu ja mikäli saat virheviestin, se voi olla seuraavanlainen (ks. kuvakaappaus):

Tapahtui virhe tilejä synkronoitaessa. Todo sync for this account exists.

Esimerkissämme Synkronoi-nappia on painettu toiseen kertaan. Tämän seurauksena järjestelmä palauttaa viestin Synkronointi on jo käynnissä.

![](images/img_1433.jpg){.thumbnail}


## Synkronointi — viimeistely
Kun synkronointi on valmistunut, siirron yhteenvedosta lähetetään sähköposti kohdesähköpostiosoitteeseen:

Sähköposti on vastaanotettu, kuten kuvakaappauksesta on nähtävissä.

![](images/img_1435.jpg){.thumbnail}


## Synkronoinnin tilan tarkistus
Tarkistaaksesi synkronoinnin tilan, voit milloin tahansa syöttää lähdesähköpostiosoitteen sille varattuun ”Katso synkronoinnin tila”-kenttään ja klikkaamalla Lähetä.

Tässä esimerkissä synkronointitilan tarkistuksen yhteydessä, synkronointi oli jo valmistunut viestillä ”Tilien synkronointi on valmis..

Mikäli joidenkin kopioitavien sähköpostien koko on iso (liitetiedostojen tms. syyn takia), saat tähän liittyen viestin ”Synkronointia ei ole vielä aloitettu, ole hyvä ja odota.” järjestelmämme toimesta.

![](images/img_1434.jpg){.thumbnail}

