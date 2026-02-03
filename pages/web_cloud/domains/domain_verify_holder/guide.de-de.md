---
title: "Verwaltung der Kontaktdaten des Domaininhabers"
excerpt: "Erfahren Sie, wie Sie die Kontaktdaten eines Domaininhabers nach Empfang einer Warn-E-Mail von OVHcloud überprüfen, korrigieren oder vervollständigen können"
updated: 2026-01-16
---

## Ziel

Haben Sie eine E-Mail von OVHcloud erhalten, die besagt, dass für Ihre Domain eine Aktion erforderlich ist? Zeigt diese E-Mail an, dass die Kontaktdaten Ihres Domaininhabers korrigiert oder vervollständigt werden müssen?

**Diese Anleitung erklärt, wie Sie die Kontaktdaten eines Domaininhabers nach Empfang einer Warn-E-Mail von OVHcloud korrigieren oder vervollständigen können.**

### Warum habe ich eine Verifikationsmail von OVHcloud erhalten?

ICANN, die Organisation, die weltweit für die Verwaltung von Domains zuständig ist, oder Registrierstellen, Organisationen, die für die Verwaltung von Erweiterungen zuständig sind, verlangen die Validierung der Inhaberinformationen, wenn eine Domain erstellt, übertragen wird oder sobald Kontaktdaten aktualisiert werden.

Die Validierung der Kontaktdaten des Inhabers kann zu jedem Zeitpunkt im Lebenszyklus einer Domain stattfinden, einschließlich von Domains, die vor mehreren Jahren gekauft wurden. Somit muss jede betroffene Domain innerhalb von 15 Tagen nach Empfang der E-Mail die Validierung der Kontaktdaten des Inhabers durchlaufen, unabhängig davon, ob dies nach einem Kauf, einer Übertragung, einer Änderung der Kontaktdaten oder einer periodischen Validierung durch ICANN oder die Registrierstelle erfolgt.

### Was passiert, wenn die E-Mail-Adresse oder die Kontaktdaten des Inhabers innerhalb der Frist nicht verifiziert werden?

Falls die Verifikation innerhalb des festgelegten Zeitraums nicht abgeschlossen wird, wird die Domain automatisch gesperrt und vorübergehend nicht verfügbar sein, bis die Verifikation abgeschlossen ist, wodurch möglicherweise die Löschung der Domain erfolgt.
In diesem Fall kann OVHcloud keine Rückerstattung anbieten.

## Voraussetzungen

- Sie haben eine bei OVHcloud registrierten [Domainnamen](/links/web/domains).
- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](/links/manager).
- Sie haben eine E-Mail von OVHcloud erhalten, die besagt, dass bezüglich der Kontaktdaten Ihres Domaininhabers eine Aktion erforderlich ist.
- Überprüfen Sie die folgenden Punkte, um sicherzustellen, dass es sich nicht um eine betrügerische E-Mail handelt:
    - Der Betreff der E-Mail enthält Ihre Kundenkennung (zum Beispiel: `aa00000-ovh`) sowie Ihren Domainnamen (Beispiel: `domain.tld`).
    - Die in der E-Mail angegebene URL beginnt mit: `https://www.ovh.com/manager/#/web/domain/operation/`.

## In der praktischen Anwendung

### 1 - E-Mail-Verifikation des Inhabers nach Kauf oder Änderung der E-Mail-Adresse des Inhabers für eine Domain

Nach dem Kauf erhält der Domaininhaber eine E-Mail von OVHcloud, um die E-Mail-Adresse zu validieren und zu bestätigen, dass sie erreichbar ist.

![E-Mail-Verifikation](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/general-information/email-address-verification-for-one-of-your-domain-names.png){.thumbnail}

Wenn Sie auf `Bestätigen Sie Ihre E-Mail-Adresse`{.action} klicken, wird eine neue Seite geöffnet, auf der ein Link direkt die E-Mail-Adresse des Inhabers validiert.

Falls diese Methode nicht funktioniert, kann der Inhaber die E-Mail-Adresse manuell mit dem Einmalcode, der in der E-Mail bereitgestellt wird, validieren, und auf `E-Mail-Validierungsformular`{.action} klicken.

![Validierung der E-Mail-Adresse des Inhabers](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/general-information/holder-contact-email-validation_cgi.png){.thumbnail}

![Validierungs-E-Mail CGI](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/general-information/validation-email-CGI.png){.thumbnail}

