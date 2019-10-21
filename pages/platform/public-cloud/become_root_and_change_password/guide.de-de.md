---
title: 'Root-Rechte erlangen und Passwort festlegen'
excerpt: 'Root-Rechte erlangen und Passwort festlegen'
slug: root-rechte_erlangen_und_passwort_festlegen
legacy_guide_number: g1786
---

## 
Zur Durchführung bestimmter Aktionen kann es erforderlich sein, dass Sie sich root-Rechte verschaffen, um Operationen als Benutzer "root" realisieren zu können, zum Beispiel:


- Die Installation von Paketen
- Das Festlegen eines Passworts für einen Benutzer oder für Root (für den KVM Zugriff erforderlich)
- Verschiedene Administrationstätigkeiten




## Voraussetzungen

- [Eine erstellte Instanz](https://www.ovh.de/public-cloud/)
- Eine SSH-Verbindung zur Instanz mit dem Standardbenutzer (admin oder der Name der Distribution für neuere Images)



## Hinweis:
In dieser Hilfe gehen wir von dem Standardbenutzer admin aus.


## Festlegen eines Passworts

- Festlegen eines Passworts für den Benutzer admin (das Passwort wird bei der Eingabe aus Sicherheitsgründen nicht angezeigt):

```
~$ sudo passwd
Enter new UNIX password:
Retype new UNIX password:
passwd: password updated successfully
```


- Festlegen eines Passworts für den Benutzer root (das Passwort wird bei der Eingabe aus Sicherheitsgründen nicht angezeigt):

```
~$ sudo passwd root
Enter new UNIX password:
Retype new UNIX password:
passwd: password updated successfully
```





## Weitere Beispiele

- Update des Paket-Caches (Debian / Ubuntu):

```
~$ sudo apt-get update
```


- Update des Systems (CentOS / Fedora):

```
~$ sudo yum update
```


- Bearbeiten einer Konfigurationsdatei:

```
~$ sudo vi /etc/hosts.allow
```





## 

- root-Rechte verschaffen:

```
~$ sudo su -
~#
```


- Festlegen eines Passworts für den Benutzer root (nach dem Verschaffen von root-Rechten):

```
~# passwd
Enter new UNIX password:
Retype new UNIX password:
passwd: password updated successfully
```


- Festlegen eines Passworts für den Benutzer admin (nach dem Verschaffen von root-Rechten):

```
~# passwd admin
Enter new UNIX password:
Retype new UNIX password:
passwd: password updated successfully
```




## 
[Zurück zum Index der Cloud Hilfen](https://docs.ovh.com/de/public-cloud/)

