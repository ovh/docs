---
deprecated: true
title: 'Sähköpostiosoitteen konfigurointi Gmail-verkkokäyttöliittymässä'
slug: jaettu-sahkoposti-ohje-ovh-sahkopostin-konfigurointi-gmail-kayttoliittymassa
excerpt: 'Opi konfiguroimaan MX Plan -sähköpostiosoite Gmail-verkkokäyttöliittymässä'
section: 'Muut sähköpostiohjelmat'
---

**Päivitetty 3.7.2018**

## Tavoite

MX Plan -sähköpostiosoitteita voidaan konfiguroida erilaisilla yhteensopivilla sähköpostiohjelmistoilla ja verkkokäyttöliittymillä. Näin voit lähettää ja vastaanottaa viestejä haluamallasi laitteella tai käyttöliittymällä.

**Opi konfiguroimaan MX Plan -sähköpostiosoite Gmail-verkkokäyttöliittymässä.**

> [!warning]
>
> OVH tarjoaa käyttöösi palveluja, joiden konfigurointi, hallinta ja vastuu kuuluvat sinulle. Tehtävänäsi on siis varmistaa palvelun kunnollinen toiminta.
> 
> Tämän ohjeen tarkoituksena on auttaa sinua yleisimmissä tehtävissä. Suosittelemme ottamaan kuitenkin yhteyttä erikoistuneeseen palveluntarjoajaan ja/tai palvelun kehittäjään, mikäli kohtaat hankaluuksia. Me emme voi tarjota avustusta asiassa. Lisätietoa tämän ohjeen kohdasta “Lisää aiheesta”.
> 

## Edellytykset

