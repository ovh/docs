---
title: "Konfigurieren von Benutzer-Accounts und Root-Zugriff auf einem Server"
excerpt: "Erfahren Sie hier die ersten Schritte zur Verwaltung von Benutzer-Accounts auf einem GNU/Linux-Betriebssystem"
updated: 2024-02-19
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie im Zweifelsfall die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button "Beitragen" auf dieser Seite.
>

## Ziel

Mit der Bereitstellung eines OVHcloud Dedicated Servers oder VPS erhalten Sie **Root-Zugriff** auf Ihre Dienstleistung. Grundsätzlich bedeutet dies, dass Sie der Systemadministrator sind und über die höchste Berechtigungsstufe verfügen.

Auch wenn der Server nicht für Zwecke verwendet wird, die die Verwaltung von realen Benutzern erfordern, ist die Konfiguration von **Benutzer-Accounts** ein sicherheitsrelevantes Thema, das nicht unterschätzt werden sollte. Diese Anleitung bietet grundlegende Hinweise für den Einstieg in die folgenden Themen:

- Konfigurieren von Systembenutzer-Accounts mit unterschiedlichen Berechtigungsstufen
- Best Practices zur Verwaltung des Zugriffs auf Ihren Server und die Ausführung von Befehlen mit erhöhten Rechten

## Voraussetzungen

