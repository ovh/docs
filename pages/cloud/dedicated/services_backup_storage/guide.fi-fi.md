---
deprecated: true
title: 'Backup Storage -palvelun käyttö dedikoidulla palvelimella'
slug: palvelut-backup-storage
excerpt: 'Katso, kuinka Backup Storage -palvelu aktivoidaan ja kuinka sitä käytetään'
section: Storage
---

**Päivitetty 24.8.2018**

## Tavoite

[Dedikoiduissa palvelimissa](https://www.ovh-hosting.fi/dedikoidut_palvelimet/){.external} saat käyttöösi 500 GB:n varmuuskopiotilan, jolla voit [suojata tietosi](https://docs.ovh.com/fi/dedicated/dedikoidun-palvelimen-suojaaminen/){.external}.

**Tässä ohjeessa kerrotaan, kuinka tämä varmuuskopiotila aktivoidaan ja kuinka sitä voidaan käyttää**.


## Edellytykset

- Sinulla on [dedikoitu palvelin](https://www.ovh-hosting.fi/dedikoidut_palvelimet/){.external}.
- Olet kirjautunut [hallintapaneelin](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie){.external} `Dedikoidut`{.action}-osioon.


## Käytännössä

### Aktivoi tallennustilasi

Kirjaudu [hallintapaneeliisi](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie){.external} ja mene palvelimesi sivulle `Dedikoidut`{.action}-osiossa. Valitse välilehti `Backup Storage`{.action}, klikkaa sitten painiketta `Aktivoi Backup Storage`{.action} ja vahvista.

![Aktivoi tallennustilasi](images/backup_storage_activation.png){.thumbnail}

Saat tämän jälkeen aktivointiviestin ja Backup Storage on käytettävissä muutaman minuutin kuluessa.


### Konfiguroi käytönvalvonta

Pääsy palvelimellesi on rajattu IP-osoitteen mukaan käytönvalvontalistan, *Access Control List* (ACL), avulla. Oletuksena kaikilla tilisi IP-osoitteilla on FTP/FTPS-yhteys tallennustilaan. Muut protokollat (NFS ja CIFS) eivät ole sallittuja oletuksena. Niiden sallimiseksi sinun luotava ACL.


#### Pääsyoikeuden lisääminen

Klikkaa `Backup Storage`{.action} -alueella kohtaa `Lisää pääsyoikeus`{.action}.

![Lisää backup-pääsyoikeus](images/add_access.png){.thumbnail}

Valitse IP-lohko, jonka haluat sallia. Kun tämä on valittu, valitse sallittava protokolla ja klikkaa sitten `Seuraava`{.action}.

> [!primary]
>
> Voit hyväksyä pääsyn varmuuskopiotilaan ainoastaan OVH-tililläsi oleville IP-lohkoille.
>

![Lisää backup-pääsyoikeus](images/add_access_ip.png){.thumbnail}

Nyt tarvitsee enää vahvistaa oikeuden lisäys klikkaamalla `Päätä`{.action}.

![Lisää backup-pääsyoikeus](images/add_access_confirmation.png){.thumbnail}

Voit nyt kirjautua palvelimesi varmuuskopiotilaan valitulta IP-lohkolta.


#### Pääsyoikeuden muokkaaminen

Sallitun IP-lohkon protokollien muokkaaminen onnistuu klikkaamalla painiketta `...`{.action} ja sitten `Muokkaa pääsyoikeutta`{.action} muokattavaa lohkoa vastaavalla rivillä. Valitse tai poista valinta halutuilta protokollilta. Kun olet valmis, klikkaa `Vahvista`{.action} muokkausten vahvistamiseksi.

![Muokkaa pääsyoikeutta](images/modify_access.png){.thumbnail}


#### Pääsyoikeuden poistaminen

Hyväksynnän poistaminen IP-lohkolta onnistuu klikkaamalla painiketta `...`{.action} ja sitten `Poista pääsyoikeus`{.action} poistettavaa lohkoa vastaavalla rivillä.

![Muokkaa pääsyoikeutta](images/delete_access.png){.thumbnail}

Klikkaa lopuksi `Vahvista`{.action} toimenpiteen vahvistamiseksi. Yhteys varmuuskopiotilaan poistetaan kyseiseltä IP-lohkolta.


### Salasanan vaihtaminen

Tilassa `Backup Storage`{.action}, klikkaa kohtaa `Unohditko salasanasi?`{.action} ja vahvista.

![Salasanan vaihtaminen](images/forgotten_password.png){.thumbnail}

Salasanan palautusviesti lähetetään administraattorin tilillesi tallennettuun sähköpostiosoitteeseen. Seuraa vain viestin ohjeita salasanan nollaamiseksi.


### Backup Storagen poistaminen

Välilehdellä `Backup Storage`{.action} klikkaa kohtaa `Poista backup storage`{.action}, sitten vahvista.

![Backup Storagen poistaminen](images/backup_storage_delete.png){.thumbnail}

> [!warning]
> 
> Poistopyyntö on peruuttamaton toimenpide.
> 

Backup Storagesi poistetaan pysyvästi muutamien minuuttien kuluttua.


### Tilaa ylimääräistä levytilaa

Klikkaa tilassa `Backup Storage`{.action} painiketta `Tilaa levytilaa`{.action}. 

![Tilaa levytilaa](images/additional_space_order.png){.thumbnail}

Valitse haluamasi tallennuskapasiteetti ja klikkaa sitten `Seuraava`{.action}.

![Lisätilan valinta](images/additional_space_order_selection.png){.thumbnail}

Jäljellä on enää käyttöehtojen lukeminen ja hyväksyminen sekä pyyntö klikkaamalla kohtaa `Vahvista`{.action}.

Tilaus muodostetaan. Kun maksusi on suoritettu, ylimääräinen tallennustila on käytettävissäsi.


### Backup Storagen käyttö

> [!primary]
>
> Backup Storage -palvelu ei ota automaattisia varmuuskopioita tiedoistasi. Se tarjoaa vain tilan ja pääsyprotokollat. Asianmukaisen varmuuskopiointistrategian luominen kuuluu sinulle valitsemiasi työkaluja käyttäen. OVH ei ole vastuussa tässä tilassa olevasta sisällöstä.
>


#### FTP/FTPS

##### NcFTP (Linux)

Kun varmuuskopioit vain yhden tiedoston, voit käyttää komentoa:

```sh
ncftpput -u FtpUserName -p FtpPassword HostName /FolderLocation /File
```

**Tämä komento ei tue FTPS-protokollaa. Jos sinun tarvitsee tehdä suojattu siirto, on käytettävä lftp-asiakasohjelmaa tai cURL-käyttöliittymää.**

Alla olevassa koodiesimerkissä on muuttujia, jotka sinun on korvattava omilla arvoillasi.

* **FtpUsername**: FTP-käyttäjänimesi.
* **FtpPassword**: FTP-salasanasi.
* **HostName**: Varmuuskopiotilasi nimi.
* **FolderLocation**: Polku kohdehakemistoon, johon haluat tallentaa tiedoston.
* **File**: Varmuuskopioitavan tiedoston nimi.

Hakemiston varmuuskopioimiseksi tarvitsee vain arkistoida se ja siirtää se varmuuskopiohakemistoosi.

```sh
tar czf - /FolderName | ncftpput -u FtpUserName -p FtpPassword -c HostName ArchiveName.tar.gz
```

Alla olevassa koodiesimerkissä on muuttujia, jotka sinun on korvattava omilla arvoillasi.

* **FolderName**: Polku hakemistoon, jonka haluat varmuuskopioida.
* **FtpUsername**: FTP-käyttäjänimesi.
* **FtpPassword**: FTP-salasanasi.
* **HostName**: Varmuuskopiotilasi nimi.
* **ArchiveName**: Varmuuskopioitavan hakemiston nimi.

Arkistotiedoston lataamiseen varmuuskopiotilastasi voit käyttää seuraavaa komentoa:

```sh
ncftpget -v -u FtpUsername -p FtpPassword HostName /LocalFolder /File
```

Alla olevassa koodiesimerkissä on muuttujia, jotka sinun on korvattava omilla arvoillasi.

* **FtpUsername**: FTP-käyttäjänimesi.
* **FtpPassword**: FTP-salasanasi.
* **HostName**: Varmuuskopiotilasi nimi.
* **LocalFolder**: Polku paikalliseen hakemistoon, johon haluat tallentaa tiedoston.
* **File**: Polku ladattavaan tiedostoon.

##### cURL (Linux)

> [!primary]
>
> FTPS-protokollan lataamiseksi sinun on vaihdettava varmuuskopiotilasi nimeä. Esimerkiksi jos sen nimi on “ftpback-rbxX-YYY.ip-Z.Z.Z.Z.net”, se täytyy vaihtaa muotoon “ftpback-rbxX-YYY.mybackup.ovh.net”. Lisäksi alla olevaan komentoon on lisättävä `-ssl`-argumentti.
>

Kun varmuuskopioit vain yhden tiedoston, voit käyttää komentoa:

```sh
curl -aT File ftp://FtpUsername:FtpPassword@HostName/FolderLocation
```

Alla olevassa koodiesimerkissä on muuttujia, jotka sinun on korvattava omilla arvoillasi.

* **File**: Varmuuskopioitavan tiedoston nimi.
* **FtpUsername**: FTP-käyttäjänimesi.
* **FtpPassword**: FTP-salasanasi.
* **HostName**: Varmuuskopiotilasi nimi.
* **FolderLocation**: Polku kohdehakemistoon, johon haluat tallentaa tiedoston.

Hakemiston varmuuskopioimiseksi tarvitsee vain arkistoida se ja siirtää se varmuuskopiohakemistoosi.

```sh
tar czf - /FolderName | curl ftp://FtpUsername:FtpPassword@HostName/FolderLocation/ArchiveName-$(date +%Y%m%d%H%M).tar.gz -T -
```

Alla olevassa koodiesimerkissä on muuttujia, jotka sinun on korvattava omilla arvoillasi.

* **FolderName**: Polku hakemistoon, jonka haluat varmuuskopioida.
* **FtpUsername**: FTP-käyttäjänimesi.
* **FtpPassword**: FTP-salasanasi.
* **HostName**: Varmuuskopiotilasi nimi.
* **FolderLocation**: Polku paikalliseen kohdehakemistoon, johon haluat tallentaa tiedoston.
* **ArchiveName**: Varmuuskopioitavan hakemiston nimi.

Arkistotiedoston lataamiseen varmuuskopiotilastasi voit käyttää seuraavaa komentoa:

```sh
cd /LocalFolder
curl -u FtpUsername:FtpPassword ftp://HostName/File 
```

Alla olevassa koodiesimerkissä on muuttujia, jotka sinun on korvattava omilla arvoillasi.

* **FtpUsername**: FTP-käyttäjänimesi.
* **FtpPassword**: FTP-salasanasi.
* **HostName**: Varmuuskopiotilasi nimi.
* **LocalFolder**: Paikallisen hakemiston nimi, johon haluat tallentaa tiedoston.
* **File**: Polku ladattavaan tiedostoon.


##### lftp (Linux)

> [!primary]
>
> lftp käyttää oletuksena FTP+SSL/TLS-yhteyksiä. Varmuuskopiotilan nimi täytyy siis vaihtaa. Esimerkiksi jos se on “ftpback-rbxX-YYY.ip-Z.Z.Z.Z.net”, se täytyy vaihtaa muotoon “ftpback-rbxX-YYY.mybackup.ovh.net”.
>

Kun varmuuskopioit vain yhden tiedoston, voit käyttää komentoa:

```sh
lftp ftp://FtpUsername:FtpPassword@HostName:21 -e "cd FolderLocation; put File; quit"
```

Alla olevassa koodiesimerkissä on muuttujia, jotka sinun on korvattava omilla arvoillasi.

* **File**: Varmuuskopioitavan tiedoston nimi.
* **FtpUsername**: FTP-käyttäjänimesi.
* **FtpPassword**: FTP-salasanasi.
* **HostName**: Varmuuskopiotilasi nimi.
* **FolderLocation**: Polku kohdehakemistoon, johon haluat tallentaa tiedoston.

Hakemiston varmuuskopioimiseksi tarvitsee vain arkistoida se ja siirtää se varmuuskopiohakemistoosi.

```sh
tar czf - /FolderName | ftp://FtpUsername:FtpPassword@HostName:21 -e "cd FolderLocation; put /dev/stdin -o ArchiveName-$(date +%Y%m%d%H%M).tar.gz;quit"
```

Alla olevassa koodiesimerkissä on muuttujia, jotka sinun on korvattava omilla arvoillasi.

* **FolderName**: Polku hakemistoon, jonka haluat varmuuskopioida.
* **FtpUsername**: FTP-käyttäjänimesi.
* **FtpPassword**: FTP-salasanasi.
* **HostName**: Varmuuskopiotilasi nimi.
* **FolderLocation**: Polku paikalliseen kohdehakemistoon, johon haluat tallentaa tiedoston.
* **ArchiveName**: Varmuuskopioitavan hakemiston nimi.

Voit käyttää seuraava komentoa arkistotiedoston lataamiseen varmuuskopiotilastasi:

```sh
cd /LocalFolder
lftp ftp://FtpUsername:FtpPassword@HostName:21 -e "get /File; quit"
```

Alla olevassa koodiesimerkissä on muuttujia, jotka sinun on korvattava omilla arvoillasi.

* **FtpUsername**: FTP-käyttäjänimesi.
* **FtpPassword**: FTP-salasanasi.
* **HostName**: Varmuuskopiotilasi nimi.
* **LocalFolder**: Paikallisen hakemiston nimi, johon haluat tallentaa tiedoston.
* **File**: Polku ladattavaan tiedostoon.

##### FileZilla

Kun olet ladannut FileZillan palvelimellesi, voit konfiguroida sen varmuuskopiotilaan kirjautumista varten FTP-tunnuksiasi käyttäen. Nämä on lähetetty sinulle varmuuskopiotilasi aktivoinnin yhteydessä. Kirjautumista varten tarvitset käyttäjätunnuksen ja siihen liitetyn salasanan.


#### NFS

Varmista ensin, että olet sallinut IP-lohkoillesi pääsyn tallennustilaan sekä NFS-protokollan käytön. Linux-käyttöjärjestelmästäsi riippuen saatat joutua asentamaan NFS-asiakasohjelman ja käynnistämään NFS/portmap-palvelun.

Kun NFS-asiakasohjelma on asennettu ja portmap-palvelu käynnistetty, täytyy NFS-jako alustaa normaalina levyosiona alla olevalla tavalla:

```sh
mount -t nfs HostName:/export/ftpbackup/ServiceName /FolderMount
```

Alla olevassa koodiesimerkissä on muuttujia, jotka sinun on korvattava omilla arvoillasi.

* **HostName**: Varmuuskopiotilasi nimi.
* **ServiceName**: Palvelimesi nimi (esim. ns0000000.ip-123-123-123.net).
* **FolderMount**: Hakemisto, johon haluat alustaa NFS-jaon.

Kun jako on alustettu, voit käyttää esimerkiksi **cp** ja rsync -komentoja kuten tekisit normaalin hakemiston kanssa.


#### CIFS

##### Windows

Kirjaudu palvelimellesi, avaa komentorivi ja naputtele seuraava komento:

```sh
net use z: \\HostName\ServiceName
```

Alla olevassa koodiesimerkissä on muuttujia, jotka sinun on korvattava omilla arvoillasi.

* **HostName**: Varmuuskopiotilasi nimi.
* **ServiceName**: Palvelimesi nimi (esim. ns0000000.ip-123-123-123.net).

##### Linux

Avaa SSH-yhteys palvelimeesi ja naputtele seuraava komento:

```sh
mount -t cifs -o sec=ntlm,uid=root,gid=100,dir_mode=0700,username=root,password= //HostName/ServiceName /mnt/FolderMount
```

Alla olevassa koodiesimerkissä on muuttujia, jotka sinun on korvattava omilla arvoillasi.

* **HostName**: Varmuuskopiotilasi nimi.
* **ServiceName**: Palvelimesi nimi (esim. ns0000000.ip-123-123-123.net).
* **FolderMount**: Hakemisto, johon haluat alustaa jaon (sen on oltava jo olemassa oleva).


## Lue lisää aiheesta

Viesti käyttäjäyhteisömme kanssa osoitteessa <https://community.ovh.com/en/>.