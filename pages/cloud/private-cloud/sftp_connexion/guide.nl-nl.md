---
deprecated: true
title: SFTP-verbinding
excerpt: ''
slug: sftp-verbinding
legacy_guide_number: g589
updated: 2021-12-28
---


## 
U moet eerst een terminal op uw machine openen om de SFTP-verbinding te kunnen starten.

Bij Ubuntu GNOME bijvoorbeeld kunt u deze terugvinden in Applications Accessories > Terminal.

Zorg ervoor dat u over het sftp-commando beschikt, zodra de terminal wordt gestart:


```
# man sftp
```

(dit is alleen een voorbeeld, u kunt de autocompletion gebruiken)
Zodra deze verificatie is uitgevoerd, moet u eerst het volgende commando uitvoeren:


```
# sftp admin@pcc-178-32-194-8.ovh.com
```


U wordt dan om uw wachtwoord gevraagd:


```
# sftp admin@pcc-178-32-194-8.ovh.com
Connecting to pcc-178-32-194-8.ovh.com...
admin@pcc-178-32-194-8.ovh.com's password:
```


U kunt inloggen op vSphere met het wachtwoord dat u heeft ontvangen via e-mail:


```
* You can download it at: https://pcc-178-32-194-8.ovh.com/client/VMware-viclient.exe
* IP address/Name: pcc-178-32-194-8.ovh.com
* user name: admin
* password: xxxxxxx
```


Eenmaal ingelogd kunt u uw datastores opvragen:


```
sftp> ls
pcc-000714
sftp>
```


Nadien importeert u een image in de datastore.
U kunt dit doen met het volgende commando:


```
sftp> cd pcc-000714
```

 (dit is alleen een voorbeeld, u dient de datastore te wijzigen, die u via het vorige commando verkregen heeft)
Eenmaal in de datastore, hoeft u alleen nog de file te importeren:


```
sftp> put /home/ubuntu-11.10-desktop-i386-fr.iso to /datastore/pcc-000714/ubuntu-11.10-desktop-i386-fr.iso
/home/loic/Bureau/ubuntu-11.10-desktop-i386-fr.iso 100% 655MB 8.0MB/s 01:22
```




## Vereisten
U zult een FTP/SFTP client moeten downloaden en installeren.

De meestgebruikte is Filezilla en deze kunt u downloaden via:


- [Filezilla download link](http://downloads.sourceforge.net/filezilla/FileZilla_3.5.2_win32-setup.exe)




## Configuratie en gebruik
Voor de SFTP-verbinding van uw private cloud, zult u de gegevens moeten invoeren (3 in totaal), die u heeft ontvangen in de Private Cloud e-mail activatie:


```
* You can download it at: https://pcc-178-32-194-8.ovh.com/client/VMware-viclient.exe
* IP address/name: pcc-178-32-194-8.ovh.com
* user name: admin
* password: xxxxxxx
```


Hier een voorbeeld van de configuratie met het herstellen van PCC-000714:

![](images/connection_sftp_filezilla.png){.thumbnail}
Eenmaal ingelogd, kunt u dubbelklikken op pcc-000714 (zie het voorbeeld), dan kunt u het bestand drag&drop, om het te uploaden:

![](images/connection_sftp_filezilla.png){.thumbnail}

