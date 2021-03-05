---
deprecated: true
title: 'Webhotellin sähköposti: Sähköpostilistan käyttöpas'
excerpt: Ohje sähköpostilistan käyttöön
slug: webhotellin_sahkoposti_sahkopostilistan_kayttopas
legacy_guide_number: g1596
---


## Yleistä
Postituslistan avulla voit lähettää viestin samanaikaisesti monille vastaanottajille.
Tällainen voi olla hyödyllistä esimerkiksi uuden tuotteen tiedottamisessa (e-commerce sivulla) tai tiedotettaessa seuraavasta kokoontumisesta  (yhteisösivut). On monenlaisia käyttötapoja, jotka voivat vastata tarpeisiisi.


Ezmlm on erittäin tehokas ja käytetty jakelulistojen hallintaväline. Tässä ohjesssa katsotaan, kuinka voi luoda, hallinoida ja konfiguroida postituslistan.

- Muista, että postituslista ei ole massaroskapostin(mainosviestit) lähetystä varten. Tämän tyyppinen toiminta on hyväksyttyä tietyssä määrin kunhan se ei ole häiritsevää.

- On hyvä tietää, että käyttäjä voi poistua milloin tahansa postituslistalta, mutta myös raportoida väärinkäytöstä nähdessään siihen aihetta.




## Luo oma postituslista
Esimerkissä käytämme postituslistaa, joka littyy Pro-webhotellin palveluiden tiedottamiseen.


Kun olet kirjautunut, valitse webhotellisi osiosta "Sähköpostit" ja klikkaa  "Postituslistat"-kuvaketta.

![](images/img_3626.jpg){.thumbnail}
Jos olet jo luonut postituslistan, se näkyy yhteenvetotaulukossa. Esimerkissä yhtään postituslistaa ei ole luotu.

Luodaksesi uuden listan klikkaa Lisää postituslista

![](images/img_3017.jpg){.thumbnail}
Lomake postituslistan luomista varten, sen vahvistamiseen tarvitaan useita tietoja:


- Nimi: postituslistasi nimi
- Omistaja: syötä postituslistan omistajan sähköpostiosoite (henkilö toimii myös moderaattorina)

-Vastaus: määritä vastausosoite
-Kieli: valitse postituslistasi kieli (liittymissähköpostien tai poistumissähköpostien automaattiset käännökset)
-Viestien muokkaus: Omistaja (moderaattori) hyväksyy vastaukset.

- Jäsenten muokkaus: Omistaja(moderaattori) hyväksyy kirjaukset
- Vain jäsenet voivat lähettää postia: postituslistalta ei voi lähettää viestejä, jos ei ole listan jäsen.



![](images/img_3019.jpg){.thumbnail}
Kun lomake on hyväksytty, vahvistus viesti tulee näkyviin:

![](images/img_3020.jpg){.thumbnail}

## Jokaiseen postituslistaan voi lisätä enintään:

- 250 jäsentä uutiskirje-tyyppisiin listoihin, Rajoitettu, Avoin, Yksityinen&Suljettu
- 5000 jäsentä vain Muokattuhin listoihin.




## Muokkausperiaate
Sähköpostilistaa voi muokata niin, ettei kuka tahansa voi lähettää postia listan jäsenille. Muokattua listaa voi käyttää esimerkiksi uutiskirjeissä, kun taas muokkaamaton lista mahdollistaa helpommin dialogin useiden jäsenten välillä.

![](images/img_3565.jpg){.thumbnail}
.

![](images/img_3564.jpg){.thumbnail}


## Postituslistan muokkaaminen tai poistaminen
Mikäli haluat muokata aiemmin tekemiäsi valintoja tai poistaa postituslistan, klikkaa hammasratasta postituslistan oikealla puolella.

![](images/img_3021.jpg){.thumbnail}


## Tuo jäseniä
Esimerkissä jäseniä ei ole vielä rekisteröity. Tämä tapahtuu klikaamalla mustaa symbolia osiossa "Jäsenet"

![](images/img_3022.jpg){.thumbnail}

- Klikkaa "Lisää jäseniä" lisätäksesi listallesi jäseniä.



![](images/img_3023.jpg){.thumbnail}
On olemassa kaksi tapaa lisätä jäseniä postituslistalle:


- Tietojen syöttäminen käsin
- Tekstitiedoston tuonti, jossa on yksi sähköpostisoite riviä kohti



![](images/img_3030.jpg){.thumbnail}
Kun tiedot on vahvistettu, näkyviin tulee vahvistusviesti:

![](images/img_3033.jpg){.thumbnail}
Toimenpiteessä voi kulua jonkin aikaa lisättävien jäsenten määrästä riippuen.


## Vie jäsenlistasi CSV-tiedostoon

- Klikkaa "vie jäsenet CSV-tiedostoon" luodaksesi jäsentiedot sisältävän CSV-tiedoston. Esimerkissä toiminto ei ole mahdollinen, sillä yhtään jäsentä ei ole lisätty.




## Liity sähköpostilistalle
Mikäli joku haluaa littyä postituslistallesi, hänen tarvitsee vain lähettää viesti osoitteeseen: 
```
sähköpostilistan_nimi-subscribe@verkkotunnuksesi.com
```




