---
title: Cloud Archive Swift - Verwaltung von Archiven über einen Swift-Client (Cyberduck)
excerpt: Erfahren Sie hier, wie Sie Cyberduck konfigurieren, um Ihre Public Cloud Archive verwalten zu können
updated: 2021-06-18
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie im Zweifelsfall die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button "Beitragen" auf dieser Seite.
>


## Ziel

Public Cloud Archive ist eine Speicherlösung, die mit OpenStack-APIs verwendet werden kann. Wenn Sie mit der Verwaltung eines Speicherplatzes über die Kommandozeile nicht vertraut sind, können Sie auch eine GUI-basierte Lösung nutzen, die auf der OpenStack-API aufsetzt.

CyberDuck ist eine solche Lösung und ist einfach konfigurierbar. Es sind noch weitere grafische Interfaces verfügbar, deren Konfiguration der entsprechen sollte, die hier erklärt wird.

**Diese Anleitung erklärt, wie Sie Cyberduck konfigurieren, um Public Cloud Archive über ein grafisches Interface auf OpenStack-Basis zu verwalten.**

> [!warning]
> OVHcloud stellt Ihnen Dienstleistungen zur Verfügung, für deren Konfiguration und Verwaltung Sie die alleinige Verantwortung tragen. Es liegt somit bei Ihnen, sicherzustellen, dass diese ordnungsgemäß funktionieren.
>
> Diese Anleitung soll Sie bei allgemeinen Aufgaben so weit wie möglich unterstützen. Bei Schwierigkeiten kontaktieren Sie bitte einen [spezialisierten Dienstleister](https://partner.ovhcloud.com/de/directory/) und/oder stellen Ihre Fragen in der [OVHcloud Community](https://community.ovh.com/en/).
>

## Voraussetzungen

- Sie haben [Cyberduck](https://cyberduck.io/) installiert.
- Sie verfügen über Ihre Benutzer- (*OS_USERNAME*) und Projekt-Kennungen (*OS_PROJECT_NAME* oder *OS_TENANT_NAME*), die Sie [erhalten können](/pages/public_cloud/compute/loading_openstack_environment_variables#schritt-nr-1-die-variablen-wieder-erhalten), indem Sie die Datei "OpenRC" im [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) herunterladen.
- Sie haben Ihr OpenStack-Benutzerpasswort.

Wenn Sie Ihr OpenStack-Benutzerpasswort nicht mehr kennen, können Sie es mithilfe [dieser Anleitung](/pages/public_cloud/compute/change_openstack_user_password_in_horizon) ändern.

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

[Erste Schritte mit der Swift API](/pages/storage_and_backup/object_storage/pcs_getting_started_with_the_swift_api)

Wenn Sie Schulungen oder technische Unterstützung bei der Implementierung unserer Lösungen benötigen, wenden Sie sich an Ihren Vertriebsmitarbeiter oder klicken Sie auf [diesen Link](https://www.ovhcloud.com/de/professional-services/), um einen Kostenvoranschlag zu erhalten und eine persönliche Analyse Ihres Projekts durch unsere Experten des Professional Services Teams anzufordern.

Für den Austausch mit unserer Community gehen Sie auf <https://community.ovh.com/en/>.
