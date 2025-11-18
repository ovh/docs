---
title: SSH-Verbindungen verwenden
excerpt: Erfahren Sie hier, wie Sie mit SSH von den meisten Desktop-Clients aus auf Ihren OVHcloud Server zugreifen können
updated: 2024-12-03
---

<style>
details>summary {
    color:rgb(33, 153, 232) !important;
    cursor: pointer;
}
details>summary::before {
    content:'\25B6';
    padding-right:1ch;
}
details[open]>summary::before {
    content:'\25BC';
}
</style>

## Ziel

Das Kommunikationsprotokoll SSH (Secure Shell) ist die bevorzugte Methode zum Aufbau verschlüsselter Verbindungen zwischen Hosts über öffentliche Netzwerke. Das OpenSSH-Tool ist auf allen OVHcloud Servern (VPS, Dedicated Server, Public Cloud Instanzen) verfügbar, um gesicherte Remote-Verbindungen zu Servern und andere Operationen zu ermöglichen.

**Diese Anleitung erklärt, wie Sie sich über das SSH-Protokoll sicher auf Ihrem Server einloggen.**

> [!warning]
>OVHcloud stellt Ihnen Dienstleistungen zur Verfügung, für deren Konfiguration und Verwaltung Sie verantwortlich sind. Es liegt somit bei Ihnen, sicherzustellen, dass diese ordnungsgemäß funktionieren.
>
>Diese Anleitung soll Sie bei allgemeinen Aufgaben bestmöglich unterstützen. Wir empfehlen jedoch, einen [spezialisierten Dienstleister](/links/partner) zu kontaktieren oder Ihre Fragen an die [OVHcloud Community](/links/community) zu richten, wenn Sie bei der Administration Ihres Systems Hilfe benötigen. Zusätzliche Informationen finden Sie im am [Ende dieser Anleitung](#gofurther).
>

## Voraussetzungen

- Sie haben einen [Dedicated Server](/links/bare-metal/bare-metal) oder [VPS](/links/bare-metal/vps) in Ihrem Kunden-Account.

> [!primary]
> Diese Anleitung gilt nicht für Standardinstallationen von Windows Server, da diese für Remote-Logins das *Remote Desktop Protocol* (RDP) anwenden. SSH-Verbindungen werden jedoch auch hier für den OVHcloud Rescue-Modus eingesetzt. Weitere Informationen finden Sie im Abschnitt [Weiterführende Informationen](#gofurther) dieser Anleitung.
>

## In der praktischen Anwendung

Es gibt mehrere Methoden, um eine Verbindung zu einem Remote-Host mittels SSH zu authentifizieren. Die folgenden Anweisungen beziehen sich auf die Authentifizierungsmethode über **Benutzername und Kennwort**.  
Sie können auch eine schlüsselbasierte Authentifizierung konfigurieren, um gesicherte Verbindungen ohne Passwortaustausch zu aktivieren. Weitere Informationen dazu finden Sie in unseren Anleitungen:

- [Erstellen und verwenden von Schlüsseln für die SSH-Authentifizierung](/pages/bare_metal_cloud/dedicated_servers/creating-ssh-keys-dedicated)
- [Erstellen und verwenden von Schlüsseln für die SSH-Authentifizierung mit PuTTY](/pages/web_cloud/web_hosting/ssh_using_putty_on_windows)

Die Login-Daten (Benutzername und Passwort) werden Ihnen per E-Mail bei der ersten Installation oder einer Reinstallation eines Servers über Ihr [OVHcloud Kundencenter](/links/manager) gesendet.

Der Benutzername entspricht dem Betriebssystem, zum Beispiel `ubuntu` oder `debian`. Sie müssen auch die IP-Adresse oder den `hostname` des Servers angeben, um eine Verbindung herzustellen. Diese Informationen können Sie in der E-Mail zur Installation oder im Kundencenter einsehen.

Weitere Informationen zu diesem Thema finden Sie in unseren Anleitungen zu den ersten Schritten:

- Für einen [Dedicated Server](/pages/bare_metal_cloud/dedicated_servers/getting-started-with-dedicated-server)
- Für einen [Dedicated Server der Produktlinie **Eco**](/pages/bare_metal_cloud/dedicated_servers/getting-started-with-dedicated-server-eco)
- Für einen [VPS](/pages/bare_metal_cloud/virtual_private_servers/starting_with_a_vps)

### Verbindung von einer GNU/Linux Distribution oder macOS zu einem Remote-Server herstellen

/// details | Diesen Abschnitt anzeigen

#### Verbindung herstellen

Ein SSH-Client (OpenSSH-Protokoll) ist in der Regel über die Kommandozeile verfügbar. Öffnen Sie die Befehlszeilenanwendung (Terminal) und melden Sie sich mit folgendem Befehl beim Server an:

```bash
ssh username@server_IP
```

Wenn Sie den SSH-Port des Servers geändert haben, verwenden Sie stattdessen folgenden Befehl:

```bash
ssh username@server_IP -p port_number
```

#### Login und Fingerprint

Wenn Sie dazu aufgefordert werden, geben Sie das Passwort des Benutzers ein, der sich anmeldet (oder fügen Sie es mit einem Klick der mittleren Maustaste ein), und drücken Sie `Enter`{.action}.

Wenn es sich um eine neue Verbindung handelt, empfängt Ihr SSH-Client einen *Fingerprint* vom Server. Geben Sie "yes" ein, um dies zu bestätigen und dann das Passwort des sich einloggenden Benutzers.

Beispielausgabe:

```bash
ssh ubuntu@203.0.113.100
```

```console
The authenticity of host '203.0.113.100 (203.0.113.100)' can't be established.
ECDSA key fingerprint is SHA256:rRwrdsmJfzvJF5k0a4JmMSdaWbTlCgRKBukbmQ3gmso.
Are you sure you want to continue connecting (yes/no/[fingerprint])?
Warning: Permanently added '203.0.113.100' (ECDSA) to the list of known hosts.
ubuntu@203.0.113.100's password:
```

Der Fingerabdruck wird auf Ihrem Gerät gespeichert und bei jeder neuen Verbindung überprüft. Wenn sich der Schlüssel auf dem Remote-Host geändert hat, erhalten Sie beim Verbindungsversuch eine Warnmeldung.

Beispielausgabe:

```console
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@    WARNING: REMOTE HOST IDENTIFICATION HAS CHANGED!     @
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
Host key verification failed.
Offending ECDSA key in /home/user/.ssh/known_hosts:3
```

Dies bedeutet, dass eines der folgenden Ereignisse eingetreten ist:

- Das Server-Betriebssystem wurde reinstalliert.
- Der SSH-Dienst auf dem Server wurde reinstalliert.
- Sie verbinden sich mit einem anderen Host, der die selbe IP-Adresse hat.

> [!primary]
> Die Warnmeldung weist nicht unbedingt auf ein Sicherheitsproblem hin. Wenn Sie jedoch keine dieser Situationen selbst herbeigeführt haben, ist der Remote-Server möglicherweise kompromittiert.
>

Um dies zu beheben, geben Sie folgenden Befehl unter Angabe der IP-Adresse Ihres Servers ein:

```bash
ssh-keygen -f ~/.ssh/known_hosts -R 203.0.113.100
```

Sie können alternativ die Datei `known_hosts` im Ordner `home` Ihres lokalen Benutzerkontos mit einem Texteditor bearbeiten.

Beispiel:

```bash
nano ~/.ssh/known_hosts
```

Identifizieren Sie den in der Warnmeldung angegebenen Fingerprint ("offending key"), in diesem Beispiel wäre es die dritte Zeile. Markieren Sie die gesamte Zeile und löschen Sie sie.

Speichern Sie die Änderungen und beenden Sie den Editor. Sie müssen den neuen Schlüssel-Fingerprint bestätigen, wenn Sie sich das nächste Mal beim Server anmelden.

///

### Verbindung von einem Windows-Gerät zu einem Remote-Server herstellen

/// details | Diesen Abschnitt anzeigen

#### Verbindung herstellen

Neuere Versionen von Windows unterstützen OpenSSH, sodass Sie es direkt aus den systemeigenen Befehlszeilenanwendungen (PowerShell oder Eingabeaufforderung) verwenden können.

Klicken Sie mit der rechten Maustaste auf den Button `Start`{.action} und wählen Sie `Windows PowerShell`{.action}. Sie können auch das Suchfeld verwenden, um eine der Befehlszeilenanwendungen zu starten.

![PowerShell](images/windowsps.png){.thumbnail}

Melden Sie sich mit folgendem Befehl beim Server an:

```bash
ssh username@server_IP
```

Wenn Sie den SSH-Port des Servers geändert haben, verwenden Sie stattdessen folgenden Befehl:

```bash
ssh username@server_IP -p port_number
```

#### Login und Fingerprint

Wenn Sie dazu aufgefordert werden, geben Sie das Passwort des Benutzers ein, der sich anmeldet (oder fügen Sie es mit der rechten Maustaste ein), und drücken Sie `Enter`{.action}.

Wenn es sich um eine neue Verbindung handelt, empfängt Ihr SSH-Client einen *Fingerprint* vom Server. Geben Sie "yes" ein, um dies zu bestätigen und dann das Passwort des sich einloggenden Benutzers.

Beispielausgabe:

```bash
ssh ubuntu@203.0.113.100
```

```console
The authenticity of host '203.0.113.100 (203.0.113.100)' can't be established.
ECDSA key fingerprint is SHA256:rRwrdsmJfzvJF5k0a4JmMSdaWbTlCgRKBukbmQ3gmso.
Are you sure you want to continue connecting (yes/no/[fingerprint])?
Warning: Permanently added '203.0.113.100' (ECDSA) to the list of known hosts.
ubuntu@203.0.113.100's password:
```

Der Fingerabdruck wird auf Ihrem Gerät gespeichert und bei jeder neuen Verbindung überprüft. Wenn sich der Schlüssel auf dem Remote-Host geändert hat, erhalten Sie beim Verbindungsversuch eine Warnmeldung.

Beispielausgabe:

```console
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@    WARNING: REMOTE HOST IDENTIFICATION HAS CHANGED!     @
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
Host key verification failed.
Offending ECDSA key in C:\\Users\\Name_Windows_User/.ssh/known_hosts:3
```

Dies bedeutet, dass eines der folgenden Ereignisse eingetreten ist:

- Das Server-Betriebssystem wurde reinstalliert.
- Der SSH-Dienst auf dem Server wurde reinstalliert.
- Sie verbinden sich mit einem anderen Host, der die selbe IP-Adresse hat.

> [!primary]
> Die Warnmeldung weist nicht unbedingt auf ein Sicherheitsproblem hin. Wenn Sie jedoch keine dieser Situationen selbst herbeigeführt haben, ist der Remote-Server möglicherweise kompromittiert.
>

Um dies zu beheben, geben Sie folgenden Befehl unter Angabe des Namens Ihres lokalen Windows-Benutzerkontos und der IP-Adresse Ihres Servers ein:

```bash
ssh-keygen -f "C:\Users\Name_Windows_User\.ssh\known_hosts" -R 203.0.113.100
```

Alternativ öffnen Sie den angegebenen Ordner, klicken Sie mit der rechten Maustaste auf die Datei und öffnen Sie diese mit einem Texteditor (Notepad, Notepad++ etc.).

![known_hosts](images/windowskh.png){.thumbnail}

Lokalisieren Sie den in der Warnmeldung angegebenen Fingerprint ("offending key"), in diesem Beispiel wäre es die dritte Zeile. Markieren Sie die gesamte Zeile und löschen Sie sie.

Speichern Sie die Änderungen und beenden Sie den Editor. Sie müssen den neuen Schlüssel-Fingerprint bestätigen, wenn Sie sich das nächste Mal beim Server anmelden.

///


### Verwendung von dedizierten GUI-Clients oder SSH-kompatibler Software

Wenn Sie eine grafische Benutzeroberfläche bevorzugen, können Sie für jeden Betriebssystemtyp verschiedne Softwareanwendungen nutzen, um über das SSH-Protokoll eine Verbindung zu Remote-Hosts herzustellen.

Beispielsweise ist [PuTTY](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html) ein Open-Source-SSH-Client mit einigen nützlichen Funktionen. In unserer detaillierten Anleitung erfahren Sie, wie Sie dieses Tool für Verbindungen zu OVHcloud Servern verwenden:

[Tutorial zur Verwendung von PuTTY](/pages/web_cloud/web_hosting/ssh_using_putty_on_windows)

<a name="gofurther"></a>

## Weiterführende Informationen

[Konfiguration von Benutzerkonten und Root-Zugriff auf einem Server](/pages/bare_metal_cloud/dedicated_servers/changing_root_password_linux_ds)

[Erstellen und verwenden von Schlüsseln für die SSH-Authentifizierung](/pages/bare_metal_cloud/dedicated_servers/creating-ssh-keys-dedicated)

[Erstellen und verwenden von Schlüsseln für die SSH-Authentifizierung mit PuTTY](/pages/web_cloud/web_hosting/ssh_using_putty_on_windows)

[Rescue-Modus für Dedicated Server](/pages/bare_metal_cloud/dedicated_servers/rescue_mode)

[Rescue-Modus für VPS](/pages/bare_metal_cloud/virtual_private_servers/rescue)

Kontaktieren Sie für spezialisierte Dienstleistungen (SEO, Web-Entwicklung etc.) die [OVHcloud Partner](/links/partner).

Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, beachten Sie unsere [Support-Angebote](/links/support).

Treten Sie unserer [User Community](/links/community) bei.