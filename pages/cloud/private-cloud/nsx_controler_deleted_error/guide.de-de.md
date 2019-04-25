---
title: 'Die Fehlermeldung „Controller-VM wurde gelöscht“ verstehen'
slug: error-controller-nsx
excerpt: 'Hier erfahren Sie, was es mit der Fehlermeldung „Controller-VM wurde gelöscht“ auf sich hat.'
section: NSX
---

**Stand 16.08.2018**

## Einleitung

In Ihrem NSX-Interface erscheint womöglich die Meldung *Controller-VM wurde gelöscht*.

**In dieser Anleitung erklären wir Ihnen, was diese Fehlermeldung bedeutet**.


## Voraussetzungen

- Sie verfügen über die NSX-Option.
- Sie haben einen Benutzer mit NSX-Zugriffsrechten erstellt.


## Beschreibung

Im [NSX-Interface](https://docs.ovh.com/gb/en/private-cloud/accessing-NSX-interface/), Menü-Bereich `Installation`{.action}, kann die Fehlermeldung *Controller-VM wurde gelöscht* unter einem Controller-Namen erscheinen:

![Fehler Controller-VM wurde gelöscht](images/controllervmdeleted.JPG){.thumbnail}


Diese Meldung erscheint, weil OVH die Controller nicht auf Ihrer Nutzer-Infrastruktur hostet, sondern auf einer separaten internen Verwaltungsinfrastruktur, um so Ihre Ressourcen zu schonen.

Die Funktionsweise von NSX sieht allerdings standardmäßig vor, dass die Controller sich im gleichen Datacenter befinden wie Ihre virtuellen Maschinen – und deshalb erscheint diese Fehlermeldung. Die Funktionalität Ihrer Maschine wird hierdurch jedoch in keiner Weise beeinträchtigt.

Überprüfen Sie einfach in Ihrem NSX-Interface, ob der Status des Controllers als `Verbunden` angegeben ist. Ist dies der Fall, funktioniert Ihre Maschine.


> [!warning]
>
> Der Fehler kann nicht über den Button `Resolve`{.action} (Beheben) beseitigt werden, da hierdurch Ihre Controller von der Infrastruktur gelöscht werden, was die Nutzung von NSX sowie auch des Infrastrukturnetzwerks beeinträchtigen würde. Deshalb raten wir Ihnen von diesem Vorgehen dringend ab. Für die Verwaltung der NSX Controller ist weiterhin OVH verantwortlich.
> 

Genau aus diesem Grund erscheint übrigens auch der Warnhinweis im NSX-Dashboard:

![Warnung im NSX-Interface](images/controllervmdeleted2.JPG){.thumbnail}


## Weiterführende Informationen

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.