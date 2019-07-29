---
title: 'IP-Block-Ankündigung im vRack ändern'
slug: ip-block-ankuendigung-im-vrack-aendern
excerpt: 'So ändern Sie die IP-Block-Ankündigung im vRack'
section: vRack
---

**Stand 22.07.2019**

## Einleitung

Das [vRack]({ovh_www}/loesungen/vrack/){.external} ist ein privates Netzwerk, mit dem Sie das Routing zwischen zwei oder mehr OVH [Dedicated Servern]({ovh_www}/dedicated_server/){.external} einrichten können.

**In dieser Anleitung erfahren Sie, wie Sie die IP-Block-Ankündigung im vRack ändern.**

## Voraussetzungen

- Sie besitzen ein [vRack]({ovh_www}/loesungen/vrack/){.external}.
- Sie haben [einen IP-Adressblock im vRack eingerichtet](../vrack-ip-block-hinzufuegen-oder-entfernen/).
- Sie verfügen über fortgeschrittene Netzwerkkenntnisse.

## Beschreibung

### Schritt 1: Aktuelle Ankündigungszone ermitteln

Ermitteln Sie zunächst die aktuelle Ankündigungszone des betreffenden IP-Blocks. Führen Sie hierzu „traceroute“ auf einer von Ihnen gewählten IP-Adresse des Blocks aus. 

```sh
traceroute to 1.2.3.4, 30 hops max, 60 byte packets
 1  54.36.52.1 (54.36.52.1)  0.464 ms  0.461 ms  0.454 ms
 2  158.69.61.222 (158.69.61.222)  0.443 ms  0.426 ms  0.411 ms
 3  gra-z1b1-a70.fr.eu (92.222.60.62)  0.394 ms  0.396 ms  0.391 ms
 4  po101.gra-z1g2-a75.fr.eu (92.222.60.119)  0.374 ms  0.356 ms po101.gra-z1g1-a75.fr.eu (92.222.60.117)  0.333 ms
 5  be120.gra-d1-a75.fr.eu (37.187.232.74)  0.327 ms be121.gra-d2-a75.fr.eu (37.187.232.80)  0.335 ms be120.gra-d2-a75.fr.eu (37.187.232.78)  0.328 ms
 6  vl1247.rbx-g1-a75.fr.eu (37.187.231.234)  1.850 ms vl1248.rbx-d2-a75.fr.eu (37.187.231.252)  1.874 ms vl1247.rbx-g1-a75.fr.eu (37.187.231.234)  1.816 ms
 7  10.95.66.51 (10.95.66.51)  1.943 ms 10.95.66.53 (10.95.66.53)  1.872 ms 10.95.66.59 (10.95.66.59)  1.860 ms
 8  1.2.3.4  2.865 ms
```

Das oben stehende Beispiel zeigt, dass die getestete IP-Adresse aktuell in **Roubaix** angekündigt wird. Dies ist aus dem letzten Hop ersichtlich: „vl1247.**rbx**-g1-a75.fr.eu (37.187.231.234) 1.816 ms“. Falls nötig, nutzen Sie unsere [Datacenter](https://www.ovh.de/unternehmen/rechenzentren.xml){.external}-Seite, um das betreffende Rechenzentrum zu identifizieren.

### Schritt 2: IP-Block-Ankündigung ändern

Gehen Sie auf den Link <https://api.ovh.com/console/> und loggen Sie sich mit Ihrer OVH Kundenkennung ein. Verwenden Sie die nachstehenden API-Aufrufe, um die IP-Block-Ankündigung zu bearbeiten.

> [!api]
>
> @api {GET} /vrack#GET
> 

So können Sie über die API die Liste der vRack Dienste aufrufen. Wenn Sie den betreffenden Dienst über diese Referenzen nicht identifizieren können, finden Sie seinen Namen in Ihrem [OVH Kundencenter](https://www.ovh.com/auth/?action=gotomanager){.external}. Gehen Sie hierzu in den Bereich „Server“ (früher „Cloud“) und dann zu „vRack“.

> [!api]
>
> @api {POST} /vrack/{serviceName}/ip/{ip}/announceInZone#POST
> 

Mit diesem API-Aufruf können Sie die IP-Block-Ankündigung ändern. Füllen Sie die erforderlichen Felder aus:

|Feld|Beschreibung|
|---|---|
|serviceName|Geben Sie den Namen des betreffenden vRack Dienstes ein.|
|ip|Geben Sie den Namen des betreffenden IP-Blocks ein. Achten Sie darauf, nicht nur die im vorherigen Schritt getestete IP-Adresse, sondern den gesamten IP-Block anzugeben. Zum Beispiel: `1.2.3.4/27`.|
|zone|Wählen Sie die neue Ankündigungszone des IP-Blocks aus. Achten Sie darauf, nicht dieselbe Ankündigungszone anzugeben, die im vorherigen Schritt ermittelt wurde.|

Führen Sie nun den API-Aufruf aus, um die Ankündigung zu ändern.

### Schritt 3: Die neue Ankündigungszone testen

Nun, da die Ankündigungszone geändert wurde, führen Sie erneut „traceroute“ auf der in Schritt 1 verwendeten IP-Adresse aus.

```sh
traceroute to 1.2.3.4, 30 hops max, 60 byte packets
 1  54.36.52.1 (54.36.52.1)  0.464 ms  0.461 ms  0.454 ms
 2  158.69.61.222 (158.69.61.222)  0.396 ms  0.379 ms  0.372 ms
 3  gra-z1b1-a70.fr.eu (92.222.60.62)  0.360 ms  0.361 ms  0.354 ms
 4  po101.gra-z1g1-a75.fr.eu (92.222.60.117)  0.401 ms  0.396 ms  0.389 ms
 5  be121.gra-d1-a75.fr.eu (37.187.232.76)  0.346 ms be120.gra-d2-a75.fr.eu (37.187.232.78)  0.318 ms be120.gra-d1-a75.fr.eu (37.187.232.74)  0.351 ms
 6  10.73.0.65 (10.73.0.65)  0.625 ms 10.73.0.69 (10.73.0.69)  0.729 ms 10.73.0.65 (10.73.0.65)  0.526 ms
 7  10.17.145.25 (10.17.145.25)  0.354 ms 10.17.145.29 (10.17.145.29)  0.426 ms 10.17.145.25 (10.17.145.25)  0.415 ms
 8  1.2.3.4  2.865 ms
```

Das oben stehende Beispiel zeigt, dass die getestete IP-Adresse jetzt in **Gravelines** angekündigt wird. Dies ist aus dem letzten Hop ersichtlich: „be120.**gra**-d1-a75.fr.eu (37.187.232.74) 0.351 ms“. Falls nötig, nutzen Sie unsere [Datacenter](https://www.ovh.de/unternehmen/rechenzentren.xml){.external}-Seite, um das betreffende Rechenzentrum zu identifizieren.

## Weiterführende Informationen

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.