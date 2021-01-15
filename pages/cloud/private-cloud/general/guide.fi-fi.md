---
deprecated: true
title: Yleistä
excerpt: ''
slug: yleista
legacy_guide_number: g597
---


## 
Tämän tuotteen erikoisuus muihin nähden on se, että se asennetaan suoraan laitteiston päälle (kutsutaan Bare Metal hypervisoriksi).  Hostin-käyttöjärjestelmää ei ole pakollista asentaa VMware ESXin asentamiseksi.
VMware ESXi on hypervisor, jonka avulla voi hallita erittäin tarkasti jokaisen virtuaalikoneen resursseja paremmalla suorituskyvyllä. Virtuaalikone on itse asiassa useamman tiedoston kokonaisuus. Tällä tiedostojärjestelmällä on useita ominaisuuksia, joista tärkein on sen kyky hallita useita yhtäaikaisia yhteyksiä.
ESXillä on lisäksi erittäin tarkkoja mekanismeja jaetun muistin hallintaan, kuten käyttämättömän muistin takaisinhankinta sekä muistisivujen deduplikointi ja purku.


## 
Tämän työkalun avulla voi siirtää virtuaalikoneen ESXi-palvelimelta toiselle "lennossa" eli ilman palvelukatkosta. Tämä operaatio on mahdollinen silloin kun host-palvelimet käyttävät molemmat yhteensopivia mikroprosessoreita (OVH:n hostit ovat yhteensopivia) ja kun virtuaalikoneiden tiedostojen tallennustila on jaettu SANilla tai NASilla.


## 
Tällä työkalulla hoidetaan kuormantasaus useiden ESXi-palvelinten välillä.
Usea toimintatapa on mahdollinen. Esimerkiksi on mahdollista antaa DRS:n hallita automaattisesti ESXi-palvelinten välinen resurssien allokointi.
DRS tukeutuu vMotionin mekanismiin, jolla siirretään virtuaalikoneita eri ESXi-palvelinten välillä yhdessä klusterissa. On myös mahdollista luoda yhtäläisyyssääntöjä, joiden avulla ryhmitellä tai erottaa VM:iä yhdellä tai useammalla ESXillä (esim. ensisijainen tai toissijainen AD).


## 
Tämä vCenterin lisäominaisuus luo klusterin yhdistämällä ESXi-palvelimia. "vLockStep"-teknologian avulla, johon FT-klusteri nojautuu, voi toissijaisen palvelimen VM suorittaa ensisijaisen palvelimen VM:n rinnakkain. Ainoastaan ensisijainen palvelin suorittaa skriptejä levylle tai verkkoon. Toissijainen palvelin suorittaa VM:n rinnakkain, suorittamatta skriptejä.
Ensisijaisen palvelimen toimintakatkoksen aikana vCenter ottaa sen pois käytöstä. Tämän toimen avulla toissijainen palvelin ottaa ensisijaisen palvelimen paikan ja turvaa VM:n toiminnan jatkuvuuden.

## HUOMIO!
Tämä toiminto ei ole vielä käytössä Private Cloudilla.


## 
vCenter on hallintatyökalu, jonka avulla voi keskitetysti hallita kaikki virtuaaliympäristön virtuaalikoneet ja fyysiset hostit. Tällä hallintakäyttöliittymällä voi lisäksi hallita:

- seurantahälytyksiä (suoritin/muisti)
- mallipohjia (esikonfiguroitujen käyttöjärjestelmien kirjekuoret)
- lisäoptioden käyttöä (HA, vMotion, DRS)



