---
title: "Tutorial - Tipps nach dem Hacken Ihrer Website"
excerpt: "Diese Anleitung erklärt, wie Sie Ihre gehackte Website"
slug: was_tun_wenn_ihre_wordpress_seite_gehackt_wurde
section: 'Anwendungsbeispiele'
order: 01
---

**Letzte Aktualisierung am 15.11.2022**

> [!primary]
>
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie beim geringsten Zweifel die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button «Mitmachen» auf dieser Seite.
>

## Ziel

Diese Anleitung hilft Ihnen, wenn Sie feststellen, dass Ihre Website gehackt wurde. Die folgenden **4 Schritte sind in dieser Reihenfolge** zu sehen, um diese Situation zu beheben.

Ein Hacking kann auf verschiedene Arten erfolgen (nicht erschöpfende Liste):

- Ihre Website erscheint ganz oder gar nicht mehr korrekt, ohne Änderungen (FTP, SQL oder DNS) Ihrerseits.
- Ihre Website wird auf eine andere Website weitergeleitet.
- Ihre Website erzeugt ungewollte "Ankündigungen" (Pop-ups, Fehlerfenster usw.).
- Die Datenbank Ihrer Website ist plötzlich ausgefüllt.
- Sie erhalten über Ihr Hosting SPAMs, die durch infizierte Skripte generiert werden.

**Diese Anleitung erklärt, wie Sie Ihre gehackte Website**

