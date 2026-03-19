---
title: 'Was tun, wenn ein Account wegen Spamversands gesperrt wurde?'
excerpt: 'Erfahren Sie, wie Sie vorgehen, wenn Ihre E-Mail-Adresse wegen Spamversands gesperrt wurde'
updated: 2026-03-05
---

## Ziel

Wenn Ihre E-Mail-Adresse wegen Spamversands gesperrt ist, bedeutet dies, dass beim Versand von E-Mails über diese Adresse verdächtige Aktivitäten festgestellt wurden. In diesem Fall können Sie über diese E-Mail-Adresse keine E-Mails mehr versenden. Sie müssen daher verstehen, warum verdächtige Aktivitäten erkannt wurden, und Maßnahmen ergreifen, um eine Wiederholung dieser Situation zu vermeiden.

**Erfahren Sie, wie Sie vorgehen, wenn Ihre E-Mail-Adresse wegen Spamversands gesperrt wurde.**

## Voraussetzungen

- Sie verfügen über eine [OVHcloud E-Mail-Lösung](/links/web/emails).

<!-- CP-NAV-START:web-mx-plan -->
<!-- CP-NAV-START:web-email-pro -->
<!-- CP-NAV-START:web-exchange -->
---

### Zugriff auf das OVHcloud Kundencenter

**MX Plan:**

- **Direkter Link:** [MX Plan](/links/control-panel/web-mx-plan)
- **Navigationspfad:** `Web Cloud`{.action} > `MX Plan`{.action} > Wählen Sie Ihren MX Plan Dienst aus

**E-Mail Pro:**

- **Direkter Link:** [E-Mail Pro](/links/control-panel/web-email-pro)
- **Navigationspfad:** `Web Cloud`{.action} > `E-Mail Pro`{.action} > Wählen Sie Ihre Plattform aus

**Exchange:**

- **Direkter Link:** [Exchange](/links/control-panel/web-exchange)
- **Navigationspfad:** `Web Cloud`{.action} > `Exchange`{.action} > Wählen Sie Ihre Plattform aus

---
<!-- CP-NAV-END:web-exchange -->
<!-- CP-NAV-END:web-email-pro -->
<!-- CP-NAV-END:web-mx-plan -->

## In der praktischen Anwendung <a name="instructions"></a>

Bevor Sie fortfahren: Falls die Sperrung eine E-Mail-Adresse vom Typ MX Plan betrifft, identifizieren Sie zunächst die verwendete E-Mail-Technologie Ihres Dienstes, um den richtigen Entsperrungsvorgang durchzuführen.

> [!primary]
>
> **Die E-Mail-Technologie Ihres MX Plan Dienstes identifizieren.**
>
> Je nach Aktivierungsdatum Ihres MX Plan Dienstes oder einer kürzlich durchgeführten Migration kann die zugehörige E-Mail-Technologie unterschiedlich sein. Diese Version wird durch die Oberfläche Ihres Webmails charakterisiert. So identifizieren Sie sie:
>
> - Im Tab `Allgemeine Informationen`{.action} finden Sie die verwendete Technologie unter dem Eintrag **Webmail** im Rahmen `Abo`{.action}.
>
> ![E-Mail-Technologie im OVHcloud Kundencenter MX Plan identifizieren](images/technology-email.png){.thumbnail .w-500}
>
> - Wenn die angezeigte Technologie **RoundCube** ist, folgen Sie den Anweisungen im Tab **MX Plan - RoundCube**.
> - Wenn die angezeigte Technologie **OWA** oder **Zimbra** ist, folgen Sie den Anweisungen im Tab **MX Plan - OWA / Zimbra**.

### Schritt 1: Warum wurde Ihre E-Mail-Adresse wegen Spamversands gesperrt? <a name="step1"></a>

Wenn beim Versand von E-Mails verdächtige Aktivitäten festgestellt werden, wird die betroffene Adresse automatisch gesperrt. In diesem Fall können Sie über diese E-Mail-Adresse keine E-Mails mehr versenden.

