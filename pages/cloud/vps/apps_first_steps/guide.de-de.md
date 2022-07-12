---
title: 'Erste Schritte mit vorinstallierten Anwendungen'
slug: vorstellige-anwendungen
excerpt: Erfahren Sie hier, wie Sie auf Ihrem VPS vorinstallierte Anwendungen einrichten
section: 'Erste Schritte'
order: 6
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie beim geringsten Zweifel die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button «Mitmachen» auf dieser Seite.
>

**Letzte Aktualisierung am 16.09.2021**

## Ziel

OVHcloud bietet VPS-Nutzern vorinstallierte Images verschiedener Anwendungen für eine schnelle und einfache Inbetriebnahme mit nur wenigen Klicks. 

**Diese Anleitung erklärt die Ersteinrichtung vorinstallierter Anwendungen auf Ihrem VPS.**

## Voraussetzungen

- Sie haben einen [VPS](https://www.ovhcloud.com/de/vps/) in Ihrem Kunden-Account.

## In der praktischen Anwendung

### Die vorinstallierte Anwendung Ihrer Wahl installieren

Installieren Sie die [Anwendung Ihrer Wahl](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) über das OVHcloud Kundencenter oder die OVHcloud API. Sie können dazu auch unsere Anleitung "[Erste Schritte mit einem VPS](../erste-schritte-mit-einem-vps/)" heranziehen.
 
#### cPanel

Nachfolgend finden Sie die ersten Schritte zur Inbetriebnahme des vorinstallierten cPanel. Auf die mit "\*" gekennzeichneten Schritte folgt eine FAQ.

1. Öffnen Sie die E-Mail mit den Login-Daten zur Anwendung.
2. Klicken Sie in dieser E-Mail auf die cPanel URL.

> [!primary]
>
> Wenn der Link bereits abgelaufen ist, loggen Sie sich mit dem CentOS-Benutzer über SSH auf Ihrem VPS ein und führen Sie den Befehl "sudo whmlogin" aus, um einen neuen Link zu erzeugen.
>

<ol start="3">
  <li>Lesen und akzeptieren Sie die besonderen Bedingungen von cPanel.</li>
  <li>Geben Sie Ihre E-Mail Server und DNS Server ein.*</li>
  <li>Legen Sie das Root-Passwort fest, das Sie beim nächsten Mal verwenden werden, wenn Sie sich mit WHM verbinden.*</li>
</ol>

![cPanel](images/change_root.png){.thumbnail}

Es ist kein weiterer Schritt erforderlich, um die erste Konfiguration dieser Anwendung abzuschließen.

> [!faq]
>
> Kann ich meine eigenen DNS Server verwenden?
>> Ja, das können Sie. Stellen Sie sicher, dass Sie bei Ihrem Registrar für Ihre Domain "GLUE" Einträge erstellen. Wenn Sie zum Beispiel "ns1.mydomain.com" und "ns2.mydomain.com" wünschen, müssen Sie "GLUE" Einträge konfigurieren, damit beide auf die IP-Adresse Ihres Servers zeigen. Wenn Ihre Domain bei OVHcloud registriert ist, folgen Sie [dieser Anleitung](../../domains/glue-registry/#schritt-1-glue-eintrage-hinzufugen). Beachten Sie, dass die Erstellung 24 Stunden dauern kann.
> Warum sollte ich das Root-Passwort festlegen?
>> WHM verwendet standardmäßig den Root-Benutzer für die Authentifizierung. Mit der Single Use URL können Sie auf die erste Konfiguration zugreifen und das Root-Passwort ändern. Beim nächsten Mal, wenn Sie sich mit WHM verbinden, müssen Sie den Root-Benutzer und das von Ihnen definierte Passwort verwenden.
> Wo ist meine Lizenz für cPanel?
>> Sie können Ihre cPanel Lizenz für Ihren VPS über das [OVHcloud Kundencenter bestellen](https://www.ovh.com/manager/dedicated/#/configuration/license/order).

#### Plesk

Nachfolgend finden Sie die ersten Schritte zur Inbetriebnahme des vorinstallierten Plesk. Auf die mit "\*" gekennzeichneten Schritte folgt eine FAQ.

1. Öffnen Sie die E-Mail mit den Login-Daten zur Anwendung.
2. Klicken Sie in dieser E-Mail auf die URL von Plesk.
3. Loggen Sie sich mithilfe des Benutzernamens und des Passworts in der E-Mail ein.
4. Sie werden dann gefragt nach:   
    a) Ihren Kontaktdaten.  
    b) einem neuen Passwort für den "Admin"-Benutzer, das Sie für die Verbindung mit dem Plesk Interface verwenden.  
    c) Informationen zur Lizenz.*  
    d) Verträge über Benutzerlizenzen lesen und akzeptieren.  

Es ist kein weiterer Schritt erforderlich, um die erste Konfiguration dieser Anwendung abzuschließen.

