---
deprecated: true
title: Kuinka hallinnoin resurssejani?
excerpt: ''
slug: kuinka_hallinnoin_resurssejani
legacy_guide_number: g602
---


## 
Tästä näet kuinka monitoroit Private cloudin resursseja.
Sinun täytyy käyttää vSphere Clientia, omalle koneellesi asennettua asiakasohjelmaa tai käyttämällä RDP-yhteyttä jonka tiedot sait kun aktivoit PCC:si.


## Hosteissa
Saat yleiskuvan hostisi resursseista menemällä PCC:hesi ja sieltä host-välilehdelle:

![](images/img_98.jpg){.thumbnail}


## Klusterissa tai resurssikeskuksessa.
Näet kaiken PCC:si resurssi-informaation menemällä "Resource Allocation"-välilehdelle.
Sieltä näet kaikki saatavilla olevat resurssit: RAM, CPU ja storagelevytila. Tämä tarkastelutapa mahdollistaa jokaisen normaalista poikkeavan kuormituksen eristämisen jonka on aiheuttanut hostissasi oleva VM tai virtuaalidatacenterisi. Voit asettaa levykuormitusrajat (I/O-raja) storagellesi sekä priorisoida virtuaalikoneitasi mutta myös hallinnoida virtuaalikoneesi resurssirajoja ehkäisten joidenkin virtuaalikoneiden kaikkien resurssien varastamista ja täten parantaen yleissuorituskykyä.
Lisäksi on myös mahdollista hallinnoida virtuaalikonekeskuksesi resursseja.

![](images/img_96.jpg){.thumbnail}


## Resurssikuvaajat hostillesi tai klusterillesi
"Performance"-välilehdellä näet klusteriisi tai hostiisi asennettavissa olevat kuvaajat:

![](images/img_95.jpg){.thumbnail}
Voit käyttää "Advanced"-nappia jonka jälkeen paina "Chart Option". Tämä mahdollistaa kaikkien kuvaajien kustomoinnin.
Voit valita näytettävän aikavälin tai jopa kuvaajan tyypin tehdäksesi entistä tarkempia kuvaajia:

![](images/img_100.jpg){.thumbnail}
Kuvaajien kustomointi:

![](images/img_101.jpg){.thumbnail}


## Storagellasi
Menemällä Datacenter-osioon ja siellä datastore-välilehdelle, näet kaikki storagesi. Voit monitoroida infrastruktuurisi käyttämää tilaa:

![](images/img_102.jpg){.thumbnail}

