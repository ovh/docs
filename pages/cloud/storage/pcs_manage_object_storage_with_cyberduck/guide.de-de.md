---
title: 'Verwaltung Ihres Object Storage mit CyberDuck'
excerpt: 'Verwaltung Ihres Object Storage mit CyberDuck'
slug: verwaltung_ihres_object_storage_mit_cyberduck
section: 'Object Storage'
legacy_guide_number: g1868
---

**Stand 31.03.2021**

## Ziel

Bei Object Storage handelt es sich um eine Speicher-Lösung, die in erster Linie mit der OpenStack API verwaltet wird.

Möglicherweise sind Sie aber mit dieser Art der Speicherplatz-Verwaltung nicht vertraut, bei der Kommandozeilen verwendet werden.

Daher gibt es auch grafische Lösungen, bei denen die OpenStack APIs im Hintergrund und damit für Sie unsichtbar verwendet werden.
CyberDuck ist eine dieser Lösungen und zeichnet sich durch eine hohe Benutzerfreundlichkeit aus.

Es sind aber auch weitere Interfaces verfügbar und im Internet leicht auffindbar; die Konfiguration dieser Lösungen ist mit der hier beschriebenen durchaus vergleichbar.

In dieser Hilfe erfahren Sie alles über die Konfiguration von CyberDuck für die Verwaltung Ihres Object Storage mithilfe eines grafischen Interfaces auf Grundlage der OpenStack APIs.

## Voraussetzungen

- Ein konfigurierter Horizon Nutzer: [Auf das Horizon-Interface zugreifen](../../public-cloud/erstellung_eines_zugangs_zu_horizon/)
- IDs von Projekt und Nutzer (abrufbar im Menü [Zugriff und Sicherheit in Horizon](../../public-cloud/zugriff_und_sicherheit_in_horizon/) durch Download der OpenRC-Datei)

## In der praktischen Anwendung

- Download von [Cyberduck](https://cyberduck.io/)
- Verbindung mit einem Konto des Typs "Swift - OpenStack Object Storage"

![objectstorage-cyberduck](images/Cyberduck.png){.thumbnail}

In dem Formular müssen verschiedene Angaben gemacht werden:

- Server: auth.cloud.ovh.net (Authentifizierungs-Server)
- Project:Domain:Username : OS_TENANT_NAME:default:OS_USERNAME
- Secret Key: Passwort des Horizon Nutzers
- More Options/Path: v3.0

- Einloggen

![objectstorage-cyberduck](images/img_2756.jpg){.thumbnail}

## Weiterführende Informationen

- [Die ersten Schritte mit der API Swift](../../public-cloud/die_ersten_schritte_mit_der_swift_api/)

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
