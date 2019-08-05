---
title: 'Objekt mit einer temporären Adresse teilen'
slug: ein_objekt_mit_temporarer_adresse_teilen
excerpt: 'So teilen Sie ein Objekt, ohne persönliche Informationen weiterzugeben'
section: 'Object Storage'
legacy_guide_number: g2007
---

**Stand 16.07.2019**

## Einleitung 

Mit OpenStack Swift können Sie eine große Anzahl an Dateien speichern. Um diese zu verwalten, authentifizieren Sie sich für jede API-Anfrage mithilfe eines *Tokens*. Dieser *Token* wird mithilfe Ihres Benutzernamens und Passworts über das Authentifizierungssystem erstellt und dient dazu, Ihre Lese- und Schreibrechte in Swift zu bestätigen. 

Wenn Sie eine Datei für einen anderen Benutzer freigeben, möchten Sie dabei natürlich nicht Ihre persönlichen Authentifizierungsdaten weitergeben. In diesem Fall können Sie temporäre Adressen (*tempURL*) verwenden.

**In dieser Anleitung erfahren Sie, wie Sie ein Objekt mithilfe einer temporären Adresse teilen.**

## Voraussetzungen

- [Sie haben die Umgebung für die Verwendung der OpenStack-API vorbereitet](https://docs.ovh.com/de/public-cloud/vorbereitung_der_umgebung_fur_die_verwendung_der_openstack_api/){.ref}.
- Sie haben die OpenStack-Umgebungsvariablen eingerichtet.
- Python ist auf Ihrem System installiert.

## Beschreibung

### Prinzip verstehen

Die temporäre Adresse (oder *tempURL*) ist eine Funktion, mit der Sie freigegebene Dateien verwalten können. Hierzu verwendet diese folgende Elemente:

- **Adresse des Zugriffspunkts**, zum Beispiel https://storage.sbg1.cloud.ovh.net
- **Objektpfad mit Ihrem Projekt, Container und dem Objektnamen**, zum Beispiel `v1/AUTH_tenant/default/file`
- **tempurlsign-Parameter**, entspricht einer gemäß Ihrem geheimen Schlüssel erstellten Signatur, der HTTP-Methode, dem Dateipfad und dem Ablaufdatum
- **url_expires-Parameter**, entspricht dem Ablaufdatum Ihrer temporären Adresse

### Temporäre Adresse (*tempURL*) generieren

#### 1. Schlüssel generieren

Erstellen Sie zuerst einen Schlüssel. Dieser ist für alle Dateien Ihres Projekts gültig. Daher reicht es aus, nur einen Schlüssel für alle Ihre temporären Adressen zu generieren. 

> [!primary]
>
> Wir empfehlen Ihnen dringend, einen langen und sicheren Schlüssel mit mindestens 20 Zeichen zu wählen. Beachten Sie außerdem, dass jederzeit ein neuer Schlüssel generiert werden kann.
> 

Um Ihren Schlüssel zu generieren, haben Sie mehrere Möglichkeiten. Sie können zum Beispiel die Befehle sha512sum und sha256sum verwenden. Wir empfehlen Ihnen, die Methode zu verwenden, die am besten zu Ihrer Situation passt und dem gewünschten Verschlüsselungsniveau entspricht. Zum Beispiel (von der effizientesten zur am wenigsten effizienten Verschlüsselungsmethode):

- date +%s | sha512sum
- date +%s | sha256sum
- date +%s | md5sum 

Sobald Sie Ihren Schlüssel haben, können Sie diesen über den Swift-Client auf Ihrem Projekt einrichten. Denken Sie daran, die Zahlenreihe „12345” durch Ihren Schlüssel zu ersetzen:

```bash
swift post -m "Temp-URL-Key: 12345"
```

Oder Sie verwenden curl:

```bash
curl -i -X POST \ -H "X-Account-Meta-Temp-URL-Key: 12345" \ -H "X-Auth-Token: abcdef12345" \ https://storage.sbg1.cloud.ovh.net/v1/AUTH_ProjectID
```

> [!primary]
>
> Der vollständige Header lautet `X-Account-Meta-Temp-Url-Key`, der Swift-Client verwendet jedoch `Temp-Url-Key`, da er `X-Account-Meta` automatisch hinzufügt.
> 

Jetzt, da der Schlüssel auf Ihrem Account eingerichtet ist, überprüfen Sie mit dem Swift-Client und folgendem Befehl, dass der **Header** korrekt angewendet wurde:

```bash
swift stat
```

Oder verwenden Sie curl:

```bash
curl -i -X HEAD \ -H "X-Auth-Token: abcdef12345" \ https://storage.sbg1.cloud.ovh.net/v1/AUTH_ProjectID
```

#### 2. URL generieren

Die folgenden Tasks können auch offline durchgeführt werden. Wir generieren die URL-Adresse mithilfe eines Befehls. Dieser muss mit Ihren eigenen Informationen angepasst werden.

Zum Beispiel gilt für folgende Elemente:

- **GET**: HTTP-Methode
- **60**: für 60 Sekunden verfügbarer Link (Sie können diesen Wert anpassen)
- **/v1/AUTH_tenant/default/file**: Pfad zu Ihrer Datei. An dieser Stelle ist es nicht notwendig, den Zugriffspunkt hinzuzufügen.
- **12345**: durch Ihren Schlüssel zu ersetzen

```
swift tempurl GET 60 /v1/AUTH_tenant/default/file 12345
```

Sie erhalten die **tempURL**, mit der Sie den **Dateipfad**, die **Signatur** und das **Ablaufdatum** wie bereits erwähnt anzeigen können.

```
v1/AUTH_tenant/default/file?temp_url_sig=8016dsdf3122d526afds60911cde59fds3&temp_url_expires=1401548543
```

Damit Ihre URL funktioniert, muss die Adresse des Zugriffspunkts vor der **tempURL** hinzugefügt werden:

```
https://storage.sbg1.cloud.ovh.net/v1/AUTH_tenant/default/file?temp_url_sig=8016dsdf3122d526afds60911cde59fds3&temp_url_expires=1401548543
```

Im oben stehenden Beispiel kann über diese temporäre Adresse für 60 Sekunden die Datei **file** im Container **default** ohne Authentifizierung heruntergeladen werden. Nach Ablauf der 60 Sekunden funktioniert die URL nicht mehr.

> [!primary]
>
> Fortgeschrittene Benutzer können temporäre Adressen auch ohne das Skript **swift-temp-url** generieren. Weitere Informationen hierzu finden Sie direkt in der offiziellen OpenStack-Dokumentation.

## Weiterführende Informationen

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.