---
title: 'VMware Tools installieren'
slug: wie_installiere_ich_die_vmware_tools
excerpt: 'So installieren Sie VMware Tools auf Linux oder Windows'
legacy_guide_number: '7766427'
section: 'Verwaltung virtueller Maschinen'
order: 6
---

**Stand 04.07.2019**

## Einleitung

VMware Tools verbessern die Leistung virtueller Maschinen und ermöglichen die Verwendung vieler hilfreicher Funktionen der VMware-Produkte.

**Diese Anleitung beschreibt die notwendigen Schritte zur Installation von VMware Tools.**

## Beschreibung

Die Vorgehensweise zur Installation von VMware Tools variiert je nach Betriebssystem der virtuellen Maschine. Für Informationen zur genauen Vorgehensweise entsprechend dem Betriebssystem lesen Sie die [VMware-Dokumentation zu VMware Tools](https://kb.vmware.com/s/article/1014294){.external-link}.

## Linux

### Neueste Versionen

Bei den meisten Linux-Distributionen ist die Installation der VMware Tools über die Linux-Paketverwaltungssysteme unter dem Namen [*Open VM Tools*](https://kb.vmware.com/s/article/2073803){.external-link} möglich.

So können die VMware Tools genauso auf dem aktuellen Stand gehalten werden wie die anderen Betriebssystemkomponenten der virtuellen Maschine. 

Wenn dies bei Ihrer Distribution möglich ist, finden Sie *Open VM Tools* unter folgendem Paketnamen: *open-vm-tools*.


Diese Vorgehensweise gilt mindestens für die folgenden GNU/Linux-Versionen:

- Fedora 19 und neuer
- Debian 7.x und neuer
- openSUSE 11.x und neuer
- Ubuntu 12.04 LTS und neuer
- Red Hat Enterprise Linux 7.0 und neuer
- CentOS 7.0 und neuer
- Oracle Linux 7.0 und neuer
- SUSE Linux Enterprise 11 SP4 und neuer


### Alte Versionen

Mounten Sie die VMware Tools über den vSphere-Web-Client, klicken Sie mit der rechten Maustaste auf die VM und wählen Sie anschließend „Guest OS“ und bestätigen Sie die Option „Install VMware Tools“:

![](images/tools.png){.thumbnail}

Mounten Sie anschließend die Festplatte mit folgendem Befehl:

```sh
>     # mount /dev/cdrom /mnt
```

Entpacken Sie danach das Archiv der VMware Tools, hier in /tmp.

```sh
> cd /tmp 
> tar xvf /mnt/VMwareTools*.tar.gz
> cd vmware-tools-distrib
> ./vmware-install.pl default
```

> [!success]
>
> Kleiner Tipp: Wenn Sie die automatischen Bestätigungsanfragen im Vornherein bejahen möchten, fügen Sie „default" als Argument in dem Installationsbefehl hinzu.
> 

Wenn die Installation abgeschlossen ist, wird die Festplatte der Tools automatisch aus dem System ausgehängt.

## Windows

Nachdem die Festplatte über die Option „Install/Upgrade VMware Tools“ gemountet wurde, finden Sie diese unter „Arbeitsplatz“ Ihrer VM. Doppelklicken Sie auf diese, um die Installation der Tools zu starten:

![](images/windows.jpg){.thumbnail}

Daraufhin wird der Installationsassistent geöffnet und Sie werden aufgefordert, die Lizenzvereinbarungen zu akzeptieren und den Installationstyp auszuwählen (wir empfehlen die vollständige Installation).

Wenn die Installation abgeschlossen ist, können Sie die Maschine neu starten, damit die Änderungen angenommen werden. Das Laufwerk wird am Ende der Installation automatisch ausgehängt.

## Weiterführende Informationen

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.