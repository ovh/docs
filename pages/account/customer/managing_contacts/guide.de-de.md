---
title: 'Die Kontakte Ihrer Dienste verwalten'
slug: verwaltung-der-kontakte
excerpt: 'Erfahren Sie hier, wie Sie die Kontakte Ihrer OVHcloud Dienste verwalten'
section: 'Erste Schritte'
order: 6
---

**Letzte Aktualisierung am 13.12.2021** 

> [!warning]
> OVHcloud stellt Ihnen Dienstleistungen zur Verfügung, für deren Konfiguration und Verwaltung Sie die alleinige Verantwortung tragen. Es liegt somit bei Ihnen, sicherzustellen, dass diese ordnungsgemäß funktionieren.
> 
> Diese Anleitung soll Sie bei allgemeinen Aufgaben bestmöglich unterstützen. Dennoch empfehlen wir Ihnen, falls Sie Hilfe brauchen, einen spezialisierten Dienstleister zu kontaktieren und/oder Ihre Fragen in der OVHcloud Community zu stellen. Leider können wir Ihnen für administrative Aufgaben keine weitergehende technische Unterstützung anbieten. Weitere Informationen finden Sie am [Ende dieser Anleitung](#gofurther).
>

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

- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de).
- Sie haben Zugriff auf die E-Mail-Adresse Ihres Kunden-Accounts.
- Sie verfügen über ausreichende Zugriffsrechte für den betreffenden Dienst.
- Sie haben die Kundenkennung des neuen Kontakts (der Kontakt, für den Sie die Änderung durchführen möchten).
- Der neue Kontakt hat Zugriff auf die E-Mail-Adresse, die in seinem Kunden-Account angegeben ist.
- Der bisherige sowie der neue Rechnungskontakt haben keine offenen Rechnungsbeträge.

## In der praktischen Anwendung

### Auf die Kontaktverwaltung zugreifen <a name="gestion_des_contacts"></a>

Loggen Sie sich in Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) ein, klicken Sie oben rechts auf den zu Ihrer Kundenkennung gehörigen Namen und wählen Sie dann `Verwaltung der Kontakte`{.action} aus.

![Kontaktverwaltung](images/hubcontacts.png){.thumbnail}

In der angezeigten Tabelle können Sie die verschiedenen Dienste einsehen, für die Ihre Kundenkennung als Kontakt eingetragen ist.

![Kontaktverwaltung](images/managing_contacts_02.png){.thumbnail}



### Kontakte eines Dienstes ändern

Wenn Sie auf der Seite der Kontaktverwaltung sind, klicken Sie rechts neben dem betreffenden Dienst auf `...`{.action} und anschließend auf `Kontakte ändern`{.action} . Geben Sie den oder die neuen Kontakt(e) ein, die Sie hinzufügen möchten, und klicken Sie auf `Bestätigen`{.action}.

![Kontaktverwaltung](images/managing_contacts_03.png){.thumbnail}

![Kontaktverwaltung](images/managing_contacts_04.png){.thumbnail}

Es wird eine E-Mail an die Kontakte versendet, die vom Änderungsprozess betroffen sind.

> [!warning]
>
> Ein Kontaktwechsel ist nicht zulässig, wenn das betreffende alte oder neue Kundenkonto eine oder mehrere Rechnungen unbezahlt haben.
>

#### Ich bin der Administrator-Kontakt <a name="administrateur"></a>

Als Administrator können Sie zahlreiche Aktionen zu den Kontakten eines Dienstes durchführen:

- Sie können einen neuen Kontakt für die technische Verwaltung und/oder als Rechnungskontakt angeben. Die Änderung muss von Ihnen und dem neuen Kontakt bestätigt werden. Der bisherige Kontakt wird per E-Mail über die Änderung informiert, wenn diese wirksam ist.
- Sie können die technische Verwaltung und/oder den Rechnungskontakt übernehmen. Die Änderungsanfrage muss von Ihnen bestätigt werden. Der bisherige Kontakt wird per E-Mail über die Änderung informiert. 
- Sie können einen neuen Administrator-Kontakt an Ihrer Stelle ernennen. Die Änderung muss von Ihnen und dem neuen Kontakt bestätigt werden. 

#### Ich bin technischer Kontakt <a name="technique"></a>

Sie können lediglich eine andere Person an Ihrer Stelle als technischen Kontakt ernennen. Die Änderung muss von Ihnen und dem neuen Kontakt bestätigt werden.

#### Ich bin der Rechnungskontakt

Sie können lediglich eine andere Person an Ihrer Stelle als Rechnungskontakt ernennen. Die Änderung muss von Ihnen und dem neuen Rechnungskontakt bestätigt werden.

### Bestätigung, Ablehnung oder Nachverfolgung einer Kontaktänderung

Um aktuelle Änderungsanfragen zu verfolgen und zu verwalten, klicken Sie auf den Tab `Meine Anfragen`{.action}. Hier können Sie eine Anfrage annehmen oder ablehnen.

![Kontaktverwaltung](images/managing_contacts_05.png){.thumbnail}

Hierzu erhalten Sie eine E-Mail mit Validierungscode (auch Token genannt), den Sie benötigen, um die Änderungsanfrage zu bestätigen oder abzulehnen.

> [!primary]
> Wichtig: Dieser Code ist individuell, kann nur ein einziges Mal verwendet werden und unterscheidet sich für die beiden Kontakte.

