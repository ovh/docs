---
title: 'Automatisches Backup'
excerpt: ''
slug: automatisches_backup
legacy_guide_number: g1486
hidden: true
---

## 
Zur Verwaltung des automatischen Backups benötigen Sie:


- Einen VPS Cloud
- Ihre Zugangsdaten für das OVH Kundencenter
- Zugriff auf Ihren Server per SSH oder RDP


## Über das Kundencenter
Verbinden Sie sich zuerst über folgenden Link mit Ihrem OVH Kundencenter: [Kundencenter](https://www.ovh.com/manager/web/)

![](images/img_2080.jpg){.thumbnail}

- Tragen Sie bei "Account ID" Ihre OVH Kundenkennung (Beispiel: XY12345-OVH) ein

- Tragen Sie bei "Password" das Passwort Ihrer OVH Kundenkennung ein


Wählen Sie nun Ihren VPS in dem Menü auf der linken Seite aus:

![](images/img_2023.jpg){.thumbnail}
Klicken Sie auf der Übersichtsseite des VPS im unteren Bereich auf die Rubrik "Automatisches Backup":

![](images/img_2026.jpg){.thumbnail}
Klicken Sie dann rechts unten auf das Icon "Das Automatische Backup aktivieren".

![](images/img_2027.jpg){.thumbnail}
Setzen Sie ein Häkchen, um die Bedingungen des Angebots zu akzeptieren, und klicken Sie auf "Weiter":

![](images/img_2028.jpg){.thumbnail}
Klicken Sie nun auf "Bezahlen", um zum Bestellschein für diese Option zu gelangen. Sobald die Zahlung dafür von unserem System registriert wird, wird das Automatische Backup aktiviert.


## Über das Kundencenter
Verbinden Sie sich zuerst wie im ersten Teil dieser Anleitung beschrieben mit Ihrem OVH Kundencenter und wählen Sie den VPS mit der aktivierten Option "Automatisches Backup" aus.
Klicken Sie auf der Übersichtsseite des VPS im unteren Bereich auf die Rubrik "Automatisches Backup", um die Liste der verfügbaren Backups einzusehen:

![](images/img_2021.jpg){.thumbnail}
Wählen Sie unter "Wiederherstellung" das gewünschte Backup aus:

![](images/img_2025.jpg){.thumbnail}
Nachdem Sie die Auswahl bestätigt haben wird ein Wiederherstellungs-Task gestartet. Dessen Durchführung nimmt je nach VPS Modell etwa 30 Minuten bis 1 Stunde in Anspruch.

Sobald die Wiederherstellung abgeschlossen wurde, erhalten Sie eine E-Mail mit den Verbindungsinformationen Ihres VPS:


```
ZUGANGSDATEN:

Die IPv4-Adresse des VPS ist: Ihre IPv4
Die IPv6-Adresse des VPS ist: Ihre IPv6

Der Name des VPS ist: vpsXXXXX.ovh.net

Das Passwort Ihres VPS ist das am 2014-06-24 02:37:16 gültige Passwort.
```




## Über das Kundencenter
Nachdem Sie sich wie oben beschrieben mit Ihrem OVH Kundencenter verbunden haben, wählen Sie den gewünschten VPS aus. Klicken Sie dann unten auf die Rubrik "Automatisches Backup" und wählen Sie den gewünschten Moutpunkt aus:

![](images/img_2022.jpg){.thumbnail}
Nachdem Sie Ihre Anfrage bestätigt haben, erhalten Sie kurze Zeit später eine E-Mail mit den Angaben zum Mounten des Backups auf Ihrem VPS.

In der E-Mail finden Sie die Befehle zum Mounten Ihres Backups per NFS oder CIFS:


```
Sie können Ihr Backup unter Linux mit folgenden Befehlen mounten:

mount -t nfs -o ro,vers=3 IP.IP.IP.IP:/mnt/veeam/vpsXXXXX /mnt

Dazu kann es eventuell erforderlich sein, unter Debian und Ubuntu das Paket nfs-common und unter CentOS die Pakete nfs-utils und nfs-utils-lib zu installieren.

mount -t cifs -o username=vpsXXXXX,password=YYYYYY //IP.IP.IP.IP/VPSXXXXX /mnt

Dazu kann es eventuell erforderlich sein, unter Debian, Ubuntu und CentOS das Paket cifs-utils zu installieren.
```



