---
title: Legacy VPS verwalten
excerpt: Erfahren Sie hier, wie Sie einen VPS einer älteren Reihe über Ihr OVHcloud Kundencenter verwalten
updated: 2023-06-27
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie im Zweifelsfall die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button "Beitragen" auf dieser Seite.
>

## Ziel

Sie können anhand des in Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) angezeigten Referenznamens feststellen, ob ein VPS aus einer alten Reihe stammt: Wenn diese interne Referenz im Format *vpsXXXX.ovh.net* vorliegt (wobei *X* für eine Zahl steht) und Sie den entsprechenden VPS nicht auf [unsere aktuelle Produktreihe](https://www.ovhcloud.com/de/vps/) migriert haben, handelt es sich um einen *Legacy* VPS. 

Die Referenz für einen VPS der aktuellen Reihe has das Format: *vps-XXXXXXX.vps.ovh.net* (wobei *X* eine Ziffer oder ein Buchstabe sein kann).

Für einen *Legacy* VPS bestehen einige Unterschiede bezüglich dessen Verwaltung.

**Diese Anleitung beschreibt die Funktionen des OVHcloud Kundencenters für die Verwaltung eines *Legacy*-VPS.**

## Voraussetzungen

- Sie haben einen [*Legacy* VPS](https://www.ovhcloud.com/de/vps/) in Ihrem Kunden-Account.
- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de).

## In der praktischen Anwendung

Loggen Sie sich in Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de
) ein, gehen Sie in den Bereich `Bare Metal Cloud`{.action} und wählen Sie links im Menü unter `Virtual Private Server`{.action} Ihren Server aus.

Im Tab `Startseite`{.action} finden Sie unter **Shortcuts** die wichtigsten Verwaltungsfunktionen Ihres VPS.

![ControlPanel](images/legacy_vps_1.png){.thumbnail}

### VPS löschen

Mit dieser Option wird ein Popup-Fenster geöffnet, um den [Kündigungsvorgang Ihrer Dienstleistung](/pages/account_and_service_management/managing_billing_payments_and_services/how_to_cancel_services) zu starten.

### Neustart im Rescue-Modus

Klicken Sie hier, um den VPS im Rescue-Modus neu zu starten. Weitere Informationen finden Sie in [unserer Anleitung](/pages/bare_metal_cloud/virtual_private_servers/rescue).

### VPS neu starten

Diese Option im Kundencenter führt einen *Hard Reboot* Ihres VPS durch, wenn Sie im angezeigten Fenster auf `Bestätigen`{.action} klicken.

Möglicherweise ist ein Neustart erforderlich, um Konfigurationseinstellungen anzuwenden oder ein Problem zu beheben. Führen Sie wenn möglich einen *Soft Reboot* über die Kommandozeile aus:

```bash
sudo reboot
```

### VPS reinstallieren

Klicken Sie hier, um ein neues Betriebssystem zu installieren. Im neuen Fenster werden Sie aufgefordert, Folgendes auszuwählen:

- Betriebssystem
- Sprache
- [SSH-Schlüssel](/pages/bare_metal_cloud/dedicated_servers/creating-ssh-keys-dedicated) (optional)

Die Auswahl des Betriebssystems kann abhängig von Ihrem Dienst eingeschränkt sein.

> [!primary]
>
> Für einige proprietäre Betriebssysteme oder Plattformen wie Plesk oder cPanel sind Lizenzen erforderlich, die zusätzliche Kosten verursachen. Die Lizenzen können über das Kundencenter verwaltet werden: Gehen Sie in den Bereich `Bare Metal Cloud`{.action} und öffnen Sie `Lizenzen`{.action}.

Sie erhalten eine E-Mail, sobald die Installation abgeschlossen ist. Dieser Vorgang kann bis zu 30 Minuten dauern.

#### Verbindung zu Ihrem VPS nach der Reinstallation

Bei der Reinstallation Ihres VPS erhalten Sie eine E-Mail mit Ihrem Root-Passwort, um sich über [SSH](/pages/bare_metal_cloud/dedicated_servers/ssh_introduction) mit Ihrem VPS zu verbinden, es sei denn, Sie haben einen [SSH-Schlüssel](/pages/bare_metal_cloud/dedicated_servers/creating-ssh-keys-dedicated) für die Vorinstallation ausgewählt.

#### Deaktivieren von Remote-Logins für den Root-Benutzer

Der Benutzer **root** wird standardmäßig auf GNU/Linux-Systemen erstellt. Dies ist die höchste Zugriffsebene auf das Betriebssystem. Es kann gefährlich sein, Ihren VPS über den Root-Benutzer und dessen Passwort zugänglich zu belassen, da dieser irreversibel schädliche Operationen durchführen kann.

Root-Logins über das SSH-Protokoll sollten deaktiviert werden. [Erstellen Sie einen neuen Benutzer](/pages/bare_metal_cloud/virtual_private_servers/secure_your_vps#createuser), bevor Sie mit den nachfolgenden Schritten fortfahren.

Verwenden Sie einen Text-Editor wie *vim* oder *nano*, um diese Konfigurationsdatei zu bearbeiten:

```bash
sudo nano /etc/ssh/sshd_config
```

Suchen Sie die folgende Zeile:

```console
PermitRootLogin yes 
```

Ersetzen Sie **yes** mit **no** nach `PermitRootLogin`. Speichern Sie die Datei und schließen Sie den Editor.

Damit diese Änderung wirksam wird, muss der SSH-Dienst mit einem der folgenden Befehle neu gestartet werden:

```bash
sudo systemctl restart ssh
```

```bash
sudo systemctl restart sshd
```

Das sollte ausreichen, um die Änderungen umzusetzen. Andernfalls starten Sie den VPS neu (`~$ sudo reboot`).

Anschließend werden Verbindungen zu Ihrem Server über den Root-Benutzer (`ssh root@IPv4_VPS`) abgelehnt.

### KVM

Verwenden Sie diese Option, um sich über KVM mit Ihrem VPS zu verbinden. Weitere Informationen finden Sie in [unserer Anleitung](/pages/bare_metal_cloud/virtual_private_servers/using_kvm_for_vps).

### Inhaber ändern

Über diesen Link gelangen Sie zum Formular, das Sie ausfüllen müssen, wenn der Inhaber eines VPS gewechselt werden soll. Wenn Sie Hilfe bei diesem Vorgang benötigen, kontaktieren Sie unsere Support-Teams, indem Sie ein Ticket in Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) erstellen.

### Zur neuen Reihe migrieren

Ihr VPS kann automatisch auf die aktuelle Reihe migriert werden. Entdecken Sie die Vorteile dieses Angebots in [unseren FAQ zur VPS-Migration](https://www.ovhcloud.com/de/vps/vps-offer-migration/).

## Weiterführende Informationen

[SSH Einführung](/pages/bare_metal_cloud/dedicated_servers/ssh_introduction)

[Erstellung und Verwendung von SSH-Schlüsseln](/pages/bare_metal_cloud/dedicated_servers/creating-ssh-keys-dedicated)

[VPS Sicherheit](/pages/bare_metal_cloud/virtual_private_servers/secure_your_vps)

[Eine neue Windows Server Installation konfigurieren](/pages/bare_metal_cloud/virtual_private_servers/windows_first_config)

[Erste Schritte mit einem VPS](/pages/bare_metal_cloud/virtual_private_servers/starting_with_a_vps)

Werden Sie Mitglied unserer User Community auf <https://community.ovh.com/en/>.