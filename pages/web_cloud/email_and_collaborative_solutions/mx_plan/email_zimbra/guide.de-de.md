---
title: "MX Plan - Zimbra Webmail verwenden"
excerpt: "Erfahren Sie hier, wie Sie das Zimbra Webmail-Interface mit OVHcloud MX Plan E-Mail-Accounts verwenden"
updated: 2024-03-11
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie im Zweifelsfall die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button "Beitragen" auf dieser Seite.
>

<style>
.w-400 {
  max-width:400px !important;
}
</style>

> [!primary]
>
> **Wichtig**
>
> Zimbra Webmail für MX Plan ist noch nicht allgemein verfügbar.
>
> Deshalb wird es vorläufig nur bei Migrationen im Zusammenhang mit der Weiterentwicklung unseres MX Plan Dienstes aktiviert. Diese Migration erfolgt automatisch. Unsere Teams senden Ihnen eine E-Mail zu, wenn Sie von der Migration betroffen sind.
>
> Weitere Informationen finden Sie in unseren [OVHcloud Zimbra FAQ](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/faq-zimbra).

## Ziel

Mit dem MX Plan Angebot von OVHcloud können Sie E-Mails über einen E-Mail-Client (Thunderbird, Outlook, Mac Mail) oder per Webmail im Webbrowser Ihres Geräts versenden und empfangen.<br>
OVHcloud bietet den Webmail-Dienst Zimbra an, um auf MX Plan E-Mail-Accounts zuzugreifen. Auf dieser Seite werden die für die Verwendung dieses Webmailers erforderlichen Funktionen erläutert.

**Diese Anleitung erklärt, wie Sie Zimbra Webmail für Ihre OVHcloud MX Plan E-Mail-Accounts verwenden.**

## Voraussetzungen

