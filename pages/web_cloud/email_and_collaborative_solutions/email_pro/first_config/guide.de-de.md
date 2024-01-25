---
title: 'Konfiguration von E-Mail Pro'
excerpt: 'Erfahren Sie hier, wie Sie Ihre E-Mail Pro Lösung einrichten'
updated: 2024-01-24
---

## Ziel

Sie haben gerade eine E-Mail Pro Lösung erworben. Nun können Sie zu einem günstigen Preis professionelle E-Mail-Adressen nutzen, um Ihr Business zu fördern oder neu zu starten.

**Diese Anleitung erläutert, wie Sie Ihre E-Mail Pro Lösung konfigurieren.**

## Voraussetzungen

- Sie haben einen [E-Mail Pro](https://www.ovhcloud.com/de/emails/email-pro/)-Dienst in Ihrem Kunden-Account.
- Sie haben die E-Mail zur Installation von E-Mail Pro bereits erhalten.
- Sie verfügen über einen [Domainnamen](https://www.ovhcloud.com/de/domains/).
- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de).

## In der praktischen Anwendung

### Schritt 1: Zugang zur Verwaltung Ihres Dienstes

Wenn der E-Mail Pro Dienst eingerichtet und verfügbar ist, können Sie ihn über Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) verwalten.

Loggen Sie sich hierzu in Ihrem Kundencenter ein und wählen Sie den betreffenden `E-Mail Pro`{.action} Dienst aus.

> [!primary]
>
> Der Name eines E-Mail Pro Dienstes in Ihrem OVHcloud Kundencenter beginnt mit *emailpro-*, enthält dann einen Teil Ihrer Kundenkennung und endet mit einer Zahl (1 für den ersten eingerichteten E-Mail Pro Dienst, 2 für den zweiten usw.).
>

### Schritt 2: Ihre Domain hinzufügen

Wenn Sie Ihren E-Mail Pro Dienst gerade bestellt haben, erscheint automatisch ein Fenster mit der Aufforderung `Eine Domain hinzufügen`{.action}. Sollte das Fenster nicht angezeigt werden, gehen Sie in den Tab `Assoziierte Domains`{.action} und klicken Sie auf den Button `Eine Domain hinzufügen`{.action}.

Sie haben folgende Auswahlmöglichkeiten:

- **Eine Domain aus der Liste** auswählen : Es werden nur die Domainnamen angezeigt, die Sie in Ihrem OVHcloud Kundencenter verwalten. Wenn die Domain bei OVHcloud registriert, aber nicht in Ihrem Kundencenter angezeigt wird, müssen Sie sie mit der Option „Eine Domain eingeben, die nicht in Ihrem OVHcloud-Account verwaltet wird“ hinzufügen
- **Eine Domain angeben, die nicht in Ihrem OVHcloud** Account verwaltet wird : Wählen Sie diese Option, wenn die betreffende Domain bei OVHcloud registriert, aber über ein anderes OVHcloud Kundencenter konfigurierbar ist **oder** wenn Ihre Domain bei einem anderen Registrar registriert ist. Sie müssen in der Lage sein, die Konfiguration der Domain (ihre DNS-Zone) zu ändern, damit der E-Mail Pro Dienst korrekt funktioniert.

Nachdem Sie Ihre Auswahl vorgenommen haben, klicken Sie auf `Weiter`{.action}.

![emailpro](images/emailpro-01.png){.thumbnail}

Das Fenster zeigt dann die Informationen zur Konfiguration verschiedener Modi an.

![emailpro](images/emailpro-02.png){.thumbnail}

- **Wenn Sie eine nicht von OVHcloud** verwaltete Domain angegeben haben : Der nicht-autoritative Modus wird standardmäßig konfiguriert.

- **Wenn Sie in der Liste eine von OVHcloud verwaltete Domain ausgewählt haben**, können Sie zwischen zwei Modi wählen.
    - **Autoritativ**: Passend, wenn Ihre E-Mail Pro Lösung die einzige E-Mail-Lösung ist, die Sie mit Ihrem Domainnamen verwenden. Es ist nicht möglich, eine andere E-Mail-Lösung mit Ihrem Dienst zu verwenden.
    - **Nicht-autoritativ**: Passend, wenn Sie neben Ihrem Domainnamen die E-Mail Pro Lösung **sowie eine andere E-Mail**-Lösung verwenden.

