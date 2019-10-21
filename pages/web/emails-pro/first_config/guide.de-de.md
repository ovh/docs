---
title: 'Konfiguration von E-Mail Pro'
slug: erstkonfiguration
excerpt: 'Hier erfahren Sie, wie Sie Ihre E-Mail Pro Lösung einrichten'
section: Allgemein
---

**Stand 28.11.2018**

## Einleitung

Sie haben gerade eine E-Mail Pro Lösung erworben. Nun können Sie zu einem günstigen Preis professionelle E-Mail-Adressen nutzen, um Ihr Business zu fördern oder neu zu starten.

**In dieser Anleitung erfahren Sie, wie Sie Ihre E-Mail Pro Lösung konfigurieren.**

## Voraussetzungen

- Sie verfügen über eine [E-Mail Pro](https://www.ovh.de/emails/email-pro/){.external} Lösung.
- Sie haben die Bestätigungs-E-Mail zur Installation von E-Mail Pro erhalten.
- Sie besitzen eine Domain.
- Sie sind in Ihrem [Kundencenter](https://www.ovh.com/auth/?action=gotomanager){.external} eingeloggt.

## Beschreibung

### Schritt 1: Zugang zur Verwaltung Ihres Dienstes

Wenn der E-Mail Pro Dienst eingerichtet und verfügbar ist, können Sie ihn über Ihr [OVH Kundencenter](https://www.ovh.com/auth/?action=gotomanager){.external} verwalten.

Loggen Sie sich hierzu in Ihrem Kundencenter ein, klicken im linken Menü auf `E-Mail Pro`{.action} und anschließend auf den Namen des entsprechenden Dienstes.

> [!primary]
>
> Der Name eines E-Mail Pro Dienstes in Ihrem OVH Kundencenter beginnt mit *emailpro-*, enthält dann einen Teil Ihrer Kundenkennung und endet mit einer Zahl (1 für den ersten eingerichteten E-Mail Pro Dienst, 2 für den zweiten usw.).
>

### Schritt 2: Ihre Domain hinzufügen

Wenn Sie Ihren E-Mail Pro Dienst gerade bestellt haben, erscheint automatisch ein Fenster mit der Aufforderung `Eine Domain hinzufügen`{.action}. Sollte das Fenster nicht angezeigt werden, gehen Sie in den Tab `Assoziierte Domains`{.action} und klicken Sie auf den Button `Eine Domain hinzufügen`{.action}.

Sie haben folgende Auswahlmöglichkeiten:

- **Eine Domain in der Liste auswählen**: Es werden nur Domains mit OVH Konfiguration angezeigt, die mit Ihrer Kundenkennung verknüpft sind.
- **Eine Domain hinzufügen, die nicht in Ihrem OVH Account verwaltetet wird**: Sie sollten in der Lage sein, die Konfiguration der Domain zu ändern (die zugehörige DNS-Zone), damit der E-Mail Pro Dienst korrekt funktioniert.

Wenn Sie Ihre Auswahl vorgenommen haben, klicken Sie auf `Weiter`{.action}.

![emailpro](images/first_config_email_pro_add_domain.png){.thumbnail}

Das Fenster zeigt dann die Informationen zur Konfiguration eines Modus an.

- **Wenn Sie eine nicht von OVH verwaltete Domain angegeben haben**: Es wird standardmäßig der nicht-autoritative Modus eingestellt.
- **Wenn Sie in der Liste eine von OVH verwaltete Domain ausgewählt haben**: Sie haben die Wahl zwischen zwei Modi.

|Modus|Beschreibung|
|---|---|
|Autoritativ|Empfiehlt sich, wenn Sie nur die E-Mail Pro Lösung mit Ihrer Domain verwenden. Die gleichzeitige Verwendung einer anderen E-Mail-Lösung mit Ihrem E-Mail Pro Dienst ist nicht möglich.|
|Nicht-autoritativ|Empfiehlt sich, wenn Sie neben der E-Mail Pro Lösung gleichzeitig eine andere E-Mail-Lösung mit Ihrer Domain verwenden.| 

> [!primary]
>
> Die Wahl des Modus ist nicht dauerhaft festgelegt und kann im Nachhinein über das OVH Kundencenter geändert werden.
>

Klicken Sie auf `Weiter`{.action}, um die Domain hinzuzufügen.

![emailpro](images/first_config_email_pro_add_domain_step2.png){.thumbnail}

**Wenn Sie in der Liste eine von OVH verwaltete Domain ausgewählt haben**, kann deren Konfiguration automatisch vorgenommen werden. Setzen Sie hierzu einen Haken im entsprechenden Kästchen und klicken Sie dann auf `Weiter`{.action}, um mit dem Hinzufügen der Domain fortzufahren.

**Wenn Sie eine Domain angegeben haben, die nicht von OVH verwaltet wird**, wird die Konfiguration im folgenden Schritt vorgenommen.

![emailpro](images/first_config_email_pro_add_domain_step3.png){.thumbnail}

Am Ende der Konfiguration werden Sie aufgefordert, die angezeigten Informationen zu überprüfen und auf `Bestätigen`{.action} zu klicken, um das Hinzufügen der Domain zu veranlassen.

### Schritt 3: Ihre Domain konfigurieren

Sobald die Domain als assoziierte Domain hinzugefügt ist, überprüfen Sie bitte in der angezeigten Tabelle, dass die Konfiguration korrekt ist.

In der Spalte `Diagnose`{.action} können Sie sehen, ob die Konfiguration der MX-Felder der Domain korrekt ist. Ein rotes Kästchen zeigt an, dass die Konfiguration geändert werden muss.

- **Wenn Sie beim Hinzufügen der Domain die automatische Konfiguration gewählt haben**: Es kann einige Stunden dauern, bis diese im OVH Kundencenter angezeigt wird.
- **Wenn Sie eine nicht von OVH verwaltete Domain angegeben haben**: Klicken Sie auf das rote Kästchen, um zu sehen, welche Änderungen notwendig sind. Wenn Sie diese erst durchgeführt haben, kann es einige Stunden dauern, bis sie im OVH Kundencenter angezeigt werden.

![emailpro](images/first_config_email_pro_configure_domain.png){.thumbnail}

### Schritt 4: E-Mail Pro Accounts konfigurieren

Zur Konfiguration Ihrer E-Mail-Adressen gehen Sie in den Tab `E-Mail-Accounts`{.action}. Die Tabelle zeigt die bestellten Accounts als “*@configureme.me*” an.

Um sie zu konfigurieren, klicken Sie bitte auf das Bleistift-Symbol.

![emailpro](images/first_config_email_pro_configure_email_accounts.png){.thumbnail}

Ergänzen Sie die angezeigten Informationen.

|Bezeichnung|Beschreibung|
|---|---|
|E-Mail-Account|Geben Sie den Namen ein, den Ihre E-Mail-Adresse erhalten soll (zum Beispiel: vorname.name) und wählen Sie die entsprechende Domain aus der Liste aus.|
|Vorname|Geben Sie einen Vornamen an.|
|Name|Geben Sie einen Nachnamen an.|
|Anzeigename|Geben Sie den Namen an, der als Absender angezeigt werden soll, wenn E-Mails mit dieser Adresse verschickt werden.|
|Passwort und Bestätigung|Wählen Sie ein Passwort und bestätigen Sie dieses.| 

Wenn alle Angaben vollständig sind, klicken Sie auf `Weiter`{.action}. Überprüfen Sie die angezeigten Informationen und klicken Sie dann auf `Bestätigen`{.action}, um die Konfiguration Ihres Accounts abzuschließen.

> [!primary]
>
> Führen Sie diesen Schritt für alle zur Verfügung stehenden Accounts durch. Sie können weitere Accounts über den Button `Accounts bestellen`{.action} hinzufügen.
>

![emailpro](images/first_config_email_pro_configure_email_accounts_step2.png){.thumbnail}

### Schritt 5: Ihre E-Mail-Adressen verwenden

Nach Abschluss der Konfiguration können Sie Ihre E-Mail-Adressen verwenden. Dazu stellt Ihnen OVH eine Online-Anwendung (eine *Webapp*) zur Verfügung. Diese App ist über die Adresse <https://pro1.mail.ovh.net> erreichbar, auf der Sie die Login-Daten für Ihre E-Mail-Adresse eingeben.

Wenn Sie Ihre E-Mail-Adresse auf einem E-Mail-Client oder einem Gerät (beispielsweise einem _Smartphone_ oder einem Tablet) einrichten möchten, werfen Sie bitte einen Blick in die jeweilige Anleitung unter <https://docs.ovh.com/de/emails-pro/>. Wenn Sie nur die erforderlichen Informationen zur Konfiguration Ihres E-Mail Pro Accounts benötigen, verwenden Sie die folgenden Einstellungen:

|Servertyp|Servername|Sicherheitstyp|Port|
|---|---|---|---|
|Eingangsserver|pro1.mail.ovh.net|SSL/TLS|993|
|Ausgangsserver|pro1.mail.ovh.net|STARTTLS|587|

## Weiterführende Informationen

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