> [!warning]
>
> "Verdächtige Aktivität" bedeutet, dass:
>
> - Der Anti-Spam-Server, der E-Mails beim Versand scannt, ein oder mehrere Elemente der E-Mail als verdächtig eingestuft hat und diese als Spam-E-Mail betrachtet werden können.
> - Die Häufigkeit des Versands und die Anzahl der Empfänger zu hoch sind und als Spamming gewertet werden. Für Massenversand ist es erforderlich, einen Mailinglisten-Dienst zu verwenden und keine Standard-E-Mail-Adresse.
>
> Die genauen Gründe für eine Sperrung können nicht offengelegt werden, um Versuche zur Umgehung des Spam-Erkennungssystems zu verhindern. Um den Inhalt einer E-Mail zu testen, können Sie ein externes Tool wie [Mailtester](https://www.mail-tester.com/) verwenden.
>

Stellen Sie zunächst bei den Benutzern der gesperrten E-Mail-Adresse sicher, dass diese die Sperrung nicht selbst durch eine ungewöhnliche Nutzung der E-Mail-Adresse verursacht haben (z. B. durch Massenversand von E-Mails). Ist dies der Fall, müssen Sie die Situation korrigieren, bevor Sie die Adresse entsperren.

Wenn die vom Anti-Spam-System erkannte verdächtige Aktivität nicht von einem legitimen Benutzer der E-Mail-Adresse verursacht wurde, führen Sie die folgenden Maßnahmen durch:

- Führen Sie eine Virenprüfung aller Geräte durch, die die wegen Spamversands gesperrte E-Mail-Adresse verwenden, und wenden Sie Korrekturen an, falls diese infiziert sind.

- Überprüfen Sie alle Programme, die die Zugangsdaten der wegen Spamversands gesperrten E-Mail-Adresse verwenden (z. B. Faxgerät, Unternehmenssoftware, E-Mail-Client).

- Überprüfen Sie die Weiterleitungen, die auf der wegen Spamversands gesperrten E-Mail-Adresse konfiguriert sind.

- Überprüfen Sie die Filter, die über einen E-Mail-Client oder das Webmail auf der wegen Spamversands gesperrten E-Mail-Adresse konfiguriert sind.

- Überprüfen Sie die automatischen Antworten, die über einen E-Mail-Client oder das Webmail auf der wegen Spamversands gesperrten E-Mail-Adresse konfiguriert sind.

### Schritt 2: Den Status der E-Mail-Adresse überprüfen und auf das zugehörige Support-Ticket zugreifen

Wählen Sie den betroffenen E-Mail-Dienst in den folgenden Tabs aus:

> [!tabs]
> **Exchange**
>>
>> Gehen Sie zum Tab `E-Mail-Accounts`{.action} Ihrer Plattform. Wenn in der Spalte "Status" der betroffenen E-Mail-Adresse "Gesperrt" angezeigt wird, klicken Sie auf `...`{.action} rechts neben dem Account und dann auf `Entsperren`{.action}. Die E-Mail-Adresse wird nicht automatisch entsperrt. Kontaktieren Sie den Support über das Support-Ticket, indem Sie die 3 gestellten Fragen beantworten.<br>
>> Fahren Sie mit [Schritt 3](#step3) der Anleitung fort.
>>
>> ![Spalte "Status gesperrt" im Tab "E-Mail-Accounts" Exchange](images/blocked-for-SPAM-01-01.png){.thumbnail}
>>
> **E-Mail Pro**
>>
>> Gehen Sie zum Tab `E-Mail-Accounts`{.action} Ihrer Plattform. Wenn in der Spalte "Status" rechts neben der betroffenen E-Mail-Adresse "Spam" angezeigt wird, klicken Sie auf diesen Hinweis und dann auf `Ticket beantworten`{.action}. Die E-Mail-Adresse wird nicht automatisch entsperrt. Kontaktieren Sie den Support über das Support-Ticket, indem Sie die 3 gestellten Fragen beantworten. <br>
>> Fahren Sie mit [Schritt 3](#step3) der Anleitung fort.
>>
>> ![Spalte "Status Spam" im Tab "E-Mail-Accounts" E-Mail Pro](images/blocked-for-SPAM-01-02.png){.thumbnail}
>>
> **MX Plan - OWA / Zimbra**
>>
>> Gehen Sie zum Tab `E-Mail-Accounts`{.action} Ihrer Plattform. Wenn in der Spalte "Status" rechts neben der betroffenen E-Mail-Adresse "Spam" angezeigt wird, klicken Sie auf diesen Hinweis und dann auf `Ticket beantworten`{.action}. Die E-Mail-Adresse wird nicht automatisch entsperrt. Kontaktieren Sie den Support über das Support-Ticket, indem Sie die 3 gestellten Fragen beantworten.<br>
>> Fahren Sie mit [Schritt 3](#step3) der Anleitung fort.
>>
>> ![Spalte "Status Spam" im Tab "E-Mail-Accounts" MX Plan](images/blocked-for-SPAM-01-03.png){.thumbnail}
>>
> **MX Plan - RoundCube**
>>
>> Wenn die Sperrung eine MX Plan E-Mail-Adresse mit dem Webmail **RoundCube** betrifft, gibt es kein Support-Ticket. Bitte lesen Sie [Schritt 1](#step1) dieser Anleitung, bevor Sie den folgenden Anweisungen folgen.
>>
>> Gehen Sie zum Tab `E-Mails`{.action} Ihrer Plattform. Wenn in der Spalte "Blockiert wegen SPAM" der Wert "Ja" angezeigt wird, klicken Sie auf diesen Hinweis und dann auf `Passwort ändern`{.action}. Ihre E-Mail-Adresse ist jetzt entsperrt, Sie müssen [Schritt 3](#step3) nicht ausführen.
>>
>> ![Spalte "Blockiert wegen SPAM" im Tab "E-Mails" MX Plan RoundCube](images/blocked-for-SPAM-01-04.png){.thumbnail}
>>
>> > [!warning]
>> >
>> > In seltenen Fällen kann in der Spalte "Blockiert wegen SPAM" der Wert "Nein" angezeigt werden, obwohl die E-Mail-Adresse gesperrt ist. Wenn Sie die erforderlichen Maßnahmen zur Absicherung der E-Mail-Adresse ergriffen haben, bleibt die Lösung wie oben beschrieben.

### Schritt 3: Auf das Support-Ticket zugreifen <a name="step3"></a>

Nach Schritt 2 werden Sie zum Fenster "Meine Support-Anfragen" weitergeleitet. Klicken Sie auf den Button `...`{.action} rechts neben dem Ticket mit dem Betreff "Account locked for spam." und dann auf `Details anzeigen`{.action}.

![Fenster "Meine Support-Anfragen" mit dem Spam-Sperrungsticket](images/blocked-for-SPAM-02.png){.thumbnail}

Sie finden hier die an Sie gesendete E-Mail, die gleichzeitig ein Support-Ticket beim Kundendienst generiert hat.

Das Support-Ticket sieht wie folgt aus:

>
> Sehr geehrter Kunde,
>
> Unser System hat festgestellt, dass die Adresse **Ihre.Adresse@example.com**, die auf unseren Systemen unter **Dienstreferenz** gehostet wird, eine Quelle für den Versand von Spam (Junk-E-Mails) darstellt.
> Das Senden von E-Mails wurde daher vorübergehend deaktiviert.
>
> Wir haben derzeit **X** verdächtige Nachrichten erkannt.
>
> Damit wir den Versand von E-Mails für folgende Adresse wieder aktivieren können: **Ihre.Adresse@example.com**,
> beantworten Sie diese E-Mail mit den folgenden Fragen:
>
> - Sind Sie der Absender der betreffenden E-Mail (siehe nachstehender Header)?
>
> - Haben Sie eine Weiterleitungsregel zu einer anderen E-Mail-Adresse?
>
> - Haben Sie auf eine Spam-Nachricht geantwortet?
> 
> Diese Antworten helfen uns, Ihr Konto schnell wieder zu aktivieren.
> <br>
> <br>
> 

Im Anschluss an diese Nachricht wird Ihnen ein Auszug der Header der versendeten E-Mails bereitgestellt.

Diese Header ermöglichen es, den Weg und den Ursprung der versendeten E-Mails zu bestimmen.

> [!primary]
>
> Sobald Ihr Ticket vom Kundendienst bearbeitet und Ihre E-Mail-Adresse entsperrt wurde, ändern Sie das Passwort der E-Mail-Adresse und achten Sie darauf, dass es ausreichend stark ist. Sie können dazu den [Passwort-Generator der CNIL](https://www.cnil.fr/fr/generer-un-mot-de-passe-solide) verwenden. Weitere Informationen finden Sie auch unter [Tipps der CNIL für ein gutes Passwort](https://www.cnil.fr/fr/les-conseils-de-la-cnil-pour-un-bon-mot-de-passe).

## Weiterführende Informationen

Kontaktieren Sie für spezialisierte Dienstleistungen (SEO, Web-Entwicklung etc.) die [OVHcloud Partner](/links/partner).

Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, beachten Sie unsere [Support-Angebote](/links/support).

Treten Sie unserer [User Community](/links/community) bei.