> **Grundlegendes zu autoritativem und nicht autoritativem Modus**
>
> - Wenn eine E-Mail im **autoritativen** Modus an Ihre E-Mail Pro Plattform (*Inbound Mail Server Email Pro*) übermittelt wird, werden alle E-Mail-Adressen Ihres Domainnamens ausschließlich auf dieser Plattform gehostet. <br> <br> Wenn Sie zum Beispiel eine E-Mail an die Adresse „*mary.johnson@mydomain.ovh*“ senden, sendet der E-Mail Pro Server „*Inbound mail server Email Pro*“ eine Fehlermeldung an den Absender, da diese Adresse auf dem E-Mail Pro Server „*Inbound mail server Email Pro*“ nicht existiert.
> - Wenn eine E-Mail im **nicht-autoritativen** Modus an Ihre E-Mail Pro Plattform (*Inbound Mail Server Email Pro*) gesendet wird, werden die E-Mail-Adressen Ihrer Domain zwischen Ihrer Haupt-E-Mail-Plattform (*Inbound Mail Server Email Pro*) und einem anderen E-Mail-Dienst (*Inbound Mail Server MXplan*) aufgeteilt. <br> <br> Wenn Sie zum Beispiel eine E-Mail an die Adresse „*mary.johnson@mydomain.ovh*“ senden, wird die E-Mail vom E-Mail Pro *Inbound Mail Server Email Pro* an den MXplan Server „*Inbound mail server MXplan*“ weitergeleitet, damit dieser die E-Mail bereitstellen kann.
>
> ![Add Domain](images/authoritative-mode.png){.thumbnail}
>

> [!warning]
>
> Wenn Sie die Nachricht „**authoritative domain detected**“ erhalten, wenn Sie Ihren Domainnamen auf Ihrer E-Mail-Plattform hinzufügen, bedeutet dies, dass dieser Domainname auf einer anderen E-Mail-Plattform als **autoritativ** deklariert ist. Daher müssen beide Plattformen in den **nicht-autoritativen** Modus versetzt werden, damit sie nebeneinander bestehen können.

Wenn Sie sich für den **nicht-autoritativen** Modus entscheiden und einen Dienst verwenden:

- **E-Mail-Adresse von OVHcloud (Exchange oder MXplan)**, geben Sie direkt als Ziel-E-Mail-Server „*mx1.mail.ovh.net*“ ein ( funktioniert auf die gleiche Weise mit *mx0.mail.ovh.net*, *mx2.mail.ovh.net*, *mx3.mail.ovh.net*, *mx4.mail.ovh.net*).
- **E-Mail von außerhalb von OVHcloud (E-Mail-Angebot des Mitbewerbers, privater E-Mail-Server)**. Geben Sie in das Feld Ziel-E-Mail-Server den Hostnamen des Eingangsservers dieses externen Dienstes ein. Stellen Sie dabei sicher, dass dieser E-Mail-Anfragen von Ihrem E-Mail Pro Dienst zulässt

Die Wahl des Modus ist nicht dauerhaft festgelegt und kann im Nachhinein über das OVHcloud Kundencenter geändert werden.

Klicken Sie auf `Weiter`{.action}, um die Domain hinzuzufügen.

**Wenn Sie einen von OVHcloud verwalteten Domainnamen ausgewählt haben**, kann dessen Konfiguration automatisch vorgenommen werden. Setzen Sie hierzu einen Haken im entsprechenden Kästchen und klicken Sie dann auf `Weiter`{.action}, um mit dem Hinzufügen der Domain fortzufahren.

![emailpro](images/emailpro-03.png){.thumbnail}

- **SRV** : DNS-Eintrag für die automatische Konfiguration Ihrer E-Mail-Software, wenn Sie Ihre E-Mail-Adresse darin eintragen.
- **MX** : Für den Empfang von E-Mails mit dem jeweiligen Domainnamen notwendiger DNS-Eintrag der E-Mail-Server.
- **DKIM** : Einrichtung einer verschlüsselten digitalen Signatur zur Sicherung des E-Mail-Verkehrs. Weitere Informationen finden Sie in unserer Anleitung „[Einen DKIM-Eintrag konfigurieren](/pages/web_cloud/domains/dns_zone_dkim)“.

**Für einen nicht von OVHcloud verwalteten Domainnamen** fahren Sie bitte mit Schritt 3 fort.

Am Ende der Konfiguration überprüfen Sie bitte die angezeigten Informationen. Klicken Sie danach auf `Bestätigen`{.action}, um die Domain hinzufügen.

### Schritt 3: Ihre Domain konfigurieren

Sobald die Domain als assoziierte Domain hinzugefügt ist, überprüfen Sie bitte in der angezeigten Tabelle, dass die Konfiguration korrekt ist.

In der Spalte `Diagnose`{.action} können Sie sehen, ob die Konfiguration der MX-Felder der Domain korrekt ist. Ein rotes Kästchen zeigt an, dass die Konfiguration geändert werden muss.

- **Die automatische Konfiguration beim Hinzufügen eines Domainnamens von OVHcloud** : Wenn Sie gerade eben die Änderung vorgenommen haben, kann es einige Stunden dauern, bis diese im [ OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de){.external} angezeigt wird.

