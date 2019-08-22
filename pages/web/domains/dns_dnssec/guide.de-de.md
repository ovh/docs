---
title: 'Domain mit DNSSEC sichern'
excerpt: 'Schützen Sie Ihre Domain mit DNSSEC vor Cache Poisoning'
slug: sichern_sie_ihre_domain_mit_dnssec_ab
legacy_guide_number: g609
section: 'Schutz und Sicherheit'
order: 1
---

**Stand 19.06.2019**

## Einleitung

Auf DNS-Servern wird die DNS-Konfiguration von Domains gespeichert. Diese Konfiguration wird üblicherweise dazu verwendet, Ihre Domain mit dem oder den Servern zu verbinden, auf denen Ihre Website oder E-Mail-Adressen gehostet werden. In den letzten Jahren haben böswillige Hacker Cache-Poisoning-Methoden für DNS-Server entwickelt, um den Traffic zu anderen Servern umzuleiten. Es gibt ein Verfahren, um Ihre Domain hiervor zu schützen: DNSSEC.

**Hier erfahren Sie, wie Sie DNSSEC für Ihre Domain aktivieren, um sie vor Cache Poisoning zu schützen.**  
Um zu verstehen, wie dieses Verfahren funktioniert, lesen Sie folgende Seite: „[DNSSEC verstehen](https://www.ovh.de/domains/dnssec_dienst.xml){.external}“

## Voraussetzungen

- Sie besitzen eine bei OVH registrierte Domain.
- Die betreffende Domain hat eine mit DNSSEC kompatible Endung.
- Sie sind in Ihrem [OVH Kundencenter](https://www.ovh.com/auth/?action=gotomanager){.external} eingeloggt und befinden sich im Bereich `Web`{.action}.

## Beschreibung

DNSSEC kann auf zwei Arten aktiviert werden:

- **Wenn Ihre Domain DNS-Server von OVH verwendet**, kann DNSSEC mit einem Klick über Ihr Kundencenter aktiviert werden.

- **Wenn Ihre Domain nicht die OVH DNS-Server verwendet**, informieren Sie sich für die Vorgehensweise bei dem Anbieter, der die DNS-Konfiguration Ihrer Domain verwaltet. Wenn Sie die Konfiguration selbst verwalten, muss DNSSEC manuell von Ihnen installiert werden. Ist das der Fall, nutzen Sie bitte die Dokumentation im Internet.

> [!primary]
>
> Um zu überprüfen, ob Ihre Domain die OVH DNS-Konfiguration verwendet, gehen Sie in Ihrem [OVH Kundencenter](https://www.ovh.com/auth/?action=gotomanager){.external} zur entsprechenden Domain und anschließend auf den Tab `DNS-Server`{.action}.
>

### Schritt 1: Auf die Domainverwaltung zugreifen

Um zu beginnen, loggen Sie sich zunächst in Ihrem [OVH Kundencenter](https://www.ovh.com/auth/?action=gotomanager){.external} ein und gehen Sie in den Bereich „Web“. Klicken Sie anschließend links im Menü auf `Hosting-Pakete`{.action} und wählen Sie die betreffende Domain aus der Liste aus.

Die geöffnete Seite zeigt die allgemeinen Informationen der Domain. 

![DNSSEC](images/activate-dnssec-step1.png){.thumbnail}

### Schritt 2: DNSSEC-Dienst Ihrer Domain verwalten

Im Tab `Allgemeine Informationen`{.action} können Sie den Status der DNSSEC-Aktivierung für Ihre Domain überprüfen.

Den Status finden Sie unter „Sicherheit“ und „Sichere Delegation (DNSSEC)“.

![DNSSEC](images/activate-dnssec-step2.png){.thumbnail}

Indem Sie den Aktivierungsbutton verschieben, können Sie DNSSEC für Ihre Domain aktivieren bzw. deaktivieren. Es öffnet sich ein neues Fenster zur Bestätigung der Änderung.

![DNSSEC](images/activate-dnssec-step3.png){.thumbnail}

### Schritt 3: Durchführung der Aktivierung bzw. Deaktivierung abwarten

Die Aktivierung bzw. Deaktivierung von DNSSEC für Ihre Domain kann bis zu 24 Stunden dauern. 

## Weiterführende Informationen

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.