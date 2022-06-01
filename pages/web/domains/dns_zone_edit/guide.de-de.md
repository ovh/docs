---
title: 'Bearbeiten der OVHcloud DNS-Zone'
excerpt: 'Erfahren Sie hier, wie Sie eine DNS-Zone über Ihr Kundencenter bearbeiten'
slug: webhosting_bearbeiten_der_dns_zone
legacy_guide_number: g1604
section: 'DNS und DNS-Zone'
---


> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie beim geringsten Zweifel die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button «Mitmachen» auf dieser Seite.
>

**Letzte Aktualisierung am 01.06.2022**

## Ziel

### DNS Konzept verstehen <a name="understanddns"></a>

**D**omain **N**ame **S**ystem ist ein Datensatz, um eine Domain mit einer IP-Adresse zu verbinden.

Wenn Sie zum Beispiel auf die Website *mydomain.ovh* zugreifen möchten, wird Ihre Anfrage zunächst von diesem DNS-Array bearbeitet, das sie auf die IP-Adresse des Servers leitet, auf dem die Website *mydomain.ovh gehostet wird*.

Aufgrund der Änderungen, die Sie im Kundencenter vornehmen müssen, ist es wichtig, die **DNS Server** und die **DNS Zone** zu unterscheiden. Die DNS Zone wird auf der Ebene des **DNS Servers** konfiguriert. 

Informationen zu den **DNS Servern** finden Sie in unserer Anleitung zu [DNS Servern](../webhosting_allgemeine_informationen_zu_den_dns_servern/).

![DNS](images/dnsserver.png){.thumbnail}

Wenn wir oben das Beispiel anführen, wenn Sie *mydomain.ovh* eingeben, werden die zu dieser Domain gehörenden **DNS Server** abgefragt. Diese enthalten die **DNS Zone** der Domain *mydomain.ovh*, in der die IP-Adresse des Hostings von mydomain.ovh angegeben *ist*. So kann Ihr Browser die auf dem Hosting enthaltene *mydomain.ovh* Website anzeigen. Man nennt es eine DNS-Auflösung.

![DNS](images/dnssolve.gif){.thumbnail}

### Die DNS Zone 

Die DNS-Zone einer Domain ist eine Konfigurationsdatei bestehend aus **Datensätzen**. Mit diesen können Sie Ihre Domain mit den Servern verbinden, auf denen Ihre Internetdienste gehostet werden, wie zum Beispiel Websites (über A-Eintrag) oder E-Mail-Adressen (MX-Eintrag).

![DNS](images/dnszone.png){.thumbnail}

**Diese Anleitung erklärt, wie Sie Ihre OVHcloud DNS-Zone über Ihr Kundencenter bearbeiten.**

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/BvrUi26ShzI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Voraussetzungen

- Sie haben über Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) ausreichenden Zugriff auf die Verwaltung der betreffenden Domain.
- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de).
- OVHcloud DNS-Server sind in Verwendung für die betreffende Domain

> [!warning]
>
> - Wenn Ihre Domain nicht die DNS-Server von OVHcloud verwendet, muss die Änderung über das Interface des Anbieters vorgenommen werden, der die Konfiguration Ihrer Domain verwaltet.
> 
> - Wenn Ihre Domain bei OVHcloud registriert ist, können Sie überprüfen, ob diese unsere Konfiguration verwendet. Gehen Sie hierzu in Ihrem [Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) in den Tab `DNS Server`{.action}  der betreffenden Domain.
>

## In der praktischen Anwendung

### Zugang zur Verwaltung einer OVHcloud DNS-Zone

Loggen Sie sich in Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) ein und gehen Sie in den Bereich `Web Cloud`{.action}. Klicken Sie auf `Domains`{.action} und wählen Sie die betreffende Domain aus. Gehen Sie dann auf den Tab `DNS Zone`{.action}.

Die Tabelle zeigt für jede Zeile einen DNS-Eintrag zu Ihrer Domain bei OVHCloud an. Sie können die Einträge nach dem Eintragstyp oder der zugehörigen Domain filtern.

![dnszone](images/edit-dns-zone-ovh-control-panel.png){.thumbnail}

### DNS Einträge

