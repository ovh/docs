---
title: 'Die Kontakte Ihrer Dienste verwalten'
slug: verwaltung-der-kontakte
excerpt: 'Erfahren Sie hier, wie Sie die Kontakte Ihrer OVHcloud Dienste verwalten'
section: 'Erste Schritte'
---

**Letzte Aktualisierung am 05.05.2020** 

## Ziel

Die meisten OVHcloud Dienste werden von mehreren Kontakten verwaltet. Jedem dieser Kontakte ist eine eigene Kundenkennung zugewiesen. 

**Diese Anleitung erklärt, wie Sie die Kontakte Ihrer OVHcloud Dienste verwalten.**

## Definition

Es gibt drei Arten von Kontakten:

- **Der Administrator-Kontakt** verwaltet die administrativen und technischen Aspekte eines Dienstes. Er verfügt über Bearbeitungsrechte für alle Kontakte und kann die Inhaberinformationen eines Dienstes (z.B. einer Domain) ändern.
- **Der technische Kontakt** verwaltet ausschließlich die technischen Aspekte eines Dienstes.
- **Der Rechnungskontakt** verwaltet lediglich die mit der Abrechnung eines Dienstes zusammenhängenden Aspekte. Dieser Kontakt erhält die Benachrichtigungen zur Dienstverlängerung. 

Die Kundenkennung (auch NIC-Handle) ist eine persönliche Kennung, die Sie per E-Mail erhalten, nachdem Ihr Account bei OVHcloud erstellt wurde. Sie besteht in der Regel aus zwei Buchstaben gefolgt von Ziffern. Zum Beispiel: **xx11111-ovh**. Wenn Sie Dienste bestellen, wird ihnen diese Kennung als Kontakt zugewiesen.

![Kontaktverwaltung](images/managing_contacts_scheme.png){.thumbnail}


## Voraussetzungen

- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager).
- Sie haben Zugriff auf die E-Mail-Adresse Ihres Kunden-Accounts.
- Sie verfügen über ausreichende Zugriffsrechte für den betreffenden Dienst.
- Sie haben die Kundenkennung des neuen Kontakts (der Kontakt, für den Sie die Änderung durchführen möchten).
- Der neue Kontakt hat Zugriff auf die E-Mail-Adresse, die in seinem Kunden-Account angegeben ist.
- Der bisherige sowie der neue Rechnungskontakt haben keine offenen Rechnungsbeträge.

## In der praktischen Anwendung

### Auf die Kontaktverwaltung zugreifen

Loggen Sie sich in Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager) ein, klicken Sie oben rechts auf den zu Ihrer Kundenkennung gehörigen Namen und wählen Sie dann `Verwaltung der Kontakte`{.action} aus.

![Kontaktverwaltung](images/hubcontacts.png){.thumbnail}

In der angezeigten Tabelle können Sie die verschiedenen Dienste einsehen, für die Ihre Kundenkennung als Kontakt eingetragen ist.

![Kontaktverwaltung](images/managing_contacts_02.png){.thumbnail}



### Kontakte eines Dienstes ändern

Wenn Sie auf der Seite der Kontaktverwaltung sind, klicken Sie rechts neben dem betreffenden Dienst auf `...`{.action} und anschließend auf `Kontakte ändern`{.action} . Geben Sie den oder die neuen Kontakt(e) ein, die Sie hinzufügen möchten, und klicken Sie auf `Bestätigen`{.action}.

![Kontaktverwaltung](images/managing_contacts_03.png){.thumbnail}

![Kontaktverwaltung](images/managing_contacts_04.png){.thumbnail}

Es wird eine E-Mail an die Kontakte versendet, die vom Änderungsprozess betroffen sind.

#### Ich bin der Administrator-Kontakt

Als Administrator können Sie zahlreiche Aktionen zu den Kontakten eines Dienstes durchführen:

- Sie können einen neuen Kontakt für die technische Verwaltung und/oder als Rechnungskontakt angeben. Die Änderung muss von Ihnen und dem neuen Kontakt bestätigt werden. Der bisherige Kontakt wird per E-Mail über die Änderung informiert, wenn diese wirksam ist.

- Sie können die technische Verwaltung und/oder den Rechnungskontakt übernehmen. Die Änderungsanfrage muss von Ihnen bestätigt werden. Der bisherige Kontakt wird per E-Mail über die Änderung informiert. 

- Sie können einen neuen Administrator-Kontakt an Ihrer Stelle ernennen. Die Änderung muss von Ihnen und dem neuen Kontakt bestätigt werden. 

#### Ich bin technischer Kontakt

Sie können lediglich eine andere Person an Ihrer Stelle als technischen Kontakt ernennen. Die Änderung muss von Ihnen und dem neuen Kontakt bestätigt werden.

#### Ich bin der Rechnungskontakt

Sie können lediglich eine andere Person an Ihrer Stelle als Rechnungskontakt ernennen. Die Änderung muss von Ihnen und dem neuen Rechnungskontakt bestätigt werden.

> [!warning]
> Der bisherige sowie der neue Rechnungskontakt dürfen keine offenen Rechnungsbeträge haben.

### Bestätigung, Ablehnung oder Nachverfolgung einer Kontaktänderung

Um aktuelle Änderungsanfragen zu verfolgen und zu verwalten, klicken Sie auf den Tab `Meine Anfragen`{.action}. Hier können Sie eine Anfrage annehmen oder ablehnen.

![Kontaktverwaltung](images/managing_contacts_05.png){.thumbnail}

Hierzu erhalten Sie eine E-Mail mit Validierungscode (auch Token genannt), den Sie benötigen, um die Änderungsanfrage zu bestätigen oder abzulehnen.

> [!primary]
> Wichtig: Dieser Code ist individuell, kann nur ein einziges Mal verwendet werden und unterscheidet sich für die beiden Kontakte.

Die E-Mail enthält außerdem einen direkten Link zu der Seite, auf der die Änderungsanfragen bestätigt oder abgelehnt werden können. Wenn Sie in der E-Mail auf diesen Link klicken, wird der Validierungscode (Token) automatisch eingegeben.

Sollte einer der Kontakte die E-Mail nicht erhalten haben, kann es sein, dass die im Profil angegebene Kontaktadresse nicht aktuell ist. In Ihrem Profil können Sie die E-Mail-Adresse überprüfen, diese bei Bedarf ändern und eine neue E-Mail anfordern, indem Sie auf `Anfrage erneut senden`{.action} klicken.

![Kontaktverwaltung](images/managing_contacts_06.png){.thumbnail}

Wenn nur ein Kontakt die Änderung bestätigt hat, wird eine Meldung angezeigt, die Sie darüber informiert, dass die Bestätigung der Änderungsanfrage durch den anderen Kontakt noch nicht erfolgt ist. Wenn einer der Kontakte die Anfrage gerade erst bestätigt hat, dauert es ein paar Minuten, bis die Anzeige im [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager) aktualisiert wird.

![Kontaktverwaltung](images/managing_contacts_07.png){.thumbnail}

Wenn beide Kontakte die Änderungsanfrage bestätigt haben, wird die Änderung wenige Minuten später wirksam. Beide Kontakte erhalten dann eine E-Mail zur Bestätigung, dass die Anfrage ausgeführt wurde.


## Weiterführende Informationen

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.