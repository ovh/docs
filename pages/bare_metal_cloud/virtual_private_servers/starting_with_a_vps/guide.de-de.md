---
title: Einstieg in einen VPS
excerpt: "Erfahren Sie, wie Sie einen VPS in Ihrem OVHcloud Kundencenter verwalten und die ersten Schritte seiner Nutzung entdecken, einschließlich Fernverbindungen und Sicherheitsmaßnahmen"
updated: 2026-01-21
---

## Ziel

Ein Virtual Private Server (VPS) ist ein Server, den Sie vollständig verwalten.

Im Gegensatz zu einem verwalteten Webhosting-Dienst sind Sie für folgende Aufgaben verantwortlich:

- Konfiguration: Einrichtung und Konfiguration Ihres Servers.
- Sicherheit: Schutz Ihres VPS vor Angriffen.
- Wartung: Aktualisierung und Betrieb des Servers.
- Backups: Regelmäßige Tests Ihrer Backups, um die Datenerholung zu gewährleisten.

## Voraussetzungen

- Sie haben einen [VPS](/links/bare-metal/vps) in Ihrem Kunden-Account.

<!-- CP-NAV-START:baremetal-vps -->
---

### Zugriff auf das OVHcloud Kundencenter

- **Direkter Link:** [VPS-Verwaltung](/links/control-panel/baremetal-vps)
- **Navigationspfad:** `Bare Metal Cloud`{.action} > `Virtual Private Server`{.action} > Wählen Sie Ihren VPS aus

---
<!-- CP-NAV-END:baremetal-vps -->

## In der praktischen Anwendung

Um die Verwaltungsoberfläche Ihres VPS und die verfügbaren Aktionen im OVHcloud Kundencenter zu verstehen, konsultieren Sie unsere [Anleitung zur Einführung in das OVHcloud Kundencenter für VPS](/pages/bare_metal_cloud/virtual_private_servers/understand-vps-control-panel).

**Inhaltsübersicht**