- **Manuelle Konfiguration einer nicht von OVHcloud verwalteten Domain** : Klicken Sie auf das rote Kästchen, um zu sehen, welche Änderungen notwendig sind.
    - *Für einen CNAME*-Eintrag lesen Sie unsere Anleitung „[CNAME-Eintrag erstellen, um eine assoziierte Domain hinzuzufügen](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/exchange_dns_cname)“.
    - *Für einen MX-Eintrag* lesen Sie unsere Anleitung „[MX-Eintrag zur Domainkonfiguration hinzufügen](/pages/web_cloud/domains/dns_zone_mx)“.
    - *Wenn Sie einen SRV*-Eintrag erstellen möchten, vervollständigen Sie Ihre DNS-Zone mit den Informationen, die Sie beim Klicken auf das rote Kästchen erhalten haben. Um diesen Eintrag hinzuzufügen, lesen Sie die Anleitung „[OVHcloud DNS-Zone bearbeiten](/pages/web_cloud/domains/dns_zone_edit)“.
    - *Vervollständigen Sie für einen SPF*-Eintrag Ihre DNS-Zone mit den Informationen, die Sie beim Klicken auf das Kästchen angegeben haben. Sie können sich in der Anleitung „[Einen SPF-Eintrag konfigurieren](/pages/web_cloud/domains/dns_zone_spf)“ helfen, diesen Eintrag hinzuzufügen.
    *Für einen DKIM* Eintrag vervollständigen Sie Ihre DNS Zone mit den Informationen, die Sie beim Klicken auf das Kästchen erhalten. Sie können die Anleitung „[Einen DKIM-Eintrag konfigurieren](/pages/web_cloud/domains/dns_zone_dkim)“ verwenden, um diesen Eintrag hinzuzufügen.

![emailpro](images/emailpro-04.png){.thumbnail}

### Schritt 4: E-Mail Pro Accounts konfigurieren

Zur Konfiguration Ihrer E-Mail-Adressen gehen Sie in den Tab `E-Mail-Accounts`{.action}. Die Tabelle zeigt die bestellten Accounts als “*@configureme.me*” an.

Um sie zu konfigurieren klicken Sie auf `...`{.action} und dann auf `Ändern`{.action}.

![emailpro](images/emailpro-05.png){.thumbnail}

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

![E-Mail Pro](images/emailpro-06.png){.thumbnail}

### Schritt 5: Ihre E-Mail-Adressen verwenden

Nach Abschluss der Konfiguration können Sie Ihre E-Mail-Adressen verwenden. Dazu stellt Ihnen OVHcloud eine Online-Anwendung (eine *Webapp*) zur Verfügung. Diese App ist über die Adresse <https://www.ovh.de/mail> erreichbar, auf der Sie die Login-Daten für Ihre E-Mail-Adresse eingeben.

Wenn Sie Ihre E-Mail-Adresse auf einem E-Mail-Client oder einem Gerät (beispielsweise einem Smartphone oder einem Tablet) einrichten möchten, werfen Sie bitte einen Blick in die passende [E-Mail Pro Anleitung](/products/web-cloud-email-collaborative-solutions-email-pro). Wenn Sie nur die erforderlichen Informationen zur Konfiguration Ihres E-Mail Pro Accounts benötigen, verwenden Sie die folgenden Einstellungen:

|Servertyp|Servername|Sicherheitstyp|Port|
|---|---|---|---|
|Eingangsserver|pro**?**.mail.ovh.net|SSL/TLS|993|
|Ausgangsserver|pro**?**.mail.ovh.net|STARTTLS|587|

> [!primary]
>
> In den Anleitungen verwenden wir als Serverbezeichnung: pro**?**.mail.ovh.net. Das „?“ muss mit der jeweils passenden Nummer Ihres zuständigen Servers für den einzurichtenden Email Pro Dienst ersetzt werden.
> 
> Sie finden diese Information im [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de), wenn Sie den betreffenden `E-Mail Pro`{.action} Dienst auswählen. Der Servername wird im Kasten **Verbindung** auf der Seite `Allgemeine Informationen`{.action} angezeigt.
>

## Weiterführende Informationen

[Verwendung der Outlook Web App](/pages/web_cloud/email_and_collaborative_solutions/using_the_outlook_web_app_webmail/email_owa)

[Posteingangsregeln in OWA erstellen](/pages/web_cloud/email_and_collaborative_solutions/common_email_features/feature_redirections)

[Einen Alias zu einem E-Mail-Account hinzufügen](/pages/web_cloud/email_and_collaborative_solutions/common_email_features/feature_redirections)

[Einrichten einer automatischen Antwort in OWA](/pages/web_cloud/email_and_collaborative_solutions/using_the_outlook_web_app_webmail/owa_automatic_replies)

[Die Abrechnung Ihrer E-Mail Pro Accounts verwalten](/pages/web_cloud/email_and_collaborative_solutions/email_pro/manage_billing_emailpro)

[Sicherheitseinstellungen eines E-Mail-Dienstes verwalten](/pages/web_cloud/email_and_collaborative_solutions/common_email_features/security-policy)

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
