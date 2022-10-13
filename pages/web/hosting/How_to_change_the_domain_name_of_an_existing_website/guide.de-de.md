---
title: "Die Domain einer bestehenden Website ändern"
slug: how_to_change_the_domain_name_for_an_existing_website
excerpt: "Diese Anleitung erklärt, wie Sie den Domainnamen einer bestehenden Website ändern"
section: "Anwendungsbeispiele"
order: 02
---

> [!primary]
>
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie beim geringsten Zweifel die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button “Mitmachen“ auf dieser Seite.
>

**Letzte Aktualisierung am 13.10.2022**

## Ziel

Während der Lebensdauer Ihrer Website kann es vorkommen, dass Sie den Domainnamen Ihrer Website ändern müssen.<br>Der häufigste Fall ist eine Änderung des Unternehmensnamens.

In dieser Anleitung erklären wir Ihnen die wichtigsten Schritte, die Sie bei der Änderung der Domain für den Zugang zu Ihrer Website unternehmen müssen.

**Diese Anleitung erklärt, wie Sie den Domainnamen einer bestehenden Website ändern.**

> [!warning]
>
> OVHcloud stellt Ihnen Dienste zur Verfügung, deren Konfiguration, Verwaltung und Verantwortung Ihnen obliegen. Es liegt daher an Ihnen, dafür zu sorgen, dass sie ordnungsgemäß funktionieren.
> 
> Wir stellen Ihnen dieses Tutorial zur Verfügung, um Sie bei alltäglichen Aufgaben bestmöglich zu unterstützen. Dennoch empfehlen wir Ihnen, falls Sie Hilfe brauchen, einen [spezialisierten Dienstleister](https://partner.ovhcloud.com/fr/) zu kontaktieren. Wir werden Ihnen leider keine Unterstützung anbieten können. Weitere Informationen finden Sie im Abschnitt ["Weiterführende Informationen"](#go-further) dieser Anleitung.
>

## Voraussetzungen

- Sie verfügen über eine [Domainname](https://www.ovhcloud.com/fr/domains/).
- Sie verfügen über ein [OVHcloud Shared Hosting](https://www.ovhcloud.com/fr/web-hosting/).
- Sie sind in Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr) eingeloggt.

## In der praktischen Anwendung

> [!warning]
>
> Die Änderung des Domainnamens, um auf Ihre Website zuzugreifen, kann Auswirkungen auf deren Referenzierung haben. 
> Achten Sie auf die Änderungen, die Sie vornehmen werden, oder kontaktieren Sie bei Bedarf einen [spezialisierten Dienstleister](https://partner.ovhcloud.com/fr/) in der Referenzierung.
>

Um den Domainnamen für den Zugang zu Ihrer Website zu ändern, müssen mehrere Schritte in einer bestimmten Reihenfolge durchgeführt werden.

### Schritt 1 - Die neue Domain auf Ihrem Webhosting <a name="step1"></a> deklarieren

Melden Sie Ihren neuen Domainnamen unter Verwendung unserer Dokumentation zum [Hinzufügen einer Multisite auf Ihrem Shared Hosting](https://docs.ovh.com/fr/hosting/multisites-configurer-un-multisite-sur-mon-hebergement-web/). Deklarieren Sie auch Ihre Subdomain auf `www`, wenn Sie zum Beispiel möchten, dass Ihre Website auch unter `www.NewDomain.tld` zusätzlich zu `NewDomain.tld` angezeigt wird.

Für Schritt 1 sind mehrere Bedingungen zu erfüllen:

- Ihre neue Domain muss auf dasselbe "Wurzelverzeichnis"verweisen wie die Domain, die derzeit für den Zugang zu Ihrer Website verwendet wird.
- Überprüfen Sie, ob Ihre neue Domain korrekt auf die IP-Adresse Ihres Webhostings verweist. Um die IP-Adresse abzurufen, loggen Sie sich in Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr) ein, gehen Sie in den Bereich `Web Cloud`{.action}, klicken Sie auf `Hosting`{.action}, wählen Sie Ihr Hosting aus und holen Sie **IPv4** im Tab `Allgemeine Informationen`{.action}.

> [!warning]
>
> Wenn Sie die Optionen **IP Ihres Landes** oder **CDN** mit Ihrer neuen Domain aktivieren, verwenden Sie die richtige IP-Adresse mithilfe unserer Dokumentation zur Ermittlung von [allen IP-Adressen unserer Shared Hosting Pakete](https://docs.ovh.com/fr/hosting/liste-des-adresses-ip-des-clusters-et-hebergements-web/).
>
> Um die Nummer des Clusters zu finden, in dem sich Ihr Webhosting befindet, gehen Sie in den Bereich `Web Cloud`{.action}, klicken Sie auf den Bereich `Hosting`{.action}, wählen Sie dann den Tab `FTP-SSH`{.action}. Sie sehen die Cluster-Nummer im Formular **FTP- und SFTP-Server**: `ftp.cluster0XX.ovh.net` (wobei die `X` die Cluster-Nummer darstellen).
>

> **SSL-Zertifikate**
>
> Wenn die ursprünglich für den Zugang zu Ihrer Website verwendete Domain über ein SSL Zertifikat verfügt, lesen Sie unsere beiden Anleitungen, um die beschriebenen Aktionen direkt unter diesen beiden Links durchzuführen oder zu überprüfen:
> - [SSL-Zertifikat auf seinem Webhosting verwalten](https://docs.ovh.com/fr/hosting/les-certificats-ssl-sur-les-hebergements-web/)
> - [Website über SSL auf HTTPS umstellen](https://docs.ovh.com/fr/hosting/passer-site-internet-https-ssl/)
>
> Für das kostenlose SSL *Let's Encrypt* Zertifikat genügt es, die Option # SSL **ab sofort** für Ihre neue Domain zu aktivieren. Gehen Sie hierzu in den Tab `Multisite`{.action} Ihres Hostings. Klicken Sie anschließend auf den Button `Aktionen`{.action} oben auf die Tabelle mit Ihren Multisten und dann auf Das `SSL-Zertifikat neu erstellen`{.action}. Die Regenerierung dauert mindestens 2 Stunden.
>
> Für kostenpflichtige SSL-Zertifikate *Sectigo DV* und *Sectigo EV* von OVHcloud sind diese nur für eine einzige Domain und deren Subdomain `www` gültig.<br>
> **Wenn Sie [Schritt 3](#step3) dieser Anleitung** erreicht haben, müssen Sie Ihr kostenpflichtiges SSL-Zertifikat löschen, um ein anderes für Ihre neue Domain zu bestellen<br>
> *Achtung, die Löschung ist unwiderruflich und für die verbleibende Zeit Ihres alten SSL Zertifikats erfolgt keine Rückerstattung. Stellen Sie sicher, dass die Schritte 1 und 2 korrekt durchgeführt werden.*
>
> Kontaktieren Sie Ihren Anbieter von SSL *custom* Zertifikaten, wenn Sie diese auch selbst installiert haben. Erfahren Sie, welche Möglichkeiten Sie in dieser Situation haben.
>

Wenn alle Aktionen korrekt durchgeführt wurden müssen die Meldungen für Multisites Ihrer Domains absolut identisch sein **es sei denn, Sie verwenden ein kostenpflichtiges SSL-Zertifikat vom Typ *Sectigo DV*, *Sectigo EV* oder *custom****.

![Multisites](images/multisites.png){.thumbnail}

> [!primary]
>
> Nach Schritt 1 ist eine Propagationszeit von 4 bis maximal 24 Stunden erforderlich, bis die Änderungen wirksam sind.
>

Wenn Ihre Website keine Datenbanken verwendet und/oder keine URL für Ihre Website umgeschrieben wird, muss diese bereits korrekt mit Ihrer neuen Domain angezeigt werden. Gehen Sie in diesem Fall direkt zu [Schritt 3](#step3) dieser Anleitung. Ist das nicht der Fall, fahren Sie mit Schritt 2 fort.

### Schritt 2 - Rewriting der URLs auf Ihrer Website mit der neuen Domain

Die meisten Websites verwenden Datenbanken, um zu funktionieren. Die Baumstruktur dieser Domains wird üblicherweise um die ursprünglich für Ihre Website verwendete Domain erstellt. Für diese Websites sind weitere Maßnahmen erforderlich.

> [!warning]
>
> Achtung, die in Schritt 2 beschriebenen Operationen sind äußerst sensibel und können schwerwiegende Folgen für Ihre Website haben, wenn sie nicht mit Vorsicht durchgeführt werden. Sollten Sie Zweifel haben, versuchen Sie nichts und wenden Sie sich an einen [spezialisierten Dienstleister](https://partner.ovhcloud.com/fr/).
>
> Wir empfehlen Ihnen, vor jeder Aktion eine [Sicherung Ihres FTP-Speicherplatzes](https://docs.ovh.com/fr/hosting/restauration-ftp-filezilla-espace-client/) sowie eine [Sicherung Ihrer Datenbank](https://docs.ovh.com/fr/hosting/exportation-bases-donnees/) abzurufen. So können Sie Ihre Website im Fall eines Fehlers wiederherstellen.
>

Wir werden zwei Arten von Websites unterscheiden: 

- CMS (*Content Management System*) wie WordPress, Joomla!, PrestaShop, Drupal usw.
- klassische Websites, die von Ihnen oder Ihrem Anbieter entwickelt wurden.

#### Fall #1: Ihre Website ist ein CMS

Die meisten CMS erlauben es Ihnen direkt über Ihren *back-office* Verwaltungsbereich, die ursprünglich für Ihre Website angegebene Domain durch eine andere zu ersetzen.

Da die CMS von Drittanbietern entwickelt werden, die nicht von OVHcloud verwaltet werden, finden Sie im Folgenden die Links zur offiziellen Dokumentation der verschiedenen CMS, die auf unseren Shared Hosting Angeboten installiert werden:


- WordPress: <https://wordpress.org/support/article/changing-the-site-url/>
Joomla! : Der Herausgeber dieses Programms bietet keine Dokumentation zur Änderung der Domain für den Zugang zu Ihrer Website. Kontaktieren Sie bitte den Herausgeber zu diesem Thema. Weitere Informationen finden Sie auf den offiziellen Seiten [docs.joomla.org](https://docs.joomla.org/){.external} oder [forum.joomla.org](https://forum.joomla.org/){.external}.
- Drupal: Der Herausgeber dieses Programms bietet keine Dokumentation zur Änderung der Domain für den Zugang zu Ihrer Website. Kontaktieren Sie bitte den Herausgeber zu diesem Thema. Weitere Informationen finden Sie auf den offiziellen Seiten [drupal.org](https://drupal.org){.external} oder [drupal.fr](https://drupal.fr){.external}.
- PrestaShop: Der Herausgeber dieses Programms bietet keine Dokumentation zur Änderung der Domain für den Zugang zu Ihrer Website. Kontaktieren Sie bitte den Herausgeber zu diesem Thema. Für weitere Informationen klicken Sie [hier](https://help-center.prestashop.com/fr){.external} auf ihre offizielle Seite.

Bitte beachten Sie, dass bei diesen CMS Änderungen auch direkt vorgenommen werden können [in der Datenbank](https://docs.ovh.com/fr/hosting/creer-base-de-donnees/#acceder-a-linterface-phpmyadmin). Ändern Sie die Zugriffs-URL Ihrer Website in der dafür vorgesehenen Tabelle.

Für andere CMS, die nicht von OVHcloud als automatische Installation angeboten werden, wenden Sie sich bitte an die jeweiligen Medien, um diese Rewriting sicher durchzuführen. 

#### Fall #2: Ihre Webseite ist eine "selbst gemachte" Website

Um Ihre URLs mit Ihrer neuen Domain neu zu schreiben [loggen Sie sich in die Datenbank Ihrer Website ein](https://docs.ovh.com/fr/hosting/creer-base-de-donnees/#acceder-a-linterface-phpmyadmin) und ersetzen Sie anschließend Ihre alte Domain in der entsprechenden Tabelle mit der neuen Domain. 

Bitte überprüfen Sie in Ihrer `.htaccess` Datei, ob URL-Einträge nicht mit Ihrer neuen Domain aktualisiert werden müssen.

Wenn Sie einen Dienstleister für die Erstellung Ihrer Website beauftragt haben, kontaktieren Sie ihn, damit dieser die Änderung sicher durchführt.

> [!success]
>
> Sobald Schritt 2 abgeschlossen ist, muss Ihre Website mit Ihrer neuen Domain angezeigt werden.
>

## Schritt 3 - Die alte Domain <a name="step3"></a> entfernen

Um "*Duplicate-content*"zu vermeiden und wenn Ihre neue Domain mit Ihrer Website voll funktionsfähig ist, müssen Sie die Multisite-Meldung für Ihre alte Domain mithilfe der Anleitung zur Verwaltung von [Multisites auf Ihrem Webhosting](https://docs.ovh.com/fr/hosting/multisites-configurer-un-multisite-sur-mon-hebergement-web/) löschen.

> [!warning]
>
> Denken Sie daran, sich um Ihr SSL *Sectigo EV*, *Sectigo DV* oder *Custom* Zertifikat zu kümmern, wie in [Schritt 1](#step1) beschrieben.
>

Sobald Ihre alte Domain aus dem Tab "Multisite" entfernt wurde und bei OVHcloud registriert ist, können Sie diese mithilfe einer [permanente sichtbare Weiterleitung 301](https://docs.ovh.com/fr/domains/redirection-nom-de-domaine/) weiterleiten. So können Ihre Besucher automatisch auf Ihre Website weitergeleitet werden, indem Sie Ihre neue Domain in der Adresszeile/URL ihres Browsers anzeigen.

## Weiterführende Informationen <a name="go-further"></a>

[Liste der IP-Adressen auf unserem Shared Hosting](https://docs.ovh.com/fr/hosting/liste-des-adresses-ip-des-clusters-et-hebergements-web/)

[SSL-Zertifikat auf seinem Webhosting verwalten](https://docs.ovh.com/fr/hosting/les-certificats-ssl-sur-les-hebergements-web/)

[Website mithilfe von SSL auf HTTPS umstellen](https://docs.ovh.com/fr/hosting/passer-site-internet-https-ssl/)

[Eine Domain weiterleiten](https://docs.ovh.com/fr/domains/redirection-nom-de-domaine/)

Für spezialisierte Dienstleistungen (Referenzierung, Entwicklung etc.) kontaktieren Sie die [OVHcloud Partner](https://partner.ovhcloud.com/fr/).

Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, können Sie unsere verschiedenen [Support-Angebote](https://www.ovhcloud.com/fr/support-levels/) einsehen.

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com>.