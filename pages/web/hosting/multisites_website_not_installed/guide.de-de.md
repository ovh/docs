---
title: 'Fehler „Seite nicht installiert“ beheben'
excerpt: 'Hier erfahren Sie, wie Sie den Fehler „Seite nicht installiert“ beheben.'
id: '1585'
slug: webhosting_fehler_-_webseite_ist_nicht_installiert
legacy_guide_number: g1585
section: 'Webhosting-Konfiguration'
---

**Stand 11.05.2021**

## Ziel

Die Fehlermeldung `Seite nicht installiert` bedeutet entweder, dass die DNS-Zone Ihrer Domain nicht korrekt konfiguriert ist oder der Domainname Ihrer Website nicht richtig auf Ihrem OVH Webhosting eingerichtet wurde.

<img src="https://docs.ovh.com/fr/hosting/erreur-site-non-installe/images/site-not-installed.png" alt= "website not installed" width="50%" height="50%">

**Hier erfahren Sie, wie Sie den Fehler „Seite nicht installiert“ beheben.**

> [!warning]
> OVHcloud stellt Ihnen Dienstleistungen zur Verfügung, für deren Konfiguration und Verwaltung Sie die alleinige Verantwortung tragen. Es liegt somit bei Ihnen, sicherzustellen, dass diese ordnungsgemäß funktionieren.
> Wir stellen Ihnen diese Anleitung zur Verfügung, um Ihnen bei der Bewältigung alltäglicher Verwaltungsaufgaben zu helfen. Dennoch empfehlen wir Ihnen, falls Sie Hilfe brauchen, einen spezialisierten Dienstleister und/oder den Herausgeber des Dienstes zu kontaktieren. Für externe Dienstleistungen bietet OVHcloud leider keine Unterstützung. Weitere Informationen finden Sie im Abschnitt [Weitere Informationen](#gofurther).

## Voraussetzungen

- Sie haben ein [OVHcloud Webhosting](https://www.ovh.de/hosting) in Ihrem Kunden-Account.
- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de)
- Sie verfügen auch über die Verwaltung der [DNS-Zone](../../domains/webhosting_bearbeiten_der_dns_zone/), zu der Ihre Domain gehört.

## In der praktischen Anwendung

Die Fehlermeldung `Seite nicht installiert` wird in zwei Situationen angezeigt:

1. Ihre Domain ist nicht im Bereich [Multisite](../multisites-mehrere-websites-konfigurieren/#schritt-1-auf-die-multisite-verwaltung-zugreifen) Ihres Hostings vorhanden.

2. Ihre Domain ist über ihre `DNS-Zone`{.action} nicht mit Ihrem Hosting verbunden.

In den folgenden Schritten können Sie den Fehlermeldung `Seite nicht installiert` korrigieren, der in diesen beiden Situationen nicht installiert ist.

### Schritt 1: Den Multisite-Bereich Ihres Hostings überprüfen

Klicken Sie in Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) auf `WebCloud`{.action} und dann `Hosting-Pakete`{.action}.

Wählen Sie das betreffende Hosting-Pakete aus der Liste aus und klicken Sie dann auf den Tab `Multisite`{.action}.

|Szenario|Erforderliche Maßnahme|
|---|---|
|Der Name Ihrer Website erscheint in der Tabelle.|Wenn Sie den Namen Ihrer Website gerade im Multisite-Bereich Ihres Hostings hinzugefügt haben, warten Sie etwa 20 Minuten und aktualisieren Sie den Cache Ihres Browsers. Wenn die Nachricht \`Seite nicht installiert\` erscheint, gehen Sie zu [Schritt 2](#checkdomainlink).|
|Die Domain oder Subdomain Ihrer Website wird nicht in der Tabelle angezeigt.|Fügen Sie Ihre Domain zur `Multisite` {.action} hinzu, indem Sie in der Anleitung [Mehrere Websites auf einem Webhosting einrichten](../multisites-mehrere-websites-konfigurieren/#schritt-2-eine-domain-oder-subdomain-hinzufugen).|
|Die Domain wurde ohne Aktion Ihrerseits aus der Multisite gelöscht.|Ihre Domainname oder deren DNS-Zone kann über einen anderen Account verwaltet werden. Fügen Sie Ihre Domain zur Multisite hinzu, indem Sie in der Anleitung [Mehrere Websites auf einem Webhosting einrichten](../multisites-mehrere-websites-konfigurieren/#schritt-22-eine-externe-domain-hinzufugen).|

### Schritt 2: Die DNS Zone Ihrer Domain überprüfen <a name="checkdomainlink"></a>

> [!primary]
> Mit diesem Schritt wird überprüft, ob Ihre Domain über ihre `DNS-Zone`{.action} mit dem Hosting Ihrer Website verbunden ist.
> Mehr Informationen zum DNS-Konzept finden Sie in unserer Anleitung [Bearbeiten der OVHcloud DNS-Zone](../../domains/webhosting_bearbeiten_der_dns_zone/#dns-konzept-verstehen).

#### 2.1 Die IP-Adresse Ihres OVHcloud Hostings identifizieren

Um die IP-Adresse wiederzufinden, klicken Sie in der linken Spalte Ihres [OVHcloud Kundencenters](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) auf `Hosting-Pakete` und wählen Sie das betreffende Hosting aus.

![hosting-general-informations](images/hosting-general-informations.png){.thumbnail}

#### 2.2 Überprüfen Sie die in der DNS Zone Ihrer Domain eingetragene IP-Adresse

Überprüfen Sie nun, dass die IP-Adresse Ihres Hostings in der aktiven DNS-Zone Ihrer Domain angezeigt wird.

Gehen Sie hierzu in den Bereich `Domainnamen`{.action}, wählen Sie Ihre Domain aus und gehen Sie dann in den Tab `DNS-Zone`{.action}.

|Mögliches Szenario|Erforderliche Maßnahme|
|---|---|
|In der DNS Zone ist Ihre Domain mit der IP-Adresse Ihres Hostings über einen Eintrag vom Typ A (für IPv4) oder AAAA (für IPv6) verbunden.<br>![zoneDNS_IP2](images/zonedns_ip2.png){.thumbnail}|In diesem Fall ist die Konfiguration Ihrer Domain korrekt.<br><br>Nach den letzten Änderungen an Ihren DNS wird Ihre Website innerhalb von maximal 48 Stunden angezeigt.<br><br>Denken Sie auch daran, Ihre Geräte (PC, Mobiltelefon, Router, usw.) neuzustarten und den Cache Ihres Browsers zu leeren.|
|In Ihrer DNS Zone ist kein Eintrag vom Typ A oder AAAA enthalten, der Ihre Domain mit der IP-Adresse Ihres Hostings verbindet. Oder der existierende Eintrag zeigt auf eine andere IP-Adresse.|Fügen Sie einen neuen Eintrag vom Typ A oder AAAA hinzu oder korrigieren Sie den bestehenden Eintrag in dieser [Anleitung](../../domains/webhosting_bearbeiten_der_dns_zone/).|
|Ihre Domain erscheint nicht im Bereich `Domainnamen`{.action} Ihres Kundencenters.<br>Oder der Tab `DNS-Zone`{.action} Ihrer Domain wird wie folgt angezeigt:<br>![zonedns_ndd_pas_sur_lec2](images/zonedns_ndd_pas_sur_lec2.png){.thumbnail}|Das bedeutet, dass Ihre Domainname nicht über Ihr OVHcloud Kundencenter verwaltet wird.<br><br>Legen Sie über unser [WHOIS](https://www.ovh.de/support/werkzeuge/check_whois.pl) Tool seinen Registrar und die DNS Server fest, zu denen er gehört.<br><br>Folgen Sie dieser [Anleitung](../multisites-mehrere-websites-konfigurieren/#schritt-22-eine-externe-domain-hinzufugen) und ändern Sie die betreffende `DNS-Zone`.|
|Diese Warnung erscheint im Tab `DNS-Zone`{.action}:<br>![zonedwarnmeldung_nicht_bei_srv_dns](images/avertissement_zonedns_pas_sur_srv_dns.png){.thumbnail}|Ändern Sie daher die DNS-Server Ihrer Domain entsprechend dieser [Anleitung](../../domains/webhosting_allgemeine_informationen_zu_den_dns_servern/).|

## Mehr <a name="gofurther"></a>

[Verzeichnis von IP-Adressen für die Webhosting Cluster ](../verzeichnis-der-ip-adressen-web-hosting-cluster/)

[Kontaktieren Sie OVHcloud Partner](https://partner.ovhcloud.com/de/directory/)

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>
