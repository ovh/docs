---
deprecated: true
title: Usein kysytyt kysymykset koskien NAS-palvelimia
slug: ukk-nas
excerpt: Kysyttävää NAS-palvelimista? Tässä usein kysytyt kysymykset
section: NAS
---

**Päivitetty 22.11.2017**

## Tuote

### Mitä tarkoittaa HA-merkintä, kun tilaan NAS-palvelimen OVH:lta?

Lyhenne HA (High Availability) merkitsee sitä, että OVH sitoutuu takaamaan palvelulle korkean saatavuuden. Tämä takuu ilmenee palvelutasosopimuksen (SLA eli Service Level Agreement) muodossa. Sen puitteissa OVH on velvoitettu hyvitykseen, mikäli häiriöstä aiheutuu asiakkaalle palvelukatkos.

### Mistä konesalista voin tilata NAS-HA-palvelimen?

Voit tilata NAS-HA -tuotteen Ranskassa sijaitsevista konesaleistamme (Roubaix, Strasburg, Gravelines) sekä Kanadan konesalistamme. Konesalin valinta tapahtuu tilauksen yhteydessä. HUOMIO: kun tuote on tilattu, konesalia ei voi enää vaihtaa.

### Voiko NAS-HA-palvelinta hallinnoida konfigurointipaneelin kautta?

Kyllä, pääset tähän paneeliin [hallintapaneeliin](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie) osasta `Cloud` ja `Alustat ja palvelut`.

### Voiko NAS-palvelimen kokonaiskapasiteettia kasvattaa?

NAS-HA-palvelimen kapasiteettia ei ole mahdollista kasvattaa tilauksen jälkeen. Tallennustilan kapasiteetin kasvattamiseksi täytyy tietosi siirtää toiselle suuremman kapasiteetin NAS-palvelimelle.

### Mitä tallennuskapasiteetteja on saatavilla?

Tarjoamme seuraavat tallennuskapasiteetit:

- 1,2 TB (tai 1,1 TB käytettävää tilaa)
- 2,4 TB (tai 2,2 TB käytettävää tilaa)
- 3,6 TB (tai 3,2 TB käytettävää tilaa)
- 7,2 TB (tai 6,4 TB käytettävää tilaa)
- 13,2 TB (tai 10 TB käytettävää tilaa)
- 19,2 TB (tai 17 TB käytettävää tilaa)
- 26,4 TB (tai 24 TB käytettävää tilaa)

Nämä kapasiteetit koostuvat jokainen dedikoiduista 1,2 TB:n kokoisista levyistä.

### Ovatko NAS-HA-resurssini jakamattomia?

NAS-HA-palvelimen levyt ovat dedikoituja eikä niitä jaeta muiden kanssa. Muut koneen resurssit ovat jaettuja (RAM, suoritin, kaistanleveys).

**Poikkeustapaus:** jos tilaat 26,4 TB:n tuotteen, ovat isäntäpalvelimen resurssit kokonaisuudessaan sinulle osoitettuja (RAM, suoritin, kaistanleveys).

### Minkä pituiselle jaksolle NAS-HA-palvelimen voi tilata?

Tarjolla olevat tilausjaksot ovat 1, 3, 6 ja 12 kuukautta. Tilausjaksosi päättyessä tilauksesi jatkuu ilman eri toimenpiteitä, mikäli et ole pyytänyt irtisanomista. Voit tehdä sen milloin tahansa tilausjakson aikana [hallintapaneelistasi](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie).

### Onko tilaushetkellä näkyvä kapasiteetti käytettävissä?

Kuten useimmissa tallennusratkaisuissa teoreettinen kapasiteetti eroaa hieman todellisuudessa käytettävissä olevasta kapasiteetista. Osa tilasta tarvitaan levyn käyttämistä varten:

- palvelimella NAS-HA 1,2 TB on käytettävissä 1,1 TB tilaa
- palvelimella NAS-HA 2,4 TB on käytettävissä 2,2 TB tilaa
- palvelimella NAS-HA 3,6 TB on käytettävissä 3,2 TB tilaa
- palvelimella NAS-HA 7,2 TB on käytettävissä 6,4 TB tilaa
- palvelimella NAS-HA 13,2 TB on käytettävissä 10 TB tilaa
- palvelimella NAS-HA 19,2 TB on käytettävissä 17 TB tilaa
- palvelimella NAS-HA 26,4 TB on käytettävissä 24 TB tilaa

Huomioi, että nämä arvot ovat suuntaa antavia ja voivat vaihdella.

## Tuotteen käyttö

### Milloin NAS-HA-palvelinta käytetään?

