---
title: "E-Mail-Header und .eml-Datei abrufen"
excerpt: "Erfahren Sie, wie Sie einen E-Mail-Header oder eine .eml-Datei aus Ihrem E-Mail-Client, Webmail oder einer externen Anwendung abrufen"
updated: 2026-03-06
---

<style>
 pre {
     font-size: 14px !important;
 }
 pre.bgwhite {
   background-color: #fff !important;
   color: #000 !important;
   font-family: monospace !important;
   padding: 5px !important;
   margin-bottom: 5px !important;
 }
 pre.bgwhite code {
   background-color: #fff !important;
   border: solid 0px transparent !important;
   font-family: monospace !important;
   font-size: 0.90em !important;
   color: #000 !important;
 }
 .small {
     font-size: 0.90em !important;
 }
</style>

## Ziel

Ein E-Mail-Header zeichnet den Weg nach, den eine E-Mail im Netzwerk vom Absender zum Empfänger zurücklegt.<br>
Er ermöglicht es, eine schädliche E-Mail zu identifizieren oder Empfangsverzögerungen zu erkennen.

Jede empfangene E-Mail hat einen Header (*header*), der beim Lesen der E-Mail nicht standardmäßig angezeigt wird. Sie können ihn jedoch über Ihren E-Mail-Client oder Ihr Webmail abrufen.

