---
title: 'Funktionsweise des SSL-Zertifikats auf dem CDN'
slug: certificat-ssl-cdn
excerpt: 'So fügen Sie ein SSL-Zertifikat auf dem CDN hinzu'
section: 'Erste Schritte'
order: 4
---

**Stand 24.04.2019**

## Einleitung

Sie können Ihrem Content Delivery Network (CDN) ein [SSL-Zertifikat](https://www.ovh.de/ssl/){.external} hinzufügen, damit Ihre Nutzer auch über das CDN eine gesicherte Verbindung herstellen können.

**In dieser Anleitung erfahren Sie, wie die SSL-Zertifikate von Let's Encrypt bei OVH funktionieren.**


## Voraussetzungen

- Sie verfügen über ein [CDN von OVH](https://www.ovh.de/cdn/){.external}.
- Sie haben Zugriff auf die Verwaltung der DNS-Zone Ihrer Domain.

## Beschreibung

### Wie bekomme ich ein von OVH bereitgestelltes SSL-Zertifikat von Let's Encrypt für meine CDN-Subdomains?

- Wenn Sie bisher kein Zertifikat konfiguriert haben und Ihre erste Subdomain dem CDN hinzufügen, wird für diese Domain automatisch ein Let's Encrypt-Zertifikat erstellt.
- Wenn Sie dem CDN eine weitere Subdomain hinzufügen, wird das Zertifikat automatisch erneuert, damit es auch für die neu eingerichtete Subdomain gilt.


Damit die Zertifikatserstellung erfolgreich ist, muss die neu hinzugefügte Subdomain korrekt auf das CDN zeigen. Hierfür empfehlen wir Ihnen die Anleitung zum Thema „[Erste Konfiguration einer Domain](../erste-domain-konfiguration-im-cdn/){.external}“.

Die Erneuerung des Zertifikats erfolgt automatisch innerhalb von 20 Tagen vor dessen Ablauf.

> [!warning]
>
> Das von OVH bereitgestellte SSL-Zertifikat von Let's Encrypt gilt für die ersten 100 auf dem CDN konfigurierten Domains oder Subdomains. Sollten Sie mehr als 100 Domains einrichten wollen, konfigurieren Sie bitte Ihr eigenes Wildcard-/Multi-Domain-Zertifikat.
>


### Wie lange dauert die Erstellung meines Zertifikats?

Die Erstellung (oder Erneuerung) des Zertifikats einschließlich Deployment in all unseren Präsenzpunkten dauert im Durchschnitt zwei Stunden.

![SSL-Zertifikat wird erstellt](images/ssl_in_progress.png){.thumbnail}


Sollte die Erstellung ungewöhnlich lange dauern, überprüfen Sie, ob alle auf Ihrem Angebot konfigurierten Domains auf das CDN verweisen. Ist dies nicht der Fall, kann der Robot das Zertifikat nicht korrekt generieren.

Während der Erstellung des Zertifikats können Sie 48 Stunden lang eine entsprechende Korrektur vornehmen; innerhalb dieses Zeitraums versucht der Robot den Vorgang regelmäßig neu zu starten. Nach Ablauf dieser Frist wird der Task abgebrochen.

Ein neuer Erstellungsversuch erfolgt, sobald Sie eine neue Domain hinzufügen oder wenn Sie ein Zertifikat manuell anfordern.

Wenn das Zertifikat aktiviert ist, erkennen Sie dies am neuen Status:

![SSL aktiviert](images/ssl_validated.png){.thumbnail}


### Wie kann ich ein eigenes Zertifikat hinzufügen?

- Wenn Sie bisher keine Domain hinzugefügt haben oder über kein Zertifikat verfügen, können Sie die Option `Mein Zertifikat hinzufügen`{.action} im Tab „SSL“ Ihres CDN nutzen:


![Ein SSL-Zertifikat hinzufügen](images/add_ssl.png){.thumbnail}

- Wenn Sie bereits über ein Let's Encrypt-Zertifikat verfügen, können Sie einfach die Option `Mit meinem Zertifikat ersetzen`{.action} nutzen:

![Ein SSL-Zertifikat ersetzen](images/change_ssl.png){.thumbnail}


## Weiterführende Informationen

[Erste Konfiguration einer Domain](../erste-domain-konfiguration-im-cdn/){.external}

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.