> [!faq]
>
> Wo ist meine Plesk-Lizenz?
>> Sie können Ihre Plesk Lizenz für Ihren VPS über das [OVHcloud Kundencenter bestellen](https://www.ovh.com/manager/dedicated/#/configuration/license/order).

#### Virtualmin

Nachfolgend finden Sie die ersten Schritte zur Inbetriebnahme des vorinstallierten Virtualmin. 

1. Öffnen Sie die E-Mail mit den Login-Daten zur Anwendung.
2. Klicken Sie in dieser E-Mail auf die Virtualmin URL.
3. Loggen Sie sich mithilfe des Benutzernamens und des Passworts aus der E-Mail ein.
4. Wenn Sie eingeloggt sind, beantworten Sie die Fragen zur Optimierung, um Virtualmin bei der Konfiguration zu helfen.

Es ist kein weiterer Schritt erforderlich, um die erste Konfiguration dieser Anwendung abzuschließen.

#### Vestacp

Nachfolgend finden Sie die ersten Schritte zur Inbetriebnahme des vorinstallierten Vestacp.

1. Öffnen Sie die E-Mail mit den Login-Daten zur Anwendung.
2. Klicken Sie in dieser E-Mail auf die URL von Vestacp.
3. Loggen Sie sich mithilfe des Benutzernamens und des Passworts aus der E-Mail ein.

Es ist kein weiterer Schritt erforderlich, um die erste Konfiguration dieser Anwendung abzuschließen.

#### Docker

Nachfolgend finden Sie die ersten Schritte zur Inbetriebnahme des vorinstallierten Docker.

1. Verbinden Sie sich via SSH mit dem Benutzernamen und dem Passwort aus der E-Mail mit dem Server.
2. Überprüfen Sie, dass Docker funktioniert, mit dem Befehl "docker run hello-world".

Es ist kein weiterer Schritt erforderlich, um die erste Konfiguration dieser Anwendung abzuschließen.

### Let's Encrypt SSL

Dieser Abschnitt gilt nur für WordPress-, Drupal-, Joomla!- und PrestaShop-Installationen.

1. Erstellen oder ändern Sie im OVHcloud Kundencenter zwei `A` Einträge, die auf die IP-Adresse Ihres Servers zeigen. Wenn Ihre Domain zum Beispiel "personaldomain.ovh" lautet, erstellen Sie `A` Einträge für:  

     personaldomain.ovh <br>
     www.personaldomain.ovh <br>  

Wenn Ihre Domain bei OVHcloud registriert ist, folgen Sie [dieser Anleitung](../../domains/webhosting_bearbeiten_der_dns_zone/).
<br>Wenn Ihre Domain bei einem anderen Anbieter registriert ist, kontaktieren Sie diesen, um Hilfe bei der Konfiguration Ihrer `A` Einträge zu erhalten.

<ol start="2">
  <li>Sie müssen möglicherweise bis zu 24 Stunden warten, bis sich beide Einträge vollständig auswirken. Sie können das mit entsprechenden Tools, etwa mit <a href="https://mxtoolbox.com/DnsLookup.aspx">mxtoolbox</a> überprüfen. Wenn die IP-Adresse Ihrer Domain auf mxtoolbox identisch mit der Adresse Ihres Servers angezeigt wird, können Sie zum nächsten Schritt übergehen.</li>

  <li>Loggen Sie sich via SSH mit dem CentOS-Benutzer auf Ihrem Server ein und führen Sie folgende Befehle aus, um Zertifikate zu installieren.</li>
</ol>

> [!warning]
>
> Ersetzen Sie in den folgenden Befehlen "personaldomain.ovh" durch Ihre eigene Domain.
>

```sh
sudo -i
dnf install -y epel-release
dnf install -y certbot python3-certbot-apache mod_ssl
echo "ServerName personaldomain.ovh;" >> /etc/httpd/conf/httpd.conf
systemctl restart httpd
```

<ol start="4">
  <li> Generieren Sie Ihr SSL-Zertifikat mit Certbot (folgen Sie den Anweisungen auf dem Bildschirm).</li>
</ol>

```sh
certbot certonly -d personaldomain.ovh --webroot
```

Wenn Sie die Anzeige "Input the webroot" erhalten, müssen Sie den Speicherpfad zur installierten Anwendung, zum Beispiel "/var/www/wordpress", eingeben. Wenn Sie Joomla! installieren, ersetzen Sie "wordpress" durch "joomla".

Stellen Sie nun sicher, dass Zertifikate diese Variable auch in die Datei `ssl.conf` einfügen. Geben Sie hierzu folgendes ein:

```sh
certbot -d personaldomain.ovh --apache
```

Wenn Sie dazu aufgefordert werden, beantworten Sie die erste als auch die zweite Frage mit "1".

Wenn Ihr SSL-Zertifikat erstellt wurde, erhalten Sie folgendes Ergebnis:

```sh
IMPORTANT NOTES:
 - Congratulations! Your certificate and chain have been saved at:
   /etc/letsencrypt/live/personaldomain.ovh/fullchain.pem
   Your key file has been saved at:
   /etc/letsencrypt/live/personaldomain.ovh/privkey.pem
   Your cert will expire on 2020-11-12. To obtain a new or tweaked
   version of this certificate in the future, simply run certbot again
   with the "certonly" option. To non-interactively renew *all* of
   your certificates, run "certbot renew"
```

## Weiterführende Informationen

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.