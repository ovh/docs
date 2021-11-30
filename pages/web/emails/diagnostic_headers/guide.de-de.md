---
title: 'E-Mail-Header extrahieren'
excerpt: 'Erfahren Sie hier, wie Sie die Header von E-Mails einsehen können'
slug: webhosting_e-mail_anleitung_zum_abruf_der_e-mail-header
section: Diagnose
order: 03
legacy_guide_number: g1365
---

<style>
 pre {
     font-size: 14px;
 }
 pre.console {
   background-color: #fff; 
   color: #000;
   font-family: monospace;
   padding: 5px;
   margin-bottom: 5px;
 }
 pre.console code {
   border: solid 0px transparent;
   font-family: monospace !important;
   font-size: 0.90em;
   color: #000;
 }
 .small {
     font-size: 0.90em;
 }
</style>

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie beim geringsten Zweifel die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button «Mitmachen» auf dieser Seite.
>


**Letzte Aktualisierung am 19.11.2021**

## Ziel

Ein E-Mail-Header dient dazu, den Weg, den die E-Mail vom Absender bis zum Empfänger im Netzwerk genommen hat, nachzuverfolgen.<br>
Er ermöglicht unter anderem die Identifizierung einer schädlichen E-Mail oder die Erkennung einer Empfangsverzögerung.

Jede empfangene E-Mail verfügt über einen Header, der aber nicht angezeigt wird, wenn Sie Ihre E-Mail einsehen. Sie können ihn jedoch mit Ihrem E-Mail-Client oder in Ihrem Webmail-Interface abrufen.

