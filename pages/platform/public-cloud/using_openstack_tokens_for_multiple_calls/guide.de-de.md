---
title: "Verwendung der OpenStack Token"
slug: using-openstack-tokens
excerpt: "Hier erfahren Sie, wie Sie OpenStack-Token für Ihre Aktionen erstellen und verwenden."
section: "Gestion via Openstack"
order: 01
updated: 2023-05-05
---

**Letzte Aktualisierung am 05.05.2023**

## Ziel

**In dieser Anleitung werden bewährte Verfahren für die Durchführung zahlreicher OpenStack-Aktionen in kurzer Zeit beschrieben.**

> [!primary]
>
> Die in dieser Anleitung beschriebenen Schritte basieren auf Version 3.0 der Keystone-API.
>

### Definitionen

- **Endpunkt (*Endpoint*)**: Web-Adresse, die direkt auf die API eines Dienstes verweist. Zum Beispiel [https://auth.cloud.ovh.net/v3/](https://auth.cloud.ovh.net/v3/) für den Zugriffspunkt auf die Authentifizierung oder [https://image.compute.gra11.cloud.ovh.net/](https://image.compute.gra11.cloud.ovh.net/) für den Zugriffspunkt auf die Verwaltung der Bilder der GRA11 Zone. 

- **Token**: eine einzige Zeichenkette, die für die Authentifizierung und den Zugriff auf die Ressourcen verwendet wird. Der Benutzer bittet darum, indem er seine Login-Daten (Verbindungsdetails) in die Authentifizierungsdaten eingibt. Der Token wird generiert und ist 24 Stunden gültig.

- **OpenRC**: Um die Interaktion mit dem Identitätsdienst über den OpenStack-Client zu verbessern, unterstützt OpenStack einfache Umgebungsskripte, die auch als OpenRC-Dateien bezeichnet werden. Dabei handelt es sich um Dateien, die Optionen enthalten, die allen Kunden gemeinsam sind, aber auch individuelle Optionen enthalten.

### Problematik

Die meisten an die OpenStack-API versandten Anfragen müssen einem Autorisierungsprozess unterliegen, bei dem ein Token generiert und validiert wird.

Wenn Sie jedoch in kurzer Zeit zu viele Aktionen ausführen, werden einige OpenStack-Aktionen aufgrund zu vieler API-Aufrufe irregeführt. Die derzeitige Obergrenze beträgt 60 Token pro Minute und Benutzer. Die Authentifizierungsdaten der API werden HTTP 429-Fehler über diese Grenze hinaus übertragen.

Weitere Informationen finden Sie in [der offiziellen OpenStack API Dokumentation](http://developer.openstack.org/api-guide/quick-start/).

In dieser Anleitung erfahren Sie, wie Sie ein OpenStack-Token herausgeben, für die von Ihnen gewünschten Aktionen verwenden und wie Sie ein Token zurückziehen.

## Voraussetzungen 

- Sie sind im OVHcloud [Kundencenter eingeloggt](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de){.external}.
- Diese Anleitung erfordert die Installation des OpenStack CLI Tools auf Ihrer Maschine.

> [!primary]
>
> Weitere Informationen zu diesem Tool finden Sie in der [OpenStack CLI Dokumentation](https://docs.openstack.org/python-openstackclient/latest/).

Sie können es über den APT Paketmanager (für Debian-basierte Distributionen) oder über yum (für Distributionen auf Basis von RHEL/CentOS) erhalten:

```bash
# Debian Distributionen 

sudo apt install python3-openstackclient

# Distributionen CentOS/RHEL

sudo yum install python3-openstackclient
```

- Für Windows-Benutzer lesen Sie folgende Anleitung, um Ihre Umgebungsvariablen zu exportieren: [OpenStack Umgebungsvariablen einrichten](/pages/platform/public-cloud/loading_openstack_environment_variables/).

## In der praktischen Anwendung

### Schritt 1: Laden Sie Ihre OpenRC Datei herunter und lächeln Sie

Verbinden Sie sich mit Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) und öffnen Sie Ihr Public `Cloud Projekt`{.action}.

Klicken Sie auf `Users & Roles`{.action} im Bereich `Project Management` und dann auf den `...`{.action} rechts neben Ihrem OpenStack-Benutzer.<br>
Laden Sie die OpenRC-Datei dieses Benutzers herunter und geben Sie die Region an, in der Sie Aktionen durchführen möchten.

![die OpenRC Datei herunterladen](images/openrc.png){.thumbnail}

Wenn Sie Ihre OpenRC-Datei heruntergeladen haben, bearbeiten Sie diese Zeile:

```bash
OS_PASSWORD=<your_password>
```

Passen Sie diese Zeile sorgfältig an das Passwort Ihres OpenStack-Benutzers an, das Ihnen bei der Erstellung des Benutzers zugeteilt wurde.

Lächeln Sie anschließend die Datei, die Sie zuvor heruntergeladen haben:

```bash
source openrc.sh
```

### Schritt 2: Ausgabe eines OpenStack-Tokens

> [!primary]
>
> Ein OpenStack-Token ist 24 Stunden nach seiner Sendung gültig. Für eine höhere Zuverlässigkeit können Sie alle 8 Stunden ein Token ausgeben (zum Beispiel), um Aktionen mit einem abgelaufenen Token zu vermeiden.
>
> Wenn Sie längere Aktionen wie Snapshots, *Instanz*-Shelving, Bilderzeugung usw. in Betracht ziehen, sollten Sie lieber ein neues Token erstellen, als die gewünschte Aktion direkt auszuführen.
>

Wenn Sie Ihre OpenRC-Datei mit einem Lächeln versehen haben, führen Sie folgenden Befehl aus, um ein Token auszugeben:

```bash
openstack token issue
```

Das Ergebnis sollte dem folgenden entsprechen:

```bash
+------------+----------------------------------------------------------------+
| Field      | Value                                                          |
+------------+----------------------------------------------------------------+
| expires    | 2023-04-06T08:33:15+0000                                       |
| id         | gAAAAA[...]                                                    |
| project_id | 8a7[...]                                                       |
| user_id    | f99[...]                                                       |
+------------+----------------------------------------------------------------+
```

Sie können nun die ID des zuvor ausgesendeten Tokens exportieren:

```bash
export OS_TOKEN = gAAAAA[...]
```

Mit folgendem Befehl können Sie Ihre Token auch direkt exportieren:

```bash
export OS_TOKEN=$(openstack token issue -f value -c id)
```

### Schritt 3: Unnötige Variable löschen

Um Ihre Token für Aktionen mit Ihrem Benutzer zu verwenden, müssen Sie die Variable `OS_USER_DOMAIN_NAME`.

Führen Sie hierzu folgenden Befehl aus:

```bash
unset OS_USER_DOMAIN_NAME
```

### Schritt 4: Token verwenden, um Bestellungen auszuführen

Nun, da Sie Ihre Token haben, können Sie klassische OpenStack-Anrufe verwenden, um Ihre Infrastruktur zu verwalten.

```bash
openstack --os-auth-type token <command>
```

Beispiel: 

```bash
openstack --os-auth-type token image list
```

### Schritt 5: OpenStack-Token entfernen

Wenn Sie alle Aktionen durchgeführt haben, können Sie den OpenStack-Token entfernen, um zu vermeiden, dass er für andere Aktionen verwendet wird.

Verwenden Sie hierzu folgenden Befehl:

```bash
openstack --os-auth-type token token revoke <token_id>

# oder

openstack --os-auth-type token token revoke $OS_TOKEN
```

## Weiterführende Informationen

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.