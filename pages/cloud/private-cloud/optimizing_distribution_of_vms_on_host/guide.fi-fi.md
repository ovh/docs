---
deprecated: true
title: Virtuaalikoneiden hajautuksen optimointi isäntäpalvelimilla
excerpt: Miten parhaiten hajauttaa virtuaalikoneet isäntäpalvelimille resurssien optimointia varten?
slug: virtuaalikoneiden_hajautuksen_optimointi_isantapalvelimilla
---


## OVH PRO -konfiguraatio
PRO pitää sisällään Dynamic Optimization -tilan joka hajauttaa klusterin kuormaa automaattisesti eri isäntäpalvelimien kesken.
OVH tarjoaa oletuskonfiguraation PRO-ominaisuudesta:

![](images/img_1991.jpg){.thumbnail}
Dynamic Optimization ajetaan 20 minuutin välein suorittaen virtuaalikonemigraation isäntäkoneelta toiselle vastaamaan alla olevan kuvan asetuksia.


## Virtuaalikoneen poissulkeminen PROsta
Jos et halua virtuaalikonemigraation tapahtuvan automaattisesti PROn toimesta, voit jättää sen pois klikkaamalla seuraavaa laatikkoa virtuaalikoneiden asetuksissa:

![](images/img_1992.jpg){.thumbnail}


## Anti-affiniteettisäännöt
VMM:ssä voit määritellä anti-affiniteettisäännöt jokaiselle virtuaalikoneelle erikseen ja voit myös määritellä virtuaalikoneiden asennuksen eri isäntäpalvelimille.

Tämän suorittaaksesi mene osioon Hardware Configuration -> Availability -> Availability Sets:

![](images/img_1993.jpg){.thumbnail}
Luo sääntö ja lisää se osioon ”Assigned Properties”:

![](images/img_1994.jpg){.thumbnail}
Tee sama sääntö jokaiselle virtuaalikoneelle jotka haluat erottaa toisistaan.

