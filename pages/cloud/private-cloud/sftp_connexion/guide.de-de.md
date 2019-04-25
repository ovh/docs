---
title: Verbindung per SFTP
excerpt: ''
slug: verbindung_per_sftp
legacy_guide_number: g589
---


## 
Zuerst einmal müssen Sie auf Ihrer Maschine einen Terminal bzw. Konsole öffnen, um die SFTP Verbindung starten zu können.

Unter Ubuntu mit Gnome Desktop finden Sie diesen zum Beispiel unter Anwendungen > Zubehör > Terminal.

Sobald das Terminal gestartet wurde überprüfen Sie, ob der sftp Befehl vorhanden ist:


```
# man sftp
```

(Dies ist natürlich nur ein Beispiel, Sie können auch die automatische Vervollständigung verwenden)
Wenn die Überprüfung erfolgreich war können Sie den Befehl wie folgt absetzen:


```
# sftp admin@pcc-178-32-194-8.ovh.com
```


Sie werden anschliessend nach dem Passwort gefragt:


```
# sftp admin@pcc-178-32-194-8.ovh.com
Connecting to pcc-178-32-194-8.ovh.com...
admin@pcc-178-32-194-8.ovh.com's password:
```


Geben Sie dann das vSphere Passwort an, das Sie in der Aktivierungs-Mail Ihrer Private Cloud erhalten haben:


```
- Mit dem VMWare vSphere Client

* Download: https://pcc-178-32-194-8.ovh.com/client/VMware-viclient.exe
* IP-Adresse/Name: pcc-178-32-194-8.ovh.com
* Benutzername: admin
* Passwort: xxxxxxxxx
```


Sobald Sie verbunden sind können Sie dann Ihre Datastores auflisten lassen:


```
sftp> ls
pcc-000714
sftp>
```


Anschliessend müssen Sie sich in den Datastore begeben, um beispielsweise Ihr Image zu importieren.
Verwenden Sie dazu folgenden Befehl:


```
sftp> cd pcc-000714
```

 (Dies ist nur ein Beispiel, Sie müssen natürlich den Datastore angeben, den Sie als Ausgabe des vorherigen Befehls erhalten haben)
Sobald Sie im Datastore sind müssen Sie dann nur noch die gewünschte Datei importieren:


```
sftp> put /home/ubuntu-11.10-desktop-i386-fr.iso to /datastore/pcc-000714/ubuntu-11.10-desktop-i386-fr.iso
/home/loic/Bureau/ubuntu-11.10-desktop-i386-fr.iso 100% 655MB 8.0MB/s 01:22
```




## Voraussetzungen
Sie müssen einen FTP/SFTP Client heruntergeladen und installiert haben.
Einer der am weitesten verbreiteten Clients, FileZilla, ist unter folgender Adresse verfügbar:


- [FileZilla Download-Link](http://downloads.sourceforge.net/filezilla/FileZilla_3.5.2_win32-setup.exe)




## Konfiguration und Verwendung
Für die SFTP Verbindung mit Ihrer Private Cloud benötigen Sie die Angaben, die Sie in der Aktivierungs-Mail Ihrer Private Cloud erhalten haben:


```
- Mit dem VMWare vSphere Client

* Download: https://pcc-178-32-194-8.ovh.com/client/VMware-viclient.exe
* IP-Adresse/Name: pcc-178-32-194-8.ovh.com
* Benutzername: admin
* Passwort: xxxxxxxxx
```


Hier ein Konfigurations-Beispiel für das in unseren Hilfen verwendete pcc-000714:

![](images/connection_sftp_filezilla.png){.thumbnail}
Sobald Sie verbunden sind können Sie dann auf Ihr PCC klicken und die zu übertragende Datei per Drag and Drop einfügen:

![](images/connection_sftp_filezilla.png){.thumbnail}

