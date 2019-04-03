---
title: 'SSL-Zertifikat auf einem Webhosting verwalten'
slug: ssl-zertifikate-auf-webhostings-verwalten
excerpt: 'Hier erfahren Sie, wie Sie ein SSL-Zertifikat auf Ihrem OVH Webhosting verwalten.'
section: SSL
order: 1
---

**Stand 29.03.2019**

## Einleitung

Sie haben bei Ihrem Webhosting die Möglichkeit, ein SSL-Zertifikat einzurichten. Dieses können Sie entweder direkt bei OVH bestellen oder ein Zertifikat eines anderen Anbieters auf Ihr Hosting importieren. Sobald die Installation des Zertifikats auf Ihrem Webhosting abgeschlossen ist, können Sie eine oder mehrere Ihrer Websites mit einer sicheren SSL-Verbindung und somit über HTTPS betreiben. 

**In dieser Anleitung erfahren Sie alles über die Verwaltung eines SSL-Zertifikats auf Ihrem OVH Webhosting.**

## Voraussetzungen

- Sie verfügen über ein [OVH Webhosting](https://www.ovh.de/hosting/){.external}.
- Sie besitzen mindestens eine [Domain](https://www.ovh.de/domains/){.external}.
- Sie sind in Ihrem [OVH Kundencenter](https://www.ovh.com/auth/?action=gotomanager){.external} eingeloggt und befinden sich im Bereich `Web`{.action}.

## Beschreibung

Was die Verwaltung des SSL-Zertifikats auf Ihrem OVH Webhosting betrifft, gibt es verschiedene mögliche Operationen. Bitte wählen Sie aus den in dieser Anleitung behandelten Themen das für Sie passende aus:

- [SSL-Zertifikat auf dem Hosting aktivieren](http://docs.ovh/de-de/web/hosting/ssl-zertifikate-auf-webhostings-verwalten/#ssl-zertifikat-auf-dem-hosting-aktivieren){.external}: Aktivieren Sie direkt über OVH ein kostenloses oder zahlungspflichtiges SSL-Zertifikat auf Ihrem Webhosting oder importieren Sie Ihr eigenes SSL-Zertifikat eines anderen Anbieters.

- [SSL für eine Multisite aktivieren](http://docs.ovh/de-de/web/hosting/ssl-zertifikate-auf-webhostings-verwalten/#ssl-fur-eine-multisite-aktivieren){.external}: Wenn Ihr Angebot bzw. Ihr SSL-Zertifikat diese Option beinhaltet, können Sie mehrere Multisites mit einer sicheren SSL-Verbindung ausstatten.

- [SSL-Zertifikat für das Hosting erneuern](https://docs.ovh.com/de/hosting/ssl-zertifikate-auf-webhostings-verwalten/#ssl-zertifikat-fur-das-hosting-erneuern){.external}: Erneuern Sie das SSL-Zertifikat für Ihr Webhosting, wenn Sie SSL für eine oder mehrere Multisites aktiviert haben. 

- [SSL-Zertifikat vom Hosting löschen](https://docs.ovh.com/de/hosting/ssl-zertifikate-auf-webhostings-verwalten/#ssl-zertifikat-vom-hosting-loschen){.external}: Löschen Sie das SSL-Zertifikat von Ihrem OVH Webhosting. Dieser Vorgang ist allerdings riskant, wenn Ihr Zertifikat aktuell von einer oder mehreren Ihrer Websites verwendet wird. 

### SSL-Zertifikat auf dem Hosting aktivieren

Bei Ihrem OVH Webhosting haben Sie für die Aktivierung eines [SSL-Zertifikats verschiedene Optionen](https://www.ovh.de/ssl/){.external}:

- das kostenfreie SSL-Zertifikat von Let's Encrypt, [das bei allen kompatiblen Webhosting Angeboten inklusive ist](https://www.ovh.de/ssl/){.external}
- ein kostenpflichtiges SSL-Zertifikat [als optionale Zusatzleistung bei allen kompatiblen Webhosting Angeboten](https://www.ovh.de/ssl/){.external}
- Import eines anderweitig erworbenen SSL-Zertifikats auf Ihr Webhosting

Um mit der Aktivierung eines Zertifikats zu beginnen, loggen Sie sich zunächst in Ihr [OVH Kundencenter](https://www.ovh.com/auth/?action=gotomanager){.external} ein, klicken Sie links im Menü auf `Hosting-Pakete`{.action} und wählen Sie das betreffende Hosting aus. Achten Sie darauf, dass Sie sich in dem Tab `Allgemeine Informationen`{.action} befinden. Unterhalb von „SSL-Zertifikat“ müsste ein kleines „Nein“ stehen, was anzeigt, dass bisher kein SSL-Zertifikat auf Ihrem Webhosting installiert wurde. Klicken Sie dann rechts neben „SSL-Zertifikat“ auf den Button mit den drei Punkten und anschließend auf `SSL-Zertifikat bestellen`{.action}.

Sollte allerdings an der genannten Stelle ein kleines „Ja“ erscheinen, so bedeutet dies, dass auf Ihrem Hosting bereits ein SSL-Zertifikat installiert wurde. Solange dies der Fall ist, können Sie kein neues SSL-Zertifikat bestellen.

![ssl verwalten](images/manage-ssl-step1.png){.thumbnail}

Wählen Sie in dem Fenster, das nun erscheint, das gewünschte SSL-Zertifikat aus. Je nach Art Ihres [Webhostings](https://www.ovh.de/hosting/){.external} bzw. dessen Konfiguration ist es möglich, dass nicht alle oben aufgeführten Lösungen verfügbar sind. Nachdem Sie Ihre Auswahl vorgenommen haben, klicken Sie auf `Weiter`{.action}.

![ssl verwalten](images/manage-ssl-step2.png){.thumbnail}

Je nach gewünschter Lösung können weitere Schritte notwendig sein:

- **Wenn Sie sich für ein kostenloses SSL-Zertifikat entschieden haben**, sollten keine weiteren Maßnahmen erforderlich sein. Es sei denn, aus technischen Gründen ist die Aktivierung des SSL-Zertifikats (in diesem Fall erscheint in Ihrem Kundencenter eine entsprechende Meldung mit den zu prüfenden Elementen) oder die Überprüfung des Domainnamens für die Ausstellung des SSL-Zertifikats nicht möglich. In diesem Fall werden Sie auf das Problem hingewiesen und bekommen entsprechende Anweisungen.

- **Wenn Sie sich für ein kostenpflichtiges SSL-Zertifikat entschieden haben**, müssen Sie alle Bestellschritte abschließen, um Ihr Zertifikat zu erhalten. Für einige Arten von SSL-Zertifikaten ist ein spezifischer Validierungsprozess notwendig. Sie werden daher möglicherweise eine oder mehrere entsprechende E-Mails erhalten. Befolgen Sie die darin enthaltenen Anweisungen, um die Installation abzuschließen.

- **Wenn Sie sich für den Import eines SSL-Zertifikats entschieden haben**, müssen die zugehörigen Informationen in den entsprechenden Feldern eingegeben werden. Bitte verwenden Sie hierfür die Informationen, die Sie beim Erwerb des Zertifikats von Ihrem Anbieter erhalten haben. 

Je nach Art des gewählten Zertifikats kann die Installation wenige Minuten bis hin zu mehreren Tagen in Anspruch nehmen. Um zu überprüfen, ob das SSL-Zertifikat bereits auf Ihrem Webhosting installiert wurde, begeben Sie sich in Ihrem Kundencenter in den Tab `Allgemeine Informationen`{.action}. Wenn die Installation abgeschlossen ist, erscheint unterhalb von „SSL-Zertifikat“ ein kleines „Ja“. 

![ssl verwalten](images/manage-ssl-step4.png){.thumbnail}

Nach Abschluss der Installation können Sie „[SSL für eine Multisite aktivieren](https://docs.ovh.com/de/hosting/ssl-zertifikate-auf-webhostings-verwalten/#ssl-fur-eine-multisite-aktivieren){.external}“, um sicherzustellen, dass für alle gewünschten Websites eine sichere SSL-Verbindung aktiviert ist.

### SSL für eine Multisite aktivieren

Je nach Art Ihres [SSL-Zertifikats](https://www.ovh.de/ssl/){.external} können Sie eine sichere SSL-Verbindung für eine oder mehrere Ihrer Multisites aktivieren. Loggen Sie sich in Ihr [OVH Kundencenter](https://www.ovh.com/auth/?action=gotomanager){.external} ein, klicken Sie links im Menü auf `Hosting-Pakete`{.action} und wählen Sie das betreffende Hosting aus. Gehen Sie dann auf den Tab `Multisite`{.action}.

Die angezeigte Tabelle listet alle Domains auf, die Ihrem Hosting zugewiesen sind. In der Spalte „SSL“ finden Sie Informationen zum Aktivierungsstatus der sicheren SSL-Verbindung für Ihre verschiedenen Multisites. 

![ssl verwalten](images/manage-ssl-step5.png){.thumbnail}

Hier können drei verschiedene Status erscheinen:

|Status|Beschreibung|
|---|---|
|Aktiviert|Zeigt an, dass SSL für diese Multisite bereits aktiviert wurde. Sollte Ihre Seite dennoch nicht via HTTPS verfügbar sein, lesen Sie unsere Anleitung „[Website mit SSL-Zertifikat auf HTTPS umstellen](https://docs.ovh.com/de/hosting/website-umstellen-https-ssl/){.external}“.|
|Zu erstellen|Zeigt an, dass SSL für diese Multisite zwar aktiviert wurde, aber noch nicht technisch aktiv ist. Erneuern Sie in diesem Fall das SSL-Zertifikat Ihres Webhostings, damit es auch für die neuen Domainnamen funktioniert.|
|Deaktiviert|Zeigt an, dass SSL für diese Multisite noch nicht aktiviert wurde. Wenn Sie es aktivieren möchten, folgen Sie den untenstehenden Anweisungen.|

Um SSL für eine Multisite zu aktivieren, klicken Sie auf das kleine Zahnrad rechts neben der betreffenden Domain und anschließend auf `Ändern`{.action}. Setzen Sie im angezeigten Fenster ein Häkchen bei `SSL`{.action} und folgen Sie den weiteren Anweisungen bis zur Bestätigung der Änderung.

Sobald die Aktivierung angefordert wurde, ändert sich die Statusanzeige zur sicheren SSL-Verbindung für die betreffende Multisite innerhalb weniger Sekunden auf „Zu erstellen“. Falls Sie für weitere Multisites SSL aktivieren möchten, wiederholen Sie den Vorgang entsprechend. Anschließend können Sie mit dem Schritt „[SSL-Zertifikat für das Hosting erneuern](https://docs.ovh.com/de/hosting/ssl-zertifikate-auf-webhostings-verwalten/#ssl-zertifikat-fur-das-hosting-erneuern){.external}“ fortfahren.

![ssl verwalten](images/manage-ssl-step6.png){.thumbnail}

### SSL-Zertifikat für das Hosting erneuern

> [!primary]
>
> Diese Operation betrifft ausschließlich Zertifikate, mit denen die Aktivierung einer sicheren SSL-Verbindung für mehrere Multisites möglich ist.
>

Wenn Sie die sichere SSL-Verbindung für eine oder mehrere Ihrer Multisites aktiviert haben, wird folgender Status angezeigt: „Zu erstellen“. Dieser Erstellungsvorgang ist unbedingt notwendig, um die betreffenden Domainnamen zum SSL-Zertifikat Ihres Hostings hinzuzufügen. 

Loggen Sie sich in Ihr [OVH Kundencenter](https://www.ovh.com/auth/?action=gotomanager){.external} ein, klicken Sie links im Menü auf `Hosting-Pakete`{.action} und wählen Sie das betreffende Hosting aus. Achten Sie darauf, dass Sie sich in dem Tab `Allgemeine Informationen`{.action} befinden. Klicken Sie dann rechts neben „SSL-Zertifikat“ auf den Button mit den drei Punkten und anschließend auf `SSL-Zertifikat neu erstellen`{.action}.

![ssl verwalten](images/manage-ssl-step7.png){.thumbnail}

Lesen Sie die im nächsten Fenster angezeigten Informationen aufmerksam durch und klicken Sie dann auf `Bestätigen`{.action}. Warten Sie nun ab, bis die Erneuerung Ihres SSL-Zertifikats abgeschlossen ist. Dieser Vorgang kann mehrere Stunden dauern.

Bitte beachten Sie, dass Let's Encrypt – die Zertifizierungsstelle, die das in Ihrem Webhosting enthaltene kostenlose SSL-Zertifikat bereitstellt – [maximal fünf Erneuerungen pro Woche](https://letsencrypt.org/docs/rate-limits/){.external} zulässt. Wir raten Ihnen daher, auf deren Anzahl zu achten, wenn Sie innerhalb kurzer Zeit mehrere Erneuerungen vornehmen, damit Sie nicht vorübergehend blockiert werden.

![ssl verwalten](images/manage-ssl-step8.png){.thumbnail}

### SSL-Zertifikat vom Hosting löschen

Sie können ein auf Ihrem Webhosting installiertes SSL-Zertifikat jederzeit löschen. Bevor Sie dies jedoch tun, **empfehlen wir Ihnen dringend, sicherzustellen, dass das Löschen des Zertifikats den Zugriff auf Ihre Websites nicht beeinträchtigt**. Bitte beachten Sie, dass bei Ihren Besuchern ein Sicherheitsfehler gemeldet wird, wenn sie auf eine HTTPS-Website zugreifen, zu der jedoch keine sichere SSL-Verbindung hergestellt werden kann. 

Da hierfür die Überprüfung Ihrer Website-Einstellungen erforderlich ist, empfehlen wir Ihnen, sich im Falle von Problemen mit einem spezialisierten Dienstleister in Verbindung zu setzen. Für externe Dienstleistungen können wir Ihnen leider keine Unterstützung anbieten. 

Wenn Sie das SSL-Zertifikats löschen möchten, loggen Sie sich zunächst in Ihr [OVH Kundencenter](https://www.ovh.com/auth/?action=gotomanager){.external} ein, klicken Sie links im Menü auf `Hosting-Pakete`{.action} und wählen Sie das betreffende Webhosting aus. Achten Sie darauf, dass Sie sich in dem Tab `Allgemeine Informationen`{.action} befinden. Klicken Sie dann rechts neben „SSL-Zertifikat“ auf den Button mit den drei Punkten und anschließend auf `SSL löschen`{.action}.

Bestätigen Sie auf der angezeigten Seite den Löschvorgang. Dieser dauert höchstens ein paar Stunden. 

![ssl verwalten](images/manage-ssl-step9.png){.thumbnail}

## Weiterführende Informationen

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.