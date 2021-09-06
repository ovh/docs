---
title: Remote Desktop mit Microsoft 365 Apps verwenden
legacy_guide_number: 2339
slug: office365-proplus-remotedesktopdienste
excerpt: So installieren und verwenden Sie Microsoft 365 Apps auf einem entfernten Desktop (RDS) oder einem geteilten Computer
section: Office
order: 4
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie beim geringsten Zweifel die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button «Mitmachen» auf dieser Seite.
>

**Stand 06.09.2021**

## Ziel

Sie möchten die im Microsoft 365 Apps Paket enthaltene Software-Suite auf einer entfernten oder geteilten Maschine verwenden. Dazu ist das in dieser Anleitung beschriebene Installationsverfahren anzuwenden.

**So installieren und verwenden Sie Microsoft 365 Apps auf einem entfernten Desktop (RDS) oder einem geteilten Computer.**

## Voraussetzungen

- Sie verfügen über eine Microsoft 365 apps for Enterprise Lizenz (früher Office 365 ProPlus)
- Microsoft Windows über einen Remote-Desktop (**R**emote **D**esktop **S**ervices) verwenden

> [!warning]
>
> Die Microsoft 365 Apps for Business Lizenz ist mit der Verwendung über RDS und geteilten Computern nicht kompatibel.
> 

## In der praktischen Anwendung

Diese Anleitung basiert auf den Informationen, die in der Microsoft [Bereitstellen von Microsoft 365 Apps mithilfe der Remotedesktopdienste](https://docs.microsoft.com/de-de/deployoffice/deploy-microsoft-365-apps-remote-desktop-services).

> [!warning]
>
> OVHcloud stellt Ihnen Dienstleistungen zur Verfügung, für deren Konfiguration und Verwaltung Sie die alleinige Verantwortung tragen. Es liegt somit bei Ihnen, sicherzustellen, dass diese ordnungsgemäß funktionieren.
> 
> Wir stellen Ihnen diese Anleitung zur Verfügung, um Ihnen bei der Bewältigung alltäglicher Verwaltungsaufgaben zu helfen. Dennoch empfehlen wir Ihnen, falls Sie Hilfe brauchen, einen spezialisierten Dienstleister und/oder den Herausgeber des Dienstes zu kontaktieren. Für externe Dienstleistungen bietet OVHcloud leider keine Unterstützung. Genauere Informationen finden Sie im Teil „Weiterführende Informationen" dieser Anleitung.
> 

### Methode 1: Manuelle Konfiguration

Die Installation eines Microsoft 365 Apps for Enterprise Angebots auf einem geteilten Computer mit Remotedesktop-Diensten (RDS) funktioniert nicht ohne eine bestimmte Konfiguration. Ohne diese Einstellung erhalten Sie folgende Nachricht:

![E-Mails](images/4717.png){.thumbnail}

> [!primary]
>
> Wenn Sie Ihre Office 365 Proplus Lizenz bereits installiert haben, müssen Sie sich **entledigen**.
>

- Wenn Sie Ihre Dessert-Lizenz haben, [klicken Sie bitte hier](https://www.microsoft.com/en-us/download/details.aspx?id=49117){.external}, um das Deployment-Tool Microsoft 365 herunterzuladen.


- **Führen** Sie das Deployment-Tool auf Ihrer Maschine aus.


- Bearbeiten Sie die `configuration.xml`.

![365](images/4720.png){.thumbnail}

Bearbeiten Sie die Datei `configuration.xml` und kommentieren Sie folgende Zeilen:

```bash
Display Level="None" AcceptEULA="True"
Property Name="SharedComputerLicensing" Value="1"
```

Wenn diese Zeilen nicht existieren, können Sie sie in die Datei kopieren/einfügen.

- Speichern Sie die vorgenommenen Änderungen. Öffnen Sie anschließend ein Powershell-Terminal und führen Sie beide Befehle aus dem Ordner aus, in dem sich die Datei `configuration.xml befindet:

```powershell
./setup.exe /download configuration.xml
```

und

```powershell
./setup.exe /configure configuration.xml
```
> [!primary]
>
> Die Ausführung dieser Bestellungen kann einige Minuten in Anspruch nehmen.

- Öffnen Sie den Editor des Windows-Registers, indem Sie "Regedit" ausführen, und folgen Sie dem folgenden Pfad:

```bash
HKEY\_LOCAL\_MACHINE\\SOFTWARE\\Microsoft\\Office\\ClickToRun\\Configuration
```

- Überprüfen Sie folgenden Schlüssel:

```bash
SharedComputerLicensing
```
Stellen Sie sicher, dass er eins `hat`. Wenn dieser Schlüssel nicht existiert, können Sie ihn erstellen.

![E-Mails](images/4723.png){.thumbnail}

- Wenn Sie eine Anwendung der Office 365 Suite starten, werden Sie aufgefordert, Ihren Benutzernamen und Passwort anzugeben.

![E-Mails](images/4724.png){.thumbnail}

- Sie können nun Ihre Office 365 Suite von Ihrem geteilten Computer aus unter Verwendung der Remotedesktop-Dienste (RDS) verwenden.


![E-Mails](images/4726.png){.thumbnail}


## Weiterführende Informationen

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
