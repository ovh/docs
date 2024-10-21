---
title: 'E-Mail Alias und Weiterleitung verwenden'
excerpt: 'Erfahren Sie hier, wie Sie E-Mail Aliase und Weiterleitungen verwalten'
updated: 2024-06-10
---

<style>
.w-640 {
  max-width:640px !important;
}
</style>

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie im Zweifelsfall die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button "Beitragen" auf dieser Seite.
>

## Ziel

In dieser Anleitung finden Sie Informationen und Instruktionen zur Konfiguration von **Weiterleitungen** und **Aliasen** für Ihre E-Mail-Lösung, zum Beispiel um auf einem Account A empfangene E-Mails an eine Adresse B weiterzuleiten.

![emails](images/schema-redirect00.png){.thumbnail}

**Diese Anleitung erklärt, wie Sie E-Mail Aliase und Weiterleitungen konfigurieren.**

### Was ist eine E-Mail-Weiterleitung?

Klicken Sie auf die Tabs, um die Funktionsweise von Aliasnamen und Weiterleitungen anzuzeigen.

- `From` ist die Absenderadresse.
- `To` ist die Adresse des Empfängers.
- `Redirect to` ist die Ziel-E-Mail-Adresse der Weiterleitung.

> [!tabs]
> **1. Einfache Weiterleitung**
>>
>> Die E-Mail wird direkt an die Weiterleitungsadresse gesendet, der ursprüngliche Empfänger-Account erhält die E-Mail nicht.<br><br>
>>![E-Mails](images/schema-redirect01.png){.thumbnail}
>>
> **2. Weiterleitung mit lokaler Kopie**
>>
>> Sowohl der ursprüngliche Empfänger als auch der Ziel-Account der Weiterleitung erhalten die E-Mail.<br><br>
>> ![emails](images/schema-redirect02.png){.thumbnail}
>>
> **3. E-Mail Alias**
>>
>> Die E-Mail wird an die Alias-Adresse gesendet und von dem E-Mail-Account empfangen, für den der Alias konfiguriert wurde. Die Angabe `Received by` ist der Account, der die E-Mail empfängt.<br><br>
>> ![emails](images/schema-redirect03.png){.thumbnail}
>>

> [!primary]
>
> Es ist möglich, eine Weiterleitung auf mehrere E-Mail-Adressen einzurichten. Dazu müssen die Weiterleitungen zu jedem Empfängern einzeln erstellt werden.

## Voraussetzungen

- Sie verfügen über eine bereits konfigurierte OVHcloud E-Mail-Lösung: [**Hosted Exchange**](/links/web/emails-hosted-exchange), [**Email Pro**](/links/web/email-pro) oder **MX Plan** (enthalten in einem [Webhosting](/links/web/hosting) oder [Kostenloses Hosting 100M](/links/web/domains-free-hosting) oder separat bestellt).
- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](/links/manager).

## In der praktischen Anwendung

> [!warning]
>
> Die Abschnitte "[Weiterleitung erstellen](#redirect)" und "[Alias erstellen](#alias)" betreffen alle OVHcloud E-Mail-Angebote, außer in diesen beiden **Sonderfällen**:
>
> - Sie verfügen über einen MX Plan Legacy (siehe unten).
> - Sie haben einen bei OVHcloud registrierten Domainnamen ohne einen damit verbundenen E-Mail-Dienst.
>
> Bei beiden Ausnahmen ist nur die Weiterleitung möglich. Lesen Sie dazu den Abschnitt "[Weiterleitung oder Alias mit MX Plan Legacy oder für einen Domainnamen ohne E-Mail-Dienst konfigurieren](#mxplanlegacy)".

