---
title: 'CNAME-Eintrag zu einer assoziierten Domain hinzufügen'
excerpt: 'Hier erfahren Sie, wozu ein CNAME-Eintrag notwendig ist und wie Sie diesen bei OVH hinzufügen'
slug: exchange_20132016_einen_cname_eintrag_hinzufugen
section: 'Erste Schritte mit Exchange'
order: 5
---

**Stand 16.07.2019**

## Einleitung

Wenn Sie eine Domain zu Ihrem E-Mail-Dienst hinzufügen, werden Sie gegebenenfalls dazu aufgefordert, den CNAME-Eintrag in Ihrer DNS-Zone zu konfigurieren. Mit dieser Konfiguration wird sichergestellt, dass Sie auch tatsächlich die Rechte haben, diese Domain hinzuzufügen.

**In dieser Anleitung erfahren Sie, wozu ein CNAME-Eintrag notwendig ist und wie Sie ihn bei OVH hinzufügen.**

## Voraussetzungen

- Sie verfügen über eine OVH E-Mail-Lösung.
- Sie haben eine Domain zu Ihrem E-Mail-Dienst hinzugefügt und wurden dazu aufgefordert, einen CNAME-Eintrag hinzuzufügen.
- Sie können die Konfiguration Ihrer Domain (ihre DNS-Zone) bearbeiten.
- Sie sind in Ihrem [OVH Kundencenter](https://www.ovh.com/auth/?action=gotomanager) eingeloggt und befinden sich im Bereich `Web`{.action}.

## Beschreibung

### Schritt 1: Die OVH CNAME-Diagnose verstehen

Das **CNAME** (Canonical Name) Diagnose-Kästchen erscheint in manchen Fällen, wenn Sie eine Domain mit Ihrem E-Mail-Dienst verbinden.

Der CNAME-Eintrag dient als Beleg, dass Sie auch tatsächlich der Administrator der betreffenden Domain sind.

Diese Diagnose kann in den folgenden Fällen angezeigt werden:

- Die angegebene Domain ist nicht bei OVH registriert.
- Die angegebene Domain wird nicht über Ihre Kundenkennung verwaltet.
- Die angegebene Domain verwendet nicht die OVH Konfiguration (die OVH DNS-Server).

![cname domain e-mail](images/cname_exchange_diagnostic.png){.thumbnail}

### Schritt 2: Die OVH CNAME Konfiguration aufrufen

Gehen Sie in den Tab `Assoziierte Domains`{.action} und klicken Sie auf das rote Kästchen `CNAME`{.action}, um die notwendigen Informationen aufzurufen.

Der entsprechende CNAME-Eintrag wird über der Grafik angezeigt.

![cname domain e-mail](images/cname_exchange_informations.png){.thumbnail}

An dieser Stelle sind zwei weitere Vorgehensweisen möglich:

- **Ihre Domain verwendet die OVH Konfiguration**: Sie können die Änderung wie nachfolgend beschrieben in Ihrem OVH Kundencenter vornehmen.

- **Ihre Domain verwendet nicht die OVH Konfiguration**: Bitte nehmen Sie die Änderungen in dem Verwaltungsinterface vor, dass Sie für die Konfiguration Ihrer Domain verwenden.

> [!primary]
>
> Wenn Ihre Domain bei OVH registriert ist, können Sie überprüfen, ob diese die OVH Konfiguration verwendet. Gehen Sie hierzu in Ihrem Kundencenter zur entsprechenden Domain und anschließend in den Tab `DNS Server`{.action}.
>

### Schritt 3: Den CNAME-Eintrag in der OVH Konfiguration anlegen

Klicken Sie in Ihrem Kundencenter im linken Menü auf `Domains`{.action} und anschließend auf die entsprechende Domain. Gehen Sie dann in den Tab `DNS Zone`{.action}.

Es sollte eine Tabelle angezeigt werden. In dieser ist die Konfiguration Ihrer Domain bei OVH angezeigt. Sie besteht aus mehreren DNS-Einträgen, die in jeweils einer Zeile der Tabelle stehen.

Um einen CNAME-Eintrag hinzuzufügen, klicken Sie auf den Button `Einen Eintrag hinzufügen`{.action}.

![cname domain e-mail](images/cname_exchange_add_entry_step1.png){.thumbnail}

Im angezeigten Fenster werden Ihnen mehrere DNS-Einträge angeboten. Klicken Sie auf `CNAME`{.action} und geben Sie die Informationen aus der Diagnose in den entsprechenden Feldern ein.

![cname domain e-mail](images/cname_add_entry_dns_zone.png){.thumbnail}

Wenn Sie die Informationen eingegeben haben, klicken Sie auf `Weiter`{.action}. Vergewissern Sie sich, dass die angezeigten Informationen korrekt sind, und klicken Sie dann auf `Bestätigen`{.action}.

> [!primary]
>
> Die Änderung erfordert eine Propagationszeit zwischen 4 und maximal 24 Stunden, bis sie voll wirksam ist.
>

Um zu überprüfen, dass die Konfiguration des CNAME-Eintrags korrekt ist, gehen Sie zurück in die Tabelle `Assoziierte Domains`{.action} Ihres E-Mail-Dienstes. Wird ein grünes Kästchen angezeigt, ist die Domain korrekt konfiguriert. Ist das nicht der Fall, kann es sein, dass die Propagationszeit noch nicht abgelaufen ist.

![cname domain e-mail](images/cname_exchange_diagnostic_green.png){.thumbnail}

## Weiterführende Informationen

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.