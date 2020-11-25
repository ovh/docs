---
deprecated: true
title: Windows Serverin ensimmainen konfiguraatio (Palomuuri)
slug: windows-first-config
excerpt: Lue tasta kuinka aktivoit yhteyden etatyopoydalle KVM&#58;n kautta, jos yhteys ei ole aktivoituna.
---


## Edellytykset
Kun Windows Server 2012, 2012 R2 tai 2016 -palvelinta asennetaan VPS:lle, on mahdollista, ettei etätyöpöytäyhteyttä eikä vastausta ICMP-protokollaan ole aktivoitu. Mikäli näin on, tässä ohjeessa kerrotaan kuinka tehdä tarvittavat muutokset.

Tätä varten tarvitset:

- Yksityisen Windows Server 2012, 2012 R2 tai 2016 virtuaalipalvelimen
- pääsyoikeudet OVH:n hallintapaneeliin


## Menettely

### 1. Vaihe&#58; Kirjaudu KVM&#58;aan.
Kirjautuaksesi KVM:ään sinun on ensin kirjauduttava `Hallintapaneeliin`{.action}. Mene siellä kuvakkeeseen `Dedikoitu`{.action} ja valitse sitten oma VPS-palvelimesi.

Klikkaa sitten hallintapaneelissa oikealla ylhäällä olevaa  `KVM`{.action} -painiketta.


![KVM](images/windowsvps.png){.thumbnail}

Sinulla on nyt siis yhteys “virtuaalisen näppäimistön ja hiiren” kautta virtuaalipalvelimeesi.


### 2. Vaihe&#58; Windowsin asetusten ensimmainen maarittaminen
KVM-näytöllä näet, että Windows käynnistyy.  Sinun täytyy siis konfiguroida Windowsin näppäimistön kieli sekä **Administraattorin** salasana.


![Kieli](images/windows2.png){.thumbnail}


![Mdp](images/windows3.png){.thumbnail}


### 3. Vaihe&#58; Windows-palomuurin muokkaus
Kun asennus on päättynyt, mene `Hallintatyökaluihin`{.action}, sitten `Windows-palomuuriin edistyneellä tietoturvalla`{.action}.


![Admin](images/windows4.png){.thumbnail}

Lopuksi sinun on aktivoitava ICMP sekä yhteys etätyöpöytään *(klikkaa hiiren oikeaa näppäintä -> Hyväksy sääntö)*.


![Aktiivinen](images/windows5.png){.thumbnail}