- Sie haben einen [Dedicated Server](https://www.ovhcloud.com/de/bare-metal/) oder [VPS](https://www.ovhcloud.com/de/vps/) mit einem Linux-Betriebssystem Ihrem Kunden-Account.
- Sie verfügen über die Zugangsdaten, die Sie nach der Installation per E-Mail erhalten haben.

## In der praktischen Anwendung

In den folgenden Beispielen wird davon ausgegangen, dass Sie über SSH mit Ihrem Server verbunden sind.<br>
Weitere Informationen hierzu finden Sie in unserer Anleitung "[Erste Schritte mit SSH](/pages/bare_metal_cloud/dedicated_servers/ssh_introduction)".

- Für einen [Dedicated Server](/pages/bare_metal_cloud/dedicated_servers/getting-started-with-dedicated-server)
- Für einen [Dedicated Server der Reihe **Eco**](/pages/bare_metal_cloud/dedicated_servers/getting-started-with-dedicated-server-eco)
- Für einen [VPS](/pages/bare_metal_cloud/virtual_private_servers/starting_with_a_vps)

> [!warning]
> OVHcloud stellt Ihnen Dienstleistungen zur Verfügung, für deren Konfiguration und Verwaltung Sie die alleinige Verantwortung tragen. Es liegt somit bei Ihnen, sicherzustellen, dass diese ordnungsgemäß funktionieren.
> 
> Diese Anleitung soll Sie bei allgemeinen Aufgaben bestmöglich unterstützen. Dennoch empfehlen wir Ihnen, einen [spezialisierten Dienstleister](https://partner.ovhcloud.com/de/directory/) zu kontaktieren oder Ihre Fragen an die [OVHcloud Community](https://community.ovh.com/en/) zu richten, wenn Sie Schwierigkeiten oder Zweifel hinsichtlich der Verwaltung, Nutzung oder Implementierung der Dienste auf einem Server haben. Leider können wir Ihnen für administrative Aufgaben keine weitergehende technische Unterstützung anbieten. 
>

> [!primary]
>
> Die Anweisungen in dieser Anleitung basieren auf einem Debian/Ubuntu Server-Betriebssystem und sind nicht erschöpfend. Die folgenden Beispiele sollen einen Ausgangspunkt bieten und dazu beitragen, leicht ausnutzbare Sicherheitslücken zu vermeiden. Mit Grundkenntnissen der Benutzer-Account-Verwaltung und verwandten Best Practices können Sie die für Ihren Anwendungsfall relevantesten Themen weiter vertiefen.
>
> Wir empfehlen, für jeden verwendeten Befehl die entsprechenden **Seiten im Systemhandbuch ("_man pages_")** zu lesen. Sie können dies über die Kommandozeile tun, indem Sie `man` gefolgt vom Namen eines Befehls, einer Funktion oder Systemdatei eingeben.
>

### Inhaltsübersicht

- [Verwaltung von Benutzer-Accounts](#accounts)
    - [Erstellung eines unprivilegierten Benutzer-Accounts](#unprivileged)
    - [Erstellung eines Benutzer-Accounts mit Root-Berechtigung ("root privileges")](#privileged)
    - [Ausführen von Befehlen als Administrator ("sudo")](#sudo)
    - [Benutzer-Account deaktivieren](#disable)
    - [Benutzer-Account aktivieren](#enable)
    - [Benutzer-Account löschen](#delete)
    - [Benutzer-Account wechseln](#switch)
    - [Zum Account "root" wechseln ("root shell")](#rootshell)
- [Aktivieren des Login mit "root"](#enableroot)
    - [Account "root" aktivieren](#rootstep1)
    - [Datei "sshd_config" bearbeiten](#rootstep2)
    - [SSH-Dienst neu starten](#rootstep3)


<a name="accounts"></a>

### Verwaltung von Benutzer-Accounts

Beachten Sie, dass Server-Sicherheitsrichtlinien für verschiedene Einsatzzwecke und Benutzerumgebungen angepasst werden können. Die unten beschriebenen Schritte enthalten lediglich grundlegende Erläuterungen zur Verwaltung von Benutzer-Accounts mit Schwerpunkt auf Komfort und Sicherheit erheben keinen Anspruch auf universelle Gültigkeit.

Nach einer Neuinstallation Ihres Servers (mit einem OVHcloud Template) starten Sie unter diesen Bedingungen:

- Ein Benutzer-Account mit erhöhten Berechtigungen ist erstellt und nach dem Betriebssystem benannt, z.B. "ubuntu", "rocky" etc.
- Sie haben das Initial-Passwort für diesen Account in der Installationsmail erhalten.
- Sie können einen SSH-Client verwenden, um sich mit diesen Anmeldedaten beim Server einzuloggen.

Die Eingabeaufforderung nach der Anmeldung variiert je nach Diensttyp und installierter Distribution, zum Beispiel: 

```text
ubuntu@ns9356771:~$
```

In den folgenden Beispielbefehlszeilen wird weiterhin "ubuntu" verwendet, um auf den vorkonfigurierten `user account` zu verweisen.

Sie sehen in der Ausgabe des folgenden Befehls, dass dieser Account bereits zur `sudo group` hinzugefügt wurde:

```bash
id
```

```text
27(sudo)
```

Sie können auch `groups` eingeben, um nur die Gruppen anzuzeigen, in denen der aktuelle Benutzer-Account Mitglied ist.

Das bedeutet, dass der Benutzer, mit dem Sie gerade eingeloggt sind, alle Befehle ausführen kann, indem der Befehl `sudo` vorangestellt wird (`root privileges`). Ausführlichere Informationen finden Sie unten im [zugehörigen Abschnitt der Anleitung](#sudo).

> [!primary]
> 
> **Begriffsdefinition**
> 
> Für die Zwecke dieser Anleitung gelten die folgenden Definitionen:
> 
> - `administrator`: Eine Person, die alle Befehle auf einem Server ausführen kann (Serveradministrator).
> - `sudo user`: Benutzer-Account, der von einem Administrator verwendet wird. Dieser Account ist Mitglied der `sudo group`. Andere Wissensressourcen und Tutorials können einem solchen Nutzer auch anders bezeichnen, zum Beispiel `sudoer`, `superuser`, `root user`, `admin` etc.
> - `sudo group`: Die `user group` mit den notwendigen Berechtigungen, um alle Befehle auf einem Server auszuführen (`root privileges`, wobei die Details über die Sicherheitseinstellungen des Betriebssystems festgelegt sind).
> - `user group` / `group`: Eine technische Einheit, die `user accounts` im Sinne der Sicherheitsverwaltung einteilt.
> - `root` / `root user` / `root account`: Benutzer-Account mit `root privileges`, der standardmäßig auf GNU/Linux-Systemen vorhanden ist und für spezifische Zwecke verwendet wird.
>
> Um mehr zu Details und Einstellungen zu erfahren, die für Ihr System gelten, können Sie mit den `man` Seiten für `sudo` und `sudoers` starten.
>

<a name="unprivileged"></a>

#### Erstellung eines unprivilegierten Benutzer-Accounts

Auch wenn Sie keinen anderen Personen Zugriff auf Ihren Server gewähren müssen, kann die Erstellung eines Benutzer-Accounts ohne besondere Berechtigungen (auch bezeichnet als `normal user` oder `regular user`) aus Sicherheitsgründen sinnvoll sein. So besteht beispielsweise keine Gefahr, dass das System versehentlich beschädigt wird, indem Server-Konfigurationsdateien gelöscht oder geändert werden, wenn Befehle oder Prozesse von einem Benutzer-Account ohne erhöhte Berechtigungen ausgeführt werden.

Ein weiteres Beispiel für bewährte Verfahren ist die Erstellung eines dedizierten Benutzer-Accounts für eine auf Ihrem Server gehostete Anwendung. Selbst wenn der Benutzer-Account durch diese Anwendung kompromittiert wird, verhindert das Fehlen erhöhter Berechtigungen größeren Schaden am System selbst.

Erstellen eines Benutzer-Accounts (ersetzen Sie `username` mit einem Namen für den Benutzer-Account, z.B. den Namen einer Anwendung):

```bash
sudo adduser username
```

Sie müssen ein Kennwort für den neuen Account eingeben. Sie werden dann aufgefordert, die Details des neuen Benutzers einzugeben (optional).

```text
New password: 
Retype new password:
passwd: password updated successfully
```

Hinweis: Bei einer GNU/Linux-Distribution **zeigt eine Passworteingabeaufforderung keine Tastatureingaben an**.

- Relevante `man` Seiten: `adduser`, `useradd`

<a name="privileged"></a>

#### Erstellung eines Benutzer-Accounts mit Root-Berechtigung ("root privileges")

In diesem Abschnitt wird ein neuer Benutzer-Account für einen `administrator` erstellt, und diesem erhöhte Berechtigungen auf dem Server gewährt (`root privileges`).

Neuen Benutzer-Account erstellen (dabei `username` mit dem Namen des Benutzer-Accounts ersetzen):

```bash
sudo adduser username
```

Neu erstellten Benutzer-Account zur `sudo group` hinzufügen:

```bash
sudo usermod -aG sudo username
```

Sie können den Gruppenstatus eines Benutzers mit `group` überprüfen: 

```bash
groups username
```

Beispiel:

```bash
groups ubuntu
```

```text
ubuntu sudo users
```

Der neu erstellte Benutzer-Account ist nun ein `sudo user` und kann alle Befehle ausführen.

Diese Einstellung ist festgelegt über die Standardkonfiguration der `sudo group`:

```text
# Allow members of group sudo to execute any command
%sudo   ALL=(ALL:ALL) ALL
```

Die entsprechenden Konfigurationen finden Sie jeweils in `/etc/sudoers` und im Verzeichnis `/etc/sudoers.d`.

> [!primary]
>
> Eine angemessene Benutzerverwaltung, einschließlich Benutzerauthentifizierungsmethoden, hängt von der Arbeitsumgebung und anderen Faktoren ab. Wenn Sie Benutzer-Accounts und Gruppen auf einem Server verwalten müssen, folgen Sie der offiziellen Dokumentation Ihres Betriebssystems und den entsprechenden Knowledge Bases.
>

<a name="sudo"></a>

#### Ausführen von Befehlen als Administrator ("sudo")

Aktionen, die erhöhte Berechtigungen erfordern, werden abgelehnt, wenn sie ohne den Befehl `sudo` eingegeben werden.

Um beispielsweise ein Passwort für **einen beliebigen Benutzer-Account** zu ändern, geben Sie `sudo passwd` gefolgt vom `username` ein:

```bash
sudo passwd ubuntu
```

```text
New password: 
Retype new password:
passwd: password updated successfully
```

Das System wird Sie regelmäßig nach dem Passwort des `sudo user` fragen, mit dem Sie eingeloggt sind, wenn `sudo` ausgeführt wird.

- Relevante `man` Seiten: `sudo_root`, `sudo`, `sudoers`

<a name="disable"></a>

#### Benutzer-Account deaktivieren

Um einen `user account` zu deaktivieren, geben Sie Folgendes ein:

```bash
sudo passwd -dl username
```

Dadurch wird der Benutzer-Account gesperrt (d.h. verhindert, dass er sich mit einem Passwort einloggt) und als "*passwordless*" konfiguriert. Der Account is damit effektiv deaktiviert.

<a name="enable"></a>

#### Benutzer-Account aktivieren

Um einen passwortlosen gesperrten `user account` wieder zu aktivieren, verwenden Sie folgende Befehle (ersetzen Sie `initialpassword` durch ein temporäres Passwort):

```bash
sudo usermod username -p initialpassword
```

```bash
sudo passwd -u username
```

Ändern Sie aus Sicherheitsgründen das Kennwort für diesen Benutzer erneut:

```bash
sudo passwd username
```

- Relevante `man` Seiten: `passwd`, `usermod`

<a name="delete"></a>

#### Benutzer-Account löschen

Eine einfache Methode zum Löschen eines Accounts und dessen Dateien ist folgender Befehl:

```bash
sudo userdel -r -f username
```

- Relevante `man` Seiten: `userdel`, `deluser`

<a name="switch"></a>

#### Benutzer-Account wechseln

Als `sudo user` können Sie zu jedem anderen Benutzer-Account wechseln (ohne dessen Passwort zu kennen):

```bash
sudo su username
```

Ihre Eingabeaufforderung ändert sich entsprechend:

```text
ubuntu@ns9356771:~$ sudo su username
username@ns9356771:/home/ubuntu$
```

Um zu Ihrem vorherigen Benutzer-Account zurückzukehren, wechseln Sie erneut oder verwenden Sie `exit`.

<a name="rootshell"></a>

#### Zum Account "root" wechseln ("root shell")

Nach einer Neuinstallation Ihres Servers (mit einem OVHcloud Template) kann der `root account` (Benutzer-Account mit dem Namen `root`) verwendet werden, er hat jedoch kein Passwort.

Aus Sicherheitsgründen sollte der `root account` nur verwendet werden, wenn dies unbedingt erforderlich ist, und er sollte **nur vom System selbst aus zugänglich sein**.

Sie können mit folgendem Befehl zum `root account` wechseln:

```bash
sudo -s
```

Ihre Eingabeaufforderung ändert sich entsprechend:

```text
ubuntu@ns9356771:~$ sudo -s
root@ns9356771:/home/ubuntu#
```

Das Zeichen `#` am Ende der Eingabeaufforderung zeigt eine `root shell` an, im Gegensatz zu einer Eingabeaufforderung, die mit `$` endet.

Verwenden Sie den folgenden Befehl, um zum vorherigen Benutzer-Account zurückzukehren:

```bash
exit
```

**Befehle als der `root user` auszuführen ist normalerweise nicht notwendig und kann sogar kontraproduktiv sein.**

Ein häufig auftretendes Missverständnis ist die Annahme, dass der konkrete `root account` verwendet werden muss, um Befehle auszuführen, die erhöhte Berechtigungen (`root privileges`) auf einem System erfordern.

Wie standardmäßig über die Richtlinie in `/etc/sudoers` konfiguriert, ist die Berechtigungsstufe von `root` allerdings mit der der `sudo group` identisch:

```text
# Allow members of group sudo to execute any command
%sudo   ALL=(ALL:ALL) ALL
```

```text
# User privilege specification
root    ALL=(ALL:ALL) ALL
```

> [!primary]
>
> Beachten Sie, dass Tutorials und Benutzerdokumentationen möglicherweise inkonsistente Terminologie verwenden. Wenn Sie nicht verifizieren können, dass die Verwendung des konkreten `root account` für die beabsichtigte Aktion erforderlich ist, ist es am besten, stattdessen `sudo`-Befehle auszuführen. Das Ändern von Dateien und Einstellungen als "root" kann unerwartete Folgen für das System haben.
>

<a name="enableroot"></a>

### Aktivieren des Login mit "root"

> [!warning]
>
> Dem `root account` die Verbindung per SSH zu erlauben wird als Sicherheitsrisiko eingestuft und ist daher nicht zu empfehlen.
>
> Ergreifen Sie zunächst mithilfe unserer Anleitungen die notwendigen Maßnahmen zur Sicherung Ihres Systems: 
>
> - [Dedicated Server absichern](/pages/bare_metal_cloud/dedicated_servers/securing-a-dedicated-server)
> - [VPS absichern](/pages/bare_metal_cloud/virtual_private_servers/secure_your_vps)
> 

<a name="rootstep1"></a>

#### Schritt 1: Account "root" aktivieren

Geben Sie den folgenden Befehl ein, und dann ein Passwort an der Eingabeaufforderung:

```bash
sudo passwd root
```

Sie können die Aktion rückgängig machen, indem Sie diesen Befehl eingeben:

```bash
sudo passwd -d root
```

<a name="rootstep2"></a>

#### Schritt 2: Datei "sshd_config" bearbeiten

Verwenden Sie einen Texteditor wie `vim` oder `nano`, um diese Konfigurationsdatei zu bearbeiten:

```bash
sudo nano /etc/ssh/sshd_config
```

Sie können folgende Zeile darin finden:

```text
#PermitRootLogin prohibit-password
```

Das vorgestellte Zeichen `#` markiert die gesamte Zeile als Kommentarzeichenfolge und sie wird somit von Anwendungen, die die Datei lesen, ignoriert.

Ohne weitere Anweisungen bezüglich dieser Einstellung ist das Anmelden am Server mit dem Benutzer-Account `root` deshalb **deaktiviert**.

Fügen Sie folgende Zeile hinzu:

```text
PermitRootLogin yes
```

Das erlaubt Server-Logins mit `root` und dem dazugehörigen Passwort.

Speichern Sie die Datei und schließen Sie den Editor. Um diese Zugriffsmethode zu widerrufen, wiederholen Sie die Schritte und löschen Sie die Zeile.

<a name="rootstep3"></a>

#### Schritt 3: SSH-Dienst neu starten

Starten Sie den SSH-Dienst mit einem der folgenden Befehle neu:

```bash
sudo systemctl restart ssh
```

```bash
sudo systemctl restart sshd
```

Dies sollte ausreichen, um die Änderungen anzuwenden. Andernfalls starten Sie den Server über die Befehlszeile neu (`sudo reboot`).

## Weiterführende Informationen

[Dedicated Server absichern](/pages/bare_metal_cloud/dedicated_servers/securing-a-dedicated-server)

[VPS absichern](/pages/bare_metal_cloud/virtual_private_servers/secure_your_vps)

Für den Austausch mit unserer Community gehen Sie auf <https://community.ovh.com/en/>.