- [Schritt 1: Erste Verbindung](#initial-connection)
	- [GNU/Linux-Distribution](#linuxconnect)
	- [Windows-Distribution](#winconnect)
- [Schritt 2: Verwenden des Root Account](#rootaccount)
- [Schritt 3: Sicherung Ihres VPS](#secure)
- [Schritt 4: Verknüpfen eines Domainnamens](#domain)

### Schritt 1: Erste Verbindung <a name="initial-connection"></a>

#### Linux: <a name="linuxconnect"></a>

Wenn Sie sich zum ersten Mal mit Ihrem VPS verbinden, beachten Sie, dass **das Account, mit dem Sie sich verbinden, nicht `root` ist**.

Wir erstellen aus Sicherheitsgründen und zum Schutz der Dienste unserer Kunden automatisch **einen Benutzernamen, der mit dem von Ihnen ausgewählten Betriebssystem verknüpft ist**, sobald Sie Ihre Bestellung abgeschlossen haben.

Der Benutzername, den Sie für die Verbindung verwenden müssen, ist in der E-Mail angegeben, die Sie bei der Lieferung Ihres VPS erhalten.

Zum Beispiel:

- Für **Debian** ist der Benutzername **debian**.
- Für **Ubuntu** ist der Benutzername **ubuntu**.
- Für **Rocky Linux** ist der Benutzername **rocky**.

Das vorübergehende Passwort für dieses Account wird Ihnen über einen sicheren Link in der Liefer-E-Mail gesendet.

> [!primary]
> **Wichtige Hinweis**: bei Ihrer **ersten Verbindung** werden Sie aufgefordert, **dieses vorübergehende Passwort zu ändern**.
>
> Sobald das Passwort geändert wurde, **wird die Sitzung automatisch beendet**. Dies ist normalerweise. Sie müssen sich dann **erneut mit Ihrem neuen Passwort verbinden**.

```bash
ssh username@IPv4_VPS
```

- Ersetzen Sie "username" durch den Benutzer, der Ihrem Betriebssystem entspricht.
- Ersetzen Sie "IPv4_VPS" durch die IP-Adresse, die in Ihrer Liefer-E-Mail angezeigt wird.

#### Windows: <a name="winconnect"></a>

##### Abschluss der Windows-Installation

Sobald das Windows-Betriebssystem installiert ist, erhalten Sie eine E-Mail mit dem Standardbenutzernamen `Windows user`.

Sie müssen anschließend den Windows-Installationsprozess abschließen, indem Sie Ihre Anzeigesprache, Tastaturbelegung und Administratorpasswort einstellen.

Dies erfolgt über die VPS-KVM-Konsole: Gehen Sie auf den Tab `Start`{.action}, klicken Sie auf den `...`{.action}-Button neben dem Namen Ihres VPS in der **Ihr VPS**-Sektion und wählen Sie `KVM`{.action}.

Weitere Informationen zu diesem Tool finden Sie in unserer "[KVM-Anleitung](/pages/bare_metal_cloud/virtual_private_servers/using_kvm_for_vps)".

Um die Anfangskonfiguration Ihres Windows VPS abzuschließen, folgen Sie den unten stehenden Schritten und navigieren Sie durch die Tabs:

> [!tabs]
> 1. **Regionaleinstellungen**
>>
>> Sobald die KVM-Sitzung hergestellt ist, vervollständigen Sie die Anfangskonfiguration von Windows, indem Sie Ihr **Land/Region**, Ihre bevorzugte **Windows-Sprache** und **Tastaturbelegung** einstellen. Klicken Sie anschließend auf die Schaltfläche `Weiter`{.action} in der unteren rechten Ecke.
>>
>> ![KVM](/pages/assets/screens/other/windows/windows_locale.png){.thumbnail}
>>
> 2. **Administratorpasswort**
>>
>> Legen Sie ein Passwort für Ihr Windows `Administrator`/`admin`-Account fest, bestätigen Sie es und klicken Sie anschließend auf `Fertig`{.action}.
>>
>> ![KVM](/pages/assets/screens/other/windows/windows_admin.png){.thumbnail}
>>
> 3. **Anmeldeschirm**
>>
>> Windows wird Ihre Einstellungen anwenden und anschließend den Anmeldeschirm anzeigen. Klicken Sie auf die Schaltfläche `Send CtrlAltDel`{.action} in der oberen rechten Ecke, um sich anzumelden.
>>
>> ![KVM](/pages/assets/screens/other/windows/windows_vnc.png){.thumbnail}
>>
> 4. **Administrator-Login**
>>
>> Geben Sie das `Administrator`-Passwort ein, das Sie im vorherigen Schritt erstellt haben, und klicken Sie auf das `Pfeil`-Symbol.
>>
>> ![KVM](/pages/assets/screens/other/windows/windows_login.png){.thumbnail}
>>

##### Verbindung mit dem Server über RDP

Auf Ihrem lokalen Windows-Gerät können Sie die Anwendung "Remote Desktop Connection" verwenden, um sich mit dem VPS zu verbinden.

![Windows remote](/pages/assets/screens/other/windows/windows_rdp.png){.thumbnail}

Geben Sie die IPv4-Adresse Ihres VPS, Ihren Benutzernamen und Ihr Passwort ein. Normalerweise erscheint eine Warnung, die Sie auffordert, die Verbindung aufgrund eines unbekannten Zertifikats zu bestätigen. Klicken Sie auf `Ja`{.action}, um sich zu verbinden.

Sie können auch jede RDP-kompatible Anwendung eines Drittanbieters verwenden. Dies ist erforderlich, wenn Windows nicht auf Ihrem lokalen Gerät installiert ist.

> [!primary]
>
Wenn bei diesem Verfahren Probleme auftreten, überprüfen Sie, ob Remoteverbindungen (RDP) auf Ihrem Gerät zugelassen sind, indem Sie die Systemeinstellungen, Firewallregeln und mögliche Netzwerkeinschränkungen überprüfen.
>

Um bei Problemen die Fehlerbehebung zu erleichtern, empfehlen wir Ihnen, **Windows Boot Logs zu aktivieren**, indem Sie unsere [dazugehörige Anleitung](/pages/bare_metal_cloud/virtual_private_servers/windows-boot-logs) befolgen.

### Schritt 2: Verwenden des root-Accounts (optional, aber empfohlen) <a name="rootaccount"></a>

Der Benutzer "root" ist standardmäßig deaktiviert, um die Sicherheit Ihres Produkts zu gewährleisten.

Für administrative Aufgaben verwenden Sie sudo von Ihrem Hauptbenutzer aus:

```bash
sudo command
```

Wenn Sie root aktivieren möchten:

```bash
sudo passwd root
```

### Schritt 3: Sicherung Ihres VPS <a name="secure"></a>

Wenn Sie Ihren VPS sichern möchten, empfehlen wir Ihnen, unsere Anleitung "[Sicherung eines VPS](/pages/bare_metal_cloud/virtual_private_servers/secure_your_vps)" zu befolgen. Diese Anleitung führt Sie durch den Prozess und beschreibt folgende Aktionen:

- Aktualisierung des Systems.
- Ändern des Standard-SSH-Port.
- Konfiguration der internen Firewall.
- Installation von fail2ban, um wiederholte Anmeldeversuche zu blockieren.
- Sicherung Ihres Systems und Ihrer Daten.

### Schritt 4: Verknüpfen eines Domainnamens (optional, aber empfohlen) <a name="domain"></a>

Um einen VPS über das Web erreichbar zu machen, wird ihm in der Regel ein Domainname über die DNS-Konfiguration zugewiesen.

Dazu empfehlen wir Ihnen, folgende Aktionen auszuführen:

- [Bearbeiten Sie die DNS-Zone](/pages/web_cloud/domains/dns_zone_edit), indem Sie die erforderlichen Einträge hinzufügen, um den Domainnamen auf die IPv4-Adresse Ihres VPS zu verweisen.
- [Aktivieren Sie ein kostenloses SSL-Zertifikat (Let's Encrypt)](/pages/bare_metal_cloud/virtual_private_servers/install-ssl-certificate), um den Zugriff auf Ihre Webseiten über HTTPS zu sichern.

## Weiterführende Informationen

[VPS FAQ](/pages/bare_metal_cloud/virtual_private_servers/vps-faq)

[SSH-Einführung](/pages/bare_metal_cloud/dedicated_servers/ssh_introduction)

[Sicherung eines VPS](/pages/bare_metal_cloud/virtual_private_servers/secure_your_vps)

[So rufen Sie den Server wieder auf, wenn das Benutzerpasswort verloren gegangen ist](/pages/bare_metal_cloud/dedicated_servers/replacing-user-password)

Treten Sie unserer [User Community](/links/community) bei.