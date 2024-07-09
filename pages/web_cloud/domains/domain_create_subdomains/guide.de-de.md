---
title: "Erstellung einer Subdomain"
excerpt: "Erfahren Sie hier, wie Sie eine Subdomain bei OVHcloud erstellen und nutzen"
updated: 2024-03-05
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie im Zweifelsfall die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button "Beitragen" auf dieser Seite.
>

## Ziel <a name="goal"></a>

Das Internet besteht aus Servern und Geräten, die über ein globales Netzwerk miteinander interagieren. Wenn diese Server und ihre Geräte mit dem Internet verbunden sind, wird ihnen eine **öffentliche IP-Adresse** (entspricht einer Postadresse) zugewiesen. Diese IP-Adresse ermöglicht es, sich mit einem Server oder einem Gerät zu verbinden. Das bedeutet, dass ein Benutzer über einen Webbrowser auf eine Website zugreifen kann, indem er diese IP-Adresse eingibt.

Die **Domainnamen** wurden eingerichtet, um den Benutzern des Internets den Zugriff auf eine Website zu erleichtern. So ist es einfacher, sich einen Namen zu merken, der aus einer ausgewählten Zeichenfolge besteht (Beispiel: ovhcloud.com), als eine Folge von Ziffern, aus denen eine IP-Adresse besteht (Beispiel: 54.39.46.56).

Ein **Domainname** besteht aus Leveln. Diese Level sind in der Regel durch ein `.` (mit Ausnahme einiger **Endungen** der *ersten Ebene* wie *.co.uk*, *.gouv.fr* oder *.notaires.fr*):

- **T**op **L**evel **D**omain (**TLD**): Stellt die Domains des *Top Level* dar. Sie werden üblicherweise als **Endungen** bezeichnet. Derzeit gibt es 4 Arten von Top-Level-Domains: 

    - Die **c**ountry **c**ode **T**op **L**evel **D**omains (**ccTLDs**): bestehen aus zwei Zeichen und entsprechen den verschiedenen Ländern der Welt. Zum Beispiel sind die Endungen *.de*, *.es*, *.it* oder *.pl* ccTLDs.
    - Die **g**eneric **T**op **L**evel **D**omains (**gTLDs**): Bestehend aus mindestens drei Zeichen, stellen sie allgemeinere Themen oder Branchen dar. Zum Beispiel sind die Endungen *.com*, *.net*, *.org* oder *.info* gTLDs.
    - Die **new** **g**eneric **T**op **L**evel **D**omains (**new gTLDs**): Neue Endungen, die ab 2012 von der **I**nternet **C**orporation for **A**ssigned **N**ames and **N**umbers (**ICANN**) erstellt wurden, um den steilen Anstieg der Anfragen zur Erstellung von Domainnamen zu bewältigen. Dabei kann es sich um allgemeine Themen, Marken, Regionen oder Städte handeln. Zum Beispiel sind die Endungen *.love*, *.ovh* oder *.paris* new gTLDs.
    - Die **Corp**oration **T**op **L**evel **D**omains (**CorpTLDs**): Dies ist eine Unterkategorie der neuen gTLDs. Unternehmen oder Organisationen können auf Anfrage bei der **ICANN** die Erstellung einer eigenen TLD beantragen. Zum Beispiel ist die Endung *.ovh* eine CorpTLD, die vor einigen Jahren von OVHcloud erstellt wurde.

- **S**econd **L**evel **D**omain (**SLD**): Stellt Domains der *zweiten Ebene* dar, auch als **Labels** bezeichnet. Wenn Sie einen Domainnamen bestellen, können Sie das **Label** frei definieren (vorausgesetzt, dieser Name wurde nicht bereits von einem anderen Benutzer mit derselben Endung registriert und ist auf 63 Zeichen begrenzt). Zum Beispiel entspricht *ovhcloud* dem Label der Domain *ovhcloud.com*.

