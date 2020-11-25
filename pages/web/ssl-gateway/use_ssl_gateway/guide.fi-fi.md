---
deprecated: true
title: SSL Gateway -palvelun kaytto
slug: ssl-gateway-palvelun-kaytto
legacy_guide_number: 2370
excerpt: Suojaa verkkosivusi yhteydet
---


## Yleista

### Edellytykset


> [!primary]
>
> - Olet tilannut SSL Gateway -palvelun <https://docs.ovh.com/fi/ssl-gateway/ssl-gateway-palvelun-tilaaminen/>.
> - Sinulla on käyttöoikeus Sunrise-hallintapaneeliin.
>

## Kaytto
Seuraavaksi katsomme, kuinka SSL Gateway -palvelua käytetään


### Palvelun konfigurointi
- Kirjaudu [hallintapaneeliin](https://www.ovh.com/manager){.external}
- Klikkaa sitten `Sunrise`{.action} -osiota

![sunrise-painike](images/4.PNG){.thumbnail}

- Klikkaa sitten `SSL Gateway`{.action} nähdäksesi palvelun.

![ssl gateway -painike](images/5.PNG){.thumbnail}

- Valitse konfiguroitava tuote.

![kaupallinen sivu](images/6.PNG){.thumbnail}

- Tulet seuraavaksi tuotteesi hallintasivulle.

![global config](images/7.PNG){.thumbnail}

- Tietojen kuvaus

![tietojen osa](images/8.PNG){.thumbnail}


|IPv4|OVH:n yhdyskäytävän IPv4-osoite, johon sivusi täytyy osoittaa|
|IPv6|OVH:n yhdyskäytävän IPv6-osoite, johon sivusi täytyy osoittaa|
|Zone|SSL Gateway -palvelusi IP-osoitteen maantieteellinen alue|
|lähtevä IPv4|OVH:n IPv4-osoite, joka yhdistää palvelimellesi|
|Tuote|Tilattu tuotetyyppi|
|Dokumentaatio|Linkki tähän käyttöohjeeseen|
|Tila|SSL Gateway -palvelusi tila|
|Vanhentumispäivä|SSL Gateway -palvelusi vanhentumispäivä|
|Irtisanominen|Painike SSL Gateway -palvelun irtisanomista varten|
|Migraatio Advanced-tason tuotteeseen|Tekee migraation Free-tason tuotteesta Advanced-tasolle|

- Konfiguraation kuvaus

![conf-osa](images/9.PNG){.thumbnail}


|Konfigurointi|Painike, jolla voidaan muokata SSL Gateway -palvelusi konfiguraatiota|
|HSTS [[1]](#id5){.note-ref #id1}|Pakottaa selaimesi yhdistämään seuraavina kertoina HTTPS-muodossa sivullesi|
|Reverse|Mahdollistaa isäntäpalvelimen nimen asettamisen SSL Gateway IP-osoitteeseesi|
|HTTPS-uudelleenohjaus [[2]](#id6){.note-ref #id2}|Uudelleenohjaa vierailijan verkkosivusi HTTPS-versioon kun se yhdistää HTTP-muodossa|
|HTTPS-palvelin [[3]](#id7){.note-ref #id3}|Aktivoi HTTPS SSL Gateway -palvelimen ja omasi välillä|
|Lähde -IP-osoitteiden rajoitus|Jos tämä kenttä on täytetty, vain tietyt IP-osoitteet tai verkot voivat yhdistää SSL Gateway -palveluun|
|Cipher-konfigurointi [[4]](#id8){.note-ref #id4}|Voit valita tietoturvatason SSL/TLS-varmenteellesi|



> [!primary]
>
> [[1]](#){.note-ref #id5} - ([1](#id1){.fn-backref}) 
> <cite>Lisätietoa HSTS-protokollasta</cite>
> 
> [[2]](#){.note-ref #id6} - ([1](#id2){.fn-backref}) 
> <cite>Kun sivusi toiminta on varmistettu HTTPS-protokollalla, on mahdollista uudelleen ohjata koko HTTP-liikenne HTTPS-muotoon.
> On kuitenkin suositeltavaa odottaa 24 tuntia verkkotunnuksen ohjaamisesta kohti SSL Gateway -palvelua ennen tämän uudelleen ohjaamisen tekemistä. Näin sivusi vierailijoilla on varmasti uusi toimiva nimipalvelimen konfigurointi.</cite>
> 
> [[3]](#){.note-ref #id7} - ([1](#id3){.fn-backref}) 
> <cite>Mahdollistaa yhteyden suojaamisen alusta loppuun. SSL Gateway -palvelin yhdistää palvelimesi HTTPS:n standardiporttiin 443. Huomio, tämän valinnan aktivoiminen edellyttää SSL/TLS-varmenteen omistamista palvelimellasi.  Ilman sitä, sivusi ei toimi.  Palvelimen varmenteen ei kuitenkaan tarvitse välttämättä olla uusittu.</cite>
> 
> [[4]](#){.note-ref #id8} - ([1](#id4){.fn-backref}) 
> <cite>Korkein taso suojaa parhaiten, mutta ei toimi vanhimmilla selaimilla.</cite>
>

[Lisätietoa cipher-algoritmeista](https://en.wikipedia.org/wiki/Cipher){.external}


### Verkkotunnuksen konfigurointi
Seuraava lohko sisältää neljä kuvaketta:

- **Verkkotunnukset**
- **Palvelimet**
- **Tehtävät**
- **Grafiikat**


![Verkkotunnukset-kuvake](images/10.PNG){.thumbnail}

**“Verkkotunnukset”**-kuvakkeella voit lisätä ja poistaa verkkotunnuksia tai aliverkkotunnuksia SSL Gateway -palvelustasi.

- Klikkaa `+Verkkotunnus`{.action} lisätäksesi verkkotunnuksen tai aliverkkotunnuksen.
    - 

> [!faq]
>
> Sinulla on **Free** -tuote
>> 
>> Sinulla voi olla ainoastaan yksi **verkkotunnus** sekä sen **“www”-aliverkkotunnus** sekä toinen valitsemasi **aliverkkotunnus**:
>> 
>> 
>> 
>> > [!primary]
>> >
>> > |---|---|
>> > |
>> > Verkkotunnus
>> > |
>> > example.com
>> > |
>> > |
>> > aliverkkotunnus www
>> > |
>> > www.example.com
>> > |
>> > |
>> > Valitsemasi aliverkkotunnus
>> > |
>> > blog.example.com
>> > |
>> > 
>> > 
>> 

>> 
>> > [!warning]
>> >
>> > - Free-tuote:
>> > 
>> > Vain kolmannen tason verkkotunnukset (www.example.org.) tai sitä alemmat ovat hyväksyttyjä.
>> > 
>> 
>>         - Valitse haluamasi tunnus ja vahvista klikkaamalla `Lisää`{.action}.

![free-verkkotunnuksen lisääminen](images/11.PNG){.thumbnail}

>
    - 

> [!faq]
>
> Sinulla on **Advanced** -tuote
>> 
>> Voit lisätä minkä tahansa aktiivisen verkkotunnuksen tai aliverkkotunnuksen.
>> 
>> 
>> 
>> > [!primary]
>> >
>> > - Advanced-tuote:
>> > - Neljännen tason (blog.suomi.esimerkki.org) ja ylemmät ovat hyväksyttyjä.
>> > 
>> > 
>> 
>>         - Valitse haluamasi tunnus ja vahvista klikkaamalla `Lisää`{.action}.

![advanced-verkkotunnuksen lisääminen](images/12.PNG){.thumbnail}

>


> [!warning]
>
> Kun lisäät verkkotunnuksen tai aliverkkotunnuksen, saat sähköpostitse ohjeet niiden ohjaamiseen kohti SSL Gateway -palvelun IP-osoitetta. Muutos on tehtävä kolmen päivän kuluessa.
> Tämä toimenpide on välttämätön, jotta SSL/TLS-varmenteen luominen voidaan vahvistaa.
> 


**“Palvelimet”**-kuvakkeesta voit hallita verkkosivuasi ylläpitävän palvelimen tai palvelinten IP-osoitteita.

- Klikkaa `+Palvelin`{.action} lisätäksesi IP-osoite sekä portti, joka vastaa sivuasi ylläpitävää palvelinta.

![palvelimet-kuvake](images/13.PNG){.thumbnail}

    - 

> [!faq]
>
> Sinulla on **Free** -tuote
>> 
>> Sinulla voi olla vain yksi IP/PORT-osoite
>> 
>> 
>
    - 

> [!faq]
>
> Sinulla on **Advanced** -tuote
>> 
>> Voit lisätä jopa kolme IP/PORT-osoitetta verkkotunnuksillesi tai aliverkkotunnuksillesi.
>> 
>> 
>> 
>> > [!primary]
>> >
>> > Jos ilmoitat useamman IP/PORT-osoitteen, SSL Gateway -palvelusi jakaa liikenteen Round Robin -järjestelmällä.
>> > Lisätietoa Round Robin -nimipalvelusta
>> > 
>> 
>>         - Valitse haluamasi tunnus ja vahvista klikkaamalla `Lisää`{.action}.

![advanced IP/PORT osoitteiden-lisääminen (sisäinen)](images/15.PNG){.thumbnail}

>


> [!warning]
>
> Tällä hetkellä IPv6-osoitteita ei ole mahdollista lisätä palvelimille.
> Tämä ei kuitenkaan haittaa, sillä verkkotunnuksesi tai aliverkkotunnuksesi voi osoittaa IPv6-muodossa SSL Gateway -palveluusi.
> SSL Gateway palvelu muuntaa seuraavaksi IPv6-liikenteen palvelimesi IPv4-osoitteeseen läpinäkyvällä tavalla.
> 


Kuvake **“Tehtävät”** näyttää SSL Gateway -palvelussa meneillään olevat operaatiot


![tehtävät-kuvake](images/13-bis.PNG){.thumbnail}



> [!warning]
>
> Jos havaitsemme, että verkkotunnuksesi tai aliverkkotunnuksesi ei osoita vielä SSL Gateway -palvelun IP-osoitteeseen ei SSL/TLS-varmennetta luoda vielä.
> Yhdistäminen on kuitenkin mahdollista “HTTP”-muodossa. Tässä tapauksessa “HTTP”-merkki on näkyvissä kuvakkeessa “Tietueet”.
> 
> ![http only](images/14.PNG){.thumbnail}
>
**“Grafiikat”** näyttää SSL Gateway -palvelussa suoritettujen pyyntöjen ja yhteyksien määrän sekuntia kohti.


![mittaritiedot-kuvake](images/17.PNG){.thumbnail}

- 

> [!faq]
>
> Sinulla on **Free** -tuote
>> 
>> Voit katsoa mittaritietoja 24 tunnin jaksolta.
>> 
>> 
>
- 

> [!faq]
>
> Sinulla on **Advanced** -tuote
>> 
>> Voit katsoa mittaritietoja kuukauden käsittävältä jaksolta.
>> 
>> 
>


## SSL-varmenteen uusinta

### Tarkeaa


> [!primary]
>
> Let’s Encrypt -varmenteen uusimiseksi verkkotunnuksen tai aliverkkotunnuksen on osoitettava SSL Gateway -palvelun IP-osoitteeseen.
> - Mikäli robottimme havaitsevat seitsemän päivää ennen SSL/TLS-varmenteen uusimista, ettei näin ole, lähetämme sinulle sähköpostiviestin. Sinulla on tämän jälkeen kolme päivää aikaa muutoksen tekemiseen.
> - Mikäli muutosta ei ole tehty kolmen päivän kuluessa, varmennetta ei uusita. Tällöin se täytyy generoida uudelleen käsin tämän painikkeen avulla:
> 
> ![Regenerate SSL](images/16.PNG){.thumbnail}
> 
>

## Vinkkeja

### Lahdeosoitteen korjaaminen lokitiedoissa

#### Esittely
Kun asiakas vierailee sivullasi, hän yhdistää SSL Gateway -palveluun HTTPS-muodossa. Sitten SSL Gateway seuraa pyyntöä palvelimellesi purettuaan ensin sen salauksen ja skannattuaan sen hyökkäysten varalta.   Kaikki palvelimellesi tulevat pyynnöt tulevat siis SSL Gateway -palvelusta.

Jotta voit seurata vierailijoidesi osoitteita, SSL Gateway lisää automaattisesti nämä HTTP-standardiotsakkeet:

- X-Forwarded-For ja X-Remote-Ip: Asiakkaan osoite SSL Gateway -palvelun näkemänä.
- X-Forwarded-Port ja X-Remote-Port: Asiakkaan lähdeportti SSL Gateway -palvelun näkemänä.

Koska vilpillinen asiakas voi väärentää nämä kentät, niitä ei pidä huomioida elleivät ne tule luotettavasta lähteestä kuten SSL Gateway -palvelusta. SSL Gateway -palvelun käyttämä lähdeosoitteiden lista löytyy:

- Sunrise-hallintapaneelista
- Kohdasta SSL Gateway
- Kentässä “lähtevä IPv4”

Tämän oppaan kirjoitushetkellä nämä osoitteet ovat **213.32.4.0/24** ja **144.217.9.0/24**. Muita osoitteita saatetaan lisätä tulevaisuudessa.

Mikäli palvelimesi tukee tällaista mahdollisuutta, se voidaan konfiguroida huomioimaan automaattisesti tämä tieto SSL Gateway -palvelun IP-osoitteen sijasta.


#### Apache
- Luo alla oleva tiedosto:
/etc/apache2/conf-available/remoteip.conf
- Lisää seuraavat rivit:

```bash
# Trust X-Forwarded-For headers from the SSL Gateway
# See https://www.ovh.com/manager/sunrise/sslGateway/index.html#/sslGateway for an up to date list
RemoteIPHeader X-Forwarded-For
RemoteIPInternalProxy 213.32.4.0/24
```


Voit nyt korvata muuttujat %h muuttujilla %a Apachen konfiguraation LogFormat direktiiveissä.

- Kun konfigurointi on valmis, jäljellä on vain seuraavien komentojen aktivointi:

```bash
#Aktivoi moduuli ja sitten konfigurointi
a2enmod remoteip
a2enconf remoteip

#Uudelleen käynnistää Apachen moduulin huomioimiseksi (reload on riittävä konfigurointia varten)
service apache2 restart
```


Lisätietoa tästä Apachen toiminnallisuudesta löydät [virallisesta dokumentaatiosta](https://httpd.apache.org/docs/current/en/mod/mod_remoteip.html){.external}.


#### Nginx
- Avaa suojattavaa sivua vastaava konfigurointitiedosto. Se löytyy yleensä täältä:
/etc/nginx/sites-enabled
- Lisää seuraavat rivit osioon palvelin:

```bash
# Trust X-Forwarded-For headers from the SSL Gateway
# See https://www.ovh.com/manager/sunrise/sslGateway/index.html#/sslGateway for an up to date list
set_real_ip_from 213.32.4.0/24;
real_ip_header X-Forwarded-For;
```


Lisätietoa tästä Nginx-toiminnallisuudesta löydät [virallisesta dokumentaatiosta](http://nginx.org/en/docs/http/ngx_http_realip_module.html){.external}.