---
title: SVN verwenden
slug: webhosting_verwendung_von_svn
legacy_guide_number: 1961
excerpt: So verwenden Sie SVN via SSH auf Ihrem Webhosting
section: FTP und SSH
---

**Letzte Aktualisierung am 28.10.2020**

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie beim geringsten Zweifel die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button «Mitmachen» auf dieser Seite.
>

## Ziel

SVN, die Abkürzung für "Subversion", ist ein Versionsverwaltungssystem. 

**So verwenden Sie SVN via SSH auf Ihrem Webhosting**

> [!warning]
>
> OVHcloud stellt Ihnen Dienstleistungen zur Verfügung, für deren Konfiguration und Verwaltung Sie die alleinige Verantwortung tragen. Es liegt somit bei Ihnen, sicherzustellen, dass diese ordnungsgemäß funktionieren.
> 
> Wir stellen Ihnen diese Anleitung zur Verfügung, um Ihnen bei der Bewältigung alltäglicher Verwaltungsaufgaben zu helfen. Dennoch empfehlen wir Ihnen, falls Sie Hilfe brauchen, einen spezialisierten Dienstleister und/oder den Herausgeber des Dienstes zu kontaktieren. Für externe Dienstleistungen bietet OVHcloud leider keine Unterstützung. Genauere Informationen finden Sie im Teil „Weiterführende Informationen" dieser Anleitung.
> 

## Vorbedingung

- Sie verfügen über [ein Webhosting Angebot](https://www.ovh.de/hosting/) für eine SSH Verbindung (**ab dem Pro Angebot**)
- Via SSH mit Ihrem Webhosting verbinden (Sie können in unserer Anleitung [SSH-Zugang auf Ihrem Webhosting verwenden](../webhosting_ssh_auf_ihren_webhostings/))

## In der praktischen Anwendung

### Erstellung des Depots

Wenn Sie via [SSH auf Ihrem Hosting eingeloggt sind](../webhosting_ssh_auf_ihren_webhostings/){.external}, erstellen Sie das Wurzelverzeichnis der SVN-Depots und anschließend das Depot.

Geben Sie dazu einfach folgenden Befehl ein:

```bash
mkdir svn
```

und dem

```bash
svnadmin create svn/depot_test
```

Überprüfen Sie anschließend, ob die Verzeichnisse mit dem Befehl erstellt wurden:

```bash
ls -la
```

Sie müssen die Verzeichnisse wie im folgenden Bild dargestellt erhalten:

![Hosting](images/3078.png){.thumbnail}

### Erstellung öffentlicher/privater Schlüssel

Bevor Sie fortfahren, erstellen Sie von dem Computer aus ein SSH-Schlüsselpaar, das Sie verwenden, um sich mit dem SVN-Depot zu verbinden.

Folgen Sie bitte der Anleitung [SSH-Schlüssel erstellen](https://docs.ovh.com/de/public-cloud/create-ssh-keys/). Folgen Sie nicht dem Schritt [Importieren Sie Ihren SSH-Schlüssel in das OVHcloud Kundencenter](https://docs.ovh.com/de/public-cloud/create-ssh-keys/#ihren-ssh-schlussel-ins-ovhcloud-kundencenter-importieren_1) in dieser Anleitung.

### Öffentlichen Schlüssel zum Hosting hinzufügen

Nachdem Sie Ihren Key erhalten haben, fügen Sie diesen in der .ssh/authorized_keys2 Datei auf Ihrem Hosting hinzu. Geben Sie hierzu die folgende Befehlszeile ein:

```bash
mkdir .ssh
chmod 700 .ssh
vi .ssh/authorized_keys2
```

Wenn die Datei geöffnet ist, geben Sie folgende Zeile ein:

```bash
command="/usr/bin/svnserve --root=/homez.XXX/loginFTP/svn --tunnel --tunnel-user=john",no-port-forwarding,no-agent-forwarding,no-X11-forwarding,no-pty
```

Gefolgt von dem zuvor erstellten Key, alles auf derselben Zeile.

> [!primary]
>
> Ersetzen Sie "/home.XXX/LoginFTP"und "John"mit Ihren SSH-Zugangsdaten.
> Um die Zahlen zu kennen, die als Ersatz für "/home.XXX/LoginFTP"zu verwenden sind, geben Sie den Befehl "pwd"via SSH ein.
>
> Weitere Informationen finden Sie in unserer Anleitung [Den SSH-Zugang Ihres Webhostings verwenden](../webhosting_ssh_auf_ihren_webhostings/){.external}.
> 

![Hosting](images/3080.png){.thumbnail}

Sie können den Inhalt des Depots abrufen, ohne sich direkt per SSH auf der Maschine zu verbinden.

> [!warning]
>
> Achtung, ein und derselbe Schlüssel darf nicht für SVN und SSH in
> Kommandozeile
> 

### Beispiele

#### Unter Linux

Sie können einen Test vom Computer aus durchführen, der sich mit dem SVN Depot verbindet, indem Sie die Leitung eingeben:

```bash
svn checkout svn+ssh://loginFTP@clusterXXX/depot_test
```

#### Windows mit TortoiseSVN

- Download und Installation von TortoiseSVN ([http://tortoisesvn.net/downloads](http://tortoisesvn.net/downloads){.external})
- Klicken Sie mit der rechten Maustaste auf den privaten Schlüssel. Unten rechts erscheint ein Icon, der Schlüssel wird dann in den Authentifizierungsagenten geladen.
- Erstellen Sie ein Verzeichnis, klicken Sie mit der rechten Maustaste darauf und wählen Sie "SVN Checkout". 
- Geben Sie `svn+ssh://loginFTP@xxplan.ovh.net/depot_test` in das Feld "URL of repository"ein und klicken Sie auf `OK`:

![Hosting](images/3081.png){.thumbnail}

Subversion enthält eine sehr gute Dokumentation auf Englisch: [http://svnbook.red-bean.com/en/1.5/index.html](http://svnbook.red-bean.com/en/1.5/index.html){.external}

### Sonderfälle

#### Mehrere Accounts erstellen

Zunächst müssen mehrere SSH-Schlüssel erstellt worden sein. Beim Hinzufügen des öffentlichen Schlüssels zum Hosting:

```bash
command="/usr/bin/svnserve --root=/home.XXX/loginFTP/svn --tunnel --tunnel-user=marc",no-port-forwarding,no-agent-forwarding,no-X11-forwarding,no-pty
```

Ändern Sie die nachstehende Einstellung, indem Sie Ihre verschiedenen Benutzer hinzufügen:

```bash
--tunnel-user
```

Bitte beachten Sie, dass Sie auch Einlesezugriff gewähren können, indem Sie folgenden Parameter hinzufügen:

```bash
--read-only.
```

#### Lokal vom Server überprüfen

Wenn Sie eine Überprüfung vor Ort durchführen möchten, funktionieren die Beispiele nicht. Verwenden Sie:

```bash
svn+ssh://login@ftp.nom-du-site.tld/home.XXX/login/svn/depot_test
```

## Weiterführende Informationen

[SSH-Zugang auf Ihrem Webhosting verwenden](../webhosting_ssh_auf_ihren_webhostings/){.external}

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