- MX Plan -sähköpostiosoite (sisältyy MX Plan -tuotteeseen tai [OVH:n webhotellituotteeseen](https://www.ovh-hosting.fi/webhotelli/){.external}).
- Sinulla on määritettävän OVH:n sähköpostiosoitteen käyttäjätunnukset.
- Sinulla on tunnukset sille Gmail-tilille, jolle haluat määrittää OVH:n sähköpostiosoitteen.

> [!primary]
>
> Tämä dokumentaatio on toteutettu Gmailin uudessa käyttöliittymässä. Jos kuvat eroavat omasta versiostasi, ohjeita voi silti seurata, sillä ne ovat samat.
>

## Käytännössä

### 1. vaihe: Lisää OVH-tili Gmail-käyttöliittymään

Mene selaimellasi Gmail-verkkokäyttöliittymään. Kun olet siellä, syötä Gmail-tilisi tiedot ja kirjaudu sisään.

Kun olet kirjautunut käyttöliittymään, klikkaa hammasrattaan kuvaa ja sitten `Asetukset`{.action}. Klikkaa näkyviin tulevalla sivulla välilehteä `Tilit ja tuonti`{.action}. 

![mxplan](images/configuration-gmail-web-step1.png){.thumbnail}

Klikkaa kohdan `Lue sähköpostit muiden tilien kautta` vieressä `Lisää sähköpostitili`{.action}. Syötä avautuvaan ikkunaan OVH:n sähköpostiosoitteesi ja klikkaa sitten `Seuraava`{.action}. Valitse `Tuo sähköpostit toiselta tililtä (POP3)`{.action}, klikkaa sitten uudestaan `Seuraava`{.action}.

![mxplan](images/configuration-gmail-web-step2.png){.thumbnail}

Ilmoita nyt OVH:n sähköpostiosoitteesi POP-palvelimen (saapuvan postin palvelin) asetukset:

|Tieto|Kuvaus| 
|---|---| 
|Käyttäjänimi|Syötä **täydellinen** sähköpostiosoite.|  
|Salasana|Syötä sähköpostiosoitteen salasana.|
|POP-palvelin|Syötä palvelin “ssl0.ovh.net”.|
|Portti|Valitse portti “995”.|

Koskien valintoja, joita voit rastittaa:

- **“Säilytä haetun viestin kopio palvelimella”**: suosittelemme tämän ruudun rastittamista, jos haluat säästää kopiot OVH:n sähköpostiosoitteen vastaanottamista viesteistä palvelimillamme.

- **“Käytä aina suojattua yhteyttä (SSL), kun haet sähköposteja”**: varmista, että tämä kohta on rastitettu, jotta OVH:n sähköpostiosoitteeseesi voidaan muodostaa yhteys.

- **“Lisää viestitieto saapuviin viesteihin”**: tällä voit lisätä viestitiedon OVH:n sähköpostiosoitteesta Gmailiin tuotaviin viesteihin.

- **“Arkistoi saapuvat viestit (kulkematta saapuneet-kansion kautta)”**: tämän valitsemalla, OVH:n sähköpostiosoitteesta tuotavia viestejä ei näytetä Gmail-tilisi saapuneet-kansiossa.

Kun tiedot on annettu, klikkaa painiketta `Lisää tili`{.action}. Jos syötetyt tiedot ovat oikein, yhteyden muodostaminen sähköpostiosoitteeseen onnistuu. 

![mxplan](images/configuration-gmail-web-step3.png){.thumbnail}

Jos haluat lähettää sähköpostiviestejä OVH:n sähköpostiosoitteella Gmail-käyttöliittymästä, voit nyt rastittaa ruudun `Kyllä, haluan lähettää viestejä tästä osoitteesta`{.action} ja sitten `Seuraava`{.action}. 

Täydennä nyt lähettäjänä näkyvä nimi, kun sähköpostiviestejä lähetetään sähköpostiosoitteella. Rastita sitten ruutu `Kohtele aliaksena`{.action}, ja klikkaa painiketta `Seuraava vaihe`{.action}.

![mxplan](images/configuration-gmail-web-step4.png){.thumbnail}

Ilmoita nyt OVH:n sähköpostiosoitteesi SMTP-palvelimen (lähtevän postin palvelin) asetukset:

|Tieto|Kuvaus| 
|---|---| 
|SMTP-palvelin|Syötä palvelin “ssl0.ovh.net”.|
|Portti|Valitse portti “587”.|
|Käyttäjänimi|Syötä **täydellinen** sähköpostiosoite.|  
|Salasana|Syötä sähköpostiosoitteen salasana.|

Kun tiedot on täytetty, rastita ruutu `Suojattu TLS-yhteys`{.action}, klikkaa sitten painiketta `Lisää tili`{.action}. Jos syötetyt tiedot ovat oikein, yhteyden muodostaminen sähköpostiosoitteeseen onnistuu. 

![mxplan](images/configuration-gmail-web-step5.png){.thumbnail}

Nyt tarvitsee enää vahvistaa tämä lisäys syöttämällä OVH:n sähköpostiosoitteeseen lähetetty vahvistuskoodi. Saat sen kirjautumalla tavalliseen tapaan verkkokäyttöliittymäämme: <https://www.ovh-hosting.fi/mail/> 

Kun vahvistus on tehty, OVH:n sähköpostiosoite näkyy `Tilit ja tuonti`{.action} -välilehdellä, johon menit tämän prosessin alussa.

### 2. vaihe: Käytä sähköpostiosoitetta Gmail-käyttöliittymästä

Kun sähköpostiosoite on konfiguroitu, se on valmis käytettäväksi! Voit nyt lähettää ja vastaanottaa viestejä Gmail-käyttöliittymässäsi.

Lähettääksesi viestin OVH:n sähköpostiosoitteella Gmail-verkkokäyttöliittymästä sinun on valittava viestin kirjoituksen yhteydessä osoite, jolta haluat lähetyksen tapahtuvan. Valinta tehdään kohdan `Lähettäjä`{.action} vieressä olevassa kirjoitusikkunassa.

![mxplan](images/configuration-gmail-web-step6.png){.thumbnail}

Huomaa, että voit käyttää edelleen verkkokäyttöliittymäämme osoitteessa <https://www.ovh-hosting.fi/mail/> OVH:n sähköpostiosoitteeseen kirjautumista varten. Voit kirjautua sinne sähköpostiosoitteen tunnusten avulla.

## Lue lisää aiheesta

Viesti käyttäjäyhteisömme kanssa osoitteessa: <https://community.ovh.com/en/>.