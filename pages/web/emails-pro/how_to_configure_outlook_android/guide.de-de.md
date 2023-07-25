---
title: "Konfiguration von E-Mail Pro auf Android mit der Microsoft Outlook App"
excerpt: "Diese Anleitung erklärt, wie Sie Ihren E-Mail Pro Account auf Android mit der Microsoft Outlook App einrichten."
updated: 2023-07-25
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie im Zweifelsfall die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button "Beitragen" auf dieser Seite.
>

## Ziel

E-Mail Pro Accounts können auf verschiedenen, kompatiblen E-Mail-Clients eingerichtet werden. So können Sie Ihre E-Mail-Adresse über das Gerät Ihrer Wahl verwenden.

**Diese Anleitung erklärt, wie Sie einen E-Mail Pro Account auf Android mit der Microsoft Outlook App einrichten.**

## Voraussetzungen

- Sie verfügen über ein Angebot [E-Mail Pro](https://www.ovhcloud.com/de/emails/email-pro/){.external}.
- Sie haben die Microsoft Outlook-App auf Ihrem Android-Gerät installiert. Sie können diese aus dem *Google Play Store* herunterladen.

> [!warning]
>
> OVHcloud stellt Ihnen Dienste zur Verfügung, für deren Konfiguration, Verwaltung und Verwaltung Sie die alleinige Verantwortung tragen. Es liegt somit in Ihrer Verantwortung, sicherzustellen, dass diese ordnungsgemäß funktionieren.
> 
> Wir stellen Ihnen diese Anleitung zur Verfügung, um Sie bei gängigen Aufgaben bestmöglich zu begleiten. Dennoch empfehlen wir Ihnen, falls Sie Hilfe brauchen, einen [spezialisierten Dienstleister](https://partner.ovhcloud.com/de/directory/) und/oder den Herausgeber des Dienstes zu kontaktieren. Für externe Dienstleistungen bieten wir leider keine Unterstützung. Weitere Informationen finden Sie im Abschnitt [„Weiterführende Informationen“](#go-further) dieser Anleitung.
> 

## In der praktischen Anwendung

### Schritt 1: E-Mail Pro Account-Informationen abrufen <a name="step1"></a>

Verbinden Sie sich mit Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de){.external} und gehen Sie dann in den Bereich `Web Cloud`{.action}. Klicken Sie in der linken Spalte auf `E-Mail für Profis`{.action} und wählen Sie dann die E-Mail Pro Plattform aus, auf der sich die zu konfigurierende E-Mail-Adresse befindet.

Klicken Sie auf der neuen Seite auf den Tab `E-Mail-Accounts`{.action}.

![Outlook-android-emailpro-login](images/ol-android-ep-login.png){.thumbnail}

Rufen Sie den Namen des E-Mail Pro Servers ab, der unter `Webmail`{.action} angezeigt wird. In unserem oben abgebildeten Beispiel ist dies `proX.mail.ovh.net`.

> [!warning]
>
> Suchen Sie den **richtigen Namen** des E-Mail Pro Servers, auf dem sich die E-Mail-Adresse befindet, die Sie konfigurieren möchten. Diese kann je nach Alter Ihres E-Mail Pro Angebots (pro1.mail.ovh.net, pro2.mail.ovh.net etc.) variieren.
> 

Ebenfalls im Tab `E-Mail-Accounts`{.action} auf Ihrer *Email Pro* Plattform wird eine Tabelle mit Ihrer/Ihren E-Mail Pro Adresse(n) angezeigt.

Wenn Sie sich nicht mehr an das Passwort der E-Mail-Adresse erinnern, die Sie einrichten möchten, können Sie es mit dem Button `...`{.action} in der gleichen Zeile rechts vom E-Mail-Account ändern.

Wählen Sie anschließend `Ändern`{.action} aus, geben Sie ein neues Passwort ein und bestätigen Sie dieses. Klicken Sie anschließend im zweiten Fenster auf `Weiter`{.action} und dann auf `Bestätigen`{.action}.

Die Änderung des Passworts wird innerhalb von ca. 15 Minuten aktiv.

> [!warning]
>
> Wenn Sie das Passwort Ihrer E-Mail-Adresse ändern und diese bereits von einem anderen Gerät (E-Mail-Programm, Computer, Tablet, Smartphone, Kopierer usw.) verwendet wird, müssen Sie das Passwort auf diesen anderen Geräten aktualisieren.
> Diese können sich dann nicht mehr mit Ihrer E-Mail-Adresse über das alte Passwort einloggen.
>

Am Ende dieses ersten Schritts müssen Sie nun über Folgendes verfügen:

- den Namen des E-Mail Pro Servers (pro1.mail.ovh.net, pro2.mail.ovh.net etc.);
- die zu konfigurierende E-Mail-Adresse;
- das Passwort der zu konfigurierenden E-Mail-Adresse.

### Schritt 2: Konfiguration Ihrer Adresse auf Android über die Microsoft Outlook App <a name="step2"></a>

Starten Sie auf Ihrem Android-Gerät die Microsoft Outlook-App. Wenn Sie es noch nicht installiert haben, laden Sie es aus dem *Google Play Store* herunter.

|||
|---|---|
|![Outlook-android-emailpro-login](images/Screenshot_Outlook_1.png){.thumbnail}|![Outlook-android-emailpro-login](images/Screenshot_Outlook_3.png){.thumbnail}|

Wenn Sie eingeloggt sind, klicken Sie auf `Account hinzufügen`{.action}, geben Sie Ihre vollständige E-Mail-Adresse in das Feld `Geben Sie Ihre E-Mail-Adresse ein`{.action} und dann auf `Weiter`{.action} ein.

Unten auf dem Bildschirm stehen Ihnen zwei Konfigurationsmöglichkeiten zur Verfügung: `IMAP`{.action} und `POP3`{.action}.

|||
|---|---|
| ![Outlook-android-emailpro-login](images/Screenshot_Outlook_4.png){.thumbnail} | ![Outlook-android-emailpro-login](images/Screenshot_Outlook_2.png){.thumbnail} |

> [!success]
>
> Mit dem Synchronisationsprotokoll **IMAP** können Sie ein „Image“ der E-Mails in Ihrer serverseitigen E-Mail Pro Adresse abrufen, um sie in Ihrer Microsoft Outlook-Anwendung anzuzeigen, **ohne** die E-Mail vom E-Mail Pro Server zu löschen, auf dem sich Ihre E-Mail-Adresse befindet. Dieses Protokoll ist besonders nützlich, wenn Sie mehrere Geräte mit Ihrer E-Mail-Adresse konfiguriert haben.
>
> Das **POP3** Protokoll ruft standardmäßig die E-Mail ab, die Sie von dem E-Mail Pro Server erhalten haben, auf dem sich Ihre E-Mail-Adresse befindet, um sie in der Anwendung / Software zu belassen, die mit dieser konfiguriert ist. Aus diesem Grund ist die E-Mail nicht mehr auf dem E-Mail Pro Server vorhanden, sondern nur noch auf dem Gerät, das mit Ihrer E-Mail-Adresse über das POP-Protokoll konfiguriert wurde.
> Dieses Protokoll wird nicht empfohlen, wenn Sie mehrere Geräte mit Ihrer E-Mail-Adresse konfiguriert haben. Die E-Mail wird nur auf einem der mit **POP3** konfigurierten Geräte und nicht auf allen mit Ihrer E-Mail-Adresse konfigurierten Geräten angezeigt.
>
> Trotz der Konfiguration mit **POP3** senden einige E-Mail-Programme dennoch eine Kopie der E-Mail an den Server, auf dem sich Ihre E-Mail-Adresse befindet. Diese Kopie kann vorübergehend oder dauerhaft bleiben.
> Wenden Sie sich direkt an den Softwareherausgeber, um zu erfahren, ob Ihre Anwendung bzw. Software Teil dieser Software ist.
>

#### Fall Nr. 1: Konfiguration der Microsoft Outlook App auf Android mit dem IMAP Protokoll

Wählen Sie `IMAP`{.action} unten auf dem Bildschirm aus.

Auf der neu geöffneten Seite ist Ihre E-Mail-Adresse voreingetragen.

Geben Sie das Passwort Ihrer E-Mail Pro Adresse in das Formular `Passwort`{.action} direkt unter der Stelle ein, an der Ihre E-Mail-Adresse bereits eingetragen ist.

In den beiden folgenden Formularen können Sie ganz **optional** einen `Anzeigenamen`{.action} und eine `Beschreibung`{.action} eingeben.

Um fortzufahren, wählen Sie den Knopf `ERWEITERTE EINSTELLUNGEN`{.action} um den Rest des Konfigurationsmenüs anzuzeigen.

Füllen Sie anschließend die verschiedenen Formulare mit den folgenden Informationen aus.

Für den Abschnitt **IMAP-Posteingangsserver**:

 - **IMAP Hostname**: Geben Sie den Namen Ihres E-Mail Pro Servers an, den Sie zuvor in [Schritt 1](#step1) erhalten haben: (Beispiele: *pro1.mail.ovh.net*, *pro2.mail.ovh.net* usw.);
 - **Port**: Geben Sie die Portnummer ein **993**;
 - **Sicherheitstyp**: Wählen Sie aus der Dropdown-Liste Sicherheit **SSL/TLS**;
 - **IMAP-Benutzername**: Geben Sie die E-Mail-Adresse an, die Sie konfigurieren möchten;
 - **IMAP Passwort**: Geben Sie das Zugangspasswort für die E-Mail-Adresse ein, die Sie einrichten möchten.

Für den Abschnitt **SMTP-Postausgangsserver**:

 - **SMTP-Hostname**: Geben Sie den Namen Ihres E-Mail Pro Servers an, den Sie zuvor in [Schritt 1](#step1) erhalten haben: (Beispiele: *pro1.mail.ovh.net*, *pro2.mail.ovh.net* usw.);
 - **Port**: Geben Sie die Portnummer ein **587**;
 - **Sicherheitstyp**: Wählen Sie aus der Dropdown-Liste Sicherheit **StartTls**;
 - **SMTP-Benutzername**: Geben Sie die E-Mail-Adresse an, die Sie konfigurieren möchten;
 - **SMTP-Passwort**: Geben Sie das Zugangspasswort für die E-Mail-Adresse ein, die Sie konfigurieren möchten.

Überprüfen Sie anschließend, ob alle eingegebenen Einstellungen mit den oben aufgeführten übereinstimmen, und klicken Sie auf das Symbol `V`{.action} oben rechts auf Ihrem Bildschirm.

#### Fall Nr. 2: Konfiguration der Microsoft Outlook App auf Android mit dem Protokoll „POP3“

Klicken Sie unten auf `POP3`{.action}. 

Auf der neu geöffneten Seite ist Ihre E-Mail-Adresse voreingetragen.

Geben Sie das Passwort Ihrer E-Mail Pro Adresse in das Formular `Passwort`{.action} direkt unter der Stelle ein, an der Ihre E-Mail-Adresse bereits eingetragen ist.

In den beiden folgenden Formularen können Sie ganz **optional** einen `Anzeigenamen`{.action} und eine `Beschreibung`{.action} eingeben.

Um fortzufahren, wählen Sie den Knopf `ERWEITERTE EINSTELLUNGEN`{.action} um den Rest des Konfigurationsmenüs anzuzeigen.

Füllen Sie anschließend die verschiedenen Formulare mit den folgenden Informationen aus.

Für den Abschnitt **POP-Posteingangsserver**:

 - **POP-Hostname**: Geben Sie den Namen Ihres E-Mail Pro Servers an, den Sie zuvor in [Schritt 1](#step1) erhalten haben: (Beispiele: *pro1.mail.ovh.net*, *pro2.mail.ovh.net* usw.);
 - **Port**: Geben Sie die Portnummer ein **995**;
 - **Sicherheitstyp**: Wählen Sie aus der Dropdown-Liste Sicherheit **SSL/TLS**;
 - **POP-Benutzername**: Geben Sie die E-Mail-Adresse an, die Sie konfigurieren möchten;
 - **POP-Passwort**: Geben Sie das Zugangspasswort für die E-Mail-Adresse ein, die Sie konfigurieren möchten.

Für den Abschnitt **SMTP-Postausgangsserver**:

 - **SMTP-Hostname**: Geben Sie den Namen Ihres E-Mail Pro Servers an, den Sie zuvor in [Schritt 1](#step1) erhalten haben: (Beispiele: *pro1.mail.ovh.net*, *pro2.mail.ovh.net* usw.);
 - **Port**: Geben Sie die Portnummer ein **587**;
 - **Sicherheitstyp**: Wählen Sie aus der Dropdown-Liste Sicherheit **StartTls**;
 - **SMTP-Benutzername**: Geben Sie die E-Mail-Adresse an, die Sie konfigurieren möchten;
 - **SMTP-Passwort**: Geben Sie das Zugangspasswort für die E-Mail-Adresse ein, die Sie konfigurieren möchten.

Überprüfen Sie anschließend, ob alle eingegebenen Einstellungen mit den oben aufgeführten übereinstimmen, und klicken Sie auf das Symbol `V`{.action} oben rechts auf Ihrem Bildschirm.

### Schritt 3: Konfiguration der Microsoft Outlook-App auf Android abschließen

Nachdem Sie auf das Symbol im Format `V`{.action} geklickt haben, testet die App die Einstellungen und meldet sich beim E-Mail Pro Server an, auf dem sich Ihre E-Mail-Adresse befindet.
Diese wird dann den Inhalt Ihrer E-Mail-Adresse synchronisieren / abrufen, um ihn auf Ihrem Gerät anzuzeigen.

Testen Sie dann das Senden und Empfangen von E-Mails über Ihre Microsoft Outlook-Anwendung, um die Konfiguration abzuschließen.

## Weiterführende Informationen <a name="go-further"></a>

Kontaktieren Sie für spezialisierte Dienstleistungen (SEO, Web-Entwicklung etc.) die [OVHcloud Partner](https://partner.ovhcloud.com/de/directory/).

Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, beachten Sie unsere [Support-Angebote](https://www.ovhcloud.com/de/support-levels/).

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.