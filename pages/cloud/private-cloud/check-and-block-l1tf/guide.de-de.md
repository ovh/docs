---
title: 'Sicherheitslücke L1TF überprüfen und blockieren'
slug: sicherheitsluecke-l1tf-pruefen-blockieren
excerpt: 'So schließen Sie die Sicherheitslücke L1TF'
section: Sicherheit
---

**Stand 24.04.2019**

## Einleitung

Nach Veröffentlichung der Sicherheitslücke L1TF („L1 Terminal Fault“ oder „Foreshadow“) wurden verschiedene Vorgehensweisen und Patches veröffentlicht, die die Anfälligkeit für dieses Risiko minimieren sollen.

**In dieser Anleitung erfahren Sie, wie Sie diese Sicherheitslücke schließen.**

## Voraussetzungen

- Sie haben einen Benutzer, der sich mit vSphere verbinden kann.
- Sie verwenden Hyperthreading auf Ihren virtuellen Maschinen.

## Beschreibung

Zur Erinnerung:

|Variante|gefährdet|durch den Patch behoben?|
|:---|:---:|:---:|
|Variante 1: L1 Terminal Fault - VMM (CVE-2018-3646)|JA|NEIN (Einschränkung möglich)|
|Variante 2: L1 Terminal Fault - OS (CVE-2018-3620)|NEIN||
|Variante 3: L1 Terminal Fault - SGX (CVE-2018-3615)|NEIN||

> [!primary]
> 
> L1 Terminal Fault - OS (CVE-2018-3620) [ betrifft die VMware-Hypervisor nicht](https://kb.vmware.com/s/article/55807) und [erfordert lokalen Zugriff auf vCenter/VCSA](https://kb.vmware.com/s/article/52312).
>

> [!primary]
> 
> L1 Terminal Fault - SGX (CVE-2018-3615) betrifft die VMware-Hypervisor nicht: [https://kb.vmware.com/s/article/54913](https://kb.vmware.com/s/article/54913).
> 

Aus unserem **Private Cloud** Angebot sind nur die SDDC Lösungen von dieser Sicherheitslücke betroffen.

Weitere Informationen zu dieser Sicherheitslücke finden Sie in unserem zugehörigen [Blogartikel](https://blog.ovh.com/de/ovh-l1-terminal-fault-l1tf-foreshadow-disclosure/){.external-link}.

## Sicherheitslücke einschränken

> [!primary]
>
> Wichtig: Die Sicherheitslücke wird mit den folgenden Aktionen nicht behoben.
>
> Sie beschreiben nur, wie Hyperthreading auf Ihren ESXi-Hosts deaktiviert werden kann. Da L1TF Hyperthreading benötigt, um zu funktionieren, ist Ihre Infrastruktur durch die Deaktivierung vor dieser Sicherheitslücke geschützt.
>

Die Vorgehensweise, um die Sicherheitslücke einzuschränken, ist in dieser VMware Knowledge Base beschrieben: [https://kb.vmware.com/s/article/55806](https://kb.vmware.com/s/article/55806){.external-link}.

Dieser Prozess wird in 4 Phasen unterteilt.

### 1. Update-Phase

Das Update für vCenter wird von OVH durchgeführt. Der Patch für die ESXi-Hosts wird von Ihnen selbst durchgeführt und ist im [Update Manager](https://docs.ovh.com/de/private-cloud/verwendung_des_vmware_update_manager/){.external-link} verfügbar.

Die Liste mit den Patches für ESXi-Hosts finden Sie in [diesem Dokument](https://www.vmware.com/security/advisories/VMSA-2018-0020.html){.external-link}.

Nach dem Update der Hosts wird die folgende Warnung in der Zusammenfassung Ihres Hosts angezeigt:

![](images/warningMsg.png){.thumbnail}

### 2. Auswertung der Umgebung

Wenn die ESXi-Hosts aktualisiert wurden, ist der Patch noch nicht umgesetzt.

Bevor Sie diesen jedoch ausführen, sollten Sie die möglichen Probleme, die in der bereits erwähnten [Knowledge Base](https://kb.vmware.com/s/article/55806){.external-link} aufgeführt werden, sowie die in einer anderen Knowledge Base aufgeführten Leistungseinschränkungen beachten: [https://kb.vmware.com/s/article/55767](https://kb.vmware.com/s/article/55767){.external-link}.

### 3. Aktivierungsphase

Nachdem Sie die obenstehenden Schritte durchgeführt haben, können Sie in den erweiterten Systemeinstellungen die Einstellung aktivieren, mit der Hyperthreading deaktiviert werden kann.

![mitigation](images/enableMitigation.png){.thumbnail}

In dem Fenster ist rechts oben ein Filter verfügbar.

Dieser Vorgang muss für jeden Host durchgeführt werden.

Weitere Informationen finden Sie in Schritt 3 im Bereich „Resolution“ in dieser [VMware Knowledge Base](https://kb.vmware.com/s/article/55806){.external-link}.

> [!warning]
> 
> Wenn Sie die verschiedenen Elemente überprüft haben und zu dem Schluss gekommen sind, dass Sie Hyperthreading nicht deaktivieren möchten, können Sie, wie in dieser [Knowledge Base](https://kb.vmware.com/s/article/57374){.external-link} beschrieben, die Warnung löschen.
> 
> ![](images/deleteWarning.png){.thumbnail}
> Dies wird von OVH keinesfalls empfohlen. OVH kann daher nicht für mögliche Folgen verantwortlich gemacht werden.
>

## Weiterführende Informationen

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.