## Eroaminen postituslistalta
Jos jäsen haluaa erota postituslistalta, hänen tarvitsee vain lähettää viesti osoitteeseen: 
```
sähköpostilistasi_nimi-unsubscribe@verkkotunnuksesi.com
```




## Virheelisten osoitteiden automaattinen poisto
On hyvä tietää, että järjestelmä ei poista jäsentä listalta vain yhden virheilmoituksen jälkeen (viestiä ei pystytä toimittamaan, olematon osoite...) Sen sijaan se odottaa noin 12 päivää viimesestä lähetyksen epäonnistumisesta, jonka jälkeen jäsenelle lähetetään "ilmoitus"-viesti.

Viestissä ilmoitetaan puuttuvien viestien tiedot. Mikäli ilmoitusviestiäkään ei voida toimittaa, odottaa järjestelmä uudestaan 12 päivää ja lähettää sitten testiviestin. Jos senkin lähetyksestä tulee virheilmoitus, poistetaan jäsen jäsenlistasta.


## Viestin lähetys ilman otsikkoa
Postituslistalle lähtettävässä viestissä on ehdottomasti oltava otsikko. Ilman sitä muodostuu automaattisesti virhe, ja virheilmoitusviesti lähetetään viestin lähettäjälle.

Ilman otsikkoa lähetetyn viestin lähettäjä saa siis alla olevan näköisen paluuviestin:


```
Hi. This is the qmail-send program at mx1.mail.ovh.net.
I'm afraid I wasn't able to deliver your message to the following addresses.
This is a permanent error; I've given up. Sorry it didn't work out.

<newsletter@testinterne.ovh>:

ezmlm-reject: fatal: Sorry, I don't accept message with empty Subject (#5.7.0)
```




## Viestin lähetys postituslistalle piilokopiona
Kun postituslistalle lähetetään viesti, on listan osoitteen oltava ehdottasti kentässä "To" , tai kentässä "Copy" (Cc).

Mikäli osoite syötetään kenttään "Piilokopio " seuraa tästä virheviesti.

Lähettäjä saa siis vastauksena virheilmoitusviestin:


```
Hi. This is the qmail-send program at mx1.mail.ovh.net.
I'm afraid I wasn't able to deliver your message to the following addresses.
This is a permanent error; I've given up. Sorry it didn't work out.

<newsletter@testinterne.ovh>:

ezmlm-reject: fatal: List address must be in To: or Cc: (#5.7.0)
```




## Miten voin personoida postituslistani sisältöä?
Suurinta osaa postituslistan teksteistä on mahdollista personoida. Modeaattorina sinun on lähetettävä tyhjä viesti osoitteeseen sähköpostilistan_nimi-edit@verkkotunnuksesi.com.


- Esimerkki: Sähköpostilistasi on newsletter@testinterne.ovh. Lähetä moderaattorin sähköpostiosoitteesta viesti osoitteeseen newsletter-edit@config-support.com.


Saat sähköpostin, jossa on ohjeet muutosten tekoon.

Ohessa lista tiedostoista, joissa on vastaustekstejä ja lyhyt kuvaus sisällön käytöstä. Tiedoston muokkaamiseksi, lähetä viesti osoitteeseen lähetä-edit.tiedosto, korvaten "tiedosto" tiedoston nimellä. Muokkausohjeet lähetetään tekstitiedoston mukana.

|Tiedosto|Käyttö|
|bottom|kaikkien vastausvistien alatunniste: yleiset tiedot.|
|digest|säännöllisten uutiskirjeiden hallinnollinen osio.|

|faq|vastaukset listan aiheen usein kysyttyihin kysymyksiin
|get_bad|kun arkistosta puuttuu viestejä.|
|help|yleinen apu (välillä "top" ja "bottom").|
|info|tietoa postituslistasta. Ensimmäin rivi on tiivistelmä.|

mod_help|erityistuki listan moderaattoreille|
|mod_reject|epäonnistuneiden lähetysten lähettäjälle.|
|mod_request|moderaattorille, joka haluaa lähettää viestin.|
|mod_sub|jäsenelle, kun moderaattori on hyväksynyt liittymisen.|
|mod_sub_confirm|moderaattorille uuden littymisen vahvistamiseksi.|
|mod_timeout|pitkään hyväksymättömänä olleen viestin lähettäjälle.|
|mod_unsub_confirm|adminsitraattorille postituslistan eroamispyyntöä varten.|
|sub_bad|jäsenelle, jos vahvistus oli huono.|
|sub_confirm|jäsenelle vahvistamaan pyyntö.|
|sub_nop|jäsenelle uuden liitymisen jälkeen.|
|sub_ok|jäsenelle onnistuneen rekisteröinnin jälkeen.|
|top|jokaisen vastauksen otsikkona.|
|trailer|listään jokaisen osallistumisen jälkeen.|
|unsub_bad|jäsenelle, jos eroamisvahvistus on väärä.|
|unsub_confirm|jäsenelle eroamispyynnön vahvistamiseksi.|
|unsub_nop|ei-jäsenelle eroamispyynnön jälkeen.|
|unsub_ok|entiselle jäsenelle onnistuneen eroamisen jälkeen.|


Esimerkki: Jos haluat muokata sivun oletusalatunnistetta, sinun täytyy lähettää viesti osoitteeseen "newsletter-edit.bottom@config-support.com".

Saat pian uuden sähköpostin, jossa on oheet alatunnisteen personointiin.

