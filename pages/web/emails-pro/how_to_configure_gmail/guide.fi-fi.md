---
deprecated: true
title: 'E-mail Pro -tilin konfigurointi Gmail-verkkokäyttöliittymässä'
slug: konfigurointi-gmail
excerpt: 'Opi konfiguroimaan E-mail Pro -tili Gmail-verkkokäyttöliittymässä'
section: 'Sähköpostiohjelman konfigurointi'
order: 6
---

**Päivitetty 3.7.2018**

## Tavoite

E-mail Pro -tilejä voidaan konfiguroida erilaisilla yhteensopivilla sähköpostiohjelmistoilla ja käyttöliittymillä. Näin voit lähettää ja vastaanottaa viestejä haluamallasi laitteella tai käyttöliittymällä.

**Opi konfiguroimaan E-mail Pro -tili Gmail-verkkokäyttöliittymässä.**

> [!warning]
>
> OVH tarjoaa käyttöösi palveluja, joiden konfigurointi, hallinta ja vastuu kuuluvat sinulle. Tehtävänäsi on siis varmistaa palvelun kunnollinen toiminta.
> 
> Tämän ohjeen tarkoituksena on auttaa sinua yleisimmissä tehtävissä. Suosittelemme ottamaan kuitenkin yhteyttä erikoistuneeseen palveluntarjoajaan ja/tai palvelun kehittäjään, mikäli kohtaat hankaluuksia. Me emme voi tarjota avustusta asiassa. Lisätietoa tämän ohjeen kohdasta “Lisää aiheesta”.
> 

## Edellytykset