### 2 - Korrigieren oder vervollständigen Sie die Kontaktdaten des Domaininhabers als Administrator

Klicken Sie auf die Tabs unten, um jeden der **5** Schritte anzuzeigen.

> [!tabs]
> **Schritt 1**
>>
>> Loggen Sie sich in Ihr [OVHcloud Kundencenter](/links/manager) ein und gehen Sie in den Bereich `Web Cloud`{.action}.
>>
>> ![Web Cloud](/pages/assets/screens/control_panel/product-selection/web-cloud.png){.thumbnail}
>>
> **Schritt 2**
>>
>> Klicken Sie auf das Menü `Domainnamen`{.action} und wählen Sie den Domainnamen aus.
>>
>> ![Domainnamen](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-names.png){.thumbnail}
>>
> **Schritt 3**
>>
>> Auf der angezeigten Seite prüfen Sie, ob Ihre Domain von diesem Verfahren abgedeckt wird, da ein Banner (gelb oder rot) die durchzuführende Aktion anzeigt.
>>
>> Im Rahmen **Abo** finden Sie dann **Kontakte**. Klicken Sie rechts auf den Button `...`{.action} und dann auf `Kontakte verwalten`{.action}.
>>
>> ![Inhaber ändern](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/general-information/manage-contacts-verify-contact-informations-holder.png){.thumbnail}
>>
> **Schritt 4**
>>
>> Auf der neuen Seite klicken Sie auf den Button `Ändern`{.action} im Bereich **Inhaber**. 
>>
>> ![Kontakte und Inhaber verwalten](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/general-information/manage-contacts-and-owners.png){.thumbnail}
>>
> **Schritt 5**
>>
>> > [!warning]
>> >
>> > Jede Änderung des Vornamens, Nachnamens, der Organisation, des Rechtsstatus oder der E-Mail-Adresse des Inhabers wird als **Wechsel des Inhabers** betrachtet.
>> >
>> > Wenn Sie **nur** die Kontaktdaten des Inhabers ändern, mit Ausnahme der oben genannten, bearbeiten Sie die entsprechenden Felder, und klicken Sie auf `Bestätigen`{.action}. In diesem Fall ist es nicht erforderlich, eine Anfrage für einen Wechsel des Inhabers zu starten. Für diesen Vorgang müssen Sie die Änderungen nicht per E-Mail bestätigen.
>> >
>> > Wenn ein Wechsel des Inhabers erforderlich ist, klicken Sie auf den Link `Klicken Sie hier, um fortzufahren`{.action} am unteren Rand der Seite.
>>
>> ![Inhaberinformationen](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/general-information/owner.png){.thumbnail}
>>
>> Weitere Informationen zum Inhaberwechsel finden Sie in unserer Anleitung: "[Domainname - Wie kann ich den Inhaber ändern?](/pages/web_cloud/domains/trade_domain)".

### 3 - Was tun, wenn die E-Mail-Adresse des Inhaberkontakts nicht mehr zugänglich ist?

#### Allgemeiner Fall

Falls die mit Ihrer Domain verknüpfte E-Mail-Adresse falsch oder nicht zugänglich ist (z. B. Tippfehler), sollten Sie den [OVHcloud Support kontaktieren](/links/support).

Beachten Sie, dass der Domaininhaber erneut seine Identität nachweisen muss, indem er die erforderlichen Dokumente (Privatperson, Firma, Verein etc.) bereitstellt.

> [!primary]
>
> Die unten aufgeführte Dokumentenliste ist nicht vollständig. Andere Dokumente können je nach Ihrem Fall oder den Anforderungen der zuständigen Registry angefordert werden.

**Dokumente, die je nach Art des Inhabers bereitzustellen sind:**

- **Privatperson**:
    - Gültiges Identitätsdokument (Vorder- und Rückseite): Personalausweis, Reisepass (Seiten mit Foto und persönlichen Informationen sowie Unterschriftsseite), Aufenthaltserlaubnis oder Führerschein.
- **Firma**
    - Nachweis der Existenz der Firma: Firma-Registrierungsbescheinigung (älter als 3 Monate), Handelsregisterauszug, Gewerbeschein oder ein gleichwertiges Dokument.
    - Gültiges Identitätsdokument (Vorder- und Rückseite) des gesetzlichen Vertreters (Geschäftsinhaber, Präsident oder Geschäftsführer): Personalausweis, Reisepass, Aufenthaltserlaubnis oder Führerschein.
