---
deprecated: true
title: Sähköpostitilin siirto OVH Mail Migrator -työkalulla
slug: exchange-sahkopostitilin-migraatio-ovh-mail-migrator
excerpt: Opi siirtämään sähköpostitilisi OVH:lle Mail Migrator -työkalulla
section: Tilin migraatio
---

**Päivitetty 22.3.2018**

## Tavoite

[OVH Mail Migrator](https://omm.ovh.net/){.external} on OVH:n luoma työkalu. Sen avulla voidaan siirtää sähköpostitilejä OVH:lle. Prosessi ottaa huomioon erilaiset sisältöjen tyypit, kuten sähköpostit, yhteystiedot, kalenterit ja tehtävälistat, kunhan nämä ovat yhteensopivia sähköpostiosoitteidesi kanssa.

**Opi siirtämään sähköpostitilisi OVH:lle Mail Migrator -työkalulla**

## Edellytykset

- Sinulla on OVH:lla sähköpostipalvelu kuten [Exchange](https://www.ovh-hosting.fi/sahkopostit/){.external}, [E-mail Pro](https://www.ovh-hosting.fi/sahkopostit/email-pro/){.external} tai MX Plan (MX Plan -tuotteen kautta tai [OVH:n webhotellituotteeseen](https://www.ovh-hosting.fi/webhotelli){.external} sisältyvänä).
- Sinulla on siirrettävien sähköpostitilien asiakastunnukset (lähdetilit).
- Sinulla on siirrettävät tiedot vastaanottavien OVH:n sähköpostitilien asiakastunnukset (kohdetilit).

## Käytännössä

[OVH Mail Migrator](https://omm.ovh.net/){.external} -työkalu on käytettävissä sivulla <https://omm.ovh.net/>. Se hoitaa kolmen tyyppisiä migraatioita ja mahdollistaa niiden seuraamisen.

|Migraatiotapa|Kuvaus|
|---|---|
|Yksittäinen migraatio|Siirrä sähköpostiosoitteen sisältö toiseen sähköpostiosoitteeseen. Tätä vaihtoehtoa suositellaan yhden tai muutaman sähköpostiosoitteen migraatioon (vaiheet on toistettava jokaiselle siirrettävälle osoitteelle erikseen).|
|Tiedostokohtainen migraatio|Siirrä etukäteen tiedostoon kerätty sähköpostiosoitteen sisältö toiseen sähköpostiosoitteeseen. Tuettuja muotoja ovat PST, ICS ja VCF.|
|Monimigraatio (projektitila)|Mahdollistaa useiden migraatioiden hallitsemisen yhtenä projektina. Tämä vaihtoehto sopii niille, jotka haluavat siirtää huomattavan suuren määrän osoitteita.|

Jatka tämän dokumentaation lukemista projektillesi sopivan migraatiotavan mukaan.

### Yksittäisen migraation toteuttaminen

Mene sivulle <https://omm.ovh.net/>, siirrä kursori yläreunan valikossa välilehdelle `Migraatio`{.action} ja klikkaa sitten `Uusi migraatio`{.action}.

![omm](images/omm-migration-create.png){.thumbnail}

Täytä näkyviin tulevalla sivulla tiedot jokaiseen kohtaan.

- **Tili**: syötä **lähdetilin** ja **kohdetilin ** tiedot. Muistutuksena, että **lähdetilin** tiedot siirretään **kohdetilille**.

|Tieto|Kuvaus|
|---|---|
|Palvelimen tyyppi|Valitse tilejäsi vastaavan palvelimen tyyppi. Jos toinen niistä on OVH:n osoite, **Hosted by OVH (Autodetect)** saattaa mahdollistaa tietojen automaattisen täyttämisen.|
|Palvelimen URL|Syötä tilejäsi ylläpitävän palvelimen nimi. Tämä kenttä voidaan täyttää automaattisesti palvelimen tyyppiä valitessa.|
|Login|Syötä tiliesi täydellinen sähköpostiosoite.|
|Administraattorin tili jaetuilla oikeuksilla|Tämä kenttä näkyy ainoastaan tietyn tyyppisillä palvelimilla.|
|Salasana|Syötä tiliesi salasana.|

- **Valinnat**: valitse siirrettävät elementit. Tiettyjä sisältöjä ei välttämättä ole saatavilla aiemmin valitun palvelimen tyypistä riippuen.

- **Tiedot**: anna sähköpostiosoite, joka vastaanottaa ilmoitukset migraation etenemisestä.

Kun tiedot on annettu, klikkaa painiketta `Käynnistä Migraatio`{.action}. Jos annetut tiedot ovat oikein, migraatio käynnistyy.

Seuraavalla näkyviin tulevalla sivulla on migraation seurannan tiedot. Muista ottaa talteen näkyvissä oleva `Migraation tunnus`{.action} ja odota prosessin päättymistä. Sen kesto vaihtelee siirrettävien kohteiden lukumäärän mukaan. Jos haluat päästä uudestaan tälle seurantasivulle, mene alla olevaan osioon “Yksittäisen migraation seuranta”.

### Yksittäisen migraation seuranta

On olemassa kaksi tapaa päästä yksittäisen migraation seurantaan:

- migraation alkamisesta ilmoittaneen sähköpostiviestin kautta

- työkalun sivulta <https://omm.ovh.net/>, siirtämällä kursori ylälehden valikossa välilehdelle `Migraatio`{.action} ja klikkaamalla sitten `Seuraa/Synkronoi`{.action}. Syötä nyt `Migraatiotunnus`{.action} sekä kyseessä oleva `lähdetili`{.action}.

![omm](images/omm-migration-track.png){.thumbnail}

Seuraavalla sivulla voit seurata migraation etenemistä. Viesti ilmoittaa, onko prosessi alkamassa, käynnissä vai päättynyt. Vaiheesta riippuen seuraavat toimenpiteet ovat mahdollisia:

|Tehtävä toimenpide|Kuvaus|
|---|---|
|Prosessin keskeyttäminen|Peruuttaa migraation. Jo siirretyt elementit säilytetään kohdetilillä.|
|Poista siirretyt elementit|Poistaa kohdetilille jo siirretyt elementit. Voit tyhjentää elementit tietystä synkronointipisteestä alkaen.|
|Synkronoi|Hakee uudet edellisen lähde- ja kohdetilin välisen synkronoinnin yhteydessä siirtämättömät elementit. Tätä voidaan pitää puuttuvien elementtien migraationa kohdetilille lähdetililtä.|

### Tiedostokohtaisen migraation toteuttaminen

Mene sivulle <https://omm.ovh.net/>, siirrä kursori kohtaan `PST/ICS/VCF`{.action} yläreunan valikossa, klikkaa sitten haluamastasi migraatiosta riippuen `Uusi PST-migraatio`{.action}, `Uusi ICS-migraatio`{.action} tai `Uusi VCF-migraatio`{.action}.

Tässä kohtaa sinulla on oltava tiedosto, joka sisältää siirrettävän sisällön.

![omm](images/omm-migration-files.png){.thumbnail}

Täytä näkyviin tulevalla sivulla **kohdetilin** tiedot ja klikkaa sitten painiketta `Käynnistä migraatio`{.action}. Muistutuksena, että PST-, ICS- tai VCF-tiedoston tiedot siirretään **kohdetilille**.

Jos annetut tiedot ovat oikein, sinua pyydetään valitsemaan tiedosto koneeltasi. Klikkaa sitten painiketta `Lataa`{.action} ja odota latautumista, siinä voi kulua jonkin aikaa tiedoston koosta riippuen. Voit nähdä, miten latautuminen etenee nykyiseltä sivulta.

Kun tiedosto on ladattu, syötä uudestaan **kohdetilin** salasana ja klikkaa sitten `Käynnistä migraatio`{.action}. Jos annetut tiedot ovat oikein, voit käynnistää migraation klikkaamalla uudestaan painiketta `Käynnistä migraatio`{.action}.

Seuraavalla näkyviin tulevalla sivulla on migraation seurannan tiedot. Muista ottaa talteen näkyvissä oleva `Migraation tunnus`{.action} ja odota prosessin päättymistä. Sen kesto vaihtelee siirrettävien kohteiden lukumäärän mukaan. Jos haluat päästä uudestaan tälle seurantasivulle, mene alla olevaan osioon “Tiedostokohtaisen migraation seuranta”.

### Tiedostokohtaisen migraation seuranta

On olemassa kaksi tapaa päästä PST-, ICS- tai VCF-tiedostolla tapahtuvan migraation seurantaan:

- migraation alkamisesta ilmoittaneen sähköpostiviestin kautta

- työkalun sivulta <https://omm.ovh.net/>, siirtämällä kursori ylälehden valikossa välilehdelle `Migraatio`{.action} ja klikkaamalla sitten `Seuraa/Synkronoi`{.action}. Syötä nyt `Migraatiotunnus`{.action} sekä kyseessä oleva `kohdetili`{.action}.

![omm](images/omm-migration-track.png){.thumbnail}

Seuraavalla sivulla voit seurata migraation etenemistä. Viesti ilmoittaa, onko prosessi alkamassa, käynnissä vai päättynyt. Vaiheesta riippuen seuraavat toimenpiteet ovat mahdollisia:

|Tehtävä toimenpide|Kuvaus|
|---|---|
|Prosessin keskeyttäminen|Peruuttaa migraation. Jo siirretyt elementit säilytetään kohdetilillä.|
|Poista siirretyt elementit|Poistaa kohdetilille siirretyt elementit.|

### Monimigraation toteuttaminen ja seuranta (projektitila)

Mene sivulle <https://omm.ovh.net/>, siirrä kursori yläreunan valikossa välilehdelle `Projekti`{.action} ja klikkaa sitten `Uusi monimigraatioprojekti`{.action}.

![omm](images/omm-migration-project.png){.thumbnail}

Täytä näkyviin ilmestyvällä sivulla **Uuden projektin** tiedot:

|Tieto|Kuvaus|
|---|---|
|Nimi|Määritä nimi migraatioprojektillesi.|
|Salasana|Määritä salasana projektillesi, jotta voit hallita sitä OVH Mail Migrator -työkalun kautta.|
|Sähköposti|Anna sähköpostiosoite, joka vastaanottaa ilmoitukset migraation etenemisestä.|

Klikkaa sitten `Luo projekti`{.action}. Seuraavaksi näkyviin tulee sivu, jossa voit hallita ja seurata migraatioprojektiasi. Muistathan ottaa talteen **projektin tunnuksen**.

Voit nyt aloittaa tiliesi migraatiot. Sitä varten on käytettävissä useita välilehtiä:

|Välilehti|Kuvaus|
|---|---|
|Jatka|Mahdollistaa projektisi migraatioiden etenemisen seurannan. Painike tarjoaa lisäksi mahdollisuuden asettaa migraatioita odottamaan ja jatkaa niihin myöhemmin uudelleen.|
|Moniluonti|Mahdollistaa useiden migraatioiden lisäämisen jonoon tiedostontuonnin (CSV tai Excel) avulla. Tiedoston on noudatettava erityistä muotoilua, suosittelemme käyttämään annettuja malleja.|
|Lisää|Lisää tili kerrallaan migraatioita jonoon. Voit kuitenkin säilyttää lähde- ja kohdepalvelimet oletusarvona.|
|Lisäpalvelut|Mahdollistaa OVH Mail Migrator työkalussa siirrettävien elementtien personoinnin sekä migraation toteutuksen aikana työkalun suorittamien samanaikaisten kyselyjen määrän muokkaamisen.|
|Kirjautuminen ulos|Poistuu seurantasivulta, näin voit tunnistautua seurataksesi jotakin toista migraatioprojektia.|

Jos haluat päästä uudestaan migraatioprojektin seurantaan mene sivulle <https://omm.ovh.net/>, siirrä kursori yläreunan valikossa välilehdelle `Projekti`{.action} ja klikkaa sitten `Seuraa projektia`{.action}. Syötä `Migraatioprojektin tunnus`{.action} sekä siihen liittyvä `salasana`{.action}.

## Lue lisää aiheesta

Viesti käyttäjäyhteisömme kanssa osoitteessa: <https://community.ovh.com/en/>.