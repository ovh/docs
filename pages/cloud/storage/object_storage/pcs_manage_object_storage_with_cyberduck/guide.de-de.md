---
title: Object Storage Swift - Verwaltung Ihres Object Storage mit CyberDuck
routes:
    canonical: 'https://docs.ovh.com/de/storage/pca/cyberduck/'
excerpt: 'Verwaltung Ihres Object Storage mit CyberDuck'
slug: pcs/manage-object-storage-with-cyberduck
section: OpenStack Swift Storage Class Specifics
legacy_guide_number: g1868
order: 180
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie beim geringsten Zweifel die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button «Mitmachen» auf dieser Seite.
>

**Stand 18.06.2021**

## Ziel

Bei Object Storage handelt es sich um eine Speicher-Lösung, die in erster Linie mit der OpenStack API verwaltet wird.

Möglicherweise sind Sie aber mit dieser Art der Speicherplatz-Verwaltung nicht vertraut, bei der Kommandozeilen verwendet werden.

Daher gibt es auch grafische Lösungen, bei denen die OpenStack APIs im Hintergrund und damit für Sie unsichtbar verwendet werden.
CyberDuck ist eine dieser Lösungen und zeichnet sich durch eine hohe Benutzerfreundlichkeit aus.

Es sind aber auch weitere Interfaces verfügbar und im Internet leicht auffindbar; die Konfiguration dieser Lösungen ist mit der hier beschriebenen durchaus vergleichbar.

**In dieser Hilfe erfahren Sie alles über die Konfiguration von CyberDuck für die Verwaltung Ihres Object Storage mithilfe eines grafischen Interfaces auf Grundlage der OpenStack APIs.**

> [!warning]
> OVHcloud stellt Ihnen Dienstleistungen zur Verfügung, für deren Konfiguration und Verwaltung Sie die alleinige Verantwortung tragen. Es liegt somit bei Ihnen, sicherzustellen, dass diese ordnungsgemäß funktionieren.
>
> Diese Anleitung soll Sie bei allgemeinen Aufgaben so weit wie möglich unterstützen. Bei Schwierigkeiten kontaktieren Sie bitte einen [spezialisierten Dienstleister](https://partner.ovhcloud.com/de/directory/) und/oder stellen Ihre Fragen in der [OVHcloud Community](https://community.ovh.com/en/).
>

## Voraussetzungen

- Sie haben [Cyberduck](https://cyberduck.io/) installiert.
- Sie verfügen über Ihre Benutzer- (*OS_USERNAME*) und Projekt-Kennungen (*OS_PROJECT_NAME* oder *OS_TENANT_NAME*), die Sie [erhalten können](https://docs.ovh.com/de/public-cloud/die-variablen-der-umgebung-openstack-laden/#schritt-nr-1-die-variablen-wieder-erhalten), indem Sie die Datei "OpenRC" im [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) herunterladen.
- Sie haben Ihr OpenStack-Benutzerpasswort.

Wenn Sie Ihr OpenStack-Benutzerpasswort nicht mehr kennen, können Sie es mithilfe [dieser Anleitung](https://docs.ovh.com/de/public-cloud/openstack-benutzerpasswort-aendern/) ändern.

## In der praktischen Anwendung

**Diese Anleitung basiert auf der Cyberduck Version 7.9.2 für MacOS.**

> [!primary]
>
> Je nachdem, wo Sie die OpenRC-Datei beziehen (über Horizon oder über Ihr OVHcloud Kundencenter), kann Ihre Projektkennung als *OS_PROJECT_NAME* oder *OS_TENANT_NAME* bezeichnet sein.
>

Öffnen Sie in Cyberduck eine Verbindung des Typs "OpenStack Swift (Keystone 3)".

![pca-cyberduck](images/login.png){.thumbnail}

Geben Sie die folgenden Informationen an:

- Server: auth.cloud.ovh.net
- Project:Domain:Username: OS_PROJECT_NAME:default:OS_USERNAME
- Password: das Passwort Ihres OpenStack-Benutzers

Klicken Sie dann auf `Connect`{.action}. Sobald Sie eingeloggt sind, haben Sie Zugriff auf die Ordnerstruktur Ihrer Dateien.

![pca-cyberduck](images/successful-login.png){.thumbnail}

> [!primary]
>
> Bei Verbindungsschwierigkeiten können Sie das Cyberduck Verbindungsprofil für "OpenStack Swift (Keystone 3)" herunterladen und es mit Cyberduck öffnen.
> <br><br>Klicken Sie <a href="https://trac.cyberduck.io/browser/shelves/02.2020/profiles/default/Openstack%20Swift%20(Keystone%203).cyberduckprofile?rev=48724&order=name" download>hier rechts und dann "Ziel speichern unter"</a>, um das Profil herunterzuladen.
>

## Weiterführende Informationen

[Cyberduck Dokumentation](https://trac.cyberduck.io/wiki/help/en){.external}

[Erste Schritte mit der Swift API](https://docs.ovh.com/de/public-cloud/die_ersten_schritte_mit_der_swift_api/)

Für den Austausch mit unserer Community gehen Sie auf <https://community.ovh.com/en/>.