Sie können die gesamte E-Mail auch als `.eml` Datei exportieren. Diese Datei kann beispielweise angefordert werden, um eine unerwünschte E-Mail zu analysieren, die Sie erhalten haben.<br>
Um eine `.eml` Datei abzurufen, gehen Sie direkt zum Abschnitt [Webmail](#webmail).

**Hier erfahren Sie, wie Sie einen E-Mail-Header auf Ihrem E-Mail-Client abrufen.**

## Voraussetzungen

- Sie verfügen über eine E-Mail-Adresse auf einer [unserer OVHcloud E-Mail](https://www.ovhcloud.com/de/emails/)-Lösungen oder eine externe Lösung.
- Sie haben über Webmail oder ein E-Mail-Programm Zugriff auf die E-Mail-Adresse.

## In der praktischen Anwendung

### Inhalt eines Headers verstehen

Der Header besteht aus mehreren Elementen, die den Verlauf der E-Mail anzeigen. Es besteht aus Hierarchieelementen, die antichronitisch sind, von den neuesten bis zu den ältesten, sowie aus zusätzlichen Informationen.<br>
Im Folgenden finden Sie eine nicht erschöpfende Liste der Elemente, aus denen ein Header bestehen kann, sowie deren Bedeutung. 

- Der `Received` Eintrag ist im Header bei jedem Umzug der E-Mail auf einen Versendungsserver (SMTP) enthalten. Der Hostname des Servers wird in der Regel mit seiner IP-Adresse und dem Datum angegeben. Die Einträge für `Received` sind von der letzten Umstellung auf die älteste Umstellung auf einem Server sortiert:

<pre class="console"><code>
Received: from mxplan7.mail.ovh.net (unknown [10.109.143.250])
	by mo3005.mail-out.ovh.net (Postfix) with ESMTPS id 448F4140309
	for &ltjohn@mydomain.ovh&gt ; Wed, 30 Jun 2021 13:12:40 +0000 (UTC)
</code></pre>
*Hier wurde die E-Mail vom Server mxplan7.mail.ovh.net zum Server mo3005.mail-out.ovh.net am 30\. Juni 2021 um 13:12:40 Uhr (UTC-Zeitzone) übertragen*

- Der `Return-Path` Eintrag entspricht der Rücksendeadresse, wenn der Versand der Nachricht fehlgeschlagen ist. Die Rücksendeadresse ist im Allgemeinen diejenige, die den Versand durchgeführt hat. 

<pre class="console"><code>
Return-Path: &ltjohn@mydomain.ovh&gt
</code></pre>

- Der `From`-Eintrag bezeichnet die Adresse des Absenders der E-Mail und seinen Anzeigenamen.

<pre class="console"><code>
From: John &ltjohn@mydomain.ovh&gt
</code></pre>

- Der `To`-Eintrag bezeichnet die Adresse des E-Mail-Empfängers und den Anzeigenamen.

<pre class="console"><code>
To: Robert &ltrobert@hisdomain.ovh&gt 
</code></pre>

- Der `Betreff` bezieht sich auf den Betreff der E-Mail.

<pre class="console"><code>
Subject: Hello my friend
</code></pre>

- Der Eintrag `Message-ID` bezeichnet die eindeutige Kennung der E-Mail und endet mit dem Namen des Versendungsservers (hinter dem@"). 

<pre class="console"><code>
Message-ID: &ltDc55+mK3j7hdZkf5_r-ff=fjq380ozc2h5@mailserver.domain.ovh&gt
</code></pre>

- Im Feld `Received-SPF` wird das Ergebnis der [SPF](https://docs.ovh.com/de/domains/webhosting_spf-eintrag/)-Überprüfung des Domainnamens des Absenders angezeigt. Mit dem `client-ip`-Argument wird unter anderem die IP-Adresse des Servers ermittelt, der für den Versand der E-Mail verwendet wurde. 

<pre class="console"><code>
Received-SPF: Pass (mailfrom) identity=mailfrom; client-ip=000.11.222.33; helo=mail-smtp-001.domain.ovh; envelope-from=john@mydomain.ovh; receiver=robert@hisdomain.ovh 
</code></pre>

- Die `X-`Einträge sind personalisierte Felder und dienen als Ergänzung zu den Standardfeldern. Sie werden implementiert durch die Server, auf denen die E-Mails übertragen werden.

<pre class="console"><code>
X-OVH-Remote: 000.11.222.33 (mail-smtp-001.domain.ovh)
X-Ovh-Tracer-Id: 1234567891011121314
X-VR-SPAMSTATE: OK
X-VR-SPAMSCORE: 0
X-VR-SPAMCAUSE: 
</code></pre>

### Header auf einem E-Mail-Programm abrufen

#### Microsoft Outlook 

Um den Header anzuzeigen, öffnen Sie die E-Mail Ihrer Wahl mit einem Doppelklick.

Klicken Sie im neuen Fenster oben rechts auf `Datei`{.action}.

![E-Mails](images/outlook01.png){.thumbnail}

Wählen Sie dann links `Informationen`{.action} aus und klicken Sie auf `Eigenschaften`{.action}.

![E-Mails](images/outlook02.png){.thumbnail}

Der vollständige Header der E-Mail wird unten angezeigt. Sie können den gesamten Text auswählen und in eine Datei kopieren.

![E-Mails](images/outlook03.png){.thumbnail}

#### Mozilla Thunderbird

Um den Header anzuzeigen, öffnen Sie die E-Mail Ihrer Wahl und drücken Sie dann gleichzeitig auf die Tasten `Ctrl` und `U`.

![E-Mails](images/thunderbird01.png){.thumbnail}

Der vollständige Header der E-Mail wird in einem separaten Fenster angezeigt. Sie können den gesamten Text auswählen und in eine Datei kopieren.

#### macOS Mail

Um den Header anzuzeigen, öffnen Sie die E-Mail Ihrer Wahl. Öffnen Sie `Ansicht`{.action} und dann `Nachricht`{.action} und klicken Sie auf `Alle Header`{.action}.

![E-Mails](images/mailmac01.png){.thumbnail}

Der vollständige Header der E-Mail wird in einem separaten Fenster angezeigt. Sie können den gesamten Text auswählen und in eine Datei kopieren.

### Header von Webmail aus abrufen <a name="webmail"></a>

#### Roundcube

##### **Header anzeigen**

Um den Header anzuzeigen, öffnen Sie die E-Mail Ihrer Wahl. Klicken Sie auf den Button `... Mehr`{.action} und auf `< > Quelle anzeigen`{.action}.

![E-Mails](images/roundcube01.png){.thumbnail}

Es öffnet sich ein neues Fenster mit dem vollständigen Header der E-Mail. Sie können den gesamten Text auswählen und in eine Datei kopieren.

##### **.eml Datei speichern**

Um die Datei `.eml` herunterzuladen wählen Sie eine E-Mail aus. Klicken Sie auf den `... Mehr`{.action} Danach auf `Download (.eml)`{.action}.

![E-Mails](images/roundcube02.png){.thumbnail}

#### Outlook Web Application (OWA) <a name="owa"></a>

##### **Header anzeigen**

Wählen Sie die E-Mail aus, deren Header Sie anzeigen möchten. Klicken **Sie auf den Pfeil** rechts neben `Allen antworten`{.action} und dann `auf Details der Nachricht anzeigen`{.action}. Es öffnet sich ein neues Fenster mit dem vollständigen Header der E-Mail, um diese herunterzuladen.

![E-Mails](images/owa01.png){.thumbnail}

##### **.eml Datei speichern**

Um die Datei `.eml` herunterzuladen klicken Sie auf `(+) Neu`{.action}, um eine neue E-Mail zu erstellen. 

Wählen Sie die E-Mail aus, die Sie extrahieren möchten, und fügen Sie sie in den Inhalt der neuen Nachricht ein. 

Klicken Sie auf den Pfeil, der neben dem Anhang, den Sie gerade erstellt haben, nach unten zeigt, und klicken Sie dann auf `Download`{.action}, um die Datei auf Ihrer Maschine zu speichern.

![E-Mails](images/owa02.gif){.thumbnail}

### Header von einem anderen E-Mail-Client abrufen

#### Gmail

Um den Header abzurufen, wählen Sie die betreffende E-Mail aus und klicken Sie auf die 3 vertikalen Punkte rechts. Klicken Sie dann auf `Quelle anzeigen`{.action} um ein neues Fenster mit dem vollständigen Header der E-Mail zu öffnen, den Sie auch im Format `.eml` herunterladen können.

![E-Mails](images/gmail01.png){.thumbnail}

#### Outlook.com

Um den Header im Webmail-Interface <Outlook.com> anzuzeigen, verwenden Sie den Abschnitt [Outlook Web Application](#owa) dieser Anleitung.

## Weiterführende Informationen

[E-Mail FAQ](https://docs.ovh.com/de/emails/e-mails-faq/)

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
