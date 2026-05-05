---
title: 'E-Mail-Adresse über das Roundcube Webmail-Interface verwenden'
updated: 2026-05-04
---

## Ziel

Mit der OVHcloud MX Plan Lösung können Sie E-Mails über eine Drittanbieter-Software oder über Webmail versenden und empfangen. OVHcloud bietet einen Online-E-Mail-Dienst namens Roundcube, mit dem Sie über einen Webbrowser auf einen E-Mail-Account zugreifen können.

**Erfahren Sie, wie Sie das Roundcube Webmail-Interface für Ihre OVHcloud E-Mail-Adressen verwenden.**

## Voraussetzungen

- Sie verfügen über eine OVHcloud E-Mail-Lösung **MX Plan**, die in unseren [Webhosting-Angeboten](/links/web/hosting) enthalten ist, in einem [kostenlosen Hosting-Angebot 100M](/links/web/domains-free-hosting) inbegriffen ist oder separat als eigenständige Lösung bestellt wurde.
- Sie verfügen über die Logindaten der MX Plan E-Mail-Adresse, die Sie verwenden möchten. Weitere Informationen finden Sie in unserer Anleitung [Erste Schritte mit der MX Plan Lösung](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_generalities).
- Ihre OVHcloud E-Mail-Lösung **MX Plan** muss die Webmail-Technologie **Roundcube** verwenden. Folgen Sie den nachstehenden Anweisungen, um dies zu identifizieren.

> [!primary]
> 
> **Wie identifiziere ich die in meiner MX Plan Lösung verwendete Technologie?**
>
> Die für Ihre MX Plan Lösung verwendete E-Mail-Technologie ist anhand des Webmail-Interface erkennbar. Um dies in Ihrem Kundencenter zu identifizieren, folgen Sie diesem Pfad:
>
> 1. Loggen Sie sich in Ihr [OVHcloud Kundencenter](/links/manager) ein.
> 1. Gehen Sie in den Bereich `Web Cloud`{.action}.
> 1. Klicken Sie auf `MX Plan`{.action}.
> 1. Wählen Sie die betreffende Domain aus.
> 1. Im Tab `Allgemeine Informationen`{.action} (standardmäßig ausgewählt) prüfen Sie die unter dem Eintrag **Webmail** verwendete Technologie.
>
> ![MX plan](images/technology-email.png){.thumbnail .w-500}

<!-- CP-NAV-START:web-mx-plan -->
---

### Zugriff auf das OVHcloud Kundencenter

- **Direkter Link:** [MX Plan](/links/control-panel/web-mx-plan)
- **Navigationspfad:** `Web Cloud`{.action} > `MX Plan`{.action} > Wählen Sie Ihren MX Plan Dienst aus

---
<!-- CP-NAV-END:web-mx-plan -->

## In der praktischen Anwendung

**Inhaltsübersicht**

