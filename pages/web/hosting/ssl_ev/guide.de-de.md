---
title: "EV SSL-Zertifikat für Ihre Website verwenden"
slug: ev-ssl
excerpt: "Hier erfahren Sie, wie Sie ein EV SSL-Zertifikat auf Ihrem OVHcloud Webhosting bestellen und installieren"
section: SSL
order: 03
---
 
> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie beim geringsten Zweifel die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button «Mitmachen» auf dieser Seite.
>

**Letzte Aktualisierung am 13.12.2022**
  
## Ziel  

Die Secure Socket Layer Zertifikate (SSL) erlauben es, den Austausch von oder zu Ihrer Website zu verschlüsseln. So wird verhindert, dass böswillige Personen oder Roboter auf Anfragen, die an Ihre Website versandt oder gesendet wurden, aufmerksam zuhören.

OVHcloud bietet verschiedene Arten von SSL-Zertifikaten für unsere [OVHcloud Shared Hosting](https://www.ovhcloud.com/fr/web-hosting/). Sie finden sich in unserer Anleitung "[SSL-Zertifikat auf einem Webhosting verwalten](https://docs.ovh.com/fr/hosting/les-certificats-ssl-sur-les-hebergements-web/)". SSL-Zertifikate sind für die Sicherheit Ihrer Website unentbehrlich.

Es gibt drei Arten von SSL-Zertifikaten:

- Domain Validation (DV)
- Organization validation (OV)
- Validierungsextended (EV)

Die SSL-Verschlüsselungsstufen sind zwischen diesen drei Zertifikatstypen identisch.

Der Hauptunterschied besteht darin, wie viele Überprüfungen die ausstellende Bescheinigungsbehörde (AC) vornehmen wird und wie sie ihre Echtheit bestätigt.

EV SSL-Zertifikate sind diejenigen, für die das höchste Sicherheits- und Verifikationspegel gilt. Im Allgemeinen wird das EV SSL-Zertifikat für sehr große Websites oder sensible Websites verwendet. Dieses Zertifikat wird das höchste verfügbare Identifizierungsniveau bieten.

Für OVHcloud Shared Hosting ist die Zertifizierungsstelle, die EV SSL-Zertifikate ausstellt [Sectigo](https://sectigostore.com){.external}.

> [!warning]
>
> EV SSL Zertifikate sind nicht für jedermann verfügbar. Bitte überprüfen Sie, ob Sie für die Bestellung des Domainnamens in Frage kommen **vor**. Verwenden Sie hierzu die in [Voraussetzungen](#requirements) dieser Anleitung aufgeführten Elemente.
>
> Bitte beachten Sie, dass nach der Initiierung und Übermittlung der Bestellung an unseren Zertifikatsanbieter/die Zertifizierungsstelle Sectigo **keine Rückerstattung möglich ist**.
>

**Erfahren Sie, wie Sie ein EV SSL-Zertifikat auf Ihrem OVHcloud Webhosting bestellen und installieren**
 
## Voraussetzungen <a name="requirements"></a>

- Sie sind in Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr) eingeloggt.
- Ein [OVHcloud Shared Hosting](https://www.ovhcloud.com/fr/web-hosting/) bestellen oder besitzen, auf dem noch kein SSL Zertifikat installiert ist.
- Bestellen oder über eine [Domainname](https://www.ovhcloud.com/fr/domains/) verfügen und über exklusive Nutzungsrechte. Der Domainname darf nicht bereits mit einem SSL-Zertifikat verbunden sein.
- eine Organisation (Unternehmen, Regierungsbehörde, ...) sein, die in einem amtlichen Register eingetragen ist.
- Sie haben die Genehmigung Ihrer Organisation, ein EV SSL-Zertifikat zu bestellen.
- Sie sind in der Lage, die Angaben und Kontaktdaten Ihrer Organisation genau zu begründen.

Um zu überprüfen, ob Sie für die Bestellung eines EV SSL-Zertifikats infrage kommen, gehen Sie auf [diesen Link](https://help.sectigostore.com/support/solutions/articles/22000218717-extended-validation-ev-){.external}.
  
## In der praktischen Anwendung

### Schritt 1: EV SSL-Zertifikat bestellen

#### 1.1 - Für eine bereits bei OVHcloud existierende Domain und Hosting

Lesen Sie unsere Anleitung zur [SSL-Zertifikat auf Ihrem Webhosting verwalten](https://docs.ovh.com/fr/hosting/les-certificats-ssl-sur-les-hebergements-web/) und wählen Sie das **EV SSL-Zertifikat** aus, sobald Sie im Bestelltunnel angekommen sind.

Geben Sie die von **Sectigo** angeforderten Informationen genau ein, bevor Ihnen das EV SSL-Zertifikat ausgestellt wird. 

![SSL EV form](images/ssl_ev_order_6.png){.thumbnail}

Klicken Sie auf `Fortfahren`{.action}, einmal **alle Elemente** korrekt angegeben.

Führen Sie die Bestellung bis zur Zahlung durch, um die Anfrage zur Erstellung des SSL-Zertifikats zu bestätigen.

> [!alert]
>
> Sobald die Bestellung validiert wurde, wird die Anfrage für ein EV SSL-Zertifikat an die Zertifizierungsstelle gesandt **Sectigo**.
>
> Vergewissern Sie sich, dass Sie für die Bestellung eines EV SSL-Zertifikats infrage kommen, **bevor Sie das Zertifikat bezahlen**.
>
> Eine Erstattung des EV SSL-Zertifikats ist nicht möglich, **auch wenn das Sectigo-Prüfverfahren nicht erfolgreich ist**.
>

#### 1.2 - Für einen neuen Domainnamen und ein neues Hosting

Wenn Sie Ihre Domain und das dazugehörige Hosting noch nicht bestellt haben, gehen Sie auf unsere [Startseite von OVHcloud](https://www.ovhcloud.com/fr/), geben Sie einen Domainnamen in das dafür vorgesehene **Suchformular** ein und klicken Sie anschließend auf `Suchen`{.action}, um Ihre Bestellung zu starten.

![SSL EV select domain](images/ssl_ev_order_1.png){.thumbnail}

Wählen Sie anschließend Ihren Domainnamen aus und wählen Sie Ihr Hosting und Ihre Optionen aus, bis zum Schritt `Konfigurieren Sie Ihr Webhosting`.

Wählen Sie Ihre Installationsoptionen für das mit `1 Klick geführte`{.action} und für das `CDN`{.action} gekennzeichnete Modul aus und gehen Sie dann ganz unten auf die Seite, bis zum Bereich `Absicherung Ihrer Website mit unseren SSL Zertifikaten`{.action}.

![SSL EV order](images/ssl_ev_order.png){.thumbnail}

Wählen Sie den `Sectigo EV SSL`{.action} und klicken Sie dann auf `Weiter`{.action}.

Geben Sie auf der neu geöffneten Seite die von **Sectigo*** angeforderten Informationen genau ein, bevor Ihnen das EV SSL-Zertifikat ausgestellt wird:

![SSL EV form](images/ssl_ev_order_6.png){.thumbnail}

Klicken Sie auf `Fortfahren`{.action}, einmal **alle Elemente** korrekt angegeben.

Setzen Sie Ihre Bestellung bis zur Zahlung fort, um die Installation Ihrer Dienstleistungen zu starten.

> [!alert]
>
> Sobald die Bestellung validiert wurde, wird die Anfrage für ein EV SSL-Zertifikat an die Zertifizierungsstelle gesandt **Sectigo**. 
>
> Vergewissern Sie sich, dass Sie für die Bestellung eines EV SSL-Zertifikats infrage kommen, **bevor Sie das Zertifikat bezahlen**.
>
> Eine Erstattung des EV SSL-Zertifikats ist nicht möglich, **auch wenn das Sectigo-Prüfverfahren nicht erfolgreich ist**.
>

### Schritt 2: Überprüfung durch die Bescheinigungsbehörde (AC) Sectigo

Alle in diesem Schritt beschriebenen Aktionen können über mehrere Tage durchgeführt werden. Die Fristen **hängen** von den Überprüfungen durch Sectigo ab.

> [!warning]
>
> In diesem Schritt hängt der gesamte Prozess vom Zertifikatsanbieter **Sectigo** und den Informationen ab, die bei der Bestellung des EV SSL-Zertifikats angegeben wurden. 
>
> Nur **Sectigo** kann in dieser Phase eingreifen, und OVHcloud kann auf dieser Ebene nicht tätig werden.
>
> Die Aufgabe des AC Sectigo ist es, unabhängig und vollkommen unparteiisch die Informationen Ihrer Organisation zu zertifizieren, um sie in das EV SSL Zertifikat aufzunehmen.
>
> **Sectigo** entscheidet darüber, ob ein EV SSL-Zertifikat oder OVHcloud erteilt wird. Sectigo ist per definitionem der einzige, der über die Zertifizierung verfügt.
>

#### 2.1 - Empfang der Bestätigungs-E-Mail von Sectigo

Sobald Ihre Bestellung ausgeführt wurde, sendet Sectigo Ihnen eine E-Mail mit einem Validierungslink und einer Vorgehensweise.
Überprüfen Sie Ihre Angaben und bestätigen Sie Ihre Anfrage gemäß den Angaben in dieser E-Mail. 

Um sicherzustellen, dass der E-Mail-Verkehr mit Sectigo korrekt abläuft, überprüfen Sie auch die Gültigkeit der im Formular angegebenen E-Mail-Adresse bei der Bestellung des EV SSL und der Kontakt-E-Mail-Adresse Ihres [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr).

#### 2.2 - Überprüfungen durch die Zertifizierungsstelle Sectigo

Sectigo überprüft dann, ob Ihre Organisation existiert und wird bei den offiziellen Registern registriert.

> [!primary]
>
> Sectigo kann möglicherweise nicht in der Lage sein, alle Informationen in amtlichen Registern zu überprüfen. Die Dienste von Sectigo können Sie dann telefonisch über die Nummer kontaktieren, die Sie bei Ihrer Bestellung angegeben haben, oder über die offizielle Telefonnummer Ihrer Organisation.
>

Sectigo überprüft dann, ob Sie über die Exklusivität/Autorität für die Inhaberschaft und Nutzung der Domain verfügen, mit der Sie das EV SSL-Zertifikat verwenden möchten.

#### 2.3 - Letzte Überprüfung per Telefon mit Sectigo

Sobald die Überprüfung durch Sectigo abgeschlossen ist, werden Sie von ihren Diensten telefonisch kontaktiert, um die Bestellung Ihres EV SSL-Zertifikats abzuschließen.

> [!success]
>
> Weitere Informationen zu den in **Schritt 2** beschriebenen Operationen finden Sie in der [offiziellen Dokumentation von Sectigo](https://help.sectigostore.com/support/solutions/articles/22000218717-extended-validation-ev-){.external} zum Thema.
>

### Schritt 3: Installation des EV SSL-Zertifikats mit Ihrer Domain und Ihrem OVHcloud Hosting

Sobald Sectigo alle Überprüfungen durchgeführt hat, erstellen ihre Dienste das EV SSL-Zertifikat und übermitteln uns die für dessen Installation erforderlichen Informationen auf Ihrem Hosting.

Sie müssen nur noch [Ihre Website auf HTTPS umstellen](https://docs.ovh.com/fr/hosting/passer-site-internet-https-ssl/), um Ihr EV SSL-Zertifikat vollständig zu nutzen.

## Weiterführende Informationen <a name="go-further"></a>

[offizielle Website Sectigo](https://sectigostore.com){.external}

[Beschreibung der Überprüfungen durch Setigo](https://help.sectigostore.com/support/solutions/articles/22000218717-extended-validation-ev-){.external}

[SSL-Zertifikat auf seinem Webhosting verwalten](https://docs.ovh.com/fr/hosting/les-certificats-ssl-sur-les-hebergements-web/)

[Ihre Website auf HTTPS umstellen](https://docs.ovh.com/fr/hosting/passer-site-internet-https-ssl/)

Kontaktieren Sie für spezialisierte Dienstleistungen (SEO, Web-Entwicklung etc.) die [OVHcloud Partner](https://partner.ovhcloud.com/de/directory/).

Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, beachten Sie unsere [Support-Angebote](https://www.ovhcloud.com/de/support-levels/).

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.