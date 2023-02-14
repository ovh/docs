---
title: "EV SSL-Zertifikat für Ihre Website verwenden"
slug: ssl-ev
excerpt: "Erfahren Sie hier, wie Sie ein EV SSL-Zertifikat für Ihr OVHcloud Webhosting bestellen und installieren"
section: SSL
order: 03
---
 
> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie beim geringsten Zweifel die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button «Mitmachen» auf dieser Seite.
>

**Letzte Aktualisierung am 13.12.2022**
  
## Ziel  

Secure Socket Layer (SSL) Zertifikate erlauben es, Verbindungen von oder zu Ihrer Website zu verschlüsseln. So wird verhindert, dass unbefugte Personen oder Roboter auf ausgehende und eingehende Anfragen von Ihrer Website zugreifen können.

OVHcloud bietet verschiedene Arten von SSL-Zertifikaten für die [Webhostings](https://www.ovhcloud.com/de/web-hosting/) an, wie in unserer Anleitung "[SSL-Zertifikat auf einem Webhosting verwalten](https://docs.ovh.com/de/hosting/ssl-zertifikate-auf-webhostings-verwalten/)" beschrieben. SSL-Zertifikate sind für die Sicherheit Ihrer Website unentbehrlich.

Es gibt drei Arten von SSL-Zertifikaten:

- Domain Validation (DV)
- Organisation Validation (OV)
- Extended Validation (EV)

Die SSL-Verschlüsselungsstufen sind bei diesen drei Zertifikatstypen identisch.

Der Hauptunterschied besteht in den Überprüfungen, mit denen die ausstellende Zertifikatsstelle (CA) die Legitimität verifiziert.

EV SSL-Zertifikate sind dabei die mit dem höchsten Sicherheits- und Verifikationslevel. Im Allgemeinen wird das EV SSL-Zertifikat für sehr große Websites oder datenschutzsensible Websites verwendet. Dieses Zertifikat bietet das höchste verfügbare Identifikationsniveau.

Für OVHcloud Hosting-Dienste ist die Zertifizierungsstelle, die EV SSL-Zertifikate ausstellt [Sectigo](https://sectigostore.com){.external}.

> [!warning]
>
> EV SSL Zertifikate sind nicht für jedermann verfügbar. Überprüfen Sie deshalb **vor einer Bestellung**, ob Sie für die Zertifizierung des Domainnamens in Frage kommen. Verwenden Sie hierzu die unter [Voraussetzungen](#requirements) aufgeführten Punkte.
>
> Bitte beachten Sie, dass ab der Initiierung und Übermittlung der Bestellung an unseren Zertifikatsanbieter/die Zertifizierungsstelle Sectigo **keine Rückerstattung möglich ist**.
>

**Diese Anleitung erklärt, wie Sie ein EV SSL-Zertifikat für Ihr OVHcloud Webhosting bestellen und installieren.**
 
## Voraussetzungen <a name="requirements"></a>

- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de).
- Sie bestellen oder verfügen über ein [OVHcloud Webhosting](https://www.ovhcloud.com/de/web-hosting/), auf dem noch kein SSL Zertifikat installiert ist.
- Sie bestellen oder verfügen über einen [Domainnamen](https://www.ovhcloud.com/de/domains/) und dessen exklusive Nutzungsrechte. Der Domainname darf nicht bereits mit einem SSL-Zertifikat verbunden sein.
- Sie vertreten eine Organisation (Unternehmen, Regierungsbehörde, etc.), die in einem amtlichen Register eingetragen ist.
- Sie haben die Genehmigung Ihrer Organisation, ein EV SSL-Zertifikat zu bestellen.
- Sie sind in der Lage, Kontaktdaten und weitere Auskünfte zu Ihrer Organisation korrekt anzugeben.

Sie können über [diese Adresse](https://help.sectigostore.com/support/solutions/articles/22000218717-extended-validation-ev-){.external} prüfen, ob Sie für die Bestellung eines EV SSL-Zertifikats infrage kommen.
  
## In der praktischen Anwendung

> [!warning]
> OVHcloud stellt Ihnen Dienstleistungen zur Verfügung, für deren Konfiguration und Verwaltung Sie die alleinige Verantwortung tragen. Es liegt somit bei Ihnen, sicherzustellen, dass diese ordnungsgemäß funktionieren.
> 
> Diese Anleitung soll Sie bei allgemeinen Aufgaben bestmöglich unterstützen. Dennoch empfehlen wir Ihnen, falls Sie Hilfe brauchen, einen [spezialisierten Dienstleister](https://partner.ovhcloud.com/de/directory/) zu kontaktieren oder Ihre Fragen in der OVHcloud Community zu stellen. Leider können wir Ihnen keine Unterstützung **für jegliche von der Zertifizierungsstelle Sectigo durchgeführten Verifizierungen** anbieten. Weitere Informationen finden Sie am [Ende dieser Anleitung](#go-further).
>


### Schritt 1: EV SSL-Zertifikat bestellen

#### 1.1 - Für eine bereits bei OVHcloud existierende Domain und Hosting

Lesen Sie unsere Anleitung "[SSL-Zertifikat auf Ihrem Webhosting verwalten](https://docs.ovh.com/de/hosting/ssl-zertifikate-auf-webhostings-verwalten/)" und wählen Sie im Bestellvorgang das **EV SSL-Zertifikat** aus.

Geben Sie die von **Sectigo** angeforderten Informationen ein, bevor Ihnen das EV SSL-Zertifikat ausgestellt wird. 

![SSL EV form](images/ssl_ev_order_6.png){.thumbnail}

Klicken Sie auf `Fortfahren`{.action}, sobald **alle Elemente** korrekt eingegeben sind.

Führen Sie die Bestellung bis zur Zahlung durch, um die Anfrage zur Erstellung des SSL-Zertifikats zu bestätigen.

> [!alert]
>
> Sobald die Bestellung validiert wurde, wird die Anfrage für ein EV SSL-Zertifikat an die Zertifizierungsstelle **Sectigo** übermittelt.
>
> Vergewissern Sie sich, dass Sie für die Bestellung eines EV SSL-Zertifikats infrage kommen, **bevor Sie das Zertifikat bezahlen**.
>
> Eine Erstattung des EV SSL-Zertifikats ist nicht möglich, **auch wenn das Prüfverfahren bei Sectigo nicht erfolgreich verläuft**.
>

#### 1.2 - Für einen neuen Domainnamen und ein neues Hosting

Wenn Sie Ihren Domainnamen und das dazugehörige Hosting noch nicht bestellt haben, gehen Sie auf die [Startseite von OVHcloud](https://www.ovhcloud.com/de/), geben Sie einen Domainnamen in das dafür vorgesehene **Suchformular** ein und klicken Sie anschließend auf `Suchen`{.action}, um Ihre Bestellung zu starten.

![SSL EV select domain](images/ssl_ev_order_1.png){.thumbnail}

Wählen Sie anschließend Ihren Domainnamen, das Hosting und die Optionen aus, bis Sie zum Schritt `Konfigurieren Sie Ihr Webhosting` gelangen.

Wählen Sie die Installationsoptionen für `1-Klick-Modul`{.action} und `CDN`{.action} aus und gehen Sie dann unten zum Bereich `Absicherung Ihrer Website mit unseren SSL Zertifikaten`{.action}.

![SSL EV order](images/ssl_ev_order.png){.thumbnail}

Wählen Sie `Sectigo EV SSL`{.action} und klicken Sie dann auf `Weiter`{.action}.

Geben Sie auf der neuen Seite die von **Sectigo*** angeforderten Informationen ein, bevor das EV SSL-Zertifikat ausgestellt wird:

![SSL EV form](images/ssl_ev_order_6.png){.thumbnail}

Klicken Sie auf `Fortfahren`{.action}, sobald **alle Elemente** korrekt eingegeben sind.

Führen Sie die Bestellung bis zur Zahlung durch, um die Anfrage zur Erstellung des SSL-Zertifikats zu bestätigen.

> [!alert]
>
> Sobald die Bestellung validiert wurde, wird die Anfrage für ein EV SSL-Zertifikat an die Zertifizierungsstelle **Sectigo** übermittelt.
>
> Vergewissern Sie sich, dass Sie für die Bestellung eines EV SSL-Zertifikats infrage kommen, **bevor Sie das Zertifikat bezahlen**.
>
> Eine Erstattung des EV SSL-Zertifikats ist nicht möglich, **auch wenn das Prüfverfahren bei Sectigo nicht erfolgreich verläuft**.
>

### Schritt 2: Überprüfung durch die Zertifizierungsstelle Sectigo

Die in diesem Schritt beschriebenen Aktionen können über mehrere Tage hinweg erfolgen. Dies ist abhängig von der Dauer der Überprüfungen bei Sectigo.

> [!warning]
>
> Der gesamte Prüfungsprozess hängt vom Zertifikatsanbieter **Sectigo** und den Informationen ab, die bei der Bestellung des EV SSL-Zertifikats angegeben wurden. 
>
> Nur **Sectigo** ist hierfür zuständig und OVHcloud kann in dieser Phase nicht mehr eingreifen.
>
> Die Aufgabe von Sectigo ist es, unabhängig und unparteiisch die Informationen Ihrer Organisation zu zertifizieren, um sie in das EV SSL Zertifikat aufzunehmen.
>
> **Sectigo** entscheidet demnach als zuständige Zertifizierungsauthorität darüber, ob ein EV SSL-Zertifikat erteilt wird.
>

#### 2.1 - Bestätigung von Sectigo per E-Mail

Sobald Ihre Bestellung ausgeführt wurde, sendet Sectigo Ihnen eine E-Mail mit einem Validierungslink und der Ablaufprozedur.
Überprüfen Sie Ihre Angaben und bestätigen Sie Ihre Anfrage gemäß den Informationen in dieser E-Mail. 

Um sicherzustellen, dass der E-Mail-Verkehr mit Sectigo korrekt abläuft, überprüfen Sie auch die Gültigkeit der im Formular angegebenen E-Mail-Adresse bei der Bestellung des EV SSL und der Kontakt-E-Mail-Adresse in Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de).

#### 2.2 - Überprüfungen durch die Zertifizierungsstelle Sectigo

Sectigo überprüft, ob Ihre Organisation existiert und in offiziellen Registern eingetragen ist.

> [!primary]
>
> Sectigo kann möglicherweise nicht alle Informationen in amtlichen Registern überprüfen. Sectigo wird Sie dann telefonisch über die Nummer kontaktieren, die Sie bei Ihrer Bestellung angegeben haben, oder über die öffentliche Telefonnummer Ihrer Organisation.
>

Sectigo überprüft zusätzlich, ob Sie über die exklusive Autorität der Inhaberschaft und Nutzung Ihres Domainnamens verfügen, für den Sie das EV SSL-Zertifikat beantragt haben.

#### 2.3 - Letzte Überprüfung per Telefon mit Sectigo

Sobald die Überprüfung durch Sectigo abgeschlossen ist, werden Sie telefonisch kontaktiert, um die Bestellung Ihres EV SSL-Zertifikats abzuschließen.

> [!success]
>
> Weitere Informationen zu den in **Schritt 2** beschriebenen Operationen finden Sie in der [offiziellen Dokumentation von Sectigo](https://help.sectigostore.com/support/solutions/articles/22000218717-extended-validation-ev-){.external}.
>

### Schritt 3: Installation des EV SSL-Zertifikats mit Ihrem Domainnamen und Ihrem OVHcloud Hosting

Sobald Sectigo alle Überprüfungen durchgeführt hat, erstellen ihre Dienste das EV SSL-Zertifikat und übermitteln die für dessen Installation auf dem Hosting erforderlichen Informationen an OVHcloud.

Sie müssen nur noch [Ihre Website auf HTTPS umstellen](https://docs.ovh.com/de/hosting/website-umstellen-https-ssl/), um Ihr EV SSL-Zertifikat vollständig zu nutzen.

## Weiterführende Informationen <a name="go-further"></a>

[Offizielle Website Sectigo](https://sectigostore.com){.external}

[Beschreibung der von Sectigo durchgeführten Überprüfungen](https://help.sectigostore.com/support/solutions/articles/22000218717-extended-validation-ev-){.external}

[SSL-Zertifikate auf Webhostings verwalten](https://docs.ovh.com/de/hosting/ssl-zertifikate-auf-webhostings-verwalten/)

[Ihre Website auf HTTPS umstellen](https://docs.ovh.com/de/hosting/website-umstellen-https-ssl/)

Kontaktieren Sie für spezialisierte Dienstleistungen (SEO, Web-Entwicklung etc.) die [OVHcloud Partner](https://partner.ovhcloud.com/de/directory/).

Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, beachten Sie unsere [Support-Angebote](https://www.ovhcloud.com/de/support-levels/).

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.