- [Einloggen in das Roundcube Webmail-Interface](#roundcube-connexion)
- [Hauptseite des Roundcube Webmail](#general-interface)
    - [Ordnerverwaltung (linke Spalte)](#leftcolumn)
    - [Liste der empfangenen/gesendeten E-Mails (oberes Fenster)](#topwindow)
        - [Anzeigetyp](#topwindow-display)
        - [Aktion auf einer ausgewählten E-Mail](#topwindow-action)
        - [Nach einer E-Mail suchen](#topwindow-search)
    - [Inhalt der E-Mail (unteres Fenster)](#lowerwindow)
- [Einstellungen des Roundcube Interface konfigurieren](#roundcube-settings)
    - [Benutzeroberfläche](#user-interface-settings)
    - [Postfachansicht](#mail-view-settings)
    - [Nachrichtenanzeige](#mail-display-settings)
    - [Nachrichtenerstellung](#mail-writing-settings)
    - [Kontakte](#contacts-settings)
    - [Spezialordner](#special-folder-settings)
    - [Servereinstellungen](#server-settings)
    - [Verschlüsselung](#encryption)
- [Identitäten und ihre Signaturen verwalten](#identity-signature)
    - [Identität](#identity)
    - [Signatur](#signature)
- [Adressbuch](#contact-book)
    - [Gruppen](#group)
    - [Kontakte](#contacts)
    - [Kontakte importieren](#import-contacts)
    - [Kontakte exportieren](#export-contacts)
- [Schnellantworten (Templates)](#responses)
- [Einen Auto-Responder hinzufügen](#automatic-respond)
- [Passwort Ihres E-Mail-Accounts ändern](#password)
- [E-Mail verfassen](#email-writing)
- [Anwendungsfall](#usecase)

### Einloggen in das Roundcube Webmail-Interface <a name="roundcube-connexion"></a>

Gehen Sie auf die Seite [Webmail](/links/web/email). Geben Sie eine E-Mail-Adresse und das Passwort ein und klicken Sie dann auf `Login`{.action}. 

![hosting](images/webmail_login.png){.thumbnail}

Sie werden anschließend zum Roundcube Interface weitergeleitet.

![hosting](images/roundcube01.png){.thumbnail}

> [!primary]
> 
> Beim ersten Einloggen in das Roundcube Interface kann das Erscheinungsbild von dem in dieser Dokumentation gezeigten abweichen. Dies bedeutet, dass das "klassische" Erscheinungsbild auf Ihrem Interface eingestellt wurde. Um dies zu ändern, folgen Sie dem Abschnitt "[Benutzeroberfläche](#user-interface-settings)" und wählen Sie die Ansicht "Larry" aus.
> Das Erscheinungsbild des Interface hat keinen Einfluss auf die nachfolgenden Erklärungen in dieser Dokumentation.

> [!warning]
> 
> Wenn Sie auf ein **O**utlook **W**eb **A**pp Interface (OWA) weitergeleitet werden, bedeutet dies, dass Sie die neueste Version der MX Plan Lösung verwenden. Weitere Informationen zu Ihrer MX Plan Lösung finden Sie auf unserer Seite [Erste Schritte mit der MX Plan Lösung](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_generalities).
>
> Um sich mit dem **OWA**-Interface vertraut zu machen, lesen Sie unsere Anleitung [Verwendung eines E-Mail-Accounts mit dem OWA-Interface](/pages/web_cloud/email_and_collaborative_solutions/using_the_outlook_web_app_webmail/email_owa).

### Hauptseite des Roundcube Webmail <a name="general-interface"></a>

Sobald Sie in Ihrem E-Mail-Account eingeloggt sind, haben Sie Zugriff auf das Roundcube Hauptfenster, das aus 3 Bereichen besteht:

- [**Linke Spalte**](#leftcolumn): die Ordnerstruktur Ihres E-Mail-Accounts, bestehend aus Ordnern und Unterordnern. Der Hauptordner ist der `Posteingang`.

- [**Oberes Fenster**](#topwindow): die Liste der E-Mails, die im in der linken Spalte ausgewählten Ordner enthalten sind.

- [**Unteres Fenster**](#lowerwindow): der Inhalt der im oberen Fenster ausgewählten E-Mail.

#### Ordnerverwaltung (linke Spalte) <a name="leftcolumn"></a>

In diesem Bereich werden die Ordner Ihres E-Mail-Accounts angezeigt.

Um die Ordner genauer zu verwalten, klicken Sie auf das Zahnradsymbol am unteren Rand der Spalte und anschließend auf `Ordner verwalten`{.action}.

![hosting](images/roundcube02.png){.thumbnail}

Um einen Ordner zu erstellen, klicken Sie auf den Button `+`{.action} am unteren Rand der Spalte `Ordner`.

Um einen Ordner zu löschen, wählen Sie den betreffenden Ordner aus, klicken Sie auf das Zahnradsymbol am unteren Rand der Spalte `Ordner` und anschließend auf `Löschen`{.action}. Um den Inhalt zu leeren, ohne den Ordner zu entfernen, klicken Sie auf `Leeren`{.action}.

Die Kontrollkästchen neben den Ordnern entsprechen den "Abonnements". Das Abonnement legt fest, ob der Ordner im Webmail-Interface oder in der E-Mail-Software angezeigt wird oder nicht, wobei der Inhalt des Ordners erhalten bleibt. Es geht nur darum, einen Ordner im E-Mail-Account ein- oder auszublenden.

> [!primary]
>
> Ordner mit einem grauen Kontrollkästchen sind Spezialordner. Sie können diese weder löschen noch ihr Abonnement aufheben.

#### Liste der empfangenen/gesendeten E-Mails (oberes Fenster) <a name="topwindow"></a>

Dieses Fenster zeigt den Inhalt des in der linken Spalte ausgewählten Ordners an. 

##### Anzeigetyp <a name="topwindow-display"></a>

Dieses Fenster wird in einer anpassbaren Form dargestellt. Klicken Sie hierzu auf das Zahnradsymbol oben links im Fenster.

![hosting](images/roundcube03.png){.thumbnail}

Vier Parameter können konfiguriert werden:

- **Layout**: legt fest, wie die Verwaltungsfenster des E-Mail-Accounts angeordnet werden. Drei Optionen:
    - `Breitbild`{.action}: drei Bereiche nebeneinander – Ordner, E-Mail-Liste und Lesebereich horizontal angeordnet;
    - `Standard`{.action}: E-Mail-Liste oben, Lesebereich darunter (klassisches Layout);
    - `Liste`{.action}: kein Lesebereich – E-Mails werden beim Anklicken im Vollbildfenster geöffnet.

- **Listenspalten**: Kontrollkästchen, die festlegen, welche Spalten in der E-Mail-Liste angezeigt werden. Die Spalten **Betreff** und **Threads** sind immer sichtbar. Verfügbare optionale Spalten: `Von`{.action}, `An`{.action}, `Von/An`{.action}, `Antwort an`{.action}, `Kopie`{.action}, `Datum`{.action}, `Größe`{.action}, `Status`{.action}, `Anhang`{.action}, `Markierung`{.action}, `Priorität`{.action}.

- **Sortierspalte**: ermöglicht die Auswahl der Standardsortierspalte. Verfügbare Optionen: `Keine`{.action}, `Eingangsdatum`{.action}, `Sendedatum`{.action}, `Betreff`{.action}, `Von`{.action}, `An`{.action}, `Von/An`{.action}, `Kopie`{.action} oder `Größe`{.action}.

- **Sortierreihenfolge**: aufsteigend oder absteigend.

Klicken Sie auf `Speichern`{.action}, um Ihre Auswahl zu übernehmen.

> [!primary]
>
> Sie können die Liste auch **dynamisch sortieren**, indem Sie direkt auf die Kopfzeile einer angezeigten Spalte klicken (zum Beispiel **Datum**, **Betreff** oder **Größe**). Ein zweiter Klick auf dieselbe Spalte kehrt die Reihenfolge um.

##### Aktion auf einer ausgewählten E-Mail <a name="topwindow-action"></a>

Wenn eine E-Mail ausgewählt ist, können Sie verschiedene Aktionen darauf ausführen. Folgende Aktionen sind möglich:

- `Antworten`{.action}: dem Absender direkt antworten.
- `Allen antworten`{.action}: allen in den Feldern "An" und "Kopie" aufgeführten Empfängern direkt antworten.
- `Weiterleiten`{.action}: die ausgewählte E-Mail an einen oder mehrere Empfänger weiterleiten.
- `Löschen`{.action}: die ausgewählte E-Mail in den "Papierkorb" verschieben.
- `Als Spam markieren`{.action}: die ausgewählte E-Mail direkt in den Spam-Ordner (Junk) verschieben und als **Spam** kennzeichnen.
- `Markieren`{.action}: den Status einer E-Mail manuell festlegen.
- `Mehr`{.action} 
    - `Nachricht drucken`{.action}.
    - `Lokal speichern (.eml)`{.action}: den Header der E-Mail und ihren Inhalt abrufen.
    - `Als neue Nachricht öffnen`{.action}: eine neue E-Mail auf der Grundlage der ausgewählten E-Mail erstellen.
    - `Quelltext anzeigen`{.action}: die E-Mail in ihrer Rohform inklusive Header anzeigen.
    - `Verschieben nach`{.action}: die E-Mail in einen Ordner verschieben.
    - `Kopieren nach`{.action}: die E-Mail in einen Ordner kopieren.
    - `In neuem Fenster öffnen`{.action}.

![hosting](images/roundcube04.png){.thumbnail}

> [!primary]
>
> Wenn einer Ihrer Kontakte eine Lesebestätigung anfordert, sobald Sie die zugehörige E-Mail lesen, erhalten Sie folgende Nachricht: `Der Absender dieser Nachricht hat um eine Benachrichtigung gebeten, wenn Sie diese Nachricht lesen. Möchten Sie den Absender benachrichtigen?`.
>

##### Nach einer E-Mail suchen <a name="topwindow-search"></a>

Im oberen rechten Bereich des Interface steht ein Suchwerkzeug zur Verfügung.

Geben Sie einen Begriff in das Suchfeld ein und bestätigen Sie mit der `Eingabetaste`{.action}: standardmäßig durchsucht Roundcube den gesamten aktuellen Ordner.

Klicken Sie auf den Pfeil rechts neben der Lupe, um die Suchfilter anzuzeigen: Sie können die Suche auf bestimmte Felder beschränken (Betreff, Nachrichtentext, Absender, Empfänger usw.) oder ihren Umfang auf alle Ordner ausweiten.

#### Inhalt der E-Mail (unteres Fenster) <a name="lowerwindow"></a>

Wenn eine E-Mail in der Liste ausgewählt wird, wird sie im unteren Fenster angezeigt.

Auf der rechten Seite finden Sie Verknüpfungen für die folgenden Funktionen:

- `Im HTML-Format anzeigen`{.action} (Standard)
- `Im Klartextformat anzeigen`{.action}
- `Antworten`{.action}
- `Allen antworten`{.action}
- `Weiterleiten`{.action}
- `In neuem Fenster öffnen`{.action}

![hosting](images/roundcube05.png){.thumbnail}

### Einstellungen des Roundcube Interface konfigurieren <a name="roundcube-settings"></a>

Die folgenden Abschnitte dieser Anleitung entsprechen den Tabs, aus denen sich der Bereich `Einstellungen`{.action} der Roundcube `Einstellungen`{.action} zusammensetzt. Ihre Beschreibung ist nicht erschöpfend.

![hosting](images/roundcube06.png){.thumbnail}

#### Benutzeroberfläche <a name="user-interface-settings"></a>

Hier legen Sie die `Sprache` des Roundcube Interface, die `Zeitzone`, das `Zeitformat` und das `Datumsformat` fest.

Die Option `Kurze Datumsanzeige` ermöglicht die Anzeige des Empfangs-/Sendedatums mit relativen Begriffen wie "Heute", "Gestern" usw.<br>
**Zum Beispiel**: Das heutige Datum ist der **19.05.2022**, eine am **17.05.2022** um **17:38** Uhr gesendete/empfangene E-Mail wird als **Di. 17:38** angezeigt, da die E-Mail dem vorhergehenden Dienstag entspricht.

Das Kontrollkästchen `Den nächsten Eintrag nach Löschen oder Verschieben anzeigen` bedeutet, dass nach dem Löschen oder Verschieben einer E-Mail das Element der unteren Zeile automatisch ausgewählt wird, unabhängig von der Sortierreihenfolge.

Sie können das Erscheinungsbild Ihrer Benutzeroberfläche auswählen. Sie haben die Wahl zwischen der Ansicht **Classic** und der Ansicht **Larry**.

#### Postfachansicht <a name="mail-view-settings"></a>

Legen Sie hier das Layout fest, das zum Anzeigen und Bearbeiten von E-Mails verwendet wird. Die Option `Layout` ermöglicht es, die 3 im Abschnitt [Liste der empfangenen/gesendeten E-Mails](#topwindow) beschriebenen Fenster anzuordnen.

#### Nachrichtenanzeige <a name="mail-display-settings"></a>

Legen Sie fest, wie E-Mails angezeigt werden.<br>
Wir empfehlen, das Kontrollkästchen `HTML anzeigen` aktiviert zu lassen, um sicherzustellen, dass vom Absender formatierte E-Mails korrekt angezeigt werden.<br>
Wir empfehlen außerdem, die Option `Externe Ressourcen erlauben (Bilder, Formate)` auf `nie` belassen. So wird verhindert, dass Elemente einer E-Mail geladen werden, die schädlich sein könnten.

#### Nachrichtenerstellung <a name="mail-writing-settings"></a>

Legen Sie die Standardform beim Verfassen einer E-Mail oder einer Antwort fest.<br>
Wir empfehlen, die Option `HTML-Nachrichten verfassen` auf `immer` zu setzen, um standardmäßig von den HTML-Bearbeitungswerkzeugen zu profitieren und eine HTML-Signatur nicht zu verändern.

#### Kontakte <a name="contacts-settings"></a>

Passen Sie hier die Anordnung der Informationen in Ihrem Adressbuch an.

#### Spezialordner <a name="special-folder-settings"></a>

Roundcube verfügt über 4 Spezialordner: `Entwürfe`, `Gesendet`, `Spam`, `Papierkorb`.

Wir raten davon ab, diese zu ändern. Sie können jedoch das Verhalten eines Spezialordners einem später erstellten Ordner zuweisen, indem Sie die Drop-down-Menüs verwenden.<br>

**Zum Beispiel** können Sie das Verhalten "Entwürfe" einem von Ihnen erstellten Ordner zuweisen, indem Sie auf die Drop-down-Liste klicken und diesen Ordner auswählen. Wenn kein Ordner zugewiesen ist, wird er automatisch auf die Option "Entwürfe" gesetzt. Die dort gespeicherten E-Mails werden dann als Entwürfe betrachtet, bis sie tatsächlich versendet werden.

> In der Praxis erstellen Sie einen Unterordner mit dem Namen "Entwürfe von Kunden-E-Mails". Gehen Sie zu `Einstellungen`{.action} / `Spezialordner`{.action} und wählen Sie die Option "Entwürfe". Wählen Sie im Drop-down-Menü den Ordner "Entwürfe von Kunden-E-Mails" aus, um "Entwürfe" zu ersetzen. In diesem Ordner verfasste E-Mails werden als Entwürfe behandelt.

#### Servereinstellungen <a name="server-settings"></a>

In diesem Tab können Sie den von einem E-Mail-Account belegten Speicherplatz optimieren. Die Option `Papierkorb beim Abmelden leeren` hilft, die Ansammlung gelöschter Elemente zu vermeiden. Die Option `Nachrichten in Spam direkt löschen` löscht automatisch alle als Spam eingestuften E-Mails.

> [!warning]
> 
> Wir raten davon ab, die Option `Nachrichten in Spam direkt löschen` zu aktivieren, falls vom Empfangsserver ein "False Positive" (eine fälschlicherweise als "Spam" eingestufte E-Mail) als Spam markiert wird. Wenn eine E-Mail im Ordner "Spam" abgelegt wird, können Sie noch überprüfen, ob die E-Mail legitim ist.

#### Verschlüsselung <a name="encryption"></a>

Wenn Ihr Browser dies zulässt, können Sie die Erweiterung "Mailvelope" installieren und aktivieren. Dabei handelt es sich um eine Browsererweiterung, die PGP (**P**retty **G**ood **P**rivacy) in Ihr Webmail integriert. Das PGP-Verschlüsselungssystem und damit die Erweiterung "Mailvelope" ermöglichen Folgendes:

- E-Mails in Ihrem Browser verschlüsseln und entschlüsseln.
- Den Inhalt Ihrer E-Mails vor Ihrem E-Mail-Anbieter geheim halten.

So können nur Sie Ihre E-Mails lesen. Diese Erweiterung ist eine Möglichkeit, Ihr Webmail abzusichern, wenn Sie vertrauliche E-Mails erhalten.

Weitere Informationen finden Sie in den FAQ zu "Mailvelope" unter <https://mailvelope.com/de/faq>.

### Identitäten und ihre Signaturen verwalten <a name="identity-signature"></a>

Klicken Sie in Roundcube in der oberen Leiste auf `Einstellungen`{.action} und anschließend in der linken Spalte auf `Identitäten`{.action}. Die "Identität" ermöglicht es Ihnen, die an die Empfänger gesendeten Informationen wie den Anzeigenamen oder die Signatur anzupassen.

![hosting](images/roundcube07.png){.thumbnail}

#### Attribute einer Identität festlegen <a name="identity"></a>

- **Angezeigter Name**: Dieser Name erscheint im Bereich "Absender" beim Empfänger.
- **E-Mail**: Die Adresse, von der die E-Mail gesendet wird.
- **Organisation**: ein Feld für einen Firmennamen, einen Verein oder eine andere Einrichtung.
- **Antwort an**: weisen Sie eine andere Antwort-E-Mail-Adresse als die des Absenders zu.
- **Blindkopie**: senden Sie beim Versand eine Blindkopie an eine E-Mail-Adresse.
- **Als Standard festlegen**: Bei mehreren Identitäten (Signaturen) legen Sie diese als Standard fest.
- **Signatur**: passen Sie die Fußzeile einer E-Mail beim Verfassen an (Name, Vorname, Position, Sätze, Bilder usw.).
- **HTML-Signatur**: aktiviert das HTML-Format für die Signatur.

> [!alert]
>
> Das Ausfüllen des Feldes **E-Mail** mit einer anderen E-Mail-Adresse als der, mit der Sie eingeloggt sind, gilt als elektronischer Identitätsdiebstahl (*Spoofing*). Die für den Versand verwendete IP-Adresse kann von Ihren Empfängern als "gesperrt" und/oder als "Spam" eingestuft werden.

#### Eine Signatur hinzufügen <a name="signature"></a>

Standardmäßig ist das Feld `Signatur` im "Klartext"-Format. Dieses Format erlaubt keine erweiterte Bearbeitung oder das Einfügen eines Bildes in Ihre Signatur. Um die erweiterten Bearbeitungsoptionen für eine Signatur zu nutzen, empfehlen wir, den HTML-Modus durch Klicken auf **HTML-Signatur** unter dem Eingabefeld zu aktivieren.

> [!warning]
>
> Wenn die Signatur im HTML-Format vorliegt, müssen Sie beim Verfassen einer E-Mail in den HTML-Modus wechseln. Sie können diese Option standardmäßig für jede E-Mail, die Sie verfassen, im Bereich `Einstellungen`{.action} des Roundcube Interface aktivieren.
> Klicken Sie in der linken Spalte auf `Einstellungen`{.action} und dann auf `Nachrichtenerstellung`{.action}. Wählen Sie für den Eintrag **HTML-Nachrichten verfassen** die Option `Immer`.
>

Um ein Bild in eine Signatur einzufügen, muss das Bild auf einem Server (einem OVHcloud Hosting-Angebot oder einem anderen) bereitgestellt werden.<br>
**Das Hochladen eines Bildes von einem Computer ermöglicht nicht dessen Anzeige**.

Klicken Sie auf den Button `< >`{.action} in der HTML-Werkzeugleiste und fügen Sie dann den folgenden Code ein, wobei Sie `your-image-url` durch die URL des Bildes und `text-if-image-is-not-displayed` durch einen Text ersetzen, der das Bild ersetzt, falls es nicht angezeigt werden kann.

```html
<img src="your-image-url" border="0" alt="text-if-image-is-not-displayed" />
```

![hosting](images/roundcube08.png){.thumbnail}

### Adressbuch <a name="contact-book"></a>

Klicken Sie in der oberen Leiste auf `Kontakte`{.action}, um auf das Adressbuch zuzugreifen. Es ist in **3 Spalten** unterteilt:

- **Gruppen**: Im Adressbuch können Sie Gruppen erstellen, um Kontakte zu organisieren.
- **Kontakte**: Zeigen Sie die Kontakte des Adressbuchs oder der ausgewählten Gruppe an.
- **Kontakteigenschaften** oder **Kontakt hinzufügen**: Dieses Fenster wird angezeigt, wenn ein Kontakt ausgewählt oder erstellt wird. Sie können die Kontaktinformationen einsehen oder bearbeiten.

![hosting](images/roundcube09.png){.thumbnail}

#### Gruppen <a name="group"></a>

Gruppen sind Unterkategorien des Adressbuchs. Sie ermöglichen es Ihnen, Kontakte in Untergruppen zu organisieren. So ist es zum Beispiel einfacher, einen Kontakt in einer von Ihnen erstellten Gruppe zu finden als im gesamten Adressbuch. Sie ermöglichen außerdem das Versenden einer E-Mail, indem Sie eine Gruppe als Empfänger hinzufügen, anstatt die Kontakte der Gruppe einzeln hinzuzufügen.

Um eine Gruppe zu erstellen, klicken Sie auf den Button `+`{.action} am unteren Rand der Spalte `Gruppen`. Legen Sie den Namen der Gruppe fest und klicken Sie auf `Speichern`{.action}, um zu bestätigen.

![hosting](images/roundcube10.png){.thumbnail}

Um einen Kontakt einer der Gruppen zuzuweisen, wählen Sie einen Kontakt in der Spalte `Kontakte` aus und klicken Sie im erscheinenden Fenster auf den Tab `Gruppen`{.action}. Aktivieren Sie das Kontrollkästchen der Gruppe, die Sie dem Kontakt zuweisen möchten.

#### Kontakte <a name="contacts"></a>

Wählen Sie in der Spalte `Gruppen` das Adressbuch oder eine der Gruppen aus.

> [!primary]
>
> Wenn Sie einen Kontakt aus einer ausgewählten Gruppe heraus erstellen, wird der Kontakt automatisch zur Gruppe hinzugefügt.

Klicken Sie auf den Button `+`{.action} am unteren Rand der Spalte `Kontakte`, um einen Kontakt zu erstellen.

![hosting](images/roundcube11.png){.thumbnail}

Geben Sie anschließend die Kontaktinformationen ein.

> [!primary]
> Sie können über das Drop-down-Menü `Feld hinzufügen...`{.action} weitere Felder hinzufügen, das sich unter den Feldern `Vorname` und `Adresse` befindet.

#### Kontakte importieren <a name="import-contacts"></a>

Klicken Sie im Fenster `Kontakte`{.action} in der oberen Leiste auf `Importieren`{.action}, um das Importfenster zu öffnen.

- `Aus Datei importieren`: Wählen Sie eine CSV-Datei oder eine vCard-Datei von Ihrem Computer aus. Kontakte in einer CSV-Datei müssen durch Kommas getrennt sein. Die Datei darf nicht größer als 20 MB sein.
- `Gruppenzuordnungen importieren`: Wenn die Kontakte in Ihrer Datei nach Gruppen sortiert sind, können Sie diese Option aktivieren, um diese Organisation beizubehalten, oder diese Option auf `Keine` belassen, sodass den Kontakten keine Gruppe zugewiesen wird.
- `Bestehendes Adressbuch komplett ersetzen`: Wenn bereits ein Adressbuch konfiguriert ist, empfehlen wir Ihnen, dieses zu exportieren, bevor Sie diese Option aktivieren, oder sich zu vergewissern, dass Sie es dauerhaft ersetzen möchten.

![hosting](images/roundcube-import-contact.png){.thumbnail}

#### Kontakte exportieren <a name="export-contacts"></a>

Klicken Sie im Fenster `Kontakte`{.action} in der oberen Leiste auf den Pfeil rechts neben dem Button `Exportieren`{.action}.

Sie haben die Wahl zwischen:

- `Alles exportieren`{.action}: Alle Kontakte werden in einer **.vcf**-Datei exportiert.
- `Auswahl exportieren`{.action}: Es werden nur die Elemente exportiert, die Sie in der Spalte `Kontakte`{.action} ausgewählt haben.

![hosting](images/roundcube-export-contact.png){.thumbnail}

### Schnellantworten (Templates) <a name="responses"></a>

Mit dieser Funktion können Sie Antwortvorlagen für das Verfassen einer E-Mail erstellen.

Klicken Sie in Roundcube in der oberen Leiste auf `Einstellungen`{.action} und anschließend in der linken Spalte auf `Schnellantworten`{.action}.

Um eine Antwort hinzuzufügen, klicken Sie auf den Button `+`{.action} am unteren Rand der Spalte `Schnellantworten`.

![hosting](images/roundcube12.png){.thumbnail}

> [!primary]
>
> "Schnellantworten" werden im "Klartext"-Format verfasst.

### Einen Auto-Responder hinzufügen <a name="automatic-respond"></a>

Sie möchten Ihrer E-Mail-Adresse eine automatische Antwort hinzufügen, wenn Sie abwesend oder nicht verfügbar sind. Diese Funktion kann nicht über das Webmail-Interface aktiviert werden, sondern über Ihr [OVHcloud Kundencenter](/links/manager) im Verwaltungsinterface Ihrer E-Mail-Adressen. Lesen Sie unsere Anleitung "[Einen Auto-Responder für Ihre E-Mail-Adresse erstellen](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/feature_auto_responses/)".

### Passwort Ihres E-Mail-Accounts ändern <a name="password"></a>

Um Ihr E-Mail-Passwort zu ändern, müssen Sie sich in Ihr [OVHcloud Kundencenter](/links/manager) im Verwaltungsinterface Ihrer E-Mail-Adressen einloggen. Lesen Sie unsere Anleitung "[Passwort einer E-Mail-Adresse ändern](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_change_password/)".

### E-Mail verfassen <a name="email-writing"></a>

Klicken Sie im Tab `E-Mail`{.action} in der oberen Leiste auf `Verfassen`{.action}.

Im Fenster zum Verfassen einer E-Mail finden Sie folgende Felder:

- **Von**: Wählen Sie eine [Identität](#identity) aus, um den Absender festzulegen.
- **An**: Fügen Sie Empfänger und/oder eine [Empfängergruppe](#group) hinzu. Mit dem Button `+`{.action} rechts neben dem Feld können Sie mehrere Adressen eingeben.

> [!primary]
>
> Das Feld **"An"** darf 100 Empfänger nicht überschreiten, einschließlich der Kontakte innerhalb einer [Gruppe](#group).

- **Kopie**: Über den Button `Kopie hinzufügen`{.action} fügen Sie Empfänger als einfache Kopie hinzu.
- **Blindkopie**: Über den Button `Blindkopie hinzufügen`{.action} fügen Sie Empfänger als Blindkopie hinzu. Die anderen Empfänger der E-Mail sehen die in Blindkopie eingetragenen Adressen nicht.
- **Followup-To**: Über den Button `Followup-To hinzufügen`{.action} leiten Sie die E-Mail an Empfänger weiter.
- **Bearbeitungstyp**:
    - `Klartext`: nur Text, ohne Formatierung.
    - `HTML`: Text mit Formatierung. Eine HTML-Werkzeugleiste erscheint oberhalb des Eingabefensters.
- **Priorität** der E-Mail.
- **Empfangsbestätigung**: Vom Empfänger wird eine Lesebestätigung angefordert.
- **Übermittlungsstatusbenachrichtigung**, sobald die E-Mail erfolgreich an den Empfänger zugestellt wurde.
- **Gesendete Nachricht speichern in**: Wählen Sie den Ordner aus, in dem eine Kopie der E-Mail gespeichert wird.

In der oberen Leiste sind folgende Aktionen verfügbar:

- `Abbrechen`{.action}: das Verfassen einer E-Mail abbrechen, mit einer Bestätigungsabfrage.
- `Senden`{.action}: eine E-Mail versenden.
- `Speichern`{.action}: eine E-Mail im Spezialordner "Entwürfe" speichern.
- `Rechtschreibung`{.action}: prüft den Text, mit einem Menü zur Sprachauswahl.
- `Anhang`{.action}: eine Datei an eine E-Mail anhängen.
- `Signatur`{.action}: fügt die mit der ausgewählten [Identität](#identity) verknüpfte Signatur hinzu.
- `Schnellantworten`{.action}: fügt eine zuvor gespeicherte Vorlage aus dem Abschnitt [Schnellantworten](#responses) hinzu.

![hosting](images/roundcube13.png){.thumbnail}

### Anwendungsfall <a name="usecase"></a>

#### Fehler bei der Anforderungsüberprüfung

Wenn Sie versuchen, auf Ihr Roundcube Webmail-Interface zuzugreifen, wird folgende Meldung angezeigt:

```console
ANFORDERUNGSPRÜFUNG FEHLGESCHLAGEN
Zu Ihrem Schutz ist der Zugriff auf diese Ressource gegen CSRF-Angriffe geschützt.
Wenn Sie dies sehen, haben Sie sich vor dem Verlassen der Webanwendung wahrscheinlich nicht abgemeldet.
Eine Benutzerinteraktion ist jetzt erforderlich, um fortzufahren.
Bitte wenden Sie sich an Ihren Serveradministrator.
```

Wie in der Meldung angegeben, gilt Ihr E-Mail-Account als bereits eingeloggt. Dies wird als "Sitzung" bezeichnet. Es bedeutet, dass Ihr E-Mail-Account aus Sicht des E-Mail-Servers bereits in Verwendung ist und dass diese vorherige Sitzung geschlossen werden muss. Prüfen Sie, dass Ihr E-Mail-Account nicht bereits in Roundcube geöffnet ist. Leeren Sie auch die zwischengespeicherten Daten in Ihrem Webbrowser.

## Weiterführende Informationen

[Erste Schritte mit der MX Plan Lösung](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_generalities)

[Passwort einer MX Plan E-Mail-Adresse ändern](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_change_password)

[Einen Auto-Responder für Ihre E-Mail-Adresse erstellen](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/feature_auto_responses/)

[Filter für Ihre E-Mail-Adressen erstellen](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/feature_filters)

[E-Mail-Weiterleitungen verwenden](/pages/web_cloud/email_and_collaborative_solutions/common_email_features/feature_redirections)

Treten Sie unserer [User Community](/links/community) bei.
