---
deprecated: true
title: 'Opi ymmärtämään, mitä virheilmoitus “Controlled VM deleted” tarkoittaa'
slug: virheilmoitus-controller-nsx
excerpt: 'Opi ymmärtämään, mitä virheilmoitus “Controlled VM deleted” tarkoittaa'
section: NSX
---

**Päivitetty 28.12.2017**

## Tavoite

Saatat nähdä NSX-käyttöliittymässä seuraavan virheilmoituksen: *Controlled VM deleted*.

**Tässä ohjeessa kerrotaan, miten se tulee ymmärtää**.


## Edellytykset

- Sinulla on NSX-lisäpalvelu.
- Olet luonut käyttäjän, jolla on NSX-käyttöoikeudet.


## Käytännössä

NSX-käyttöliittymän `Installation`{.action}-osassa voi näkyä ohjaimen alla virheilmoitus *Controlled VM deleted*:

![Controlled VM deleted](images/controllervmdeleted.JPG)


Tämä johtuu siitä, että OVH ei ylläpidä ohjaimia sinun infrastruktuurissasi, vaan erillisessä hallintainfrastruktuurissa. Näin resursseja ei kuluteta sinun infrastruktuurissasi.

NSX-lisäpalvelun perustoiminnassa on odotuksena, että ohjaimet ovat virtuaalikoneidesi kanssa samassa konesalissa, mikä selittää tämän virheen. Tämä viesti ei kuitenkaan vaikuta koneesi toimintaan.

Varmista yksinkertaisesti NSX-käyttöliittymässä, että ohjaintesi tila on `Connected`. Jos näin on, koneesi toimii.


> [!warning]
>
> Ongelman korjaaminen `Resolve`{.action}-painikkeella johtaa infrastruktuurisi ohjainten poistamiseen, mikä häiritsee NSX-lisäpalvelun sekä verkkoinfrastruktuurin käyttöä. Emme suosittele siis tekemään tätä toimintoa. NSX-ohjainten hallinta on edelleen OVH:n vastuulla.
> 

Tämä selittää lisäksi hälytyksen NSX-hallintapaneelissa:

![Hälytys NSX-käyttöliittymässä](images/controllervmdeleted2.JPG)


## Lue lisää aiheesta

Viesti käyttäjäyhteisömme kanssa osoitteessa: <https://community.ovh.com/en/>.