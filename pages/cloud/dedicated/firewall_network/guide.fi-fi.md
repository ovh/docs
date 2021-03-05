---
deprecated: true
title: 'Firewall Network -palomuurin konfigurointi'
slug: firewall-network
excerpt: 'Katso, kuinka Firewall Network -palomuuri konfiguroidaan'
section: 'Verkko & IP'
---

**Päivitetty 30.8.2018**

## Tavoite

Globaalin infrastruktuurinsa ja asiakkaidensa palvelinten suojaamiseksi OVH tarjoaa **Anti-DDoS-ratkaisuun** integroidun Firewall Network -palomuurin. Se on lisäoptio, jonka avulla voidaan rajoittaa palvelun alttiutta joutua julkisesta verkosta tulevien verkkohyökkäysten kohteeksi.

**Tässä ohjeessa kerrotaan, kuinka Firewall Network -palomuuri konfiguroidaan.**


> [!primary]
>
> Lisätietoa Anti-DDoS-ratkaisustamme löydät täältä: <https://www.ovh-hosting.fi/anti-ddos/>
> 

![VACin tarkempi kuvaus](images/vac-inside.png){.thumbnail}


## Edellytykset

- Sinulla on palvelu, johon sisältyy Firewall Network ([dedikoitu palvelin](https://www.ovh-hosting.fi/dedikoidut_palvelimet/){.external}, [virtuaalipalvelin](https://www.ovh-hosting.fi/vps/){.external}, [Public Cloud -instanssi](https://www.ovh-hosting.fi/public-cloud/instances/){.external}, [Private Cloud](https://www.ovh-hosting.fi/private-cloud/){.external}, [Fail-over IP -osoite](https://www.ovh-hosting.fi/dedikoidut_palvelimet/ip_failover.xml){.external}, jne.)
- Olet kirjautunut [hallintapaneeliin](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie){.external}.


## Käytännössä

### Firewall Network -palomuurin aktivointi

> [!primary]
>
> Firewall Network suojaa yhteen koneeseen liittyvät IP-osoitteet. Jokainen IP-osoite on siis konfiguroitava erikseen, mitään palvelimen yleistä konfigurointia ei ole mahdollista tehdä.
> 

Kun olet kirjautunut [hallintapaneeliin](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie){.external}, mene `IP`{.action}-osioon ja klikkaa `...`{.action} halutun IPv4-palomuurin aktivoimiseksi.

![Firewall Network -palomuurin aktivointi](images/firewall_creation.png){.thumbnail}

Tämän jälkeen sinulta pyydetään vahvistusta.

![Vahvistus](images/creationvalid.png){.thumbnail}

Klikkaa sitten `Aktivoi palomuuri`{.action} (1) ja valitse `Palomuurin konfigurointi`{.action} (2) aloittaaksesi asetusten määrittämisen.

![Konfiguroinnin aktivointi](images/activationconfig.png){.thumbnail}

Voit asettaa jopa **20 sääntöä IP-osoitetta kohti**.

> [!warning]
>
> Palomuuri aktivoituu automaattisesti jokaisessa hajautetussa palvelunestohyökkäyksessä eikä sitä voida kytkeä pois päältä ennen hyökkäyksen päättymistä. Tästä syystä on tärkeää pitää palomuurin säännöt ajan tasalla.
> Oletuksena sinulla ei ole konfiguroituja sääntöjä, joten kaikki yhteydet voidaan muodostaa.
> Jos sinulla on niitä, muista tarkistaa ne säännöllisesti, vaikka poistaisitkin palomuurin käytöstä.
> 


> [!primary]
>
> - UDP-fragmentointi on oletuksena estetty (DROP). Mikäli käytät Firewall Network -palomuurin aktivoinnin yhteydessä VPN-yhteyttä, muista konfiguroida oikein maksimaalinen sanomansiirtoyksikkösi (MTU). Esimerkiksi OpenVPN:ssä voit rastittaa kohdan `MTU test`{.action}.
> - Firewall Network -palomuuria ei huomioida OVH:n verkossa. Asetetut säännöt eivät siis vaikuta sisäisen verkon yhteyksiin.
>


### Firewall Network -palomuurin konfigurointi

Lisää sääntö klikkaamalla kohtaa `Lisää sääntö`{.action}.

![Säännön lisääminen](images/ajoutregle1.png){.thumbnail}

Voit valita jokaiselle säännölle:

- prioriteetin (asteikolla 0 - 19, jossa 0 on ensimmäisenä käytettävä sääntö jne.)
- toiminnon (`Hyväksytty`{.action} tai `Hylätty`{.action})
- protokollan
- IP-osoitteen (valinnainen)
- lähdeportin (vain TCP)
- kohdeportin (vain TCP)
- TCP-lisäoptiot (vain TCP)

![Tiedot säännön lisäämisestä](images/ajoutregle4.png){.thumbnail}


> [!primary]
>
> - Prioriteetti 0: on suositeltavaa sallia TCP-protokolla kaikilla IP-osoitteilla `established`{.action}-lisäoptiolla. Sillä voidaan tarkistaa, että paketti kuuluu aiemmin avattuun istuntoon (jo käynnistettyyn). Jos et salli sitä, palvelin ei vastaanota TCP-protokollan vastauksia SYN/ACK-kyselyihin.
> - Prioriteetti 19: kaikkien IPv4-protokollien esto mikäli yhtään sääntöä ennen 19\. sääntöä (viimeinen mahdollinen sääntö) ei ole täytetty.
> 

### Esimerkki konfiguraatioista

Jotta jätät avoimeksi ainoastaan SSH (22), HTTP (80), HTTPS (443) ja UDP (10000) -portit ICMP:n hyväksymällä, on seurattava seuraavia sääntöjä:

![Esimerkki konfiguraatioista](images/exemple.png){.thumbnail}

Säännöt ovat kronologisessa järjestyksessä nollasta (ensimmäisenä luettava sääntö) 19\. sääntöön (viimeisenä luettu sääntö). Ketjun läpikäynti keskeytyy sillä hetkellä, kun jotakin sääntöä sovelletaan saapuneeseen pakettiin.

Esimerkki porttiin 80/TCP tarkoitettu paketti napataan säännön 2 mukaisesti eikä seuraavia sääntöjä enää testata. Porttiin 25/TCP osoitettu paketti pysähtyy vasta viimeiseen sääntöön (19), joka estää sen, sillä OVH ei salli mitään viestintää porttiin 25 edellisissä säännöissä.

> [!warning]
>
> Mikäli Anti-DDoS-mitigaatio aktivoituu, aktivoituvat myös Firewall Network -säännöt, vaikka olisit kytkenyt ne pois päältä. Mikäli palomuuri kytketään pois päältä, muista poistaa säännöt.
> 

## Lue lisää aiheesta

Viesti käyttäjäyhteisömme kanssa osoitteessa: <https://community.ovh.com/en/>.