**Seien Sie vorsichtig bei der Bearbeitung der DNS-Zone**: Wenn Sie eine falsche Änderung vornehmen, kann es sein, dass Ihre Website nicht mehr erreichbar ist oder Ihre E-Mail-Adressen keine neuen Nachrichten empfangen können.

Ein genaueres Verständnis der verschiedenen Einträge ermöglicht es Ihnen, die notwendigen Änderungen der DNS-Zone Ihrer Domain besser zu bestimmen. Bitte lesen Sie die unten stehende Liste. Sie enthält die Ziele und Besonderheiten jeder Registrierung.

#### Verweiseinträge

**A**: Verbindet einen Domainnamen mit einer IPv4-Adresse. Zum Beispiel die IPv4-Adresse des Servers, auf dem Ihre Website gehostet ist.

**AAAA**: Verbindet einen Domainnamen mit einer IPv6-Adresse. Zum Beispiel die IPv6-Adresse des Servers, auf dem Ihre Website gehostet ist.

**CNAME**: Verwendet die IP-Adresse einer anderen Domain, indem ein Link erstellt wird, der als Alias bezeichnet wird. Ist zum Beispiel *www.mydomain.ovh* ein Alias von *mydomain.ovh*, so bedeutet dies, dass *www.mydomain.ovh* die IP-Adresse von *mydomain.ovh* verwendet.

> [!alert]
>
> Ein TXT-Eintrag, der die gleiche Domain oder Subdomain wie ein CNAME-Eintrag verwendet, beeinträchtigt deren Funktion. Ihr CNAME-Eintrag wird dann nur teilweise oder gar nicht funktionieren.
>

**NS Einträge**: Legt die zu Ihrer DNS Zone gehörenden DNS Server fest. Wenn zum Beispiel die NS-Einträge Ihrer DNS-Zone die Server *dns19.ovh.net* und *ns19.ovh.net* anzeigen, müssen Sie diese im Tab `DNS Server`{.action} Ihres Kundencenters verwenden. Weitere Informationen finden Sie in unserer Anleitung zu [DNS Servern](../webhosting_allgemeine_informationen_zu_den_dns_servern/).

> [!warning]
>
> Ändern Sie nicht die NS-Einträge Ihrer DNS-Zone über den Button `Im Textmodus bearbeiten`{.action}, um DNS-Server außerhalb von OVHcloud zu verwenden. Diese DNS Zone funktioniert ausschließlich mit **OVHcloud DNS Servern**.
>

#### E-Mail Einträge

**MX**: Verbindet einen Domainnamen mit einem E-Mail-Server. Die Adresse *10 mx1.mail.ovh.net* entspricht beispielsweise einem der OVHcloud E-Mail-Server, wenn Sie ein OVHcloud E-Mail-Angebot haben. Ihr E-Mail-Anbieter verfügt wahrscheinlich über mehrere E-Mail-Server. Es müssen daher mehrere MX-Einträge erstellt werden.
Lesen Sie dazu die Anleitung zum [Hinzufügen eines MX-Eintrags](../webhosting_e-mail_mx-konfiguration_mit_dns_zone_von_ovh/).

**SPF**: Damit können potenzielle Identitätsdiebstähle bei E-Mail-Adressen, die Ihre Domain verwenden (Spoofing), vermieden werden. Zum Beispiel legt der Eintrag *v=spf1 include:mx.ovh.com ~all* fest, dass nur die ausgehenden OVHCloud Server des E-Mail-Dienstes vom Empfangsserver als legitim angesehen werden können. Sie können den Eintrag entweder als TXT-Eintrag oder über unser automatisches Konfigurationssystem eingeben. Weitere Informationen finden Sie in der Anleitung zum [SPF-Eintrag](../webhosting_spf-eintrag/).

**DKIM**: Ermöglicht die Überprüfung der Authentizität der Domain des Absenders und die Sicherstellung der Integrität der versandten E-Mail. Der DKIM-Eintrag ist ein aus mehreren Zeichen bestehender Schlüssel. Der DKIM-Schlüssel wird von Ihrem E-Mail-Anbieter bereitgestellt. Sie können ihn in einem TXT-Eintrag eingeben.

