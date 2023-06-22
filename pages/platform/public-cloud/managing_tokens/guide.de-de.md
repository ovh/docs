---
title: Token-Verwaltung
excerpt: 'Erfahren Sie hier, wie Sie Token über die Keystone API verwenden'
slug: token-verwaltung
section: 'OpenStack'
updated: 2023-06-15
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie im Zweifelsfall die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button "Beitragen" auf dieser Seite.
>

## Ziel

**Diese Anleitung erklärt, wie Sie API-Verbindungen zu Ihrem Dienst mittels Token einrichten.**

> [!primary]
>
> Die hier aufgeführten Informationen gelten für die Keystone API Version 3.0.
> 

## In der praktischen Anwendung 

### Definitionen

- Endpoint: HTTP-Adresse, die direkt auf eine API eines Dienstes verweist, zum Beispiel [https://auth.cloud.ovh.net/v3/](https://auth.cloud.ovh.net/v3/) für den Authentifizierungsendpoint, oder [https://image.compute.gra1.cloud.ovh.net/](https://image.compute.gra1.cloud.ovh.net/) für den Endpoint zur Verwaltung der Images der GRA1 Zone. 

- Token: Einzigartige Zeichenkette zum Zweck der Authentifizierung und des Ressourcenzugriffs. Der Benutzer fragt ein Token an, indem er seine Login-Informationen an die API zur Authentifizierung liefert. Es wird mit einer begrenzten Gültigkeitsdauer von 24 Stunden generiert und geliefert. Ein Token kann "scoped" oder "unscoped" sein, d.h. er kann direkt an einen Tenant gebunden sein oder an keinen Tenant gebunden sein.


### Struktur einer Anfrage

Die meisten Anfragen an die OpenStack-API müssen einem Autorisierungsmechanismus folgen. Dieser Mechanismus funktioniert über das Erstellen eines Tokens und dessen Validierung. Hier ein beispielhafter Ablauf einer Anfrage von der Authentifizierung bis zum Abschluss:

- Anfrage zur Erstellung eines Tokens beim Authentifizierungsendpoint mit den Logindaten.
- Anfrage zum Endpoint des gewünschten Dienstes (Storage, Compute, Network, ...) durch Bereitstellung des Tokens als Parameter.
- Die API des Dienstes holt den Token ab und bittet den Authentifizierungsdienst um Überprüfung der Gültigkeit.
- Falls gültig, wird der Aufruf ausgeführt.

Da die Token eine festgelegte Gültigkeitsdauer haben, laufen sie aus und müssen bei Bedarf verlängert werden.

Sollte ein Token vor seinem Ablaufdatum widerrufen werden müssen, kann dies auch über die API erfolgen.

Weitere Informationen finden Sie in der [Dokumentation der OpenStack API](https://docs.openstack.org/keystone/train/api_curl_examples.html){.external}.


### Manuelle Operationen

Die folgenden Operationen können manuell durchgeführt werden und werden in der Regel zu Lehr- oder Debugzwecken verwendet.

Die Umgebung muss mittels der openRC-Datei geladen werden. Laden Sie dazu die Datei "openrc.sh" herunter, die Sie im Horizon-Interface finden. Deren Verwendung stellt alle Umgebungsvariablen bereit, die für die Komposition der nachfolgenden Befehle erforderlich sind.

Um sich mit Horizon zu verbinden und die Datei herunterzuladen, lesen Sie [diese Anleitung](/pages/platform/public-cloud/introducing_horizon/).

In unserem Beispiel möchten wir die Metadaten eines Objekts erhalten, das mithilfe von Public Cloud Storage gespeichert wurde. Die Schritte sind:

- Anfrage zur Erstellung eines Tokens
- Abruf der Token-ID-Variablen und der öffentlichen Endpoint-URL
- Anfrage über das Objekt mit den abgerufenen Informationen

Mit dem Befehlszeilentool cURL können alle Anfragen zusammengebaut werden.


#### Schritt 1: Anfrage zur Erstellung eines Tokens

```bash
curl -X POST ${OS_AUTH_URL}v${OS_IDENTITY_API_VERSION}/auth/tokens -H "Content-Type: application/json" -d ' { "auth": { "identity": { "methods": ["password"], "password": { "user": { "name": "'$OS_USERNAME'", "domain": { "id": "default" }, "password": "'$OS_PASSWORD'" } } }, "scope": { "project": { "name": "'$OS_TENANT_NAME'", "domain": { "id": "default" } } } } }' | python -mjson.tool
```

Die Antwort des Servers sieht so aus:


```json
 {
  "token": {
    "is_domain": false,
    "methods": [
      "password"
    ],
    "roles": [
      {
        "id": "9543e89aeb484aee8ec7d01e87223b16",
        "name": "objectstore_operator"
      }
    ],
    "is_admin_project": false,
    "project": {
      "domain": {
        "id": "default",
        "name": "Default"
      },
      "id": "<ID OF THE PROJECT>",
      "name": "<NAME OF THE PROJECT>"
    },
    "catalog": [
      {
        "endpoints": [
          {
            "url": "https://network.compute.sbg1.cloud.ovh.net/",
            "interface": "internal",
            "region": "SBG1",
            "region_id": "SBG1",
            "id": "075839111e7a41f1bb458926e5f04cec"
          },
          [...]
        ],
        "type": "network",
        "id": "0be6ed3dce244b8295ff643739a86809",
        "name": "neutron"
      },
      [...]
    ],
    "expires_at": "2020-01-17T14:53:32.000000Z",
    "user": {
      "password_expires_at": null,
      "domain": {
        "id": "default",
        "name": "Default"
      },
      "id": "<ID OF THE USER>",
      "name": "<NAME OF THE USER>"
    },
    "audit_ids": [
      "IuNOR-lKQ9GJGQd8taWBnQ"
    ],
    "issued_at": "2020-01-16T14:53:32.000000Z"
  }
}
```


#### Schritt 2: Abrufen der Variablen "tokenID" und "endpoint publicURL"

Beide Informationen sind in der Ausgabe des obigen Befehls enthalten.

"publicURL" ist im Abschnitt "endpoints" und der entsprechenden "Region", hier "SBG", zu finden.


```bash
$ export endpoint="https://storage.sbg.cloud.ovh.net/v1/AUTH_9ea...ff0"
```

Die Endpoint-Adresse des Object Storage-Dienstes ermöglicht es, die Informationen zum Objekt anzufordern.


```bash
export token=$(curl -is -X POST ${OS_AUTH_URL}v${OS_IDENTITY_API_VERSION}/auth/tokens -H "Content-Type: application/json" -d ' { "auth": { "identity": { "methods": ["password"], "password": { "user": { "name": "'$OS_USERNAME'", "domain": { "id": "default" }, "password": "'$OS_PASSWORD'" } } }, "scope": { "project": { "name": "'$OS_TENANT_NAME'", "domain": { "id": "default" } } } } }' | grep -i '^X-Subject-Token' | cut -d" " -f2)
```

Dieser Token ist nun das Authentifizierungselement, das für die nächste Anfrage verwendet wird.


#### Schritt 3: Objektanfrage mit den zuvor abgerufenen Informationen

```bash
curl -X GET $endpoint/photos/fullsize/ovh-summit-2014-backstage-DS.jpg -H "X-Auth-Token: $token" -I
```

- \-X GET: Methode HTTP GET
- $endpoint/photos/fullsize/ovh-summit-2014-backstage-DS.jpg: Adresse des Objekts
- \-H "X-Auth-Token: $token": Authentifizierungselement
- \-I: cURL Option zum Abruf der Metadaten

Die Antwort sieht so aus:


```bash
HTTP/1.1 200 OK
Content-Length: 190046
Content-Type: image/jpeg
Accept-Ranges: bytes
Last-Modified: Thu, 24 Sep 2015 14:20:11 GMT
Etag: c93e12530b66f121d4bd5a6ae096ee77
X-Timestamp: 1443104410.15437
X-Object-Meta-Mtime: 1424095540.000000
X-Trans-Id: 95CAB26E:D200_052711B1:01BB_560D4CE7_1631931:2BB4
Date: Thu, 01 Oct 2015 15:10:31 GMT
Connection: close
```


### Automatische Verwaltung

Es wird empfohlen, Bibliotheken (Libraries) zu verwenden, die eine transparente Verwaltung von Token ermöglichen. Auf diese Weise werden die Token automatisch erstellt, verwendet und verlängert, ohne diese auf Anwendungsebene verwalten zu müssen, indem Sie lediglich der Bibliothek Logindaten bereitstellen.

Es gibt viele Bibliotheken in verschiedenen Sprachen. Für weitere Informationen überprüfen Sie die [offizielle Liste](https://wiki.openstack.org/wiki/SDKs){.external}.

## Weiterführende Informationen

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
