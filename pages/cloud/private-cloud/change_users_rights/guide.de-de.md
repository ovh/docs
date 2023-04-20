---
title: Die Rechte eines Nutzers ändern
excerpt: Erfahren Sie hier, wie Sie Nutzerberechtigungen für vSphere verwalten
updated: 2020-06-29
---

**Letzte Aktualisierung am 30.04.2020**

## Ziel

Diese Anleitung erläutert die Verwaltung der Nutzerrechte für das Private Cloud Angebot von OVHcloud.

**Sehen Sie hier, wie Sie die Nutzerrechte für Ihre Infrastruktur verwalten können.**

## Voraussetzungen

- Sie verfügen über eine [Hosted Private Cloud](https://www.ovhcloud.com/de/enterprise/products/hosted-private-cloud/) Infrastruktur.
- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de).

## In der praktischen Anwendung

Klicken Sie auf **Server**, dann auf **Private Cloud**. Wählen Sie nun die Infrastruktur, für die Sie die Nutzerrechte bearbeiten möchten.

Klicken Sie auf den Reiter **Benutzer** und dann auf die drei Punkte rechts in der Zeile des jeweiligen Nutzers, um das Menü anzuzeigen.

![Die Rechte für jedes Rechenzentrum anzeigen / ändern](images/user_rights_1.png){.thumbnail}

In diesem Menü können Sie die Rechte Ihrer vSphere-Nutzer pro Rechenzentrum ändern:

![Die Rechte ändern](images/user_rights_2.png){.thumbnail}

| Zugriff  | zu erteilende Rechte | Beschreibung |
|---|---|---|
| vSphere Zugang | Keiner / nur Lesen / Lesen und Schreiben | Volle Benutzerrechte für vSphere |
| Zugang zum vmNetwork | Keiner / nur Lesen / Operator | Verwaltungsrechte für den öffentlichen Teil des Netzwerks (im vSphere Interface als VM Network bezeichnet) |
| Zugang zu den V(x)LANs | Keiner / nur Lesen / Operator / Administrator | Verwaltungsrechte für den privaten Teil des Netzwerks (VxLAN und VLAN) |
| Hinzufügen von Ressourcen | Ja/Nein | Das Recht, über das OVHcloud Plugin im vSphere Client zusätzliche Ressourcen hinzuzufügen (Host, Datastore, Veeam-Backup) |

![Die Rechte ändern](images/user_rights_3.png){.thumbnail}

## Weiterführende Informationen

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
