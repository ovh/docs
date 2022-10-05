---
title: Erste Schritte mit der OVHcloud API
slug: first-steps-with-ovh-api
excerpt: Erfahren Sie hier, wie Sie die OVHcloud API verwenden
section: 'Erste Schritte'
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie beim geringsten Zweifel die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button “Mitmachen“ auf dieser Seite.
>

**Letzte Aktualisierung am 30.05.2022**

## Ziel

Die unter [https://api.ovh.com/](https://api.ovh.com/){.external} verfügbare API erlauben es Ihnen, OVHcloud Produkte zu bestellen, zu verwalten, zu aktualisieren und zu konfigurieren, ohne ein grafisches Interface wie das Kundencenter zu verwenden.

**Hier erfahren Sie, wie Sie die OVHcloud APIs verwenden und mit Ihren Anwendungen verbinden.**

## Voraussetzungen

- Sie verfügen über einen aktiven OVHcloud Kunden-Account und kennen dessen Zugangsdaten.
- Sie sind auf der Webseite der [OVHcloud APIs](https://api.ovh.com/){.external}.

## In der praktischen Anwendung

> [!warning]
> OVHcloud stellt Ihnen Dienstleistungen zur Verfügung, für deren Konfiguration und Verwaltung Sie die alleinige Verantwortung tragen. Es liegt somit bei Ihnen, sicherzustellen, dass diese ordnungsgemäß funktionieren.
> 
> Diese Anleitung soll Sie bei allgemeinen Aufgaben bestmöglich unterstützen. Dennoch empfehlen wir Ihnen, falls Sie Hilfe brauchen, einen [spezialisierten Dienstleister](https://partner.ovhcloud.com/de/directory/) zu kontaktieren und/oder Ihre Fragen in der OVHcloud Community zu stellen. Leider können wir Ihnen für administrative Aufgaben keine weitergehende technische Unterstützung anbieten. Weitere Informationen finden Sie am [Ende dieser Anleitung](#gofurther).
>


### Grundlegende Funktionen

#### Verbindung mit der OVHcloud API

Klicken Sie auf der [OVHcloud API Seite](https://api.ovh.com/) auf `Explore the OVH API`{.action}, um die Liste der API-Funktionen anzuzeigen. 

Um die API für Ihre Dienste zu verwenden, loggen Sie sich mit Ihren OVHcloud Zugangsdaten ein:

- Klicken Sie auf oben rechts `Login`{.action}. 
- Geben Sie Ihre OVHcloud Zugangsdaten ein. 
- Legen Sie unter der Bezeichnung **Validity** einen Zeitraum fest, währenddessen Aktionen über die OVHcloud API erlaubt sein sollen.

![API](images/login.png){.thumbnail} 

> [!primary]
>
> Wenn Ihr OVHcloud Account durch [Zwei-Faktor-Authentifizierung](https://docs.ovh.com/de/customer/Account-mit-2FA-absichern/) geschützt ist, müssen Sie auch den per SMS, OTP-Anwendung oder U2F-Schlüssel generierten Code eingeben.
>

#### Die mit API verfügbaren Dienste analysieren

Wenn Sie eingeloggt sind, werden alle OVHcloud Dienste, die über API-Zugang verfügen, angezeigt. Diese Liste ist alphabetisch geordnet.

![API](images/api-list.png){.thumbnail} 

Um zum Beispiel die zu Domainnamen gehörenden API-Aufrufe anzuzeigen, klicken Sie auf **/domain** in der Liste.

Nachdem Sie auf die Dienstbezeichnung geklickt haben, wird die Liste der verfügbaren API-Funktionen angezeigt. 

![API](images/api-displayed.png){.thumbnail} 

#### API-Aufrufe ausführen

Es sind 4 HTTP-Methoden für die API verfügbar: 

**GET** 

Die GET-Methode dient dem Abruf von Daten aus einer Ressource.

Um zum Beispiel die Liste Ihrer Domainnamen abzurufen, verwenden Sie folgenden Aufruf:
 
> [!api]
>
> @api {GET} /domain
>

**POST**

Die POST-Methode wird verwendet, um zusätzliche Daten an die Ressource zu senden. 

Um zum Beispiel einen Eintrag zu Ihrer DNS Zone hinzuzufügen, verwenden Sie folgenden Aufruf:

> [!api]
>
> @api {POST} /domain/zone/{zoneName}/record
>

**PUT**

Die PUT-Methode dient dazu, die aktuellen Ressourcen-Daten durch die Daten der Abfrage zu ersetzen.

Um beispielsweise einen Eintrag in Ihrer DNS Zone zu korrigieren, verwenden Sie folgenden Aufruf:

> [!api]
>
> @api {PUT} /domain/zone/{zoneName}/record/{id}
>

**DELETE**

Die DELETE-Methode wird verwendet, um die Ressource zu löschen.

Um beispielsweise einen Eintrag in Ihrer DNS Zone zu löschen, verwenden Sie folgenden Aufruf:

> [!api]
>
> @api {DELETE} /domain/zone/{zoneName}/record/{id}
>

##### Parameter der API

Nachdem Sie auf den Endpunkt Ihrer Wahl geklickt haben, können Sie im Bereich **Parameters** Ausführungsvariablen eingeben.
 
Um zum Beispiel einen TXT Eintrag in Ihrer DNS Zone hinzuzufügen, editieren Sie die folgenden Einstellungen:
 	
![API](images/parameters.png){.thumbnail} 
 
Wenn Sie die Parameter festgelegt haben, können Sie die Ausführung des Aufrufs starten, indem Sie auf `Execute`{.action} klicken. 

Der Tab `Result` zeigt den Bericht zur Durchführung des API-Aufrufs.

![API](images/result.png){.thumbnail} 

Die Tabs `PHP` und `Python` enthalten die Elemente, die entsprechend der Anwendungssprache in Ihrem Skript hinzugefügt werden müssen.

### Fortgeschrittene Nutzung: OVHcloud API mit einer Anwendung verbinden

#### Schlüssel für Ihre Anwendung erstellen

Jede Anwendung, die mit der OVHcloud API kommunizieren möchte, muss zuerst freigegeben werden.

Klicken Sie hierzu auf folgenden Link: [https://eu.api.ovh.com/createToken/](https://eu.api.ovh.com/createToken/){.external}.

Geben Sie Ihre Kundenkennung, Ihr Passwort und den Namen Ihrer Anwendung ein. Der Name kann nützlich sein, um anderen Personen Zugriff zu gewähren.

Sie können auch eine Beschreibung der Anwendung und eine Zeitangabe hinzufügen. 

Der Eintrag `Rights` erlaubt es, die Verwendung der Anwendung auf bestimmte Funktionen zu beschränken.<br>
Um eine HTTP-Methode für alle Endpunkte zu erlauben, geben Sie im Feld einen Stern (`*`) ein. Im folgenden Beispiel werden alle GET-Abfragen erlaubt:

![API keys](images/api-keys.png){.thumbnail} 

Wenn Sie auf `Create Keys`{.action} klicken, erhalten Sie drei Schlüssel:

- Den Anwendungsschlüssel **AK**. Zum Beispiel:

```console
7kbG7Bk7S9Nt7ZSV
```

- Den geheimen, nicht zur Veröffentlichung bestimmten Anwendungsschlüssel **AS**. Zum Beispiel:

```console
EXEgWIz07P0HYwtQDs7cNIqCiQaWSuHF
```

- Den geheimen, nicht zur Veröffentlichung bestimmten "**Consumer Key**" oder **CK**. Zum Beispiel:

```console
MtSwSrPpNjqfVSmJhLbPyr2i45lSwPU1
```

In diesem Fall ist der Schlüssel vom Typ **CK** an Ihren Account gebunden.

Der **CK**-Token kann für die Übertragung von Rechten verwendet werden. Weitere Informationen finden Sie in dieser Anleitung: [How to manage a customer’s account via OVHcloud API](https://docs.ovh.com/gb/en/api/api-rights-delegation/) (EN).

#### Erste Verwendung der API

Sobald Ihre drei Schlüssel (**AK**, **AS**, **CK**) verfügbar sind, können Sie die API Anfragen signieren. Die Signatur wird wie folgt berechnet:

```console
"$1$" + SHA1_HEX(AS+"+"+CK+"+"+METHOD+"+"+QUERY+"+"+BODY+"+"+TSTAMP)
```

Um die Entwicklung Ihrer Anwendungen zu vereinfachen, stellt OVHcloud API-Wrapper in mehreren Sprachen bereit.
Wenn Sie diese verwenden, müssen Sie sich nicht um die Berechnung der Signatur kümmern und können sich auf die Programmierung Ihrer Anwendung konzentrieren.

- *Perl*: <https://github.com/ovh/perl-ovh>
- *Python*: <https://github.com/ovh/python-ovh>
- *PHP*: <https://github.com/ovh/php-ovh>
- *Node.js*: <https://github.com/ovh/node-ovh>
- *Swift*: <https://github.com/ovh/swift-ovh>
- *C#*: <https://github.com/ovh/csharp-ovh>

Hier ein Beispiel für die Nutzung der Rubrik `/me` zur Verwaltung Ihres OVHcloud Kunden-Accounts:

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

## Weiterführende Informationen <a name="gofurther"></a>

[Domainnamen über die API verwalten](https://docs.ovh.com/gb/en/api/ovh-api-domains/) (EN)

[OVHcloud Kunden-Account über die API verwalten](https://docs.ovh.com/gb/en/api/api-rights-delegation/) (EN)

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