- Sinulla on [E-mail Pro -tuote](https://www.ovh-hosting.fi/sahkopostit/email-pro/){.external}.
- Sinulla on määritettävän E-mail Pro -tilin käyttäjätunnukset.
- Sinulla on tunnukset sille Gmail-tilille, jolle haluat määrittää OVH:n E-mail Pro -tilin.

> [!primary]
>
> Tämä dokumentaatio on toteutettu Gmailin uudessa käyttöliittymässä. Jos kuvat eroavat omasta versiostasi, ohjeita voi silti seurata, sillä ne ovat samat.
>

## Käytännössä

### 1. vaihe: Lisää OVH:n E-mail Pro -tili Gmail-käyttöliittymään

Mene selaimellasi Gmail-verkkokäyttöliittymään. Syötä Gmail-tilisi tiedot ja kirjaudu sisään.

Kun olet kirjautunut käyttöliittymään, klikkaa hammasrattaan kuvaa ja sitten `Asetukset`{.action}. Klikkaa näkyviin tulevalla sivulla välilehteä `Tilit ja tuonti`{.action}. 

![emailpro](images/configuration-gmail-web-step1.png){.thumbnail}

Klikkaa kohdan `Lue sähköpostit muiden tilien kautta` vieressä `Lisää sähköpostitili`{.action}. Syötä avautuvaan ikkunaan OVH:n E-mail Pro -osoitteesi ja klikkaa sitten `Seuraava`{.action}. Valitse `Tuo sähköpostit toiselta tililtä (POP3)`{.action}, klikkaa sitten uudestaan `Seuraava`{.action}.

![emailpro](images/configuration-gmail-web-step2.png){.thumbnail}

Ilmoita nyt OVH:n E-mail Pro -osoitteesi POP-palvelimen (saapuvan postin palvelin) asetukset:

|Tieto|Kuvaus| 
|---|---| 
|Käyttäjänimi|Syötä **täydellinen** sähköpostiosoite.|  
|Salasana|Syötä sähköpostiosoitteen salasana.|
|POP-palvelin|Syötä palvelin “pro1.mail.ovh.net”.|
|Portti|Valitse portti “995”.|

Koskien valintoja, joita voit rastittaa:

- **“Säilytä haetun viestin kopio palvelimella”**: suosittelemme tämän ruudun rastittamista, jos haluat säästää kopiot OVH:n E-mail Pro -osoitteen vastaanottamista viesteistä palvelimillamme.

- **“Käytä aina suojattua yhteyttä (SSL), kun haet sähköposteja”**: varmista, että tämä kohta on rastitettu, jotta OVH:n E-mail Pro -osoitteeseesi voidaan muodostaa yhteys.

- **“Lisää viestitieto saapuviin viesteihin”**: tällä voit lisätä viestitiedon OVH:n E-mail Pro -osoitteesta Gmailiin tuotaviin viesteihin.

- **“Arkistoi saapuvat viestit (kulkematta saapuneet-kansion kautta)”**: tämän valitsemalla, OVH:n sähköpostiosoitteesta tuotavia viestejä ei näytetä Gmail-tilisi saapuneet-kansiossa.

Kun tiedot on annettu, klikkaa painiketta `Lisää tili`{.action}. Jos syötetyt tiedot ovat oikein, yhteyden muodostaminen osoitteeseen onnistuu. 

![emailpro](images/configuration-gmail-web-step3.png){.thumbnail}

Jos haluat lähettää sähköpostiviestejä OVH:n E-mail Pro -osoitteella Gmail-käyttöliittymästä, voit nyt rastittaa ruudun `Kyllä, haluan lähettää viestejä tästä osoitteesta`{.action} ja sitten `Seuraava`{.action}. 

Täydennä nyt lähettäjänä näkyvä nimi, kun sähköpostiviestejä lähetetään sähköpostiosoitteella. Rastita sitten ruutu `Kohtele aliaksena`{.action} ja klikkaa painiketta `Seuraava vaihe`{.action}.

![emailpro](images/configuration-gmail-web-step4.png){.thumbnail}

Ilmoita nyt OVH:n E-mail Pro -osoitteesi SMTP-palvelimen (lähtevän postin palvelin) asetukset:

|Tieto|Kuvaus| 
|---|---| 
|SMTP-palvelin|Syötä palvelin “pro1.mail.ovh.net”.|
|Portti|Valitse portti “587”.|
|Käyttäjänimi|Syötä **täydellinen** sähköpostiosoite.|  
|Salasana|Syötä sähköpostiosoitteen salasana.|

Kun tiedot on täytetty, rastita ruutu `Suojattu TLS-yhteys`{.action}, klikkaa sitten painiketta `Lisää tili`{.action}. Jos syötetyt tiedot ovat oikein, yhteyden muodostaminen osoitteeseen onnistuu. 

![emailpro](images/configuration-gmail-web-step5.png){.thumbnail}

Nyt tarvitsee enää vahvistaa tämä lisäys syöttämällä OVH:n E-mail Pro -osoitteeseen lähetetty vahvistuskoodi. Saat sen kirjautumalla tavalliseen tapaan verkkokäyttöliittymäämme: <https://pro1.mail.ovh.net> 

Kun vahvistus on tehty, OVH:n E-mail Pro -osoite näkyy `Tilit ja tuonti`{.action} -välilehdellä, johon menit tämän prosessin alussa.

### 2. vaihe: Käytä E-mail Pro -sähköpostiosoitetta Gmail-käyttöliittymästä

Kun E-mail Pro -tili on konfiguroitu, se on valmis käytettäväksi! Voit nyt lähettää ja vastaanottaa tilisi viestejä Gmail-käyttöliittymässäsi.

Lähettääksesi viestin OVH:n E-mail Pro -osoitteella Gmail-verkkokäyttöliittymästä sinun on valittava viestin kirjoituksen yhteydessä osoite, jolta haluat lähetyksen tapahtuvan. Valinta tehdään kohdan `Lähettäjä`{.action} vieressä olevassa kirjoitusikkunassa.

![emailpro](images/configuration-gmail-web-step6.png){.thumbnail}

Huomaa, että voit käyttää edelleen verkkokäyttöliittymäämme osoitteessa <https://pro1.mail.ovh.net> OVH:n E-mail Pro -osoitteeseen kirjautumista varten. Voit kirjautua sinne sähköpostiosoitteen tunnusten avulla.

## Lue lisää aiheesta

Viesti käyttäjäyhteisömme kanssa osoitteessa: <https://community.ovh.com/en/>.