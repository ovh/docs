---
title: 'Webhosting E-Mail: Allgemeines zu den MX Servern'
excerpt: 'Webhosting E-Mail: Allgemeines zu den MX Servern'
slug: webhosting_e-mail_allgemeines_zu_den_mx_servern
legacy_guide_number: g2003
---


## Was ist ein MX Server?
MX Server sind Mailserver, die Sie in der DNS Zone Ihres Domainnamens festlegen.
Diese Server empfangen Mails des Domainnamens.

Zum Beispiel:

- Sie möchten Mails an die Adresse meineadresse@meinedomain.com, ein OVH Mailkonto, korrekt empfangen.

Dann müssen in Ihrer DNS Zone die MX Server von OVH eingetragen sein.

So wird die Verbindung hergestellt zwischen einem Domainnamen und den zugehörigen Mailservern.

Hier sind verschiedene Kombinationen und Konfigurationen möglich. In dieser Anleitung erklären wir Ihnen die Basiseinstellungen, aber auch einige Beispiele für Fortgeschrittene.

Domainname, DNS Server und DNS Zone können folgendermaßen schematisiert werden:

![](images/img_3414.jpg){.thumbnail}


## Voraussetzungen

- Sie haben Zugriff auf Ihr [Kundencenter](https://www.ovh.com/manager/web/login/).

- Sie wollen die Mailing-Dienste von OVH nutzen.




## Wo kann ich die MX Server für einen Domainnamen konfigurieren?
Zunächst einmal müssen Sie wissen, wo Ihr Domainname registriert ist und welche DNS Server er verwendet.


- Die Wahl der DNS Server Ihrer Domain erfolgt beim Registrar, bei dem Sie Ihre Domain registriert haben.
- Auf den für Ihre Domain verwendeten DNS Servern befindet sich die DNS Zone Ihrer Domain.
- In dieser DNS Zone können Sie die MX Einträge ändern, welche die Mailserver Ihres Domainnamens festlegen.


Hier sehen Sie ein Beispiel einer DNS Zone bei OVH. Beachten Sie die unterschiedlichen Einträge in der Mitte( NS / MX / A / CNAME / TXT ).
Rechts sehen Sie das jeweilige Ziel.

|Domain|Typ|Ziel|
|---|---|---|
||NS|ns109.ovh.net.|
||NS|dns109.ovh.net.|
||MX 1|mx1.mail.ovh.net.|
||MX 5|mx2.mail.ovh.net.|
||MX 10|mx3.mail.ovh.net.|
||A|213.186.33.18|
||TXT|"v=spf1 include:mx.ovh.com ~all"|
|_autodiscover._tcp|SRV|0 0 443 mailconfig.ovh.net.|
|_imaps._tcp|SRV|0 0 993 ssl0.ovh.net.|
|_submission._tcp|SRV|0 0 465 ssl0.ovh.net.|
|autoconfig|CNAME|mailconfig.ovh.net.|
|ftp|CNAME|ftp.cluster017.ovh.net.|
|imap|CNAME|ssl0.ovh.net.|
|mail|CNAME|ssl0.ovh.net.|
|pop3|CNAME|ssl0.ovh.net.|
|smtp|CNAME|ssl0.ovh.net.|
|www|A|213.186.33.18|

In dieser DNS Zone sind die Mailserver (MX) des Domainnamens also folgende:

```
MX 1 mx1.mail.ovh.net.
MX 5 mx2.mail.ovh.net.
MX 10 mx3.mail.ovh.net.
```


Die Zahl gleich rechts neben "MX" zeigt die Priorität an.

## Information:
Derzeit sind die alten MX Server für alle vor dem 23.05.2016 erstellten Mailing-Dienste noch funktional. Wir empfehlen Ihnen dennoch die Verwendung der neuen oben genannten MX Server.
Wenn Sie Ihren Mailserver wechseln möchten, müssen Sie also die MX Einträge entsprechend aktualisieren.
Achtung: Es kann bis zu 24 Stunden dauern, bis Änderungen an Ihrer DNS Zone wirksam werden.


## Sie verwenden eine DNS Zone von OVH
In diesem Fall empfehlen wir Ihnen folgende Anleitung: [Webhosting E-Mail: MX-Konfiguration mit DNS Zone von OVH](https://docs.ovh.com/de/domains/webhosting_e-mail_mx-konfiguration_mit_dns_zone_von_ovh/).


## Sie verwenden keine DNS Zone von OVH
In diesem Fall empfehlen wir Ihnen folgende Anleitung: [Webhosting E-Mail: MX-Konfiguration mit DNS Zone eines Drittanbieters](https://docs.ovh.com/de/domains/webhosting_e-mail_mx-konfiguration_mit_dns_zone_eines_drittanbieters/).