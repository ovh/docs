---
title: "MX Plan - Zimbra Webmail verwenden"
excerpt: "Entdecken Sie das Zimbra Webmail-Interface für Ihre MX Plan E-Mail-Adressen von OVHcloud"
updated: 2024-02-28
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
> Zimbra Webmail für MX Plan ist ein Produkt, das gerade in Betrieb genommen wird.
>
> Derzeit ist es nur für Migrationen im Zusammenhang mit der Weiterentwicklung unseres MX Plan Angebots verfügbar. Diese Migration erfolgt automatisch. Unsere Teams senden Ihnen eine E-Mail zu, wenn Sie von der Migration betroffen sind.

## Ziel

Mit dem MX Plan Angebot von OVHcloud können Sie E-Mails über einen E-Mail-Client (Thunderbird, Outlook, Mac Mail) oder per Webmail direkt über den Webbrowser Ihres Geräts versenden und empfangen.<br>
OVHcloud bietet einen Webmail-Dienst namens Zimbra an, um auf einen MX Plan E-Mail-Account zuzugreifen. Auf dieser Seite werden die für die Verwendung dieses Webmailers erforderlichen Funktionen erläutert.

**So verwenden Sie Zimbra Webmail für Ihre MX Plan E-Mail-Adressen von OVHcloud**

## Voraussetzungen