> [!warning]
>
> OVHcloud stellt Ihnen Dienste zur Verfügung, deren Konfiguration, Verwaltung und Verantwortung Ihnen obliegen. Es liegt daher an Ihnen, dafür zu sorgen, dass sie ordnungsgemäß funktionieren.
> 
> Wir stellen Ihnen dieses Tutorial zur Verfügung, um Sie bei alltäglichen Aufgaben bestmöglich zu unterstützen. Dennoch empfehlen wir Ihnen, falls Sie Hilfe brauchen, einen [spezialisierten Dienstleister](https://partner.ovhcloud.com/fr/) zu kontaktieren. Wir werden Ihnen leider keine Unterstützung anbieten können. Weitere Informationen finden Sie im Abschnitt ["Weiterführende Informationen"](#go-further) dieser Anleitung.
>

## Voraussetzungen

- Sie verfügen über ein [Cloud Webhosting Angebot](https://www.ovh.com/fr/hebergement-web/) mit Ihrer darauf gehosteten Website.
- Sie sind in Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr) eingeloggt.

## In der praktischen Anwendung

Das Hacken einer Website ist systematisch mit **mindestens** verbunden:

- fehlende Updates der Website
- Spionagesoftware, die auf einem der Geräte, die Sie zur Verwaltung Ihrer Website verwenden, vorhanden ist;
- die Verwendung eines "inoffiziellen" Plugins oder Themes, insbesondere wenn Sie ein Content Managment System (CMS) wie WordPress, Joomla!, PrestaShop oder Drupal verwenden;
- Passwörter (FTP, SQL, "back-office" für CMS etc.) zu kurz oder zu einfach zu finden, insbesondere wenn diese nie geändert werden;
- ein Skript Ihrer Website, das absichtlich Ports auf Ihrem Webhosting öffnet **ohne** Überprüfen, was diese Ports erhalten
- etwas zu erdrückende FTP "CHMOD" Zugangsrechte.

**Das Hacken einer Website rührt nicht von einer Sicherheitslücke im Webhosting her.** Nur die Skripte/Dateien, die auf dem Webhosting gehostet werden, können dem Hosting Befehle erteilen. Sie können ihn auffordern, standardmäßig bestimmte Ports zu öffnen oder bestimmte Aktionen durchzuführen.<br>
Die Skripte befehlen, das Hosting führt aus.

## Schritt 1 - scannen Sie alle Ihre Geräte

Führen Sie eine Anti-Virus- und Anti-Spyware-Analyse aller Geräte durch (PC, Mac, Smartphone, Tablet...), von denen aus Sie die Administration oder Verwaltung Ihrer Website verwalten.

> [!warning]
>
> Wenn Sie Geräte verwenden, die unter *Linux*, *Mac OS* oder anderen Betriebssystemen laufen, bei denen allgemein davon ausgegangen wird, dass kein Risiko für ein Virus oder eine Spion-Software besteht, **Führen Sie trotzdem diese Analyse durch**.
>
> **Kein Betriebssystem ist gegen böswillige Software/Viren immun.**
>

> [!success]
>
> Wir empfehlen Ihnen, für jedes Ihrer Geräte mehrere Anti-Virus/Anti-Spyware (kostenlos oder kostenpflichtig) zu verwenden.
> Tatsächlich können bestimmte Viren oder Spyware je nach verwendetem Antivirenprogramm fortbestehen.
> Es gibt Antivirus/Antispyware Versionen, die Sie "lokal" auf Ihrem Gerät installieren oder direkt "online" im Internet verwenden können.
>

Wenn ein Virus oder eine Spionagesoftware gefunden wird, löschen Sie es mit Ihrer Anti-Virus/Anti-Spyware-Software , **bevor** Sie zum nächsten Schritt übergehen.

### Schritt 2 - Passwörter <a name="step2"></a> ändern

Wenn eine Website gehackt wurde, ändern Sie bitte alle zugehörigen Passwörter.

Für OVHcloud verwenden Sie unsere Dokumentation für:

- [Passwort für den Zugang zu Ihrer OVHcloud Kundenkennung ändern](https://docs.ovh.com/fr/customer/gerer-son-mot-de-passe/).
- [Den Zugang zu Ihrem OVHcloud Kundencenter mit Zwei-Faktor-Authentifizierung absichern](https://docs.ovh.com/fr/customer/securiser-son-compte-avec-une-2FA/).
- [Passwort für den Zugang zum FTP-Speicherplatz Ihres Webhostings ändern](https://docs.ovh.com/fr/hosting/modifier-mot-de-passe-utilisateur-ftp/).
- [Passwort für den Zugriff auf Ihre Datenbank ändern](https://docs.ovh.com/fr/hosting/modifier-mot-de-passe-base-de-donnees/).

Wir empfehlen Ihnen auch die Verwendung eines [Passwort-Managers](https://docs.ovh.com/fr/customer/gerer-son-mot-de-passe/#utiliser-un-gestionnaire-de-mots-de-passe).

> [!warning]
> 
> Wenn Sie das Passwort Ihrer Datenbank ändern, vergessen Sie nicht, auch das Passwort in der Konfigurationsdatei Ihrer Website zu aktualisieren. Andernfalls wird die Verbindung zwischen der Datenbank und den Dateien im FTP-Speicherplatz Ihres Webhostings unterbrochen und Ihre Website wird einen "Fehler beim Verbinden mit Ihrer Datenbank"anzeigen.
>

> [!primary]
>
> Wenn Sie ein CMS wie WordPress, Joomla!, PrestaShop oder Drupal verwenden, lesen Sie die offizielle Dokumentation Ihres CMS, um das Passwort für den Zugang zum Verwaltungsbereich Ihres CMS ("Back-office") zu ändern.
>

### Schritt 3 - Suche nach böswilligen Dateien und Sicherheitslücken

> [!warning]
>
> Wenn Sie Schwierigkeiten haben, die unten beschriebenen Aktionen durchzuführen, wenden Sie sich an einen [spezialisierten Dienstleister](https://partner.ovhcloud.com/fr/) für Cyber-Sicherheit.
>

Verwenden Sie unsere Anleitung zu [Statistiken und Logs Ihres Webhostings](https://docs.ovh.com/fr/hosting/mutualise-consulter-les-statistiques-et-les-logs-de-mon-site/), um nach böswilligen Informationen zu suchen, die Sie in Ihre Website injizieren. Die Informationen finden Sie in den "Web" Logs. 

Beginnen Sie mit der Suche nach dem Datum, an dem Sie den Hacker entdeckt haben, und gehen Sie dann in die Log-History.

"POST"-Anfragen identifizieren, die gewöhnlich herauskommen. In der Regel haben böswillige Dateien alphanumerische Namen ohne besondere Bedeutung (**Beispiele**: az78e4jFn.txt, oij8bh4.html, udh73hd45.php, mlkjc23d.js, ...).

Suchen Sie die IP-Adresse, die die böswillige Anfrage durchgeführt hat. Suchen Sie anschließend in Ihren Logs nach dieser Adresse, um alle von dieser IP für Ihre Website angeforderten Aktionen einzusehen.

> [!primary]
>
> Im Allgemeinen rufen mehrere böswillige IP-Adressen im gleichen Zeitraum nach böswilligen Skripten, die nach dem Hacking auftreten.
> Analysieren Sie alle Logs Ihres Hostings.
>

Gehen Sie so bis zu den Sicherheitslücken Ihrer Website und lesen Sie die bösartigen Dateien, auf die Sie stoßen.

> [!success]
>
> Über mehrere Seiten (die nicht von OVHcloud verwaltet werden) können Sie Informationen zu böswilligen IPs erhalten. Sie können einen dieser Dienste verwenden, um Informationen wie den IP-Anbieter, dessen Geolokalisierung, die Verwaltung usw. abzurufen.
>
> Wenn Sie absolut sicher sind, dass es sich um eine böswillige IP handelt, können Sie den Zugang zu Ihrem Hosting sperren, indem Sie unsere Dokumentation zu den [Zugriffsbeschränkungen über die Datei ".htaccess"](https://docs.ovh.com/fr/hosting/mutualise-htaccess-comment-bloquer-certaines-ip-au-niveau-de-mon-site/) befolgen.
> 

### Schritt 4 - Böswillige Elemente löschen und Sicherheitslücken beheben

Für diesen Schritt sind drei Fallbeispiele möglich: 

> [!alert]
>
> **Wichtig**: In jedem Fall könnte der Hacker, wenn Sie Schadcodes entfernen, ohne Sicherheitslücken zu schließen, diese erneut ausnutzen, um Schadcode wieder auf Ihrem Hosting zu platzieren. Er könnte sogar eine neue Hintertür schaffen.
>
> Die Wiederherstellung vor der Piraterie erfordert ein Update **sofort** und die unumgängliche Durchführung eines **Sicherheitsaudits**, um alle Sicherheitslücken zu identifizieren.
>

#### Fall Nr. 1 - OVHcloud verfügt über ein Backup Ihrer Website (FTP Speicherplatz und Datenbank)

Abhängig vom Datum der Piraterie Ihrer Website (weniger als 14 Tage) kann OVHcloud Ihnen ein (außervertragliches) Backup zur Verfügung stellen.

Lesen Sie hierzu unsere 3 Anleitungen:

- [FTP-Speicherplatz Ihres Webhostings wiederherstellen](https://docs.ovh.com/fr/hosting/restauration-ftp-filezilla-espace-client/)
- [SQL Backup aus Ihrer Datenbank abrufen](https://docs.ovh.com/fr/hosting/exportation-bases-donnees/)
- [SQL Backup in Ihre Datenbank importieren](https://docs.ovh.com/fr/hosting/mutualise-guide-importation-dune-base-de-donnees-mysql/)

Stellen Sie die Daten für die Wiederherstellung Ihres FTP-Speicherplatzes und Ihrer SQL-Datenbank so weit wie möglich zusammen.

>[!warning]
>
> OVHcloud verfügt über Sicherheitsroboter, die böswillige Aktionen von Ihrem Hosting aus erkennen können. Diese deaktivieren Ihr Hosting und teilen Ihnen per E-Mail mit, dass Ihr Hosting deaktiviert wurde.
> Zusätzlich zu dieser E-Mail erscheint in der Regel eine "403 Forbidden" Seite, wenn Sie auf Ihre Website zugreifen möchten.
>
> Wenn sich Ihr Hosting im "deaktivierten" Zustand befindet, werden auch die über Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr) verfügbaren Roboter zur automatischen Wiederherstellung deaktiviert.
> Sie müssen eine "manuelle"Wiederherstellung Ihrer Website durchführen, die verbleibenden bösartigen Elemente entfernen und alle Sicherheitslücken in diesem Backup beheben. Dies **vor**, um Ihr Hosting erneut zu aktivieren.
>
> Um das Webhosting erneut zu aktivieren befolgen Sie die Anweisungen in Schritt 4 dieser [Anleitung](https://docs.ovh.com/fr/hosting/diagnostic-403-forbidden/#reactivate-web-hosting).
>

Ihre Website sollte wieder verfügbar sein, wenn diese Aktionen korrekt durchgeführt wurden.

#### Fall Nr. 2 - Sie verfügen über Ihr eigenes Backup vor dem Hacking

Lesen Sie hierzu unsere 2 Anleitungen:

- [FTP-Speicherplatz Ihres Webhostings wiederherstellen](https://docs.ovh.com/fr/hosting/restauration-ftp-filezilla-espace-client/)
- [SQL Backup in Ihre Datenbank importieren](https://docs.ovh.com/fr/hosting/mutualise-guide-importation-dune-base-de-donnees-mysql/)

>[!warning]
>
> OVHcloud verfügt über Sicherheitsroboter, die böswillige Aktionen von Ihrem Hosting aus erkennen können. Diese deaktivieren Ihr Hosting und teilen Ihnen per E-Mail mit, dass Ihr Hosting deaktiviert wurde.
> Zusätzlich zu dieser E-Mail erscheint in der Regel eine "403 Forbidden" Seite, wenn Sie auf Ihre Website zugreifen möchten.
>
> Wenn sich Ihr Hosting im "deaktivierten" Zustand befindet, führen Sie eine "manuelle"Wiederherstellung Ihrer Seite durch, beseitigen Sie die verbleibenden böswilligen Elemente und korrigieren Sie alle Sicherheitslücken in diesem Backup. Dies **vor**, um Ihr Hosting erneut zu aktivieren.
>
> Um das Webhosting erneut zu aktivieren befolgen Sie die Anweisungen in Schritt 4 dieser [Anleitung](https://docs.ovh.com/fr/hosting/diagnostic-403-forbidden/#reactivate-web-hosting).
>

Ihre Website sollte wieder verfügbar sein, wenn diese Aktionen korrekt durchgeführt wurden.

#### Fall #3 - es ist kein Backup für Ihre Website verfügbar

In [Schritt 2](#step2) dieser Anleitung müssen Sie die zuvor erfassten Dateien und Codes manuell löschen und die Sicherheitslücken Ihrer Website korrigieren.

Um sich mit dem Speicherplatz Ihres Hostings zu verbinden, lesen Sie hierzu [unsere Anleitung](https://docs.ovh.com/fr/hosting/connexion-espace-stockage-ftp-hebergement-web/).

> [!warning]
>
> OVHcloud verfügt über Sicherheitsroboter, die böswillige Aktionen von Ihrem Hosting aus erkennen können. Diese deaktivieren Ihr Hosting und teilen Ihnen per E-Mail mit, dass Ihr Hosting deaktiviert wurde.
> Zusätzlich zu dieser E-Mail erscheint in der Regel eine "403 Forbidden" Seite, wenn Sie auf Ihre Website zugreifen möchten.
>
> Wenn sich Ihr Hosting im "deaktivierten" Zustand befindet, löschen Sie die verbleibenden böswilligen Elemente und korrigieren Sie alle Sicherheitslücken in diesem Backup , **bevor** Sie Ihr Hosting wieder aktivieren.
>
> Um das Webhosting erneut zu aktivieren befolgen Sie die Anweisungen in Schritt 4 dieser [Anleitung](https://docs.ovh.com/fr/hosting/diagnostic-403-forbidden/#reactivate-web-hosting).
>

Ihre Website sollte wieder verfügbar sein, wenn diese Aktionen korrekt durchgeführt wurden.

### Schritt 5 - Ihre Website aktualisieren

Aktualisieren Sie Ihre Website auf Ihren Quellcode, die Sicherheitseinstellungen, die verwendeten Sprachversionen (insbesondere PHP).

Überprüfen Sie die "CHMOD" FTP-Zugriffsrechte für alle Ihre in Ihrem Speicherplatz gehosteten Ordner und Dateien.
Standardmäßig empfehlen wir, die "CHMOD"-Rechte **705** für Ordner und **604** für Dateien maximal zu verwenden.
Weitere Informationen zu den "CHMOD"-Rechten finden Sie im Abschnitt "Nützliche Informationen" unserer [Tutorial zur Nutzung des FTP-Filezilla-Clients](https://docs.ovh.com/fr/hosting/mutualise-guide-utilisation-filezilla/#useful-information).

Wenn Sie ein CMS verwenden (Wordpress, Joomla!, PrestaShop, Drupal...), aktualisieren Sie Ihre Plugins, Themes und das CMS selbst.
Verwenden Sie bevorzugt "offizielle"Plugins/Themen und halten Sie Ihre Website so regelmäßig und umfassend wie möglich auf dem neuesten Stand.

Sichern Sie Ihre Mindestkontaktformulare mit einem System vom Typ "Captcha" ab, um zu vermeiden, dass böswillige Roboter SPAM über diese Methode versenden. Wenn die "mail()"-Funktion von PHP ebenfalls auf Ihrem Hosting gesperrt wurde, lesen Sie hierzu [unsere Anleitung](https://docs.ovh.com/fr/hosting/suivi-emails-automatises/), um die Sperrung zu beheben.

Lesen Sie auch unsere Anleitung zu [wie Sie Ihre Website schützen](https://docs.ovh.com/fr/hosting/secure-website/), um das Risiko eines erneuten Hacks möglichst gering zu halten.

## Weitergehen <a name="go-further"></a>

[Mit dem Speicherplatz Ihres Webhostings verbinden](https://docs.ovh.com/fr/hosting/connexion-espace-stockage-ftp-hebergement-web/)

[Konfiguration Ihres Webhostings ändern](https://docs.ovh.com/fr/hosting/modifier-lenvironnement-dexecution-de-mon-hebergement-web/)

[Application Firewall aktivieren](https://docs.ovh.com/fr/hosting/activation-pare-feu-applicatif/)

[Die Performance Ihrer Website optimieren](https://docs.ovh.com/fr/hosting/optimisation-performances-site/)

Für spezialisierte Dienstleistungen (Referenzierung, Entwicklung etc.) kontaktieren Sie die [OVHcloud Partner](https://partner.ovhcloud.com/fr/).

Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, können Sie unsere verschiedenen [Support-Angebote](https://www.ovhcloud.com/fr/support-levels/) einsehen.

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.