- Sie verfügen über ein **MX Plan** Angebot, entweder in einem [OVHcloud Webhosting](https://www.ovhcloud.com/de/web-hosting/) enthalten, separat bestellt, oder enthalten in [Kostenloses Hosting 100M](https://www.ovhcloud.com/de/domains/free-web-hosting/).
- Sie verfügen über die Logindaten des MX Plan E-Mail-Accounts, den Sie verwenden möchten. Weitere Informationen finden Sie in unserer Anleitung "[Erste Schritte mit MX Plan](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_generalities)".

## In der praktischen Anwendung

**Inhaltsübersicht**

- [In Zimbra Webmail einloggen](#login)
- [Allgemeines zum Webmail-Interface von Zimbra](#general-interface)
- [Verwaltung der Ordner Ihres E-Mail-Accounts](#folders-management)
    - [Spezialordner](#folders-specials)
    - [Ordner erstellen](#folders-creation)
 - [E-Mail-Verarbeitung](#email-management)
    - [Aktion für eine ausgewählte E-Mail](#email-action)
    - [E-Mail suchen](#email-search)
- [E-Mail schreiben](#email-writing)
- [Einstellungen für das Zimbra-Interface konfigurieren](#settings)
- [Kontakte](#contacts)
    - [Ordnerverwaltung](#contacts-folders)
    - [Verwaltung von Listen](#contacts-lists)
    - [Kontakte importieren und exportieren](#import-export)
- [Filter](#filters)
    - [Grundlegendes zum Einrichten von Filtern](#filters-howto)
    - [Filter erstellen](#filters-creation)
- [Delegationen](#delegations)
- [Signaturen](#signatures)
- [Automatische Antworten](#auto-reply)

### In Zimbra Webmail einloggen <a name="login"></a>

Gehen Sie auf die Seite <https://www.ovh.com/fr/mail/>. Geben Sie Ihre E-Mail-Adresse und das Passwort ein und klicken Sie dann auf `Anmelden`{.action}.

![Zimbra - Anmeldung](images/ovhcloud-login-webmail.png){.thumbnail}

Sie werden nun zum Zimbra-Interface weitergeleitet.

![Zimbra - Interface](images/zimbra-01.png){.thumbnail}

### Allgemeines zum Webmail-Interface von Zimbra <a name="general-interface"></a>

Wenn Sie in Ihrem E-Mail-Account eingeloggt sind, erscheint das Hauptfenster von Zimbra, das aus 3 Zonen besteht:

> [!tabs]
> **Menü oben**
>>
>> - **(1)** In diesem Bereich können Sie zwischen den beiden Funktionen `mail` und `kontakte` wechseln, die Standardansicht ist `mail`.
>> - **(2)** In der Suchleiste können Sie nach Nachrichten oder Kontakten suchen.
>> - **(3)** Das Menü zur Verwaltung des Profils Ihres E-Mail-Accounts und die Schaltfläche für den Zugriff auf die Einstellungen **(4)**.
>>
>> ![Zimbra - Menü oben](images/zimbra-02.png){.thumbnail}
>>
> **Linke Spalte**
>>
>> Die Struktur von E-Mail-Accounts oder Kontakten, bestehend aus Ordnern und Unterordnern. Der E-Mail-Hauptordner ist `Posteingang`.
>>
>> ![Zimbra - Struktur](images/zimbra-03.png){.thumbnail}
>>
> **Mittleres Fenster**
>>
>> Ihre E-Mails oder Kontakte werden in diesem zweiteiligen Bereich angezeigt:
>>
>> - **(1)** Die Liste der Elemente
>> - **(2)** Der Inhalt des ausgewählten Elements
>>
>> ![Zimbra - E-Mails](images/zimbra-04.png){.thumbnail}
>>

### Verwaltung der Ordner Ihres E-Mail-Accounts (linke Spalte) <a name="folders-management"></a>

In diesem Bereich werden die Ordner Ihres E-Mail-Account angezeigt. Sie finden die immer vorhandenen **Spezialordner** (orange) und die Ordner, die Sie selbst **erstellt** haben (grün).

![Zimbra - Dossiers](images/zimbra-05.png){.thumbnail}

#### Spezialordner <a name="folders-specials"></a>

Spezialordner werden automatisch vom E-Mail-Server erstellt und bilden den Kern eines E-Mail-Accounts.

- **Empfang**: E-Mails werden standardmäßig in diesem Ordner abgelegt (mit Ausnahme der angewendeten Filter).
- **Entwürfe**: Verfasste, aber nicht gesendete E-Mails werden in diesem Ordner gespeichert.
- **Gesendet**: Gesendete E-Mails werden automatisch in diesem Ordner gespeichert.
- **Archive**: Standardordner zum Sortieren von verarbeiteten E-Mails.
- **Spam**: Ordner, in dem als Unerwünscht eingestufte E-Mails gespeichert werden.
- **Papierkorb**: Gelöschte E-Mails werden in diesem Ordner gespeichert, bevor sie endgültig gelöscht werden.

> [!primary]
>
> Ordner mit Sonderfunktion können nicht gelöscht werden.

#### Ordner erstellen <a name="folders-creation"></a>

Um Ihre E-Mails nach Ihren Bedürfnissen zu sortieren, können Sie Ihre eigenen Ordner erstellen.

Um einen neuen Ordner zu erstellen, klicken Sie unten in der Spalte auf die Schaltfläche `+ Einen Ordner hinzufügen`{.action}.

Sie können auch einen Unterordner erstellen, indem Sie mit der rechten Maustaste auf den gewünschten Ordner klicken und dann auf `Unterordner erstellen`{.action} klicken.

> [!primary]
>
> Die Ordner "Entwürfe", "Spam" und "Papierkorb" dürfen keine Unterordner enthalten.

### E-Mail-Verarbeitung <a name="email-management"></a>

Wenn Sie einen Ordner oder Unterordner in der linken Spalte auswählen, wird die Liste der darin enthaltenen E-Mails in der mittleren Spalte angezeigt. Klicken Sie dann auf die E-Mail Ihrer Wahl, um deren Inhalt im rechten Fenster anzuzeigen.

> [!primary]
>
> **Darstellungstyp**
>
> Die Darstellung von E-Mails kann geändert werden. Klicken Sie hierzu rechts oben auf den Button `Anzeigen`{.action}.

#### Aktion für eine ausgewählte E-Mail <a name="email-action"></a>

Wenn Sie eine E-Mail auswählen, stehen Ihnen zahlreiche Aktionen zur Verfügung:

- 1.**Antworten**: Antwort an den Absender verfassen.
- 2.**Allen antworten**: Antwort an alle Empfänger in den Feldern "An" und "CC" verfassen.
- 3.**Weiterleiten**: Die ausgewählte E-Mail an einen oder mehrere Empfänger weiterleiten.
- 4.**Archivieren**: Die E-Mail in den Ordner "Archiv" Ihres E-Mail-Accounts verschieben.
- 5.**Verschieben**: Verschieben Sie die E-Mail in einen der Ordner des E-Mail-Accounts.
- 6.**Löschen**: Die ausgewählte E-Mail in den "Papierkorb" verschieben.
- 7.**SPAM**: Die ausgewählte E-Mail in den "Spam" verschieben.
- 8.**Mehr**
    - **Als gelesen markieren**
    - **Als ungelesen markieren**
    - **Markierung**: Weisen Sie Ihrer E-Mail einen "Stern" zu, um sie zu markieren und leichter zu identifizieren.
    - **Markierung löschen**: Entfernt den dieser E-Mail zugewiesenen "Stern".
    - **Original anzeigen**: Zeigt die E-Mail im Rohformat inklusive Header an.
    - **Neuer Filter**: Erstellt einen Filter basierend auf Absender und Betreff der ausgewählten Nachricht.
    - **Drucken**: Auswahl ausdrucken.
- 9.**Anzeigen**: Wählen Sie eines der 3 Layouts aus, um Ihre Ordner und E-Mails anzuzeigen.

![Zimbra](images/zimbra-07.png){.thumbnail}

Sie können auf diese Optionen zugreifen, indem Sie auf eine E-Mail in der mittleren Spalte rechtsklicken.

> [!primary]
>
> Wenn eine E-Mail mit Lesebestätigung empfangen wurde, erhalten Sie die folgende Standardnachricht: `John hat eine Lesebestätigung für diese E-Mail angefordert. Lesebestätigung senden`.
>

#### E-Mail suchen <a name="email-search"></a>

Wenn Sie eine E-Mail suchen möchten, verwenden Sie die Suchleiste oben in Ihrem Interface. Sie können dann eine **einfache Suche** oder eine **erweiterte Suche** durchführen, wie in den folgenden Tabs beschrieben:

> [!tabs]
> **Einfache Suche**
>>
>> Geben Sie die Suchbegriffe in die Leiste ein, die Sie finden möchten, und drücken Sie `Enter`, um die Suche zu bestätigen. Die Wörter werden in den Suchergebnissen hervorgehoben.
>>
>> > Wenn Sie wissen, wo das gesuchte Element enthalten ist, können Sie Schlüsselwörter ( **from**, **to**, **cc**, **subject**, etc.) gefolgt von einem Doppelpunkt (`:`) eingeben. Wenn Sie beispielsweise schnell nach einem Absender suchen möchten, können Sie "from" gefolgt von der gesuchten E-Mail-Adresse eingeben. Beispiel: "from:address@example.com.
>>
>> ![Zimbra - Einfache Suche](images/zimbra-08.png){.thumbnail}
>>
> **Expertensuche**
>>
>> Für eine genauere Suche klicken Sie auf das Pfeilsymbol rechts in der Suchleiste. So können Sie Ihre Suche auf einen Ordner, eine Zeitspanne, den Betreff, den Nachrichtentext, etc. beschränken.
>>
>> ![Zimbra - Erweiterte Suche](images/zimbra-09.png){.thumbnail}
>>

### Eine E-Mail schreiben <a name="email-writing"></a>

Um eine neue E-Mail zu verfassen, klicken Sie oben links im Zimbra-Fenster auf die Schaltfläche `Neue Mail`{.action} (1).

![Zimbra - E-Mail schreiben](images/zimbra-10.png){.thumbnail}

> [!tabs]
> **Header**
>>
>> In der Kopfzeile können Sie folgende Felder ausfüllen:
>>
>>- **Von**: Adresse, von der aus Sie Ihre E-Mail senden. Standardmäßig ist dies Ihre primäre Account-Adresse. Sie können Ihre Absenderadresse ändern, indem Sie auf das Pfeilsymbol rechts neben Ihrer E-Mail-Adresse klicken. Dies ist jedoch nur möglich, wenn eine [Delegation](#delegations) eingerichtet wurde.<br>
>> - **An**: Empfänger Ihrer E-Mail. Klicken Sie auf `An`{.action}, um auf Ihre [Kontakte](#contacts) zuzugreifen und Ihre Empfänger auszuwählen.<br>
>> - **CC**: Klicken Sie auf `CC/BCC`{.action} rechts neben dem Feld `An`{.action}, um dieses Feld anzuzeigen. Über das Feld **CC** können Sie eine E-Mail-Kopie an weitere Empfänger senden, ohne dass diese als direkte Empfänger der E-Mail betrachtet werden (im Gegensatz zu den Empfängern im Feld "**An**").<br>
>> - **CC**: Klicken Sie auf `CC/BCC`{.action} rechts neben dem Feld `An`{.action}, um dieses Feld anzuzeigen. Über das Feld **BCC** können Sie eine E-Mail-Kopie an weitere Empfänger senden, ohne dass andere Empfänger die Adressen in **BCC** sehen.<br>
>> - **Betreff**: Der Titel der E-Mail, der beim Empfang angezeigt wird, bevor die E-Mail geöffnet wird.<br>
>> - `...`{.action}: Rechts neben dem Feld `Von`{.action} befinden sich 3 Optionen:<br>
>>    - Sie können Ihre E-Mail als prioritär einstufen, indem Sie `Hohe Priorität` auswählen.<br>
>>    - Klicken Sie auf `Lesebestätigung anfordern`, um eine Lesebestätigung vom Empfänger anzufordern.<br>
>>    - Mit der Funktion `Nur Text` werden die HTML-Layoutfunktionen Ihrer E-Mail deaktiviert.<br>
>>
>> ![Zimbra-Kopfzeile](images/zimbra-11.png){.thumbnail}
>>
> **E-Mail-Text**
>>
>> Um den Text Ihrer E-Mail zu schreiben, können Sie die HTML-Symbolleiste am unteren Rand verwenden. So können Sie Ihre E-Mails direkt im Browser mit einem Seitenlayout verfassen. Außerdem öffnet sich mit der Schaltfläche `< >`{.action} (ganz rechts in der Symbolleiste) ein Fenster, in das Sie eine vordefinierte E-Mail aus einem externen Tool einfügen können.
>>
>> ![Zimbra - Körper](images/zimbra-12.png){.thumbnail}
>>

Nachdem Sie Ihre E-Mail verfasst haben, können Sie, bevor Sie auf `Senden`{.action} klicken, eine Datei anhängen, indem Sie auf das Klammersymbol neben der Schaltfläche `Senden`{.action} klicken.

![Zimbra - Anhang](images/zimbra-13.png){.thumbnail}

> [!success]
> **Mail zurückrufen**
> 
> Wenn Sie die Option `Mail zurückrufen` in den Zimbra-Einstellungen im Bereich "**Mail schreiben**" aktiviert haben, können Sie auf `RÛCKGÄNGIG`{.action} klicken, um den Versand abzubrechen.
> Diese Funktion bleibt ungefähr 5 Sekunden lang verfügbar.
>
> ![Zimbra - Versand stornieren](images/zimbra-cancel-email.png){.thumbnail .w-400}

### Einstellungen für das Zimbra-Interface konfigurieren <a name="settings"></a>

Ihr Zimbra Interface verfügt über 2 Konfigurationsmenüs:

![Zimbra - Einstellungen](images/zimbra-14.png){.thumbnail}

- **(1) Profil**: Klicken Sie oben rechts auf den Namen Ihres E-Mail-Accounts. In diesem Menü finden Sie die Optionen "**Passwort ändern**", "**Profilbild ändern**" und können sich ausloggen, indem Sie auf "**Abmelden**" klicken.

- **(2) Einstellungen**: Über das Zahnrad oben rechts können die **Sprache** der Webmail-Oberfläche ändern und mit Klick auf "**Hilfe**" auf die offizielle Zimbra-Dokumentation (extern) zugreifen. Unter "**Einstellungen**" finden Sie die folgenden Konfigurationselemente:

> [!tabs]
> **Allgemeines**
>>
>> In diesem Bereich finden Sie die Speicherplatzauslastung Ihres E-Mail-Accounts und die Möglichkeit, das Anzeigeformat für das Datum und die Uhrzeit Ihrer E-Mails einzustellen.
>>
> **Mail anzeigen**
>>
>> Hier finden Sie Anzeigeoptionen für folgende Elemente in Ihrem E-Mail-Account.
>>
>> - **Beim Anzeigen von Maillisten**: Mit diesen Optionen können Sie die Liste Ihrer E-Mails nach Konversationsgruppen organisieren und weitere Details in der Vorschau anzeigen.
>> - **Vorschaufenster**: Wählen Sie zwischen drei Layouts zur Anzeige von Ordner und E-Mails. Diese Option übernimmt die Einstellungen, die Sie beim Anzeigen von E-Mails auf der Schaltfläche `Anzeigen`{.action} treffen.
>> - **Engere Abstände verwenden**
>> - **Als gelesen markieren**: Sie können die Statusänderung beim Öffnen einer E-Mail zu "Gelesen" verzögern, oder geöffnete E-Mails als "Ungelesen" belassen.
>> - **Auf neue E-Mails überprüfen**: Legen Sie fest, wie oft empfangene E-Mails im Zimbra-Interface synchronisiert werden sollen.
>> - **Lesebestätigungen**: Legen Sie das Verhalten von Zimbra beim Öffnen einer E-Mail mit Lesebestätigung fest.
>> - **Neue Mail-Benachrichtigungen**: Aktivieren Sie Benachrichtigungen, wenn eine Mail empfangen wird.
>> - **Bilder in Mails anzeigen**: Beim Öffnen einer E-Mail Bilder automatisch anzeigen oder nicht.
>> - **Mails als Nur-Text anzeigen**: Mit dieser Option wird die E-Mail im Nur-Text-Format ohne Seitenlayout angezeigt.
>> - **Bilder standardmäßig in Mails von diesen vertrauenswürdigen Adressen oder Domains anzeigen**: Legen Sie vertrauenswürdigen E-Mail-Adressen fest, für die Bilder beim Öffnen angezeigt werden.
>>
> **Mail schreiben**
>>
>> - **Mail zurückrufen**: Zeigt ca. 5 Sekunden lang ein Banner an, mit dem der Versand einer E-Mail abgebrochen werden kann.
>> - **Lesebestätigungen anfordern**: Diese Option sendet eine Lesebestätigungsanforderung an Ihre Empfänger, wenn Sie E-Mails senden.
>> - **Eine Kopie im Ordner "Gesendet" speichern**: Diese Option ist aktiviert, um gesendete E-Mails im Ordner "Gesendet" Ihres E-Mail-Accounts zu speichern.
>> - **Stellvertreter**: Erfahren Sie mehr zur Verwendung dieser Funktion im Abschnitt [Delegationen](#delegations) in dieser Anleitung.
>> - **Sendeeinstellungen übertragen**: Informationen zur Verwendung von Delegierung finden Sie unter [Delegationen](#delegations) in dieser Anleitung.
>> - **Verfasser**: Sie können Ihre Standardformatierung für neue Mails festlegen.
>>
> **Signaturen**
>>
>> In diesem Bereich können Sie Ihre Signaturen erstellen.<br>
>>
>> - **Standard-Signatur**: Geben Sie die Signatur ein, die beim Verfassen einer neuen E-Mail eingefügt wird.
>> - **Signatur beantworten oder weiterleiten**: Ermöglicht das Hinzufügen einer abweichenden Signatur, wenn Sie eine E-Mail beantworten oder weiterleiten.
>>
> **Außer Haus**
>>
>> Dieser Bereich verwaltet die Funktion "Auto-Antwort". Informationen zur Konfiguration Ihrer automatischen Antworten finden Sie im Abschnitt "[Automatische Antworten](#auto-reply)" in dieser Anleitung.
>>
> **Filter**
>>
>> Informationen zum Konfigurieren der Filter finden Sie im Abschnitt "[Filter](#filters)" in dieser Anleitung.
>>

### Kontakte <a name="contacts"></a>

Klicken Sie in der oberen Leiste auf `Kontakte`, um das Kontaktverzeichnis aufzurufen. Die Anzeige ist in **drei Teile** unterteilt:

- **(1) Ordner** (links): Im Kontaktverzeichnis können Sie Ordner zum Sortieren und Gruppieren von Kontakten erstellen.
- **(2) Kontaktliste** (Mitte): Zeigen Sie die Kontakte im Kontaktverzeichnis oder im ausgewählten Ordner an.
- **(3) Kontakteigenschaften** oder **Neuer Kontakt** (rechts): Dieses Fenster wird angezeigt, wenn ein Kontakt ausgewählt oder erstellt wird. Hier können Sie die Informationen eines Kontakts lesen oder bearbeiten.

![Zimbra - Kontakte](images/zimbra-15.png){.thumbnail}

Um einen neuen Kontakt zu erstellen, klicken Sie oben in der linken Spalte auf die Schaltfläche `Neuer Kontakt`{.action}.

Tragen Sie die Kontakt-Daten in die Felder ein. Sie können ein Bild hinzufügen, indem Sie auf das Profilsymbol oben rechts im Formular klicken.

Klicken Sie dann auf `Speichern`{.action}.

![Zimbra - Neuer Kontakt](images/zimbra-16.png){.thumbnail}

#### Verwaltung der Kontaktordner <a name="contacts-folders"></a>

Wie bei E-Mails werden vom E-Mail-Server automatisch spezielle Kontaktordner angelegt.

- **Kontakte**: Die Kontakte werden standardmäßig in diesem Ordner gespeichert.
- **Papierkorb**: Gelöschte Kontakte werden in diesen Ordner verschoben, bevor sie endgültig gelöscht werden.
- **Mail-Kontakte**: Adressen, mit denen Sie Kontakt hatten, werden in diesem Ordner abgelegt.

Sie können Ordner und Unterordner erstellen und Kontakte damit unterteilen. So können Sie einen Kontakt leichter in einem selbst erstellten Ordner finden als im gesamten Kontaktverzeichnis.

Um einen neuen Ordner zu erstellen, klicken Sie unten in der linken Spalte auf die Schaltfläche `+ Einen Ordner hinzufûgen`{.action}.

Sie können auch einen Unterordner erstellen, indem Sie mit der rechten Maustaste auf den gewünschten Ordner klicken und dann `Unterordner erstellen`{.action} wählen. Die Ordner "Mail-Kontakte" und "Papierkorb" erlauben nicht die Erstellung von Unterordnern.

Um einen Kontakt in einen der Ordner zu verschieben, wählen Sie ihn in der mittleren Spalte aus und klicken dann im Kontaktfenster auf die Schaltfläche `Verschieben`{.action}. Wählen Sie nun den Ordner aus, den Sie dem Kontakt zuweisen möchten.

![Zimbra - Kontakteakten](images/zimbra-17.png){.thumbnail}

> [!primary]
>
> Wenn Sie einen Kontakt aus einem ausgewählten Ordner erstellen, wird der Kontakt automatisch diesem Ordner hinzugefügt.

#### Verwaltung von Listen <a name="contacts-lists"></a>

Sie können einen Kontakt einer oder mehreren Listen zuordnen. Mithilfe von Listen können Sie Kontakte gruppieren, um das Senden von E-Mails an alle diese Kontakte zugleich zu erleichtern. Wenn Sie beispielsweise eine E-Mail an eine große Anzahl regelmäßiger Empfänger senden möchten, müssen Sie nur den Namen Ihrer Liste als Empfänger hinzufügen, anstatt die Kontakte einzeln hinzuzufügen.

Um eine Liste zu erstellen, klicken Sie in das Feld `Neue Liste` unten in der linken Spalte und geben einen Namen für die Liste ein.

Um einen Kontakt einer Ihrer Listen zuzuweisen, wählen Sie ihn in der mittleren Spalte aus und klicken dann auf `Zu Listen zuweisen`{.action}. Markieren Sie die Listen, die Sie dem Kontakt zuweisen möchten. Sie können auch einen Namen für eine neue Liste eingeben und auf `Hinzufügen`{.action} klicken.

![Zimbra - Listen](images/zimbra-list.png){.thumbnail}

#### Kontakte importieren und exportieren <a name="import-export"></a>

Wählen Sie unter den folgenden Tabs aus:

> [!tabs]
> **Kontakte importieren**
>>
>> Klicken Sie im Fenster `Kontakte` mit der rechten Maustaste auf den gewünschten Kontakteordner, mit Ausnahme der Ordner "E-Mail-Kontakte" und "Papierkorb", die das Importieren und Exportieren von Kontakten nicht zulassen.<br>
>>
>> Klicken Sie anschließend auf `Importieren`{.action}, um das Importfenster zu öffnen. Mit dem Button `Browse...` können Sie eine Datei mit Ihren Kontakten im Format *.csv* oder *.vcf* öffnen. <br><br>
>> ![Zimbra - Importieren](images/zimbra-19.png){.thumbnail}
>>
> **Kontakte exportieren**
>>
>> Klicken Sie im Fenster `Kontakte` mit der rechten Maustaste auf den gewünschten Kontakteordner, mit Ausnahme der Ordner "E-Mail-Kontakte" und "Papierkorb", die das Importieren und Exportieren von Kontakten nicht zulassen.
>>
>> Klicken Sie dann auf `Exportieren`{.action}, um das Exportfenster zu öffnen. Wählen Sie den Dateityp aus, den Sie exportieren möchten, und klicken Sie dann auf `Exportieren`{.action}.<br><br>
>> ![Zimbra - Exportieren](images/zimbra-20.png){.thumbnail}
>>

### Filter <a name="filters"></a>

#### Grundlegendes zum Einrichten von Filtern <a name="filters-howto"></a>

Das Einrichten von Filtern in Ihrem E-Mail-Account ist eine wichtige Einstellung, die es Ihnen erlaubt, eine automatische Sortierung beim Empfang Ihrer E-Mails einzurichten.

Eine Filterregel in Zimbra besteht aus 4 Elementen:

1 – [Vergleichsfeld](#filters-comp-field): Auf welchen Teil der E-Mail der Filter angewendet wird.<br>
2 – [Vergleichsoperator](#filters-comp-operator): Mit welcher Präzision soll der Filter angewendet werden.<br>
3 – [Wert](#filters-value): Welche Wörter/Elemente in der E-Mail werden vom Filter angesprochen.<br>
4 – [Filteraktionen](#filters-action): Wie der Filter mit der E-Mail umgehen soll.<br>

![Zimbra - Filter](images/zimbra-filters.png){.thumbnail}

> Beispiel: Wenn das Feld **Betreff (1)** in der E-Mail das Wort `invoice` **(3)** **enthält (2)**, dann **weiterleiten an (4)** die Adresse `billing@example.com`.

In den folgenden Abschnitten finden Sie Details zu den Elementen einer Filterregel.

##### 1 - Vergleichsfeld <a name="filters-comp-field"></a>

Das Vergleichsfeld gibt den Abschnitt der E-Mail an, der auf den Vergleichsoperator überprüft werden soll. Die Vergleichsfelder können die folgenden Felder enthalten:

- **Von**: Einen Absender im Feld "Von" der E-Mail.
- **An**: Nach Empfängernamen im Feld "An" suchen.
- **CC**: Im Feld "CC" nach Empfängernamen suchen.
- **Betreff**: Elemente im Betreff der E-Mail.
- **Header-Name**: Wenn diese Option ausgewählt ist, wird vor dem Vergleichsoperator ein zusätzliches Eingabefeld angezeigt. In dieses Feld können Sie einen beliebigen Eintrag im E-Mail-Header eingeben. Sie können die Standardfelder "Von", "An", "Betreff" oder andere Felder angeben, die im E-Mail-Header vorhanden sein können. Beispielsweise können E-Mail-Server Felder in der Kopfzeile hinzufügen, die Sie mithilfe dieses Vergleichsfelds in Ihre Filterregel integrieren können.
- **Inhalt**: Bezeichnet Wörter, die im Textkörper der E-Mail enthalten oder nicht enthalten sind.

##### 2 - Vergleichsoperator <a name="filters-comp-operator"></a>

Anhand des zuvor festgelegten Vergleichsfelds bestimmt der Vergleichsoperator die für den Wert anzuwendende Übereinstimmungsebene.

> [!primary]
>
> Welche Vergleichsoperatoren verfügbar sind, hängt vom ausgewählten Vergleichsfeld ab.

- **Entspricht genau / Entspricht nicht genau**: Was Sie eingeben, muss genau übereinstimmen.<br>
    *Wenn Sie beispielsweise angeben*, dass der Betreff der E-Mail "house" ist, wird nur "house" und nicht "houses" oder "a blue house" zugeordnet.

- **Enthält / Enthält nicht**: Was Sie eingeben, muss in den Feldern vorhanden sein.<br>
    *Wenn Sie beispielsweise angeben*, dass der Betreff der E-Mail "house" enthalten soll, wird die Übereinstimmung mit "house", "houses" und auch "a blue house" erfolgen.

- **Entspricht der Platzhalter-Bedingung / Entspricht nicht der Platzhalter-Bedingung**: Gibt an, dass das Thema mit der angegebenen Zeichenfolge übereinstimmen muss, die Platzhalterzeichen enthält.

- **Vorhanden / ist nicht vorhanden**: Gibt an, dass das angegebene Vergleichsfeld in der Nachricht vorhanden oder nicht vorhanden sein muss. Dieser Vergleichsoperator wird mit den Vergleichsfeldern "Header-Name" verwendet.

> **Platzhalter in Filtern verwenden**
>
> Platzhalterzeichen (*Wildcards*) können im Eingabefeld eingegebn werden, wobei der Vergleichsoperator "**Entspricht der Platzhalter-Bedingung / Entspricht nicht der Platzhalter-Bedingung**" verwendet wird. Die verfügbaren Wildcards sind `*` und `?`.
>
> - Ein `*` steht für eine beliebige Anzahl von Zeichen eines beliebigen Typs, einschließlich Leerzeichen.<br><br> Die Suchzeichenfolge "blue\*house" entspräche also unter anderem "blue house", "houses" oder "blue wooden house", aber nicht "lightning blue house". <br><br> Die Suchzeichenfolge "w\*house" ergäbe die Übereinstimmungen "white house", "watch TV in your house", etc., aber nicht "watch TV in your house with a friend".
>
> - Ein `?` steht für genau ein Zeichen.<br><br>Die Suchzeichenfolge "blue?house" ergäbe z.B. die Übereinstimmungen "blue house", "blue-house" und "blue_house".
>

##### 3 - Wert <a name="filters-value"></a>

Nachdem Sie das Feld und den Vergleichsoperator ausgewählt haben, geben Sie den Wert zur Übereinstimmung in das Feld ein.

##### 4 - Filteraktionen <a name="filters-action"></a>

Das Feld `Dann` legt fest, welche Aktion für die E-Mail ausgeführt werden soll, die die Filterbedingungen erfüllt. Filteraktionen können Löschen, Sortieren oder Markieren eingehender E-Mails sein.

- **Im Posteingang aufbewahren**: Speichert E-Mails in Ihrem Posteingang. Wenn keine der Filterregeln mit einer E-Mail-Nachricht übereinstimmt, wird diese Aktion standardmäßig ausgeführt.
- **In Ordner verschieben**: Verschiebt die E-Mail in den angegebenen Ordner.
- **Endgültig löschen**: Löscht die E-Mail, ohne sie in den Papierkorb zu verschieben.
- **Weiterleiten an**: Leitet die E-Mail an die angegebene Adresse weiter.
- **Als gelesen markieren**
- **Markierung**: Markiert die E-Mail mit einem Stern.

#### Filter erstellen <a name="filters-creation"></a>

Um auf die Erstellung von Filtern zuzugreifen, klicken Sie auf das Zahnrad oben rechts in Zimbra, dann auf `Einstellungen`{.action} und schließlich auf `Filter`{.action} in der linken Spalte.

![Zimbra - Filter erstellen](images/zimbra-21.png){.thumbnail}

Wenn Filter vorhanden sind, entspricht deren Anwendungsreihenfolge der Listenanordnung:

- **(1)** Sie können eine Vorschau der einzelnen Filter anzeigen, indem Sie rechts neben dem Filter auf den Button `...`{.action} und dann auf `Details`{.action} klicken. Mit dem Button `Anwenden`{.action} wird der Filter aktiv.

- **(2)** Mit dieser Funktion kann ein Filter in der Liste verschoben werden, um seine Anwendungsreihenfolge zu ändern. Filter werden in der Reihenfolge angewendet, die anhand der Liste definiert ist.

Klicken Sie auf den Button `+ Filter hinzufügen`{.action}, um die Erstellung zu starten. Das Fenster für den einfachen Modus wird standardmäßig angezeigt. Sie können auf `Wechseln zu "Erweitert"`{.action} klicken, um alle Vergleichsoperatoren anzuzeigen. Weitere Informationen finden Sie im Abschnitt "[Grundlegendes zum Einrichten von Filtern](#filters-howto)".

> [!tabs]
> **Einfacher Modus**
>>
>> ![Zimbra - Filter - Einfacher Modus](images/zimbra-22.png){.thumbnail}
>>
> **Fortgeschrittener Modus**
>>
>> ![Zimbra - Filter - Erweiterter Modus](images/zimbra-23.png){.thumbnail}
>>

### Delegationen <a name="delegations"></a>

Um auf die Delegationseinstellungen zuzugreifen, klicken Sie auf das Zahnrad oben rechts in Zimbra, dann auf `Einstellungen`{.action} und schließlich auf `Mail schreiben`{.action} in der linken Spalte.

Sie können den Zugang zu Ihrem E-Mail-Accounts einem anderen E-Mail-Account übertragen, aber nur wenn dieser zum selben E-Mail-Dienst gehört.

> [!primary]
>       
> Ein E-Mail-Account eines anderen E-Mail-Diensts, der den selben Domainnamen verwendet, kann nicht delegiert werden.

![E-Mail](images/zimbra-delegation.png){.thumbnail}

**(1) Delegation**. Um Ihren E-Mail-Account an einen anderen Account zu delegieren, klicken Sie auf `Stellvertreter hinzufügen`{.action}.

- **Senden als**: Der delegierte Account kann eine E-Mail mit Ihrer E-Mail-Adresse verschicken, als hätten Sie selbst gesendet. Der Empfänger kann die E-Mail-Adresse des Delegationsaccounts nicht sehen.
- **Senden im Auftrag von**: Der delegierte Account kann eine E-Mail mit ihrer E-Mail-Adresse und dem Vermerk "im Auftrag von" senden. Der Empfänger sieht beide am Mailverkehr beteiligten E-Mail-Adressen.

**(2) Sendeeinstellungen übertragen**: Sie haben die folgenden Optionen zur Delegation Ihres E-Mail-Accounts.

- **Gesendete Mails im meinem Ordner "Gesendet" speichern**: Wenn der delegierte Account eine E-Mail von Ihrer E-Mail-Adresse aus versendet, wird diese E-Mail in Ihrem "Gesendet"-Ordner abgelegt.
- **Gesendete Mails im Ordner "Gesendet" des Stellvetreters speichern**: Wenn der delegierte Account eine E-Mail von Ihrer E-Mail-Adresse aus versendet, wird diese E-Mail im Ordner "Gesendet" des Delegationsaccounts abgelegt.
- **Gesendete Mails in meinem Ordner "Gesendet" und im Ordner "Gesendet" des Stellvertreters speichern**: Wenn der delegierte Account eine E-Mail über Ihre E-Mail-Adresse sendet, wird diese E-Mail in Ihrem "Gesendet"-Ordner sowie im Ordner "Gesendet" des Delegationsaccounts abgelegt.
- **Gesendete Nachrichten nicht speichern**: Wenn der delegierte Account eine E-Mail von Ihrer E-Mail-Adresse aus versendet, wird keine Kopie erstellt.

### Signatur <a name="signatures"></a>

Klicken Sie auf das Zahnrad oben rechts in Ihrem Zimbra-Interface, dann auf `Einstellungen`{.action} und schließlich auf `Signaturen`{.action} in der linken Spalte.

Die Konfigurationsdetails finden Sie im Abschnitt "[Einstellungen für das Zimbra-Interface konfigurieren](#settings)" in dieser Anleitung (klicken Sie auf den Eintrag **Signaturen**).

### Automatische Antworten <a name="auto-reply"></a>

Wenn Sie abwesend ohne Zugriff auf Ihren E-Mail-Account sind, können Sie eine Abwesenheitsnachricht einrichten, die automatisch beim Eingang von Mails versendet wird. Im Zimbra Webmail heißt diese Funktion "Außer Haus".

Um auf die Konfiguration des Auto-Responders zuzugreifen, klicken Sie auf das Zahnrad oben rechts in Ihrem Interface, dann auf `Einstellungen`{.action} und schließlich auf `Außer Haus`{.action}.

`Automatische Antworten aktivieren während dieser Zeiten (bis einschließlich)`. Wenn diese Option angehakt ist, sind die automatischen Antworten aktiviert. Geben Sie den Inhalt Ihrer Abwesenheitsnotiz in das Feld ein.

- Wenn Sie nicht sicher sind, wann Sie die automatischen Antworten aufheben möchten, aktivieren Sie die Option `Kein Enddatum`.
- Der Button `Beispieltext an mich senden`{.action} sendet eine Vorschau dieser automatischen Antwort an Ihren Posteingang.
- `Externe Absender`: Sie können eine alternative Nachricht für Senderadressen außerhalb Ihres Domainnamens und/oder Kontaktverzeichnisses festlegen. Standardmäßig wird  auf alle Mails mit derselben Nachricht geantwortet.

## Weiterführende Informationen <a name="go-further"></a>

[Erste Schritte mit MX Plan](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_generalities)

[Passwort einer MX Plan E-Mail-Adresse ändern](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_change_password)

[Filter für Ihre E-Mail-Adressen erstellen](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/feature_filters)

[E-Mail-Weiterleitungen verwenden](/pages/web_cloud/email_and_collaborative_solutions/common_email_features/feature_redirections)

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en>.
