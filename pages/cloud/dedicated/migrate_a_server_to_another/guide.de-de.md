---
title: Migrieren von Daten von einem dedizierten Server auf einen anderen
slug: migrieren-von-daten-von-einem-dedizierten-server-auf-einen-anderen
excerpt: Finden Sie heraus, wie man Daten von einem dedizierten Server auf einen anderen migriert
section: Erste Schritte
order: 5
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie beim geringsten Zweifel die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button “Mitmachen“ auf dieser Seite.
>

**Letzte Aktualisierung am 14.09.2021**

## Einleitung

Da sich Ihre Bedürfnisse und die OVHcloud-Reihen ständig weiterentwickeln, ist es manchmal notwendig, die Server zu ändern und die Daten entsprechend zu migrieren.

**Diese Anleitung dient der Zentralisierung der Schritte zur Migration der Daten von einem Server auf einen anderen.**

> [!warning]
>
> OVH stellt Ihnen Maschinen zur Verfügung, für die Sie die alleinige Verantwortung tragen. Da wir keinen Zugriff auf diese Maschinen haben, können wir keinerlei Administrator-Aufgaben für diese Server übernehmen. Es liegt daher in Ihrer Verantwortung, das Softwaremanagement und die tägliche Sicherheit Ihrer Anlage zu gewährleisten.
>
> Wir stellen Ihnen diesen Leitfaden zur Verfügung, um Ihnen bei der Bewältigung alltäglicher Server-Verwaltungsaufgaben zu helfen. Wir empfehlen Ihnen jedoch, sich an einen spezialisierten Dienstleister zu wenden, wenn Sie Schwierigkeiten oder Zweifel hinsichtlich der Verwaltung, Nutzung oder Sicherheit eines Servers haben. Genauere Informationen finden Sie im Teil "Weiterführende Informationen" dieser Anleitung.
>

## Voraussetzungen

- zwei Dedicated Server (der alte und der neue) mit dem installierten Betriebssystem
- administrativer Zugang zu Ihren Servern
- Systemadministrationskenntnisse

## Beschreibung

> [!warning]
>
> Einige der in dieser Anleitung aufgeführten Optionen sind möglicherweise nicht für Ihre Server-Reihe verfügbar oder befinden sich in einem anderen Bereich Ihres Konfigurationspanels (Kimsufi, So you Start).
>

### Vorbereitung Ihrer Umgebung

Sobald der neue Server an Ihren Account geliefert wurde, ist der erste Schritt, eine Umgebung (Betriebssystem, Software, Sicherheit...) zu erstellen, die mit der vorherigen Umgebung identisch ist, oder zumindest so weit wie möglich.

Wenn eine Änderung der Betriebssystem- oder Software-Version erforderlich ist, überprüfen Sie bitte, dass die Dateistandorte gleich bleiben und die Datenkompatibilität zwischen den Versionen gewährleistet ist.

### Datenmigration

Bei der Datenmigration wird in der Regel das Kopieren von Dateien von einem Server auf einen anderen erforderlich. Hierfür gibt es mehrere Möglichkeiten:

- Die einfachste Methode ist die Verwendung eines geeigneten Programms wie [SFTP](https://docs.ovh.com/de/dedicated/daten-via-sftp-exportieren-und-ablegen/).
- Die andere Option besteht darin [beiden Server miteinander zu synchronisieren](https://docs.ovh.com/de/dedicated/kopieren-daten-server-rsync/).

### Verwendung des Backup Storage (nur verfügbar für OVHcloud und So you Start)

Mit der Option [Backup Storage](https://www.ovhcloud.com/de/bare-metal/backup-storage/) können Sie Daten auf einem Dienst speichern, der nicht mit Ihrem Server verbunden ist. Es ist ausschließlich an die Dienstleistung gebunden, von der aus Sie die Bestellung durchgeführt haben.

> [!warning]
>
> Der Backup storage ist ausschließlich von OVHcloud Servern und IP-Adressen in derselben Zone aus verfügbar.
>
> Wenn zum Beispiel die Backup storage auf einem Server im SBG-Rechenzentrum aktiviert ist, können Server in GRA- oder RBX-Rechenzentren darauf zugreifen. Server in BHS oder WAW Rechenzentren haben jedoch keinen Zugriff auf diese Speicherung.
>

Sie können Zugriff auf den Backup storage von Ihrem neuen Server aus erlauben. So verfügen Sie über ein Gateway zum Datentransfer.

Weitere Informationen finden Sie in unserer Anleitung [Backup Storage auf einem Dedicated Server verwenden](https://docs.ovh.com/de/dedicated/dienste-storage-backup/){.external}.

### Migration einer Failover-IP (nur verfügbar für OVHcloud und So you Start)

> [!warning]
>
> Die Haupt-IP-Adresse eines Servers kann nicht migriert werden und wird im Prozess verloren gehen.
>
> Die Migration einer Failover-IP zwischen zwei Accounts verschiedener Zweige ist nur über einen So you Start Account zu OVHcloud möglich. Es ist nicht möglich, eine Failover-IP von einem OVHcloud-Konto auf So you Start zu migrieren.
>

Wenn der Ruf Ihrer IP-Adressen wichtig ist, empfehlen wir Ihnen dringend die Verwendung von [Failover-IP](https://www.ovhcloud.com/de/bare-metal/ip/), da diese bei einer Migration beibehalten werden können.

Wenn Sie diese IP-Adressen haben, können Sie diese einfach auf den neuen Server umziehen.
Lesen Sie hierzu unsere Anleitung: [Eine Failover-IP umziehene](https://docs.ovh.com/de/dedicated/ip-fo-move/).

> [!alert]
>
> Beim Löschen des ursprünglichen Servers, für den eine oder mehrere Optionen bestellt wurden (Backup-Storage, Failover-IP), werden diese Optionen endgültig gelöscht.
>
> Alle Änderungen müssen daher vorgenommen werden, bevor der Dienst gelöscht wird.
>

Wenn die Daten auf dem neuen Server verfügbar sind, müssen Sie möglicherweise Ihre DNS-Konfiguration ändern, zum Beispiel, wenn die Haupt-IP-Adresse verwendet wurde.

Weitere Informationen finden Sie in unserer Dokumentation zu den [domains und DNS](https://docs.ovh.com/de/domains/).

## Weiterführende Informationen

Wenn Sie Hilfe bei der Migration Ihres Servers benötigen, kontaktieren Sie [unser Partnernetz](https://partner.ovhcloud.com/de/).

Für den Austausch mit unserer Community gehen Sie auf <https://community.ovh.com/en/>.