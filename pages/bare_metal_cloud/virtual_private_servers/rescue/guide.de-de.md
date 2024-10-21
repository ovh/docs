---
title: Rescue-Modus für einen VPS aktivieren und verwenden
excerpt: Erfahren Sie hier, wie Sie den OVHcloud Rescue-Modus für Ihren VPS zur Fehlerbehebung und zur Durchführung von Systemprüfungen verwenden
updated: 2024-02-19
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie im Zweifelsfall die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button "Beitragen" auf dieser Seite.
>

## Ziel

Der Rescue-Modus ist ein von OVHcloud bereitgestelltes Tool, um Ihren VPS über ein temporäres Betriebssystem zu starten. Sie können dann auf Ihr System zugreifen, um Diagnoseaufgaben auszuführen und verschiedene Probleme zu beheben, beispielsweise:

- [Zurücksetzen von Benutzerkennwörtern, um den Zugriff wiederherzustellen](/pages/bare_metal_cloud/dedicated_servers/replacing-user-password)
- Netzwerkprobleme diagnostizieren
- Reparatur eines fehlerhaften Betriebssystems
- Fehlkonfiguration der Firewall korrigieren
- Leistung der Datenträger testen

Wenn Sie ein Problem mit Ihrem System feststellen, können Sie mithilfe des Rescue-Modus herausfinden, ob es mit einer auf dem VPS installierten Software zusammenhängt oder von einem tiefergehenden Fehler verursacht wird. Bevor Sie sich an unsere Support-Teams wenden, empfehlen wir Ihnen, den Rescue-Modus zu verwenden, um Testergebnisse zu erfassen und Softwarefehler auszuschließen.

> [!warning]
>
> Wenn Sie Dienste auf Ihrem VPS im laufenden Betrieb haben, wird der Rescue-Modus diese Dienste unterbrechen, da der VPS in das Hilfsbetriebssystem neu gestartet wird.
> 

**Diese Anleitung erklärt, wie Sie den Rescue-Modus über Ihr OVHcloud Kundencenter aktivieren und damit auf Ihr VPS-Dateisystem zugreifen.**

## Voraussetzungen

- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de).
- Sie haben einen [VPS](https://www.ovhcloud.com/de/vps/) in Ihrem OVHcloud Kunden-Account.

> [!warning]
>
> OVHcloud stellt Ihnen Dienstleistungen zur Verfügung, für deren Konfiguration und Verwaltung Sie die alleinige Verantwortung tragen. Es liegt somit bei Ihnen, sicherzustellen, dass diese ordnungsgemäß funktionieren.
> 
> Wir stellen Ihnen diese Anleitung zur Verfügung, um Ihnen bei der Bewältigung alltäglicher Verwaltungsaufgaben zu helfen. Dennoch empfehlen wir Ihnen, einen [spezialisierten Dienstleister](https://partner.ovhcloud.com/de/directory/) zu kontaktieren oder Ihre Fragen an die [OVHcloud Community](https://community.ovh.com/en/) zu richten, wenn Sie Schwierigkeiten oder Zweifel hinsichtlich der Verwaltung, Nutzung oder Implementierung der Dienste auf einem Server haben. 
>

## In der praktischen Anwendung

### Rescue-Modus aktivieren

Loggen Sie sich in Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) ein, gehen Sie in den Bereich `Bare Metal Cloud`{.action} und wählen Sie Ihren VPS unter `Virtual Private Server`{.action} aus.

Klicken Sie im Tab `Start`{.action} auf `...`{.action} neben "Boot" im Bereich **Ihr VPS**.

![Rescue-Modus](images/rescue_new.png){.thumbnail}

Wählen Sie Im Menü `Neustart im Rescue-Modus`{.action}.

Wenn Ihr Kundencenter abweichend angezeigt wird, lesen Sie unsere Anleitung "[Legacy VPS verwalten](/pages/bare_metal_cloud/virtual_private_servers/vps_legacy_control_panel)".

### Verwendung des Rescue-Modus

Nach dem Neustart zeigt eine Statusleiste den Fortschritt des Tasks an. Bitte beachten Sie, dass der Boot-Vorgang einige Minuten dauern kann.


> [!primary]
>
> Sie erhalten eine automatische E-Mail mit den SSH-Login-Daten, um im Rescue-Modus auf den VPS zuzugreifen. Bitte warten Sie auf den Eingang der E-Mail, bevor Sie weitere Maßnahmen ergreifen. Diese E-Mail ist auch in Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/de/&ovhSubsidiary=de) verfügbar. Klicken Sie in der rechten oberen Ecke auf den mit Ihrem OVHcloud Kunden-Account assoziierten Namen und wählen Sie `E-Mails von OVHcloud`{.action} aus.
>

Anschließend müssen Sie [über SSH auf Ihren Server zugreifen](/pages/bare_metal_cloud/dedicated_servers/ssh_introduction), indem Sie das für den Rescue-Modus generierte temporäre Root-Passwort verwenden.

Beispiel:

