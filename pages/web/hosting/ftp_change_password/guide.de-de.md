---
title: 'Passwort eines FTP-Benutzers ändern'
slug: ftp-benutzer-passwort-aendern
excerpt: 'In dieser Anleitung erfahren Sie, wie Sie das Passwort eines auf Ihrem OVH Webhosting erstellten FTP-Benutzers ändern.'
section: 'FTP und SSH'
order: 1
---

**Stand 27.06.2018**

## Einleitung

Mit OVH Webhosting Angeboten verfügen Sie über einen Speicherplatz für das Online-Stellen Ihrer Website-Dateien. Der Zugriff erfolgt über einen FTP-Benutzer sowie das für ihn erstellte Passwort.

**Hier erfahren Sie, wie Sie das Passwort eines auf Ihrem OVH Webhosting erstellten FTP-Benutzers ändern.**

## Voraussetzungen

- Sie verfügen über ein [OVH Webhosting](https://www.ovhcloud.com/de/web-hosting/){.external} Angebot.
- Sie sind in Ihrem [OVH Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de){.external} eingeloggt.

## Vorgehensweise

### Schritt 1: Auf die Verwaltung der FTP-Benutzer zugreifen

Loggen Sie sich in Ihrem [OVH Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de){.external} ein, klicken Sie links im Menü auf `Hosting-Pakete`{.action} und wählen Sie das gewünschte Hosting aus. Gehen Sie dann auf den Tab `FTP - SSH`{.action}.

Die angezeigte Tabelle enthält die auf Ihrem OVH Webhosting erstellten FTP-Benutzer. Mit diesen können Sie auf Ihren Speicherplatz zugreifen, um dort Ihre Website-Dateien online zu stellen. Bei der Installation Ihres Hostings wird automatisch ein Benutzer erstellt.

![ftp passwort](images/change-ftp-password-step1.png){.thumbnail}

### Schritt 2: Passwort eines FTP-Benutzers ändern

Entsprechend Ihrem [Webhosting Angebot](https://www.ovhcloud.com/de/web-hosting/){.external} bestehen zwei mögliche Vorgehensweisen zur Änderung des Passworts eines FTP-Benutzers:

- **für Angebote, mit denen nur ein FTP-Benutzer angelegt werden kann** (Start 10M und Basic): Klicken Sie in der Tabelle in der Spalte `Passwort`{.action} auf das Bleistift-Symbol, geben Sie im Textfeld das neue Passwort ein und bestätigen Sie die Änderung.

- **für Angebote, mit denen mehrere FTP-Benutzer angelegt werden können** (Pro, Performance und Cloud Web): Klicken Sie in der Tabelle rechts neben dem betreffenden Benutzer auf das Zahnrad-Symbol und anschließend auf `Passwort ändern`{.action}. Geben Sie im angezeigten Fenster das neue Passwort ein, bestätigen Sie dieses und klicken Sie anschließend auf den Button `Bestätigen`{.action}.

Die Änderung benötigt einige Minuten, bis sie wirksam ist.

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

### Schritt 3: Auf Ihren Speicherplatz zugreifen

Nachdem Sie das Passwort des FTP-Benutzers geändert haben, können Sie auf Ihren Speicherplatz zugreifen.

Entsprechend Ihrem [OVH Webhosting Angebot](https://www.ovhcloud.com/de/web-hosting/){.external} gibt es hierzu mehrere mögliche Vorgehensweisen:

- **FTP-Explorer verwenden**: Ermöglicht es Ihnen, über einen Webbrowser auf Ihren Speicherplatz zuzugreifen. Bleiben Sie für diese Option in dem Tab `FTP - SSH`{.action} und klicken Sie auf den Button `FTP Explorer`{.action}.

- **ein mit FTP kompatibles Programm verwenden**: Installieren Sie einen FTP-Client auf Ihrem Computer (zum Beispiel FileZilla).

- **SSH-Zugang verwenden**: Um auf Ihren Speicherplatz zuzugreifen, müssen die entsprechenden Befehle in einem Terminal ausgeführt werden. Für diese Art des Zugriffs sind erweiterte Kenntnisse erforderlich.

## Weiterführende Informationen

[Hier finden Sie weitere Ratschläge zur Passwortsicherheit vom BSI](https://www.bsi-fuer-buerger.de/BSIFB/DE/Empfehlungen/Passwoerter/passwoerter_node.html){.external}.

[Webhosting: Hilfe zur Verwendung von FileZilla](https://docs.ovh.com/de/hosting/webhosting_hilfe_zur_verwendung_von_filezilla/){.external}

[Webhosting: SSH auf Ihren Webhostings](https://docs.ovh.com/de/hosting/webhosting_ssh_auf_ihren_webhostings/){.external}

Für den Austausch mit unserer User Community gehen Sie auf [https://community.ovh.com/en/](https://community.ovh.com/en/){.external}.
