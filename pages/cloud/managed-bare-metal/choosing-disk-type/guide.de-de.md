---
title: Die Wahl des Festplattenformats
slug: die-wahl-des-festplattenformats
routes:
    canonical: 'https://docs.ovh.com/de/private-cloud/die-wahl-des-festplattenformats/'
excerpt: Lernen Sie die verschiedenen Formate von Festplatten kennen
section: Verwaltung virtueller Maschinen
order: 04
---

**Stand 18.11.2020**

## Einleitung

VMware bietet 3 Festplattenformate für virtuelle Maschinen an.

**Diese Anleitung erklärt die Unterschiede zwischen den Formaten**

## Praktische Anwendung

### Thin Provisioning

Das *Thin Provisioning* ist eine Art Festplattenformat, das nur den Platz auf dem Datastore einnimmt, das es braucht. Dabei wächst es je nach Gebrauch an.

Man kann also eine Festplatte mit 1TB zuweisen, die vom Betriebssystem der VM als 1TB erkannt wird, aber nur den Platz des *Gastbetriebssystems* auf dem Datastore einnimmt (z.B. 20GB). 

Das bedeutet also: Man kann auf einem Datastore von 1,2TB die Kapazität von 50TB zuweisen (50 VM zu je 1 zugewiesenen TB), wobei aber nur 1TB belegt wird (im Beispiel: 20GB pro VM belegt).

> [!warning]
>
> Es ist wichtig, den Schreibverbrauch dieser VMs zu kontrollieren, damit nicht entsprechend die verschiedenen Festplatten der VMs belegt werden und somit der Datastore gefüllt wird.
> Ist der Datastore voll, verhindert dies jeden neuen Schreibvorgang. Das kann wiederum zum Anhalten der VMs führen.
>

Belegter Platz kann nicht anderweitig beansprucht werden. 

Beispiel: Belegt man 40GB auf einer “Thin Disk” von 100GB und löscht man Daten im Umfang von 20GB in der VM, beträgt der verwendete Speicherplatz auf dem Datastore immer noch 40GB und der zugewiesene Speicherplatz 100GB.


### Thick Provisioning Eager Zero

Das *Thick Provisioning Eager Zero* ist ein Festplattenformat, das den gesamten zugewiesenen Speicherplatz auf dem Datastore belegt. 

Eine VM von 100GB, zugewiesenen im Modus *Thick*, belegt 100GB Speicherplatz auf dem Datastore.

Die Festplatte der VM ist bei der Erstellung der Festplatte auf dem VMFS-Volume mit Nullen gefüllt.

### Thick Provisioning Lazy Zero

Das *Thick Provisioning Lazy Zero* ist ein Festplattenformat, das den gesamten zugewiesenen Speicherplatz auf dem Datastore belegt.

Eine VM von 100GB, zugewiesenen im Modus *Thick*, belegt 100GB Speicherplatz auf dem Datastore.

Der zugewiesene Speicherplatz ist für die Festplatte der VM reserviert, aber die Nullen werden in dem Moment geschrieben, wenn die VM den Speicherplatz benötigt.

### Beispiel

Beispiel für VMs von 100GB mit einem *Gastbetriebssystem* von 40GB:


|Festplattentyp|Zugewiesener Speicherplatz|Zeroed Blocks|Verwendeter Speicherplatz|
|---|---|---|---|
|Eager Zero|Bei VM-Erstellung|Bei VM-Erstellung|100GB|
|Lazy Zero|Bei VM-Erstellung|Wenn der Block zum ersten Mal geschrieben wird|100GB|
|Thin|Wenn der Block zum ersten Mal geschrieben wird|Wenn der Block zum ersten Mal geschrieben wird|40GB|

### Festplattenformat bei OVHcloud

Auf dem Storage vom Typ Datastore einer Managed Bare Metal Infrastruktur ist nur *Thin Provisioning* verfügbar.

Auf dem vSan-Storage sind die 3 Formate möglich.

## Weiterführende Informationen

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