**DMARC**: Unterstützt die Authentifizierung von E-Mails in Verbindung mit SPF- und/oder DKIM-Methoden. Dieser Wert wird Ihnen von Ihrem E-Mail-Anbieter mitgeteilt und wird mindestens mit einem SPF- oder DKIM-Eintrag verbunden.

#### Erweiterte Einträge

**TXT**: Hier können Sie den Wert Ihrer Wahl im Textformat zur DNS-Zone Ihrer Domain hinzufügen. Dieser Eintragstyp wird häufig für Verifizierungsprozesse verwendet.

> [!warning]
> 
> Der TXT Eintrag ist auf 255 Zeichen begrenzt. In manchen Fällen können Sie Ihren Wert jedoch in mehrere Einträge aufteilen. Fragen Sie bei Ihrem Dienstleister nach, wenn dieser Sie auffordert, einen Wert anzugeben, der 255 Zeichen übersteigt.
> 

**SRV**: Der SRV-Eintrag enthält Informationen zur Adresse eines Servers, der einen Dienst bereitstellt. So kann er beispielsweise die Adresse eines SIP Servers oder eines Servers angeben, der die automatische Konfiguration eines E-Mail-Programms ermöglicht.

**CAA**: Der CAA-Eintrag wird dazu verwendet, die Zertifizierungsstellen aufzulisten, die SSL-Zertifikate für eine Domain ausstellen dürfen.

**NAPTR**: In der Telekommunikation verwendet, um eine von einem mobilen Endgerät ausgehende Anfrage auf einen Server zu leiten. 

**LOC**: Zur Angabe der Ortsdaten verwendet.

**SSHFP**: Verwendet, um den Fingerprint eines öffentlichen SSH-Schlüssels einzugeben.

**TLSA**: Verwendet, um den Fingerprint eines SSL/TLS-Zertifikats einzugeben.

### Bearbeiten der OVHcloud DNS-Zone Ihrer Domain

Sie können die OVHcloud DNS-Zone Ihrer Domain bearbeiten, indem Sie einen DNS-Eintrag hinzufügen, ändern oder löschen. Hierzu haben Sie zwei Optionen:

#### Zone manuell im Textmodus ändern 

Diese Methode empfiehlt sich nur für erfahrene Anwender.

Klicken Sie im Tab `DNS Zone`{.action} auf `Im Textmodus bearbeiten`{.action} und folgen Sie den angezeigten Schritten.

#### Unsere Konfigurationsassistenten verwenden

Im Folgenden werden nur noch die Konfigurationen über unsere Assistenten beschrieben.

> [!primary]
>
> Halten Sie die Informationen bereit, die Sie in Ihrer OVHcloud DNS-Zone ändern möchten. Wenn Sie diese Änderung auf Anfrage eines Diensteanbieters vornehmen, muss dieser Ihnen die Liste der zu ändernden Elemente übermitteln.
>

#### Neuen DNS-Eintrag hinzufügen

Um einen neuen DNS-Eintrag hinzuzufügen, klicken Sie im Tab `DNS Zone`{.action} Ihrer Domain auf den Button `Eintrag hinzufügen`{.action} rechts neben der Tabelle. Wählen Sie den Typ des DNS Eintrags aus und folgen Sie den Schritten.

Bitte überprüfen Sie zunächst, ob dieser Eintrag bereits existiert und auf ein anderes Ziel verweist. Filtern Sie hierzu die angezeigten Einträge nach Eintragstyp oder der verbundenen Domain. Wenn der Eintrag bereits existiert, ändern Sie ihn gemäß der nachfolgenen Anweisungen.

![dnszone](images/edit-dns-zone-ovh-add-entry.png){.thumbnail}

> Wenn Ihr Ziel eine URL ist, denken Sie daran, diese mit einem Punkt abzuschließen. Wenn Sie dies nicht tun, wird Ihre Domain am Ende Ihres Zieles automatisch hinzugefügt.
>
>Beispiel: Sie möchten einen CNAME-Eintrag für *test.mydomain.ovh* auf *mydomain.ovh* erstellen.
>
>Sie müssen dann als Ziel *mydomain.ovh.* haben, anstatt *mydomain.ovh* ohne **.** am Ende.

#### Existierenden DNS-Eintrag bearbeiten 

