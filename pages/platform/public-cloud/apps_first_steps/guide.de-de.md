---
title: Erste Schritte mit vorinstallierten Anwendungen
slug: vorstellige-anwendungen
excerpt: Hier erfahren Sie, wie Sie vorinstallierte Anwendungen auf Ihren Public Cloud Instanzen einrichten.
section: Erste Schritte
---

**Letzte Aktualisierung am 7 September 2021**

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie beim geringsten Zweifel die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button «Mitmachen» auf dieser Seite.
>

## Ziel

OVHcloud bietet Public Cloud Kunden vorinstallierte Anwendungsbilder für eine schnelle und einfache Inbetriebnahme mit nur wenigen Klicks. 

**Hier erfahren Sie, wie Sie vorinstallierte Anwendungen auf Ihren Public Cloud Instanzen einrichten.**

## Voraussetzungen

- eine [Public Cloud](../erstellung_einer_instanz_im_ovh_kundencenter/) Instanz in Ihrem OVHcloud Account.

## In der praktischen Anwendung

### Für alle Anwendungen gemeinsame Schritte

#### Installieren Sie die vorinstallierte Anwendung Ihrer Wahl

Installieren Sie über das [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de), die OVHcloud APIs oder die OpenStack Horizon APIs die Anwendung Ihrer Wahl auf Ihrer Public Cloud Instanz.

#### Verbindungsdetails zur Anwendung

Wenn Sie die Instanz erstellt und eine vorinstallierte Anwendung ausgewählt haben, können Sie Ihre Verbindungsdaten nur über die OVHcloud API abrufen.

