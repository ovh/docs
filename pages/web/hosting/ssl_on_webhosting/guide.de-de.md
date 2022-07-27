---
title: 'SSL-Zertifikat auf einem Webhosting verwalten'
slug: ssl-zertifikate-auf-webhostings-verwalten
excerpt: 'Erfahren Sie hier, wie Sie ein SSL-Zertifikat auf Ihrem OVHcloud Webhosting verwalten'
section: 'SSL'
order: 1
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie beim geringsten Zweifel die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button «Mitmachen» auf dieser Seite.
>

**Letzte Aktualisierung am 26.07.2022**

Sie haben bei Ihrem Webhosting die Möglichkeit, ein SSL-Zertifikat einzurichten. Das Zertifikat können Sie entweder direkt bei OVHcloud bestellen oder eines auf Ihr Hosting importieren. Sobald das Zertifikat auf Ihrem Webhosting installiert und fertig eingerichtet ist, können Sie eine oder mehrere Ihrer Websites mit einer sicheren SSL-Verbindung und somit über HTTPS betreiben.

**In dieser Anleitung erfahren Sie alles über die Verwaltung eines SSL-Zertifikats auf einem OVHcloud Webhosting.**

## Voraussetzungen

- Sie verfügen über ein [OVHcloud Webhosting](https://www.ovhcloud.com/de/web-hosting/){.external}.
- Sie haben mindestens eine [Domain](https://www.ovhcloud.com/de/domains/){.external} registriert.
- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de).

## In der praktischen Anwendung

Es sind mehrere Schritte notwendig, um ein SSL-Zertifikat auf Ihrem OVHcloud-Webhosting zu erstellen. Wir empfehlen Ihnen, die 3 Schritte **in der folgenden Reihenfolge** durchzuführen.

- [1. SSL-Zertifikat auf Ihrem Webhosting aktivieren](#enablessl): Dieser Abschnitt hilft Ihnen, ein SSL-Zertifikat auf Ihrem Webhosting zu aktivieren. Dabei kann es sich um ein kostenloses oder kostenpflichtiges Zertifikat handeln, das bei OVHcloud bestellt wurde. Sie können auch Ihr eigenes, bei einem anderen Anbieter bestelltes SSL-Zertifikat importieren.

- [2. SSL-Zertifikat für eine Multisite aktivieren](#multisite): Wenn Ihre Lösung oder Ihr SSL-Zertifikat dies erlauben, können Sie mehrere Ihrer Multisites mit einer sicheren SSL-Verbindung ausstatten.

- [3. SSL-Zertifikat auf einem Webhosting neu erstellen](#regeneratessl): Dieser Schitt ermöglicht es, ein SSL-Zertifikat von Let's Encrypt auf Ihrem Webhosting zu erstellen, wenn Sie SSL auf einer oder mehreren Multisites neu aktiviert haben.

Sie können auch [SSL-Zertifikat auf einem Webhosting löschen](#deletessl). **Bitte beachten Sie, dass dies Risiken bergen kann, wenn eine Ihrer Webseiten das Zertifikat verwendet, das Sie löschen möchten**.

### 1. SSL-Zertifikat auf Ihrem Webhosting aktivieren <a name="enablessl"></a>

Bei Ihrem OVHcloud Webhosting haben Sie für die Aktivierung eines [SSL-Zertifikats](https://www.ovh.de/ssl/){.external} verschiedene Optionen:

- das kostenfreie SSL-Zertifikat von Let's Encrypt, [das bei allen kompatiblen Webhosting Angeboten inklusive ist](https://www.ovh.de/ssl/){.external}
- ein kostenpflichtiges SSL-Zertifikat [als optionale Zusatzleistung bei allen kompatiblen Webhosting Angeboten](https://www.ovh.de/ssl/){.external}
- Import eines Zertifikats, das bei einem anderen Anbieter erworben wurde

Um Ihr Zertifikat zu aktivieren, loggen Sie sich in Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de){.external} ein und wählen Sie im Bereich `Web Cloud`{.action} unter `Hosting-Pakete`{.action} das betreffende Hosting aus. Gehen Sie dann auf den Tab `Allgemeine Informationen`{.action}. Unter dem Tab "SSL-Zertifikat" sollte der Eintrag "Nein" erscheinen, aus dem hervorgeht, dass auf Ihrem Webhosting kein SSL-Zertifikat eingerichtet und installiert wurde.

> [!primary]
>
> Vergewissern Sie sich, dass der vorherige Schritt der [Aktivierung eines SSL-Zertifikats für eine Multisite](#multisite) korrekt durchgeführt wurde. Mindestens eine Domain muss die SSL-Option `Aktiviert` oder den Status `Erstellen` haben, um das SSL-Zertifikat zu aktivieren<br>.
> Diese Angaben finden keine Anwendung, wenn Sie `Kostenpflichtiges Zertifikat`{.action} oder `Import Ihres SSL-Zertifikats`{.action} auswählen.
>

Klicken Sie auf den Button `...`{.action} neben "SSL-Zertifikat" und dann auf `SSL-Zertifikat bestellen`{.action}.

Wenn das Wort "Ja" erscheint, bedeutet dies, dass bereits ein SSL-Zertifikat auf dem Webhosting installiert und konfiguriert wurde. Daher können Sie kein anderes Zertifikat bestellen, solange das bestehende Zertifikat aktiv ist.

![ssl verwalten](images/manage-ssl-step1.png){.thumbnail}

Wählen Sie in dem neuen Fenster das SSL-Zertifikat aus, das Sie bestellen möchten. Je nach Art Ihres [Webhosting](https://www.ovhcloud.com/de/web-hosting/){.external} Angebots und dessen Konfiguration kann es sein, dass keine der nachstehend aufgeführten Lösungen verfügbar ist. Wenn Sie Ihre Auswahl vorgenommen haben, klicken Sie auf `Weiter`{.action}.

![ssl verwalten](images/manage-ssl-step2.png){.thumbnail}

Je nach gewählter Lösung können weitere Schritte notwendig sein:

- **wenn Sie ein kostenloses SSL-Zertifikat ausgewählt haben:** Sie brauchen keine weiteren Aktionen durchzuführen, es sei denn, ein technisches Element verhindert die Aktivierung des SSL-Zertifikats (in diesem Fall erscheint eine Nachricht im OVHcloud Kundencenter, in der die zu überprüfenden Elemente aufgeführt sind) oder die Validierung Ihrer Domain für die Ausstellung des SSL-Zertifikats. In diesem Fall werden Sie benachrichtigt. Befolgen die Anweisungen, die Ihnen mitgeteilt werden.

- **wenn Sie ein kostenpflichtiges SSL-Zertifikat ausgewählt haben:** Sie müssen den Bestellprozess abschließen, um ein Zertifikat zu erhalten. Für einige Arten von SSL-Zertifikaten ist ein spezifischer Validierungsprozess notwendig. Sie werden daher eine oder mehrere entsprechende E-Mails zur Bestätigung erhalten. Ist das der Fall, lesen Sie die darin enthaltenen Informationen und folgen Sie den Anweisungen zum Abschluss der Konfiguration.

- **wenn Sie sich für den Import eines SSL Zertifikats entschieden haben:** Geben Sie in den angezeigten Feldern die Details des Zertifikats ein. Bitte verwenden Sie hierfür die Informationen, die Sie beim Erwerb des Zertifikats von Ihrem Anbieter erhalten haben.

Je nach Art des gewählten Zertifikats kann die Konfiguration wenige Minuten bis hin zu mehreren Tagen dauern. Um zu überprüfen, ob das SSL-Zertifikat auf Ihrem Webhosting eingerichtet wurde, gehen Sie in Ihrem OVHcloud Kundencenter auf den Tab `Allgemeine Informationen`{.action}. Das Wort "Ja" muss dann unter "SSL-Zertifikat" erscheinen.

![ssl verwalten](images/manage-ssl-step4.png){.thumbnail}

### 2. SSL-Zertifikat für eine Multisite aktivieren <a name="multisite"></a>

> [!primary]
>
> Bevor Sie einem Ihrer Multisite-Einträge das SSL Zertifikat zuweisen, überprüfen Sie, dass Sie zuvor ein SSL Zertifikat auf Ihrem Hosting aktiviert haben. Dazu lesen Sie [vorherige Stufe](#enablessl).

Je nach Art des [SSL-Zertifikats](https://www.ovhcloud.com/de/web-hosting/options/ssl/){.external}, das Sie bestellen möchten, können Sie eine sichere SSL-Verbindung für eine oder mehrere Ihrer Multisites aktivieren. Loggen Sie sich hierzu in Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de){.external} ein und wählen Sie im Bereich `Web Cloud`{.action} unter `Hosting-Pakete`{.action} das betreffende Hosting aus. Gehen Sie dann auf den Tab `Multisite`{.action}.

Die angezeigte Tabelle listet alle Domains auf, die Ihrem Webhosting zugewiesen sind. Die Spalte "SSL" zeigt Ihnen den Aktivierungsstatus der gesicherten SSL-Verbindungen für Ihre Multisites.

![ssl verwalten](images/manage-ssl-step5.png){.thumbnail}

Es können drei Zustände entstehen:

|Status|Beschreibung|
|---|---|
|Aktiviert|Es wurde bereits ein SSL-Zertifikat für diese Multisite aktiviert. Sollte Ihre Seite dennoch nicht via HTTPS verfügbar sein, lesen Sie unsere Anleitung "[Website mit SSL-Zertifikat auf HTTPS umstellen](../website-umstellen-https-ssl/){.external}".|
|Zu erstellen|Es wurde ein SSL-Zertifikat für diese Multisite aktiviert, es ist aber noch nicht technisch aktiv. Erneuern Sie in diesem Fall das Zertifikat, damit es auch für die neuen Multisite-Domains funktioniert.|
|Deaktiviert|Es wurde noch kein SSL-Zertifikat für diese Multisite aktiviert. Um es zu aktivieren, folgen Sie den untenstehenden Anweisungen.|

Um SSL für eine Multisite zu aktivieren, klicken Sie rechts neben der betreffenden Multisite auf `...`{.action} und dann auf `Domain bearbeiten`{.action}. Setzen Sie im angezeigten Fenster einen Haken bei `SSL`{.action}. Sie können auch die Option anhaken, um die www-Subdomain gleichzeitig mit dem dazugehörigen Domainnamen zu aktivieren. Folgen Sie den Schritten, bis Sie die Änderung bestätigen.

Sobald Sie die Aktivierungsanfrage eingereicht haben, sollte sich der Zustand der sicheren SSL-Verbindung für die betreffende Multisite innerhalb weniger Sekunden aktualisieren, wobei der Status auf "Zu erstellen" gesetzt wird. Falls Sie für weitere Multisites SSL aktivieren möchten, wiederholen Sie den Vorgang entsprechend.

> [!primary]
>
> In diesem Zustand können zwei Situationen auftreten:
>
> - **Sie haben kein Zertifikat.**
> Lesen Sie die Anleitung unter "[SSL-Zertifikat auf Ihrem Webhosting aktivieren](#enablessl)" und wählen Sie "Kostenloses Zertifikat (Let's Encrypt)", das Multisite-Websites unterstützt.
>
> - **Das SSL Zertifikat ist aktiv, Sie haben jedoch weitere Multisite-Seiten hinzugefügt.**
> Lesen Sie diese Anleitung im Bereich [SSL-Zertifikat auf einem Webhosting neu erstellen](#regeneratessl), um das SSL-Zertifikat für die verbleibenden Multisites zu erneuern.
>


### 3. SSL-Zertifikat für das Webhosting erneuern <a name="regeneratessl"></a>

> [!primary]
>
> Dieser Vorgang gilt nur für kostenlose Let's Encrypt SSL-Zertifikate [inklusive bei einem kompatiblen Webhosting Angebot](https://www.ovhcloud.com/de/web-hosting/options/ssl/), mit denen eine sichere SSL-Verbindung für mehrere Multisites aktiviert werden kann.
>

Wenn Sie eine gesicherte SSL-Verbindung für eine oder mehrere Ihrer Multisites aktiviert haben, zeigt der Status "Zu erstellen" an. Diese Neuerstellung ist unerlässlich, um die betreffenden Domainnamen zu Ihrem SSL-Zertifikat hinzufügen zu können.

Loggen Sie sich hierzu in Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de){.external} ein und wählen Sie im Bereich `Web Cloud`{.action} unter `Hosting-Pakete`{.action} das betreffende Hosting aus. Gehen Sie dann auf den Tab `Allgemeine Informationen`{.action}. Klicken Sie dann auf den Button `...`{.action}. neben "SSL-Zertifikat" und dann auf `SSL-Zertifikat neu erstellen`{.action}.

![ssl verwalten](images/manage-ssl-step7.png){.thumbnail}

Lesen Sie die im neuen Fenster angezeigten Informationen und klicken Sie dann auf den Button `Bestätigen`{.action}. Warten Sie nun ab, bis die Erneuerung Ihres SSL-Zertifikats abgeschlossen ist. Dieser Vorgang kann mehrere Stunden dauern.

Bitte beachten Sie, dass Let's Encrypt – die Zertifizierungsstelle, die das in Ihrem Webhosting enthaltene kostenlose SSL-Zertifikat bereitstellt – [maximal fünf Erneuerungen pro Woche](https://letsencrypt.org/docs/rate-limits/){.external} zulässt. Wir raten Ihnen daher, auf dieses Limit zu achten, wenn Sie innerhalb kurzer Zeit mehrere Erneuerungen vornehmen, damit Sie nicht vorübergehend blockiert werden.

![ssl verwalten](images/manage-ssl-step8.png){.thumbnail}

###  SSL-Zertifikat auf einem Webhosting löschen <a name="deletessl"></a>

Sie können auch ein auf Ihrem Webhosting installiertes SSL-Zertifikat löschen. Bevor Sie mit Änderungen beginnen, **empfehlen wir Ihnen dringend, sicherzustellen, dass Ihre Websites durch das Löschen des Zertifikats nicht unzugänglich werden**. Denken Sie daran, dass Ihre Benutzer auf einen Sicherheitsfehler stoßen, wenn sie versuchen, auf eine Website zuzugreifen, die mit HTTPS betrieben wird, aber über keine sichere SSL-Verbindung verfügt.

Da hierfür die Überprüfung Ihrer Website-Einstellungen erforderlich ist, empfehlen wir Ihnen, sich im Falle von Problemen mit einem [spezialisierten Dienstleister](https://partner.ovhcloud.com/de/directory/) in Verbindung zu setzen. Für externe Dienstleistungen können wir Ihnen leider keine Unterstützung anbieten.

Wenn Sie bereit sind, das SSL-Zertifikat zu löschen, loggen Sie sich in Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de){.external} ein und wählen Sie `Web Cloud`{.action} aus. Klicken Sie auf `Hosting-Pakete`{.action} und wählen Sie das betreffende Hosting aus. Klicken Sie auf den Tab `Allgemeine Informationen`{.action}. Klicken Sie dann auf den Button `...`{.action}. neben "SSL-Zertifikat" und dann auf `SSL löschen`{.action}.

Bestätigen Sie im Popup-Fenster den Löschvorgang. Dieser dauert höchstens einige Stunden.

![ssl verwalten](images/manage-ssl-step9.png){.thumbnail}

## Weiterführende Informationen

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
