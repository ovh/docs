---
title: 'Stündliche Ressourcen hinzufügen'
slug: stuendliche-ressourcen-hinzufuegen
excerpt: 'Erfahren Sie hier, wie Sie stündlich abgerechnete Ressourcen hinzufügen'
legacy_guide_number: '7766721'
section: OVHcloud Funktionen
---

**Letzte Aktualisierung am 15.12.2020**

## Ziel

Bei einer Hosted Hosted Private Cloud-Lösung können Sie stündlich abgerechnete Ressourcen hinzufügen.

**Diese Anleitung erklärt, wie Sie stündliche Ressourcen über das vSphere-Interface Ihrer Private Cloud hinzufügen.**

## Voraussetzungen

- Sie verfügen über eine [Hosted Private Cloud](https://www.ovhcloud.com/de/enterprise/products/hosted-private-cloud/) Infrastruktur.
- [Dem Benutzer die Berechtigung "Hinzufügen von Ressourcen"](../die-rechte-eines-nutzers-aendern/) für das betreffende Rechenzentrum über das [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de){.external} erteilen.
- Sie haben Zugriff zum vSphere-Client.


## In der praktischen Anwendung

### Ressource auswählen

Um zum Interface zu gelangen, über das Sie Ressourcen hinzufügen können, wählen Sie das entsprechende Datacenter und klicken sie anschließend auf den Tab `Configure`{.action}.

![Host hinzufügen](images/addhost_01.png){.thumbnail}

Im vorliegenden Beispiel werden wir einen stündlich abgerechneten Host-Server hinzufügen. Nachdem Sie das gewünschte Modell ausgewählt haben, klicken Sie auf den Button `Next`{.action}. Wenn Sie einen Datastore hinzufügen möchten, wählen Sie einfach den Tab `Add storage`{.action} aus.

![Host hinzufügen](images/addhost_03.png){.thumbnail}


### Bestellung bestätigen

Um die Bestellung zu bestätigen und abzuschließen, klicken Sie erneut auf den Button `Next`{.action}.

![bestellung](images/addhost_04.png){.thumbnail}

### Installation nachverfolgen

Nachdem Sie Ihre Bestellung bestätigt haben, können Sie den Fortschritt zum Hinzufügen der Ressource nachverfolgen.

![installation](images/addhost_06.png){.thumbnail}

Darüber hinaus wird ein neuer Task in den „recent tasks“ von vSphere erscheinen. Über diesen können Sie den Fortschritt ebenfalls nachverfolgen.


## Weiterführende Informationen

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
