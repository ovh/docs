---
deprecated: true
title: RIPE IP -verkkoavaruuden käyttö/vrack 1.5
excerpt: Miten virtuaalikone lisätään vrack 1.5 -verkkoon ja RIPE IP -osoiteavaruuteen?
slug: ripe_ip_-verkkoavaruuden_kayttovrack_15
legacy_guide_number: g1441
---


## Yleisnäkymä VM Network -osiosta
OVH on luonut VM network -osion, verkon joka sisältää ennalta määrätyn IP-osoitepoolin ja RIPE-osoiteavaruuskonfiguraation.
VM Network mahdollistaa myös vrack 1.5 -käytön.

![](images/img_1984.jpg){.thumbnail}


## Dynaaminen RIPE-osoiteavaruus (esimerkki Windows-virtuaalikoneella)

- Asennusmallin luominen:

Tarkistaaksesi IP-osoitteen VM Network -IP-osoitepoolista, sinun täytyy luoda asennusmalli jonka voit ottaa käyttöön virtuaalikoneelle. Muistutuksena ohje asennusmallin luomiseksi: []({legacy}1436).
Ensiksi sinun täytyy lisätä oikeat verkkoasetukset asennusmalliisi:

![](images/img_1985.jpg){.thumbnail}
Virtuaalikoneen järjestelmävaatimuksien täyttämiseksi asennusmallin kustomointi on tarpeen:

![](images/img_1986.jpg){.thumbnail}

- Virtuaalikoneen käyttöönotto

Kun olet suorittanut edelliset vaiheet, voit ottaa virtuaalikoneen käyttöönasennusmallista. Kun virtuaalikone on kerran otettu käyttöön, se täytyy konfiguroida seuraavasti:

![](images/img_1989.jpg){.thumbnail}
Jos verkkoasetukset vastaavat ao. kuvaa, voit käynnistää virtuaalikoneen ja tarkistaa virtuaalikoneen IP-osoiteasetukset.


## RIPE-osoiteavaruuden manuaalinen yhdistys
Jos haluat konfiguroida virtuaalikoneen IP-osoitteet automaattisesti (otettu käyttöön asennusmallista, tai ei), sinun täytyy yhdistää virtuaalikone VM Network -verkkoon.

![](images/img_1989.jpg){.thumbnail}
Kun virtuaalikone on käynnistetty, voit määritellä sen IP-osoiteasetukset oikeaksi suoraan käyttöjärjestelmästä. Löydät RIPE-osoiteavaruustiedot sinulle lähetetystä sähköpostista sekä myös OVH-hallintapaneelista, tai VM Network -säännöstöstä:

![](images/img_1990.jpg){.thumbnail}


## VMM ja vrack 1.5
VMM liikennöi vrack 1.5:n kanssa VM Network -verkossa. Yhdistääksesi vrack 1.5:ssä olevaan IP-osoitteeseen, sinun täytyy konfiguroida virtuaalikoneesi yhdistääksesi sen VM Network -verkkoon:

![](images/img_1989.jpg){.thumbnail}
Lopuksi sinun täytyy enää vain konfiguroida IP-osoiteasetukset manuaalisesti jotta virtuaalikoneen liikennöinti vrack 1.5:ssä on mahdollista.

