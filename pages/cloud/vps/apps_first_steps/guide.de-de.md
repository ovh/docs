---
title: 'Erste Schritte mit vorinstallierten Anwendungen'
slug: vorstellige-anwendungen
excerpt: In dieser Anleitung erfahren Sie, wie Sie auf Ihrem VPS vorinstallierte Anwendungen einrichten
section: 'Erste Schritte'
order: 6
---

**Letzte Aktualisierung am 16 September 2021**

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie beim geringsten Zweifel die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button «Mitmachen» auf dieser Seite.
>

## Ziel

OVHcloud bietet VPS-Kunden vorinstallierte Anwendungsbilder für eine schnelle und einfache Inbetriebnahme mit nur wenigen Klicks. 

**In dieser Anleitung erfahren Sie, wie Sie auf Ihrem VPS vorinstallierte Anwendungen einrichten.**

## Voraussetzungen

- Sie haben einen [VPS](https://www.ovhcloud.com/de/vps/) auf Ihrem OVHcloud Account.

## In der praktischen Anwendung

### Die vorinstallierte Anwendung Ihrer Wahl installieren

Installieren [Sie die Anwendung Ihrer Wahl](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) über das OVHcloud Kundencenter oder die OVHcloud APIs. Sie können auch in unserer Anleitung [Mit einem VPS starten nachlesen](../erste-schritte-mit-einem-vps/).
 
#### cPanel

Nachfolgend finden Sie die ersten Schritte zur Inbetriebnahme des vorinstallierten cPanel Images. Auf die mit "\*"gekennzeichneten Schritte folgt eine FAQ.

1. Öffnen Sie die E-Mail mit den Login-Daten zur Anwendung.
2. Klicken Sie in dieser E-Mail auf die cPanel-URL.

> [!primary]
>
> Wenn der Link bereits abgelaufen ist, verbinden Sie sich mit dem CentOS-Benutzer über SSH mit Ihrem VPS und führen Sie den Befehl "whmlogin" aus, um einen neuen Link zu erzeugen.
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
>> Sie können Ihre cPanel Lizenz für Ihren VPS über [das OVHcloud Kundencenter bestellen](https://www.ovh.com/manager/dedicated/#/configuration/license/order).

#### Plesk

Nachfolgend die ersten Schritte zur Inbetriebnahme des vorinstallierten Plesk Images. Auf die mit "\*"gekennzeichneten Schritte folgt eine FAQ.

1. Öffnen Sie die E-Mail mit den Login-Daten zur Anwendung.
2. Klicken Sie in dieser E-Mail auf die URL von Plesk.
3. Loggen Sie sich mithilfe des Benutzernamens und des Passworts in der E-Mail ein.
4. Wenn Plesk eingeloggt ist, fragt er Sie:   
    a) Ihre Kontaktdaten.  
    b) ein neues Passwort für den "Admin"-Benutzer, das Sie für die Verbindung mit dem Plesk Interface verwenden.  
    c) Informationen zur Lizenz.*  
    d) Verträge über Benutzerlizenzen lesen und akzeptieren.  

No further steps are necessary to complete the first configuration of this application.

Es ist kein weiterer Schritt erforderlich, um die erste Konfiguration dieser Anwendung abzuschließen.

> [!faq]
>
> Wo ist meine Plesk-Lizenz?
>> Sie können Ihre Plesk Lizenz für Ihren VPS über [das OVHcloud Kundencenter bestellen](https://www.ovh.com/manager/dedicated/#/configuration/license/order).

#### Virtualmin

Nachfolgend finden Sie die ersten Schritte zur Inbetriebnahme des vorinstallierten Images von Virtualmin. 

1. Öffnen Sie die E-Mail mit den Login-Daten zur Anwendung.
2. Klicken Sie in dieser E-Mail auf die Virtualmin-URL.
3. Loggen Sie sich mithilfe des Benutzernamens und des Passworts in der E-Mail ein.
4. Wenn Sie eingeloggt sind, geben Sie den Optimierungsfragebogen ein, um Ihren Bedürfnissen nachzukommen und Virtualmin bei der Konfiguration zu helfen.

Es ist kein weiterer Schritt erforderlich, um die erste Konfiguration dieser Anwendung abzuschließen.

#### Vestacp

Nachfolgend finden Sie die ersten Schritte zur Inbetriebnahme des vorinstallierten Images von Vestacp.

1. Öffnen Sie die E-Mail mit den Login-Daten zur Anwendung.
2. Klicken Sie in dieser E-Mail auf die URL von Vestacp.
3. Loggen Sie sich mithilfe des Benutzernamens und des Passworts in der E-Mail ein.

Es ist kein weiterer Schritt erforderlich, um die erste Konfiguration dieser Anwendung abzuschließen.

#### Docker

Nachfolgend finden Sie die ersten Schritte zur Inbetriebnahme des vorinstallierten Docker-Images.

1. Verbinden Sie sich via SSH mit dem Benutzernamen und dem Passwort in der E-Mail mit dem Server.
2. Überprüfen Sie, dass Docker mit dem "docker run hello-world" Befehl funktioniert.

Es ist kein weiterer Schritt erforderlich, um die erste Konfiguration dieser Anwendung abzuschließen.

### Let's Encrypt SSL

Dieser Abschnitt gilt nur für WordPress-, Drupal-, Joomla- und Prestashop-Installationen. Sie gilt nicht für andere Anlagen.

1. Erstellen oder ändern Sie im OVHcloud Kundencenter zwei `A` Einträge, die auf die IP-Adresse Ihres Servers zeigen. Wenn Ihre Domain zum Beispiel "personaldomain.ovh" lautet, erstellen Sie `A` Einträge für:  

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

## Fortgeschrittene Optionen

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
