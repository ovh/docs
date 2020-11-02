---
deprecated: true
title: 'IPMI-konsolin käyttö dedikoiduilla palvelimilla'
slug: ipmi-konsolin-kaytto-dedikoidut-palvelimet
excerpt: 'IPMIn avulla voidaan kirjautua dedikoituun palvelimeen ilman ulkopuolisen ohjelmiston käyttöä.'
section: Aluksi
---

**Päivitetty 22.8.2018**

## Tavoite

IPMI-konsolilla (Intelligent Platform Management Interface) on mahdollista muodostaa suora yhteys dedikoituun palvelimeesi ilman ulkopuolista ohjelmistoa (esimerkiksi Terminal tai Putty). Tässä ohjeessa kerrotaan, kuinka käynnistät tämän konsolin.

Huomaa, että tulet törmäämään myös termiin KVM (Keyboard Video and Mouse), joka on erityisesti VPS-palvelinten käyttämä termi tästä ratkaisusta.

## Edellytykset

- Olet kirjautunut [hallintapaneeliin](https://www.ovh.com/auth/?action=gotomanager).


## Käytännössä

Kirjautuminen IPMIin tapahtuu kahdella tavalla, joko Java-sovelmalla (suositeltu) tai selaimella (Serial over LAN).

### Java-sovelmaan kirjautuminen

Jotta Java-sovelma toimii, täytyy Javan olla asennettuna työpisteellesi. Jos näin ei ole, mene [Javan viralliselle sivulle](https://www.java.com/en/download/){.external}.

Klikkaa sitten hallintapaneelisi `IPMI`{.action}-osiossa kohtaa `Java-sovelmalla (KVM)`{.action}:

![IPMI Java initiated](images/java_ipmi_initiate.png){.thumbnail}

Lataa tarjottu tiedosto `kvm.jnlp` ja käynnistä se:

![IPMI Java opening](images/java_ipmi_activation.png){.thumbnail}

Tulet nyt kirjautumissivulle, jossa pyydetään pääkäyttäjän eli `root`-tunnukset kuten ohjauspaneelin tai ulkoisen ohjelmiston kautta kirjauduttaessa:

![IPMI Java login](images/java_ipmi_login.png){.thumbnail}

Tämän jälkeen voit hallinnoida normaalisti palvelintasi.

### Kirjautuminen Serial over LAN (SoL) -selaimella

Vaikka suosittelemme kirjautumista Java-sovelman kautta, on IPMIn käyttö mahdollista myös Serial over LAN -selaimella. Klikkaa tätä varten osiota `IPMI`{.action} `Selaimessasi (SoL)`{.action}:

![IPMI SoL activation](images/sol_ipmi_activation.png){.thumbnail}

> [!warning]
>
> Kirjautuminen SoL-selaimen kautta kestää useita minuutteja, mistä syystä sovelman käyttö on suositeltavaa.
>

### IPMIn testaus ja uudelleenkäynnistys

On mahdollista, ettei IPMI vastaa enää. Jos et pääse sinne, voit tehdä ensiksi testin klikkaamalla kohtaa `Testaa IPMI`{.action} ja näet vianhaun tuloksen:

![IPMI testi](images/ipmi_test.png){.thumbnail}

Jos kaikki on normaalia kuten esimerkkitapauksessa, on kyseessä todennäköisesti paikallinen ongelma (internetyhteys, paikallinen piste). Jos IPMI törmää ongelmiin, voit uudelleenkäynnistää sen klikkaamalla `Uudelleenkäynnistä IPMI`{.action}.

![IPMI testi](images/ipmi_reboot.png){.thumbnail}

Uudelleenkäynnistys kestää joitakin minuutteja.

## Lisää aiheesta

Viesti käyttäjäyhteisömme kanssa osoitteessa: <https://community.ovh.com/en/>.