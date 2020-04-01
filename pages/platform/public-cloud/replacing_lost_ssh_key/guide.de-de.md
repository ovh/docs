---
title: 'Änderung des SSH-Schlüssels bei Verlust'
excerpt: 'Erfahren Sie hier, wie Sie den SSH-Zugriff auf Ihre Public Cloud Instanz wiederherstellen können'
slug: nderung_des_ssh_schlussels_bei_verlust
legacy_guide_number: g2069
section: Sicherheit
order: 4
---

**Letzte Aktualisierung am 01.04.2020**

## Ziel

Bei einem Verlust des SSH-Schlüssels, zum Beispiel nach einer Reinstallation Ihres Computers, kann es vorkommen, dass Sie sich nicht mehr mit Ihrer Instanz verbinden können, wenn Sie keine alternative Zugangsmöglichkeit eingerichtet haben.

Um wieder Zugriff zu erhalten, stellen wir Ihnen den Rescue Modus zur Verfügung, über den Sie sich mit Ihrem Server verbinden und die notwendigen Dateien anpassen können.

**In dieser Anleitung wird erklärt, wie Sie die Datei *authorized_keys* des Admin-Benutzers anpassen können, um einen neuen SSH-Schlüssel zur Verbindung mit Ihrer Instanz hinzuzufügen.**


## Voraussetzungen

- Sie verfügen über eine [Public Cloud Instanz](https://www.ovhcloud.com/de/public-cloud).
- SSH-Zugriff auf Ihre Instanz [Rescue-Modus](https://docs.ovh.com/de/public-cloud/umstellung_einer_instanz_auf_den_rescue-modus).


## In der praktischen Anwendung

Nachdem Sie die Festplatte Ihrer Instanz im Rescue Modus gemountet haben, können Sie auf sämtliche darauf befindlichen Daten zugreifen.

Ihre SSH-Schlüssel befinden sich in der Datei:


```
/home/NOM_UTILISATEUR/.ssh/authorized_keys
```


Editieren Sie diese Datei und fügen Sie Ihren neuen SSH-Schlüssel ein:


```
admin@instance:~$ sudo vim /mnt/home/NOM_UTILISATEUR/.ssh/authorized_keys

ssh-rsa 1111111111122222222222333333333333444444444555555555556666666666
777777777778888888888999999900000000000000000000000000== old@sshkey
ssh-rsa AAAAAAAAABBBBBBBBBBBCCCCCCCCCCCCCCCCDDDDDDDDDDDDDDDDDDDEEEEEEEEE
EEFFFFFFFFFFFFFGGGGGGGGGGGGGhhhhhhhhhhhhhhhhhhhhhhhhhh== new@sshkey
```



Um den SSH-Schlüssel Ihres Standard-Benutzers zu ändern, begeben Sie sich einfach in dessen Home-Verzeichnis.

Für den Benutzer „admin“ befindet sich die Datei zum Beispiel im Verzeichnis:


```
/home/admin/.ssh/authorized_keys
```


Bei einer Ubuntu 15.10 Instanz ist der Standard-Benutzer „ubuntu“, Sie finden die Datei also im Verzeichnis:


```
/home/ubuntu/.ssh/authorized_keys
```


Sie können im Rescue Modus auch das Passwort Ihres Standard-Benutzers mit folgenden Befehlen ändern (in diesem Beispiel für den Benutzer „admin“):


- Mounten Sie das Dateisystem:

```
root@instance:/home/admin# mount /dev/vdb1 /mnt/
root@instance:/home/admin# chroot /mnt/
```

- Ändern Sie das Passwort von „admin“:


```
root@instance:/# passwd admin
```

Nachdem Sie die Änderung durchgeführt und gespeichert haben, können Sie Ihre Instanz wieder von deren Festplatte starten und sich dann mit Ihrem neuen SSH-Schlüssel anmelden.


## Weiterführende Informationen

[Umstellung einer Instanz auf den Rescue-Modus](https://docs.ovh.com/de/public-cloud/umstellung_einer_instanz_auf_den_rescue-modus)

[Root-Rechte erlangen und Passwort festlegen](https://docs.ovh.com/de/public-cloud/root-rechte_erlangen_und_passwort_festlegen)


Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
