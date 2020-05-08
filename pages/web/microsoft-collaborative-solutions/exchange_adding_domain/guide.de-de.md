---
title: 'Eine Domain zu Ihrem Exchange Dienst hinzufügen'
slug: domain-zu-exchange-hinzufugen
excerpt: 'So fügen Sie eine Domain zu Ihrer Exchange Lösung hinzu'
section: 'Erste Schritte mit Exchange'
---

**Stand 22.03.2018**

## Einleitung

Um die in Ihrem Exchange Angebot enthaltenen Accounts nutzen zu können, benötigen Sie eine entsprechende Domain. Sie können auch mehrere Domains zu Ihrer Exchange Lösung hinzufügen. 

**In dieser Anleitung erfahren Sie, wie Sie eine Domain zu Ihrem Exchange Dienst hinzufügen.**

## Voraussetzungen

- Sie verfügen über eine [Exchange Lösung](https://www.ovh.de/emails/hosted-exchange/){.external}.
- Sie besitzen eine oder mehrere Domains.
- Sie können die Konfiguration Ihrer Domain (ihre DNS-Zone) bearbeiten.
- Sie sind in Ihrem [Kundencenter](https://ovh.com/auth/?action=gotomanager){.external} eingeloggt.

## Beschreibung

### Schritt 1: Auf Ihre Dienstleistung zugreifen

Wenn Ihr Hosted Exchange Angebot eingerichtet und verfügbar ist, können Sie es über Ihr [OVH Kundencenter](https://ovh.com/auth/?action=gotomanager){.external} verwalten.

Gehen Sie hierzu in Ihrem Kundencenter im linken Menü auf `Microsoft`{.action} und dann auf `Exchange`{.action}. Wählen Sie anschließend den Namen des entsprechenden Exchange Dienstes aus.

> [!primary]
>
> Der Name Ihres Hosted Exchange Angebots im OVH Kundencenter beginnt mit **hosted-** oder **private-**, enthält anschließend einen Teil Ihrer Kundenkennung und endet mit einer Zahl (1 für den zuerst installierten Hosted oder Private Exchange Dienst, 2 für den zweiten etc.).
>

### Schritt 2: Eine Domain hinzufügen

Um eine Domain hinzuzufügen, klicken Sie auf den Tab `Assoziierte Domains`{.action}. Die Tabelle zeigt die aktuell mit Ihrem Exchange Angebot verbundenen Domains. Um eine neue Domain hinzuzufügen, klicken Sie auf den Button `Eine Domain hinzufügen`{.action}.

> [!warning]
>
> Alle für Ihren Exchange Dienst erstellten Adressen können sich die übrigen Adressen im Adressbuch anzeigen lassen, darunter auch die Adressen mit einer anderen Domain. Wenn Sie nicht möchten, dass bestimmte Domains im Adressbuch angezeigt werden, benötigen Sie ein neues [Exchange Angebot](https://www.ovh.de/emails/hosted-exchange/){.external} für die betreffenden Domains.
>

![Exchange](images/add_domain_exchange_step1.png){.thumbnail}

Im angezeigten Fenster zum Hinzufügen der Domain haben Sie folgende Auswahlmöglichkeiten:

- **Eine Domain aus der Liste auswählen**: Es werden nur Domains angezeigt, die die OVH Konfiguration verwenden und mit Ihrer Kundenkennung verknüpft sind.

- **Eine Domain hinzufügen, die nicht in Ihrem OVH Account verwaltetet wird**: Sie sollten in der Lage sein, die Konfiguration der Domain zu ändern (die zugehörige DNS-Zone), damit der Exchange Dienst korrekt funktioniert.

Wenn Sie Ihre Auswahl vorgenommen haben, klicken Sie auf `Weiter`{.action}.

![Exchange](images/add_domain_exchange_step2.png){.thumbnail}

Das Fenster zeigt dann die Informationen zur Konfiguration verschiedener Modi an.

- **Wenn Sie eine nicht von OVH verwaltete Domain angegeben haben**: Es wird standardmäßig der nicht-autoritative Modus eingestellt.

- **Wenn Sie in der Liste eine von OVH verwaltete Domain ausgewählt haben**: Sie haben die Wahl zwischen zwei Modi.

|Modus|Beschreibung|
|---|---|
|Autoritativ|Empfiehlt sich, wenn Sie nur die Exchange Lösung mit Ihrer Domain verwenden. Die gleichzeitige Verwendung einer anderen E-Mail-Lösung mit Ihrem Exchange Dienst ist nicht möglich.|
|Nicht-autoritativ|Empfiehlt sich, wenn Sie neben der Exchange Lösung gleichzeitig eine andere E-Mail-Lösung mit Ihrer Domain verwenden. Geben Sie hierzu den Server Ihrer anderen E-Mail-Lösung an.|

> [!primary]
>
> Die Wahl des Modus ist nicht dauerhaft festgelegt und kann im Nachhinein über das OVH Kundencenter geändert werden.
>

Klicken Sie auf `Weiter`{.action}, um die Domain hinzuzufügen.

![Exchange](images/add_domain_exchange_step3.png){.thumbnail}

**Wenn Sie in der Liste eine von OVH verwaltete Domain ausgewählt haben**, kann deren Konfiguration automatisch vorgenommen werden. Wählen Sie hierzu das entsprechende Kästchen und klicken Sie dann auf `Weiter`{.action}, um mit dem Hinzufügen der Domain fortzufahren.

**Wenn Sie eine Domain angegeben haben, die nicht von OVH verwaltet wird**, wird die Konfiguration im folgenden Schritt vorgenommen.

![Exchange](images/add_domain_exchange_step4.png){.thumbnail}

Am Ende der Konfiguration werden Sie aufgefordert, die angezeigten Informationen zu überprüfen und auf `Bestätigen`{.action} zu klicken, um das Hinzufügen der Domain zu veranlassen. Wiederholen Sie diesen Schritt so oft wie nötig, wenn Sie weitere Domains hinzuzufügen möchten.

### Schritt 3: Ihre Domain (DNS) konfigurieren

Sobald die Domain als assoziierte Domain hinzugefügt ist, überprüfen Sie bitte in der angezeigten Tabelle, dass die Konfiguration korrekt ist. Ein grünes Kästchen zeigt an, dass die Domain korrekt konfiguriert ist. Falls das Kästchen rot ist:

- **Wenn Sie beim Hinzufügen der Domain die automatische Konfiguration gewählt haben**: Es kann einige Stunden dauern, bis die Anzeige im OVH Kundencenter aktualisiert ist.

- **Wenn Sie eine nicht von OVH verwaltete Domain angegeben haben**: Klicken Sie auf das rote Kästchen, um zu sehen, welche Änderungen notwendig sind. Verwendet die Domain nicht die OVH Konfiguration (d. h. die DNS-Server von OVH), nehmen Sie bitte die notwendigen Änderungen in dem Verwaltungsinterface vor, dass Sie für die Konfiguration Ihrer Domain verwenden. Zur Bearbeitung eines CNAME-Eintrags finden Sie weitere Informationen in der Dokumentation [CNAME-Eintrag zu einer assoziierten Domain hinzufügen](https://docs.ovh.com/de/microsoft-collaborative-solutions/exchange_20132016_einen_cname_eintrag_hinzufugen/){.external}.

> [!primary]
>
> Die Änderung der DNS-Konfiguration Ihrer Domain erfordert eine Propagationszeit von 4 bis 24 Stunden, bis sie voll wirksam ist.
>

Um zu überprüfen, dass die Konfiguration der Domain korrekt ist, gehen Sie zurück in die Tabelle `Assoziierte Domains`{.action} Ihres Exchange Dienstes. Wird ein grünes Kästchen angezeigt, ist die Domain korrekt konfiguriert. Ist das nicht der Fall, kann es sein, dass die Propagationszeit noch nicht abgelaufen ist.

![Exchange](images/add_domain_exchange_step5.png){.thumbnail}

### Schritt 4: Accounts konfigurieren und verwenden

Nun, da Sie die gewünschten Domains zu Ihrem Exchange Dienst hinzugefügt haben, können Sie Ihre Exchange Accounts mit diesen konfigurieren. Gehen Sie hierzu in den Tab `E-Mail-Accounts`{.action}. Wenn nötig können Sie weitere Accounts über den Button `Accounts bestellen`{.action} oder über `Einen Account hinzufügen`{.action} bestellen.

Zur Erinnerung: Alle für Ihren Exchange Dienst erstellten Adressen können sich die übrigen Adressen im Adressbuch anzeigen lassen, darunter auch die Adressen mit einer anderen Domain.

Nachdem Sie Ihre Accounts fertig eingerichtet haben, können Sie diese nun verwenden. Hierzu stellt Ihnen OVH die *Webmail* **Outlook Web Application** (OWA) über folgende Adresse zur Verfügung: [https://www.ovh.cz/mail/](https://www.ovh.cz/mail/){.external}. Vergewissern Sie sich, dass der E-Mail-Client mit Ihrer Dienstleistung kompatibel ist, damit Ihre Exchange Adresse optimal funktioniert. Wenn Sie Ihre E-Mail-Adresse auf einem E-Mail-Client oder auf einem Gerät (beispielsweise einem Smartphone oder einem Tablet) einrichten möchten, oder weitere Informationen zur Verwendung der Exchange Funktionen suchen, finden Sie die entsprechende Dokumentationen unter [https://docs.ovh.com/de/microsoft-collaborative-solutions/](https://docs.ovh.com/de/microsoft-collaborative-solutions/){.external}.

Sie können Outlook Lizenzen über Ihr [OVH Kundencenter](https://ovh.com/auth/?action=gotomanager){.external} und Office 365 Lizenzen auf der Webseite [https://www.ovh.de/office-365/](https://www.ovh.de/office-365/){.external} erwerben. Wir empfehlen Ihnen, eine dieser Lösungen zu verwenden, wenn Sie den Outlook E-Mail-Client oder weitere Software der Office Suite nutzen möchten.

## Weiterführende Informationen

[CNAME-Eintrag zu einer assoziierten Domain hinzufügen](../exchange_20132016_einen_cname_eintrag_hinzufugen/)

Für den Austausch mit unserer User Community gehen Sie auf [https://community.ovh.com/en/](https://community.ovh.com/en/){.external}.