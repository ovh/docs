---
title: Real Time Monitoring (RTM) installieren
slug: rtm-installieren
excerpt: So richten Sie Real Time Monitoring unter Linux oder Windows ein
section: Diagnose und Rescue-Modus
---

**Stand 19.03.2018**

## Einleitung

Durch Real Time Monitoring (RTM) können Sie Ihren Server und seine Aktivität teilweise überwachen. In Ihrem Kundencenter sehen Sie beispielsweise die Auslastung des Prozessors (CPU) und des Arbeitsspeichers (RAM), offene Ports usw. Die Installation des RTM-Pakets ist notwendig, um diese Informationen verfügbar zu machen.

**In dieser Anleitung erfahren Sie, wie Sie RTM unter Windows oder Linux installieren.**

## Voraussetzungen

- Sie sind via SSH (oder über Ihre grafische Benutzeroberfläche) auf Ihrem Linux-Server eingeloggt (*Root*-Zugriff).
- Sie sind über den Remotedesktop auf Ihrem Windows Server eingeloggt (*Administrator*-Zugriff).
- Sie sind in Ihrem [Kundencenter](https://www.ovh.com/auth/?action=gotomanager){.external} eingeloggt.

## Beschreibung

Sobald Sie RTM im Bereich `Dedicated`{.action} Ihres Kundencenters installiert haben, können Sie Ihren Server überwachen. Auf der Hauptseite Ihres Servers werden Ihnen unter `Real Time Monitoring` die Informationen zu Ihrem Monitoring angezeigt:

![Real Time Monitoring](images/rtm.png)

> [!primary]
>
> Manche Firewall-Regeln können das Monitoring Ihrer IT-Infrastruktur gegebenenfalls verhindern, auch wenn Sie RTM hinzugefügt haben. Vergessen Sie nicht, den Zugriff auf Ihren Server für die IPs des OVH Monitorings freizugeben. Weitere Informationen finden Sie [hier](https://docs.ovh.com/gb/en/dedicated/monitoring-ip-ovh/){.external} (Englisch).
> 

### Installation von RTM unter Linux

Wenn Sie via SSH auf Ihrem Server eingeloggt sind, brauchen Sie nur noch folgenden Befehl auszuführen:

```sh
wget ftp://ftp.ovh.net/made-in-ovh/rtm/install_rtm.sh -O install_rtm.sh | sh install_rtm.sh
```

### Installation von RTM unter Windows

Sobald Sie über den Remotedesktop eingeloggt sind, gehen Sie wie folgt vor:

- Installieren Sie ActivePerl, falls RTM noch nie installiert wurde. Sie können es über folgenden Link herunterladen: <http://www.activestate.com/activeperl/>.
- Laden Sie die aktuellste Version des RTM herunter und installieren Sie diese: <ftp://ftp.ovh.net/made-in-ovh/rtm/windows/>;
- Klicken Sie mit der rechten Maustaste auf die Datei und anschließend auf `Als Administrator ausführen`{.action}.


## Weiterführende Informationen

[Die Monitoring-IPs von OVH (Englisch)](https://docs.ovh.com/gb/en/dedicated/monitoring-ip-ovh/)

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.