```bash
ssh root@vps-x11x11xyy.vps.ovh.net
```

```console
root@vps-x11x11xyy.vps.ovh.net's password:
```

> [!warning]
>
> Ihr SSH-Client wird die Verbindung wahrscheinlich zunächst blockieren, weil der ECDSA *Fingerprint* nicht mehr übereinstimmt. Dies ist normal, da der Rescue-Modus seinen eigenen temporären SSH-Server verwendet.
>
> Eine Möglichkeit, dieses Problem zu umgehen, besteht im "Auskommentieren" des VPS *Fingerprint*, indem Sie in der Datei `known_hosts` der entsprechenden Zeile ein `#` voranstellen. Vergessen Sie nicht, diese Änderung rückgängig zu machen, bevor Sie den Netboot wieder in den "normalen" Modus versetzen.<br>Sie können auch einfach die Zeile aus der Datei löschen. Ihr SSH-Client fügt dann einen neuen *Fingerprint*-Eintrag für den VPS hinzu, sobald die Verbindung erneut hergestellt wird. Wenn Sie detaillierte Instruktionen benötigen, konsultieren Sie unsere Anleitung "[Einführung in SSH](/pages/bare_metal_cloud/dedicated_servers/ssh_introduction#login)".
>

Für die meisten Änderungen an Ihrem Server über SSH im Rescue-Modus muss die Systempartition gemountet werden.

Überprüfen Sie nach dem Verbinden die angeschlossenen Datenträger mit folgendem Befehl:

```bash
lsblk
```

Das Ergebnis wird ähnlich der folgenden Beispielausgabe aussehen:

```console
NAME    MAJ:MIN RM   SIZE RO TYPE MOUNTPOINTS
sda       8:0    0   2.9G  0 disk
└─sda1    8:1    0   2.9G  0 part /
sdb       8:16   0   160G  0 disk
├─sdb1    8:17   0 159.9G  0 part
├─sdb14   8:30   0     4M  0 part
└─sdb15   8:31   0   106M  0 part
```

Im Rescue-Modus ist `sda` die Disk und `sda1` die primäre Partition des Rescue-Modus, gemountet unter `/`.

In diesem Beispiel ist die primäre Disk des VPS `sdb` und die Systempartition ist `sdb1` (an der Größe ersichtlich).

Mounten Sie diese Partition mit dem folgenden Befehl:

```bash
mount /dev/sdb1 /mnt/
```

Ihre Dateien sind nun über den Mountpunkt `/mnt` verfügbar:

```bash
cd /mnt
```

```bash
ls
```

Ihr Dateisystem sollte dann angezeigt werden:

```console
bin  boot  dev  etc  home  lib  lib32  lib64  libx32  lost+found  media  mnt  opt  proc  root  run  sbin  snap  srv  sys  tmp  usr  var
```

Bevor Sie diese Partition bearbeiten können, müssen Sie sie jedoch für Schreibzugriff öffnen. Verwenden Sie hierzu folgenden Befehl:

```bash
chroot /mnt
```

Sie können jetzt Änderungen auf Ihr System anwenden, zum Beispiel [Benutzerkennwörter und SSH-Schlüssel zurücksetzen](#gofurther).

Wenn Ihre Aktionen im Rescue-Modus abgeschlossen sind, starten Sie den VPS im "normalen" Modus über Ihr Kundencenter neu.

![Rescue Mode Control Panel](images/rescue_exit.png){.thumbnail}

### Boot-Probleme beheben

Wenn beim Neustart eines VPS ein Fehler auftritt, folgen Sie diesen Schritten:

- Überprüfen Sie die KVM-Konsole in Ihrem Kundencenter, um relevante Informationen darüber zu erhalten, warum der VPS nicht gestartet werden kann. Weitere Informationen zu dieser Funktion finden Sie in unserer [KVM-Anleitung](/pages/bare_metal_cloud/virtual_private_servers/using_kvm_for_vps).
- Wenn in KVM angezeigt wird, dass der VPS festhängt oder die Disk nicht finden kann, stellen Sie sicher, dass [Boot-Logs aktiviert sind](/pages/bare_metal_cloud/virtual_private_servers/bootlog_display_kvm). Leiten Sie dann die relevanten Logs zur weiteren Untersuchung an unsere Support-Teams weiter, indem Sie [eine Support-Anfrage erstellen](https://help.ovhcloud.com/csm?id=csm_get_help).

<a name="gofurther"></a>

## Weiterführende Informationen

[Einführung in SSH](/pages/bare_metal_cloud/dedicated_servers/ssh_introduction)

[Wiederherstellen des Serverzugriffs bei Passwortverlust](/pages/bare_metal_cloud/dedicated_servers/replacing-user-password)

[Austauschen eines SSH-Schlüsselpaars](/pages/bare_metal_cloud/dedicated_servers/replacing-lost-ssh-key)

[Dateisystem auf einem VPS überprüfen](/pages/bare_metal_cloud/virtual_private_servers/check-filesystem)

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