Um einen DNS-Eintrag zu ändern, klicken Sie im Tab `DNS Zone`{.action} auf den Button `...`{.action} in der gewünschen Tabellenzeile. Klicken Sie anschließend auf `Eintrag bearbeiten`{.action} und folgen Sie den angezeigten Schritten.

![dnszone](images/edit-dns-zone-ovh-modify-entry.png){.thumbnail}

#### DNS-Eintrag löschen

Um einen DNS-Eintrag zu löschen, klicken Sie im Tab `DNS Zone`{.action} auf den Button `...`{.action} in der gewünschen Tabellenzeile. Klicken Sie anschließend auf `Eintrag löschen`{.action} und folgen Sie den angezeigten Schritten.

Sie können mehrere Einträge auf einmal löschen, indem Sie im linken Teil der Tabelle einen Haken setzen und dann auf den Button `Löschen`{.action} klicken.

![dnszone](images/edit-dns-zone-ovh-delete-entry.png){.thumbnail}

#### Die DNS Zone zurücksetzen

Sie können Ihre DNS-Zone auf zwei Zustände zurücksetzen:

- Auf die Standardeinträge für OVHcloud DNS-Zonen mit einer minimalen Konfiguration.
- Auf eine leere DNS-Zone (mit Ausnahme der NS-Einträge), um später eine manuelle Konfiguration einzurichten.

Klicken Sie im Tab `DNS-Zone`{.action} auf `Meine DNS-Zone zurücksetzen`{.action} und folgen Sie den angezeigten Schritten.

![dnszone](images/edit-dns-zone-ovh-reset.png){.thumbnail}

Sie haben die Wahl zwischen folgenden Optionen:

- `Ja, ich möchte meine DNS-Zone mit den Mindesteinträgen zurücksetzen`. Damit können Sie Ihren Domainnamen und Ihren E-Mail-Dienst folgendermaßen  umleiten:
    - Auf einen Ihrer Dienste unter "Web Cloud" im OVHcloud Kundencenter.
    - Auf den OVHcloud Weiterleitungsdienst, verfügbar über den Tab `Weiterleitung`{.action} Ihres Domainnamens in den Bereichen `Domainnamen`{.action} und `E-Mails`{.action}.
    - Auf eigene DNS-Einträge, wenn Sie `Personalisiert` auswählen. Geben Sie dann Einträge Ihrer Wahl vom Typ `A` und/oder `MX` ein.
- `Nein, aber ich möchte meine DNS-Zone zurücksetzen`. Ihre DNS-Zone wird dann leer sein, mit Ausnahme der NS-Einträge, die automatisch entsprechend der  OVHcloud DNS-Server für Ihre DNS-Zone eingestellt werden.

> [!primary]
>
> Bevor Sie Ihre DNS-Zone zurücksetzen, überprüfen Sie, dass Ihr Domainname nicht mit derzeit aktiv verwendeten Dienstleistungen verbunden ist, wie zum Beispiel Websites oder E-Mail-Adressen.

### Propagationszeit

Nach der Änderung der DNS-Zone Ihrer Domain ist eine Propagationszeit von maximal 24 Stunden erforderlich, bis die Änderungen wirksam sind.

Wenn Sie die Frist für die nächste Bearbeitung Ihrer OVHcloud DNS-Zone verkürzen möchten, können Sie diese bis zu einem gewissen Grad beeinflussen, indem Sie die TTL (*Time To Live*) anpassen, die für alle Einträge in der DNS-Zone gilt.

Gehen Sie hierzu in Ihrem Kundencenter auf den Tab `DNS Zone`{.action}, klicken Sie auf `Standardmäßige TTL ändern`{.action} und folgen Sie den angezeigten Schritten. 

Sie können auch die TTL eines DNS-Eintrags ändern. Dies kann jedoch nur einzeln bei Hinzufügen oder Bearbeiten eines Eintrages erfolgen.

## Weiterführende Informationen

[DNS-Server ändern](../webhosting_allgemeine_informationen_zu_den_dns_servern/){.external}

[Einen SPF-Eintrag hinzufügen](../webhosting_spf-eintrag/){.external}

[DNSSEC](../sichern_sie_ihre_domain_mit_dnssec_ab/){.external}

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
