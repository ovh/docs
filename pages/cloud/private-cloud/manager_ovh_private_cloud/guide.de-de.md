---
title: Einführung in das OVHcloud Hosted Private Cloud Kundencenter 
slug: manager-ovh-private-cloud
excerpt: Entdecken Sie alle Funktionen Ihres Hosted Private Cloud Kundencenters
section: Erste Schritte
order: 1
---

**Letzte Aktualisierung am 05.10.2021**

## Ziel

Das OVHcloud Kundencenter bietet zahlreiche Optionen für die Konfiguration Ihrer Hosted Private Cloud Infrastruktur.

**Diese Anleitung beschreibt die verschiedenen Konfigurationsmöglichkeiten.**

## Voraussetzungen

- Sie sind in Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de){.external} eingeloggt und befinden sich unter `Hosted Private Cloud`{.action} im Bereich `Hosted Private Cloud`{.action}.
- Sie verfügen über ein [Hosted Private Cloud](https://www.ovhcloud.com/de/enterprise/products/hosted-private-cloud/){.external} Produkt.


## In der praktischen Anwendung

### Tab "Allgemeine Informationen"

Im Menüpunkt `Hosted Hosted Private Cloud`{.action} im Bereich `Hosted Private Cloud`{.action} Ihres [OVHcloud Kundencenters](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de){.external} finden Sie eine allgemeine Übersicht.

![Allgemeine Informationen](images/controlpanel1.png){.thumbnail}

Im oberen Teil der Seite (1 auf der Abbildung) finden sie den Namen und die Beschreibung Ihrer Hosted Private Cloud. Diese können Sie gerne anpassen, was besonders nützlich ist, wenn Sie über mehrere Infrastrukturen verfügen. 

Auf der linken Seite (2 auf der Abbildung) werden Ihre Hosted Private Cloud Infrastrukturen sowie deren virtuellen Rechenzentren aufgelistet.


#### Allgemeine Informationen

In der linken Tabelle finden Sie die allgemeinen Informationen zu Ihrer Hosted Private Cloud.

![Allgemeine Informationen](images/controlpanel2.png){.thumbnail}


- Die Beschreibung Ihrer Hosted Private Cloud (mit der Möglichkeit, den Namen zu ändern)
- Die Version Ihrer Hosted Private Cloud
- Die zugehörige kommerzielle OVHcloud Referenz
- Das "Datacenter" und genauer, die Zone, in der sich Ihre Infrastruktur befindet
- Die Zugangseinstellungen für Ihre Infrastruktur (`Offen` oder `Eingeschränkt`) mit den Einschränkungen nach Quell-IP
- Die Anzahl der virtuellen "Datacenter" in Ihrer Infrastruktur
- Die Anzahl der IP-Blöcke (mit der Möglichkeit, weitere Blöcke zu bestellen)


#### Optionen und Compliance

In der mittleren Tabelle wird Ihnen der Aktivierungsstatus der Optionen Ihrer Hosted Private Cloud angezeigt.

![Optionen](images/controlpanel3.png){.thumbnail}

#### Dienstverwaltung

In der rechten Tabelle können Sie Ihr Abonnement der OVHcloud Hosted Private Cloud Mailingliste verwalten.

Darüber hinaus wird hier auch das nächste Verlängerungsdatum Ihres Hosted Private Cloud Dienstes angezeigt. Rechts neben diesem Datum können Sie über den Button `...`{.action} eine Lizenz bestellen oder Ihren Hosted Private Cloud Dienst löschen.

![Optionen](images/controlpanel4.png){.thumbnail}

Weitere Informationen zur Kündigung eines Hosted Private Cloud Dienstes finden Sie in unserer Anleitung [Hosted Private Cloud kündigen](../eine-private-cloud-kuendigen/).

#### Datacenter

In diesem Tab finden Sie eine kurze Zusammenfassung der virtuellen Rechenzentren in Ihrer Hosted Private Cloud Lösung:

![Datacenter](images/controlpanel5.png){.thumbnail}

Weiter unten in dieser Anleitung finden Sie eine detailliertere Übersicht zu den virtuellen "Datacentern".

> [!primary]
>
> Auf dieser Seite können Sie ein weiteres "Datacenter" hinzufügen. Dies verursacht keine zusätzlichen Kosten.
> 



#### Benutzer

In diesem Bereich werden alle Benutzer angezeigt, die sich auf vSphere einloggen können:

![Benutzer](images/controlpanel6.png){.thumbnail}

Sie können einen Benutzer erstellen, indem Sie links auf den Button `Benutzer erstellen`{.action} klicken.

Zu jedem Benutzer finden Sie verschiedene Benutzerinformationen sowie die für die gesamte Hosted Private Cloud geltenden Berechtigungen:

- Kennung
- Vorname (optional)
- Nachname (optional)
- E-Mail-Adresse (optional)
- Telefon-/Faxnummer (optional)
- *token validator*-Berechtigung, erlaubt die Bestätigung kritischer Operationen auf Hosted Private Clouds mit HDS- oder PCI-DSS-Option
- *IP*-Berechtigung, erlaubt Zugriff auf das "OVH Network Plugin"
- *Additional IP*-Berechtigung, erlaubt die Verwaltung von mit Ihrer Hosted Private Cloud verbundenen Additional IPs
- *NSX-Interface*-Berechtigung, erlaubt Zugriff auf das NSX-Interface, wenn diese Option in Ihrer Hosted Private Cloud aktiviert ist
- Status (Diagnose), zeigt an, ob der Benutzer erfolgreich erstellt wurde

Wenn Sie rechts in der Tabelle auf den Button `...`{.action} klicken, werden Ihnen mehrere Optionen angezeigt:

- Einträge dieser Tabelle bearbeiten (die zuvor eingesehenen Berechtigungen ändern, eine E-Mail-Adresse oder Telefonnummer hinzufügen)
- Berechtigungen des Benutzers je "Datacenter" anzeigen und bearbeiten
- Benutzerpasswort ändern
- Benutzer löschen

Nachfolgend sehen Sie die Berechtigungen je "Datacenter" im Detail:

![Benutzerrechte je Datacenter](images/controlpanel7.png){.thumbnail}

- `vSphere-Zugriff`{.action}: Hierbei handelt es sich um die globalen Rechte des Benutzers für vSphere:

|Berechtigung|Beschreibung|
|---|---|
|Keine|kein Zugriff|
|Nur Lesen|nur lesender Zugriff|
|Lesen/Schreiben|lesender und schreibender Zugriff|
|Operator|den OVHcloud Administratoren vorbehaltener Zugriff|

- `Zugriff auf VM Network`{.action}: Hierbei handelt es sich um die Rechteverwaltung für den öffentlichen Netzwerkbereich (im vSphere Interface als `VM Network` bezeichnet):

|Berechtigung|Beschreibung|
|---|---|
|Keine|kein Zugriff|
|Nur Lesen|nur lesender Zugriff|
|Operator|erlaubt die Konfiguration virtueller Maschinen (VMs) im öffentlichen Netzwerk|

- `Zugriff auf V(X)LAN`{.action}: Hierbei handelt es sich um die Rechteverwaltung für den privaten Netzwerkbereich, VXLAN für die Dedicated Cloud Reihe bzw. VLAN für die SDDC Reihe:

|Berechtigung|Beschreibung|
|---|---|
|Keine|kein Zugriff|
|Nur Lesen|nur lesender Zugriff|
|Operator|erlaubt die Konfiguration virtueller Maschinen (VMs) im privaten Netzwerk|
|Administrator|erlaubt die Verwaltung von Port-Gruppen des virtuellen Switch (erstellen, bearbeiten, löschen, ...)|

- `Hinzufügen von Ressourcen`{.action}: Dieser Button erlaubt die Vergabe bzw. das Entziehen der Berechtigung, zusätzliche Ressourcen über das OVH Plugin im vSphere Client hinzuzufügen.


#### Sicherheit

In diesem Tab können Sie die Sicherheitseinstellungen für Ihr vCenter einstellen:

![Sicherheitseinstellungen](images/controlpanel8.png){.thumbnail}

Sie können die Elemente im oberen Teil sowie in der Tabelle mit den Buttons rechts daneben konfigurieren. Folgendes kann konfiguriert werden:

- Dauer bis Sitzungstimeout

- Anzahl der erlaubten Simultanverbindungen

- Sicherheitseinstellungen, eingeschränkt oder nicht, mit Berechtigung je Quell-IP. Die IPs werden in der Tabelle angezeigt. Die IP bzw. der IP-Bereich können geändert oder gelöscht werden, indem Sie auf den Button `...`{.action} rechts neben der Tabelle klicken.

> [!warning]
>
> Wenn Sie die Sicherheitseinstellungen in den Modus „Eingeschränkt“ versetzen und keine IP-Adresse eingeben, kann sich kein Benutzer im vSphere Client einloggen. Die virtuellen Maschinen bleiben jedoch weiterhin verfügbar.
> 


- Die Abmeldungseinstellungen bestimmen, ob der erste oder der letzte verbundene Benutzer ausgeloggt wird. Wenn im vorliegenden Beispiel 50 Benutzer eingeloggt sind und sich ein 51\. Benutzer anmeldet, so wird der erste, der eine Verbindung hergestellt hat, ausgeloggt.

Es ist eine zweite Tabelle für die Option *VM Encryption* verfügbar.

Weitere Informationen zu dieser Option finden Sie in [dieser Anleitung](../vm-encrypt/).

#### Operationen

In diesem Tab finden Sie die aktuell auf Ihrer Infrastruktur ausgeführten Operationen:

![Operationen](images/controlpanel9.png){.thumbnail}

Sie können hier nachsehen, ob eine Operation fehlgeschlagen ist, Wartungsarbeiten geplant sind, etc.

Sie können das Datum für eine Wartungsarbeit ändern, indem Sie rechts in der Tabelle auf den Button `...`{.action} klicken.

> [!primary]
>
> Wenn Sie nicht auf den vSphere Client zugreifen können, wird vielleicht gerade eine Wartungsarbeit durchgeführt. Das können Sie in diesem Tab überprüfen.
>


#### Windows-Lizenz

Im Tab `Windows-Lizenz`{.action} können Sie Windows-SPLA-Lizenzen auf Ihrer Hosted Private Cloud aktivieren, indem Sie rechts daneben auf den Button klicken:

![Windows-SPLA-Lizenz](images/controlpanel10.png){.thumbnail}

Die Preisübersicht hierzu finden Sie [hier](https://www.ovhcloud.com/de/enterprise/products/hosted-private-cloud/images-licenses/){.external}.



### Datacenter-Ansicht

Eine Hosted Private Cloud kann mehrere Datacenter enthalten. Wenn Sie auf Ihre Hosted Private Cloud klicken, sehen Sie Folgendes:

![Datacenter-Ansicht](images/controlpanel11.png){.thumbnail}

Sie können den Namen Ihres "Datacenters" ändern oder eine angepasste Beschreibung hinzufügen, indem Sie auf das Stift-Symbol klicken.

#### Allgemeine Informationen

Hier finden Sie die Hauptinformationen zu Ihrem "Datacenter", den Diensttyp sowie die Anzahl der Hosts und Datastores.
Bei "Dedicated Cloud" und "Software Defined Datacenter" können Sie über mehrere "Datacenter" in derselben Hosted Private Cloud Lösung verfügen.


#### Hosts

Hier werden die Hosts Ihres "Datacenters" angezeigt:

![Hosts](images/controlpanel12.png){.thumbnail}

In diesem Bereich finden Sie:

- die Namen der Hosts
- ihre Profile (M, L, L+, ...)
- den Abrechnungsmodus: Wenn Ihr Host stündlich abgerechnet wird, können Sie auf monatliche Abrechnung umstellen, indem Sie rechts in der Tabelle auf den Button klicken.
- den Host-Status
- die Anzahl der genutzten Stunden (nur bei stündlich abgerechneten Ressourcen)

Oben links über der Tabelle können Sie einen neuen, monatlich abgerechneten Host bestellen.


#### Datastores

Die Datastore-Tabelle gleicht der Tabelle für Hosts:

![Datastores](images/controlpanel13.png){.thumbnail}

In diesem Bereich finden Sie:

- die Namen der Datastores
- ihre Profile
- ihre Typen (Hybrid oder Full SSD)
- ihre Größe
- den Abrechnungsmodus
- den Status des Datastores, der anzeigt, ob dieser korrekt installiert ist
- die Anzahl der genutzten Stunden (nur bei stündlich abgerechneten Ressourcen)

Oben links über der Tabelle können Sie einen neuen, monatlich abgerechneten Datastore bestellen.


#### Backup

Im Backup-Tab können Sie die `Veeam Backup`-Lösung aktivieren.

![Backup](images/controlpanel14.png){.thumbnail}

Weitere Informationen zu dieser Option finden Sie in [dieser Anleitung](https://docs.ovh.com/gb/en/private-cloud/veeam-backup-as-a-service/) (Englisch).


## Weiterführende Informationen

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
