---
title: Instanssin siirtäminen rescue-tilaan
excerpt: Instanssin siirtäminen rescue-tilaan
slug: instanssin_siirtaminen_rescue-tilaan
legacy_guide_number: g2029
---


## 
On mahdollista ettet pääse enää instanssiisi, jos konfigurointi on epäonnistunut tai SSH-avain on menetetty. Tarjoamme käyttöösi rescue-tilaa, jonka avulla voit päästä tietoihisi korjaamaan eri konfiguraatiokansiot.

Rescue-tila toimii melko yksinkertaisesti:
Instanssisi on käynnistetty uuteen kuvaan, tai instanssiin peruskonfiguroinnilla.  
Instanssin levy on kiinnitetty instanssiin lisälevyn tavoin. Se täytyy siis vain alustaa, jotta tietoihin voidaan päästä.

Tässä ohjeessa kerrotaa kuinka käytetään rescue-tilaa.


## Edellytykset

- [Instannsin luominen OVH:n hallintapaneelissa]({legacy}1775)




## Rescue-tilaan siirtäminen
Siirtäksesi palvelimen rescue tilaan, täytyy vain klikata ylhäällä instanssin oikealla puolella olevaa nuolta ja valita: "Käynnistä rescue-tila:

![](images/img_3494.jpg){.thumbnail}
Valitse seuraavaksi kuva johon haluat uudelleen käynnistää palvelimesi rescue-tilassa:

![](images/img_3495.jpg){.thumbnail}
Löydät oletuksena ehdotettavat kuvat sekä ylimääräisen kuvan "Distribution Rescue Made-in-OVH", jonka avulla voit kirjautua instanssiisi rescue-tilassa tilapäisellä salasanalla.

Kun palvelin on siirtynyt rescue-tilaan, aukeaa alas oikealle uusi ikkuna, joka sisältää tilapäisen salasanan:

![](images/img_3497.jpg){.thumbnail}


## Pääsy tietoihin
Kuten aiemmin kerrottiin, instanssin tiedot kiinnitetään rescue-tilaan lisälevyn tavoin.
Tietohin pääsemiseksi täytyy siis ainoastaan alustaa se:


- Kirjaudu Root-käyttäjänä: 


```
admin@instance:~$ sudo su
```


- Tarkista saatavilla olevat levyt:


code]root@instance:/home/admin# lsblk
NAME MAJ:MIN RM SIZE RO TYPE MOUNTPOINT
vda 253:0 0 1G 0 disk
└─vda1 253:1 0 1023M 0 part /
vdb 253:16 0 10G 0 disk
└─vdb1 253:17 0 10G 0 part[/code]


- Alusta osiojako;


```
root@instance:/home/admin# mount /dev/vdb1 /mnt
```



Tietoihisi voi nyt päästä kansiosta /mnt.

Voit nyt esimerkiksi muokata admin-käyttäjän SSH-avainten listaa sisältävää tiedostoa:


```
root@instance:/home/admin# vim /mnt/home/admin/.ssh/authorized_keys
```




## Käynnistä instanssisi normaalisti uudelleen
Kun toimenpide on suoritettu, on mahdollista uudelleenkäynnistää instanssi normaalisti, sitä varten klikkaa nuolta ylhäällä instanssisi oikealla puolella ja valitse "Poistu rescue-tilasta":

![](images/img_3496.jpg){.thumbnail}


## API OpenStackin avulla
Voit käynnistää instanssisi uudelleen rescue-tilassa API OpenStackilla käyttämällä seuraavaa komentoa:



```
root@server:~# nova rescue INSTANCE_ID
```


Voit käyttäää seuraavaa komentoa poistuaksesi rescue-tilasta:


```
root@server:~# nova unrescue INSTANCE_ID
```




## 

- [SSH-avainten luominen]({legacy}1769)
- [Ylimääräisten SSH-avainten konfigurointi]({legacy}1924)




## 
[Paluu Cloud-tuotteiden ohjeiden valikkoon]({legacy}1785)