>
> Je nach Aktivierungsdatum Ihres MX Plans oder falls Ihr Dienst kürzlich migriert wurde, haben Sie entweder die historische oder die neue Version dieses Dienstes. Bevor Sie fortfahren, identifizieren Sie Ihre Dienstversion.<br>
>
> Loggen Sie sich hierfür in Ihr [OVHcloud Kundencenter](/links/manager) ein und gehen Sie zum Bereich `Web Cloud`{.action}. Öffnen Sie `E-Mails`{.action} in der Seitenleiste und wählen Sie den Namen des betreffenden MX Plans aus. Identifizieren Sie Ihre Version gemäß der folgenden Tabelle:<br>
>
> |MX Plan Legacy|Neue MX Plan Version|
> |---|---|
> |![E-Mail](images/mxplan-starter-legacy.png){.thumbnail}<br>Die Dienstbezeichnung steht im Rahmen **Abo** rechts. MX Plan Legacy *hat keine* Server-Referenz.|![E-Mail](images/mxplan-starter-new.png){.thumbnail}<br>Das neue Angebot hat eine **Server-Referenz** im Rahmen **Zusammenfassung** links.|
> |Fahren Sie fort mit "[MX Plan Legacy](#mxplanlegacy)".|Fahren Sie fort mit "[Weiterleitung erstellen](#redirect)" oder "[Alias erstellen](#alias)".|

### Weiterleitung erstellen <a name="redirect"></a>

Die Verwaltung von Weiterleitungen erfolgt nicht im Kundencenter, sondern über Webmail, nachdem Sie sich in den betreffenden E-Mail-Account eingeloggt haben.

Öffnen Sie [Webmail](/links/web/email). Geben Sie **E-Mail-Adresse** und **Passwort** ein, um sich einzuloggen.

![E-Mails](images/webmail.png){.thumbnail}

