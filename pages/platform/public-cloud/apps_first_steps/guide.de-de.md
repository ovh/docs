---
title: Erste Schritte mit vorinstallierten Anwendungen
slug: vorstellige-anwendungen
excerpt: Erfahren Sie hier, wie Sie vorinstallierte Anwendungen auf Instanzen einrichten
section: Erste Schritte
---

**Letzte Aktualisierung am 07.09.2021**

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie beim geringsten Zweifel die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button «Mitmachen» auf dieser Seite.
>

## Ziel

OVHcloud bietet Nutzern der Public Cloud vorinstallierte Images verschiedener Anwendungen für eine schnelle und einfache Inbetriebnahme mit nur wenigen Klicks. 

**Hier erfahren Sie, wie Sie vorinstallierte Anwendungen auf Ihren Public Cloud Instanzen einrichten.**

## Voraussetzungen

- Sie haben eine [Public Cloud Instanz](../erstellung_einer_instanz_im_ovh_kundencenter/) in Ihrem Kunden-Account.

## In der praktischen Anwendung

### Für alle Anwendungen gemeinsame Schritte

#### Installieren Sie die vorinstallierte Anwendung Ihrer Wahl

Installieren Sie über das [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de), die OVHcloud API oder OpenStack Horizon API die Anwendung Ihrer Wahl auf Ihrer Public Cloud Instanz.

#### Verbindungsdetails zur Anwendung <a name="connection"></a>

Wenn Sie die Instanz erstellt und eine vorinstallierte Anwendung ausgewählt haben, können Sie Ihre Verbindungsdaten nur über die OVHcloud API abrufen.