1. Verbinden Sie sich mit der [API Konsole](https://api.ovh.com/console/)
2. Verwenden Sie anschließend [diesen API Anruf](https://api.ovh.com/console/#/cloud/project/%7BserviceName%7D/instance/%7BinstanceId%7D/applicationAccess#POST)

> API Anruf
>> > [!api]
>> >
>> > @api {POST} /cloud/project/{serviceName}/instance/{instanceId}/applicationAccess
>> >
>
> Einstellungen
>
>> serviceName *
>>> Dies ist Ihre Public Cloud Projekt-ID
>>
>> instanzId *
>>> Dies ist die UUID Ihrer Instanz

#### Let's Encrypt SSL

Dieser Abschnitt gilt nur für WordPress-, Drupal-, Joomla- und Prestashop-Installationen. Sie gilt nicht für andere Anlagen.

1. Erstellen oder ändern Sie im OVHcloud Kundencenter zwei `A` Einträge, die auf die IP-Adresse Ihres Servers zeigen. Wenn Ihre Domain zum Beispiel "personaldomain.ovh"lautet, erstellen Sie `A` Einträge für:  

     personaldomain.ovh <br>
     www.personaldomain.ovh <br>  

Wenn Ihre Domain bei OVHcloud registriert ist, folgen Sie [dieser Anleitung.](../../domains/webhosting_bearbeiten_der_dns_zone/) 
<br>Wenn Ihre Domain bei einem anderen Unternehmen registriert ist, kontaktieren Sie dieses, um Hilfe bei der Konfiguration Ihrer `A` Einträge zu erhalten.

<ol start="2">
  <li>Vielleicht müssen Sie 24 Stunden warten, bis sich beide Aufzeichnungen vollständig verbreiten. Überprüfen Sie dies weiterhin mit [mxtoolbox](https://mxtoolbox.com/DnsLookup.aspx){.external}. Wenn die IP-Adresse Ihrer Domain auf mxtoolbox auf der gleichen Art wie die Adresse Ihres Servers angezeigt wird, können Sie zum nächsten Schritt übergehen.</li>

  <li>Verbinden Sie sich via SSH mit dem CentOS-Benutzer auf Ihrem Server und führen Sie folgende Befehle aus, um Zertifikate zu installieren:</li>
</ol>

> [!warning]
>
> Ersetzen Sie in den folgenden Bestellungen Personaldomain.ovh durch Ihre eigene Domain.
>

```sh
sudo -i
dnf install -y epel release
dnf install -y cat python3-certifibot apache mod_ssl
echo "ServerName personaldomain.ovh;" >> /etc/httpd/conf/httpd.conf
systemctl resthttpd
```

<ol start="4">
  <li> Generieren Sie Ihr SSL-Zertifikat mit Certifibot (folgen Sie den Anweisungen auf dem Bildschirm).</li>
</ol>

```sh
certbot certonly -d personaldomain.ovh --webroot
```

Wenn Sie "Input the webroot"eingeben möchten, müssen Sie eine Variable vom Typ "/var/www/wordpress"eingeben. Wenn Sie Joomla installieren, ersetzen Sie "WordPress"durch "Joomla".

Stellen Sie nun sicher, dass Zertifikate diese Variable auch in die ssl.conf Datei einfügen. Geben Sie hierzu folgendes ein:

```sh
certbot -d personaldomain.ovh --apache
```

Wenn Sie dazu aufgefordert werden, beantworten Sie die erste Frage mit "1" und die zweite mit "1".

Wenn Ihr SSL-Zertifikat erstellt wurde, erhalten Sie folgendes Ergebnis:

```sh
WICHTIGE ANMERKUNGEN:
 Herzlichen Glückwunsch! Your certificate and chain have been saved at:
   /etc/letsencrypt/live/personaldomain.ovh/fullchain.pem
   Your key file has been saved at:
   /etc/letsencrypt/live/personaldomain.ovh/privkey.pem
   Your cert will läuft zwischen 2020 und 11-12 ab. To obtain a new or tweaked
   Version of this certificate in the future, simply run certificate again
   with the "certifionly" option. TB nicht-interactively renew *all*
   your certification, run "certifibot renew"
```

### cPanel 

Nachfolgend finden Sie die ersten Schritte zur Inbetriebnahme des vorinstallierten cPanel Images. Auf die mit "\*"gekennzeichneten Schritte folgt eine FAQ.

1. Erhalten Sie Ihre URL zum einmaligen [Gebrauch in diesen Schritten](./#verbindungsdetails-zur-anwendung).
2. Klicken Sie auf die von der API zurückgegebene URL.

> [!primary]
>
> Wenn der Link bereits abgelaufen ist, loggen Sie sich mithilfe des CentOS-Benutzers via SSH mit der Instanz ein und führen Sie den Befehl "Whmlogin"aus, um einen neuen Link zu erstellen, oder installieren Sie die Instanz neu.
>

<ol start="3">
  <li>Lesen und akzeptieren Sie die besonderen Bedingungen von cPanel.</li>
  <li>Geben Sie Ihre E-Mail Server und DNS Server* ein.</li>
  <li>Legen Sie das root-Passwort fest, das Sie beim nächsten Mal verwenden werden, wenn Sie sich mit WHM verbinden *.</li>
</ol>

![cPanel](images/change_root.png){.thumbnail}

Es ist kein weiterer Schritt erforderlich, um die erste Konfiguration dieser Anwendung abzuschließen.

> [!faq]
>
> Kann ich meine eigenen DNS Server verwenden?
>> Ja, das können Sie. Stellen Sie sicher, dass Sie mit Ihrem Registrar für Ihre Domain "GLUE" Einträge erstellen. Wenn Sie zum Beispiel "ns1.mydomain.com"und "ns2.mydomain.com"wünschen, müssen Sie "GLUE"Einträge konfigurieren, damit beide auf die IP-Adresse Ihres Servers zeigen. Wenn Ihre Domain bei OVHcloud registriert ist, folgen Sie [dieser Anleitung.](../../domains/glue-registry/#schritt-1-glue-eintrage-hinzufugen). Bitte beachten Sie, dass die Erstellung 24 Stunden dauern kann.
> Warum sollte ich das Root-Passwort festlegen?
>> WHM verwendet standardmäßig den Root-Benutzer für die Authentifizierung. Mit der Single Use URL können Sie auf die erste Konfiguration zugreifen und das Root-Passwort ändern. Beim nächsten Mal, wenn Sie sich mit WHM verbinden, müssen Sie den root-Benutzer und das von Ihnen definierte Passwort verwenden.
> Wo ist meine Lizenz für cPanel?
>> OVHcloud bietet derzeit keine Lizenz für Public Cloud Server außer Windows Lizenzen. Sie müssen eine Lizenz von einem Drittanbieter für cPanel erwerben. Dazu empfehlen wir Ihnen, direkt mit dem cPanel Editor zu sprechen.

### Plesk

Nachfolgend die ersten Schritte zur Inbetriebnahme des vorinstallierten Plesk Images. Auf die mit "\*"gekennzeichneten Schritte folgt eine FAQ.

1. Erhalten Sie die URL für den Zugriff auf Ihre Anwendung [Gebrauch in diesen Schritten](./#verbindungsdetails-zur-anwendung).
2. Klicken Sie auf die von der API zurückgegebene URL.
3. Loggen Sie sich mithilfe des Benutzernamens und des von der API zurückgegebenen Passworts ein.
4. Wenn Plesk eingeloggt ist, fragt er Sie:   
    a) Ihre Kontaktdaten.  
    b) ein neues Passwort für den "Admin"-Benutzer, das Sie für die Verbindung mit dem Plesk Interface verwenden.  
    c) Informationen zur Lizenz.*  
    d) Verträge über Benutzerlizenzen lesen und akzeptieren.  

Es ist kein weiterer Schritt erforderlich, um die erste Konfiguration dieser Anwendung abzuschließen.

> [!faq]
>
> Wo ist meine Plesk-Lizenz?
>> OVHcloud bietet derzeit keine Lizenz für Public Cloud Server außer Windows Lizenzen. Kunden müssen eine Lizenz von einem Drittanbieter für Plesk erwerben. Dazu empfehlen wir Ihnen, direkt mit dem Plesk-Herausgeber zu sprechen.

### Virtualmin

Nachfolgend finden Sie die ersten Schritte zur Inbetriebnahme des vorinstallierten Images von Virtualmin. 

1. Erhalten Sie die URL für den Zugriff auf Ihre Anwendung [in diesen Schritten](./#verbindungsdetails-zur-anwendung).
2. Klicken Sie auf die von der API zurückgegebene URL.
3. Loggen Sie sich mithilfe des Benutzernamens und des von der API zurückgegebenen Passworts ein.
4. Wenn Sie eingeloggt sind, geben Sie den Optimierungsfragebogen ein, um Ihren Bedürfnissen nachzukommen und Virtualmin bei der Konfiguration zu helfen.

Es ist kein weiterer Schritt erforderlich, um die erste Konfiguration dieser Anwendung abzuschließen.

### Vestacp

Nachfolgend finden Sie die ersten Schritte zur Inbetriebnahme des vorinstallierten Images von Vestacp.

1. Erhalten Sie die URL für den Zugriff auf Ihre Anwendung [in diesen Schritten](./#verbindungsdetails-zur-anwendung).
2. Klicken Sie auf die von der API zurückgegebene URL.
3. Loggen Sie sich mithilfe des Benutzernamens und des von der API zurückgegebenen Passworts ein.

Es ist kein weiterer Schritt erforderlich, um die erste Konfiguration dieser Anwendung abzuschließen.

### Docker

Nachfolgend finden Sie die ersten Schritte zur Inbetriebnahme des vorinstallierten Docker-Images.

1. Verbinden Sie sich via SSH mit dem CentOS-Benutzer mit dem Server.
2. Überprüfen Sie, dass Docker mit dem "docker run hello-world" Befehl funktioniert.

Es ist kein weiterer Schritt erforderlich, um die erste Konfiguration dieser Anwendung abzuschließen.

## Fortgeschrittene Optionen

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
