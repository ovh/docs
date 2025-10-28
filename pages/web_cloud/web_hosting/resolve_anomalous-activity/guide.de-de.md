---
title: "Wie reagiere ich auf ungewöhnliche Aktivitäten auf meinem Webhosting?"
excerpt: "Erfahren Sie, welche Schritte Sie unternehmen sollten, wenn auf Ihrem OVHcloud Webhosting verdächtige Aktivitäten erkannt werden"
updated: 2025-10-02
---

## Ziel

Diese Anleitung erklärt die möglichen Gründe für eine Benachrichtigung über **ungewöhnliche Aktivitäten** auf Ihrem Webhosting, welche **vorübergehenden Folgen** (Sicherheitsblockaden) dies haben kann und **wie Sie die Funktionalität wiederherstellen**, sobald das Problem behoben ist.

**Erfahren Sie, wie Sie auf ungewöhnliche Aktivitäten auf Ihrem OVHcloud Webhosting reagieren.**

## Voraussetzungen

- Sie haben ein [OVHcloud Webhosting](/links/web/hosting).
- Sie haben Zugriff auf das [OVHcloud Kundencenter](/links/manager).

## In der praktischen Anwendung

> [!primary]
> Um Ihre Website und Besucher zu schützen, aktivieren wir automatisch Sicherheitsmaßnahmen, sobald ungewöhnliche Aktivitäten auf Ihrem Webhosting erkannt werden. Die Ursache ist nicht immer ein Angriff; es könnte auch eine subopimierte Website-Konfiguration, ein Drittanbieter-Skript oder eine fehlerhafte Erweiterung sein.

### Warum wird diese Meldung angezeigt?

Wir haben eine ungewöhnliche Aktivität erkannt, die Ihren Dienst beeinträchtigen könnte:

- Fall 1 – **Erkannte Schadsoftware**: Wahrscheinliches Vorhandensein von **schädlichen Dateien**
- Fall 2 – **Ungewöhnliche Anzahl von per PHP gesendeten E-Mails** (Skripte/Anwendungen)
- Fall 3 – **Ungewöhnliche Anzahl von ausgehenden Anfragen** (externe Verbindungen)

Aus Sicherheitsgründen und je nach Situation können bestimmte Funktionen vorübergehend blockiert werden:

- **Zugriff auf die Website** (Fall 1)
- **E-Mail-Versand per PHP** (Fall 1 und Fall 2)
- **Ausgehende Anfragen (TCP OUT)** (Fall 1 und Fall 3)

### Welche Auswirkungen hat dies auf meine Website?

- Abhängig von der erkannten ungewöhnlichen Aktivität kann Ihre **Website nicht mehr online** sein und für Besucher nicht zugänglich sein.
- **E-Mails, die per PHP gesendet werden** (Formulare, Benachrichtigungen etc.) und/oder **ausgehende Verbindungen** (externe APIs, Webhooks, HTTP-Updates etc.) können **vorübergehend deaktiviert** sein, je nach Fall.

### Schritte zur Behebung der Situation

#### Fall 1 – Erkannte Schadsoftware

Ihr Hosting enthält wahrscheinlich schadhafte Dateien. Um diese Anomalien zu verstehen und zu beheben, folgen Sie unserer Anleitung:  
[Use Case - Empfehlungen nachdem Ihre Website gehackt wurde](/pages/web_cloud/web_hosting/cms_what_to_do_if_your_site_is_hacked)

**Nachdem die Bereinigung abgeschlossen ist**, beziehen Sie sich auf den Abschnitt "[Sicherheitsmaßnahmen aufheben](#lift-security-measures)" weiter unten.

#### Fall 2 – Ungewöhnliche Anzahl von per PHP gesendeten E-Mails

Ihre Website hat eine Anzahl von E-Mails per PHP gesendet, die den normalen Schwellenwert überschreitet. Dieses Verhalten könnte **legitim** (Kampagne, Newsletter-Modul) oder **unbeabsichtigt** (exploitierte Formulare, fehlerhafte Skripte, kompromittierte Erweiterung) sein. Um diese Anomalien zu verstehen und zu beheben, konsultieren Sie unsere Anleitung:  
[E-Mails von Ihrem Webhosting nachverfolgen und verwalten](/pages/web_cloud/web_hosting/mail_function_script_records)