- **Non-Profit-Organisation**
    - Gültiges Identitätsdokument (Vorder- und Rückseite) des gesetzlichen Vertreters (Präsident, Manager oder Leiter der Vereinigung): Personalausweis, Reisepass, Aufenthaltserlaubnis oder Führerschein.
    - Rechtlicher Nachweis der Existenz der Organisation.
    - Protokoll der letzten Generalversammlung.
- **Öffentliche Verwaltung**
    - Verwaltungszertifikat (oder gleichwertiges offizielles Dokument).
    - Gültiges Identitätsdokument (Vorder- und Rückseite) des Vertreters der öffentlichen Verwaltung: Personalausweis, Reisepass, Aufenthaltserlaubnis oder Führerschein.

Unsere Teams helfen Ihnen bei den nächsten Schritten, um Ihre Domain zu verifizieren.

#### Spezialfall - Änderung der Inhaberkontaktdaten durch den Administrator (Beispiel: .fr)

Für bestimmte Erweiterungen (z. B.: .fr, .it, .es) kann der Domainadministrator direkt im [OVHcloud Kundencenter](/links/manager) die E-Mail-Adresse des Inhaberkontakts gemäß den in Schritt 2 dieser Seite beschriebenen Schritten ändern.

### 4 - Operation zur Verifikation der Kontaktdaten des Domaininhabers erneut starten

> [!warning]
>
> Falls die Korrekturen im ersten Teil dieser Anleitung den Start eines Wechsels des Inhabers für die Domain erfordern, vollenden Sie den Wechsel des Inhabers **vor** der Fortsetzung der in dieser Anleitung beschriebenen Aktionen.
>

Klicken Sie auf die Tabs unten, um jeden der **4** Schritte anzuzeigen.

> [!tabs]
> **Schritt 1**
>>
>> Loggen Sie sich in Ihre [OVHcloud Kundencenter](/links/manager) ein und gehen Sie in den Bereich `Web Cloud`{.action}.
>>
>> ![Web Cloud](/pages/assets/screens/control_panel/product-selection/web-cloud.png){.thumbnail}
>>
> **Schritt 2**
>>
>> Klicken Sie auf das Menü `Laufende Vorgänge`{.action} und identifizieren Sie die betreffende Domain in der Liste.
>>
>> ![Laufende Operationen](/pages/assets/screens/control_panel/product-selection/web-cloud/ongoing-operations.png){.thumbnail}
>>
> **Schritt 3**
>>
>> Klicken Sie rechts auf `⁝`{.action} und dann auf `Vorgang bearbeiten`{.action}.
>>
>> ![Domainoperation](/pages/assets/screens/control_panel/product-selection/web-cloud/ongoing-operations/contact-correction.png){.thumbnail}
>>
> **Schritt 4**
>>
>> Wählen Sie im angezeigten Fenster die Option `Vorgang neu starten`{.action} und klicken Sie auf `Bestätigen`{.action}.
>>
>> ![Operationdaten der Domain](/pages/assets/screens/control_panel/product-selection/web-cloud/ongoing-operations/contact-correction-relaunch-operation.png){.thumbnail}

Es wird einige Minuten dauern, bis die Operation abgeschlossen ist. Aktualisieren Sie die Seite `Domainoperationen`, auf der sich die Operation zur Korrektur der Kontaktdaten Ihrer Domain befand.

Falls die Operation erfolgreich abgeschlossen wurde, wird die Zeile der verarbeiteten Operation nicht mehr angezeigt.

Falls dies nicht der Fall ist, ist eine Korrektur der Kontaktdaten des Domaininhabers erforderlich. In diesem Fall befolgen Sie diese Anleitung erneut, um das Problem zu beheben.

## Weiterführende Informationen

[Domainnamen - Inhaber eines Domainnamens ändern](/pages/web_cloud/domains/trade_domain)

[Die Kontakte Ihrer Dienste verwalten](/pages/account_and_service_management/account_information/managing_contacts)

Kontaktieren Sie für spezialisierte Dienstleistungen (SEO, Web-Entwicklung etc.) die [OVHcloud Partner](/links/partner).

Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, beachten Sie unsere [Support-Angebote](/links/support).

Treten Sie unserer [User Community](/links/community) bei.