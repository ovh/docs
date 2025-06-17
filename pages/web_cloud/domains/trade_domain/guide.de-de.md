---
title: "Domainnamen - Inhaber eines Domainnamens ändern"
excerpt: "Erfahren Sie hier, wie Sie den Inhaber eines Domainnamens ändern oder die zugehörigen Informationen aktualisieren"
updated: 2025-06-11
---

## Ziel

Neben der Angabe von [Kontakten](/pages/account_and_service_management/account_information/managing_contacts) erfordert die Registrierung eines Domainnamens die Angabe von Informationen zu dessen Inhaber. In diesem Zusammenhang bezeichnet der **Inhaber** entweder eine natürliche Person oder eine Organisation (Unternehmen, Verein, etc.), die über Nutzungsrechte an diesem Domainnamen verfügt. Unter einem **Inhaberwechsel** (*domain trade*) versteht man eine rechtsverbindliche Änderung dieser Daten bzw. die Übertragung von Nutzungsrechten an einen neuen Inhaber. Zum Beispiel ist der Inhaberwechsel das obligatorische Verfahren bei einer Namensänderung eines Unternehmens.

> [!primary]
> Bei dieser Operation wird Ihr Domainname nicht auf einen anderen OVHcloud Kunden-Account übertragen.
>
> Hierzu müssen Sie die [Kontaktverwaltung](/pages/account_and_service_management/account_information/managing_contacts) des Domainnamens anpassen.
>
> Wenn Sie einen Inhaber- und Kontaktwechsel für denselben Domainnamen vornehmen müssen, empfehlen wir Ihnen, **zuerst** den Inhaberwechsel vorzunehmen, um einen optimalen Übergang zu gewährleisten. Es ist jedoch allein der Administrator-Kontakt, der diese Vorgänge einleiten kann. Diese beiden Änderungen werden daher im Kundencenter des Administrator-Kontakts für den Domainnamen vorgenommen.
>
> Die Angaben zum Inhaber eines Domainnamens haben lediglich administrative Bedeutung und sind unabhängig von den Kontaktinformationen, die einer OVHcloud Kundenkennung entsprechen. Eine Einzelperson oder eine Organisation (Unternehmen, Verein, etc.), die nur als Inhaber eines Domainnamens deklariert ist, hat daher keinen Zugriff auf den Domainnamen im OVHcloud Kundencenter.
>

**Diese Anleitung erklärt die notwendigen Schritte zum Inhaberwechsel eines Domainnamens und zur Aktualisierung der Inhaberdaten.**

## Voraussetzungen

- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](/links/manager).
- Sie verwalten einen bei OVHcloud registrierten Domainnamen, für den keine Operation (Inhaberwechsel, Transfer, Erstellung) im Gange ist. Wenn vor kurzem ein solcher Vorgang für Ihren Domainnamen abgeschlossen wurde, gilt regulär eine Frist von 60 Kalendertagen, bevor eine neue Operation gestartet werden kann.
- Ihr Kunden-Account ist der [Kontakt für Administrator und Abrechnung](/pages/account_and_service_management/account_information/managing_contacts) des entsprechenden Domainnamens.
- Sie haben die Zustimmung des aktuellen Inhabers des Domainnamens, den Inhaberwechsel durchzuführen oder Daten zu aktualisieren.

## In der praktischen Anwendung

> [!warning]
>
> Die folgenden Anweisungen beschreiben die gängigste Methode um den Inhaber eines Domainnamens zu ändern und gelten für die meisten **T**op **L**evel **D**omains (**TLD**). Als **TLD** wird der letzte Teil des Domainamens bzw. dessen Endung bezeichnet, also *.com*, *.net*, *.de* etc.
>
> Die besonderen Verfahrensvorschriften für **TLD**s werden von der zuständigen Vergabestelle, d.h. der **Registry**, festgelegt. Registrare wie OVHcloud müssen diese Regeln einhalten und haben keinen Einfluss auf Registry-Entscheidungen.
>
> Es gibt im Wesentlichen zwei Arten von **TLD**: **ccTLD** und **gTLD**. Die **ccTLD**s entsprechen einer Region oder einem Land (*.fr*, *.be*, *.uk*, *.de*, *.paris* etc.) und **gTLD** sind sog. generische **TLD**s (*.net*, *.com*, *.info*, *.org* etc.).
>
> Das genaue Verfahren für die Änderung des Inhabers kann variieren, insbesondere bei bestimmten Ländercode-**TLD**s, wie *.lu*, *.hk*, *.ro*, *.be*, *.lt*, *.dk*, *.at*, *.fi* etc. sowie einigen Spezialbereich-**TLD**s (z.B. *.am*, *.fm.*). Bei manchen dieser Registrierungsstellen gilt ein Inhaberwechsel als kostenpflichtige Transaktion. Der Inhaberwechsel kann auch aus verschiedenen Gründen ausgesetzt werden, etwa wegen ausstehender Zahlungen, Missbrauchsfällen oder einer Sperrung seitens der Registry.
>
> Wir empfehlen, im Zweifelsfall folgende Ressourcen zu Rate zu ziehen:
>
> - Die Webseite der zuständigen **TLD**-Registry.
> - Die [Beschreibungen der bei OVHcloud verfügbaren **TLD**s](/links/web/domains-tld).
> - Statusaktualisierungen des Domainnamens. Loggen Sie sich in Ihrem [OVHcloud Kundencenter](/links/manager) ein und gehen Sie dann in den Bereich `Web Cloud`{.action}. Klicken Sie auf `Laufende Operationen`{.action}.
>

