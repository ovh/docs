---
title: 'SSL-Zertifikat auf einem Webhosting verwalten'
slug: ssl-zertifikate-auf-webhostings-verwalten
excerpt: 'Hier erfahren Sie, wie Sie ein SSL-Zertifikat auf Ihrem OVH Webhosting verwalten.'
section: SSL
order: 1
---

**Stand 05.07.2019**

## Einleitung

Sie haben bei Ihrem Webhosting die Möglichkeit, ein SSL-Zertifikat einzurichten. Dieses können Sie entweder direkt bei OVH bestellen oder selbst ein Zertifikat auf Ihr Hosting importieren. Sobald das Zertifikat auf Ihrem Webhosting installiert und fertig eingerichtet ist, können Sie eine oder mehrere Ihrer Websites mit einer sicheren SSL-Verbindung und somit über HTTPS betreiben.

**In dieser Anleitung erfahren Sie alles über die Verwaltung eines SSL-Zertifikats auf einem OVH Webhosting.**

## Voraussetzungen

- Sie verfügen über ein [OVH Webhosting](https://www.ovh.de/hosting/){.external}.
- Sie haben mindestens eine [Domain](https://www.ovh.de/domains/){.external} registriert.
- Sie haben Zugriff auf Ihr [OVH Kundencenter](https://www.ovh.com/auth/?action=gotomanager){.external} im Bereich „Web“.

## Beschreibung

Was die Verwaltung des SSL-Zertifikats auf Ihrem OVH Webhosting betrifft, gibt es verschiedene mögliche Vorgehensweisen. Wir empfehlen Ihnen, die folgenden Kapitel zu lesen und die für Sie passende Methode auszuwählen.

- [SSL-Zertifikat auf Ihrem Webhosting aktivieren](http://docs.ovh.com/de/hosting/ssl-zertifikate-auf-webhostings-verwalten/#ssl-zertifikat-auf-ihrem-webhosting-aktivieren){.external}: Aktivieren Sie ein bei OVH bestelltes kostenloses oder zahlungspflichtiges SSL-Zertifikat auf Ihrem Webhosting oder importieren Sie Ihr eigenes SSL-Zertifikat eines anderen Anbieters.

- [SSL-Zertifikat auf einer Multisite aktivieren](http://docs.ovh.com/de/hosting/ssl-zertifikate-auf-webhostings-verwalten/#ssl-zertifikat-auf-einer-multisite-aktivieren){.external}: Wenn Ihr Angebot bzw. Ihr SSL-Zertifikat diese Option beinhaltet, können Sie mehrere Multisites mit einer sicheren SSL-Verbindung ausstatten.

- [SSL-Zertifikat für das Webhosting erneuern](https://docs.ovh.com/de/hosting/ssl-zertifikate-auf-webhostings-verwalten/#ssl-zertifikat-fur-das-webhosting-erneuern){.external}: Erneuern Sie das SSL-Zertifikat für Ihr Webhosting, wenn Sie SSL für eine oder mehrere Multisites aktivieren. 

- [SSL-Zertifikat vom Webhosting löschen](https://docs.ovh.com/de/hosting/ssl-zertifikate-auf-webhostings-verwalten/#ssl-zertifikat-vom-webhosting-loschen){.external}: Löschen Sie das SSL-Zertifikat von Ihrem OVH Webhosting. Dieser Vorgang ist allerdings riskant, wenn Ihr Zertifikat aktuell von einer oder mehreren Ihrer Websites verwendet wird. 

### SSL-Zertifikat auf Ihrem Webhosting aktivieren

Bei Ihrem OVH Webhosting haben Sie für die Aktivierung eines [SSL-Zertifikats verschiedene Optionen](https://www.ovh.de/ssl/){.external}:

- das kostenfreie SSL-Zertifikat von Let's Encrypt, [das bei allen kompatiblen Webhosting Angeboten inklusive ist](https://www.ovh.de/ssl/){.external}
- ein kostenpflichtiges SSL-Zertifikat [als optionale Zusatzleistung bei allen kompatiblen Webhosting Angeboten](https://www.ovh.de/ssl/){.external}
- Import eines Zertifikats, das bei einem anderen Anbieter bestellt wurde

Um Ihr Zertifikat zu aktivieren, loggen Sie sich zunächst in Ihr [OVH Kundencenter](https://www.ovh.com/auth/?action=gotomanager){.external} ein, klicken Sie links im Menü auf `Hosting-Pakete`{.action} und wählen Sie das betreffende Hosting aus. Klicken Sie auf den Tab `Allgemeine Informationen`{.action}. Unterhalb von „SSL-Zertifikat“ müsste ein kleines „Nein“ stehen, was anzeigt, dass bisher kein SSL-Zertifikat auf Ihrem Webhosting eingerichtet oder installiert wurde. Klicken Sie rechts neben „SSL-Zertifikat“ auf die drei Punkte und anschließend auf `SSL-Zertifikat bestellen`{.action}.

Sollte an der genannten Stelle ein kleines „Ja“ erscheinen, so bedeutet dies, dass auf Ihrem Webhosting bereits ein SSL-Zertifikat installiert und eingerichtet wurde. Aus diesem Grund können Sie kein neues SSL-Zertifikat bestellen, solange das vorhandene Zertifikat installiert ist.

![ssl verwalten](images/manage-ssl-step1.png){.thumbnail}

Wählen Sie in dem angezeigten Fenster das SSL-Zertifikat aus, das Sie bestellen möchten. Je nach Art Ihres [Webhosting](https://www.ovh.de/hosting/){.external} Angebots und dessen Konfiguration kann es sein, dass keine der nachstehend aufgeführten Lösungen verfügbar ist. Wenn Sie Ihre Auswahl vorgenommen haben, klicken Sie auf `Weiter`{.action}.

![ssl verwalten](images/manage-ssl-step2.png){.thumbnail}

Je nach ausgewählter Lösung können weitere Schritte notwendig sein:

- **Wenn Sie sich für ein kostenloses SSL-Zertifikat entschieden haben**, sind keine weiteren Maßnahmen Ihrerseits erforderlich, es sei denn, die Aktivierung des SSL-Zertifikats ist aus technischen Gründen blockiert (in diesem Fall erscheint in Ihrem OVH Kundencenter eine entsprechende Meldung mit den zu prüfenden Elementen) oder die Überprüfung der Domain für die Ausstellung des SSL-Zertifikats ist nicht möglich. In diesem Fall werden Sie auf das Problem hingewiesen und bekommen entsprechende Anweisungen.

- **Wenn Sie sich für ein kostenpflichtiges SSL-Zertifikat entschieden haben**, muss zuerst der Bestellprozess abgeschlossen sein, damit Sie Ihr Zertifikat erhalten. Für einige Arten von SSL-Zertifikaten ist ein spezifischer Validierungsprozess notwendig. Sie werden daher möglicherweise eine oder mehrere entsprechende E-Mails zur Bestätigung erhalten. Ist das der Fall, befolgen Sie die darin enthaltenen Anweisungen, um die Konfiguration abzuschließen.

- **Wenn Sie sich für den Import eines SSL-Zertifikats entschieden haben**, müssen die zugehörigen Informationen in den entsprechenden Feldern eingegeben werden. Bitte verwenden Sie hierfür die Informationen, die Sie beim Erwerb des Zertifikats von Ihrem Anbieter erhalten haben. 

Je nach Art des gewählten Zertifikats kann die Konfiguration wenige Minuten bis hin zu mehreren Tagen dauern. Um zu überprüfen, ob das SSL-Zertifikat bereits auf Ihrem Webhosting eingerichtet wurde, begeben Sie sich in Ihrem OVH Kundencenter in den Tab `Allgemeine Informationen`{.action}. Jetzt sollte ein kleines „Ja“ unter „SSL-Zertifikat“ erscheinen. 

![ssl verwalten](images/manage-ssl-step4.png){.thumbnail}

Nach Abschluss der Konfiguration können Sie [SSL auf einer Multisite aktivieren](https://docs.ovh.com/de/hosting/ssl-zertifikate-auf-webhostings-verwalten/#ssl-auf-einer-multisite-aktivieren){.external}, um sicherzustellen, dass für alle gewünschten Websites eine sichere SSL-Verbindung aktiviert ist.

### SSL-Zertifikat auf einer Multisite aktivieren

Je nach Art Ihres [SSL-Zertifikats](https://www.ovh.de/ssl/){.external} können Sie eine sichere SSL-Verbindung für eine oder mehrere Ihrer Multisites aktivieren. Loggen Sie sich in Ihr [OVH Kundencenter](https://www.ovh.com/auth/?action=gotomanager){.external} ein, klicken Sie links im Menü auf `Hosting-Pakete`{.action} und wählen Sie das betreffende Hosting aus. Gehen Sie dann auf den Tab `Multisite`{.action}.

Die angezeigte Tabelle listet alle Domains auf, die Ihrem Webhosting zugewiesen sind. In der Spalte „SSL“ finden Sie den Aktivierungsstatus der sicheren SSL-Verbindung für Ihre verschiedenen Multisites. 

![ssl verwalten](images/manage-ssl-step5.png){.thumbnail}

Hier können drei verschiedene Status erscheinen:

|Status|Beschreibung|
|---|---|
|Aktiviert|Es wurde bereits ein SSL-Zertifikat für diese Multisite aktiviert. Sollte Ihre Seite dennoch nicht via HTTPS verfügbar sein, lesen Sie unsere Anleitung „[Website mit SSL-Zertifikat auf HTTPS umstellen](https://docs.ovh.com/de/hosting/website-umstellen-https-ssl/){.external}“.|
|Zu erstellen|Es wurde ein SSL-Zertifikat für diese Multisite aktiviert, ist aber noch nicht technisch aktiv. Erneuern Sie in diesem Fall das Zertifikat, damit es auch für die neuen Multisite-Domains funktioniert.|
|Deaktiviert|Es wurde noch kein SSL-Zertifikat für diese Multisite aktiviert. Um es zu aktivieren, folgen Sie den untenstehenden Anweisungen.|

Um SSL für eine Multisite zu aktivieren, klicken Sie auf das kleine Zahnrad rechts neben der betreffenden Domain und anschließend auf `Ändern`{.action}. Setzen Sie im angezeigten Fenster ein Häkchen bei `SSL`{.action} und folgen Sie den weiteren Anweisungen bis zur Bestätigung der Änderung.

Sobald die Aktivierung angefordert wurde, ändert sich die Statusanzeige zur sicheren SSL-Verbindung für die betreffende Multisite innerhalb weniger Sekunden auf „Zu erstellen“. Falls Sie für weitere Multisites SSL aktivieren möchten, wiederholen Sie den Vorgang entsprechend. Anschließend können Sie mit dem Schritt „[SSL-Zertifikat für das Webhosting erneuern](https://docs.ovh.com/de/hosting/ssl-zertifikate-auf-webhostings-verwalten/#ssl-zertifikat-fur-das-webhosting-erneuern){.external}“ fortfahren.

![ssl verwalten](images/manage-ssl-step6.png){.thumbnail}

### SSL-Zertifikat für das Webhosting erneuern

> [!primary]
>
> Diese Operation betrifft ausschließlich Zertifikate, mit denen die Aktivierung einer sicheren SSL-Verbindung für mehrere Multisites möglich ist. 
>

Wenn Sie die sichere SSL-Verbindung für eine oder mehrere Ihrer Multisites aktiviert haben, wird als Status „Zu erstellen“ angezeigt. Dieser Erstellungsvorgang ist unbedingt notwendig, um das SSL-Zertifikat zu Ihrem Webhosting hinzuzufügen.

Loggen Sie sich in Ihr [OVH Kundencenter](https://www.ovh.com/auth/?action=gotomanager){.external} ein, klicken Sie links im Menü auf `Hosting-Pakete` und wählen Sie das betreffende Webhosting aus. Klicken Sie auf den Tab `Allgemeine Informationen`{.action}. Klicken Sie dann rechts neben „SSL-Zertifikat“ auf die drei Punkte und anschließend auf `SSL-Zertifikat neu erstellen`{.action}.

![ssl verwalten](images/manage-ssl-step7.png){.thumbnail}

Lesen Sie die im nächsten Fenster angezeigten Informationen aufmerksam durch und klicken Sie dann auf `Bestätigen`{.action}. Warten Sie nun ab, bis die Erneuerung Ihres SSL-Zertifikats abgeschlossen ist. Dieser Vorgang kann mehrere Stunden dauern.

Bitte beachten Sie, dass Let's Encrypt – die Zertifizierungsstelle, die das in Ihrem Webhosting enthaltene kostenlose SSL-Zertifikat bereitstellt – [maximal fünf Erneuerungen pro Woche](https://letsencrypt.org/docs/rate-limits/){.external} zulässt. Wir raten Ihnen daher, auf deren Anzahl zu achten, wenn Sie innerhalb kurzer Zeit mehrere Erneuerungen vornehmen, damit Sie nicht vorübergehend blockiert werden.

![ssl verwalten](images/manage-ssl-step8.png){.thumbnail}

### SSL-Zertifikat vom Webhosting löschen

Sie können ein auf Ihrem Webhosting installiertes SSL-Zertifikat jederzeit löschen. Bevor Sie dies tun, **empfehlen wir Ihnen dringend, sicherzustellen, dass das Löschen des Zertifikats den Zugriff auf Ihre Websites nicht beeinträchtigt**. Denken Sie daran, dass bei Ihren Besuchern ein Sicherheitsfehler gemeldet wird, wenn sie auf eine HTTPS-Website zugreifen, zu der jedoch keine sichere SSL-Verbindung hergestellt werden kann. 

Da hierfür die Überprüfung Ihrer Website-Einstellungen erforderlich ist, empfehlen wir Ihnen, sich im Falle von Problemen mit einem spezialisierten Dienstleister in Verbindung zu setzen. Für externe Dienstleistungen können wir Ihnen leider keine Unterstützung anbieten.

Wenn Sie das SSL-Zertifikats löschen möchten, loggen Sie sich zunächst in Ihr [OVH Kundencenter](https://www.ovh.com/auth/?action=gotomanager){.external} ein, klicken Sie links im Menü auf `Hosting-Pakete`{.action} und wählen Sie das betreffende Webhosting aus. Vergewissern Sie sich, dass Sie sich im Tab `Allgemeine Informationen`{.action} befinden und Klicken Sie dann rechts neben „SSL-Zertifikat“ auf die drei Punkte und anschließend auf `SSL löschen`{.action}.

Bestätigen Sie auf der angezeigten Seite den Löschvorgang. Dieser dauert höchstens ein paar Stunden. 

![ssl verwalten](images/manage-ssl-step9.png){.thumbnail}


## Weiterführende Informationen

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.