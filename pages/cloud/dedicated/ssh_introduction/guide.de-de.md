---
title: Einführung in SSH
slug: ssh-einfuehrung
excerpt: Erfahren Sie hier, wie Sie SSH-Verbindungen verwenden, um auf Ihren Server zuzugreifen
section: Erste Schritte
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie beim geringsten Zweifel die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button «Mitmachen» auf dieser Seite.
>

**Letzte Aktualisierung am 08.06.2022**

## Ziel

Das Kommunikationsprotokoll SSH (*Secure Shell*) ist das meistgenutzte Verfahren zum Aufbau verschlüsselter Verbindungen zwischen Hosts über unsichere Netzwerke. Das OpenSSH-Tool ist nativ auf allen OVHcloud Servern (VPS, Dedicated Server, Public Cloud Instanzen) installiert, um gesicherte Remote-Verbindungen zu Servern und andere Operationen zu ermöglichen.

**Diese Anleitung erklärt, wie Sie mithilfe von SSH auf Ihren Server zugreifen.**

<iframe width="560" height="315" src="https://www.youtube.com/embed/gi7JqUvcEt0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

> [!warning]
>
> OVHcloud stellt Ihnen Dienstleistungen zur Verfügung, für deren Konfiguration und Verwaltung Sie die alleinige Verantwortung tragen. Es liegt somit bei Ihnen, sicherzustellen, dass diese ordnungsgemäß funktionieren.
> 
> Bei Schwierigkeiten kontaktieren Sie bitte einen [spezialisierten Dienstleister](https://partner.ovhcloud.com/de/directory/) und/oder stellen Ihre Fragen in der [OVHcloud Community](https://community.ovh.com/en/). Leider können wir Ihnen für administrative Aufgaben keine weitergehende technische Unterstützung anbieten. 
>

## Voraussetzungen

- Sie haben einen [Dedicated Server](https://www.ovhcloud.com/de/bare-metal/) oder [VPS](https://www.ovhcloud.com/de/vps/) in Ihrem Kunden-Account.
- Eine Client-Anwendung für SSH (Kommandozeilenanwendung oder grafisches Interface) ist auf Ihrem lokalen Gerät installiert.

> [!primary]
> Diese Anleitung gilt nicht für Standardinstallationen von Windows Server, da diese für Remote-Logins das *Remote Desktop Protocol* (RDP) anwenden. SSH-Verbindungen werden jedoch auch hier für den OVHcloud Rescue-Modus eingesetzt. Weitere Informationen finden Sie im Abschnitt [Weiterführende Informationen](#gofurther) dieser Anleitung.
>

## In der praktischen Anwendung

Es gibt mehrere Methoden, um eine Verbindung zu einem Remote-Host mittels SSH zu authentifizieren.
Die folgenden Anweisungen beziehen sich auf die Authentifizierungsmethode über Benutzername und Passwort.<br>
Sie können auch SSH-Schlüssel konfigurieren, um gesicherte Verbindungen ohne Passwort zu aktivieren. Weitere Informationen dazu finden Sie in unserer [Anleitung zu SSH-Schlüsseln](https://docs.ovh.com/de/dedicated/ssh-schluessel-erzeugen/).

Die Login-Daten (Benutzername und Passwort) werden Ihnen per E-Mail gesendet, immer wenn eine Installation oder Reinstallation eines Servers über Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) erfolgt.

Der Benutzername entspricht dem Betriebssystem, also etwa `ubuntu` oder `debian`.
Zum Verbindungsaufbau wird zweitens die IPv4-Adresse oder der Hostname des Servers benötigt. Diese Informationen finden Sie in der Installationsmail sowie im Kundencenter.

Beachten Sie auch unsere Anleitungen zu den ersten Schritten:

- Mit einem [Dedicated Server](https://docs.ovh.com/de/dedicated/erste-schritte-dedicated-server/).
- Mit einem [Dedicated Server der Produktlinie **Eco**](https://docs.ovh.com/de/dedicated/getting-started-dedicated-server-eco/).
- Mit einem [VPS](https://docs.ovh.com/de/vps/erste-schritte-mit-einem-vps/).

### Verbindung von einer GNU/Linux Distribution oder macOS 

Ein SSH-Client (OpenSSH) ist in der Regel standardmäßig verfügbar. Öffnen Sie die Terminal-Anwendung und verwenden Sie folgenden Befehl um sich mit dem Server zu verbinden:

```bash
ssh username@server_IP
```

Wenn der SSH-Port des Servers nicht der Standard-Port ist, verwenden Sie folgenden Befehl:

```bash
ssh username@server_IP -p port_number
```

### Verbindung von einem System mit Windows 10/11

Die neuesten Windows-Versionen beinhalten OpenSSH nativ für Verbindungen aus dem PowerShell-Tool oder der Eingabeaufforderung.

Klicken Sie mit der rechten Maustaste auf den Windows-Button und wählen Sie `Windows PowerShell`{.action}. Sie können auch die Suchfunktion nutzen, um eines dieser Programme zu starten.

![PowerShell](images/windowsps.png){.thumbnail}

Verwenden Sie folgenden Befehl um sich mit dem Server zu verbinden:

```bash
ssh username@server_IP
```

Wenn der SSH-Port des Servers nicht der Standard-Port ist, verwenden Sie folgenden Befehl:

```bash
ssh username@server_IP -p port_number
```

### Login und Fingerprint

Wenn Sie zur Eingabe eines Passworts aufgefordert werden, geben Sie das Passwort des Benutzers ein, der sich verbindet, und drücken Sie auf `Enter`.

Wenn es sich um eine neue Verbindung handelt, empfängt Ihr SSH-Client einen *Fingerprint* des Servers. Geben Sie "yes" ein, um dies zu bestätigen und dann das Passwort des sich einloggenden Benutzers. 


```bash
ssh ubuntu@169.254.10.254
```
```console
The authenticity of host '169.254.10.254 (169.254.10.254)' can't be established.
ECDSA key fingerprint is SHA256:rRwrdsmJfzvJF5k0a4JmMSdaWbTlCgRKBukbmQ3gmso.
Are you sure you want to continue connecting (yes/no/[fingerprint])?
Warning: Permanently added '169.254.10.254' (ECDSA) to the list of known hosts.
ubuntu@169.254.10.254's password:
```

Der Schlüssel-Fingerprint wird dann auf Ihrem Gerät gespeichert und bei jeder neuen Verbindung überprüft. Wenn sich der Schlüssel auf dem Remote-Host geändert hat, wird eine Warnmeldung angezeigt, sobald Sie versuchen, sich zu verbinden. Zum Beispiel:

```console
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@    WARNING: REMOTE HOST IDENTIFICATION HAS CHANGED!     @
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
Host key verification failed.
Offending ECDSA key in /home/user/.ssh/known_hosts:3
```

Das bedeutet, dass eine der folgenden Situationen eingetreten ist:

- Der Server wurde reinstalliert.
- Der SSH-Dienst auf dem Server wurde reinstalliert.
- Sie verbinden sich mit einem anderen Host, der die selbe IP-Adresse hat.

> [!primary]
> Die Warnmeldung muss nicht unbedingt ein Sicherheitsproblem bedeuten. Wenn Sie jedoch keine dieser Situationen selbst herbeigeführt haben, ist der Remote-Server möglicherweise kompromittiert.
>

Um dies zu beheben, geben Sie folgenden Befehl unter Angabe der IP-Adresse Ihres Servers ein:

```bash
ssh-keygen -f ~/.ssh/known_hosts -R 169.254.10.254
```

Sie können alternativ die Datei `known_hosts` in Ihrem "Home"-Ordner mit einem Texteditor öffnen und die in der Warnmeldung angegebene Zeile ("offending key") manuell löschen:

```bash
nano ~/.ssh/known_hosts
```

Speichern Sie die Änderungen und verlassen Sie den Editor. Der neue Schlüssel-Fingerprint muss bei der nächsten Verbindung zum Server akzeptiert werden.

Unter Windows werden ebenfalls der Pfad der Datei `known_hosts` und die zu löschende Zeile angezeigt, zum Beispiel:

```console
Offending ECDSA key in C:\\Users\\Name_Windows_User/.ssh/known_hosts:3
```

Öffnen Sie den angegebenen Ordner, klicken Sie mit der rechten Maustaste auf die Datei und öffnen Sie diese mit der Anwendung Notepad (oder einem beliebigen Texteditor).

![known_hosts](images/windowskh.png){.thumbnail}

Löschen Sie die betreffende Zeile, in diesem Beispiel wäre es die dritte von oben. Speichern Sie die Änderungen und verlassen Sie den Editor. Der neue Schlüssel-Fingerprint muss bei der nächsten Verbindung zum Server akzeptiert werden.

### Verwendung von GUI-Clients oder SSH-kompatibler Software

Es gibt für jedes Betriebssystem zahlreiche Softwareanwendungen mit denen Sie sich über das SSH-Protokoll mit Ihrem Server verbinden können. 

Beispielsweise ist [PuTTY](https://putty.org/){.external} für Windows ein Open-Source-SSH-Client-Programm mit grafischer Benutzeroberfläche. Es wurde auch auf andere Plattformen portiert und ist auf [der offiziellen Webseite](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html) sowie über Software-Paketmanager als auch über [Homebrew](https://brew.sh/) verfügbar.

Starten Sie PuTTY und geben Sie die IP-Adresse des Servers ein. Geben Sie auch die Port-Nummer an, falls der Standard-Port geändert wurde. Klicken Sie dann auf `Open`{.action}, um sich einzuloggen. Sie werden zur Eingabe von Benutzername und Passwort aufgefordert.

![PuTTY](images/putty_01.png){.thumbnail}

Einer der Vorteile von PuTTY ist die Möglichkeit, mehrere Sitzungen zu speichern. Geben Sie die Login-Daten in das Feld `Saved Sessions` ein und klicken Sie auf `Save`{.action}.

![PuTTY](images/putty_02.png){.thumbnail}

Wie üblich wird bei der ersten Verbindung die Fingerprint-Warnung ausgegeben. Klicken Sie auf `Accept`{.action}, um den Schlüssel-Fingerprint zu speichern, oder wählen Sie `Connect Once`{.action} aus.

![PuTTY](images/putty_03.png){.thumbnail}

Weitere Informationen finden Sie in den offiziellen FAQ und der Dokumentation zu PuTTY.

## Weiterführende Informationen <a name="gofurther"></a>

[SSH-Schlüssel erstellen](https://docs.ovh.com/de/dedicated/ssh-schluessel-erzeugen/)

[Rescue-Modus Dedicated Server](https://docs.ovh.com/de/dedicated/ovh-rescue/)

[VPS Rescue-Modus](https://docs.ovh.com/de/vps/rescue/)

Für den Austausch mit unserer Community gehen Sie auf <https://community.ovh.com/en/>.
