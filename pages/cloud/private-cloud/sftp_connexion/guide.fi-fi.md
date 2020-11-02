---
deprecated: true
title: SFTP-yhteys
excerpt: ''
slug: sftp-yhteys
legacy_guide_number: g589
---


## 
Ensin sinun täytyy avata koneesi terminaali (Terminal) käynnistääksesi SFTP-yhteyden.

Esimerkiksi Ubuntun GNOME-käyttöliittymässä terminaali on löydettävissä osiosta Applications -> Accessories -> Terminal.

Kun terminaali on käynnistetty, varmista että sinulla on SFTP asennettuna, seuraavalla komennolla:


```
# man sftp
```

(tämä on vain esimerkki, sinun täytyy käyttää automaattitäydennystä)
Kun SFTP:n olemassaolotarkistus on tehty, sinun täytyy käynnistää se seuraavalla tavalla (komento ja parametri):


```
# sftp admin@pcc-178-32-194-8.ovh.com
```


Tämän jälkeen salasanaasi kysytään:


```
# sftp admin@pcc-178-32-194-8.ovh.com
Connecting to pcc-178-32-194-8.ovh.com...
admin@pcc-178-32-194-8.ovh.com's password:
```


Syötettävä salasana on se salasana jota käytät vSphereesi yhdistämiseen, jonka olet saanut alunperin sähköpostissasi:


```
Voit ladata vSphere Clientin osoitteesta https://pcc-178-32-194-8.ovh.com/client/VMware-viclient.exe
* DNS-nimi/IP-osoite: pcc-178-32-194-8.ovh.com
* Käyttäjätunnus: admin
* Salasana: xxxxxxx
```


Yhdistämisen jälkeen voit listata datastoresi seuraavasti:


```
sftp> ls
pcc-000714
sftp>
```


Sitten sinun täytyy sijoittaa se omaan datastoreesi imagen importtausta varten.
Tämän tehdäksesi, käytä seuraavaa komentoa:


```
sftp> cd pcc-000714
```

 (tämä on vain esimerkki, käytä omaa edellisen komennon avulla datastorestasi saatua pcc-osoitetta)
Kun olet datastoressa, halutun tiedoston importtaus tapahtuu seuraavasti:


```
sftp> put /home/ubuntu-11.10-desktop-i386-fr.iso to /datastore/pcc-000714/ubuntu-11.10-desktop-i386-fr.iso
/home/loic/Bureau/ubuntu-11.10-desktop-i386-fr.iso 100 % 655 MB 8.0 MB/s 01:22
```




## Edellytykset
Sinun täytyy ladata ja asentaa FTP/SFTP-clientti.

FileZilla on yksi suosituimmista ja eniten käytetyistä asiakasohjelmista ja voit ladata sen seuraavasta osoitteesta:

- [http://sourceforge.net/projects/filezilla/files/FileZilla_Client/3.5.3/FileZilla_3.5.3_win32-setup.exe/download](http://sourceforge.net/projects/filezilla/files/FileZilla_Client/3.5.3/FileZilla_3.5.3_win32-setup.exe/download)




## Konfiguraatio ja käyttö
Ottaaksesi SFTP-yhteyden Private Cloudiisi, sinun täytyy syöttää tarvittavat tiedot (yht. 3 riviä) jotka olet saanut Private Cloud -aktivointisähköpostissa:


```
* Latauslinkki: https://pcc-178-32-194-8.ovh.com/client/VMware-viclient.exe
* DNS-nimi/IP-osoite: pcc-178-32-194-8.ovh.com
* Käyttäjätunnus: admin
* Salasana: xxxxxxx
```


Ohessa on esimerkkikonfiguraatio pcc-000714:n takaisin lataamisesta:

![](images/connection_sftp_filezilla.png){.thumbnail}
Yhdistämisen jälkeen, tuplaklikkaa PCC-000 714:ää (esimerkissä) ja sen jälkeen raahaa ja pudota tiedostot jotka haluat ns. upata:

![](images/connection_sftp_filezilla.png){.thumbnail}

