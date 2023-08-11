---
title: Die Rechte eines Nutzers ändern
routes:
    canonical: '/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/change_users_rights'
updated: 2020-11-18
---

**Stand 18.11.2020**

## Einleitung

Diese Anleitung erläutert die Verwaltung der Nutzerrechte für das Managed Bare Metal Angebot von OVHcloud.

**Sehen Sie hier, wie Sie die Nutzerrechte für Ihre Infrastruktur verwalten können.**

## Voraussetzungen

* Sie nutzen ein [Managed Bare Metal](https://www.ovhcloud.com/de/managed-bare-metal/){.external} Angebot.
* Sie sind in Ihrem [OVHcloud Kunden Center](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de){.external} angemeldet.

## Beschreibung

Klicken Sie auf **Server**, dann auf **Managed Bare Metal**. Wählen Sie nun die Infrastruktur, für die Sie die Nutzerrechte bearbeiten möchten.

Klicken Sie auf den Reiter **Benutzer** und dann auf die drei Punkte rechts in der Zeile des jeweiligen Nutzers, um das Menü anzuzeigen.

![Die Rechte für jedes Rechenzentrum anzeigen / ändern](images/user_rights_1.png){.thumbnail}

In diesem Menü können Sie die Rechte Ihrer vSphere-Nutzer pro Rechenzentrum ändern:

![Die Rechte ändern](images/user_rights_2.png){.thumbnail}

| Zugriff  | zu erteilende Rechte | Beschreibung |
|---|---|---|
| vSphere Zugang | Keiner / nur Lesen / Lesen und Schreiben | Volle Benutzerrechte für vSphere |
| Zugang zum vmNetwork | Keiner / nur Lesen / Operator | Verwaltungsrechte für den öffentlichen Teil des Netzwerks (im vSphere Interface als VM Network bezeichnet) |
| Hinzufügen von Ressourcen | Ja/Nein | Das Recht, über das OVHcloud Plugin im vSphere Client zusätzliche Ressourcen hinzuzufügen (Host, Datastore, Veeam-Backup) |

![Die Rechte ändern](images/user_rights_3.png){.thumbnail}

## Weiterführende Informationen

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
