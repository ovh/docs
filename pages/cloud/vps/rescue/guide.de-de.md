---
title: Rescue-Modus für VPS
slug: rescue
excerpt: In dieser Anleitung erfahren Sie, wie Sie Ihren VPS in den Rescue-Modus versetzen
section: Diagnose & Rescue Modus
---

**Stand 18.04.2018**

## Einleitung

Im Rescue-Modus kann Ihr Server aus einer unabhängigen OVH Konfiguration gestartet und Ihre Partition somit unabhängig gemounted werden.

So können Sie Tests oder Änderungen vornehmen, wenn es am besten in Ihren Zeitplan passt und die Operationen auf Ihrem Server am wenigsten stört. Außerdem können Sie Fehler in der Konfiguration korrigieren, die den Zugriff auf die Festplatte des Servers blockieren.

> [!warning]
>
> Wenn Dienste auf Ihrem VPS bereits online sind, werden diese vom Rescue-Modus gestoppt, bis der Server im normalen Modus neu gestartet wird.
> 

In dieser Anleitung erfahren Sie, wie Sie Ihren VPS im Rescue-Modus neu starten. 

## Voraussetzungen

- Sie sind in Ihrem [Kundencenter](https://www.ovh.com/auth/?action=gotomanager){.external} eingeloggt.


## Beschreibung

Wenn Sie in Ihrem Kundencenter eingeloggt sind, gehen Sie in den Bereich `Cloud`{.action} und wählen Ihren VPS in der linken Spalte aus:

![VPS Bereich im Kundenbereich](images/vps_rescue1.png){.thumbnail}

Auf der Hauptseite Ihres VPS klicken Sie auf die Schaltfläche `Neustart im Rescue-Modus`{.action} und dann auf `Bestätigen`{.action}, um den VPS im Rescue-Modus neu zu starten.

![Validierung des Neustart in Rescue-Modus](images/vps_rescue2.png){.thumbnail}

Ein Ladebalken wird eingeblendet, der Sie über den Fortschritt des Neustarts informiert (dies kann einige Minuten dauern):

![Fortschritt des Neustart in Rescue-Modus](images/rescue_task.png){.thumbnail}

> [!primary]
>
> Sie erhalten daraufhin eine automatische E-Mail mit den SSH-Zugangsdaten für den Rescue-Modus Ihres VPS. Diese E-Mail können Sie auch in Ihrem Kundencenter im Bereich `Mein Account`{.action} unter `Empfangene E-Mails`{.action} einsehen.
> 

Sie können sich nun via SSH im Rescue-Modus mit Ihrem VPS verbinden. Wenn die Änderungen im `Rescue-Modus` abgeschlossen sind, können Sie Ihren VPS über die Schaltfläche `Meinen VPS neu starten`{.action} auf der primären Festplatte neu starten.


## Weiterführende Informationen

[SSH Einführung](https://docs.ovh.com/de/dedicated/ssh-einfuehrung/){.external}

Für den Austausch mit unserer User Community besuchen Sie <https://community.ovh.com/en/>.