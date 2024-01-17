---
title: DMARC-Eintrag für Ihre Domain konfigurieren
excerpt: Hier erfahren Sie, wie DMARC funktioniert und für Ihren E-Mail-Dienst eingerichtet wird
updated: 2023-12-13
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie im Zweifelsfall die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button "Beitragen" auf dieser Seite.
>

## Ziel

Der **D**omain-based **M**essage **A**uthentication, **R**eporting, and **C**onformance (DMARC)-Eintrag ist ein Mechanismus zur E-Mail-Sicherheit. Er basiert auf den Ergebnissen der [SPF](/pages/web_cloud/domains/dns_zone_spf) und [DKIM](/pages/web_cloud/domains/dns_zone_dkim)-Prüfungen.

**Hier erfahren Sie, wie DMARC funktioniert und wie Sie es für Ihren E-Mail-Dienst einrichten.**

> [!warning]
>
> OVHcloud bietet Dienste an, für deren Konfiguration, Verwaltung und Verwaltung Sie die alleinige Verantwortung tragen. Es liegt somit bei Ihnen, sicherzustellen, dass diese ordnungsgemäß funktionieren.
> 
> Wir stellen Ihnen diese Anleitung zur Verfügung, um Ihnen bei der Bewältigung alltäglicher Verwaltungsaufgaben zu helfen. Dennoch empfehlen wir Ihnen, falls Sie Hilfe brauchen, einen [spezialisierten Dienstleister](https://partner.ovhcloud.com/fr/directory/) zu kontaktieren. Für externe Dienstleistungen bietet OVHcloud leider keine Unterstützung. Weitere Informationen finden Sie im Abschnitt [„Weiterführende Informationen“](#go-further) dieser Anleitung.
>
> Außerdem ist die Einrichtung eines **DMARC** Eintrags für jedes [E-Mail-Angebot von OVHcloud](https://www.ovhcloud.com/fr-ca/emails/) derzeit nicht möglich. Diese Anleitung gilt **nur** für Kunden, die über eine aktive DNS-Zone bei OVHcloud für ihren Domainnamen verfügen, der mit einer **externen E-Mail-Lösung verbunden ist**.
>

## Voraussetzungen

- Sie haben über das OVHcloud [Kundencenter Zugriff auf die Verwaltung des Domainnamens (der Ihrer E-Mail-Lösung zugewiesen ist)](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de).
- Einer der Authentifizierungsmechanismen, [SPF](/pages/web_cloud/domains/dns_zone_spf) und/oder [DKIM](/pages/web_cloud/domains/dns_zone_dkim) muss in der DNS-Zone der Domain des E-Mail-Angebots konfiguriert werden.

## In der praktischen Anwendung

Das DMARC erlaubt es dem Inhaber einer Domain, die Sicherheit der E-Mails zu verwalten, die mit seiner Domain versendet werden. Er hat folgende Ziele:

- Deklarieren der Aktionen, die bei einem Ausfall der SPF- und/oder DKIM-Authentifizierungsmechanismen an den empfangenden Server durchzuführen sind.
- Bessere Kontrolle über die Verwendung des Domainnamens und Erkennung von Spoofing-Versuchen mithilfe von Berichten, die bei fehlerhafter E-Mail-Authentifizierung versendet werden. Außerdem verbessert es die Sicherheit, indem es die SPF-Protokolle mit DKIM verbindet.

Der DMARC-Eintrag enthält Richtlinieninformationen für bösartige E-Mails, die versuchen, Ihren Domainnamen zu fälschen.<br>
DMARC fragt die Authentifizierungsmechanismen [SPF](/pages/web_cloud/domains/dns_zone_spf) und [DKIM](/pages/web_cloud/domains/dns_zone_dkim) ab, um eingehende E-Mails zu überprüfen.<br>
Das Ergebnis dieser SPF- und/oder DKIM-Prüfungen wird von DMARC in „Aktionselemente“ übersetzt, wenn eine E-Mail die Prüfungen nicht besteht. Zu diesen Maßnahmen kann die Quarantäne oder Ablehnung der betroffenen E-Mails gehören.

### Wie funktioniert das DMARC? <a name="how-dmarc-works"></a>

Um zu verstehen, wie DMARC funktioniert, hier ein Beispiel.

Wenn die Adresse **contact@mydomain.ovh** eine E-Mail an die Zieladresse **recipient@otherdomain.ovh** sendet, fragt der empfangende Server die DNS-Zone der Domain ab, die **mydomain.ovh** ausstellt, um die Anweisungen des DMARC-Eintrags zu lesen.

Der DMARC-Eintrag gibt die Richtlinie an, die auf der Grundlage der Ergebnisse der SPF- und DKIM-Tests festgelegt werden soll. Er kann auch eine oder mehrere E-Mail-Adressen angeben (in unserem Beispiel die Adresse **report@mydomain.ovh**), über die er Fehlerberichte von E-Mails erhält, die über die Domain **mydomain.ovh** versandt wurden.

Nachdem die Anweisungen des DMARC Eintrags der Domain **mydomain.ovh** vom Empfangsserver von **„otherdomain.ovh“** gelesen wurden, werden die E-Mails entweder an die Adresse **recipient@otherdomain.ovh** versandt, als „SPAM“ markiert oder abgelehnt.

![DMARC](images/dns-dmarc-diagram.png){.thumbnail}

### DMARC konfigurieren

Es gibt zwei Möglichkeiten, das DMARC in Ihrer OVHcloud DNS-Zone zu konfigurieren:

- Über [das DMARC-Konfigurationstool](#dmarc-record). Dieser Eintrag erlaubt eine vereinfachte Konfiguration des DMARC. Füllen Sie einfach die Felder mit den DMARC-Einstellungen aus, die Sie für Ihre Konfiguration benötigen. Dieser Eintrag wird von den DNS-Servern als TXT-Eintrag gelesen.
- Über einen [TXT-Eintrag](#txt-record). Dieser Standarddatensatz kann im OVHcloud Kundencenter für die DMARC-Konfiguration verwendet werden. Damit können Sie alle DMARC-Parametrierungs-Tags integrieren, einschließlich derer, die über den OVHcloud DMARC-Eintrag fehlen. Es muss jedoch den Syntaxregeln des DMARC-Protokolls entsprechen.

#### DMARC-Eintrag <a name="dmarc-record"></a>

Sie können den DMARC-Eintrag über das OVHcloud Kundencenter zu Ihrer DNS-Zone hinzufügen. Loggen Sie sich hierzu in Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) ein und gehen Sie in den Bereich `Web Cloud`{.action}. Wählen Sie in der linken Spalte im Bereich `Domainnamen`{.action} die betreffende Domain aus und klicken Sie dann auf den Tab `DNS Zone`{.action}, um zu Ihrer DNS Zone zu gelangen.

Sobald Ihre DNS Zone angezeigt wird, klicken Sie auf den Button Einen `Eintrag hinzufügen`{.action} und dann auf „E-Mail-Felder“ `DMARC`{.action}.

- **Subdomain**: Dieser Eintrag **muss mit** `_dmarc` beginnen. Wenn Sie Ihr DMARC auf die gesamte Domain anwenden, tragen Sie in diesem Feld nichts anderes als `_dmarc` ein. Wenn Sie Ihre DMARC für eine Subdomain Ihrer Hauptdomain definieren, fügen Sie Ihre Subdomain nach `_dmarc` hinzu. Wenn zum Beispiel das DMARC auf eine *subdomain.mydomain.ovh* angewendet werden soll, muss man `_dmarc.subdomain` in das Feld „subdomain“ für den Domainnamen *mydomain.ovh* eingeben.

Nachfolgend finden Sie eine vollständige Beschreibung der Tags, die für die OVHcloud **DMARC-Registrierung** verwendet werden:

- **Version (v=)**: Ein obligatorisches Feld, das die DMARC-Protokollversion bestimmt.

- **Regel für die Domain (p=)**: Die vom Empfänger auf Anfrage des Inhabers der Sender-Domain einzunehmende Regelung. Die Richtlinie gilt für die abgefragte Domäne und die Subdomains, es sei denn, das Subdomain-Tag **sp=** enthält andere Anweisungen. Mögliche Werte sind:
    - *None*: Der Domaininhaber fordert keine spezifischen Maßnahmen zur Zustellung von Nachrichten an.
    - *Quarantäne*: Wenn die Überprüfung des DMARC-Mechanismus fehlschlägt, müssen die Empfänger die E-Mails als verdächtig einstufen. Je nach den Fähigkeiten des Empfängerservers kann dies bedeuten, „in den Spam-Ordner zu verschieben“ und/oder „als verdächtig melden“.
    - *reject*: E-Mails, die bei der DMARC-Verifizierung fehlschlagen, werden abgelehnt.

> [!warning]
>
> Die Konfiguration der Einstellung `p=` kann einen großen Einfluss auf die E-Mail-Zustellung Ihrer Domain haben. Es wird empfohlen, `p=none` zu konfigurieren und mehrere Wochen lang Fehlerberichte zu analysieren, um eventuelle Probleme zu beheben. Der Wechsel zu `p=quarantine` oder `p=reject` erfordert volle Kontrolle über die E-Mail-Sicherheitseinstellungen für [SPF](/pages/web_cloud/domains/dns_zone_spf) und [DKIM](/pages/web_cloud/domains/dns_zone_dkim). Der unten beschriebene Faktor `pct=` ermöglicht einen allmählichen Übergang.

- **Prozentsatz der gefilterten Nachrichten (pct=)** (zwischen 0 und 100, der Standardwert ist 100): Prozentsatz des Nachrichtenflusses, auf den die DMARC-Richtlinie angewendet werden soll. Das „PCT“-Tag soll Domäneninhabern ermöglichen, den DMARC-Mechanismus langsam zu implementieren.

- **Globaler Berichterstellungs-URI (rua=)**: Adressen, an die Berichte gesendet werden sollen (durch Kommas getrennte Liste im Nur-Text-Format). Es kann ein beliebiger gültiger URI angegeben werden. Vor dem E-Mail-Empfänger muss „mailto:“ stehen (Beispiel: `mailto:address@example.com`).

- **Regel für Subdomains (sp=)**: Die vom Empfänger für alle Subdomains zu verwendende Richtlinie. Sie gilt nur für die Subdomains der abgefragten Domain und nicht für die Domain selbst. Die Syntax ist mit der Syntax des oben definierten p -Tags identisch. Wenn dieses Tag nicht vorhanden ist, wird die durch das Tag „p“ festgelegte Regelung für die Subdomains angewendet.

- **SPF-Ausrichtungsmodus (aspf=)** (der Standardwert ist `r`) : Gibt den SPF-Ausrichtungsmodus an. Die Werte sind:
    - `r`(Relaxed) für den Soft-Mode: E-Mails können zum Beispiel über eine Subdomain der registrierten Domain versandt werden. Man spricht hier von einer teilweisen Ausrichtung.
    - `s`(streng) für den strikten Modus: E-Mails sollten nur über die angegebene Domain und nur über diese versendet werden. Das Ergebnis ist also „ausgerichtet“.

> [!primary]
>
> Im Rahmen der SPF und DKIM Authentifizierungsmechanismen bezieht sich die **Ausrichtung** auf die Übereinstimmung zwischen dem beim Versand verwendeten Domainnamen (und/oder der Signatur der Domain) **und** dem bei diesen Mechanismen registrierten Domainnamen.
>
> **Beispiele** 
>
> - **Abgestimmt**: Wenn die Adresse *john.smith@mydomain.ovh* eine Nachricht von dem E-Mail-Dienst sendet, der mit der Domain *mydomain.ovh* verbunden ist, und die Authentifizierungsmechanismen SPF und DKIM konfiguriert wurden, erhalten Sie ein abgestimmtes Ergebnis.
> - **Teilweise ausgerichtet**: Wenn die Adresse *john.smith@subdomain.mydomain.ovh* eine Nachricht von dem E-Mail-Dienst sendet, der mit dem Domainnamen *mydomain.ovh* verbunden ist, die Authentifizierungsmechanismen SPF und DKIM jedoch nur für die Hauptdomain konfiguriert wurden (also *mydomain.ovh*), erhält man ein teilweise ausgerichtetes Ergebnis.
> - **Fehlgeschlagene Authentifizierungsmechanismen**: Der Absender versucht, eine E-Mail als *john.smith@mydomain.ovh* über eine andere Adresse (wie *robert@example.com*) oder mithilfe eines nicht im SPF aufgeführten E-Mail-Versanddienstes zu versenden. In diesem Fall geben die SPF- und DKIM-Authentifizierungsmechanismen einen Fehler zurück.

![DMARC](images/dns-dmarc-01.png){.thumbnail}

#### TXT-Eintrag <a name="txt-record"></a>

Sie können den TXT-Eintrag über das [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) zu Ihrer DNS-Zone hinzufügen und sich dann im Bereich `Web Cloud`{.action} begeben. Klicken Sie auf `Domainnamen`{.action} und wählen Sie die betreffende Domain aus. Gehen Sie dann auf den Tab `DNS Zone`{.action}.

Sobald Ihre DNS Zone angezeigt wird, klicken Sie auf den Button `Einen Eintrag hinzufügen`{.action} und dann auf „Erweiterte Felder“ `TXT`{.action}.

- **Subdomain**: Dieser Eintrag **muss mit** `_dmarc` beginnen. Wenn Sie Ihr DMARC auf die gesamte Domain anwenden, tragen Sie in diesem Feld nichts anderes als `_dmarc` ein. Wenn Sie Ihre DMARC für eine Subdomain Ihrer Hauptdomain definieren, fügen Sie Ihre Subdomain nach `_dmarc` hinzu. Wenn zum Beispiel das DMARC auf eine Subdomain *subdomain.mydomain.ovh* angewendet werden soll, muss man `_dmarc.subdomain` in das Feld „Subdomain“ für die Domain *mydomain.ovh eingeben*

Im Folgenden finden Sie eine Liste der Tags, die zum Erstellen eines **TXT-Datensatzes** mit DMARC-Einstellungen verwendet werden. Diese Liste ergänzt die Tags im vorherigen Abschnitt „[DMARC-Eintrag](#dmarc-record)“.

- **adkim** (der Standardwert ist `r`) : Gibt den DKIM-Ausrichtungsmodus an. Die Werte sind:
    - `r`(Relaxed) für den Soft-Mode: E-Mails, bei denen die DKIM-Authentifizierung fehlschlägt, werden vom Empfängerserver als „Junk-E-Mails“ markiert.
    - `s`(streng) für den strikten Modus: E-Mails, die bei der DKIM-Authentifizierung nicht erfolgreich sind, werden vom Empfängerserver zurückgewiesen.

- **ruf** (durch Kommas getrennte Liste im Nur-Text-Format): Adressen, an die meldungsspezifische Fehlerinformationen gemeldet werden sollen. Wenn dieses Tag vorhanden ist, fordert der Besitzer der Sender-Domain die Empfänger auf, detaillierte Fehlerberichte über E-Mails zu senden, die bei der DMARC-Bewertung einen bestimmten Fehler aufweisen (siehe `fo` unten). Das Format der zu generierenden Meldung muss dem für das `rf`-Tag angegebenen Format entsprechen. Vor dem E-Mail-Empfänger muss „mailto:“ stehen (Beispiel: `mailto:address@example.com`).

- **fo** (Nur-Text; Standard ist `0`): Detaillierte Fehlerberichtoptionen. Report Builder können die angeforderten Optionen verwenden. Der Inhalt dieses Tags sollte ignoriert werden, wenn nicht auch ein `ruf`-Tag (oben) angegeben ist. Der Wert dieses Tags ist eine Liste von Zeichen, die durch einen Doppelpunkt (`:`) getrennt sind und die folgenden Fehlerberichtoptionen angeben:
     - **0** : Generiert einen DMARC-Fehlerbericht, wenn nicht alle Authentifizierungsmechanismen (DKIM **ET** SPF) ein ausgerichtetes Pass-Ergebnis erzeugen.
     - **1** : Generiert einen DMARC-Fehlerbericht, wenn ein Authentifizierungsmechanismus (DKIM **ODER** SPF) nicht das Ergebnis „Success“ ausrichtet.
     - **d** : Generiert einen DKIM-Fehlerbericht, wenn der DKIM-Authentifizierungsmechanismus unabhängig von seiner Ausrichtung fehlschlägt.
     - **s** : Generiert einen SPF-Fehlerbericht, wenn der SPF-Authentifizierungsmechanismus unabhängig von seiner Ausrichtung fehlschlägt.

- **rf** (Nur-Text-Werte, durch Kommas getrennt, der Standardwert ist `afrf`): Dieses Tag gibt den erwarteten Formattyp für Berichte an, die spezifische Details zu Meldungsauthentifizierungsfehlern enthalten. Derzeit wird nur `afrf` (Auth Failure Reporting Format) unterstützt.

- **RI** (32-Bit-Ganzzahl ohne Vorzeichen im Nur-Text-Format; Standardwert ist 86400): Erforderliches Intervall in Sekunden zwischen den aggregierten Berichten. Dieses Tag gibt an, wie oft E-Mail-Empfänger zusammengefasste Berichte zu den DMARC-Bewertungsergebnissen für die betreffende Domäne erstellen müssen.

![DMARC](images/dns-dmarc-02.png){.thumbnail}

#### Beispiele für Datensätze <a name="record-example"></a>

> [!warning]
>
> In unseren 2 Beispielen wird der Parameter `p=` in seiner restriktiven Form verwendet, um das Verhalten eines E-Mail-Dienstes in diesem Fall zu veranschaulichen.
>
> Die Konfiguration der Einstellung `p=` kann einen großen Einfluss auf die E-Mail-Zustellung Ihrer Domain haben. Es wird empfohlen, `p=none` zu konfigurieren und mehrere Wochen lang Fehlerberichte zu analysieren, um eventuelle Probleme zu beheben. Der Wechsel zu `p=quarantine` oder `p=reject` erfordert volle Kontrolle über die E-Mail-Sicherheitseinstellungen für [SPF](/pages/web_cloud/domains/dns_zone_spf) und [DKIM](/pages/web_cloud/domains/dns_zone_dkim). Der unten beschriebene Faktor `pct=` ermöglicht einen allmählichen Übergang.

##### Erstes Beispiel

Zur Veranschaulichung dieses ersten Beispiels haben wir den [DMARC-Eintrag](#dmarc-record) in der DNS-Zone verwendet und die folgenden Einstellungen angewendet:

![DMARC](images/dns-dmarc-03.png){.thumbnail}

Wir erhalten folgendes Ergebnis:

```
„v=DMARC1;p=quarantine;pct=100;rua=mailto:report@mydomain.ovh;aspf=s;“
```

Alle gesendeten E-Mails (**pct=100**) werden mit den SPF- und/oder DKIM-Authentifizierungsmechanismen verarbeitet. E-Mails, die den SPF-Test nicht bestanden haben, werden automatisch abgelehnt, da „**aspf=s**“ (SPF im strikten Modus) angegeben ist. Ein Fehlerbericht über einen Fehler bei der SPF- und/oder DKIM-Authentifizierung wird an die Adresse `report@mydomain.ovh` (**rua=mailto:report@mydomain.ovh**) gesendet.

##### Zweites Beispiel

Für das zweite Beispiel wurde ein [TXT-Datensatz](#txt-record) verwendet, um Tags zu verwenden, die nicht über den vereinfachten [DMARC-Datensatz](#dmarc-record) verfügbar sind.

![DMARC](images/dns-dmarc-04.png){.thumbnail}

Wir erhalten folgendes Ergebnis:

```
„v=DMARC1; p=Quarantine; pct=100; ruf=mailto:report@mydomain.ovh; fo=0; adkim=r; aspf=s; adkim=r; ri=86400“
```

- **p=Quarantäne**: E-Mails, die die DMARC-Tests nicht bestehen, werden als „verdächtig“ behandelt.

- **pct=100**: Die DMARC-Richtlinie gilt für 50% der Nachrichten, die vom E-Mail-Stream des Domaininhabers stammen.

- **RUF=mailto:report@mydomain.ovh**: E-Mail-Adresse, an die detaillierte Fehlerberichte mit dem Argument „mailto“ gesendet werden sollen.

- **fo=0**: Optionen für Fehlerberichterstellung. Der Wert „0“ gibt an, dass DMARC-Fehlerberichte nur generiert werden sollen, wenn die SPF- und DKIM-Authentifizierungsmechanismen nicht zu einem ausgerichteten Ergebnis „pass“ führen.

- **adkim=r**: Der vom Domaininhaber angeforderte DKIM-ID-Ausrichtungsmodus lautet „Relaxed“ (flexibler Modus). In diesem Modus muss DKIM eine gültige Signatur bereitstellen, und der Bezeichner des „From“-Headers kann teilweise ausgerichtet werden.

- **aspf=s**: Der erforderliche SPF-ID-Ausrichtungsmodus ist „strict“. Das bedeutet, dass die SPF-Kennung der ausgerichteten Domain exakt mit der IP-Adresse übereinstimmen muss, die die Nachricht sendet.

- **adkim=r**: Der vom Domaininhaber angeforderte DKIM-ID-Ausrichtungsmodus lautet „Relaxed“ (flexibler Modus). In diesem Modus muss DKIM eine gültige Signatur bereitstellen, und der Bezeichner des „From“-Headers kann teilweise ausgerichtet werden.

- **RI=86400**: Legt das angeforderte Intervall zwischen den aggregierten Berichten in Sekunden fest. In diesem Fall muss ein aggregierter Bericht mindestens alle 86400 Sekunden (d. h. einmal täglich) generiert werden.


## Weiterführende Informationen <a name="go-further"></a>

Für spezialisierte Dienstleistungen (Referenzierung, Entwicklung etc.) kontaktieren Sie bitte die [OVHcloud Partner](https://partner.ovhcloud.com/fr/directory/).

Wenn Sie Hilfe bei der Verwendung und Konfiguration Ihrer OVHcloud Lösungen benötigen, empfehlen wir Ihnen unsere verschiedenen [Support-Angebote](https://www.ovhcloud.com/fr/support-levels/).

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
