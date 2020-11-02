---
deprecated: true
title: 'Webhotellin tallennustilan palautus'
slug: palautus-ftp-filezilla-hallintapaneeli
excerpt: 'Opi palauttamaan tiedosto tai webhotellisi koko tallennustila.'
section: 'FTP ja SSH'
---

**Päivitetty 7.9.2018**

## Tavoite

OVH:n webhotellituotteeseen sisältyy pääsy tallennustilaan, jossa voit ylläpitää verkkosivujasi. Voit joutua palauttamaan tallennustilasi tai jonkin sen sisältämän tiedoston monista syistä johtuen, kuten poistettaessa tai muokatessa verkkosivusi halvaannuttavaa tiedostoa.

**Opi palauttamaan tiedosto tai webhotellisi koko tallennustila.**

## Edellytykset

- Sinulla on [webhotellituote](https://www.ovh-hosting.fi/webhotelli/){.external} (ei toimi Cloud webhotellin kanssa).
- Käytetystä varmuuskopiointitavasta riippuen sinulla on pääsyoikeudet webhotellituotteesi hallintaan [hallintapaneelissa](https://www.ovh.com/auth/?action=gotomanager){.external} tai FTP-käyttäjän salasana, jonka avulla voit kirjautua tallennustilaasi. 

## Käytännössä

Varmista ennen aloitusta, että ehdotetut palautuspäivät mahdollistavat webhotellin tallennustilan palauttamisen haluttuna päivänä.

- samana päivänä klo 01.01 aamulla
- edellisenä päivänä klo 01.01 aamulla
- toissa päivänä klo 01.01 aamulla
- edellisenä sunnuntaina klo 02.00 aamulla
- kaksi viikkoa edeltävänä sunnuntaina klo 02.00 aamulla.

OVH ei pysty tarjoamaan tätä vanhempaa varmuuskopiota, mikäli haluaisit hyödyntää sellaista. Käytä verkkosivun varmuuskopiota, jonka olet mahdollisesti itse ottanut aiemmin. 

Määritä lisäksi käytettävä palautustapa:

|Palautustapa|Kuvaus|
|---|---|
|Palautus hallintapaneelissa|Palauttaa koko tallennustilan sisällön. Nykyinen sisältö korvataan kokonaisuudessaan valitun varmuuskopion sisällöllä.|
|Palautus ohjelmistossa tai käyttöliittymässä|Mahdollistaa kirjautumisen tallennustilan varmuuskopioon pelkästään lukutilassa.  Vaikka tämä on hieman teknisempi vaihtoehto, sen avulla voidaan hakea yksi tai useampia tiedostoja menneestä päivämäärästä tuhoamatta samalla koko tallennustilan sisältöä.|

Kun olet valmis, jatka tämän dokumentaation lukemista valitun palautustavan mukaan.

- [“Tallennustilan palautus hallintapaneelissa”](https://docs.ovh.com/fi/hosting/palautus-ftp-filezilla-hallintapaneeli/#tallennustilan-palautus-hallintapaneelissa){.external}.

- “[Tiedoston palautus ohjelmistossa tai käyttöliittymässä](https://docs.ovh.com/fi/hosting/palautus-ftp-filezilla-hallintapaneeli/#tiedoston-palautus-ohjelmistossa-tai-kayttoliittymassa){.external}”.

### Tallennustilan palautus hallintapaneelissa.

Toimenpiteen tekemiseksi kirjaudu [hallintapaneeliisi](https://www.ovh.com/auth/?action=gotomanager){.external}, klikkaa kohtaa `Webhotellit`{.action} vasemman reunan valikossa ja valitse sitten kyseessä oleva webhotelli. Mene lopuksi välilehdelle `FTP-SSH`{.action} ja klikkaa painiketta `Varmuuskopion palautus`{.action}.

![backupftp](images/backupftp-step1.png){.thumbnail}

Valitse näkyviin tulevan ikkunan alasvetovalikosta haluttu palautuspäivä seuraavia tietoja apuna käyttäen:

|Näytetty päivä|Varmuuskopion tekninen päivä|
|---|---|
|P-1|samana päivänä klo 01.01 aamulla.|
|P-2|edellisenä päivänä klo 01.01 aamulla.|
|P-3|toissa päivänä klo 01.01 aamulla.|
|1 viikko|edellisenä sunnuntaina klo 02.00 aamulla|
|2 viikkoa|kaksi viikkoa sitten olevana sunnuntaina klo 02.00 aamulla.|

Kun päivä on valittu, klikkaa painiketta `Seuraava`{.action}. 

![backupftp](images/backupftp-step2.png){.thumbnail}

Käytä hetki aikaa varmistaaksesi ettei yhtään tiedostoa menetetä palautuksen seurauksena. Tällainen voi olla esimerkiksi valitun palautuspäivän jälkeen tallennustilaan asetettu tiedosto. Kuten aiemmin mainittiin, palautus tuhoaa kaikki nykyiset tiedostot ja korvaa ne varmuuskopion tiedostoilla.

Kun olet valmis käynnistämään varmuuskopion, klikkaa painiketta `Vahvista`{.action}.

### Tiedoston palautus ohjelmistossa tai käyttöliittymässä.

Toimenpide kostuu useasta vaiheesta. Varmista, että hallussasi on tallennustilaan kirjautumiseen tarvittava FTP-käyttäjän salasana. 

> [!warning]
>
> Tämä ratkaisu edellyttää osaamista käyttämästäsi sovelluksesta tai käyttöliittymästä. Joitakin menettelyä koskevia tietoja on esitelty alla. Suosittelemme ottamaan kuitenkin yhteyttä erikoistuneeseen palveluntarjoajaan ja/tai käyttöliittymän kehittäjään, mikäli kohtaat hankaluuksia. Me emme voi tarjota avustusta asiassa.
>

#### 1. vaihe: Käytettävän ohjelmiston tai käyttöliittymän määritys

Määrittele ensin ohjelmisto tai käyttöliittymä, jolla kirjaudut tallennustilasi varmuuskopioon. Jos tiedät sen jo, siirry suoraan vaiheeseen kaksi. Muussa tapauksessa suosittelemme käyttämään yhtä kolmesta seuraavasta sovelluksesta:

- **FileZilla-sovelluksen käyttö**: tämä ohjelmisto on ladattava etukäteen sen kehittäjien verkkosivulta. OVH:lla on tarjolla ohje [“FileZilla-ohjelmiston käyttö webhotellin kanssa”](https://docs.ovh.com/fi/hosting/webhotellit_filezilla_kayttoohje/){.external}, josta voit lukea, kuinka sitä käytetään. Se ei kuitenkaan korvaa kehittäjän alkuperäistä dokumentaatiota.

- **Cyberduck-sovelluksen käyttö**: tämä ohjelmisto on ladattava etukäteen sen kehittäjien verkkosivulta. OVH:lla on tarjolla ohje [“Cyberduck-ohjelmiston käyttö webhotellin kanssa”](https://docs.ovh.com/fi/hosting/webhotellit_kayttoohje_cyberduck_mac/){.external}, josta voit lukea, kuinka sitä käytetään. Se ei kuitenkaan korvaa kehittäjän alkuperäistä dokumentaatiota.

- **FTP Explorer -käyttöliittymän käyttö**: käyttöliittymään on kirjauduttava etukäteen [hallintapaneelin](https://www.ovh.com/auth/?action=gotomanager){.external} kautta.  Kun olet kirjautunut, klikkaa kohtaa `Webhotellit`{.action} vasemman reunan valikossa ja valitse sitten kyseessä olevan webhotellin nimi. Mene lopuksi välilehdelle `FTP-SSH`{.action} ja klikkaa painiketta `FTP Explorer`{.action}.

Kun olet valmis jatkamaan menettelyä, jatka seuraavaan vaiheeseen.

![backupftp](images/backupftp-step3.png){.thumbnail}

#### 2. vaihe: Varmuuskopioon kirjautuminen

Valitussa käyttöliittymässä tai ohjelmistossa on kirjauduttava tallennustilaan, jotta haettavaan varmuuskopiotiedostoon päästään. Tätä varten tarvitset FTP-käyttäjänimen, sen salasanan ja FTP-palvelimen hostnamen.

Voit löytää nämä tiedot webhotellisi välilehdeltä `FTP-SSH`{.action}. Jos sinulla ei ole enää salasanaa, mene ohjeisiin, jotka on kuvattu dokumentaatiossa [“FTP-käyttäjän salasanan vaihtaminen”](https://docs.ovh.com/fi/hosting/ftp-kayttajan-salasanan-vaihtaminen/){.external}.

![backupftp](images/backupftp-step4.png){.thumbnail}

Sinun on täydennettävä FTP-pääkäyttäjän salasana päätteellä, joka määrittää kirjautumiskohteena olevan varmuuskopion. Alla olevista ohjeista saat apua haluttuun varmuuskopioon pääsemisessä:

|Varmuuskopion päivä|Lisättävä pääte|Esimerkki täydennetystä käyttäjänimestä|
|---|---|
|samana päivänä klo 01.01 aamulla.|-snap0|ftpkäyttäjä**-snap0**|
|edellisenä päivänä klo 01.01 aamulla.|-snap1|ftpkäyttäjä**-snap1**|
|toissa päivänä klo 01.01 aamulla.|-snap2|ftpkäyttäjä**-snap2**|
|edellisenä sunnuntaina klo 02.00 aamulla.|-snap3|ftpkäyttäjä**-snap3**|
|kaksi viikkoa sitten olevana sunnuntaina klo 02.00 aamulla.|-snap4|ftpkäyttäjä**-snap4**|

Korvaa “ftpkäyttäjän” yleiset tiedot huolellisesti oman pää FTP-käyttäjäsi tiedoilla. Säilytä kuitenkin varmuuskopion halutun päivän määrittävä pääte.

Tapa, jolla tallennustilaan kirjaudutaan vaihtelee käytetyn käyttöliittymän tai ohjelmiston mukaan. Alla näet kuvan, joka esittää yhdistämistä FTP Explorer -käyttöliittymässä.

![backupftp](images/backupftp-step5.png){.thumbnail}

#### 3. vaihe: Haluttujen tiedostojen hakeminen

Kun olet kirjautunut, hae palautettavat tiedostot. Käy sitä varten läpi tallennustilasi sisältö kunnes löydät ne. Menettely vaihtelee käyttämäsi ohjelmiston tai käyttöliittymän mukaan. 

Varmista ennen seuraavaan vaiheeseen siirtymistä, että olet hakenut kaikki palautettavat tiedostot ja kirjaudu sitten ulos tallennustilasta.

#### 4. vaihe: Haluttujen tiedostojen palautus

Kun sinulla on tarvittavat tiedostot, kirjaudu uudelleen tallennustilaasi. Älä kuitenkaan lisää kirjautuessasi päätettä FTP-käyttäjääsi. Kun et lisää päätettä, kirjaudut tallennustilasi nykyiseen sisältöön etkä aiempaan varmuuskopioon.

Kun olet kirjautunut, jäljellä on vain haluttujen tiedostojen palautus. Käy sitä varten läpi tallennustilasi sisältö kunnes löydät halutut tiedostot ja korvaa ne aiemman varmuuskopion tiedostoilla. 

## Lue lisää aiheesta

[FileZilla-ohjelmiston käyttö webhotellin kanssa](https://docs.ovh.com/fi/hosting/webhotellit_filezilla_kayttoohje/){.external}.

[Cyberduck-ohjelmiston käyttö webhotellin kanssa](https://docs.ovh.com/fi/hosting/webhotellit_kayttoohje_cyberduck_mac/){.external}.

Viesti käyttäjäyhteisömme kanssa osoitteessa: <https://community.ovh.com/en/>.