- Third Level Domain (**Subdomain**): Ab dieser dritten Ebene spricht man von einer **Subdomain**. In dieser Anleitung erfahren Sie, wie Sie diese mit Ihren verschiedenen Diensten einrichten.

![URL content](/pages/assets/schemas/domains/url-composition.png){.thumbnail}
  
**Diese Anleitung erklärt, Sie mehr über Subdomains und wie Sie Subdomains bei OVHcloud erstellen.**

## Voraussetzungen

- Sie besitzen mindestens eine [Domain](/links/web/domains).
- Sie verfügen über eine aktive DNS-Zone für Ihre Domain. Bei Bedarf lesen Sie unsere Anleitung „[OVHcloud DNS-Zone erstellen](/pages/web_cloud/domains/dns_zone_create)“.
- Sie sind in Ihrem [OVHcloud Kundencenter](/links/manager) eingeloggt.
- Über ausreichende Rechte für alle betroffenen Dienste verfügen. Weitere Informationen finden Sie in unserer Anleitung [Verwaltung der Kontakte der Dienste](/pages/account_and_service_management/account_information/managing_contacts).
  
## In der praktischen Anwendung

### Definition einer Subdomain

Ein [Domainname](/links/web/domains) kann mehreren Arten von Diensten zugeordnet werden (E-Mail, Website etc.).

Ein Domainname kann jedoch immer nur einer Website zugewiesen werden.

Einige Benutzer oder Organisationen müssen jedoch ihre Websites oder E-Mail-Dienste segmentieren, während sie den gleichen Domainnamen beibehalten.

Die Subdomains (u.U. auch **Präfixe** genannt) erfüllen die Notwendigkeit, einen Domainnamen zu segmentieren. Sie bieten dem Inhaber die Möglichkeit, die mit seinem Domainnamen verbundenen Webdienste in verschiedene Unterkategorien zu unterteilen, ohne einen neuen Domainnamen abonnieren zu müssen.

Mit anderen Worten: Subdomains ermöglichen es, alle Webdienste (DNS-Server, Website, Intranet, E-Mail etc.), die mit einem einzigen Domainnamen verbunden sind, einfach zu strukturieren.

