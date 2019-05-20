---
title: Umstellung einer Instanz auf den Rescue-Modus
excerpt: Umstellung einer Instanz auf den Rescue-Modus
slug: umstellung_einer_instanz_auf_den_rescue-modus
legacy_guide_number: g2029
---


## 
Bei einer fehlerhaften Konfiguration oder dem Verlust des SSH Schlüssels kann es vorkommen, dass Sie keinen Zugang mehr zu Ihrer Instanz haben.

Um wieder Zugriff zu erhalten stellen wir Ihnen den Rescue-Modus zur Verfügung, über den Sie sich mit Ihrer Instanz verbinden und die notwendigen Konfigurationsdateien anpassen können.

Dabei wird Ihre Instanz auf einem neuen Image (einer neuen Instanz mit einer Standard-Konfiguration) gestartet. Die Festplatte Ihrer Instanz wird dann als zusätzliche Festplatte an die neue Instanz angehängt und muss nur noch von Ihnen gemountet werden, damit Sie auf Ihre Daten zugreifen und diese bearbeiten können.

In dieser Hilfe wird die Verwendung des Rescue-Modus beschrieben.


## Voraussetzungen

- [Erstellung einer Instanz im OVH Kundencenter]({legacy}1775)




## Umstellung auf den Rescue-Modus
Um Ihren Server in den Rescue-Modus zu versetzen, klicken Sie einfach auf den Pfeil rechts oben auf der Übersichtsseite Ihrer Instanz und wählen Sie "Start im Rescue-Modus" aus:

![](images/img_3494.jpg){.thumbnail}
Anschließend wählen Sie das Image aus, mit dem Sie Ihren Server im Rescue-Modus starten möchten:

![](images/img_3495.jpg){.thumbnail}
In dem Dropdown-Menü finden Sie die standardmäßig von uns angebotenen Images sowie ein zusätzliches Image "Rescue-Distribution Made by OVH", mit dem Sie sich mit Hilfe eines temporären Passworts für den Rescue-Modus mit Ihrer Instanz verbinden können.

Sobald der Server auf den Rescue-Modus umgestellt wurde, wird rechts unten ein Fenster mit Ihrem temporären Passwort angezeigt:

![](images/img_3497.jpg){.thumbnail}


## Zugriff auf Ihre Daten
Wie weiter oben beschrieben, werden die Daten Ihrer Instanz im Rescue-Modus als zusätzliche Festplatte eingebunden.
Sie müssen diese dann nur noch wie folgt mounten, um darauf zugreifen zu können:


- root-Rechte verschaffen:


```
admin@instance:~$ sudo su
```


- Die verfügbaren Festplatten überprüfen:


```
root@instance:/home/admin# lsblk
NAME MAJ:MIN RM SIZE RO TYPE MOUNTPOINT
vda 253:0 0 1G 0 disk
└─vda1 253:1 0 1023M 0 part /
vdb 253:16 0 10G 0 disk
└─vdb1 253:17 0 10G 0 part
```


- Die Partition mounten


```
root@instance:/home/admin# mount /dev/vdb1 /mnt
```



Ihre Daten sind dann im Ordner /mnt verfügbar.

Sie können nun zum Beispiel die Datei mit der Liste der vom Benutzer admin verwendbaren SSH Schlüssel bearbeiten und einen neuen Schlüssel hinzufügen:


```
root@instance:/home/admin# vim /mnt/home/admin/.ssh/authorized_keys
```




## Neustart Ihrer Instanz im normalen Modus
Nachdem Sie die gewünschten Operationen durchgeführt haben, können Sie Ihre Instanz wieder im normalen Modus starten. Klicken Sie dazu auf den Pfeil rechts oben auf der Übersichtsseite Ihrer Instanz und wählen Sie "Den Rescue Modus verlassen" aus:

![](images/img_3496.jpg){.thumbnail}


## OpenStack API
Über die OpenStack API können Sie Ihre Instanz im Rescue-Modus neu starten. Verwenden Sie dafür folgenden Befehl:


```
root@server:~# nova rescue INSTANCE_ID
```


Um den Rescue-Modus zu beenden, verwenden Sie folgenden Befehl:


```
root@server:~# nova unrescue INSTANCE_ID
```




## 

- [Erstellung der SSH Schlüssel]({legacy}1769)
- [Konfiguration zusätzlicher SSH Schlüssel]({legacy}1924)




## 
[Zurück zum Index der Cloud Hilfen]({legacy}1785)