Die E-Mail enthält außerdem einen direkten Link zu der Seite, auf der die Änderungsanfragen bestätigt oder abgelehnt werden können. Wenn Sie in der E-Mail auf diesen Link klicken, wird der Validierungscode (Token) automatisch eingegeben.

Sollte einer der Kontakte die E-Mail nicht erhalten haben, kann es sein, dass die im Profil angegebene Kontaktadresse nicht aktuell ist. In Ihrem Profil können Sie die E-Mail-Adresse überprüfen, diese bei Bedarf ändern und eine neue E-Mail anfordern, indem Sie auf `Anfrage erneut senden`{.action} klicken.

![Kontaktverwaltung](images/managing_contacts_06.png){.thumbnail}

Wenn nur ein Kontakt die Änderung bestätigt hat, wird eine Meldung angezeigt, die Sie darüber informiert, dass die Bestätigung der Änderungsanfrage durch den anderen Kontakt noch nicht erfolgt ist. Wenn einer der Kontakte die Anfrage gerade erst bestätigt hat, dauert es ein paar Minuten, bis die Anzeige im [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) aktualisiert wird.

![Kontaktverwaltung](images/managing_contacts_007.png){.thumbnail}

Die Kontaktänderung wird einige Minuten nach Bestätigung der Anfrage durch die beiden Kontakte wirksam. Anschließend erhalten sie eine E-Mail, in der sie darüber informiert werden, dass die Anfrage erfolgreich bearbeitet wurde.

### Beispiel: Ihrem Webmaster die technische Verwaltung Ihrer Website erlauben

Sie haben gerade einen OVHcloud Dienst abonniert, um Ihren eigenen [Onlineshop zu hosten](https://www.ovhcloud.com/de/web-hosting/ecommerce-website/). Sie haben einen unserer [Partner kontaktiert](https://partner.ovhcloud.com/de/directory/) und Sie werden um Zugriffsrechte auf Ihre OVHcloud Dienste gebeten, um Ihre Website erstellen zu können.

> [!warning]
>
> Wir empfehlen, Dritten niemals die Zugangsdaten zu Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) zu überlassen.
>

Geben Sie in diesem Fall Ihrem Dienstleister die Rolle ["technischer Kontakt"](#gestion_des_contacts) für Ihr OVHcloud Webhosting. Dieser Zugang ermöglicht es, die für das Bereitstellen Ihrer Website notwendigen Änderungen vorzunehmen (Hinzufügen von Domain oder Subdomain zur Multisite, Installation eines 1-Klick-Moduls, Änderung von FTP- und Datenbank-Passwörtern, Erstellung von SSL-Zertifikaten, etc.).

Wenn Ihre Domain noch nicht mit Ihrem Webhosting verbunden ist und Sie die notwendigen Schritte hierzu Ihrem Webmaster anvertrauen möchten, vergeben Sie ebenfalls die Berechtigung ["technischer Kontakt"](#gestion_des_contacts) für die [DNS Zone](https://docs.ovh.com/de/domains/webhosting_bearbeiten_der_dns_zone/) Ihres Domainnamens.

Die Zugangsberechtigung eines ["technischen Kontakts"](#gestion_des_contacts) ermöglicht keine Änderung der Administrator- oder Rechnungskontakte einer Dienstleistung. Er gewährt Ihrem Webmaster keinen Zugriff auf Ihre Rechnungen oder Bestellungen, die Verlängerung Ihrer Dienstleistungen oder Zahlungsmittel. Ebenfalls nicht möglich ist es, die [Verwaltung Ihres Domainnamens auf einen anderen Hosting-Provider zu übertragen](https://docs.ovh.com/de/domains/ausgehender-transfer-einer-generischen-oder-geografischen-domain/) oder den [Inhaber zu ändern](https://docs.ovh.com/de/domains/wechsel_des_domaininhabers/). Weiterhin können Sie als [Administrator-Kontakt](#administrateur) Ihrer Dienste jederzeit den ["technischen Kontakt"](#technique)" Ihrer Dienstleistung ändern.

### Sonderfall bei Domaininhabern

Bei der Bestellung eines OVHcloud-Dienstes haben Sie einen Inhaber dafür festgelegt. Der Inhaber hat die Möglichkeit, die Inhaberrechte einer Domain an Dritte zu übertragen oder die Verwaltung der Domain einzufordern, wenn der Zugang zu dem OVHcloud Kunden-Account, der mit dem Dienst verbunden ist, nicht besteht (es kann sich um mehrere Accounts handeln).

[Vorgang zur Änderung des Inhabers einer Dienstleistung.](https://www.ovh.com/cgi-bin/de/procedure/procedureChangeOwner.cgi)

[Die Kontakte Ihrer Domain ändern](https://www.ovh.com/fr/cgi-bin/de/procedure/procedureChangeContacts.cgi)

Die Weiterverfolgung jedes Vorgangs erfolgt per E-Mail, und es ist eine Identitätsüberprüfung erforderlich. Die detaillierten Anweisungen werden Ihnen während jedes Vorgangs mitgeteilt.


## Weiterführende Informationen

Kontaktieren Sie für spezialisierte Dienstleistungen (SEO, Web-Entwicklung etc.) die [OVHcloud Partner](https://partner.ovhcloud.com/de/directory/).

Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, beachten Sie unsere [Support-Angebote](https://www.ovhcloud.com/de/support-levels/).

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