1. Verbinden Sie sich mit der [API Konsole](https://api.ovh.com/).
2. Verwenden Sie anschließend [diesen API Call](https://api.ovh.com/console/#/cloud/project/%7BserviceName%7D/instance/%7BinstanceId%7D/applicationAccess#POST).

> API Aufruf
>> > [!api]
>> >
>> > @api {POST} /cloud/project/{serviceName}/instance/{instanceId}/applicationAccess
>> >
>
> Parameter
>
>> serviceName *
>>> Dies ist Ihre Public Cloud Projekt-ID.
>>
>> instanzId *
>>> Dies ist die UUID Ihrer Instanz.

#### Let's Encrypt SSL

Dieser Abschnitt gilt nur für WordPress-, Drupal-, Joomla!- und PrestaShop-Installationen. Sie gilt nicht für andere Software.

1. Erstellen oder ändern Sie im OVHcloud Kundencenter zwei `A` Einträge, die auf die IP-Adresse Ihres Servers zeigen. Wenn Ihre Domain zum Beispiel "personaldomain.ovh" lautet, erstellen Sie `A` Einträge für:  

     personaldomain.ovh <br>
     www.personaldomain.ovh <br>  

Wenn Ihre Domain bei OVHcloud registriert ist, folgen Sie [dieser Anleitung](../../domains/webhosting_bearbeiten_der_dns_zone/).
<br>Wenn Ihre Domain bei einem anderen Anbieter registriert ist, kontaktieren Sie diesen, um Hilfe bei der Konfiguration Ihrer `A` Einträge zu erhalten.

<ol start="2">
  <li>Sie müssen möglicherweise bis zu 24 Stunden warten, bis sich beide Einträge vollständig auswirken. Sie können das mit entsprechenden Tools, etwa mit <a href="https://mxtoolbox.com/DnsLookup.aspx">mxtoolbox</a> überprüfen. Wenn die IP-Adresse Ihrer Domain auf mxtoolbox identisch mit der Adresse Ihres Servers angezeigt wird, können Sie zum nächsten Schritt übergehen</li>
  <li>Loggen Sie sich via SSH mit dem CentOS-Benutzer auf der Instanz ein und führen Sie folgende Befehle aus, um Zertifikate zu installieren.</li>
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

### cPanel 

Nachfolgend finden Sie die ersten Schritte zur Inbetriebnahme des vorinstallierten cPanel. Auf die mit "\*" gekennzeichneten Schritte folgt eine FAQ.

1. Rufen Sie Ihre [URL zum einmaligen Gebrauch](#connection) ab.
2. Klicken Sie auf die von der API zurückgegebene URL.

> [!primary]
>
> Wenn der Link bereits abgelaufen ist, loggen Sie sich mit dem CentOS-Benutzer über SSH auf der Instanz ein und führen Sie den Befehl "whmlogin" aus, um einen neuen Link zu erzeugen.
>

<ol start="3">
  <li>Lesen und akzeptieren Sie die besonderen Bedingungen von cPanel.</li>
  <li>Geben Sie Ihre E-Mail Server und DNS Server* ein.</li>
  <li>Legen Sie das Root-Passwort fest, das Sie beim nächsten Mal verwenden werden, wenn Sie sich mit WHM verbinden *.</li>
</ol>

![cPanel](images/change_root.png){.thumbnail}

Es ist kein weiterer Schritt erforderlich, um die erste Konfiguration dieser Anwendung abzuschließen.

> [!faq]
>
> Kann ich meine eigenen DNS Server verwenden?
>> Ja, das können Sie. Stellen Sie sicher, dass Sie bei Ihrem Registrar für Ihre Domain “GLUE” Einträge erstellen. Wenn Sie zum Beispiel “ns1.mydomain.com” und “ns2.mydomain.com” wünschen, müssen Sie “GLUE” Einträge konfigurieren, damit beide auf die IP-Adresse Ihres Servers zeigen. Wenn Ihre Domain bei OVHcloud registriert ist, folgen Sie [dieser Anleitung](../../domains/glue-registry/#schritt-1-glue-eintrage-hinzufugen). Bitte beachten Sie, dass die Erstellung 24 Stunden dauern kann.
> Warum sollte ich das Root-Passwort festlegen?
>> WHM verwendet standardmäßig den Root-Benutzer für die Authentifizierung. Mit der Single Use URL können Sie auf die erste Konfiguration zugreifen und das Root-Passwort ändern. Beim nächsten Mal, wenn Sie sich mit WHM verbinden, müssen Sie den Root-Benutzer und das von Ihnen definierte Passwort verwenden.
> Wo ist meine Lizenz für cPanel?
>> OVHcloud bietet derzeit keine Lizenzen für Public Cloud Server außer Windows Lizenzen an. Sie müssen eine Lizenz von einem Drittanbieter für cPanel erwerben. Wenden Sie sich dazu an den cPanel Anbieter.

### Plesk

Nachfolgend finden Sie die ersten Schritte zur Inbetriebnahme des vorinstallierten Plesk. Auf die mit "\*" gekennzeichneten Schritte folgt eine FAQ.

1. Rufen Sie Ihre [Login-URL](#connection) ab.
2. Klicken Sie auf die von der API zurückgegebene URL.
3. Loggen Sie sich mithilfe des Benutzernamens und des von der API zurückgegebenen Passworts ein.
4. Sie werden dann gefragt nach:   
    a) Ihren Kontaktdaten.  
    b) einem neuen Passwort für den "Admin"-Benutzer, das Sie für die Verbindung mit dem Plesk Interface verwenden.  
    c) Informationen zur Lizenz.*  
    d) Verträge über Benutzerlizenzen lesen und akzeptieren.

Es ist kein weiterer Schritt erforderlich, um die erste Konfiguration dieser Anwendung abzuschließen.

> [!faq]
>
> Wo ist meine Plesk-Lizenz?
>> OVHcloud bietet derzeit keine Lizenzen für Public Cloud Instanzen außer für Windows. Plesk-Lizenzen müssen von einem Drittanbieter bezogen werden. Wenden Sie sich hierzu direkt an einen Anbieter.

### Virtualmin

Nachfolgend finden Sie die ersten Schritte zur Inbetriebnahme des vorinstallierten Virtualmin.

1. Rufen Sie Ihre [Login-URL](#connection) ab.
2. Klicken Sie auf die von der API zurückgegebene URL.
3. Loggen Sie sich mithilfe des Benutzernamens und des von der API zurückgegebenen Passworts ein.
4. Wenn Sie eingeloggt sind, beantworten Sie die Fragen zur Optimierung, um Virtualmin bei der Konfiguration zu helfen.

Es ist kein weiterer Schritt erforderlich, um die erste Konfiguration dieser Anwendung abzuschließen.

### Vestacp

Nachfolgend finden Sie die ersten Schritte zur Inbetriebnahme des vorinstallierten Vestacp.

1. Rufen Sie Ihre [Login-URL](#connection) ab.
2. Klicken Sie auf die von der API zurückgegebene URL.
3. Loggen Sie sich mithilfe des Benutzernamens und des von der API zurückgegebenen Passworts ein.

Es ist kein weiterer Schritt erforderlich, um die erste Konfiguration dieser Anwendung abzuschließen.

### Docker

Nachfolgend finden Sie die ersten Schritte zur Inbetriebnahme des vorinstallierten Docker.

1. Loggen Sie sich mit dem CentOS-Benutzer über SSH auf dem Server ein.
2. Überprüfen Sie, dass Docker funktioniert, mit dem Befehl "docker run hello-world".

Es ist kein weiterer Schritt erforderlich, um die erste Konfiguration dieser Anwendung abzuschließen.

## Weiterführende Informationen

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.