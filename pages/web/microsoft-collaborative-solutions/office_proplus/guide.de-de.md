---
title: Remote Desktop mit Microsoft 365 Apps verwenden
legacy_guide_number: 2339
slug: office365-proplus-remotedesktopdienste
excerpt: Erfahren Sie hier, wie Sie Microsoft 365 Apps auf einem Remote- (RDS) oder einem gemeinsam genutzten Desktop verwenden
section: Office
order: 4
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie beim geringsten Zweifel die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button «Mitmachen» auf dieser Seite.
>

**Letzte Aktualisierung am 06.09.2021**

## Ziel

Sie haben die Möglichkeit, die im Paket "Microsoft 365 Apps" enthaltene Software-Suite auf einem Remote-Desktop oder gemeinsam genutzten Gerät zu verwenden. Hiernei ist das in dieser Anleitung beschriebene Installationsverfahren anzuwenden.

**Diese Anleitung erklärt, wie Sie Microsoft 365 Apps auf einem Remote-Computer (RDS) oder einem gemeinsam genutzten Gerät verwenden.**

## Voraussetzungen

- Sie verfügen über eine "Microsoft 365 Apps for enterprise" Lizenz (ehemals Office 365 ProPlus).
- Sie verwenden Microsoft Windows über einen Remote-Desktop (**R**emote **D**esktop **S**ervices).

> [!warning]
>
> Die Lizenz "Microsoft 365 Apps for business" ist mit der Verwendung über RDS und geteilten Computern nicht kompatibel.
> 

## In der praktischen Anwendung

Diese Anleitung basiert auf den Informationen in der Microsoft-Dokumentation "[Bereitstellen von Microsoft 365 Apps mithilfe der Remotedesktopdienste](https://docs.microsoft.com/de-de/deployoffice/deploy-microsoft-365-apps-remote-desktop-services)".

> [!warning]
>
> OVHcloud stellt Ihnen Dienstleistungen zur Verfügung, für deren Konfiguration und Verwaltung Sie die alleinige Verantwortung tragen. Es liegt somit bei Ihnen, sicherzustellen, dass diese ordnungsgemäß funktionieren.
> 
> Wir stellen Ihnen diese Anleitung zur Verfügung, um Ihnen bei der Bewältigung alltäglicher Verwaltungsaufgaben zu helfen. Dennoch empfehlen wir Ihnen, falls Sie Hilfe brauchen, einen [spezialisierten Dienstleister](https://partner.ovhcloud.com/de/directory/) und/oder den Herausgeber des Dienstes zu kontaktieren. Für externe Dienstleistungen bietet OVHcloud leider keine Unterstützung. Weitere Informationen finden Sie am [Ende dieser Anleitung](#gofurther).
> 

### Methode 1: Manuelle Konfiguration

Die Installation von "Microsoft 365 Apps for enterprise" auf einem geteilten Computer mit Remote Desktop (RDS) funktioniert nicht ohne eine bestimmte Konfiguration. Ohne diese erhalten Sie folgende Nachricht:

![E-Mails](images/4717.png){.thumbnail}

> [!primary]
>
> Wenn Sie bereits die Lizenz Office 365 Proplus installiert haben, müssen Sie diese erst **entfernen**.
>

- Nach dem Entfernen [klicken Sie hier](https://www.microsoft.com/en-gb/download/details.aspx?id=49117){.external}, um das Microsoft 365 Deployment-Tool herunterzuladen.


- **Starten** Sie das Deployment-Tool.


- Bearbeiten Sie die Datei `configuration.xml`.

![365](images/4720.png){.thumbnail}

Bearbeiten Sie die Datei `configuration.xml` und entkommentieren Sie folgende Zeilen:

```xml
Display Level="None" AcceptEULA="True"
Property Name="SharedComputerLicensing" Value="1"
```

Wenn diese Zeilen dort nicht existieren, können Sie sie kopieren und einfügen.

- Speichern Sie die vorgenommenen Änderungen. Öffnen Sie anschließend ein Powershell-Terminal und führen Sie aus dem Ordner, in dem sich die Datei `configuration.xml` befindet die folgenden Befehle aus:

```powershell
./setup.exe /download configuration.xml
```

```powershell
./setup.exe /configure configuration.xml
```

> [!primary]
>
> Die Ausführung kann einige Minuten in Anspruch nehmen.

- Öffnen Sie den Windows Registry-Editor, indem Sie `Regedit` ausführen, und gehen Sie zu folgendem Pfad:

```powershell
HKEY\_LOCAL\_MACHINE\\SOFTWARE\\Microsoft\\Office\\ClickToRun\\Configuration
```

- Überprüfen Sie folgenden Schlüssel:

```powershell
SharedComputerLicensing
```

Stellen Sie sicher, dass er den Wert `1` hat. Wenn dieser Schlüssel nicht existiert, können Sie ihn erstellen.

![E-Mails](images/4723.png){.thumbnail}

- Wenn Sie eine Anwendung der Office 365 Suite starten, werden Sie aufgefordert, Ihren Benutzernamen und Passwort anzugeben.

![E-Mails](images/4724.png){.thumbnail}

- Sie können nun Ihre Office 365 Suite von Ihrem geteilten Computer aus unter Verwendung der Remote Desktop-Dienste (RDS) nutzen.


![E-Mails](images/4726.png){.thumbnail}


## Weiterführende Informationen <a name="gofurther"></a>

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