**Nachdem die Situation normalisiert ist**, gehen Sie zum Abschnitt "[Sicherheitsmaßnahmen aufheben](#lift-security-measures)".

> [!primary]
>
> Diese Maßnahme gilt **nicht** für die Versendung von Nachrichten über einen E-Mail-Account (per Webmail oder E-Mail-Client). Sie gilt nur für **E-Mails, die über ein Skript gesendet werden** (die PHP-Funktion `mail()` oder SMTP-Versand, der durch eine Anwendung auf Ihrem Webhosting ausgelöst wird).

#### Fall 3 – Ungewöhnliche Anzahl von ausgehenden Anfragen (TCP OUT)

Ihre Website stellt zahlreiche externe Verbindungen her (APIs, Updates, HTTP-Aufrufe etc.). Dies könnte auf einen Defekt hinweisen. Um diese Anomalien zu verstehen und zu beheben, konsultieren Sie unsere Anleitung:  
[Use Case - Empfehlungen nachdem Ihre Website gehackt wurde](/pages/web_cloud/web_hosting/cms_what_to_do_if_your_site_is_hacked)

**Nachdem die Bereinigung abgeschlossen ist**, beziehen Sie sich auf den Abschnitt "[Sicherheitsmaßnahmen aufheben](#lift-security-measures)" weiter unten.

### Sicherheitsmaßnahmen aufheben <a name="lift-security-measures"></a>

> [!warning]
>
> Führen Sie diesen Schritt **erst nach Anwendung der oben genannten Empfehlungen** (Diagnose, Korrekturen/Updates, Sicherheitsverbesserungen) aus. Wenn bei einer nachfolgenden Überprüfung erneut ungewöhnliche Aktivitäten erkannt werden, werden die **Sicherheitsmaßnahmen automatisch erneut aktiviert**. Sie erhalten eine neue Benachrichtigung, und die Blockaden bleiben bestehen, bis die **Situation dauerhaft gelöst** ist.

1. Melden Sie sich in Ihrem [OVHcloud Kundencenter](/links/manager) an, gehen Sie zu `Web Cloud`{.action} und klicken Sie auf Ihr Webhosting.
2. Ein **Warnfenster** erscheint: `Ungewöhnliche Aktivitäten auf Ihrem Hosting`. Wenn Sie auf die Schaltfläche `Später`{.action} klicken, erscheint eine **Warnleiste** `Ungewöhnliche Aktivitäten erkannt` oben auf der Seite. Klicken Sie auf `Mehr erfahren`{.action}, um das Warnfenster erneut zu öffnen.
3. **Aktivieren Sie** das Feld: `Ich bestätige, dass ich alle notwendigen Maßnahmen ergriffen habe, um das Problem zu beheben`.
4. Klicken Sie auf `Sicherheitsmaßnahmen aufheben`{.action}.
5. Eine **Bestätigungsleiste** erscheint oben auf der Seite: `Ihr Hosting wird analysiert, um die Sicherheitsmaßnahmen aufzuheben.` Verfolgen Sie den Fortschritt, indem Sie auf den Link `Aktuelle Tasks anzeigen`{.action} klicken oder direkt über den Tab `Aktuelle Tasks`{.action}.

> [!warning]
>
> Stellen Sie sicher, dass Ihr Dienst **für die automatische Entsperrung berechtigt ist** (manche Statusse erlauben keine sofortige Aufhebung der Maßnahmen).

## Weiterführende Informationen

[Website absichern](/pages/web_cloud/web_hosting/secure_your_website)

Kontaktieren Sie für spezialisierte Dienstleistungen (SEO, Web-Entwicklung etc.) die [OVHcloud Partner](/links/partner).

Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, beachten Sie unsere [Support-Angebote](/links/support).

Treten Sie unserer [User Community](/links/community) bei.