Sie können die gesamte E-Mail auch als `.eml`-Datei exportieren. Diese Datei kann angefordert werden, um eine schädliche E-Mail zu analysieren, die Sie erhalten haben.<br>
Um eine `.eml`-Datei abzurufen, lesen Sie den Abschnitt [Webmail](#webmail).

**Erfahren Sie, wie Sie einen E-Mail-Header abrufen und eine .eml-Datei aus Ihrem E-Mail-Client exportieren.**

## Voraussetzungen

- Sie verfügen über eine E-Mail-Adresse mit einer unserer [OVHcloud E-Mail-Lösungen](/links/web/emails) oder einer externen Lösung.
- Sie haben über Webmail oder eine E-Mail-Software Zugriff auf die E-Mail-Adresse.

## In der praktischen Anwendung

### Inhalt eines Headers verstehen

Der Header setzt sich aus mehreren Elementen zusammen, die den Weg der E-Mail anzeigen. Diese sind in umgekehrter chronologischer Reihenfolge angeordnet, zusammen mit zusätzlichen Informationen.<br>
Im Folgenden finden Sie eine nicht erschöpfende Liste der Elemente, aus denen ein Header bestehen kann, sowie deren Bedeutung.

- Das Feld `Received` ist im Header bei jedem Durchgang der E-Mail über einen Sendeserver (SMTP) vorhanden. Es enthält in der Regel den Hostnamen des Servers mit seiner IP-Adresse und dem Datum. Die `Received`-Felder sind vom neuesten zum ältesten Durchgang sortiert:
<pre class="bgwhite"><code>
Received: from MX Plan7.mail.ovh.net (unknown [10.109.143.250])
	by mo3005.mail-out.ovh.net (Postfix) with ESMTPS id 448F4140309
	for &lt;john@mydomain.ovh&gt; ;Wed, 30 Jun 2021 13:12:40 +0000 (UTC)
</code></pre>
  *Hier wurde die E-Mail vom Server MX Plan7.mail.ovh.net an den Server mo3005.mail-out.ovh.net am 30. Juni 2021 um 13:12:40 Uhr (Zeitzone UTC) übertragen.*

- Das Feld `Return-Path` entspricht der Rücksendeadresse, wenn der Versand der Nachricht fehlgeschlagen ist. Die Rücksendeadresse ist in der Regel die des Absenders.
<pre class="bgwhite"><code>
Return-Path: &lt;john@mydomain.ovh&gt;
</code></pre>

- Das Feld `From` gibt die Adresse des Absenders der E-Mail und den Anzeigenamen an.
<pre class="bgwhite"><code>
From: John &lt;john@mydomain.ovh&gt;
</code></pre>

- Das Feld `To` gibt die Adresse des Empfängers der E-Mail und den Anzeigenamen an.
<pre class="bgwhite"><code>
To: Robert &lt;robert@hisdomain.ovh&gt;
</code></pre>

- Das Feld `Subject` gibt den Betreff der E-Mail an.
<pre class="bgwhite"><code>
Subject: Hello my friend
</code></pre>

- Das Feld `Message-ID` gibt die eindeutige Kennung der E-Mail an und endet mit dem Namen des Sendeservers (nach dem "@").
<pre class="bgwhite"><code>
Message-ID: &lt;Dc55+mK3j7hdZkf5_r-ff=fjq380ozc2h5@mailserver.domain.ovh&gt;
</code></pre>

- Das Feld `Received-SPF` zeigt das Ergebnis der [SPF](/pages/web_cloud/domains/dns_zone_spf)-Prüfung an, die auf den Domainnamen des Absenders durchgeführt wurde. Mit dem Argument `client-ip` lässt sich die IP-Adresse des Servers ermitteln, der die E-Mail gesendet hat.
<pre class="bgwhite"><code>
Received-SPF: Pass (mailfrom) identity=mailfrom; client-ip=000.11.222.33; helo=mail-smtp-001.domain.ovh; envelope-from=john@mydomain.ovh; receiver=robert@hisdomain.ovh
</code></pre>

- Die `X-`-Felder sind benutzerdefinierte Felder, die die Standardfelder ergänzen. Sie werden von den Servern implementiert, über die die E-Mails übertragen werden.
<pre class="bgwhite"><code>
X-OVH-Remote: 000.11.222.33 (mail-smtp-001.domain.ovh)
X-Ovh-Tracer-Id: 1234567891011121314
X-VR-SPAMSTATE: OK
X-VR-SPAMSCORE: 0
X-VR-SPAMCAUSE:
</code></pre>

### Header über einen E-Mail-Client abrufen

#### Microsoft Outlook

##### **Header abrufen**

Es gibt zwei Versionen von Outlook für Windows: **Klassisches Outlook** und das **Neue Outlook**. Um Ihre Version zu identifizieren, geben Sie "Outlook" in die Windows-Suchleiste ein. Wenn die Bezeichnung "(klassisch)" angezeigt wird, verwenden Sie Klassisches Outlook. Andernfalls handelt es sich um das Neue Outlook.

![Outlook Windows - Version identifizieren](images/outlook-windows-identify01.png){.thumbnail .h-500}

**Klassisches Outlook:**

1. Doppelklicken Sie auf die E-Mail, um sie in einem separaten Fenster zu öffnen.
2. Klicken Sie im neuen Fenster oben links auf `Datei`{.action}.
3. Wählen Sie links `Info`{.action} aus und klicken Sie auf `Eigenschaften`{.action}.
4. Der vollständige E-Mail-Header wird im unteren Bereich angezeigt. Markieren Sie den gesamten Text und kopieren Sie ihn in eine Datei.

![Vollständiger Header in Outlook](images/classic-outlook-01.png){.thumbnail}

**Neues Outlook:**

1. Öffnen Sie die E-Mail Ihrer Wahl.
2. Klicken Sie mit der **rechten Maustaste** auf die E-Mail.
3. Wählen Sie `Ansicht`{.action} und dann `Nachrichtendetails anzeigen`{.action}.
4. Der vollständige E-Mail-Header wird im Detailbereich der Nachricht angezeigt. Markieren Sie den gesamten Text und kopieren Sie ihn in eine Datei.

![Vollständiger Header in Outlook](images/new-outlook-01.png){.thumbnail}

##### **.eml-Datei abrufen**

**Klassisches Outlook:**

1. Wählen Sie die E-Mail in Ihrem Posteingang aus (öffnen Sie sie nicht).
2. Klicken Sie in der Menüleiste auf `Datei`{.action}.
3. Klicken Sie auf `Speichern unter`{.action}.
4. Wählen Sie im Dropdown-Menü "Dateityp" die Option **Outlook-Nachrichtenformat - Unicode (.msg)** aus. Wählen Sie einen Speicherort auf Ihrem Computer (z. B. den Desktop) und klicken Sie auf `Speichern`{.action}.

Sie können die E-Mail auch per **Drag & Drop** aus Ihrem Posteingang direkt auf Ihren Desktop ziehen. Dadurch wird eine `.msg`-Datei erstellt, die Sie Ihrer Meldung beifügen können.

![MSG-Datei in Outlook speichern](images/classic-outlook-02.png){.thumbnail}

**Neues Outlook:**

1. Klicken Sie in der Nachrichtenliste mit der **rechten Maustaste** auf die E-Mail.
2. Wählen Sie `Speichern unter`{.action} und dann `Als EML-Datei speichern`{.action}.
3. Wählen Sie einen Speicherort auf Ihrem Computer und klicken Sie auf `Speichern`{.action}.

![EML-Datei im Neuen Outlook speichern](images/new-outlook-02.png){.thumbnail}

#### Mozilla Thunderbird

##### **Header abrufen**

1. Wählen Sie die E-Mail Ihrer Wahl aus.
2. Drücken Sie gleichzeitig `Ctrl` \+ `U` (`Cmd` \+ `U` unter macOS).
3. Der vollständige E-Mail-Header wird in einem separaten Fenster angezeigt. Markieren Sie den gesamten Text und kopieren Sie ihn in eine Datei.

![Vollständiger Header in Thunderbird](images/thunderbird-01.png){.thumbnail}

##### **.eml-Datei abrufen**

1. Wählen Sie die E-Mail Ihrer Wahl aus.
2. Drücken Sie gleichzeitig `Ctrl` \+ `S` (`Cmd` \+ `S` unter macOS).
3. Die Datei wird standardmäßig im `.eml`-Format gespeichert.

#### macOS Mail

##### **Header abrufen**

1. Wählen Sie die E-Mail Ihrer Wahl aus.
2. Drücken Sie gleichzeitig `Cmd` \+ `Shift` \+ `H`.
3. Der vollständige E-Mail-Header wird angezeigt. Markieren Sie den grauen Text und kopieren Sie ihn in eine Datei.

![Vollständiger Header in macOS Mail](images/mailmacos-01.png){.thumbnail}

##### **.eml-Datei abrufen**

1. Wählen Sie die E-Mail Ihrer Wahl aus.
2. Drücken Sie gleichzeitig `Cmd` \+ `S`. Die `.eml`-Datei wird automatisch erstellt. Wählen Sie das Format `Reine Quelldatei`.
3. Wählen Sie einen Speicherort auf Ihrem Computer und klicken Sie auf `Speichern`{.action}.

![EML-Datei aus macOS Mail speichern](images/mailmacos-02.png){.thumbnail}

### Header über Webmail abrufen <a name="webmail"></a>

#### Roundcube

##### **Header abrufen**

1. Wählen Sie die E-Mail Ihrer Wahl aus.
2. Klicken Sie auf den Button `... Mehr`{.action} und dann auf `< > Quelle anzeigen`{.action}.
3. Ein neues Fenster öffnet sich mit dem vollständigen E-Mail-Header. Markieren Sie den gesamten Text und kopieren Sie ihn in eine Datei.

![Quelle anzeigen in Roundcube](images/roundcube01.png){.thumbnail}

##### **.eml-Datei abrufen**

1. Wählen Sie die E-Mail Ihrer Wahl aus.
2. Klicken Sie auf den Button `... Mehr`{.action} und dann auf `Download (.eml)`{.action}.

![EML-Datei in Roundcube herunterladen](images/roundcube02.png){.thumbnail}

#### Outlook Web App (OWA) <a name="owa"></a>

##### **Header abrufen**

1. Wählen Sie die E-Mail aus, deren Header Sie anzeigen möchten.
2. Klicken Sie auf den **Pfeil** rechts neben `Allen antworten`{.action} und dann auf `Nachrichtendetails anzeigen`{.action}.
3. Ein neues Fenster öffnet sich mit dem vollständigen E-Mail-Header, den Sie herunterladen können.

![Nachrichtendetails in OWA](images/owa01.png){.thumbnail}

Sehen Sie auch unser Video-Tutorial:

<iframe class="video" width="560" height="315" src="https://www.youtube-nocookie.com/embed/Ivad4FgJ2No?start=36" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

##### **.eml-Datei abrufen**

1. Klicken Sie auf `(+) Neu`{.action}, um eine neue E-Mail zu erstellen.
2. Wählen Sie die E-Mail aus, die Sie exportieren möchten, und ziehen Sie sie in den Inhalt der neuen Nachricht.
3. Klicken Sie auf den Pfeil neben dem erstellten Anhang und dann auf `Download`{.action}, um die Datei auf Ihrem Computer zu speichern.

![EML-Datei aus OWA exportieren](images/owa02.gif){.thumbnail}

#### Zimbra

##### **Header abrufen**

1. Wählen Sie die E-Mail Ihrer Wahl aus.
2. Klicken Sie auf `Mehr`{.action} in der Aktionsleiste und wählen Sie `Original anzeigen`{.action}.
3. Ein neues Fenster öffnet sich mit dem vollständigen Header und dem Rohinhalt der E-Mail.

![Nachrichtendetails in Zimbra](images/zimbra-01.png){.thumbnail}

##### **.eml-Datei abrufen**

1. Wählen Sie die E-Mail Ihrer Wahl aus.
2. Klicken Sie auf `Mehr`{.action} in der Aktionsleiste und wählen Sie `Original anzeigen`{.action}.
3. Verwenden Sie im geöffneten Fenster die Tastenkombination `Ctrl` \+ `S` (oder `Cmd` \+ `S` unter macOS), um die Seite als `.eml`-Datei zu speichern.

### Header über einen anderen E-Mail-Client abrufen

#### Gmail

##### **Header abrufen**

1. Wählen Sie die betreffende E-Mail aus.
2. Klicken Sie auf die 3 vertikalen Punkte rechts und auf `Original anzeigen`{.action}.
3. Ein neues Fenster öffnet sich mit dem vollständigen E-Mail-Header.

![Nachrichtenquelle in Gmail anzeigen](images/gmail01.png){.thumbnail}

##### **.eml-Datei abrufen**

1. Wählen Sie die betreffende E-Mail aus.
2. Klicken Sie auf die 3 vertikalen Punkte rechts und wählen Sie `Nachricht herunterladen`{.action}.

#### Outlook.com

Um den Header abzurufen oder die `.eml`-Datei über die Webmail-Oberfläche von &#60;Outlook.com&#62; zu exportieren, lesen Sie den Abschnitt [Outlook Web App](#owa) dieser Anleitung.

## Weiterführende Informationen

[E-Mail FAQ](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/faq-emails)

Treten Sie unserer [User Community](/links/community) bei.
