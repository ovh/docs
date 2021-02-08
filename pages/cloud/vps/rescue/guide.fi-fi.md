---
deprecated: true
title: Rescue-tilan aktivointi yksityisellä virtuaalipalvelimella
slug: rescue
excerpt: Tässä ohjeessa kerrotaan, kuinka VPS käynnistetään Rescue-tilassa.
section: Vianhaku ja Rescue-tila
---

**Päivitetty 18.04.2018**

## Tavoite

Rescue-tila mahdollistaa palvelimen käynnistämisen itsenäisessä OVH:n konfiguraatiossa. Levysi voidaan siis alustaa itsenäisenä levyosiona. 

Sen etuna on mahdollisuus testien tai muutosten tekemiseen silloin kun se sinulle parhaiten sopii ja silloin kun se häiritsee vähiten palvelimesi suorittamia operaatioita. Lisäksi tässä tilassa voit korjata etukäteen mahdolliset konfiguraatiovirheet, jotka estävät pääsysi levyltä palvelimelle.

>[!warning]
>
> Jos sinulla on jotakin tuotannossa, Rescue-tila keskeyttää sen niin kauan kuin konetta ei ole käynnistetty uudelleen normaalitilassa. 
> 

Tässä ohjeessa kerrotaan, kuinka VPS käynnistetään Rescue-tilassa.

## Edellytykset

- Olet kirjautuneena [hallintapaneeliisi](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie).


## Käytännössä

Kun olet kirjautunut hallintapaneeliisi, mene osioon `Cloud`{.action} ja valitse VPS-palvelimesi vasemman puoleisesta valikosta: 

![VPS-osio hallintapaneelissa](images/vps_rescue1.png){.thumbnail}

Klikkaa `Uudelleenkäynnistys pelastustilassa`{.action} ja vahvista, että haluat käynnistää VPS:n uudelleen:

![Rescue-tilan vahvistus](images/vps_rescue2.png){.thumbnail}

Edistymisen osoittava palkki näyttää uudelleenkäynnistyksen etenemisen (tämä voi viedä useita minuutteja):

![Rescue-tilan eteneminen](images/rescue_task.png){.thumbnail}

> [!primary]
>
>Tämän vaiheen jälkeen saat automaattisesti sähköpostiviestin, joka sisältää SSH-tunnuksesi Rescue-tilassa. Löydät tämän viestin lisäksi hallintapaneelista (katso `Oma tili`{.action} > Vastaanotetut sähköpostit`{.action}).
> 

Voit nyt kirjautua VPS-palvelimesi Rescue-tilaan SSH-yhteydellä. Kun olet tehnyt tarvittavat muutokset Rescue-tilassa, voit käynnistää virtuaalipalvelimesi sen kovalevyllä painikkeesta `Käynnistä VPS uudelleen`{.action}.


##Lisää aiheesta

[Johdanto SSH-protokollaan](https://docs.ovh.com/fi/dedicated/ssh-johdanto/)

Viesti käyttäjäyhteisömme kanssa osoitteessa <https://ovh-hosting.fi/community/foorumi>.