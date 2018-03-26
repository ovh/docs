---
title: FailOver IP -migraatio
excerpt: FailOver IP -migraatio
slug: failover_ip_-migraatio
legacy_guide_number: g1890
---


## 
Tässä ohjeessa kerrotaan kuinka FailOver IP -migraatio tapahtuu instanssista toiseen. Yleensä tämä toimenpide rajoittaa tai estää palvelukatkokset ja mahdollistaa:

- migraation verkkosivun "uuteen versioon"
- toimintasi jatkumisen replikoidulla palvelimella sillä aikaa kun teet huoltotoimenpiteitä tai päivität tuotantopalvelinta.




## Vaatimukset:
-Vähintään kaksi käynnistettyä Public Cloud -instanssia

- Yksi FailOver IP




## 

- IP-osoite on reititettynä palvelimelle 1, ja haluat muuttaa sen ohjauksen kohti palvelinta 2.



![](images/img_3815.jpg){.thumbnail}

- Klikkaa nuolta ja sitten Muokkaa liitettyä palvelinta



![](images/img_3816.jpg){.thumbnail}
Klikkaa kohdepalvelinta lähellä olevaa laatikkoa

![](images/img_3817.jpg){.thumbnail}

- Klikkaa ”Kiinnitä”


FailOver IP -osoite voidaan konfiguroida kohdepalvelimella ennen migraatiota, tai sen jälkeenkin. Jos se on esikonfiguroitu, se alkaa vastamaan heti kun reititys on saatu päätökseen.


## 
[Paluu Cloud-tuotteiden ohjeiden hakemistoon]({legacy}1785)

