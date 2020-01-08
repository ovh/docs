---
title: 'Verwaltung Ihres Object Storage mit CyberDuck'
excerpt: 'Verwaltung Ihres Object Storage mit CyberDuck'
slug: verwaltung_ihres_object_storage_mit_cyberduck
section: 'Object Storage'
legacy_guide_number: g1868
---

**Stand 08.01.2020**

## 
Bei Object Storage handelt es sich um eine Speicher-Lösung, die in erster Linie mit der OpenStack API verwaltet wird.

Möglicherweise sind Sie aber mit dieser Art der Speicherplatz-Verwaltung nicht vertraut, bei der Kommandozeilen verwendet werden.

Daher gibt es auch grafische Lösungen, bei denen die OpenStack APIs im Hintergrund und damit für Sie unsichtbar verwendet werden.
CyberDuck ist eine dieser Lösungen und zeichnet sich durch eine hohe Benutzerfreundlichkeit aus.

Es sind aber auch weitere Interfaces verfügbar und im Internet leicht auffindbar; die Konfiguration dieser Lösungen ist mit der hier beschriebenen durchaus vergleichbar.

In dieser Hilfe erfahren Sie alles über die Konfiguration von CyberDuck für die Verwaltung Ihres Object Storage mithilfe eines grafischen Interfaces auf Grundlage der OpenStack APIs.


## Voraussetzungen

- Ein konfigurierter Horizon Nutzer: []({legacy}1773)
- IDs von Projekt und Nutzer (abrufbar im Menü [Zugriff und Sicherheit in Horizon]({legacy}1774) durch Download der OpenRC-Datei)




## 

- Download von [Cyberduck](https://cyberduck.io/)
- Verbindung mit einem Konto des Typs "Swift - OpenStack Object Storage"



![objectstorage-cyberduck](images/v3.0.png){.thumbnail}
In dem Formular müssen verschiedene Angaben gemacht werden:

- Server: auth.cloud.ovh.net (Authentifizierungs-Server)
- Tenant ID:Access Key: das bedeutet ID_des_Projekts:ID_Horizon_Nutzer
- Secret Key: Passwort des Horizon Nutzers
- More Options/Path: v3.0



- Einloggen



![objectstorage-cyberduck](images/img_2756.jpg){.thumbnail}


## 

- [Die ersten Schritte mit der API Swift]({legacy}1916)
- [Konfiguration von Owncloud mit Object Storage]({legacy}2000)




## 
... lesen Sie auch unsere anderen Hilfen zum Thema Cloud!

