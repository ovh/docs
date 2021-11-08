---
title: 'Passwort einer Webhosting-Datenbank ändern'
slug: datenbank-passwort-aendern
excerpt: 'So ändern Sie das Passwort einer Datenbank, die im Rahmen eines Webhosting Angebots erstellt wurde.'
section: 'Datenbanken'
order: 2
---

**Stand 26.06.2018**

## Einleitung

In einer Datenbank (DB) können sogenannte dynamische Elemente, wie zum Beispiel Kommentare oder Artikel, gespeichert werden. Diese Datenbanken werden heute von praktisch allen Content Management Systemen (CMS) wie WordPress oder Joomla! verwendet und sind über ein zugehöriges Passwort erreichbar.

**Hier erfahren Sie, wie Sie das Passwort einer Datenbank ändern, die im Rahmen eines Webhosting Angebots erstellt wurde.**

## Voraussetzungen

- Sie verfügen über ein [OVH Webhosting](https://www.ovhcloud.com/de/web-hosting/){.external} Angebot.
- Sie haben über Ihr [OVH Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de){.external} Zugriff auf die Verwaltung des betreffenden Webhosting Angebots.

> [!warning]
>
> Wenn Sie das Passwort Ihrer Datenbank ändern, denken Sie daran, diese Änderung auch in der Konfigurationsdatei vorzunehmen, die die Datenbank mit Ihrer Website verbindet.
>

## Beschreibung

### Schritt 1: Situation einschätzen

**Seien Sie vorsichtig, wenn Sie das Passwort einer Datenbank ändern**: Wenn die Änderung nicht korrekt durchgeführt wird, kann es sein, dass die Website nicht mehr erreichbar ist. Ein genaueres Verständnis der Auswirkungen einer Passwortänderung ermöglicht es Ihnen, weitere notwendige Änderungen besser zu bestimmen.

Heute verwenden praktisch alle Content Management Systeme (CMS) wie WordPress oder Joomla! eine Datenbank, um dynamische Elemente einer Website, wie zum Beispiel Kommentare oder Artikel, zu speichern. Für diese Seiten ist die Verbindung zur Datenbank daher absolut notwendig, um zu funktionieren. Die Verbindung wird mithilfe einer Konfigurationsdatei hergestellt, die Informationen zur Datenbank enthält. Aus diesem Grund muss nach der Passwortänderung der OVH Datenbank diese Änderung auch unbedingt in der Konfigurationsdatei vorgenommen werden, um die Verbindung zwischen Ihrer Website und der Datenbank zu gewährleisten.

> [!primary]
>
> Wir empfehlen, vor Änderungen zu überprüfen, ob Ihre Website mit einer Datenbank verbunden ist. Ist das der Fall, sollten Sie zunächst sicherstellen, dass Sie wissen, wie diese Änderungen zu übertragen sind, damit die Website erreichbar bleibt.
>
> Da diese Einstellungen die Konfiguration Ihrer Website und nicht die OVH Dienste betreffen, empfehlen wir, den Herausgeber der Website oder einen spezialisierten Dienstleister zu kontaktieren, sollten Sie weitere Hilfe benötigen.
>

### Schritt 2: Auf die Verwaltung der Webhosting-Datenbanken zugreifen

Loggen Sie sich zunächst in Ihrem [OVH Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de){.external} ein, klicken Sie links im Menü auf `Hosting-Pakete`{.action} und wählen Sie das betreffende Hosting aus. Gehen Sie dann auf den Tab `Datenbanken`{.action}.

Die angezeigte Tabelle enthält alle Datenbanken, die im Rahmen Ihres Webhosting Angebots erstellt wurden.

![datenbank passwort](images/database-password-step1.png){.thumbnail}

### Schritt 3: Passwort der Datenbank ändern

Um das Passwort zu ändern, klicken Sie rechts neben der entsprechenden Datenbank auf die drei Punkte und anschließend auf `Passwort ändern`{.action}.

![datenbank passwort](images/database-password-step2.png){.thumbnail}

Geben Sie im angezeigten Fenster das neue Passwort ein, bestätigen Sie dieses und klicken Sie anschließend auf den Button `Bestätigen`{.action}.

**Die Änderung benötigt einige Minuten, bis sie wirksam ist.**

> [!primary]
>
> Aus Sicherheitsgründen halten Sie sich bitte an die bei der Eingabe des Passworts angezeigten Bedingungen. Wir empfehlen Ihnen außerdem:
>
> - nicht zweimal das gleiche Passwort zu verwenden
>
> - ein Passwort zu verwenden, das keinen Bezug zu Ihren persönlichen Angaben hat (vermeiden Sie zum Beispiel Ihren Namen, Vornamen oder Ihr Geburtsdatum)
>
> - Ihr Passwort regelmäßig zu erneuern
>
> - Ihr Passwort nicht auf Papier zu notieren oder sich selbst per E-Mail zuzusenden
>
> - Ihr Passwort nicht in Ihrem Webbrowser zu speichern, auch wenn dieser Sie dazu auffordert
>

![datenbank passwort](images/database-password-step3.png){.thumbnail}

### Schritt 4: Verbindung zwischen Datenbank und Website wiederherstellen

> [!primary]
>
> Dieser Schritt ist nicht notwendig, wenn Ihre Website nicht mit einer Datenbank verbunden ist.
>

Wenn auf Ihrer Website eine Nachricht angezeigt wird, dass die Verbindung zur Datenbank nicht hergestellt werden kann, haben Sie das neue Passwort noch nicht in der Konfigurationsdatei angegeben, die von Ihrer Website zum Herstellen der Verbindung verwendet wird.

Damit Ihre Website sich mit der Datenbank verbinden kann, wird eine Datei auf Ihrem Speicherplatz hinterlegt, die die notwendigen Informationen zur Verbindungsherstellung enthält: Benutzername, Passwort, Name der Datenbank und Server-Adresse. Aufgrund der Passwortänderung über das OVH Kundencenter ist diese Verbindung nun unterbrochen.

Um Sie wiederherzustellen, geben Sie das neue Passwort in der Datei mit den Datenbankinformationen ein. Da diese Einstellungen die Konfiguration Ihrer Website und nicht die OVH Dienste betreffen, empfehlen wir, den Herausgeber der Website oder einen spezialisierten Dienstleister zu kontaktieren, falls Sie weitere Hilfe benötigen.

## Weiterführende Informationen

[Hier finden Sie weitere Ratschläge zur Passwortsicherheit vom BSI](https://www.bsi-fuer-buerger.de/BSIFB/DE/Empfehlungen/Passwoerter/passwoerter_node.html){.external}.

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