### Initiieren des Inhaberwechsels oder Ändern der Inhaberinformationen

Klicken Sie jeweils auf die Tabs, um die **7** Schritte anzuzeigen.

> [!tabs]
> **Schritt 1**
>>
>> Loggen Sie sich in Ihre [OVHcloud Kundencenter](/links/manager) ein und gehen Sie in den Bereich `Web Cloud`{.action}.
>>
>> ![Web Cloud](/pages/assets/screens/control_panel/product-selection/web-cloud.png){.thumbnail}
>>
> **Schritt 2**
>>
>> Klicken Sie auf das Menü `Domainnamen`{.action} und wählen Sie den Domainnamen aus.
>>
>> ![Domain Names](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-names.png){.thumbnail}
>>
> **Schritt 3**
>>
>> Im Bereich **Abo** finden Sie den Abschnitt **Kontakte**. Klicken Sie rechts auf den Button `...`{.action} und anschließend auf `Die Kontakte verwalten`{.action}.
>>
>> ![Change owner](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/general-information/manage-contacts.png){.thumbnail}
>>
> **Schritt 4**
>>
>> Auf der neuen Seite klicken Sie auf den Button `Ändern`{.action} im Bereich **Inhaber**. 
>>
>> ![Manage contacts and owners](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/general-information/manage-contacts-and-owners.png){.thumbnail}
>>
> **Schritt 5**
>>
>> > [!warning]
>> >
>> > Jede Änderung des Vornamens, des Namens, der Organisation, der Rechtsform oder der E-Mail-Adresse des Inhabers gilt als **Inhaberwechsel**.
>> >
>> > Wenn Sie **nur** Angaben zum Inhaber bearbeiten, die keine dieser Daten betreffen, bearbeiten Sie die relevanten Felder und klicken Sie dann auf `Bestätigen`{.action}. In diesem Fall ist es nicht notwendig, einen Inhaberwechsel zu beantragen. Für diesen Vorgang müssen Sie die Änderungen nicht per E-Mail bestätigen.
>> >
>> > Ist ein Inhaberwechsel erforderlich, klicken Sie unten auf den Link `Klicken Sie hier, um fortzufahren`{.action}.
>>
>> ![Owner informations](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/general-information/owner.png){.thumbnail}
>>
> **Schritt 6**
>>
>> Es öffnet sich ein neuer Browser-Tab mit allen in Frage kommenden Domains. Wählen Sie einen Domainnamen in der Liste aus, indem Sie das Feld links davon ankreuzen. Dieser Schritt kann auch verwendet werden, um eine Gruppenoperation zu starten. So ist es beispielsweise möglich, einen Inhaberwechsel für mehrere Domainnamen gleichzeitig durchzuführen, zum Beispiel um den Inhaber aller Domainnamen mit der Endung *.ovh* zu ändern, sofern deren aktuelle Inhaber identisch sind.
>>
>> ![Change owner domains list](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/general-information/available-domains.png){.thumbnail}
>>
>> Klicken Sie nach der Auswahl auf `Weiter`{.action}.
>>
> **Schritt 7**
>>
>> Achten Sie im Formular für die Angaben des Inhabers darauf, dass alle Pflichtfelder gültige Informationen enthalten. Achten Sie auf Eingabefehler und vermeiden Sie möglichst Zeichen außerhalb des *[ASCII printable](http://facweb.cs.depaul.edu/sjost/it212/documents/ascii-pr.htm)*-Bereichs. Beachten Sie auch, dass falsche oder ungenaue Angaben zu einem technischen Fehler und damit zu einer Verzögerung des gesamten Prozesses führen können.
>>
>> Sobald Sie Ihre Anfrage für den Wechsel bestätigt haben, werden zwei E-Mails zur Bestätigung oder Stornierung der Anfrage versendet:
>>
>> - Eine E-Mail an den aktuellen Inhaber
>> - Eine E-Mail an den zukünftigen Inhaber
>>
>> Wenn die E-Mail-Adresse im Rahmen des Inhaberwechsels nicht geändert wird, werden beide E-Mails and die Referenz-E-Mail-Adresse gesendet. Beide müssen jeweils bestätigt werden.
>>
>> Sobald beide Empfänger die Anfrage per E-Mail bestätigt haben, wird die Änderung des Inhabers des Domainnamens wirksam.
>>

> [!warning]
>
> - Das Verfahren kann von beiden Parteien innerhalb einer Frist von 14 Tagen validiert werden. **Nach Ablauf dieser Frist wird das Verfahren abgebrochen**.
>
> - Wird die Änderung von einer der Parteien abgelehnt, wird der Vorgang storniert.
>
> - Wenn die E-Mail-Adresse des aktuellen Inhabers veraltet oder nicht erreichbar ist, können Sie **in diesem Fall** den Support kontaktieren, indem Sie ein Support-Ticket in Ihrem [OVHcloud Help Center](https://help.ovhcloud.com/csm?id=csm_get_help) erstellen.
>
> - Sobald der Inhaber geändert wurde, kann der Domainname für 60 Tage nicht [an einen anderen Registrar übertragen werden](/pages/web_cloud/domains/transfer_outgoing_domain).

## Weiterführende Informationen

[Verwaltung der Kontakte Ihrer Dienstleistungen](/pages/account_and_service_management/account_information/managing_contacts)

Kontaktieren Sie für spezialisierte Dienstleistungen (SEO, Web-Entwicklung etc.) die [OVHcloud Partner](/links/partner).

Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, beachten Sie unsere [Support-Angebote](/links/support).

Treten Sie unserer [User Community](/links/community) bei.
