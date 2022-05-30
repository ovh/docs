---
title: Erste Schritte mit den OVHcloud APIs
slug: first-steps-with-ovh-api
excerpt: 'So verwenden Sie die OVHcloud APIs'
section: 'Erste Schritte'
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie beim geringsten Zweifel die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button “Mitmachen“ auf dieser Seite.
>

**Stand 04.06.2020**

## Ziel

Die auf verfügbaren APIs [https://api.ovh.com/](https://api.ovh.com/){.external} erlauben es Ihnen, OVHcloud Produkte zu kaufen, zu verwalten, zu aktualisieren und zu konfigurieren, ohne ein grafisches Interface wie das Kundencenter zu verwenden.

**Hier erfahren Sie, wie Sie die OVHcloud APIs verwenden und mit Ihren Anwendungen verbinden.**

## Voraussetzungen

- Sie verfügen über einen aktiven OVHcloud Account und kennen dessen Zugangsdaten.
- Sie sind auf der Webseite der [OVHcloud APIs](https://api.ovh.com/){.external}.

## In der praktischen Anwendung

> [!warning]
>
> OVHcloud stellt Ihnen Dienstleistungen zur Verfügung, für deren Konfiguration und Verwaltung Sie die alleinige Verantwortung tragen. Es liegt somit bei Ihnen, sicherzustellen, dass diese ordnungsgemäß funktionieren.
> 
> Wir stellen Ihnen diese Anleitung zur Verfügung, um Ihnen bei der Bewältigung alltäglicher Verwaltungsaufgaben zu helfen. Dennoch empfehlen wir Ihnen, falls Sie Hilfe brauchen, einen spezialisierten Dienstleister und/oder den Herausgeber des Dienstes zu kontaktieren. Für externe Dienstleistungen bietet OVHcloud leider keine Unterstützung. Genauere Informationen finden Sie im Teil „Weiterführende Informationen" dieser Anleitung.
> 


### Einfache Verwendung

#### Mit den OVHcloud APIs verbinden

Klicken Sie auf der Seite der [OVHcloud](https://api.ovh.com/) APIs auf `Explore the OVH APIs`{.action}, um die Liste der APIs anzuzeigen. 

Um die APIs für Ihre Produkte zu verwenden, loggen Sie sich über Ihre OVHcloud-Zugangsdaten auf dieser Seite ein.

- Klicken Sie auf `Login`{.action} oben rechts. 
- Geben Sie Ihre OVHcloud Zugangsdaten ein. 
- Legen Sie eine Dauer unter der Bezeichnung **Validity** fest, während der Sie Aktionen über die OVHcloud APIs erlauben.

![API](images/login.png){.thumbnail} 

> [!primary]
>
> Wenn Ihr OVHcloud Account durch [Zwei-Faktor-Authentifizierung geschützt](https://docs.ovh.com/de/customer/Account-mit-2FA-absichern/) ist, müssen Sie auch den per SMS oder OTP-Anwendung oder U2F-Schlüssel generierten Code eingeben.
>

#### Die auf den APIs verfügbaren Produkte analysieren

Wenn Sie eingeloggt sind, finden Sie die Liste der OVHcloud Produkte, die über APIs verfügen. Diese Liste ist alphabetisch geordnet.

![API](images/api-list.png){.thumbnail} 

Um zum Beispiel die zu Domainnamen gehörenden APIs anzuzeigen, klicken Sie auf **/domain** in der Liste.

Nachdem Sie auf das Produkt geklickt haben, wird unten die Liste der APIs angezeigt. 

![API](images/api-displayed.png){.thumbnail} 

#### Eine API ausführen

Es gibt 4 verfügbare APIs, die so genannte HTTP-Methoden verwenden: 

**GET** 

Die GET-Methode dient dem Abruf von Daten aus einer Ressource.

Um zum Beispiel die Liste Ihrer Domainnamen abzurufen, verwenden Sie folgende API:
 
> [!api]
>
> @api {GET} /domain
>

**POST**

Die POST-Methode wird verwendet, um zusätzliche Daten an die Ressource zu senden. 

Um zum Beispiel einen Eintrag zu Ihrer DNS Zone hinzuzufügen, verwenden Sie folgende API:

> [!api]
>
> @api {POST} /domain/zone/{zoneName}/record
>

**PUT**

Die PUT-Methode dient dazu, die aktuellen Ressourcen-Daten durch die Daten der Abfrage zu ersetzen.

Wenn Sie zum Beispiel bei einem Eintrag in Ihrer DNS Zone den Fehler gemacht haben, verwenden Sie folgende API:

> [!api]
>
> @api {PUT} /domain/zone/{zoneName}/record/{id}
>

**DELETE**

Die DELETE-Methode wird verwendet, um die so genannte Ressource zu löschen.

Wenn Sie zum Beispiel den DNS-Eintrag, den Sie zu Ihrer DNS-Zone hinzugefügt haben, nicht mehr aufbewahren möchten, verwenden Sie folgende API:

> [!api]
>
> @api {DELETE} /domain/zone/{zoneName}/record/{id}
>

##### API Einstellungen

Nachdem Sie auf die API Ihrer Wahl geklickt haben, können Sie im Bereich **Parameters** die Variablen zu seiner Anwendung zuweisen.
 
Um zum Beispiel einen TXT Eintrag in Ihrer DNS Zone hinzuzufügen, optimieren Sie die folgenden Einstellungen:
 	
![API](images/parameters.png){.thumbnail} 
 
Wenn Sie die Einstellungen festgelegt haben, können Sie die API starten, indem Sie auf `Execute`{.action} klicken. 

Der angezeigte `Result`-Tab gibt Ihnen den Bericht zur Durchführung der API.

![API](images/result.png){.thumbnail} 

Die Tabs `PHP` und `Python` enthalten die Elemente, die je nach Sprache in Ihrem Skript hinzugefügt werden müssen.

### Fortgeschrittene Nutzung: OVHcloud APIs mit einer Anwendung verbinden

#### Schlüssel Ihrer Anwendung erstellen

Jede Anwendung, die mit der OVHcloud API kommunizieren möchte, muss im Voraus angemeldet werden.

Klicken Sie hierzu auf folgenden Link: [https://eu.api.ovh.com/createToken/](https://eu.api.ovh.com/createToken/){.external}.

Geben Sie Ihre Kundenkennung, Ihr Passwort und den Namen Ihrer Anwendung ein. Der Name wird später nützlich sein, wenn Sie anderen Personen erlauben möchten, ihn zu verwenden.

Sie können auch eine Beschreibung der Anwendung und eine Zeitangabe hinzufügen. 

Der `Rights` Eintrag erlaubt es Ihnen, die Verwendung der Anwendung auf bestimmte APIs zu beschränken.<br>
Um allen OVHcloud APIs für eine HTTP-Methode zu erlauben, geben Sie im Feld einen Stern `*` ein, wie im folgenden Beispiel, wo GET für alle APIs erlaubt ist:

![API keys](images/api-keys.png){.thumbnail} 

Wenn Sie auf `Create Keys`{.action} geklickt haben, erhalten Sie drei Schlüssel:

- den so genannten **AK**. Zum Beispiel:

```sh
7kbG7Bk7S9Nt7ZSV
```

- Ihr geheimer, nicht zu veröffentlichender Anwendungsschlüssel, **AS**. Zum Beispiel:

```sh
EXEgWIz07P0HYwtQDs7cNIqCiQaWSuHF
```

- ein geheimer "**Consumer Key**", nicht bekannt gegeben, **CK**. Zum Beispiel:

```sh
MtSwSrPpNjqfVSmJhLbPyr2i45lSwPU1
```

Im vorliegenden Fall ist der **CK**-Schlüssel an Ihren Account gebunden.

Das Token **CK** kann für die Übertragung von Rechten verwendet werden. Weitere Informationen finden Sie in folgender Anleitung: [So verwalten Sie den Account eines OVHcloud Kunden über die APIs](https://docs.ovh.com/gb/en/api/api-rights-delegation/) (englische Anleitung).

#### Erste Verwendung der API

Sobald Ihre drei Schlüssel (**AK**, **AS**, **CK**) verfügbar sind, können Sie die API Anfragen unterschreiben. Die Signatur wird wie folgt berechnet:

```sh
"$1$" + SHA1_HEX(AS+"+"+CK+"+"+METHOD+"+"+QUERY+"+"+BODY+"+"+TSTAMP)
```

Um die Entwicklung Ihrer Anwendungen zu vereinfachen, liefert Ihnen OVHcloud API-Wrapper in mehreren Sprachen.
Wenn Sie diese verwenden, können Sie sich nicht um die Berechnung der Signatur kümmern und sich ganz auf die Entwicklung Ihrer Anwendung konzentrieren.

- *Perl* : <https://eu.api.ovh.com/wrappers/OvhApi-perl-1.1.zip>
- *Python* : <https://github.com/ovh/python-ovh>
- *PHP* : <https://github.com/ovh/php-ovh>
- *Node.js* : <https://github.com/ovh/node-ovh>
- *Swift* : <https://github.com/ovh/swift-ovh>
- *C#* : <https://github.com/ovh/csharp-ovh>

Hier ein Beispiel für die Nutzung der Rubrik `/me` zur Verwaltung Ihres OVHcloud Accounts:

```python
import ovh

# Instantiate. Visit https://api.ovh.com/createToken/?GET=/me
# to get your credentials
client = ovh.Client(
    endpoint='ovh-eu',
    application_key='<application key>',
    application_secret='<application secret>',
    consumer_key='<consumer key>',
)

# Print nice welcome message
print("Welcome", client.get('/me')['firstname'])
```

## Weiterführende Informationen

[Ihre Domainnamen über die API verwalten](https://docs.ovh.com/gb/en/api/ovh-api-domains/) (englische Dokumentation)

[So verwalten Sie den Account eines OVHcloud Kunden über die APIs](https://docs.ovh.com/gb/en/api/api-rights-delegation/) (englische Anleitung)

Für den Austausch mit unserer User Community gehen Sie auf [https://community.ovh.com/en/](https://community.ovh.com).