NAS-HA muodostaa infrastruktuurissa tallennustilan, johon voidaan yhdistÃ¤Ã¤ useita [dedikoituja palvelimia](https://www.ovh-hosting.fi/dedikoidut_palvelimet/), [Private Cloud -tuotteita](https://www.ovh-hosting.fi/private-cloud/) tai [Public Cloud -instansseja](https://www.ovh-hosting.fi/public-cloud/instances/).

Käyttötapoja on monia, mutta OVH:n NAS-palvelimen korkeaa saatavuutta arvostetaan erityisesti seuraavissa tilanteissa:

- Harvoin käytettyjen tietojen tallennus: tarpeellisille tiedoille, joiden on oltava saatavilla jatkuvasti mutta joiden muodostama liikennemäärä ei kuitenkaan ole merkittävä (sopimusehdot, käyttöohjeet jne.)
- “Staattisten” tietojen tallennus: sellaisten tietojen tallennus, joita ei tarvitse muokata säännöllisesti. Tämän ansioista suorituskykyisellä infrastruktuurilla voidaan vapauttaa tallennustilaa hyödyttämään jatkuvasti muuttuvia tai paljon laskentatehoa tarvitsevia tietoja (tietokannat, yritysten sovellukset jne.)
- Hot Backup -ratkaisu: NAS-palvelun korkea saatavuus takaa tietojen saatavuuden jokaisena hetkenä ja mahdollistaa pääsyn (tai uudelleen ohjauksen) tiedostoihin, jotka eivät olisi saatavilla tai olisivat muutoin turmeltuneita.

### Milloin on suositeltavaa valita NAS-HA-palvelu Backup Storagen sijaan?

NAS-HA ja Backup Storage eivät vastaa samanlaisiin käyttötarkoituksiin. Suosittelemme valitsemaan NAS-palvelimen kun staattiset tiedot tarvitsevat datasäilön, johon täytyy olla jatkuva pääsy. Sitä vastoin Backup Storage on varmuuskopiointipalvelu tiedoille, joita ei ole tarkoitus tarkastella säännöllisesti.

Teknisesti tärkeimmät erot ovat seuraavat:

- NAS-HA-palvelimen tiedot tallennetaan dedikoiduillle levyille kun taas Backup Storagen tila on jaettu
- NAS-HA on tallennustila, joka alustetaan toiselle NFS- tai CIFS -tiedonsiirtoprotokollaa käyttävälle palvelimelle. Backup Storage on autonominen tila, johon voidaan liittyä FTP-yhteyden kautta.

### Onko siinä synkronointiominaisuuksia (Type Synology)?

Ei, NAS-HA voidaan alustaa ainoastaan tiedostojärjestelmänä suoraan distribuutioon. Tallennustilan administraattori voi kuitenkin toteuttaa synkronointiprosessin.

### Voiko NAS-HA:n yhdistää samanaikaisesti useampiin palvelimiin?

Kyllä. NAS-palvelun voi saada kommunikoimaan samanaikaisesti useamman OVH:n palvelun kanssa.

### Voiko NAS-HA:an asentaa käyttöjärjestelmän?

Ei, NAS-HA-tuotteisiin ei voida asentaa käyttöjärjestelmää.

### Mitkä protokollat ovat yhteensopivia NAS-HA-tuotteen kanssa?

NAS-HA voidaan alustaa Windows- tai Linux-palvelimelle CIFS (Samba)- tai NFS-protokollan kautta.

### Onko NAS-HA yhteensopiva FTP-protokollan kanssa?

Ei, NAS-HA ei ole yhteensopiva FTP-protokollan kanssa.

### Voiko tallennustilan jakaa osiin?
Kyllä, on tärkeää luoda yksi tai useampi osio käyttösi mukaan. Osioiden luomista ei ole rajoitettu.

## Tuotteen yhteensopivuus

### Onko NAS-HA yhteensopiva OVH:n ulkopuolisten palvelinten kanssa?

Ei, NAS-HA-palveluun voidaan yhdistää vain OVH:n verkosta.

### Missä palveluissa NAS-HA on käytettävissä?

Palvelua voidaan käyttää kaikissa OVH:n tuotteissa, joissa on distribuutio: dedikoiduissa palvelimissa (OVH, So you Start, Kimsufi), Dedicated Cloud -tuotteessa, Public Cloud - sekä VPS-tuotteissa.

### Kuinka NAS-HA-palvelimen pääsyoikeuksia hallitaan?

Käyttöoikeuksien valvontalista (ACL) voidaan konfiguroida hallintapaneelissa.  Voit myöntää käyttöoikeuden NAS-HA-palvelimelle syöttämällä palvelun IP-osoitteen, jolle oikeus halutaan antaa.

### Voidaanko NAS-HA liittää virtuaaliräkin yksityiseen verkkoon?

Tällä hetkellä NAS-HA-palvelinta ei voida yhdistää virtuaaliräkin yksityiseen verkkoon. NAS-HA ja virtuaaliräkki ovat kuitenkin käytöltään yhteensopivia sillä niiden yhteydet kulkevat virtuaaliräkkiin yhdistetyn palvelimen julkisen IP-osoitteen kautta.

## Tiedonsiirtonopeudet

### Ovatko tiedonsiirto- ja saatavuusaste taattuja?

- Tiedonsiirto: palvelun kaistanleveys on jaettu. OVH ei takaa tiedonsiirtoastetta.
- Saatavuus: palvelun saatavuus on taattu ja se määritellään palvelutasosopimuksessa. Tarkemmat tiedot löytyvät käyttöehdoistamme.

## Tilannekuvat

### Mitä tilannekuvat ovat?

Tilannekuva näyttää levysi ja sinne varastoitujen tietojesi tilanteen tietyllä hetkellä. Tilannekuvien konfigurointi ja hallinnointi tapahtuu hallintapaneelissa.

Tilannekuva-ominaisuus aktivoidaan oletuksena osion luomisen yhteydessä. Aikaväliksi on esimääritetty “joka tunti”.

### Millä aikavälillä tilannekuvia otetaan?

Voit hallinnoida tilannekuvien aikaväliä hallintapaneelissasi. Voit valita aikavälin seuraavista vaihtoehdoista:
 
- joka tunti
- joka kuudes tunti
- joka päivä
- joka toinen päivä
- joka kolmas päivä
- joka viikko 


Voit myös milloin tahansa ottaa käsin tilannekuvia, säilyttää niitä ilman aikarajaa tai poistaa niitä. Tämä ominaisuus on saatavilla [hallintapaneelisi](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie) tai [APIn](https://api.ovh.com/) kautta.

> [!api]
>
> @api {GET} /dedicated/nasha/{serviceName}/partition/{partitionName}/customSnapshot
> 

### Miten tilannekuvien hallintajärjestelmä toimii?

Voit konfiguroida automaattisia tilannekuvia, joita otetaan tietyin väliajoin. Saatavilla on erilaisia aikavälejä. Määritetystä aikavälistä riippumatta viimeisenä otettu tilannekuva korvaa aina edellisen. Voit lisäksi luoda ja poistaa tilannekuvia pyynnöstä.

### Voiko tilannekuvan poistaa?

Ainoastaan pyynnöstä luodut tilannekuvat voidaan poistaa (ks. edellinen kysymys “Millä aikavälillä tilannekuvia otetaan?”). Kiintein väliajoin otetut tilannekuvat poistetaan automaattisesti eikä niitä voida poistaa käsin.

### Kuinka paljon tilaa tilannekuvat vievät NAS-HA-palvelussa?

Tilannekuvien käyttämä kapasiteetti vaihtelee sen mukaan, mitä toimia kahden tilannekuvan välisenä aikana on tehty.

Siitä hetkestä lähtien kun tilannekuva käynnistetään, kaikki kyseisessä osiossa suoritetut toiminnat tallentuvat tilannekuvaan, mikä kasvattaa tiedoston kokoa. Voit siis milloin tahansa palata osiosi alkuperäiseen tilaan (siihen, jossa se oli tilannekuvan ottohetkellä). Teknisesti tiedostojen muokkaus ja poistaminen kasvattavat tilannekuvan tiedostojen kuluttamaa tallennustilaa. 

### Kuinka monta tilannekuvaa voidaan enimmillään tehdä?

- Automatisoiduissa tilannekuvissa: yksi osiota kohti
- Käsin otetuissa tilannekuvissa: kymmenen osiota kohti

### Mistä tilannekuvat löytyvät?

Kyseisen osion välimuistihakemistossa nimeltä `.zfs` → hakemisto `tilannekuvat`. Tiedostot saatavilla vain luku-tilassa.

### Ottaako OVH myöskin varmuuskopioita tiedoistani?

Kyllä, päivittäin tehdään lisäksi sisäinen varmuuskopio. Siitä muodostuu yksi ylimääräinen tilannekuva. Asiakkaan ei ole mahdollista aktivoida tätä varmuuskopiota.

## Lisää aiheesta

Viesti käyttäjäyhteisömme kanssa osoitteessa [https://community.ovh.com](https://community.ovh.com).
