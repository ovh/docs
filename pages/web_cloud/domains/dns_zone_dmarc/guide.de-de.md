---
title: E-Mail-Sicherheit durch DMARC-Eintrag verbessern
excerpt: Erfahren Sie hier, wie DMARC funktioniert und für Ihren E-Mail-Dienst eingerichtet wird
updated: 2023-12-13
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie im Zweifelsfall die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button "Beitragen" auf dieser Seite.
>

## Ziel

Der Eintrag **D**omain-based **M**essage **A**uthentication, **R**eporting, and **C**ompliance (DMARC) ist ein Mechanismus zur E-Mail-Sicherheit. Er basiert auf den Ergebnissen von [SPF](/pages/web_cloud/domains/dns_zone_spf)- und [DKIM](/pages/web_cloud/domains/dns_zone_dkim)-Prüfungen.

**Diese Anleitung erklärt, wie DMARC funktioniert und wie Sie es für Ihren E-Mail-Dienst einrichten.**

> [!warning]
>
> OVHcloud stellt Ihnen Dienstleistungen zur Verfügung, für deren Konfiguration und Verwaltung Sie die alleinige Verantwortung tragen. Es liegt somit bei Ihnen, sicherzustellen, dass diese ordnungsgemäß funktionieren.
> 
> Bei Schwierigkeiten kontaktieren Sie bitte einen [spezialisierten Dienstleister](/links/partner) oder stellen Ihre Fragen in der OVHcloud Community. Leider können wir Ihnen für administrative Aufgaben keine weitergehende technische Unterstützung anbieten. Weitere Informationen finden Sie am [Ende dieser Anleitung](#go-further).
>

## Voraussetzungen

- Sie haben über das [OVHcloud Kundencenter](/links/manager) Zugriff auf die Verwaltung des Domainnamens, der Ihrer E-Mail-Lösung zugewiesen ist.
- Einer der Authentifizierungsmechanismen [SPF](/pages/web_cloud/domains/dns_zone_spf) oder [DKIM](/pages/web_cloud/domains/dns_zone_dkim) muss in der DNS-Zone des Domainnamens des E-Mail-Dienstes konfiguriert werden.

## In der praktischen Anwendung

DMARC erlaubt es dem Inhaber einer Domainnamens, die Sicherheit der E-Mails zu verwalten, die über den Domainnamens versendet werden. Die Anwendungsbereiche:

- Deklarieren der Aktionen, die bei einem Ausfall der SPF- und DKIM-Authentifizierungsmechanismen an den empfangenden Server durchzuführen sind.
- Bessere Kontrolle über die Verwendung des Domainnamens und Erkennung von Spoofing-Versuchen mithilfe von Berichten, die bei fehlerhafter E-Mail-Authentifizierung versendet werden. Außerdem wird die Sicherheit erhäht, indem die SPF-Protokolle mit DKIM verbunden werden.

Der DMARC-Eintrag enthält Richtlinieninformationen für E-Mails mit gefälschtem Domainnamen.<br>
DMARC fragt die Authentifizierungsmechanismen [SPF](/pages/web_cloud/domains/dns_zone_spf) und [DKIM](/pages/web_cloud/domains/dns_zone_dkim) ab, um eingehende E-Mails zu überprüfen.<br>
Das Ergebnis dieser SPF- und/oder DKIM-Prüfungen wird von DMARC in „Aktionselemente“ übersetzt, wenn eine E-Mail die Prüfungen nicht besteht. Zu diesen Maßnahmen kann die Quarantäne oder Ablehnung der betroffenen E-Mails gehören.

### Wie funktioniert DMARC? <a name="how-dmarc-works"></a>

Um zu verstehen, wie DMARC funktioniert, hier ein Beispiel.

Wenn die Adresse **contact@mydomain.ovh** eine E-Mail an die Zieladresse **recipient@otherdomain.ovh** sendet, fragt der empfangende Server die DNS-Zone der Domain **mydomain.ovh** ab, um die Anweisungen des DMARC-Eintrags zu lesen.

Der DMARC-Eintrag gibt die Richtlinie an, die auf der Grundlage der Ergebnisse der SPF- und DKIM-Tests festgelegt werden soll. Er kann auch eine oder mehrere E-Mail-Adressen angeben (in unserem Beispiel die Adresse **report@mydomain.ovh**), über die er Fehlerberichte von E-Mails erhält, die über die Domain **mydomain.ovh** versandt wurden.

Nachdem die Anweisungen des DMARC Eintrags der Domain **mydomain.ovh** vom Empfangsserver von **otherdomain.ovh** gelesen wurden, werden die E-Mails entweder an die Adresse **recipient@otherdomain.ovh** versandt, als SPAM markiert oder abgelehnt.

![DMARC](/pages/assets/schemas/emails/dns-dmarc-diagram.png){.thumbnail}

### DMARC konfigurieren

Es gibt zwei Möglichkeiten, DMARC in Ihrer OVHcloud DNS-Zone zu konfigurieren:

- Das [DMARC-Konfigurationstool](#dmarc-record). Dies erlaubt eine vereinfachte Konfiguration von DMARC. Füllen Sie einfach die Felder mit den DMARC-Einstellungen aus, die Sie für Ihre Konfiguration benötigen. Dieser Eintrag wird von DNS-Servern als TXT-Eintrag gelesen.
- Ein [TXT-Eintrag](#txt-record). Dieser Eintrag kann im OVHcloud Kundencenter für die DMARC-Konfiguration verwendet werden. Damit können Sie alle DMARC-Einstellungen integrieren, einschließlich derer, die im OVHcloud DMARC-Eintrag fehlen. Er muss jedoch den Syntaxregeln des DMARC-Protokolls entsprechen.

#### DMARC-Eintrag <a name="dmarc-record"></a>

Sie können den DMARC-Eintrag über das OVHcloud Kundencenter zu Ihrer DNS-Zone hinzufügen. Loggen Sie sich hierzu in Ihr [OVHcloud Kundencenter](/links/manager) ein und gehen Sie in den Bereich `Web Cloud`{.action}. Wählen Sie in der linken Spalte im Bereich `Domainnamen`{.action} die betreffende Domain aus und klicken Sie dann auf den Tab `DNS-Zone`{.action}, um zu Ihrer DNS-Zone zu gelangen.

Klicken Sie auf den Button `Eintrag hinzufügen`{.action} und dann auf `DMARC`{.action} in den E-Mail-Feldern.

- **Subdomain**: Dieser Eintrag **muss** mit `_dmarc` beginnen. Wenn Sie DMARC auf die gesamte Domain anwenden, tragen Sie in diesem Feld nur `_dmarc` ein. Wenn Sie DMARC für eine Subdomain Ihrer Hauptdomain definieren, fügen Sie Ihre Subdomain nach `_dmarc` hinzu. Wenn zum Beispiel DMARC auf *subdomain.mydomain.ovh* angewendet werden soll, muss `_dmarc.subdomain` in das Feld Subdomain für den Domainnamen *mydomain.ovh* eingetragen werden.

Nachfolgend finden Sie eine vollständige Beschreibung der Tags, die für den OVHcloud **DMARC-Eintrag** verwendet werden:

- **Version (v=)**: Obligatorisches Feld, das die DMARC-Protokollversion bestimmt.

- **Domain rule (p=)**: Die vom Empfänger auf Anfrage des Inhabers der Sender-Domain einzunehmende Regelung. Die Richtlinie gilt für die abgefragte Domain und die Subdomains, außer der Subdomain-Tag **sp=** enthält andere Anweisungen. Mögliche Werte sind:
    - *none*: Der Domaininhaber fordert keine spezifischen Maßnahmen zur Zustellung von Nachrichten an.
    - *quarantine*: Wenn die Überprüfung des DMARC-Mechanismus fehlschlägt, sollen die Empfänger die E-Mails als verdächtig einstufen. Je nach den Fähigkeiten des Empfängerservers kann dies bedeuten, „in den Spam-Ordner verschieben“ und/oder „als verdächtig melden“.
    - *reject*: E-Mails, die bei der DMARC-Verifizierung fehlschlagen, werden abgelehnt.

> [!warning]
>
> Die Konfiguration der Einstellung `p=` kann einen großen Einfluss auf die E-Mail-Zustellung Ihrer Domain haben. Es wird empfohlen, `p=none` zu konfigurieren und mehrere Wochen lang Fehlerberichte zu analysieren, um Anomalien festzustellen. Der Wechsel zu `p=quarantine` oder `p=reject` erfordert volle Kontrolle über die E-Mail-Sicherheitseinstellungen für [SPF](/pages/web_cloud/domains/dns_zone_spf) und [DKIM](/pages/web_cloud/domains/dns_zone_dkim). Der unten beschriebene Faktor `pct=` ermöglicht Übergangswerte.

- **Percentage of messages filtered (pct=)** (zwischen 0 und 100, Standardwert 100): Prozentsatz des Nachrichtenflusses, auf den die DMARC-Richtlinie angewendet werden soll. PCT soll Domaininhabern ermöglichen, den DMARC-Mechanismus schrittweise zu implementieren.

- **Global Reporting URI (rua=)**: Adressen, an die Berichte gesendet werden sollen (durch Kommas getrennte Liste im Text-Format). Es kann ein beliebiger gültiger URI angegeben werden. Vor dem E-Mail-Empfänger muss „mailto:“ stehen (Beispiel: `mailto:address@example.com`).

- ***Rule for sub-domains (sp=)**: Die vom Empfänger für alle Subdomains zu verwendende Richtlinie. Sie gilt nur für die Subdomains der abgefragten Domain und nicht für die Domain selbst. Die Syntax ist mit der Syntax des oben definierten Tags `p` identisch. Wenn er nicht vorhanden ist, wird die von `p` festgelegte Regelung für die Subdomains angewendet.

- **Alignment mode for SPF (aspf=)** (Standardwert: `r`) : Gibt den SPF-Alignment-Modus an. Die Werte sind:
    - `r` (Relaxed): E-Mails, die die SPF-Authentifizierung nicht bestehen, werden vom Empfängerserver als "unerwünscht" markiert.
    - `s` (Strict): E-Mails, die die SPF-Authentifizierung nicht bestehen, werden vom Empfängerserver zurückgewiesen.

> [!primary]
>
> Im Rahmen der SPF und DKIM Authentifizierungsmechanismen bezieht sich **Alignment** auf die Übereinstimmung zwischen dem beim Versand verwendeten Domainnamen (und/oder der Signatur der Domain) **und** dem bei diesen Mechanismen registrierten Domainnamen.
>
> **Beispiele** 
>
> - **Aligned**: Wenn die Adresse *john.smith@mydomain.ovh* eine Nachricht von dem E-Mail-Dienst sendet, der mit der Domain *mydomain.ovh* verbunden ist, und die Authentifizierungsmechanismen SPF und DKIM konfiguriert wurden, erhalten Sie ein abgestimmtes Ergebnis.
> - **Partially aligned**: Wenn die Adresse *john.smith@subdomain.mydomain.ovh* eine Nachricht von dem E-Mail-Dienst sendet, der mit dem Domainnamen *mydomain.ovh* verbunden ist, die Authentifizierungsmechanismen SPF und DKIM jedoch nur für die Hauptdomain konfiguriert wurden (also *mydomain.ovh*), erhält man ein teilweise abgestimmtes Ergebnis.
> - **Authentication failed**: Der Absender versucht, eine E-Mail als *john.smith@mydomain.ovh* über eine andere Adresse (wie *robert@example.com*) oder mithilfe eines nicht im SPF aufgeführten E-Mail-Dienst zu versenden. In diesem Fall geben die SPF- und DKIM-Authentifizierungsmechanismen einen Fehler zurück.

![DMARC](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/dns-dmarc-01.png){.thumbnail}

#### TXT-Eintrag <a name="txt-record"></a>

Sie können den TXT-Eintrag über das [OVHcloud Kundencenter](/links/manager) im Bereich `Web Cloud`{.action} zu Ihrer DNS-Zone hinzufügen. Klicken Sie auf `Domainnamen`{.action} und wählen Sie die betreffende Domain aus. Gehen Sie dann auf den Tab `DNS-Zone`{.action}.

Klicken Sie auf den Button `Eintrag hinzufügen`{.action} und dann auf `TXT`{.action}.

- **Subdomain**: Dieser Eintrag **muss** mit `_dmarc` beginnen. Wenn Sie DMARC auf die gesamte Domain anwenden, tragen Sie in diesem Feld nur `_dmarc` ein. Wenn Sie DMARC für eine Subdomain Ihrer Hauptdomain definieren, fügen Sie Ihre Subdomain nach `_dmarc` hinzu. Wenn zum Beispiel DMARC auf *subdomain.mydomain.ovh* angewendet werden soll, muss `_dmarc.subdomain` in das Feld Subdomain für den Domainnamen *mydomain.ovh* eingetragen werden.

Nachfolgend finden Sie eine vollständige Beschreibung der Tags, die für den **TXT-Eintrag** mit DMARC-Einstellungen verwendet werden. Diese Liste ergänzt die Tags im vorherigen Abschnitt „[DMARC-Eintrag](#dmarc-record)“.

- **adkim** (der Standardwert ist `r`): Gibt den DKIM-Alignment-Modus an. Die Werte sind:
    - `r` (Relaxed): E-Mails, die die DKIM-Authentifizierung nicht bestehen, werden vom Empfängerserver als "unerwünscht" markiert.
    - `s` (Strict): E-Mails, die die DKIM-Authentifizierung nicht bestehen, werden vom Empfängerserver zurückgewiesen.

- **ruf** (durch Kommas getrennte Liste im Text-Format): Adressen, an die meldungsspezifische Fehlerinformationen gemeldet werden sollen. Wenn dieser Tag vorhanden ist, fordert der die Sender-Domain die Empfänger auf, detaillierte Fehlerberichte über E-Mails zu senden, die bei der DMARC-Bewertung einen bestimmten Fehler aufweisen (siehe `fo` unten). Das Format der zu generierenden Meldung muss dem für das `rf`-Tag angegebenen Format entsprechen. Vor dem E-Mail-Empfänger muss „mailto:“ stehen (Beispiel: `mailto:address@example.com`).

- **fo** (Nur-Text, Standard ist `0`): Detaillierte Fehlerberichtoptionen. Reportersteller können den angeforderten Optionen nachkommen. Der Inhalt dieses Tags sollte ignoriert werden, wenn nicht auch ein `ruf`-Tag angegeben ist. Der Wert dieses Tags ist eine Liste von Zeichen, die mit `:` getrennt sind und die folgenden Fehlerberichtoptionen angeben:
     - **0**: Generiert einen DMARC-Fehlerbericht, wenn nicht alle Authentifizierungsmechanismen (DKIM **UND** SPF) ein abgestimmtes Ergebnis erzeugen.
     - **1**: Generiert einen DMARC-Fehlerbericht, wenn ein Authentifizierungsmechanismus (DKIM **ODER** SPF) nicht das Ergebnis „Success“ erzeugt.
     - **d**: Generiert einen DKIM-Fehlerbericht, wenn der DKIM-Authentifizierungsmechanismus unabhängig von seinem Alignment fehlschlägt.
     - **s**: Generiert einen SPF-Fehlerbericht, wenn der SPF-Authentifizierungsmechanismus unabhängig von seinem Alignment fehlschlägt.

- **rf** (Text-Werte, durch Kommas getrennt, der Standardwert ist `afrf`): Dieser Tag gibt den erwarteten Formattyp für Berichte an, die spezifische Details zu Nachrichtenauthentifizierungsfehlern enthalten. Derzeit wird nur `afrf` (Auth Failure Reporting Format) unterstützt.

- **ri** (32-Bit Integer ohne Vorzeichen im Text-Format, Standardwert ist 86400): Erforderliches Intervall in Sekunden zwischen den aggregierten Berichten. Dieser Tag gibt an, wie oft E-Mail-Empfänger zusammengefasste Berichte über DMARC-Bewertungsergebnissen für die betreffende Domain erstellen sollen.

![DMARC](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/dns-dmarc-02.png){.thumbnail}

#### Beispiele für Datensätze <a name="record-example"></a>

> [!warning]
>
> In unseren 2 Beispielen wird der Parameter `p=` in seiner restriktiven Form verwendet, um das Verhalten eines E-Mail-Dienstes in diesem Fall zu veranschaulichen.
>
> Die Konfiguration der Einstellung `p=` kann einen großen Einfluss auf die E-Mail-Zustellung Ihrer Domain haben. Es wird empfohlen, `p=none` zu konfigurieren und mehrere Wochen lang Fehlerberichte zu analysieren, um Anomalien festzustellen. Der Wechsel zu `p=quarantine` oder `p=reject` erfordert volle Kontrolle über die E-Mail-Sicherheitseinstellungen für [SPF](/pages/web_cloud/domains/dns_zone_spf) und [DKIM](/pages/web_cloud/domains/dns_zone_dkim). Der unten beschriebene Faktor `pct=` ermöglicht Übergangswerte.

##### Erstes Beispiel

Zur Veranschaulichung dieses ersten Beispiels wurde der [DMARC-Eintrag](#dmarc-record) in der DNS-Zone verwendet und die folgenden Einstellungen angewendet:

![DMARC](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/dns-dmarc-03.png){.thumbnail}

Ergebnis:

```
„v=DMARC1;p=quarantine;pct=100;rua=mailto:report@mydomain.ovh;aspf=s;“
```

Alle gesendeten E-Mails (**pct=100**) werden mit den SPF- und/oder DKIM-Authentifizierungsmechanismen verarbeitet. E-Mails, die den SPF-Test nicht bestanden haben, werden automatisch abgelehnt, da **aspf=s** (SPF im strikten Modus) angegeben ist. Ein Fehlerbericht über einen Fehler bei der SPF- und/oder DKIM-Authentifizierung wird an die Adresse `report@mydomain.ovh` (**rua=mailto:report@mydomain.ovh**) gesendet.

##### Zweites Beispiel

Für das zweite Beispiel wurde ein [TXT-Eintrag](#txt-record) erstellt, um Tags zu verwenden, die nicht über den vereinfachten [DMARC-Eintrag](#dmarc-record) verfügbar sind.

![DMARC](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/dns-dmarc-04.png){.thumbnail}

Ergebnis:

```
„v=DMARC1; p=Quarantine; pct=100; ruf=mailto:report@mydomain.ovh; fo=0; adkim=r; aspf=s; adkim=r; ri=86400“
```

- **p=quarantine**: E-Mails, die die DMARC-Tests nicht bestehen, werden als „verdächtig“ behandelt.

- **pct=100**: Die DMARC-Richtlinie gilt für 50% der Nachrichten aller E-Mails des Domaininhabers.

- **ruf=mailto:report@mydomain.ovh**: E-Mail-Adresse, an die detaillierte Fehlerberichte anhand „mailto“ gesendet werden sollen.

- **fo=0**: Optionen für Fehlerberichterstellung. Der Wert „0“ gibt an, dass DMARC-Fehlerberichte nur generiert werden sollen, wenn die SPF- und DKIM-Authentifizierungsmechanismen nicht zu einem abgestimmten Ergebnis führen.

- **adkim=r**: Der vom Domaininhaber angeforderte Alignment-Modus für DKIM ID ist „relaxed“ (flexibler Modus). In diesem Modus muss DKIM eine gültige Signatur bereitstellen, und der Identifier „From“ im Header kann teilweise abgestimmt sein.

- **aspf=s**: Der erforderliche Alignment-Modus für SPF ist „strict“. Das bedeutet, dass die SPF-Kennung der abgestimmten Domain exakt mit der IP-Adresse übereinstimmen muss, die die Nachricht sendet.

- **adkim=r**: Der vom Domaininhaber angeforderte Alignment-Modus für DKIM ID ist „relaxed“ (flexibler Modus). In diesem Modus muss DKIM eine gültige Signatur bereitstellen, und der Identifier „From“ im Header kann teilweise abgestimmt sein.

- **ri=86400**: Legt das angeforderte Intervall zwischen den aggregierten Berichten in Sekunden fest. In diesem Fall muss ein aggregierter Bericht mindestens alle 86400 Sekunden (einmal täglich) generiert werden.


## Weiterführende Informationen <a name="go-further"></a>

Kontaktieren Sie für spezialisierte Dienstleistungen (SEO, Web-Entwicklung etc.) die [OVHcloud Partner](/links/partner).

Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, beachten Sie unsere [Support-Angebote](/links/support).

Treten Sie unserer [User Community](/links/community) bei.