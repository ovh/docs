---
title: Tutorial - Installieren eines SSL-Zertifikats auf einem VPS
excerpt: Erfahren Sie hier, wie Sie ein SSL-Zertifikat auf einem OVHcloud VPS installieren
updated: 2025-01-24
---

## Ziel

Die Sicherheit Ihrer Website ist unerlässlich, um die sensiblen Daten Ihrer Benutzer zu schützen und ihr Vertrauen zu stärken. Mit einem SSL-Zertifikat (**S**ecure **S**ockets **L**ayer) können Sie die Kommunikation zwischen Ihren Besuchern und Ihrer Website verschlüsseln und gleichzeitig die Vertrauenswürdigkeit erhöhen. Diese Anleitung dokumentiert die Verwendung von **Let's Encrypt**, einem kostenlosen und automatisierten Dienst.

**Diese Anleitung erklärt, wie Sie ein SSL-Zertifikat auf einem OVHcloud VPS installieren.**

> [!warning]
> OVHcloud stellt Ihnen Dienstleistungen zur Verfügung, für deren Konfiguration und Verwaltung Sie die alleinige Verantwortung tragen. Es liegt somit bei Ihnen, sicherzustellen, dass diese ordnungsgemäß funktionieren.
> 
> Dieses Tutorial soll Sie bei allgemeinen Aufgaben bestmöglich unterstützen. Wir empfehlen Ihnen jedoch, bei Schwierigkeiten einen [spezialisierten Dienstleister](/links/partner) oder den Herausgeber des Dienstes zu kontaktieren. Weitere Informationen finden Sie am [Ende dieser Anleitung](#go-further).
>

## Voraussetzungen

- Sie haben einen [VPS](/links/bare-metal/vps) in Ihrem Kunden-Account.
- Sie haben Administrator-Zugang (sudo) via SSH zu Ihrem VPS.
- Sie verfügen über eine funktionsfähige Webseite, die über `HTTP` erreichbar ist.

## In der praktischen Anwendung

### Inhalt

- [Schritt 1 - Verbinden Sie sich mit Ihrem OVHcloud VPS](#step1)
- [Schritt 2 - Installieren Sie Certbot](#step2)
- [Schritt 3 - Erhalten Sie ein SSL-Zertifikat mit Let's Encrypt](#step3)
- [Schritt 4 - Konfigurieren Sie Ihren Webserver](#step4)
- [Schritt 5 - Automatische Verlängerung aktivieren](#step5)

### Schritt 1 - Verbinden Sie sich mit Ihrem OVHcloud VPS <a name="step1"></a>

1. Laden Sie einen SSH-Client wie [PuTTY](/pages/web_cloud/web_hosting/ssh_using_putty_on_windows) herunter, oder verwenden Sie das integrierte Terminal Ihres Betriebssystems.
2. Verbinden Sie sich mit den angegebenen Verbindungsinformationen mit Ihrem OVHcloud VPS:

```bash
ssh root@<vps_ip>
```
Ersetzen Sie `<vps_ip>` durch die IP-Adresse Ihres OVHcloud VPS.

### Schritt 2 - Installieren Sie Certbot <a name="step2"></a>

Certbot ist ein Tool zur automatischen Verwaltung von Let's Encrypt Zertifikaten. Führen Sie die folgenden Schritte aus, um Certbot abhängig von Ihrer Linux-Distribution zu installieren.

> [!tabs]
> **Ubuntu/Debian**
>>
>> ```bash
>> sudo apt update
>> sudo apt install certbot
>> ```
>>
> **CentOS**
>>
>> ```bash
>> sudo yum install epel-release
>> sudo yum install certbot
>> ```
>>
> **Fedora**
>>
>> ```bash
>> sudo dnf install certbot
>> ```

Stellen Sie sicher, dass Certbot ordnungsgemäß installiert ist, indem Sie den folgenden Befehl ausführen:

```bash
certbot --version
```

Hierbei muss die installierte Version von Certbot angezeigt werden.

### Schritt 3 - Holen Sie sich ein SSL-Zertifikat mit Let's Encrypt <a name="step3"></a>

> [!primary]
>
> Wenn Sie Ihren Webserver (Nginx oder Apache) installiert haben, empfehlen wir Ihnen, die Certbot-Plugins zu verwenden, um die SSL-Konfiguration zu automatisieren und Weiterleitungen zu `HTTPS` zu aktivieren. Diese Plugins vereinfachen die Installation durch die direkte Verwaltung der Konfigurationsdateien des Webservers.

#### Automatische Verwendung mit den Plugins Certbot Nginx oder Apache (empfohlen)

Verwenden Sie je nach Webserver die entsprechenden Befehlszeilen:

> [!tabs]
> **Nginx**
>>
>> Installieren Sie das Certbot Nginx Plugin
>>
>> ```bash
>> sudo apt install python3-certbot-nginx -y
>> ```
>>
>> SSL-Zertifikat erstellen:
>>
>> ```bash
>> sudo certbot --nginx -d your_domain
>> ```
>>
> **Apache**
>>
>> Installieren Sie das Apache CertBot Plugin
>>
>> ```bash
>> sudo apt install python3-certbot-apache -y
>> ```
>>
>> SSL-Zertifikat erstellen:
>>
>> ```bash
>> sudo certbot --apache -d your_domain
>> ```

Certbot konfiguriert automatisch das SSL-Zertifikat und die Weiterleitung zu `HTTPS`. Stellen Sie sicher, dass Ihre Website über `HTTPS` erreichbar ist.

#### Eigenständige Verwendung

Wenn Sie den Server manuell konfigurieren möchten, verwenden Sie Certbot im Standalone-Modus. Dieser Modus verwendet einen temporären Server, der in Certbot integriert ist, um Ihren Domainnamen zu validieren und ein SSL-Zertifikat zu generieren.

Verwenden Sie den folgenden Befehl, um ein Zertifikat anzufordern:

```bash
sudo certbot certonly --standalone -d your_domain
```

Ersetzen Sie `your_domain` durch Ihre Domain.

> [!warning]
> Diese Methode beendet vorübergehend alle Dienste, die Port 80 verwenden (z.B. einen anderen Webserver).

Sobald das Zertifikat erstellt wurde, sind die Dateien in `/etc/letsencrypt/live/your_domain/` verfügbar:

- `fullchain.pem`: Das vollständige Zertifikat
- `privkey.pem`: Der private Schlüssel

### Schritt 4 - Konfigurieren Sie Ihren Webserver <a name="step4"></a>

> [!primary]
> Wenn Sie die automatische Lösung (mit den Certbot-Plugins) bereits verwendet haben ([Schritt 3](#step3)) und Ihre Website über `HTTPS` erreichbar ist, fahren Sie direkt mit [Schritt 5](#step5) fort.

#### Beispiel für Nginx

1\. Öffnen Sie die Konfigurationsdatei Ihrer Website (zum Beispiel `/etc/nginx/sites-available/your_domain.conf`).

2\. Fügen Sie die folgenden Zeilen hinzu, um SSL zu aktivieren:

```nginx
server {
    listen 443 ssl;
    server_name your_domain;

    ssl_certificate /etc/letsencrypt/live/your_domain/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/your_domain/privkey.pem;

    # Zusätzliche Sicherheitseinstellungen
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers HIGH:!aNULL:!MD5;

    # HTTP-zu-HTTPS-Weiterleitung
    location / {
        try_files $uri $uri/ =404;
    }
}
```

3\. Automatische Weiterleitung `HTTP` zu `HTTPS` hinzufügen:

```nginx
server {
    listen 80;
    server_name your_domain;
    return 301 https://$host$request_uri;
}
```

4\. Testen und starten Sie Nginx neu:

```bash
sudo nginx -t
sudo systemctl reload nginx
```

Stellen Sie sicher, dass Ihre Website über `HTTPS` erreichbar ist.

#### Beispiel für Apache

1\. SSL-Module und Header aktivieren:

```bash
sudo a2enmod ssl
sudo a2enmod headers
```

2\. Ändern Sie die Konfiguration Ihrer Website (zum Beispiel `/etc/apache2/sites-available/your_domain.conf`), um Folgendes aufzunehmen:

```apache
<VirtualHost *:80>
    ServerName your_domain
    DocumentRoot /var/www/your_domain

    Redirect permanent / https://your_domain/

    <Directory /var/www/your_domain>
        AllowOverride All
        Require all granted
    </Directory>

    ErrorLog ${APACHE_LOG_DIR}/ssltest_error.log
    CustomLog ${APACHE_LOG_DIR}/ssltest_access.log combined
</VirtualHost>

<VirtualHost *:443>
    ServerName your_domain
    DocumentRoot /var/www/your_domain

    # SSL aktivieren
    SSLEngine on
    SSLCertificateFile /etc/letsencrypt/live/your_domain/fullchain.pem
    SSLCertificateKeyFile /etc/letsencrypt/live/your_domain/privkey.pem

    # Zusätzliche Sicherheitseinstellungen
    SSLProtocol all -SSLv3 -TLSv1 -TLSv1.1
    SSLCipherSuite HIGH:!aNULL:!MD5
    SSLHonorCipherOrder on

    <Directory /var/www/your_domain>
        AllowOverride All
        Require all granted
    </Directory>

    ErrorLog ${APACHE_LOG_DIR}/ssltest_error.log
    CustomLog ${APACHE_LOG_DIR}/ssltest_access.log combined
</VirtualHost>
```

3\. Testen und starten Sie Apache neu:

```bash
sudo apachectl configtest
sudo systemctl restart apache2
```

Stellen Sie sicher, dass Ihre Website über `HTTPS` erreichbar ist.

### Schritt 5 - Aktivieren Sie die automatische Verlängerung <a name="step5"></a>

Let's Encrypt-Zertifikate sind 90 Tage lang gültig. Konfigurieren Sie die automatische Verlängerung mit Certbot.

Testen Sie die automatische Verlängerung:

```bash
sudo certbot renew --dry-run
```

Certbot konfiguriert automatisch einen `cron` Task oder einen `systemd` Timer, um die Verlängerung zu verwalten.  
Überprüfen des Status:

```bash
sudo systemctl list-timers | grep certbot
```

## Weiterführende Informationen <a name="go-further"></a>
 
Kontaktieren Sie für spezialisierte Dienstleistungen (SEO, Web-Entwicklung etc.) die [OVHcloud Partner](/links/partner).
 
Treten Sie unserer [User Community](/links/community) bei.
