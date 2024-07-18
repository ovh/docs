---
title: Erste Schritte mit einem VPS
excerpt: Erfahren Sie hier, wie Sie einen VPS in Ihrem Kundencenter verwalten sowie die ersten Schritte zum Start, inklusive Remote-Verbindungen und Sicherheitsmaßnahmen
updated: 2024-04-05
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie im Zweifelsfall die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button "Beitragen" auf dieser Seite.
>

## Ziel

Ein Virtual Private Server (VPS) ist ein virtualisierter Dedicated Server. Im Gegensatz zu den von OVHcloud verwalteten Webhosting-Angeboten liegt die Konfiguration und Wartung eines VPS-Systems in Ihrer Verantwortung als Systemadministrator.

**Diese Anleitung erklärt, wie Sie Ihren VPS verwalten und was bei der Ersteinrichtung zu beachten ist.**

## Voraussetzungen

- Sie haben einen [VPS](https://www.ovhcloud.com/de/vps/) in Ihrem OVHcloud Kundencenter
- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de).

## In der praktischen Anwendung

### Inhaltsübersicht

- [Kundencenter Interface](#controlpanel)
- [VPS-Funktionen im Bereich "Start"](#hometab)
- [Verbindung zu Ihrem VPS (GNU/Linux Betriebssystem)](#connect)
- [Verbindung mit Ihrem Windows VPS](#winconnect)
- [Absicherung Ihres VPS](#secure)
- [Domainnamen zuweisen](#domain)

Loggen Sie sich in Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) ein, gehen Sie in den Bereich `Bare Metal Cloud`{.action} und wählen Sie links im Menü unter `Virtual Private Server`{.action} Ihren Server aus.

<a name="controlpanel"></a>

### Kundencenter Interface

Der Tab `Start`{.action} enthält wichtige Informationen zu Ihrem Dienst und ermöglicht Ihnen die Durchführung grundlegender Operationen.

![VPS Home](images/vpshome.png){.thumbnail}

#### Ihr VPS <a name="yourvps"></a>

In diesem Bereich finden Sie Informationen zum VPS und dem Status der Dienstleistung. Klicken Sie auf die Tabs, um Erläuterungen anzuzeigen.

> [!tabs]
> Name
>>
>> Wenn Sie auf `...`{.action} und dann auf `Namen ändern`{.action}, können Sie einen bezeichnenden Namen für diesen VPS eingeben. Diese Funktion ist nützlich, um die Navigation im Kundencenter zu vereinfachen, wenn Sie mehrere VPS-Dienstleistungen verwalten. Der interne Name der Dienstleistung bleibt stets im Format *vps-XXXXXXX.vps.ovh.net* erhalten.
>>
> Boot
>>
>> Der hier angezeigte Boot-Modus ist entweder der "normale" Modus, in dem das System das installierte Betriebssystem lädt (*LOCAL*), oder der von OVHcloud bereitgestellte **Rescue-Modus** zur Fehlerbehebung. Verwenden Sie den Button `...`{.action}, um den [VPS neu starten](#reboot-current-range), oder ihn im Rescue-Modus zu booten.
>>
>> Weitere Informationen finden Sie in unserer Anleitung zum [Rescue-Modus](/pages/bare_metal_cloud/virtual_private_servers/rescue).
>>
> Betriebssystem / Distribution
>>
>> Dies ist das derzeit installierte Betriebssystem. Verwenden Sie den Button `...`{.action}, um [dasselbe Betriebssystem neu zu installieren oder ein anderes Betriebssystem aus den verfügbaren Optionen auszuwählen](#reinstallvps).
>>
>> Beachten Sie, dass bei einer Reinstallation alle aktuell auf dem VPS gehosteten Daten (mit Ausnahme zusätzlicher Disks) gelöscht werden.
>>
>> > [!primary]
>> >
>> > Wenn Sie einen **Windows** VPS bestellt haben, können Sie nur ein Windows Betriebssystem für die Neuinstallation auswählen. Wenn Windows bei der Bestellung nicht ausgewählt wurde, kann es auch nach der Auslieferung des VPS nicht installiert werden.
>>
>>
>> Sobald das System installiert ist, liegt es an Ihnen, relevante Sicherheitsupdates zu implementieren. Weitere Informationen finden Sie [weiter unten](#reinstallvps) und in unserer [Anleitung zur Absicherung eines VPS](/pages/bare_metal_cloud/virtual_private_servers/secure_your_vps).
>> 
> Zone / Standort
>>
>> Diese Bereiche enthalten Informationen zum Standort Ihres VPS. Dies kann beispielsweise nützlich sein, um Auswirkungen auf Ihren Dienst zu identifizieren, die in [Status Reports](https://bare-metal-servers.status-ovhcloud.com/) aufgeführt sind.
>>
 
#### Ihre Konfiguration

Klicken Sie auf die Tabs, um Erläuterungen dieses Bereichs anzuzeigen.

> [!tabs]
> Modell
>>
>> Dies ist die kommerzielle Referenz zur Identifizierung des VPS-Modells, das den [VPS-Angeboten auf unserer Website](https://www.ovhcloud.com/de/vps) entspricht.
>>
> vCores / Arbeitsspeicher / Speicher
>> 
>> Die aktuellen Ressourcen Ihres VPS werden hier angezeigt und können separat durch Klicken auf den entsprechenden Button hochgestuft werden. Beachten Sie, dass Upgrades abhängig vom gewählten VPS-Modell limitiert sind und nur mit einem Upgrade auf eine [höhere Reihe](https://www.ovhcloud.com/de/vps) verfügbar sein können.
>> 

#### IP

Klicken Sie auf die Tabs, um Erläuterungen dieses Bereichs anzuzeigen.

> [!tabs]
> IPv4
>>
>> Die primäre öffentliche IPv4-Adresse des VPS wird bei der Installation automatisch konfiguriert. Weitere Informationen zur Verwaltung von IP-Adressen finden Sie in unserer Anleitung [IP-Adresse als Alias konfigurieren ](/pages/bare_metal_cloud/virtual_private_servers/configuring-ip-aliasing).
>>
> IPv6 / Gateway
>> 
>> Hier sehen Sie die öffentliche IPv6-Adresse und die zugehörige Gateway-Adresse. Diese werden bei der Installation automatisch an den VPS gebunden. Weitere Informationen finden Sie in [dieser Anleitung](/pages/bare_metal_cloud/virtual_private_servers/configure-ipv6).
>> 
> Sekundärer DNS
>>
>> Diese Funktion ist für das Hosting von DNS-Diensten nützlich. In unserer Anleitung [OVHcloud DNS Server mit einem VPS verwenden](/pages/bare_metal_cloud/virtual_private_servers/adding-secondary-dns-on-vps) wird dies ausführlich beschrieben.


#### Zusammenfassung der Optionen

Diese Optionen beziehen sich auf zusätzliche VPS-Dienste, die über das Kundencenter bestellt werden können.

- Mit der Option `Snapshot` können Sie einen manuellen Snapshot als singulären Wiederherstellungspunkt erstellen.
- Mit der Option `Automatisches Backup` können Sie mehrere Snapshots Ihres VPS speichern (mit Ausnahme zusätzlicher Disks).
- Mit der Option `Zusätzliche Festplatten` können Sie Ihrem VPS externen Speicherplatz zuweisen, um etwa Backup-Daten zu sichern.

Informationen zu den für Ihren Dienst verfügbaren Backup-Lösungen finden Sie auf der [Produktseite](https://www.ovhcloud.com/de/vps/options/) und in den entsprechenden [Anleitungen](/products/bare-metal-cloud-virtual-private-servers-backups).

#### Abo

In diesen Abschnitten finden Sie die wichtigsten Daten zur Abrechnung Ihres Dienstes. Weitere Informationen zu diesem Thema finden Sie in der entsprechenden [Dokumentation](/products/account-and-service-management-managing-billing-payments-and-services).

<a name="hometab"></a>

### VPS-Funktionen im Bereich "Start"

> [!warning]
>
> OVHcloud stellt Ihnen Dienstleistungen zur Verfügung, für deren Konfiguration und Verwaltung Sie die alleinige Verantwortung tragen. Es liegt somit bei Ihnen, sicherzustellen, dass diese ordnungsgemäß funktionieren.
> 
> Wir stellen Ihnen diese Anleitung zur Verfügung, um Ihnen bei der Bewältigung alltäglicher Verwaltungsaufgaben zu helfen. Dennoch empfehlen wir Ihnen, einen [spezialisierten Dienstleister](https://partner.ovhcloud.com/de/directory/) zu kontaktieren oder Ihre Fragen an die [OVHcloud Community](https://community.ovh.com/en/) zu richten, wenn Sie Schwierigkeiten oder Zweifel hinsichtlich der Verwaltung, Nutzung oder Implementierung der Dienste auf einem Server haben. 
>

#### Reinstallation Ihres VPS <a name="reinstallvps"></a>

Reinstallationen können über das Kundencenter durchgeführt werden. Klicken Sie auf `...`{.action} neben **OS / Distribution** und dann auf `VPS reinstallieren`{.action}.

![VPSnewreinstallation](images/2023panel_01.png){.thumbnail}

Wählen Sie im angezeigten Fenster ein Betriebssystem aus der Dropdown-Liste aus. Die angebotenen Optionen sind [mit einem OVHcloud VPS kompatible Images](/pages/public_cloud/compute/image-life-cycle) und unmittelbar nach der Installation funktionsfähig.

Sie können auch einen **SSH-Schlüssel** zur Installation auf dem System auswählen, wenn Sie bereits einen in Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=d) hinterlegt haben. Weitere Informationen hierzu finden Sie in unserer Anleitung [SSH-Schlüssel erstellen und verwenden](/pages/bare_metal_cloud/dedicated_servers/creating-ssh-keys-dedicated).

> [!primary]
>
> **Lizenzen**
>
> Einige proprietäre Betriebssysteme oder Plattformen wie Plesk oder cPanel erfordern Lizenzen, die zusätzliche Kosten verursachen. Lizenzen können über Ihr Kundencenter verwaltet werden. Gehen Sie in den Bereich `Bare Metal Cloud`{.action} und klicken Sie links im Menü auf `Lizenzen`{.action}.
>
> Um ein **Windows** Betriebssystem auf einem VPS betreiben zu können, muss es **im Bestellprozess ausgewählt werden**. Ein VPS mit einem anderen Betriebssystem kann nicht wie oben beschrieben mit Windows neu installiert werden.
>

Eine Fortschrittsanzeige für die Installation wird in Ihrem Kundencenter angezeigt. Dieser Vorgang kann bis zu 30 Minuten dauern.

#### Neustart Ihres VPS <a name="reboot-current-range"></a>

Möglicherweise ist ein Neustart erforderlich, um aktualisierte Konfigurationen anzuwenden oder ein Problem zu beheben. Wenn möglich, führen Sie einen "Soft Reboot" des Servers über die grafische Benutzeroberfläche des Servers (Windows, Plesk, etc.) oder die Befehlszeile aus:

```bash
sudo reboot
```

Sie können jedoch jederzeit einen "Hard Reboot" in Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/de/&ovhSubsidiary=de) durchführen. Klicken Sie im Tab `Start`{.action} auf `...`{.action} neben `Boot` innerhalb **Ihr VPS**. Wählen Sie `VPS neu starten`{.action} und klicken Sie im angezeigten Fenster auf `Bestätigen`{.action}.

![Reboot](images/reboot-vps01.png){.thumbnail}

<a name="connect"></a>

### Verbindung zu Ihrem VPS (GNU/Linux Betriebssystem)

Bei der ersten Installation oder bei der Neuinstallation über das Kundencenter wird automatisch ein Benutzer mit erhöhten Berechtigungen erstellt. Dieser Benutzer wird entsprechend dem Betriebssystem benannt, zum Beispiel "ubuntu" oder "rocky".

Sie erhalten dann eine E-Mail mit Benutzernamen und Passwort, die Sie für die SSH-Verbindung zu Ihrem VPS benötigen. SSH ist ein sicheres Kommunikationsprotokoll, das zum Herstellen verschlüsselter Verbindungen zu einem Remote-Host verwendet wird.

Bei den meisten aktuellen Desktop-Betriebssystemen ist ein **Open SSH** Client nativ installiert. Das bedeutet, dass Sie sich mit Ihren Zugangsdaten schnell und einfach über die jeweils verfügbare Befehlszeilenanwendung (`Terminal`, `Command prompt`, `Powershell` etc.) mit Ihrem VPS verbinden können. Geben Sie folgenden Befehl ein:

```bash
ssh username@IPv4_VPS
```

Beispiel:

```bash
ssh ubuntu@169.254.10.250
```

Sie können auch jede Anwendung eines Drittanbieters verwenden, die mit **Open SSH** kompatibel ist.

Nach der Anmeldung können Sie das vordefinierte Kennwort des aktuellen Benutzers mit folgendem Befehl zu einer Passphrase Iher Wahl ändern:

```bash
passwd
```

Bei einer GNU/Linux-Distribution werden **bei einer Passworteingabeaufforderung Ihre Tastatureingaben nicht angezeigt**.

Geben Sie Ihr aktuelles Kennwort ein, und drücken Sie `Enter`{.action}. Geben Sie die neue Passphrase ein, und geben Sie sie an der nächsten Eingabeaufforderung erneut ein, um sie zu bestätigen.

```console
Changing password for ubuntu.
Current password:
New password: 
Retype new password: 
passwd: password updated successfully
```

> [!warning]
> 
> **Aktivierung des Benutzer-Accounts "root"**
>
> Es ist nicht notwendig, den Benutzer-Account "root" zu verwenden, um mit der Administration Ihres Servers zu beginnen. Dieser Account muss zuerst im Serverbetriebssystem aktiviert werden, damit er verwendet werden kann. Aus Sicherheitsgründen sind außerdem SSH-Verbindungen mit dem Benutzer "root" standardmäßig **deaktiviert**.
> 
Sofern nicht anders vermerkt, können alle in unserer Dokumentation beschriebenen administrativen Aktionen mit dem Standardbenutzer-Account durchgeführt werden, d.h., indem Sie `sudo` gefolgt von dem entsprechenden Befehl eingeben. Weitere Informationen zu diesem Thema finden Sie in unserer Anleitung zum [Konfigurieren von Benutzerkonten und Root-Zugriff auf einem Server](/pages/bare_metal_cloud/dedicated_servers/changing_root_password_linux_ds).
>

**Wir empfehlen die folgende Vorgehensweise als nächste Schritte**:

- Um sich besser mit SSH-Verbindungen vertraut zu machen, lesen Sie unsere Anleitung [Einführung in SSH](/pages/bare_metal_cloud/dedicated_servers/ssh_introduction).
- Ziehen Sie die Verwendung von SSH-Schlüsseln als fortgeschrittene und bequemere Methode für Remote-Verbindungen in Betracht. Nutzen Sie dazu unsere Anleitung [SSH-Schlüssel erstellen und verwenden](/pages/bare_metal_cloud/dedicated_servers/creating-ssh-keys-dedicated).
- Verwenden Sie unsere Anleitung [VPS sichern](/pages/bare_metal_cloud/virtual_private_servers/secure_your_vps), um Ihr System vor automatisierten *Brute-Force*-Angriffen und anderen gängigen Bedrohungen zu schützen.

> [!primary]
>
Wenn Sie eine **Distribution mit Applikation** (Plesk, cPanel, Docker) ausgewählt haben, gelten die allgemeinen Sicherheitsmaßnahmen möglicherweise nicht uneingeschränkt für Ihr System. Nutzen Sie deshalb unsere Anleitungen [Erste Schritte mit vorinstallierten Anwendungen](/pages/bare_metal_cloud/virtual_private_servers/apps_first_steps) und [cPanel auf einem VPS installieren](/pages/bare_metal_cloud/virtual_private_servers/cpanel) sowie die offizielle Dokumentation des jeweiligen Herausgebers.
>

<a name="winconnect"></a>

### Verbindung zu Ihrem Windows VPS

#### Schritt 1: Abschließen der Windows-Installation

Sobald Ihr Windows VPS installiert ist, erhalten Sie eine E-Mail mit dem Namen des `Windows User` (Administrator).

Anschließend müssen Sie die Installation von Windows abschließen, indem Sie die Anzeigesprache, das Tastaturlayout und das Kennwort für den Administrator festlegen.

Verwenden Sie hierzu die KVM-Konsole: Klicken Sie auf den Button `...`{.action} neben dem Namen Ihres VPS im Bereich [Ihr VPS](#yourvps) und wählen Sie `KVM`{.action} aus. Weitere Informationen zu diesem Tool finden Sie in unserer [Anleitung zu KVM](/pages/bare_metal_cloud/virtual_private_servers/using_kvm_for_vps).

Um die Erstkonfiguration Ihres Windows VPS abzuschließen, folgen Sie den in den Tabs aufgeführten Schritten:

> [!tabs]
> 1. **Lokale Einstellungen**
>>
>> Sobald die KVM-Sitzung erstellt ist, können Sie die Erstkonfiguration von Windows abschließen, indem Sie **Land/Region**, die bevorzugte **Windows-Sprache** und **Tastaturlayout** konfigurieren. Klicken Sie dann unten rechts auf `Next`{.action}.<br><br>
>>![KVM](/pages/assets/screens/other/windows/windows_locale.png){.thumbnail}<br>
>>
> 2. **Administratorpasswort**
>>
>> Geben Sie ein Passwort für den Windows `Administrator` / `admin` ein und bestätigen Sie. Klicken Sie dann auf `Finish`{.action}.<br><br>
>>![KVM](/pages/assets/screens/other/windows/windows_admin.png){.thumbnail}<br>
>>
> 3. **Anmeldebildschirm**
>>
>> Die Einstellungen werden angewendet, und der Anmeldebildschirm wird angezeigt. Klicken Sie auf `Send CtrlAltDel`{.action} oben rechts, um sich einzuloggen.<br><br>
>>![KVM](/pages/assets/screens/other/windows/windows_vnc.png){.thumbnail}<br>
>>
> 4. **Administrator-Login**
>>
>> Geben Sie das im vorherigen Schritt erstellte Passwort des Accounts `Administrator` ein und klicken Sie auf den `Pfeil`.<br><br>
>>![KVM](/pages/assets/screens/other/windows/windows_login.png){.thumbnail}<br>
>>

#### Schritt 2: Verbindung mit dem Server über RDP

Von Ihrem lokalen Windows-Gerät aus können Sie sich über die Client-Anwendung `Remote Desktop Connection` mit dem VPS verbinden.

![Windows Remote](/pages/assets/screens/other/windows/windows_rdp.png){.thumbnail}

Geben Sie die IPv4-Adresse Ihres VPS und dann Ihre Kennung und Passphrase ein. In der Regel wird eine Warnmeldung angezeigt, in der Sie aufgefordert werden, die Verbindung aufgrund eines unbekannten Zertifikats zu bestätigen. Klicken Sie zum Login auf `Ja`{.action}.

Sie können auch jede RDP-kompatible Anwendung eines Drittanbieters verwenden. Dies ist notwendig, wenn Windows nicht auf Ihrem lokalen Gerät installiert ist.

> [!primary]
>
Wenn bei diesem Verfahren Probleme auftreten, überprüfen Sie, ob Remoteverbindungen (RDP) auf Ihrem Gerät zugelassen sind, indem Sie die Systemeinstellungen, Firewallregeln und mögliche Netzwerkeinschränkungen überprüfen.
>

#### Aktivieren der Windows Startprotokolle (optional)

Windows Boot Logs können bei der Diagnose von Serverstörungen hilfreich sein.

Um sie zu aktivieren, folgen Sie den in den Tabs aufgeführten Schritten:

> [!tabs]
> 1. **Verbindung mit Server herstellen**
>>
>> Vebinden Sie sich mit Ihrem Server über Remote Desktop oder [KVM](/pages/bare_metal_cloud/virtual_private_servers/using_kvm_for_vps).<br>
>>
> 2. **Tool "Ausführen" öffnen**
>>
>> Öffnen Sie das Windows-Startmenü und klicken Sie auf `Run`{.action}.<br><br>
>>![KVM](/pages/assets/screens/other/windows/windows_start_run.png){.thumbnail}<br>
>>
> 3. **"msconfig" öffnen**
>>
>> Geben Sie "msconfig" ein und klicken Sie auf `OK`{.action}.<br><br>
>>![KVM](/pages/assets/screens/other/windows/windows_msconfig.png){.thumbnail}<br>
>>
> 4. **Logs aktivieren**
>>
>> Aktivieren Sie im neuen Fenster die Option `Boot log`. Klicken Sie auf `OK`{.action}.<br><br>
>>![KVM](/pages/assets/screens/other/windows/windows_log.png){.thumbnail}<br>
>>

Beim nächsten Hochfahren des Servers werden die Logs in einer Datei im Format `.txt` gespeichert. Der Dateipfad lautet: `C:\Windows\ntbtlog.txt`.

Um die in der Datei gespeicherten Protokolle im Rescue-Modus einzusehen, folgen Sie der [Anleitung zum Rescue-Modus für VPS](/pages/bare_metal_cloud/virtual_private_servers/rescue).

<a name="secure"></a>

### Absicherung Ihres VPS

Als Administrator Ihres VPS sind Sie für die Sicherheit der darauf gehosteten Anwendungen und Daten verantwortlich.

In unserer Anleitung [VPS absichern](/pages/bare_metal_cloud/virtual_private_servers/secure_your_vps) finden Sie grundlegende Hinweise zum Schutz Ihres Systems.

> [!primary]
>
Wenn Sie eine **Distribution mit Applikation** (Plesk, cPanel, Docker) ausgewählt haben, gelten die allgemeinen Sicherheitsmaßnahmen möglicherweise nicht uneingeschränkt für Ihr System. Nutzen Sie deshalb unsere Anleitungen [Erste Schritte mit vorinstallierten Anwendungen](/pages/bare_metal_cloud/virtual_private_servers/apps_first_steps) und [cPanel auf einem VPS installieren](/pages/bare_metal_cloud/virtual_private_servers/cpanel) sowie die offizielle Dokumentation des jeweiligen Herausgebers.
>

<a name="domain"></a>

### Domainnamen zuweisen

Um einen VPS über das Web erreichbar zu machen, wird ihm in der Regel ein Domainname über die DNS-Konfiguration zugewiesen. Wenn Sie Ihren Domainnamen bei OVHcloud verwalten, finden Sie Anweisungen in unserer Anleitung [Bearbeiten der OVHcloud DNS-Zone](/pages/web_cloud/domains/dns_zone_edit).

#### Domainnamen mit einem SSL Zertifikat absichern

Nachdem Ihr VPS eingerichtet ist, können Sie zusätzlich Ihren Domainnamen und Ihre Website absichern. Dazu ist ein SSL-Zertifikat erforderlich, das den Internet-Zugriff zum VPS über *HTTPS* anstelle von unsicherem *HTTP* ermöglicht.

Dieses SSL-Zertifikat kann manuell direkt auf dem VPS installiert werden. Verwenden Sie dazu die offizielle Dokumentation Ihrer VPS-Distribution.

OVHcloud bietet auch die Lösung SSL Gateway zur Automatisierung dieses Prozesses an. Weitere Informationen finden Sie auf der [Produktseite](https://www.ovh.de/ssl-gateway/) und in unserer [Dokumentation](/products/web-cloud-ssl-gateway).

## Weiterführende Informationen

[VPS FAQ](/pages/bare_metal_cloud/virtual_private_servers/vps-faq)

[SSH Einführung](/pages/bare_metal_cloud/dedicated_servers/ssh_introduction)

[VPS absichern](/pages/bare_metal_cloud/virtual_private_servers/secure_your_vps)

Für den Austausch mit unserer Community gehen Sie auf <https://community.ovh.com/en/>.