In diesem Beispiel handelt es sich um eine **Weiterleitung mit lokaler Kopie** (siehe [Schema 2](#diagram) zu Beginn dieser Anleitung). Wenn das Ihre gewünschte Einstellung ist, klicken Sie links oben auf `OK`{.action} (Diskettensymbol) und die Regel wird angewendet. Ist das nicht der Fall, gehen Sie zum nächsten Schritt über.

Folgen Sie den Anleitungsschritten, indem Sie nacheinander die Tabs aufrufen:

> [!tabs]
> **Schritt 1**
>>
>> Wenn Sie sich im [Webmail](/links/web/email) Ihres E-Mail-Accounts eingeloggt haben, klicken Sie oben rechts auf das Zahnrad und dann auf `Optionen`{.action}.<br><br>
>> ![E-Mails](images/emails-all-01.png){.thumbnail}<br>
>>
> **Schritt 2**
>>
>> In den **Optionen** der linken Navigationsstruktur finden Sie den Bereich **Automatische Verarbeitung**. Klicken Sie hier auf `Posteingangs- und Aufräumregeln`{.action}. <br><br>
>> ![E-Mails](images/emails-all-02.png){.thumbnail}<br><br>
>> Hier können Sie Weiterleitungen verwalten sowie Filter auf alle eingehenden E-Mails anwenden.<br>
>>
> **Schritt 3**
>>
>> Klicken Sie im Verwaltungsfenster für **Posteingangsregeln** oben links auf das `+`{.action}-Symbol.<br><br>
>> ![E-Mails](images/emails-all-03.png){.thumbnail}<br><br>
>>
> **Schritt 4**
>>
>> **Name**: Geben Sie einen Namen für die Weiterleitung ein.<br>
>> **Wenn die Nachricht eintrifft und alle Bedingungen erfüllt**: Wenn Ihre Weiterleitung für alle Mails gilt, wählen Sie `[Auf alle Nachrichten anwenden]`{.action}.<br><br>
>>![E-Mails](images/emails-all-04.png){.thumbnail .w-640}<br><br>
>>
> **Schritt 5**
>>
>> **Alle folgenden Operationen ausführen**: Hier wenden Sie die Weiterleitung an. Wählen Sie `Weiterleiten, Umleiten oder Senden`{.action} und `Weiterleiten der Nachricht an...`{.action}.<br><br>
>>![E-Mails](images/emails-all-05.png){.thumbnail .w-640}<br><br>
>>
> **Schritt 6**
>>
>> Geben Sie anschließend die Adresse, an die Sie E-Mails weiterleiten möchten im Feld "**Weiterleiten der Nachricht an...**" ein und klicken Sie dann auf `Speichern`{.action}. Klicken Sie dann auf `OK`{.action} (Diskettensymbol), um die Weiterleitung zu erstellen.<br><br>
>>![E-Mails](images/emails-all-06.png){.thumbnail .w-640}<br><br>
>>

> [!primary]
>
> Um eine einfache **Weiterleitung** (siehe [Abbildung 1](#diagram) am Anfang dieser Anleitung) anzuwenden, fügen Sie in diesem Fenster eine zusätzliche Regel zu Ihrer **Weiterleitung mit lokaler Kopie** hinzu. Klicken Sie auf `Aktion hinzufügen`{.action} (Box 1) , dann auf **Verschieben, kopieren oder löschen** und klicken Sie dann auf **Nachricht löschen**. Mit dieser Regel wird die E-Mail direkt im Papierkorb abgelegt, nachdem sie an die Weiterleitungsadresse versendet wurde.<br><br>
> ![emails](images/emails-all-07.png){.thumbnail .w-640}

### Weiterleitung löschen

Folgen Sie den Anweisungen, indem Sie nacheinander auf die einzelnen Registerkarten klicken:

> [!tabs]
> **Schritt 1**
>>
>> Wenn Sie sich im [Webmail](/links/web/email) Ihres E-Mail-Accounts eingeloggt haben, klicken Sie oben rechts auf das Zahnrad und dann auf `Optionen`{.action}.<br><br>
>> ![emails](images/emails-all-01.png){.thumbnail}<br>
>>
> **Schritt 2**
>> In den **Optionen** der linken Navigationsstruktur finden Sie den Bereich **Automatische Verarbeitung**. Klicken Sie hier auf `Posteingangs- und Aufräumregeln`{.action}. <br><br>
>> ![emails](images/owa-redirect-del-01.png){.thumbnail}<br><br>
>> Dieser Abschnitt enthält die Optionen zum Verwalten der Weiterleitungen und Filter.<br>
>>
> **Schritt 3**
>>
>> Klicken Sie im Verwaltungsfenster für **Posteingangsregeln** auf die zu löschende Weiterleitung, um sie zu markieren. Klicken Sie dann auf das Papierkorbsymbol.<br><br>
>> ![emails](images/owa-redirect-del-02.png){.thumbnail}<br><br>
>>

### Alias erstellen <a name="alias"></a>

Loggen Sie sich in Ihr [OVHcloud Kundencenter](/links/manager) ein und gehen Sie zum Bereich `Web Cloud`{.action}. Wählen Sie links im Menü je nach Ihrem E-Mail-Angebot aus:

- **Exchange**: Öffnen Sie `Microsoft`{.action}, dann `Exchange`{.action} und wählen Sie den Dienst aus. Klicken Sie auf den Tab `E-Mail-Accounts`{.action}.

- **E-Mail Pro**: Öffnen Sie `E-Mail Pro`{.action} und wählen Sie den Dienst aus. Klicken Sie auf den Tab `E-Mail-Accounts`{.action}.

- **E-Mails** (MX Plan): Öffnen Sie `E-Mails`{.action} und wählen Sie den Dienst aus. Klicken Sie auf den Tab `E-Mail-Accounts`{.action}.

Um einen Alias zu Ihrem E-Mail-Account hinzuzufügen, folgen Sie den Anleitungsschritten indem Sie nacheinander die Tabs öffnen:

> [!tabs]
> **Schritt 1**
>>
>> In der Tabelle finden Sie die Spalte `Alias`.<br><br>
>> ![E-Mails](images/email-alias012.png){.thumbnail}<br>
>>
> **Schritt 2**
>>
>> Klicken Sie auf den Button `...`{.action} und dann auf `Alias verwalten`{.action} (oder `Verwaltung der Alias`{.action}).<br><br>
>> ![E-Mails](images/email-alias02.png){.thumbnail}<br>
>>
> **Schritt 3**
>>
>> Klicken Sie auf `Alias hinzufügen`{.action}. Geben Sie hier die Adresse ein, die Sie als Alias einrichten möchten und bestätigen Sie.<br><br>
>> ![E-Mails](images/email-alias03.png){.thumbnail}<br>

### Alias löschen

Klicken Sie im Tab `E-Mail-Accounts`{.action} auf `...`{.action} in der Zeile des betreffenden E-Mail-Accounts. Klicken Sie anschließend auf `Alias verwalten`{.action} (oder `Verwaltung der Alias`{.action}).

Klicken Sie in der Zeile des betreffenden Alias auf den Button `...`{.action} und  wählen Sie `Alias löschen`{.action} aus.

![E-Mails](images/email-alias04.png){.thumbnail}

### Weiterleitung oder Alias mit MX Plan Legacy oder für einen Domainnamen ohne E-Mail-Dienst konfigurieren <a name="mxplanlegacy"></a>

Loggen Sie sich in Ihr [OVHcloud Kundencenter ein](/links/manager) und gehen Sie in den Bereich `Web Cloud`. Öffnen Sie links im Menü `E-Mails`{.action}.

> [!warning]
>
> - Die Methode zur Erstellung eines Alias oder einer Weiterleitung ist dieselbe.
> - Es können maximal 2000 Aliase und Weiterleitungen erstellt werden, einschließlich lokaler Kopien.
>

Folgen Sie den Anleitungsschritten, indem Sie nacheinander die Tabs aufrufen:

> [!tabs]
> **Schritt 1**
>>
>> Wenn Sie Ihren MX Plan aufrufen, gelangen Sie zuerst zum Tab `Allgemeine Informationen`{.action}. Klicken Sie auf den Tab `E-Mails`{.action} und dann rechts auf den Button `Verwaltung der Weiterleitungen`{.action}.<br><br>
>> ![E-Mails](images/mxplan-legacy-1.png){.thumbnail}<br>
>>
> **Schritt 2**
>>
>> Es wird eine Tabelle mit bereits aktiven Weiterleitungen angezeigt. Klicken Sie rechts auf den Button `Weiterleitung hinzufügen`{.action}.<br><br>
>>
>> > [!primary]
>> >
>> > Um eine Weiterleitung zu bearbeiten oder zu löschen, klicken Sie auf `...`{.action} rechts neben der betreffenden Weiterleitung.
>>
>> ![E-Mails](images/mxplan-legacy-2.png){.thumbnail}<br>
>>
> **Schritt 3**
>>
>> **Von der Adresse**: Geben Sie hier die E-Mail-Adresse ein, von der aus weitergeleitet werden soll.<br><br>
>> **Zur Adresse**: Geben Sie hier die Ziel-Adresse Ihrer Weiterleitung ein. Hierbei kann es sich um eine Ihrer OVHcloud E-Mail-Adressen oder eine externe Adresse handeln.<br><br>
>> **Wählen Sie einen Kopiermodus**: Wählen Sie Ihre gewünschte Option aus: <br> - **Eine Kopie der E-Mail bei OVHcloud aufbewahren** (E-Mail auf der Haupt- und Weiterleitungsadresse erhalten)<br> *vgl. [Schema 2](#diagram) am Anfang dieser Anleitung.*<br><br> - **Keine Kopie der Mail aufbewahren** (direkt an die Weiterleitungsadresse weiterleiten, ohne dass die Hauptadresse diese empfängt) <br> *vgl. [Schema 1](#diagram) am Anfang dieser Anleitung.*<br><br>
>> Klicken Sie anschließend auf `Bestätigen`{.action}, um die Weiterleitung einzurichten.<br><br>
>> ![E-Mails](images/mxplan-legacy-3.png){.thumbnail}

> [!primary]
>
> Wenn Sie den Kopiermodus "**Eine Kopie der E-Mail bei OVHcloud aufbewahren**" wählen, wird automatisch eine Weiterleitung der E-Mail-Adresse auf sich selbst in der Liste der Weiterleitungen erstellt. Dies erzeugt die lokalen Kopien der E-Mails.
> 

### Eine Weiterleitung oder einen Alias für Legacy MX Plan oder einen Domainnamen ohne E-Mail-Dienst löschen <a name=„del-mxplanlegacy“></a>

Klicken Sie im Tab `E-Mails`{.action} rechts auf `Verwaltung der Weiterleitungen`{.action}.

Klicken Sie auf den Button `...`{.action} in der Zeile der Weiterleitung und dann auf `Weiterleitung löschen`{.action}.

> [!warning]
>
> Weiterleitungen oder Aliase können nicht bearbeitet werden. Sie müssen sie löschen und dann neu erstellen.

![emails](images/email-del-legacy-redirect01.png){.thumbnail}

## Weiterführende Informationen <a name="go-further"></a>

Kontaktieren Sie für spezialisierte Dienstleistungen (SEO, Web-Entwicklung etc.) die [OVHcloud Partner](/links/partner).

Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, beachten Sie unsere [Support-Angebote](/links/support).

Treten Sie unserer [User Community](https://community.ovh.com/en/) bei.
