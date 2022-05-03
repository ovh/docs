---
title: 'Den OVHcloud Kunden-Account mit der Zwei-Faktor-Authentifizierung absichern'
slug: Account-mit-2FA-absichern
excerpt: 'Erfahren Sie hier, wie Sie die Sicherheit Ihres Accounts bei OVHcloud steigern können, indem Sie die Zwei-Faktor-Authentifizierung aktivieren'
section: Sicherheit
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie beim geringsten Zweifel die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button “Mitmachen“ auf dieser Seite.
>

**Letzte Aktualisierung am 03.01.2022**

## Ziel

OVHcloud stellt Ihnen Instrumente zur Verfügung, um die Sicherheit Ihres Accounts und Ihrer Dienste zu erhöhen.
Sie können eine Zwei-Faktor-Authentifizierung aktivieren (2FA). Diese ergänzt Ihre Kennung und Passwort und wird von einem Ihrer Geräte generiert: ein Telefon, ein Tablet oder ein USB-Sicherheitsschlüssel.  

**Lernen Sie die verschiedenen Sicherheitsmethoden und ihre Aktivierung kennen.**

## Voraussetzungen

- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de).
- Sie haben ein Mobiltelefon (für die Methode per SMS), ein Smartphone oder Tablet (für die Methode über mobile Applikation) oder einen “Universal Second Factor (U2F)” Sicherheitsschlüssel.
- Sie haben die [Empfehlungen zur Verwaltung des Zugangspassworts für Ihren Kunden-Account](https://docs.ovh.com/de/customer/Passwort-verwalten) zur Kenntnis genommen.

## In der praktischen Anwendung

Sie können die Zwei-Faktor-Authentifizierung auf eine oder mehrere Weisen aktivieren, um den Zugang zu Ihrem Kundencenter abzusichern und zu kontrollieren.
Hierzu stellen wir Ihnen drei verschiedene Methoden zur Verfügung:

- **per SMS**. Bitte geben Sie Ihre Mobilfunknummer ein. Ein Code zur einmaligen Verwendung wird Ihnen per SMS zugeschickt, wenn Sie sich bei Ihrem Account bei OVHcloud anmelden möchten. Der Hauptvorteil dieser Methode besteht in der Verwendung eines Codes, der auf ein Peripheriegerät gesandt wird, und nicht auf Ihren Computer. Bei Einbruch in Ihren Computer, z.B. per Schadsoftware, bleibt Ihr Account abgesichert. Die Netzabdeckung muss indes ausreichen, um Nachrichten per SMS zu empfangen;

- **per mobiler OTP-Applikation**. Installieren Sie eine mobile OTP-Applikation auf Ihrem Smartphone oder Tablet mit Android oder iOS. Ordnen Sie dann die Applikation Ihrem Account bei OVHcloud zu. Die Applikation generiert einen für kurze Zeit gültigen Code zur einmaligen Verwendung, wenn Sie sich bei Ihrem Account bei OVHcloud anmelden möchten.
Ist die Applikation Ihrem Account einmal zugewiesen, benötigen Sie keine Internetverbindung für Ihr Peripheriegerät mehr, um die Codes zu generieren;

- **per Sicherheitsschlüssel U2F**. Bei dieser Methode müssen Sie einen U2F-Sicherheitsschlüssel per USB an Ihren Computer anschließen, wenn Sie sich mit Ihrem Account bei OVHcloud verbinden. Die Authentifizierung geschieht nun automatisch. Diese Methode bietet eine höhere Sicherheitsstufe, da die Ausrüstung dafür unabhängig und völlig separat von Ihrem Computer, Smartphone oder Tablet ist. Sie ist Gefährdungen aufgrund von Hacking somit weniger ausgesetzt. 

### Schritt 1: Aktivieren Sie Ihre erste Methode der Zwei-Faktor-Authentifizierung

- [Zwei-Faktor-Authentifizierung per SMS aktivieren](https://docs.ovh.com/de/customer/die-zwei-Faktor-Authentifizierung-per-SMS-aktivieren).
- [Zwei-Faktor-Authentifizierung per mobiler Applikation aktivieren](https://docs.ovh.com/de/customer/die-Zwei-Faktor-Authentifizierung-per-mobiler-Applikation-aktivieren).
- [Zwei-Faktor-Authentifizierung per Sicherheitsschlüssel aktivieren](https://docs.ovh.com/de/customer/die-Zwei-Faktor-Authentifizierung-mit-Sicherheitsschl%C3%BCssel-aktivieren).

Nach Hinzufügen der ersten Methode können Sie weitere Methoden hinzufügen, um mehrere Möglichkeiten zu haben, sich mit ihrem Konto zu verbinden.

### Schritt 2: Speichern Sie die Sicherheitscodes

Wenn Sie erstmalig eine Zwei-Faktor-Authentifizierung hinzufügen, werden Ihnen die Notfall-Codes mitgeteilt. Bewahren Sie sie gut auf. Wir empfehlen Ihnen, sie in einem Passwort-Manager zu speichern.

![2FA](images/2facodes.png){.thumbnail}

Sie können sie in ihrem Kundencenter löschen oder erneut erstellen:

![2FA](images/2facodesaction.png){.thumbnail}

> [!warning]
>
> Wir möchten Sie daran erinnern, dass die Notfall-Codes unbedingt gespeichert und gültig sein müssen. Sollte(n) die von Ihnen gewählte(n) Sicherheitsmethode(n) nicht verfügbar sein (Diebstahl oder Verlust Ihres Telefons oder Ihres Sicherheitsschlüssels), kann der Zugang zu Ihrem Kundencenter gesperrt werden.
>

### Schritt 3: Verbinden Sie sich unter Verwendung der Zwei-Faktor-Authentifizierung mit dem Kundencenter

Sobald die Zwei-Faktor-Authentifizierung aktiviert ist, zeigt das Anmeldefenster die gewählte Sicherheitsmethode an. Falls Sie eine andere Methode verwenden möchten, klicken Sie auf `Eine andere Methode wählen`{.action}.

![2FA](images/2fasmsloginedit.png){.thumbnail}

Alle von Ihnen aktivierten Methoden werden nun angezeigt:

![2FA](images/2faloginchoice.png){.thumbnail}

### Was soll ich tun, wenn eines meiner Peripheriegeräte verloren geht oder nicht mehr funktioniert?

Wenn Ihr Peripheriegerät (Mobiltelefon/Smartphone/Sicherheitsschlüssel) verloren geht oder nicht mehr funktioniert, empfehlen wir Ihnen, die anderen für Ihren Account aktiven Methoden der Zwei-Faktor-Authentifizierung zu nutzen.

Auch können Sie einen der Sicherheitscodes verwenden, die Ihnen zur Verfügung gestellt wurden. 

### Ein Peripheriegerät entfernen, das mit der Zwei-Faktor-Authentifizierung verbunden ist <a name="delete-device"></a>

> [!warning]
>
> Das Entfernen eines Peripheriegerätes deaktiviert nicht die Zwei-Faktor-Authentifizierung. 
> 
> Um den Zugang zu Ihrem Account nicht zu sperren, vergewissern Sie sich vor dem Entfernen eines Peripheriegeräts, dass Sie eine der folgenden Möglichkeiten zur Verfügung haben:
> 
> - ein funktionstüchtiges Peripheriegerät;
> 
> - eine alternative, funktionierende Methode der Zwei-Faktor-Authentifizierung;
> 
> - gültige Sicherheitscodes.
> 

Loggen Sie sich in Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) ein, um ein Peripheriegerät zu entfernen. Klicken Sie auf Ihren Namen oben rechts (Schritt 1 auf dem Bild unten), und klicken Sie dann auf Ihre Initialen (Schritt 2). 

![2FA](images/hub2FAb.png){.thumbnail}

Klicken Sie danach auf `Sicherheit`{.action} (Schritt 1 auf dem Bild unten), dann auf `...`{.action} (Schritt 2) rechts vom Peripheriegerät, das Sie entfernen möchten, und schließlich auf `Löschen`{.action} (Schritt 3).

![2FA](images/hub2FAc.png){.thumbnail}

### Die Zwei-Faktor-Authentifizierung vollständig deaktivieren <a name="disable-2fa"></a>

#### Wenn Sie noch Zugriff auf Ihr OVHcloud Kundencenter haben

Um die Zwei-Faktor-Authentifizierung für Ihren OVHcloud Kunden-Account vollständig zu deaktivieren, müssen **alle** hierfür registrierten Geräte gelöscht **und die Notfall-Codes deaktiviert werden**.

Um die Peripheriegeräte zu entfernen, lesen Sie den [entsprechenden Abschnitt dieser Anleitung](#delete-device).

Wenn alle Ihre Geräte gelöscht sind, deaktivieren Sie die Notfall-Codes, indem Sie auf den Button `2FA-Codes deaktivieren`{.action} klicken.

![2FA Codes](images/disabling-codes.png){.thumbnail}

#### Wenn Sie keinen Zugriff mehr auf Ihr OVHcloud Kundencenter haben

Wenn keinen Zugriff auf validierte Geräte und auch keine gültigen Notfall-Codes mehr haben, können Sie die Zwei-Faktor-Authentifizierung deaktivieren, indem Sie unsere Support-Teams kontaktieren.

Bevor Sie uns kontaktieren, bereiten Sie bitte folgende Unterlagen vor:

|OVHcloud Account-Typ|Vorzulegende Nachweise|
|---|---|
|Privatperson|- Beidseitige Kopie eines Identitätsnachweises (Personalausweis, Führerschein, Reisepass), ausgestellt auf den Inhaber des OVHcloud Kunden-Accounts|
|Unternehmen|- Identitätsnachweis (Personalausweis, Führerschein, Reisepass) der zur Vetretung des Unternehmens berechtigten Person (sensible Daten können unkenntlich gemacht werden, nur der vollständige Name und das Ablaufdatum müssen sichtbar sein)<br><br>- Handelsregisterauszug des Unternehmens|

Kontaktieren Sie den OVHcloud Support unter +49 681 906730, sobald Ihre entsprechenden Nachweise vollständig vorliegen.

> [!warning]
>
>  Die Dokumente müssen uns von einer E-Mail-Adresse aus übermittelt werden, die in Ihrem OVHcloud Kunden-Account hinterlegt ist.

Nach Überprüfung Ihrer Unterlagen kann ein Support-Mitarbeiter die Zwei-Faktor-Authentifizierung manuell aus Ihrem OVHcloud Kunden-Account entfernen.

## Weiterführende Informationen

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