Wie bereits im Abschnitt „[Ziel](#goal)“ erwähnt, entsprechen Subdomains der dritten Ebene (*Third Level Domain*) eines Domainnamens. Die bekannteste Subdomain für Internetnutzer ist die Subdomain **W**orld **W**ide **W**eb (**www**). Viele Webseiten nutzen diese Subdomain noch immer, um im Internet darauf zuzugreifen.

So ist *www.ovhcloud.com* eine Subdomain des Domainnamens *ovhcloud.com*.

Sie können aus einem einzigen Domainnamen eine unbegrenzte Anzahl an Subdomains erstellen.

Wenn Sie beispielsweise über die Domain *example.com* verfügen, können Sie folgende Subdomains erstellen:

- *dns1.example.com* und *dns2.example.com* zur Anpassung Ihrer DNS-Server mithilfe von [GLUE Records](/pages/web_cloud/domains/glue_registry).
- *www.example.com*, um Ihre Website anzuzeigen.
- *preprod.example.com*, um Ihre Website in neuen Versionen zu testen. Dies ohne den Zugriff Ihrer Benutzer auf Ihre aktuelle Website zu unterbrechen.
- *intranet.example.com*, damit Ihre Mitarbeiter sich auf Ihrer internen Website austauschen können.
- *forum.example.com* oder *community.example.com*, damit Ihre User Community ihre Erfahrungen austauschen kann.
- *app.example.com*, um online auf Ihre Anwendung zuzugreifen oder sie direkt herunterzuladen.
- *recruitment.example.com*, um es Bewerbern zu ermöglichen, sich auf Ihrem eigenen Recruitment-Interface zu bewerben.
- *sav.example.com*, *sales.example.com*, *legal.example.com*, um es Ihren Kunden zu ermöglichen, verschiedene interne Strukturen Ihres Unternehmens zu kontaktieren, oder um Ihre Mitarbeiter nach den internen Abteilungen zu priorisieren, denen sie angehören.
- etc.

Über die dritte Ebene hinaus werden diese auch als **Subdomains** eingestuft. Um eines der oben genannten Beispiele zu verwenden, können Sie die Subdomain *preprod.app.example.com* erstellen, um die neue Version Ihrer Webanwendung zu testen. Dies ohne den Zugriff auf die aktuelle Version Ihrer Anwendung auf *app.example.com* zu unterbrechen.

### Subdomain erstellen

Alle [Domainnamen](/links/web/domains) benötigen eine **DNS-Zone**. Die DNS-Zone ist die Konfigurationsdatei eines Domainnamens, die sich aus "DNS-Einträge" zusammensetzt. Das sind Datensätze, die dem Domainnamen verschiedene Dienste und Funktionen zuordnen.

Weitere Informationen zu den DNS-Zonen finden Sie in unserer Anleitung „[OVHcloud DNS-Zone erstellen](/pages/web_cloud/domains/dns_zone_create)“ und „[OVHcloud DNS-Zone bearbeiten](/pages/web_cloud/domains/dns_zone_edit)“.

**Alle Subdomains werden in der aktiven DNS-Zone der Domain konfiguriert. Dazu werden DNS-Einträge hinzugefügt.**

#### 1 - Identifizieren Sie die aktive DNS-Zone Ihrer Domain

Es gibt zwei mögliche Szenarien:

- Die aktive DNS-Zone Ihrer Domain ist bei OVHcloud vorhanden.
- Die aktive DNS-Zone Ihrer Domain wird an einem anderen Ort gehostet.

> [!warning]
>
> Die aktive DNS-Zone Ihrer Domain wird nicht zwingend bei demselben Anbieter verwaltet wie Ihre Domain.
>
> 1: Um zu ermitteln, wo sich die aktive DNS-Zone einer bei OVHcloud registrierten Domain befindet, lesen Sie unsere Anleitung „[DNS-Server einer OVHcloud Domain bearbeiten](/pages/web_cloud/domains/dns_server_edit)“.
>
> 2: Wenn Ihre Domain nicht bei OVHcloud registriert ist, kontaktieren Sie den aktuellen *Registrar* Ihrer Domain, um herauszufinden, wo ihre aktive DNS-Zone gehostet ist. Beachten Sie, dass Sie unsere Anleitung „[Domain zu OVHcloud transferieren](/pages/web_cloud/domains/transfer_incoming_generic_domain)“ verwenden können, um diese Aktion durchzuführen.
>

Wenn die für Ihre Domain deklarierten DNS-Server eine der folgenden Formen haben:

- `dnsXX.ovh.net` und `nsXX.ovh.net` (wobei jedes „X“ eine Ziffer darstellt).
- `dns200.anycast.me` und `ns200.anycast.me`.

Das bedeutet, dass die aktive DNS-Zone Ihrer Domain bei OVHcloud ist.

Wenden Sie sich andernfalls an Ihren DNS-Anbieter, um Subdomains mit Ihrem Domainnamen zu erstellen.

#### 2 - DNS-Einträge für Ihre Subdomains erstellen

Um Ihre Subdomains zur aktiven DNS-Zone Ihrer Domain hinzuzufügen, lesen Sie unsere Anleitung „[OVHcloud DNS-Zone bearbeiten](/pages/web_cloud/domains/dns_zone_edit)“.

Sie können beispielsweise Folgendes hinzufügen:

- Die IP-Adresse (DNS-Einträge vom Typ *A* und *AAAA*) Ihres Webhostings, um eine Ihrer Websites mit einer Subdomain anzuzeigen.
- Die E-Mail-Server (DNS-Einträge vom Typ *MX*), auf die Ihre Subdomain die empfangenen E-Mails weiterleiten soll. So können Sie diese auf Ihrer personalisierten E-Mail-Adresse(n) mit Ihrer Subdomain einsehen.
- Informationen zur Sicherheit / Authentifizierung Ihrer Dienste (Webhosting, Webserver, E-Mail etc.), die mit einer Ihrer Subdomains verbunden sind (DNS-Einträge vom Typ *SPF*, *DKIM*, *DMARC* etc.).

> [!primary]
>
> Die Änderung einer DNS-Zone, die mit einem Domainnamen verbunden ist, führt zu einer Propagationsverzögerung von **4** bis **24** Stunden, bis die Änderung wirksam wird.
>
> Wie bei einem Domainnamen als solchem reicht es in der Regel nicht aus, einen DNS-Eintrag für eine Subdomain zu erstellen, um diese mit dem "Ziel"-Dienst zu verwenden, den Sie im DNS-Eintrag definiert haben. 
>
> Aus Sicherheitsgründen müssen Sie der Subdomain auch den Zugriff auf den "Ziel"-Dienst erlauben (Webhosting, E-Mail etc.).
>

Im nächsten Teil erfahren Sie, wie Sie einer Subdomain den Zugriff auf die verschiedenen von OVHcloud angebotenen Dienste im Universum Web Cloud (Webhosting, Exchange Server etc.) erlauben.

> [!warning]
>
> Wenn Sie eine Subdomain für einen Dienst einrichten möchten, der nicht bei OVHcloud gehostet wird, können wir Ihnen diesbezüglich keine Unterstützung bieten. Bitte wenden Sie sich an Ihren Dienstleister, um mit der Konfiguration fortzufahren. 
>

### Ihre Subdomain mit einem OVHcloud Dienst verbinden, autorisieren und konfigurieren

Mehrere Dienste aus dem Universum Web Cloud können mit einer Subdomain verwendet werden. Die Zuordnungsprozeduren ähneln denen, die Sie mit einem Domänennamen ausführen sollten. Wir werden Ihnen nur die häufigsten Fälle zeigen.

Nicht aufgeführte Dienste finden Sie in der jeweiligen Service-Dokumentation. So können Sie erkennen, ob diese mit einer Subdomain genutzt werden kann.

#### Fall 1: Eine Website auf meinem OVHcloud Webhosting mit einer Subdomain anzeigen

Um einer Subdomain die Berechtigung zu erteilen, den Inhalt eines "Ziel"-Ordners auf einem Webhosting anzuzeigen, loggen Sie sich in Ihrem [OVHcloud Kundencenter](/links/manager){.external} ein und wählen Sie `Web Cloud`{.action}. Klicken Sie in der linken Spalte auf `Hosting-Pakete`{.action}, wählen Sie das betreffende Angebot aus, in dem sich Ihre Website befindet, und klicken Sie dann auf den Tab `Multisite`{.action}.

Hier autorisieren Sie den Zugriff Ihrer Subdomain auf Ihr Webhosting, auf dem sich Ihre Website befindet.

Weitere Informationen zur Konfiguration einer Domain oder Subdomain auf einem Webhosting finden Sie in unserer Anleitung „[Mehrere Websites auf einem Webhosting einrichten](/pages/web_cloud/web_hosting/multisites_configure_multisite)“. Egal ob es sich um eine Domain oder eine Subdomain handelt, die Vorgehensweise ist die gleiche.

> [!warning]
>
> Um eine Domain oder Subdomain hinzuzufügen, muss möglicherweise ein token zur Validierung der Domain eingerichtet werden. Bei einer Subdomain wird das gleiche token nicht berücksichtigt und muss nicht für die Subdomain, sondern für den Domainnamen hinzugefügt werden. Fügen Sie in diesem Fall zusätzlich das token als DNS-Eintrag vom Typ TXT für den Domainnamen in der aktiven DNS-Zone Ihrer Domain hinzu.
>

#### Fall 2 - Exchange E-Mail-Adressen mit einer Subdomain erstellen

Um die Erstellung personalisierter Exchange E-Mail-Adressen mit einer Subdomain zu ermöglichen, loggen Sie sich in Ihrem [OVHcloud Kundencenter](/links/manager){.external} ein und wählen Sie `Web Cloud`{.action} aus. Klicken Sie in der linken Spalte auf `Microsoft`{.action} und dann auf `Exchange`{.action}. Wählen Sie anschließend die Exchange Plattform aus, die Sie mit Ihrer Subdomain verwenden möchten. Gehen Sie auf der angezeigten Seite in den Tab `Assoziierte Domains`{.action} und klicken Sie dann rechts auf den Button `Eine Domain hinzufügen`{.action}.

So können Sie Ihre Subdomain auf Ihrer Exchange Plattform deklarieren.

Weitere Informationen zur Konfiguration einer Exchange-Plattform finden Sie in den folgenden Anleitungen:

- [Erste Schritte mit Hosted Exchange](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/exchange_starting_hosted)
- [Einen Domainnamen auf einer E-Mail-Plattform hinzufügen](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/exchange_adding_domain)
- [CNAME-Eintrag hinzufügen, um Ihre Domain für Ihr E-Mail-Angebot zu validieren](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/exchange_dns_cname)

#### Fall 3 - E-Mail Pro Adressen mit einer Subdomain erstellen

Um die Erstellung personalisierter E-Mail Pro Adressen mit einer Subdomain zu ermöglichen, loggen Sie sich in Ihrem [OVHcloud Kundencenter](/links/manager){.external} ein und wählen Sie `Web Cloud`{.action} aus. Klicken Sie auf `E-Mail für Profis`{.action} und wählen Sie dann die E-Mail Pro Plattform aus, die Sie mit Ihrer Subdomain verwenden möchten. Gehen Sie auf der angezeigten Seite in den Tab `Assoziierte Domains`{.action} und klicken Sie dann rechts auf den Button `Eine Domain hinzufügen`{.action}.

So können Sie Ihre Subdomain auf Ihrer E-Mail Pro Plattform deklarieren.

Weitere Informationen zur Konfiguration einer E-Mail Pro Plattform finden Sie in den folgenden Anleitungen:

- [Erste Schritte mit E-Mail Pro](/pages/web_cloud/email_and_collaborative_solutions/email_pro/first_config)
- [Einen Domainnamen auf einer E-Mail-Plattform hinzufügen](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/exchange_adding_domain)
- [CNAME-Eintrag hinzufügen, um Ihre Domain für Ihr E-Mail-Angebot zu validieren](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/exchange_dns_cname)

## Weiterführende Informationen <a name="go-further"></a>

[OVHcloud DNS-Zone erstellen](/pages/web_cloud/domains/dns_zone_create)

[Bearbeiten einer OVHcloud DNS-Zone](/pages/web_cloud/domains/dns_zone_edit)

[DNS-Server einer OVHcloud Domain bearbeiten](/pages/web_cloud/domains/dns_server_edit)

[Mehrere Websites auf einem Webhosting einrichten](/pages/web_cloud/web_hosting/multisites_configure_multisite)

[Erste Schritte mit Hosted Exchange](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/exchange_starting_hosted)

[Erste Schritte mit der E-Mail Pro Lösung](/pages/web_cloud/email_and_collaborative_solutions/email_pro/first_config)

[Einen Domainnamen auf einer E-Mail-Plattform hinzufügen](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/exchange_adding_domain)

[CNAME-Eintrag hinzufügen, um Ihre Domain für Ihr E-Mail-Angebot zu validieren](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/exchange_dns_cname)

Kontaktieren Sie für spezialisierte Dienstleistungen (SEO, Web-Entwicklung etc.) die [OVHcloud Partner](/links/partner).

Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, beachten Sie unsere [Support-Angebote](/links/support).

Treten Sie unserer [User Community](/links/community) bei.