- Sie verfügen über eine E-Mail-Lösung von OVHcloud **MX Plan**, die als Teil unserer [Webhosting-Angebote](https://www.ovhcloud.com/de/web-hosting/) in einem [kostenlosen 100M Hosting](https://www.ovhcloud.com/de/domains/free-web-hosting/) enthalten ist oder separat als eigenständige Lösung bestellt wird.
- Sie verfügen über die Login-Daten der MX Plan E-Mail-Adresse, die Sie einsehen möchten. Weitere Informationen finden Sie in unserer Anleitung „[Erste Schritte mit MX Plan](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_generalities)“.

## In der praktischen Anwendung

**Zusammenfassung**

- [Auf Zimbra Webmail einloggen](#login)
- [Allgemeines Webmail-Interface von Zimbra](#general-interface)
- [Verwaltung der Ordner Ihres E-Mail-Accounts](#folders-management)
    - [Die Sonderordner](#folders-specials)
    - [Ordner erstellen](#folders-creation)
 - [E-Mail-Verarbeitung](#email-management)
    - [Aktion für eine ausgewählte E-Mail](#email-action)
    - [E-Mail suchen](#email-search)
- [E-Mail schreiben](#email-writing)
- [Einstellungen für das Zimbra-Interface konfigurieren](#settings)
- [Kontakte](#contacts)
    - [Ordnerverwaltung](#contacts-folders)
    - [Verwaltung der Listen](#contacts-lists)
    - [Kontakte importieren / exportieren](#import-export)
- [Filter](#filters)
    - [Grundlegendes zum Einrichten von Filtern](#filters-howto)
    - [Filter erstellen](#filters-creation)
- [Delegationen](#delegations)
- [Signaturen](#signatures)
- [Automatische Antworten / Auto-Antworten](#auto-reply)

### Auf Zimbra Webmail einloggen <a name="login"></a>

Gehen Sie auf die Seite <https://www.ovh.com/fr/mail/>. Geben Sie Ihre E-Mail-Adresse und das Passwort ein und klicken Sie dann auf `Abschicken` {.action}.

![Zimbra - Anmeldung](images/ovhcloud-login-webmail.png){.thumbnail}

Sie werden nun zum Zimbra-Interface weitergeleitet.

![Zimbra - Interface](images/zimbra-01.png){.thumbnail}

### Allgemeines Webmail-Interface von Zimbra <a name="general-interface"></a>

Wenn Sie in Ihrem E-Mail-Account eingeloggt sind, haben Sie Zugriff auf das Hauptfenster von Zimbra, das aus 3 Zonen besteht:

> [!tabs]
> **Menü oben**
>>
>> - **(1)** In diesem Bereich des Interface können Sie eine der Funktionen auswählen, die in Ihrem E-Mail, `mail` oder `kontakte` verfügbar sind. Standardmäßig befindet sich die Registerkarte `mail`.
>> - **(2)** Mit einer Suchleiste können Sie nach Nachrichten oder Kontakten suchen.
>> - **(3)** Das Menü zur Verwaltung des Profils Ihres E-Mail-Accounts und die Schaltfläche für den Zugriff auf die Einstellungen **(4)**.
>>
>> ![Zimbra - Menü oben](images/zimbra-02.png){.thumbnail}
>>
> **Linke Spalte**
>>
>> Standardmäßig ist dies die Ordnerstruktur Ihres E-Mail-Kontos, die aus Ordnern und Unterordnern besteht. Der Hauptordner ist `Posteingang`.
>>
>> ![Zimbra - Struktur](images/zimbra-03.png){.thumbnail}
>>
> **Mittleres Fenster**
>>
>> Standardmäßig werden Ihre E-Mails in diesem zweiteiligen Bereich angezeigt:
>>
>> - **(1)** Die Liste der Elemente
>> - **(2)** Der Inhalt des ausgewählten Elements
>>
>> ![Zimbra - E-Mails](images/zimbra-04.png){.thumbnail}
>>

### Verwaltung der Ordner Ihres E-Mail-Accounts (linke Spalte) <a name="folders-management"></a>

In diesem Bereich werden die Ordner in Ihrem E-Mail-Account angezeigt. Dort finden Sie die **speziellen** Ordner, die bereits vorhanden sind (orange) und die Ordner, die Sie selbst **erstellt** haben (grün).

![Zimbra - Dossiers](images/zimbra-05.png){.thumbnail}

#### Die Sonderordner <a name="folders-specials"></a>

Sonderordner werden automatisch vom E-Mail-Server erstellt und bilden den Kern eines E-Mail-Accounts.

- **Empfang**: E-Mails werden standardmäßig in diesem Ordner zugestellt (mit Ausnahme der angewendeten Filter).
- **Entwürfe**: Verfasste, aber nicht versandte E-Mails werden in diesem Ordner gespeichert.
- **Gesendet**: Gesendete E-Mails werden automatisch in diesem Ordner gespeichert.
- **Archive**: Standardordner zum Sortieren von verarbeiteten E-Mails.
- **SPAM**: Ordner, in dem als Junk-E-Mails eingestufte E-Mails gespeichert werden.
- **Papierkorb**: Gelöschte E-Mails werden in diesem Ordner gespeichert, bevor sie endgültig gelöscht werden.

> [!primary]
>
> Ordner mit Sonderfunktion können nicht gelöscht werden.

#### Ordner erstellen <a name="folders-creation"></a>

Um Ihre E-Mails nach Ihren Bedürfnissen zu sortieren, können Sie Ihre eigenen Ordner erstellen.

Um einen neuen Ordner zu erstellen, klicken Sie unten in der Spalte auf die Schaltfläche `+ Einer Ordner hinzufügen`{.action}.

Sie können auch einen Unterordner erstellen, indem Sie mit der rechten Maustaste auf den gewünschten Ordner klicken und dann auf `Unterordner erstellen`{.action} klicken.

> [!primary]
>
> Die Ordner „Entwürfe“, „SPAM“ und „Papierkorb“ dürfen keine Unterordner enthalten.

### E-Mail-Verarbeitung <a name="email-management"></a>

Wenn Sie einen Ordner oder Unterordner in der linken Spalte auswählen, wird die Liste der darin enthaltenen E-Mails in der mittleren Spalte angezeigt. Klicken Sie dann auf die E-Mail Ihrer Wahl, um deren Inhalt im rechten Fenster anzuzeigen.

> [!primary]
>
> **Darstellungstyp**
>
> Ihre E-Mails werden in einer Form angezeigt, die geändert werden kann. Klicken Sie hierzu rechts oben auf den Button `Anzeigen`{.action}.

#### Aktion für eine ausgewählte E-Mail <a name="email-action"></a>

Wenn Sie eine E-Mail auswählen, stehen Ihnen zahlreiche Aktionen zur Verfügung:

- 1.**Antworten**: Antworten Sie direkt an den Absender.
- 2.**Allen antworten**: Direkte Antwort an alle Empfänger in den Feldern „A“ und „Kopie“.
- 3.**Weiterleiten**: Die ausgewählte E-Mail an einen oder mehrere Empfänger weiterleiten.
- 4.**Archivieren**: Die E-Mail in den Ordner „Archiv“ Ihres E-Mail-Accounts verschieben.
- 5.**Verschieben**: Verschieben Sie die E-Mail in einen der Ordner des E-Mail-Accounts.
- 6.**Löschen**: Die ausgewählte E-Mail in den „Papierkorb“ verschieben.
- 7.**SPAM**: Die ausgewählte E-Mail direkt in den Junk-E-Mail-Ordner (SPAM) verschieben.
- 8.**Mehr**
    - **Als gelesen markieren** .
    - **Als ungelesen markieren**.
    - **Markierung** : Weisen Sie Ihrer E-Mail einen Stern zu, um sie zu markieren und leichter zu identifizieren.
    - **Markierung löschen** : Entfernt den dieser E-Mail zugewiesenen Stern.
    - **Blockieren** : Zeigt die E-Mail im Rohformat mit der Kopfzeile an.
    - **Original anzeigen**: Zeigt die gesamte Nachricht, den Nachrichtentext und die Kopfzeile an.
    - **Neuer Filter**: Erstellt einen Filter aus dem Absender und Betreff der ausgewählten Nachricht.
    - **Drucken** - Druckt die ausgewählte Unterhaltung oder E-Mail.
- 9.**Anzeigen**: Wählen Sie eines der 3 Layouts aus, um Ihre Ordner und E-Mails anzuzeigen.

![Zimbra - Aktien](images/zimbra-07.png){.thumbnail}

Sie können auf diese Optionen zugreifen, indem Sie mit der rechten Maustaste auf jede E-Mail in der mittleren Spalte klicken.

> [!primary]
>
> Wenn einer Ihrer Gesprächspartner eine Lesebestätigung anfordert, wenn Sie seine E-Mail lesen, erhalten Sie die folgende Standardnachricht: `John hat eine Lesebestätigung für diese E-Mail angefordert. Sendet eine Lesebestätigung`.
>

#### E-Mail suchen <a name="email-search"></a>

Wenn Sie eine E-Mail suchen möchten, verwenden Sie die Suchleiste oben in Ihrem Interface. Sie können dann eine **einfache Suche** oder eine **erweiterte Suche** durchführen, wie auf den folgenden Registerkarten beschrieben:

> [!tabs]
> **Einfache Suche**
>>
>> Geben Sie die Suchbegriffe ein, die Sie in der Suchleiste finden möchten, und drücken Sie die `Eingabetaste`, um die Suche zu bestätigen. Die Wörter werden in den Suchergebnissen hervorgehoben.
>>
>> > Wenn Sie wissen, wo Sie nach dem Element suchen möchten, können Sie Schlüsselwörter ( **from**, **to**, **cc**, **subject**, usw.) gefolgt von zwei Punkten (`:`) eingeben und das Element im Suchfeld suchen. Wenn Sie beispielsweise schnell nach einem Absender suchen möchten, können Sie vor der gesuchten E-Mail-Adresse „from:“ eingeben. Zum Beispiel „from: address@example.com“.
>>
>> ![Zimbra - Einfache Suche](images/zimbra-08.png){.thumbnail}
>>
> **Expertensuche**
>>
>> Für eine genauere Suche klicken Sie auf die spitze Klammer rechts in der Suchleiste. So können Sie Ihre Suche auf einen Ordner, eine Zeitspanne, den Betreff oder den Nachrichtentext usw. beschränken.
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
>>- **Von**: die Adresse, von der aus Sie Ihre E-Mail senden. Standardmäßig ist dies Ihre E-Mail-Adresse. Sie können Ihre Absenderadresse ändern, indem Sie auf das Chevron rechts neben Ihrer E-Mail-Adresse klicken. Dies ist jedoch nur möglich, wenn eine [Delegation](#delegations) eingerichtet wurde.<br>
>> - **An**: der/die Empfänger Ihrer E-Mail. Klicken Sie auf „An“{.action}, um auf Ihr [Kontaktbuch](#contacts) zuzugreifen und Ihre Empfänger auszuwählen.<br>
>> - **Cc**: Klicken Sie auf `CC/BCC`{.action} rechts neben dem Feld `An`{.action}, um dieses Feld anzuzeigen. Die CO2-Kopie ist ein Empfängerfeld, mit dem Sie eine E-Mail-Kopie an Personen senden können, die Sie in eine Schleife einbinden möchten, ohne dass diese als direkte Empfänger der E-Mail angesehen werden (im Gegensatz zu den Empfängern im Feld „**An**“).<br>
>> - **CCi**: Klicken Sie auf `CC/BCC`{.action} rechts neben dem Feld `An`{.action}, um dieses Feld anzuzeigen. Das Feld „Unsichtbare Kohle“ ist ein Empfängerfeld, mit dem eine E-Mail gesendet werden kann, ohne dass andere Empfänger die Person oder Personen mit dem „**Bcc**“ sehen.<br>
>> - **Betreff**: Der Titel der E-Mail, das erste Element, das beim Empfang angezeigt wird, bevor die E-Mail geöffnet wird.<br>
>> - `...`{.action}: Rechts neben dem Feld `Von`{.action} befinden sich 3 Optionen:<br>
>>    - Sie können Ihre E-Mail als prioritär einstufen, indem Sie `Hohe Priorität` auswählen.<br>
>>    - Klicken Sie auf `Lesebestätigung anfordern`, um eine Lesebestätigung vom Empfänger anzufordern.<br>
>>    - Mit der Funktion `Nur Text` werden die HTML-Layoutfunktionen Ihrer E-Mail deaktiviert. <br>
>>
>> ![Zimbra-Kopfzeile](images/zimbra-11.png){.thumbnail}
>>
> **E-Mail-Text**
>>
>> Um den Text Ihrer E-Mail zu schreiben, haben Sie eine HTML-Symbolleiste am unteren Rand Ihres Fensters. So können Sie Ihre E-Mails direkt über Ihren Browser mit einem Seitenlayout verfassen. Außerdem öffnet sich mit der Schaltfläche `< >`{.action} (ganz rechts in der Symbolleiste) ein Fenster, in das Sie eine vordefinierte E-Mail aus einem externen Tool einfügen können.
>>
>> ![Zimbra - Körper](images/zimbra-12.png){.thumbnail}
>>

Nachdem Sie Ihre E-Mail verfasst haben, können Sie, bevor Sie auf `Senden`{.action} klicken, einen Anhang daran anhängen, indem Sie auf das Büroklammersymbol neben der Schaltfläche `Senden`{.action} klicken.

![Zimbra - Anhang](images/zimbra-13.png){.thumbnail}

> [!success]
> **Mail zurückrufen**
> 
> Wenn Sie die Option `Mail zurückrufen` in den Zimbra-Einstellungen im Bereich „**Mail schreiben**“ aktiviert haben, können Sie auf `RÛCKGÄNGIG`{.action} klicken, um den Versand abzubrechen.
> Diese Taste bleibt ungefähr 5 Sekunden lang verfügbar.
>
> ![Zimbra - Versand stornieren](images/zimbra-cancel-email.png){.thumbnail .w-400}

### Einstellungen für das Zimbra-Interface konfigurieren <a name="settings"></a>

Ihr Zimbra Interface verfügt über 2 Konfigurationsmenüs:

![Zimbra - Einstellungen](images/zimbra-14.png){.thumbnail}

- **(1) Profil**: Klicken Sie oben rechts in Ihrem Interface auf den Namen Ihres E-Mail-Accounts. In diesem Menü können Sie „**Passwort ändern**“ Ihrer E-Mail-Adresse, „**Profilbild ändern**“ oder sich abmelden, indem Sie auf „**Abmelden**“ klicken.

- **(2) Einstellungen**: Klicken Sie auf das Zahnrad oben rechts in Ihrem Interface, um auf die Änderungen der „**Sprache**“ Ihres Interface zuzugreifen. In der offiziellen Zimbra-Dokumentation finden Sie die Rubrik „**Hilfe**“. Unter „**Einstellungen**“ finden Sie alle Konfigurationselemente, die in den folgenden Registerkarten beschrieben sind:

> [!tabs]
> **Allgemeines**
>>
>> In diesem Tab finden Sie den belegten Speicherplatz Ihres E-Mail-Accounts und die Möglichkeit, das Anzeigeformat für das Datum und die Uhrzeit Ihrer E-Mails einzustellen.
>>
> **Mail anzeigen**
>>
>> Hier finden Sie die Elemente zur Anzeige Ihrer Elemente in Ihrem E-Mail-Account.
>>
>> - **Beim Anzeigen von Maillisten** : Mit diesen Optionen können Sie die Liste Ihrer E-Mails in Unterhaltungsgruppen organisieren und weitere Details in der Vorschau anzeigen.
>> - **Vorschaufenster** : Wählen Sie eines der drei Layouts aus, um Ordner und E-Mails anzuzeigen. Diese Option übernimmt die Einstellungen, die Sie beim Anzeigen von E-Mails auf der Schaltfläche `Anzeigen`{.action} treffen.
>> - **Engere Abstände verwenden**
>> - **Als gelesen markieren** : Sie können die Statusänderung Ihrer E-Mail in „Gelesen“ verzögern, wenn Sie darauf klicken, oder Sie können sich dazu entscheiden, nichts zu tun und die E-Mail in „Ungelesen“ zu belassen, ohne dass Sie etwas unternehmen.
>> - **Auf neue E-Mails überprüfen** : Legen Sie fest, wie oft die über Ihr Zimbra-Interface empfangenen E-Mails synchronisiert werden sollen.
>> - **Lesebestätigungen** : Legen Sie das Verhalten von Zimbra beim Öffnen einer E-Mail mit Lesebestätigung fest.
>> - **Neue Mail-Benachrichtigungen** : Aktivieren Sie Benachrichtigungen, wenn eine Nachricht empfangen wird.
>> - **Bilder in Mails anzeigen** : Ob die Fotos beim Öffnen einer E-Mail angezeigt werden sollen.
>> - **Mails als Nur-Text anzeigen** : Mit dieser Option wird die E-Mail im Nur-Text-Format ohne Seitenlayout angezeigt.
>> - **Bilder standardmäßig in Mails von diesen vertrauenswürdigen Adressen oder Domains anzeigen** : Legen Sie die vertrauenswürdigen E-Mail-Adressen fest, für die Bilder beim Öffnen angezeigt werden können.
>>
> **Mail schreiben**
>>
>> - **Mail zurückrufen** : Zeigt 5 Sekunden lang ein Banner an, mit dem der Versand einer E-Mail abgebrochen werden kann.
>> - **Lesebestätigungen anfordern** : Diese Option sendet eine Lesebestätigungsanforderung an Ihre Empfänger, wenn Sie ihnen eine E-Mail senden.
>> - **Eine Kopie im Ordner "Gesendet" speichern** : Diese Option ist standardmäßig aktiviert, um gesendete E-Mails im Ordner „Gesendet“ Ihres E-Mail-Accounts zu speichern.
>> - **Stellvertreter**: Lesen Sie die Rubrik [Delegierungen](#delegations) in dieser Anleitung, um mehr über deren Verwendung zu erfahren.
>> - **Sendeeinstellungen übetragen** : Informationen zur Verwendung der Delegate finden Sie im Thema [Delegierungen](#delegations) in diesem Handbuch.
>> - **Verfasser** : Sie können Ihren Standardschriftstil festlegen, wenn Sie eine E-Mail schreiben.
>>
> **Signaturen**
>>
>> In diesem Bereich können Sie Ihre Signaturen erstellen.<br>
>>
>> - **Standard-Signatur**: Geben Sie die Signatur ein, die beim Verfassen einer neuen E-Mail angezeigt wird.
>> - **Signatur beantworten oder weiterleiten** - Ermöglicht das Hinzufügen einer anderen Signatur, wenn Sie eine E-Mail beantworten oder weiterleiten.
>>
> **Außer Haus**
>>
>> Dieser Tab bezeichnet die Funktion „Auto-Antwort“. Informationen zur Konfiguration Ihrer automatischen Antworten finden Sie im Abschnitt „[Automatische Antworten](#auto-reply)“ in dieser Anleitung.
>>
> **Filter**
>>
>> Informationen zum Konfigurieren der Filter finden Sie im Abschnitt „[Filter](#filters)“ in dieser Dokumentation.
>>

### Kontakte <a name="contacts"></a>

Klicken Sie in der oberen Leiste auf `Kontakte`, um das Kontaktbuch aufzurufen. Sie ist in **drei Teile** unterteilt:

- **(1) Ordner** (links): Im Adressbuch können Sie Ordner zum Sortieren und Gruppieren von Kontakten erstellen.
- **(2) Kontaktliste** (Mitte) - Zeigen Sie die Kontakte im Adressbuch oder im ausgewählten Ordner an.
- **(3) Kontakteigenschaften** oder **Neuer Kontakt** (rechts): Dieses Fenster wird angezeigt, wenn ein Kontakt ausgewählt oder erstellt wird. Hier können Sie die Informationen eines Kontakts lesen oder bearbeiten.

![Zimbra - Kontakte](images/zimbra-15.png){.thumbnail}

Um einen neuen Kontakt zu erstellen, klicken Sie oben in der linken Spalte auf die Schaltfläche `Neuer Kontakt`{.action}.

Füllen Sie die Felder mit den Informationen aus, die Sie über Ihren Kontakt haben. Sie können ein Bild hinzufügen, indem Sie auf das Profilsymbol oben rechts im Formular klicken.

Klicken Sie dann auf `Speichern`{.action}.

![Zimbra - Neuer Kontakt](images/zimbra-16.png){.thumbnail}

#### Verwaltung der Kontaktordner <a name="contacts-folders"></a>

Wie beim E-Mail-Verkehr werden auch beim E-Mail-Server automatisch spezielle Kontaktordner angelegt.

- **Kontakte**: Die Kontakte werden standardmäßig in diesem Ordner gespeichert.
- **Papierkorb**: Gelöschte Kontakte werden in diesem Ordner gespeichert, bevor sie endgültig gelöscht werden.
- **E-Mail**-Kontakte: Die Kontakte, mit denen Sie gewechselt haben, werden in diesem Ordner gespeichert.

Sie können Ordner und Unterordner erstellen. Sie können die Kontakte in Teilmengen unterteilen. So können Sie einen Kontakt leichter in einem selbst erstellten Ordner finden als im ganzen Adressbuch.

Um einen neuen Ordner zu erstellen, klicken Sie unten in der linken Spalte auf die Schaltfläche `+ Einen Ordner hinzufûgen`{.action}.

Sie können auch einen Unterordner erstellen, indem Sie mit der rechten Maustaste auf den gewünschten Ordner klicken und dann auf `Unterordner erstellen`{.action} klicken. Die Ordner „Mail-Kontakte“ und „Papierkorb“ erlauben nicht die Erstellung von Unterordnern.

Um einen Kontakt in einen der Ordner zu verschieben, wählen Sie ihn in der mittleren Spalte aus und klicken dann im Kontaktfenster rechts auf die Schaltfläche `Verschieben`{.action}. Wählen Sie nun den Ordner aus, den Sie dem Kontakt zuweisen möchten.

![Zimbra - Kontakteakten](images/zimbra-17.png){.thumbnail}

> [!primary]
>
> Wenn Sie einen Kontakt aus einem ausgewählten Ordner erstellen, wird der Kontakt automatisch diesem Ordner hinzugefügt.

#### Verwaltung der Listen <a name="contacts-lists"></a>

Sie können einen Kontakt einer oder mehreren Listen zuordnen. Mithilfe von Listen können Sie Kontakte gruppieren, um das gemeinsame Senden von E-Mails an diese Kontakte zu erleichtern. Wenn Sie beispielsweise eine E-Mail an eine große Anzahl regelmäßiger Empfänger senden möchten, müssen Sie nur den Namen Ihrer Liste als Empfänger hinzufügen, anstatt die Kontakte in einer Liste einzeln hinzuzufügen.

Um eine Liste zu erstellen, klicken Sie in den Kasten `Neue Liste` unten in der linken Spalte und geben einen Namen für die Liste ein.

Um einen Kontakt einer Ihrer Listen zuzuweisen, wählen Sie ihn in der mittleren Spalte aus und klicken dann im Fenster rechts auf `Zu Listen zuweisen`{.action}. Markieren Sie die Liste oder die Listen, die Sie dem Kontakt zuweisen möchten. Sie können auch einen Namen für eine neue Liste eingeben und auf `Hinzufügen`{.action} klicken.

![Zimbra - Listen](images/zimbra-list.png){.thumbnail}

#### Kontakte importieren / exportieren <a name="import-export"></a>

Wählen Sie eine der folgenden Registerkarten aus:

> [!tabs]
> **Kontakte importieren**
>>
>> Klicken Sie im Fenster `Kontakte` mit der rechten Maustaste auf den gewünschten Kontakteordner, mit Ausnahme der Ordner „E-Mail-Kontakte“ und „Papierkorb“, die das Importieren und Exportieren von Kontakten nicht zulassen.<br>
>>
>> Klicken Sie anschließend auf `Importieren`{.action}, um das Importfenster zu öffnen. Mit dem Button `Browse...` können Sie die Datei mit Ihren Kontakten im Format “.csv“ oder “.vcf“ abrufen. <br><br>
>> ![Zimbra - Importieren](images/zimbra-19.png){.thumbnail}
>>
> **Kontakte exportieren**
>>
>> Klicken Sie im Fenster `Kontakte` mit der rechten Maustaste auf den gewünschten Kontakteordner, mit Ausnahme der Ordner „E-Mail-Kontakte“ und „Papierkorb“, die das Importieren und Exportieren von Kontakten nicht zulassen.
>>
>> Klicken Sie dann auf `Exportieren`{.action}, um das Exportfenster zu öffnen. Wählen Sie den Dateityp aus, den Sie exportieren möchten, und klicken Sie dann auf `Jetzt exportieren`.action}.<br><br>
>> ![Zimbra - Exportieren](images/zimbra-20.png){.thumbnail}
>>

### Filter <a name="filters"></a>

#### Grundlegendes zum Einrichten von Filtern <a name="filters-howto"></a>

Das Einrichten von Filtern in Ihrem E-Mail-Account ist eine wichtige Einstellung, die es Ihnen erlaubt, ein automatisches Sortiersystem beim Empfang Ihrer E-Mails einzurichten.

Eine Filterregel in Zimbra besteht aus 4 Elementen:

1 – [Vergleichsfeld](#filters-comp-field): auf welchen Teil der E-Mail der Filter angewendet wird.<br>
2 – [Vergleichsoperator](#filters-comp-operator): Mit welcher Präzision soll der Filter angewendet werden.<br>
3 – [Wert](#filters-value): Welche Wörter/Elemente in der E-Mail werden vom Filter angesprochen.<br>
4 – [Filteraktionen](#filters-action): Was macht der Filter mit der E-Mail?<br>

![Zimbra - Filter](images/zimbra-filters.png){.thumbnail}

> Beispiel 1 Wenn das Feld **Betreff (1)** ** in der E-Mail (2)** das Wort `invoice`**(3)** enthält, dann **weiterleiten an (4)** die Adresse `billing@example.com`.

In den folgenden Unterkapiteln finden Sie Details zu den einzelnen Elementen einer Filterregel.

##### 1 - Vergleichsfeld <a name="filters-comp-field"></a>

Das Vergleichsfeld gibt den Abschnitt der E-Mail an, der für den Vergleichsoperator überprüft werden soll. Die Vergleichsfelder können die folgenden Felder enthalten:

- **Von**: Geben Sie einen Absender im Feld „Von“ der E-Mail an.
- **An**: Nach Empfängernamen im Feld „An“ suchen.
- **Cc**: Im Feld „Cc“ nach den Namen der Kopieempfänger suchen.
- **Betreff**: Geben Sie Elemente im Betreff der E-Mail an.
- **Header-Name**: Wenn diese Option ausgewählt ist, wird vor dem Vergleichsoperator ein zusätzliches Eingabefeld angezeigt. In dieses Feld können Sie einen beliebigen Eintrag im E-Mail-Header eingeben. Sie können die Standardfelder „Von“, „Bis“, „Betreff“ oder andere Felder angeben, die im E-Mail-Header vorhanden sein können. Beispielsweise können einige E-Mail-Server bestimmte Felder in der Kopfzeile hinzufügen, die Sie mithilfe dieses Vergleichsfelds in Ihre Filterregel integrieren können.
- **Inhalt**: Bezeichnet Wörter, die im Textkörper der E-Mail enthalten oder nicht enthalten sind.

##### 2 - Vergleichsoperator <a name="filters-comp-operator"></a>

Anhand des zuvor festgelegten Vergleichsfelds bestimmt der Vergleichsoperator die für den Wert anzuwendende Übereinstimmungsebene.

> [!primary]
>
> Welche Vergleichsoperatoren verfügbar sind, hängt vom ausgewählten Vergleichsfeld ab.

- **Entspricht genau / Entspricht nicht genau** überein: Was Sie eingeben, muss genau übereinstimmen.<br>
    *Wenn Sie beispielsweise angeben*, dass der Betreff der E-Mail exakt „house“ ist, wird nur „house“ und nicht „houses“ oder „a blue house“ zugeordnet.

- **Enthält / Enthält nicht**: Was Sie eingeben, muss in dem/den Feld(en) vorhanden sein.<br>
    *Wenn Sie beispielsweise angeben*, dass der Betreff der E-Mail „house“ enthalten soll, wird die Übereinstimmung mit „house“, „houses“ und auch „a blue house“ erfolgen.

- **Entspricht der Platzhalter-Bedingung / Entspricht nicht der Platzhalter-Bedingung** : Gibt an, dass das Thema mit der angegebenen Zeichenfolge übereinstimmen muss, die Platzhalterzeichen enthält.

- **Vorhanden / ist nicht vorhanden**: Gibt an, dass das angegebene Vergleichsfeld in der Nachricht vorhanden oder nicht vorhanden sein muss. Dieser Vergleichsoperator wird mit den Vergleichsfeldern „Benannter Header“ verwendet.

> **Platzhalter in Filtern verwenden**
>
> Platzhalter, Platzhalterzeichen oder auch Wildcard-Zeichen können im Eingabefeld für den Vergleich verwendet werden, wobei der Vergleichsoperator „**Entspricht der Platzhalter-Bedingung / Entspricht nicht der Platzhalter-Bedingung**“ verwendet wird. Beide Platzhalterzeichen sind `*` und `?`.
>
> - Das Sternchen `*` ist ein Platzhalter für null oder mehr Zeichen eines beliebigen Typs.<br><br> Für die Suchzeichenfolge „blue\*house“ würde sie beispielsweise die Entsprechungen „blue house“, „houses“ oder auch „blue wooden house“ zurückgeben. Allerdings würde er „lightning blue house“ nicht zurückschicken. <br><br> Ein weiteres Beispiel für eine Suchzeichenfolge „w\*house“, die Übereinstimmungen „white house“, „watch TV in your house“ zurückgeben würde. Er würde jedoch „watch TV in your house with a friend“.
>
> - Das Fragezeichen `?` ist ein Platzhalter für genau ein Zeichen.<br><br>Für die Suchzeichenfolge „blue?house“ würden beispielsweise die Übereinstimmungen „blue house“, „blue-house“ und „blue_house“ zurückgegeben.
>

##### 3 - Wert <a name="filters-value"></a>

Nachdem Sie das Feld und den Vergleichsoperator ausgewählt haben, müssen Sie in das Feld den Wert eingeben, mit dem sie übereinstimmen müssen.

##### 4 - Filteraktionen <a name="filters-action"></a>

Das Feld `An` legt fest, welche Aktion für die E-Mail ausgeführt werden soll, die die Filterbedingungen erfüllt. Filteraktionen können das Löschen, Sortieren und sogar Markieren eingehender E-Mails umfassen.

- **Im Posteingang aufbewahren** : Speichert E-Mails in Ihrem Posteingang. Wenn keine der Filterregeln mit einer E-Mail-Nachricht übereinstimmt, wird diese Aktion standardmäßig ausgeführt.
- **In Ordner verschieben** : Verschiebt die E-Mail in einen angegebenen Ordner.
- **Endgültig löschen** : Löscht die E-Mail-Nachricht, ohne sie zuzustellen. Die Nachricht befindet sich in keinem Ordner, einschließlich des Papierkorbs.
- **Weiterleiten an** : Leitet die E-Mail an die angegebene Adresse weiter.
- **Als gelesen markieren**
- **Markierung** : Markieren Sie Ihre E-Mail-Adresse mit einem Stern.

#### Filter erstellen <a name="filters-creation"></a>

Um auf die Erstellung von Filtern zuzugreifen, klicken Sie auf das Zahnrad oben rechts in Ihrem Zimbra Interface, dann auf `Einstellungen`{.action} und schließlich auf `Filter`{.action} in der linken Spalte.

![Zimbra - Filter erstellen](images/zimbra-21.png){.thumbnail}

Wenn Filter vorhanden sind, wird die Liste in der Reihenfolge angezeigt, in der sie angewendet wurden:

- **(1)** Sie können eine Vorschau der einzelnen Filter anzeigen, indem Sie rechts neben dem Filter auf den Button `...`{.action} und dann auf `Details`{.action} klicken. Mit dem Knopf `Anwenden`{.action} wird die Aktion für diesen Filter gestartet.

- **(2)** Diese Schaltfläche dient als Handle, mit dem Sie den Filter in der Liste verschieben können, um ihm eine Anwendungsreihenfolge zuzuweisen. Jeder Filter wird in der Reihenfolge angewendet, in der er in der Liste definiert ist.

Klicken Sie auf den Button `+ Filter hinzufügen`{.action}, um die Erstellung zu starten. Das Fenster für den einfachen Modus wird standardmäßig angezeigt. Sie können in den erweiterten Modus wechseln, indem Sie auf `Zu erweitert`{.action} wechseln klicken, um alle Vergleichsoperatoren anzuzeigen. Weitere Informationen finden Sie im Abschnitt „[Grundlegendes zum Einrichten von Filtern](filters-howto)“.

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

Um auf die Delegationseinstellungen zuzugreifen, klicken Sie auf das Zahnrad oben rechts in Ihrer Zimbra-Oberfläche, dann auf `Einstellungen`{.action} und schließlich auf `Mail schreiben`{.action} in der linken Spalte.

Sie können Ihren E-Mail-Account auf einen anderen E-Mail-Account übertragen. Es ist unbedingt erforderlich, dass diese dieselbe E-Mail-Plattform verwenden.

> [!primary]
>
> Ein E-Mail-Account mit derselben Domain, aber einem anderen E-Mail-Angebot kann nicht delegiert werden.

![E-Mail](images/zimbra-delegation.png){.thumbnail}

**(1) Delegierte**. Um Ihren E-Mail-Account an einen anderen Account zu delegieren, klicken Sie auf `Stellvertreter hinzufügen`{.action}.

- **Senden als**: Die delegierte Person kann eine E-Mail mit Ihrer E-Mail-Adresse senden, genau wie Sie sie gesendet haben. Der Empfänger wird die E-Mail-Adresse der Stellvertretung nicht angeben.
- **Senden im Auftrag von**: Die delegierte Person kann eine E-Mail mit ihrer E-Mail-Adresse und einem Vermerk „im Auftrag von“ Ihrer E-Mail-Adresse senden. Der Empfänger hat somit die beiden am Austausch beteiligten E-Mail-Adressen angegeben.

**(2) Sendeeinstellungen übetragen**. Wenn Sie Ihre E-Mail-Adresse an eine andere Adresse delegieren, können Sie:

- **GGesendete Mails im meinem Ordner "Gesendet" speichern** Ordner speichern : Wenn die an Ihren Account delegierte Person eine E-Mail von Ihrer E-Mail-Adresse aus versendet, wird diese E-Mail in Ihrem „Gesendet“ Ordner angezeigt.
- **Gesendete Mails im Ordner "Gesendet" des Stellvetreters speichern** speichern : Wenn die an Ihren Account delegierte Person eine E-Mail von Ihrer E-Mail-Adresse aus versendet, wird diese E-Mail im Ordner „Gesendet“ der Stellvertretung angezeigt.
- **Gesendete Mails in meinem Ordner "Gesendet" und im Ordner "Gesendet" des Stellvertreters speichern** speichern : Wenn die an Ihren Account delegierte Person eine E-Mail über Ihre E-Mail-Adresse sendet, wird diese E-Mail in Ihrem „Gesendet“-Ordner sowie in ihrem „Gesendet“-Ordner angezeigt.
- **Gesendete Nachrichten nicht speichern** E-Mails speichern: Wenn die an Ihren Account delegierte Person eine E-Mail von Ihrer E-Mail-Adresse aus versendet, wird keine Kopie erstellt.

### Signatur <a name="signatures"></a>

Klicken Sie auf das Zahnrad oben rechts in Ihrem Zimbra Interface, dann auf `Einstellungen`{.action} und schließlich auf `Signaturen`{.action} in der linken Spalte.

Die Konfigurationsdetails finden Sie im Abschnitt „[Einstellungen für das Zimbra-Interface konfigurieren](#settings)“ in dieser Anleitung (klicken Sie auf den Tab „**Signaturen**“).

### Automatische Antworten / Auto-Antworten <a name="auto-reply"></a>

Wenn Sie abwesend sind und Ihr E-Mail-Konto nicht anzeigen können, können Sie eine Abwesenheitsnachricht einrichten, die automatisch an den Absender gesendet wird. Im Zimbra Webmail heißt diese Funktion „Außer Haus“.

Um auf die Verwaltung Ihres Anrufbeantworters zuzugreifen, klicken Sie auf das Zahnrad oben rechts in Ihrem Interface, dann auf `Einstellungen`{.action} und schließlich auf `Außer Haus`{.action}.

`Automatische Antworten aktivieren während dieser Zeiten (bis einschließlich)` aktivieren deaktiviert. Aktivieren Sie dieses Kontrollkästchen, um automatische Antworten zu aktivieren. Sie können nun den Inhalt Ihrer Abwesenheitsnotiz in das Eingabefeld eingeben.

- Wenn Sie nicht wissen, wann Sie die automatische Antwort beenden möchten, aktivieren Sie das Kontrollkästchen `Kein Enddatum`.
- Mit der Schaltfläche `Beispieltext an mich senden`{.action} wird eine Vorschau dieser automatischen Antwort an Ihren Posteingang gesendet.
- `Externe Absender` : Sie können eine andere Nachricht festlegen, wenn der Absender außerhalb Ihres Domainnamens und/oder Adressbuchs liegt. Standardmäßig erhalten alle Absender dieselbe Nachricht.

## Weiterführende Informationen <a name="go-further"></a>

[Erste Schritte mit MX Plan](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_generalities)

[Passwort einer MX Plan E-Mail-Adresse ändern](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_change_password)

[Filter für Ihre E-Mail-Adressen erstellen](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/feature_filters)

[E-Mail-Weiterleitungen verwenden](/pages/web_cloud/email_and_collaborative_solutions/common_email_features/feature_redirections)

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en>.
