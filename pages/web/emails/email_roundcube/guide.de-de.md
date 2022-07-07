---
title: Verwendung Ihres E-Mail-Accounts mit RoundCube Webmail
slug: webmail_verwendung_von_roundcube
section: 'E-Mail Clients'
order: 2
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie beim geringsten Zweifel die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button “Mitmachen“ auf dieser Seite.
>

**Letzte Aktualisierung am 31.05.2022**

## Ziel

Mit einem OVHcloud MX Plan können Sie E-Mails über eine Software oder ein Webmail-Interface versenden und empfangen. OVHcloud bietet einen E-Mail-Dienst namens RoundCube, der über  Webbrowser den Zugriff auf E-Mail-Accounts ermöglicht.

**Diese Anleitung erklärt, wie Sie RoundCube Webmail für Ihre OVHcloud E-Mail-Accounts verwenden.**

## Voraussetzungen

- Sie verfügen über einen OVHcloud **MX Plan**, als E-Mail-Dienst in unseren [Webhosting-Angeboten](https://www.ovhcloud.com/de/web-hosting/) sowie in einem [kostenlosen Start10M Hosting](https://www.ovhcloud.com/de/domains/free-web-hosting/) enthalten oder separat als eigenständige Lösung bestellbar.
- Sie verfügen über die Logindaten des MX Plan E-Mail-Accounts, den Sie verwenden möchten. Weitere Informationen finden Sie in unserer Anleitung "[Erste Schritte mit MX Plan](https://docs.ovh.com/de/emails/allgemeines-zu-shared-e-mails/)".

## In der praktischen Anwendung

### Einloggen in RoundCube Webmail

Gehen Sie auf die Seite <https://www.ovh.com/de/mail/>. Geben Sie eine E-Mail-Adresse und das Passwort ein und klicken Sie dann auf `Login`{.action}. 

![Hosting](images/webmail_login.png){.thumbnail}

Sie werden dann zum RoundCube Interface weitergeleitet.

![Hosting](images/roundcube01.png){.thumbnail}

> [!warning]
> 
> Wenn Sie auf ein **O**utlook **W**eb **A**pp Interface (OWA) weitergeleitet werden, verwenden Sie die neueste Version des MX Plan Dienstes. Weitere Informationen zu Ihrem MX Plan finden Sie auf unserer Seite "[Erste Schritte mit MX Plan](https://docs.ovh.com/de/emails/allgemeines-zu-shared-e-mails/)".
>
> Um sich mit dem **OWA** Interface vertraut zu machen, lesen Sie unsere [OWA Anleitung](https://docs.ovh.com/de/microsoft-collaborative-solutions/exchange_2016_verwendung_der_outlook_web_app/).

### RoundCube Interface Hauptseite <a name="general-interface"></a>

Sobald Sie in Ihren E-Mail-Account eingeloggt sind, haben Sie Zugriff auf das RoundCube Hauptfenster, das aus 3 Zonen besteht:

- [**Linke Spalte**](#leftcolumn): Die Ordnerstruktur Ihres E-Mail-Accounts, bestehend aus Ordnern und Unterordnern. Der Hauptordner ist der `Posteingang`.

- [**Oberes Fenster**](#topwindow): Die Liste der E-Mails, die im links ausgewählten Ordner enthalten sind.

- [**Unteres Fenster**](#lowerwindow): Der Inhalt der im oberen Fenster ausgewählten E-Mail.

#### Ordnerverwaltung (linke Spalte) <a name="leftcolumn"></a>

In diesem Bereich werden die Ordner Ihres E-Mail-Accounts angezeigt.

Um die Ordner genauer zu verwalten, klicken Sie auf das Zahnrad am Ende der Spalte und anschließend auf `Ordner verwalten`{.action}.

![Hosting](images/roundcube02.png){.thumbnail}

Um einen Ordner zu erstellen, klicken Sie auf `+`{.action} am Ende der Spalte `Ordner`.

Um einen Ordner zu löschen, wählen Sie ihn aus, klicken Sie auf das Zahnrad am Ende der Spalte `Ordner` und dann auf `Löschen`{.action}. Um nur den Inhalt zu löschen und den Ordner zu behalten, klicken Sie auf `Leeren`{.action}.

Die Checkboxen entsprechen den "Abonnements". Das Abonnement legt fest, ob der Ordner im Webmail-Interface oder im E-Mail-Programm angezeigt werden soll, unter Beibehaltung des Ordnerinhalts. Dabei geht es lediglich darum, einen Ordner im E-Mail-Account zu verbergen oder anzuzeigen.

> [!primary]
>
> Ordner mit ausgegrauten Haken sind spezielle Ordner. Es ist nicht möglich, sie zu löschen oder ihr Abonnement zu entfernen.

#### Liste der empfangenen / gesendeten E-Mails (oberes Fenster) <a name="topwindow"></a>

Dieses Fenster zeigt den Inhalt des in der linken Spalte ausgewählten Ordners an. 

##### **Anzeigetyp**

Dieses Fenster kann individuell angepasst werden. Klicken Sie hierzu auf das Zahnrad oben links im Fenster.

![Hosting](images/roundcube03.png){.thumbnail}

Folgende Einstellungen sind möglich:

- **Layout**: Ermöglicht die Neuanordnung der Verwaltungsfenster des E-Mail-Accounts.
- **Spalten**: ermöglicht das Hinzufügen von anzuzeigenden Spalten (Prioritäten der E-Mails etc.).
- **Sortieren nach**: Erlaubt die Wahl der Spalte, anhand derer die Standardsortierung durchgeführt wird.
- **Sortierung**: Wechselt zwischen Aufwärtssortierung oder Abwärtssortierung, abhängig von der ausgewählten Spalte.

##### **Aktion auf einer ausgewählten E-Mail**

Wenn Sie eine E-Mail ausgewählt haben, sind diverse Aktionen1 möglich:

- `Antworten`{.action}: Dem Absender direkt antworten.
- `Allen antworten`{.action}: Allen Empfängern in den Feldern "An" und "Kopie" antworten.
- `Weiterleiten`{.action}: Die ausgewählte E-Mail an einen oder mehrere Empfänger weiterleiten.
- `Löschen`{.action}: Die ausgewählte E-Mail in den "Papierkorb" verschieben.
- `Spam`{.action}: Die ausgewählte E-Mail in den Spam-Ordner (Junk) verschieben.
- `Markieren`{.action}: Den Status einer E-Mail manuell bestimmen.
- `Mehr`{.action} 
    - `Nachricht drucken`{.action}.
    - `Lokal speichern (.eml)`{.action}: Die komplette E-Mail inklusive Header als Datei sichern.
    - `Als neue Nachricht öffnen`{.action}: Eine neue E-Mail auf der Grundlage der ausgewählten E-Mail erstellen.
    - `Quelltext anzeigen`{.action}: Die E-Mail in ihrer Rohform inklusive Header anzeigen.
    - `Verschieben nach`{.action}: Die E-Mail in einen Ordner verschieben.
    - `Kopieren nach`{.action}: Die E-Mail in einen Ordner kopieren.
    - `In neuem Fenster öffnen`{.action}.

![Hosting](images/roundcube04.png){.thumbnail}

> [!primary]
>
> Wenn einer Ihrer Kontakte eine Lesebestätigung für eine E-Mail anfordert, erhalten Sie folgende Nachricht: `Der Absender dieser Nachricht bat um Benachrichtigung, wenn Sie diese Nachricht lesen. Möchten Sie den Absender benachrichtigen`?
> 

##### **Nach E-Mails suchen**

Im oberen rechten Bereich des Interface ist ein Suchwerkzeug verfügbar.

Klicken Sie auf den Pfeil rechts neben der Lupe, um die Suchfilter anzuzeigen.


#### Inhalt einer E-Mail (unteres Fenster) <a name="lowerwindow"></a>

Wird eine E-Mail aus der Liste ausgewählt, wird sie im unteren Fenster angezeigt.

Rechts finden Sie Shortcuts für die folgenden Funktionen:

- Als original HTML anzeigen
- Als reinen Text anzeigen
- Antwort verfassen
- Allen antworten
- Weiterleiten
- In neuem Fenster öffnen

![Hosting](images/roundcube05.png){.thumbnail}

### Einstellungen des RoundCube Interface konfigurieren

Die nachfolgenden Abschnitte entsprechen den Tabs, die den Teil `Einstellungen`{.action} im Abschnitt `Einstellungen`{.action} von RoundCube bilden. Ihre Beschreibung ist nicht erschöpfend.

![Hosting](images/roundcube06.png){.thumbnail}

#### Benutzeroberfläche

Hier legen Sie die verwendete `Sprache` des RoundCube Interface, die `Zeitzone`, die `Zeitformatierung` und die `Datumsformatierung` fest.

Die Option `Kurze Datumsanzeige` ermöglicht die Anzeige der Empfangs- und Versendedaten mit relativen Begriffen wie "Heute", "Gestern" etc.<br>
**Zum Beispiel**: Es ist der **19.05.2022**. Eine am **17.05.2022** um **17:00** Uhr versendete/empfangene E-Mail wird als **Di 17:38** angezeigt, da das E-Mail-Datum sich auf den vorhergehenden Dienstag bezieht.

Das Feld `Den nächsten Eintrag nach Löschen oder Verschieben anzeigen` bedeutet, dass nach Löschen oder Verschieben einer E-Mail das Element der unteren Zeile automatisch ausgewählt wird, unabhängig von der Reihenfolge der Sortierung. 

#### Postfachansicht

Definieren Sie hier die bevorzugte Art, um E-Mails anzuzeigen und zu bearbeiten. Die Option `Layout` erlaubt es, die 3 im Abschnitt [RoundCube Interface Hauptseite](#topwindow) beschriebenen Fenster neu anzuordnen.

#### Nachrichtendarstellung

Legen Sie fest, wie E-Mails angezeigt werden.<br>
Es wird empfohlen, das Feld `HTML anzeigen` anzuhaken, um sicherzustellen, dass vom Absender formatierte E-Mails korrekt angezeigt werden.<br>
Darüber hinaus ist es ratsam, die Option `Externe Ressourcen erlauben (Bilder, Formate)` auf `nie` zu belassen. Dies verhindert, dass externe Elemente einer E-Mail geladen werden, die Schadcode enthält.

#### Nachrichtenerstellung

Legen Sie die Standardform beim Verfassen einer E-Mail oder Antwort fest.<br>
Es wird empfohlen, die Option `HTML-Nachrichten verfassen` auf `immer` zu stellen, um vom HTML-Editor zu profitieren und HTML-Signaturen korrekt beizubehalten.

#### Kontakte

Personalisieren Sie hier die Anordnung der Informationen in Ihrem Adressbuch.

#### Spezialordner

RoundCube verfügt über 4 Spezialordner: `Entwürfe`, `Gesendet`, `Spam`, `Gelöscht`.

Wir raten dazu, diese nicht zu ändern, aber Sie können über die Drop-down-Menüs die Eigenschaften der Spezialordner neu erstellten Ordnern zuweisen.<br>
Zum Beispiel können Sie die Eigenschaft `Entwürfe` einem Ordner zuweisen, den Sie erstellt haben. Die dort gespeicherten E-Mails gelten dann als Entwürfe bis sie tatsächlich versendet werden.

#### Servereinstellungen

In diesem Tab können Sie den Speicherplatz auf einem E-Mail-Account optimieren. Mit der Option `Papierkorb beim Abmelden leeren` wird vermieden, dass gelöschte Elemente sich dort ansammeln. Die Option `Nachrichten in Spam direkt löschen` löscht automatisch alle als SPAM markierten E-Mails.

> [!warning]
> 
> Es ist nicht ratsam, die Option `Nachrichten in Spam direkt löschen` zu aktivieren, um zu verhindern, dass "False Positives" (fälschlicherweise als "SPAM" erkannte E-Mails) für den Empfangsserver als SPAM deklariert werden. Wenn diese Nachrichten zunächst im Ordner "Spam" abgelegt werden, kann noch überprüft werden, ob sich legitime E-Mails darunter befinden.

### Identitäten und deren Signatur verwalten <a name="identity"></a>

Klicken Sie im oberen Menü auf `Einstellungen`{.action} und im linken Menü auf `Identitäten`{.action}. "Identität" erlaubt es, die an die Empfänger gesendeten Informationen zu personalisieren, wie zum Beispiel den Anzeigenamen oder die Signatur.

![Hosting](images/roundcube07.png){.thumbnail}

#### Attribute einer Identität einstellen 

- **Angezeigter Name**: Dieser Name wird im "Absender" des Empfängers erscheinen.
- **E-Mail**: Die Adresse, die als Absender der E-Mail angezeigt wird.
- **Organisation**: Feld für ein Unternehmen, Vereine oder eine andere Einrichtung.
- **Antwort an**: Eine andere E-Mail-Adresse als die des Absenders zuweisen.
- **Blindkopie**: Eine Blindkopie an weitere Empfänger senden.
- **Als Standard**: Gibt es mehrere Identitäten (Signaturen), wird diese bevorzugt angehängt.
- **Signatur**: Die Fußzeile einer E-Mail bei deren Abfassung anpassen (Name, Vorname, Position, Sätze, Bilder, etc.).
- **HTML-Signatur**: Aktiviert das HTML-Format für die Signatur.

> [!alert]
> 
> Das Feld **E-Mail** mit einer anderen E-Mail-Adresse als einer zu Ihrem Account gehörenden auszufüllen, wird als Absenderverschleierung eingestuft (*Spoofing*). Die für den Versand verwendete IP-Adresse kann bei Ihren Empfängern deshalb als "SPAM" deklariert oder gesperrt werden. 

#### Signatur hinzufügen

Standardmäßig ist das Feld `Signatur` auf reines Texformat eingestellt. Dieses Format erlaubt keine erweiterte Formatierung oder das Einfügen von Bildern in Ihre Signatur. Um die erweiterten Bearbeitungsoptionen für eine Signatur nutzen zu können, empfehlen wir die Aktivierung des HTML-Modus durch Klicken auf **HTML-Signatur** unter der Texteingabe.

> [!warning]
> 
> Wenn die Signatur im HTML-Format vorliegt, muss zur Erstellung einer E-Mail auf den HTML-Modus umgestellt werden. Sie können dies als Standardoption für jede E-Mail-Erstellung im Bereich `Einstellungen`{.action} des RoundCube Interface aktivieren.
>
> Klicken Sie in der linken Spalte auf `Einstellungen`{.action} und dann auf `Nachrichtenerstellung`{.action}. Für den Eintrag **HTML-Nachrichten verfassen** wählen Sie `Immer`.
>

Um ein Bild in eine Signatur einzufügen, muss die Datei auf einem Server (OVHcloud Hosting oder andere) bereitgestellt werden.<br>
**Ein von einem lokalen Gerät hochgeladenes Bild wird nicht angezeigt werden.**.

Klicken Sie auf den Button `< >`{.action} in der HTML-Werkzeugleiste und fügen Sie folgenden Code ein, wobei Sie `image-url` mit der Adresse (URL) Ihrer Bilddatei ersetzen und `Alternativtext` mit einem Text, der erscheint, wenn das Bild nicht angezeigt werden kann.

```bash
<img src="image-url" border="0" alt="Alternativtext"/>
```

![Hosting](images/roundcube08.png){.thumbnail}

### Adressbuch

Klicken Sie im oberen Menü auf Kontakte`{.action}, um zum Adressbuch zu gelangen. Es ist in **3 Spalten unterteilt**:

- **Gruppen**: Im Adressbuch können Sie Gruppen erstellen, um die Kontakte zu ordnen.
- **Kontakte**: Kontakte im Adressbuch oder der ausgewählten Gruppe anzeigen.
- **Kontaktdaten** oder **Kontakt hinzufügen**: Dieses Fenster wird angezeigt, wenn ein Kontakt ausgewählt wird oder erstellt wird. Dort können Sie die Informationen eines Kontakts einsehen oder ändern.

![Hosting](images/roundcube09.png){.thumbnail}

#### Gruppen <a name="group"></a>

Gruppen sind Unterkategorien des Adressbuchs. Sie erlauben es, die Kontakte in Untereinheiten zu ordnen. So finden Sie zum Beispiel leichter einen Kontakt in einer Gruppe, die Sie erstellt haben, als im gesamten Adressbuch. So können Sie auch eine E-Mail versenden, indem Sie eine Gruppe pro Empfänger hinzufügen, anstatt die Kontakte der Gruppe einzeln hinzuzufügen.

Um eine Gruppe zu erstellen, klicken Sie unten in der Spalte `Gruppen`{.action} auf den Button `+`. Legen Sie den Namen der Gruppe fest und klicken Sie auf `Speichern`{.action}, um zu bestätigen.

![Hosting](images/roundcube10.png){.thumbnail}

Um einen Kontakt einer der Gruppen zuzuweisen, wählen Sie den Kontakt in der Spalte `Kontakte` aus und klicken Sie im neuen Fenster auf den Tab `Gruppen`{.action}. Wählen Sie die Gruppe aus, die Sie dem Kontakt zuweisen möchten.

#### Kontakte <a name="contacts"></a>

Wählen Sie in der Spalte `Gruppen` das Adressbuch oder eine der Gruppen aus.

> [!primary]
> 
> Wenn Sie in der ausgewählten Gruppe einen Kontakt erstellen, wird der Kontakt automatisch zur Gruppe hinzugefügt.

Klicken Sie auf den Button `+`{.action} unten in der Spalte `Kontakte,` um einen Kontakt zu erstellen.

![Hosting](images/roundcube11.png){.thumbnail}

Geben Sie anschließend die Kontaktinformationen ein.

> [!primary]
>
> Sie können über das Drop-down-Menü `Ein Feld hinzufügen...` unter den Feldern `Name` und `Adresse` weitere Felder hinzufügen.

#### Kontakte importieren

Klicken Sie im Fenster `Kontakte`{.action} in der oberen Leiste auf `Importieren`{.action}, um das Importfenster zu öffnen.

- `Aus Datei importieren`: Wählen Sie eine CSV-Datei oder eine vCard-Datei auf Ihrem Computer aus. Kontakte in einer CSV-Datei müssen durch Kommas getrennt werden. Die Dateigröße darf 20 MB nicht überschreiten.
- `Gruppenzuordnungen importieren`: Wenn die Kontakte in Ihrer Datei auf Gruppen verteilt sind, können Sie diese Option aktivieren, um diese Organisation wiederherzustellen. Wenn Sie diese Option auf `Keine` belassen, werden den Kontakten keine Gruppen zugewiesen.
- `Bestehendes Adressbuch komplett ersetzen`: Wenn Ihre Kontakte bereits konfiguriert ist, empfehlen wir Ihnen, das Adressbuch zu exportieren, bevor Sie diese Option nutzen. Haken Sie dies ansonsten nur an, wenn Sie sicher sind, dass Sie das Adressbuch dauerhaft ersetzen möchten.

![Hosting](images/roundcube-import-contact.png){.thumbnail}

#### RoundCube Kontakte exportieren

Klicken Sie im Fenster `Kontakte`{.action} im oberen Menü rechts auf den Pfeil neben der Schaltfläche `Exportieren`{.action}.

Sie haben die Wahl zwischen:

- `Alles exportieren`{.action}: Alle Kontakte werden in eine **.vcf** Datei exportiert.
- `Auswahl exportieren`{.action}: Exportiert nur die Elemente, die Sie in der Spalte `Kontakte`{.action} ausgewählt haben.

![Hosting](images/roundcube-export-contact.png){.thumbnail}

### Schnellantworten (Templates) <a name="responses"></a>

Mit dieser Funktion können Sie Templates für das Verfassen einer E-Mail erstellen.

Klicken Sie im oberen Menü auf `Einstellungen`{.action} und im linken Menü auf `Schnellantworten`{.action}.

Um eine Antwort hinzuzufügen, klicken Sie unten in der Spalte `Schnellantworten`{.action} auf den Button `+`{.action}.

![Hosting](images/roundcube12.png){.thumbnail}

> [!primary]
> 
> "Schnellantworten" sind immer im Textformat verfasst.

### E-Mail Redaktion

Klicken Sie im Tab `E-Mail`{.action} im oberen Menü auf `Verfassen`{.action}.

Im Fenster zum Verfassen einer E-Mail finden Sie folgende Felder: 

- **Von**: eine [Identität](#identity) für den Absender auswählen.
- **An**: Empfänger und/oder eine [Empfängergruppe hinzufügen](#group).

> [!primary]
> 
> Das Feld "**An**" darf nicht mehr als 100 Empfänger enthalten, die in einer [Gruppe](#group) enthaltenen Kontakte eingeschlossen.

- **Kopie hinzufügen**: Empfänger in Kopie hinzufügen.
- **Blindkopie hinzufügen**: Empfänger in Blindkopie hinzufügen. Die anderen Empfänger der E-Mail werden die als Bcc eingetragenen Adressen nicht sehen.
- **Followup-To hinzufügen**: Die E-Mail an Empfänger weiterleiten.
- **Bearbeitungstyp**:  
    - `Einfacher Text`: Nur Text ohne Formatierung.
    - `HTML`: Formatierter Text. Oberhalb des Eingabefensters erscheint eine HTML-Werkzeugleiste.
- **Priorität** für die E-Mail.
- **Empfangsbestätigung (MDN)**: Der Empfänger erhält eine Empfangsbestätigungsanfrage.
- **Übermittlungsbestätigung (DSN)** Statusbenachrichtigung, sobald die E-Mail an den Empfänger übermittelt wurde.
- **Nachricht speichern in**: Einen Ordner auswählen, in dem eine Kopie der E-Mail gespeichert wird.

Im oberen Menü sind folgende Aktionen verfügbar:

- `Abbrechen`{.action}: Erstellung einer E-Mail nach einer Bestätigungsanfrage abbrechen.
- `Senden`{.action}: E-Mail versenden.
- `Speichern`{.action}: E-Mail im Spezialordner "Entwurf" speichern.
- `Rechtschreibung`{.action}: Überprüft den Text, mit Sprachauswahl.
- `Anhang`{.action}: Datei an die E-Mail anhängen.
- `Signatur`{.action}: Fügt die mit der ausgewählten [Identität](#identity) verbundene Signatur hinzu.
- `Schnellantworten`{.action}: Fügt eine im Abschnitt [Schnellantworten](#responses) gespeicherte Vorlage hinzu.

![Hosting](images/roundcube13.png){.thumbnail}

## Weiterführende Informationen

[Erste Schritte mit MX Plan](https://docs.ovh.com/de/emails/allgemeines-zu-shared-e-mails/)

[Passwort einer MX Plan E-Mail-Adresse ändern](https://docs.ovh.com/de/emails/passwort-e-mail-adresse-aendern/)

[Filter für Ihre E-Mail-Adressen erstellen](https://docs.ovh.com/de/emails/email-hosting-filter/)

[E-Mail Weiterleitungen verwenden](https://docs.ovh.com/de/emails/webhosting_e-mail_anleitung_zum_einrichten_einer_mail-weiterleitung/)

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
