---
deprecated: true
title: Kuormantasauspalvelun hallinnointi hallintapaneelin kautta
slug: kaytto-iplb
excerpt: Yhteenveto tärkeimmistä toiminnoista sekä kuormantasaajan käyttöönotto hallintapaneelin kautta
section: Aluksi
---

## Tavoite

Tämän ohjeen tarkoituksena on auttaa kuormantasaajan käyttöönotossa ensimmäistä kertaa sekä esitellä sen tärkeimmät ominaisuudet.

## Edellytykset

- Käyttöoikeudet OVH:n hallintapaneeliin
- Olet tilannut [Kuormantasaajan](https://www.ovh-hosting.fi/ratkaisut/kuormantasaaja)

## Käytännössä

### Kuormantasauspalvelun hallinnointi hallintapaneelin kautta

Kuormantasauspalvelun hallinnointi onnistuu hallintapaneelin kautta menemällä `Cloud`-osioon (1) ja siellä kohtaan `Kuormantasaaja` (2) vasemman puoleisessa valikossa. Seuraavaksi näet palvelun etusivun:

![Kuormantasaaja](images/lb_main_page.png){.thumbnail}

Palvelun etusivulta löydät seuraavat tiedot:

|Elementti|Toiminto|
|---|---|
|Tila|Yhteenveto kuormantasaajasta, palvelun nimestä, frontend-palvelimista, toiminnassa olevista palvelinfarmeista sekä lisätyistä palvelimista|
|Käyttö|Yhteenveto kuormantasaajan käytöstä|
|Grafiikat|Tässä näet kaaviot, jotka liittyvät palvelusi samanaikaisiin yhteyksiin tai kyselyjen määrään minuuttia kohti|
|Tiedot|Palveluun littyvät IPv4, IPv6 sekä Fail-over IP -osoitteet sekä lähtevien IPv4-osoitteiden määrä (lisätietoa klikkaamalla kolmea pistettä)|
|Konfigurointi|Tässä kohtaa voit räätälöidä tuotteesi nimeä (joka näkyy ylhäällä vasemmanpuoleisessa valikossa). Cipher-algoritmit sekä konesali, jossa kuormantasaajasi sijaitsee, ovat räätälöitävissä.|
|Sopimus|Tuotteen hallinnolliset tiedot|


Lisätäksesi `Frontend-palvelimen`{.action} tai `palvelinfarmeja`{.action} klikkaa niiden painikkeita. Pikavalikko auttaa tämän jälkeen palvelusi jokaisen osan konfiguroinnissa.


### Frontend-palvelinten hallinta

Frontend-palvelinten lisäämistä varten mene `Frontends`{.action}-osioon ja klikkaa `Lisää frontend`{.action}. Pääset tällöin seuraavaan valikkoon:


![Frontendin lisäys](images/add_frontend.png){.thumbnail}

Frontend-palvelimen tiedot:


|Elementti|Toiminto|
|---|---|
|Nimi|Voit halutessasi nimetä frontend-palvelimen. Tämä on erittäin hyödyllistä, kun palvelimia on useita ja haluat tunnistaa ne nopeasti|
|Protokolla|Voit valita HTTP-, HTTPS-, TCP-, SSL TCP- (tai TLS) tai UDP-protokollan|
|Portti|Valitse käytettävä kuunteluportti|
|Konesali|Voit valita konesalisi tai kaikki konesalit frontend-palvelimen luomista varten|
|Oletusfarmi|Jos olet säätänyt useiden farmien asetuksia, voit valita yhden oletuksena jokaiselle frontend-palvelimelle|

Pääset myös edistyneisiin asetuksiin:


![Edistyneet asetukset](images/advanced_frontend.png){.thumbnail}

|Elementti|Toiminto|
|---|---|
|Dedikoitu Fail-over IP|Lista etäpalvelinten Fail-over IP -osoitteista|
|Estä pääsy IP-osoitteisiin|Luettelo jolla voidaan estää etäyhteys kuormantasaajaan (ainoastaan IPv4-yhteydet)|
|HTTP-uudelleenohjaus|HTTP-uudelleenohjauksen URL:n lisäys|
|HTTP-otsikko|HTTP-otsikon lisäys|


### Palvelinfarmien hallinta
Palvelinfarmien lisääminen onnistuu menemällä osioon `Palvelinfarmit`{.action} ja klikkaamalla `Lisää palvelinfarmi`{.action}. Pääset samoihin päävaihtoehtoihin kuin frontend-palvelimilla. Edistyneet valinnat ovat kuitenkin erilaiset:


![Palvelinfarmin lisäys](images/advanced_cluster.png){.thumbnail}

|Elementti|Toiminto|
|---|---|
|Jaon muoto|Voit valita kuormantasaus-IP -osoitteesi jaon muodoksi joko Round-robin, First, Last, Source tai URI:n|
|Istuntojen seuranta|Istuntojen seuranta voi tapahtua evästeillä tai Lähde-IP -osoitteella, jonka voi määrittää tässä|
|Sondi|Sondin valinta ja aktivointi|


### Palvelinten hallinta
Kun palvelinfarmisi on luotu, sinne on vain lisättävä palvelimia. Alla näkyvät lisävalintojen sekä edistyneiden valintojen yksityiskohdat:


![Palvelimen lisäys](images/add_server.png){.thumbnail}
![Palvelimen lisäys](images/add_server_advanced.png){.thumbnail}


|Elementti|Toiminto|
|---|---|
|Nimi|Voit halutessasi nimetä frontend-palvelimen. Tämä on erittäin hyödyllistä, kun palvelimia on useita ja haluat tunnistaa ne nopeasti|
|IPv4-osoite|Palvelimena toimivan palvelun IP-osoitteen lisäys|
|Portti|Palvelimen portti|
|Varapalvelin|Määritä palvelin varapalvelimeksi
|
|Käytä palvelinfarmin saatavuussondia|Valitse käytettäväksi palvelinfarmin luonnin yhteydessä vahvistettu sondi|
|Salaa kyselyt SSL:llä|Salaa kyselyt SSL-varmenteella|
|Evästeet|Lisää räätälöidyn istunnon eväste|
|Varmenneketju|Varmenneketjun lisäys|
|Tasauksen paino|Painon valinta kuormituksen jakoa varten|


### SSL-varmenteiden hallinta
SSL-varmenteiden lisääminen kuormantasaajaan on mahdollista osiossa `SSL-varmenne`{.action}. Valitse kahdesta vaihtoehdosta: Voit tilata SSL-varmenteen OVH:lta tai lisätä ulkopuolisen varmenteen.

#### OVH:n SSL-varmenteet
SSL-varmenteen tilaamista varten riittää, että menet osioon `SSL-varmenne`{.action}, klikkaat sitten `Tilaa SSL-varmenne`{.action} ja seuraat eteenpäin:


![SSL-varmenteen tilaus](images/ordering_ssl.png){.thumbnail}


|Elementti|Toiminto|
|---|---|
|Nimi|Voit halutessasi nimetä frontend-palvelimen. Tämä on erittäin hyödyllistä, kun palvelimia on useita ja haluat tunnistaa ne nopeasti|
|Varmenteen tyyppi|Maksuton (Let's Encrypt), Comodo DV tai Comodo EV (tarkemmat tiedot osoitteessa: https://www.ovh-hosting.fi/ssl)|
|Fully Qualified Domain Name (FQDN)|Kyseiset verkkotunnukset|

#### Ulkopuolisen SSL-varmenteen lisäys
Jos sinulla on entuudestaan oma SSL-varmenne, voit lisätä sen suoraan:


![SSL-varmenteen lisäys](images/external_ssl.png){.thumbnail}


|Elementti|Toiminto|
|---|---|
|Nimi|Voit halutessasi nimetä varmenteesi. Tämä on erittäin hyödyllistä, kun niitä on useita ja haluat tunnistaa varmenteesi nopeasti|
|Yksityinen avain|Kenttä palveluun lisättävää yksityistä avainta varten|
|Varmenne|Kenttä varmenteen lisäämistä varten|
|Ketju|Kenttä juurivarmenteen lisäämistä varten mikäli tarpeellista|


## Lisää aiheesta

Viesti käyttäjäyhteisömme kanssa osoitteessa <https://ovh-hosting.fi/community/foorumi>.
