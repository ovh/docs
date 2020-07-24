---
title: 'Host-Server löschen'
slug: host-server-loeschen
excerpt: 'So löschen Sie einen Host-Server aus Ihrer Private Cloud Infrastruktur'
legacy_guide_number: '1442308'
section: 'OVH Funktionen'
---

**Stand 24.07.2020**

## Einleitung

In einigen Fällen kann es nützlich sein, einen Host-Server aus Ihrem Cluster zu löschen, zum Beispiel, um einen ungenutzten „_Spare_-Host“ zu entfernen oder wenn Sie auf eine höhere Serverreihe umsteigen möchten.

**In dieser Anleitung erfahren Sie, wie Sie einen Host-Server sicher aus Ihrer Private Cloud Infrastruktur entfernen.**

## Voraussetzungen

* Sie verfügen über ein [Hosted Private Cloud](https://www.ovhcloud.com/de/enterprise/products/hosted-private-cloud/){.external} Angebot.
* Sie haben Zugriff auf das vSphere-Verwaltungsinterface.


## Beschreibung

Das Löschen eines Host-Servers erfolgt in zwei Schritten: Zuerst wird die Ressource in den Wartungsmodus versetzt und anschließend gelöscht.

### Wartungsmodus aktivieren

Nachdem Sie sich im vSphere-Interface eingeloggt haben, gehen Sie zum Inventar Ihrer Host-Server und Cluster. Klicken Sie mit der rechten Maustaste auf den betreffenden Host-Server und wählen Sie `Maintenance Mode`{.action} und `Enter Maintenance Mode`{.action} aus. Wenn betriebsbereite virtuelle Maschinen (VMs) auf diesem Server eingerichtet sind, werden Sie automatisch auf einem anderen Host-Server aus Ihrem Cluster gespeichert (sofern die Modi HA und DRS aktiviert sind).

![Aktivierung des Wartungsmodus](images/removehost01.png){.thumbnail}

Um die Aktivierung des Wartungsmodus zu bestätigen, klicken Sie im angezeigten Fenster auf `OK`{.action}.

![Bestätigung des Wartungsmodus](images/removehost02.png){.thumbnail}


Sie können den Fortschritt der Aktivierung des Wartungsmodus im Bereich `Recent Tasks` verfolgen.

![Nachverfolgung des Wartungsmodus](images/removehost03.png){.thumbnail}


### Host-Server löschen

Der Host-Server befindet sich jetzt im Wartungsmodus. Klicken Sie nun mit der rechten Maustaste auf den Server und wählen Sie `OVHcloud`{.action} und dann `Remove Host`{.action} aus.

![Host-Server entfernen](images/removehost04.png){.thumbnail}

Um den Löschvorgang zu bestätigen, klicken Sie im angezeigten Fenster auf den Button `Next`{.action}.

![Löschvorgang bestätigen](images/removehost05.png){.thumbnail}

Ihre Löschungsanfrage wurde registriert und wird nun ausgeführt.

![Löschvorgang überprüfen](images/removehost06.png){.thumbnail}

Sie können den Fortschritt des Löschvorgangs des Host-Servers im Bereich `Recent Tasks` verfolgen.

![Nachverfolgung des Löschvorgangs](images/removehost07.png){.thumbnail}

Der Host-Server wird innerhalb einiger Minuten gelöscht und erscheint nicht mehr in Ihrem Inventar. 

> [!primary]
>
> Wird während des Vorgangs ein Verzeichnis oder eine Datei im lokalen Speicher des Host-Servers hinzugefügt, wird der Löschvorgang aufgrund eines Fehlers unterbrochen. Nur Basisverzeichnisse und vSwap-Dateien blockieren den Vorgang nicht.
> 


## Weiterführende Informationen

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
