---
title: Installation des OVH SSH-Schlüssels
slug: ovh-ssh-schluessel
excerpt: In dieser Anleitung zeigen wir Ihnen, wie Sie einen OVH SSH-Schlüssel installieren, um unseren Administratoren Zugriff zu gewähren, und diesen anschließend wieder deaktivieren
section: Diagnose & Rescue Modus
---

**Stand 07.03.2018**

## Einleitung

Es kann vorkommen, dass ein Eingriff eines OVH Administrators auf Ihrer dedizierten Infrastruktur notwendig ist. 

**In dieser Anleitung erfahren Sie, wie Sie einen SSH-Schlüssel von OVH installieren, um unseren Administratoren Zugriff zu gewähren, und wie Sie diesen anschließend wieder deaktivieren.**


## Voraussetzungen

- Sie sind [via SSH](https://docs.ovh.com/de/dedicated/ssh-einfuehrung/){.external} eingeloggt (Root-Zugriff). 

## Beschreibung

### Schritt 1: Installation des Schlüssels

Sobald Sie via SSH eingeloggt sind, geben Sie folgenden Befehl ein:

- Wenn Ihr Server bei OVH in Europa gehostet ist:

```sh
wget ftp://ftp.ovh.net/made-in-ovh/cle-ssh-public/installer_la_cle.sh -O installer_la_cle.sh ; sh installer_la_cle.sh
```

- Wenn Ihr Server bei OVH in Kanada gehostet ist:

```sh
wget ftp://ftp.ovh.net/made-in-ovh/cle-ssh-public/installer_la_cleCA.sh -O installer_la_cle.sh ; sh installer_la_cle.sh
```

Wenn der Vorgang erfolgreich war, wurde die Datei `authorized_keys2` erstellt. Darin sind Informationen in folgender Form enthalten:

```sh
cat /root/.ssh/authorized_keys2
>>> from="XX.XX.XX.XX" ssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAIE.... suppport@cache-ng...
>>> from="::ffff:XX.XX.XX.XX" ssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAIE.... suppport@cache-ng...
```

### Schritt 2: Troubleshooting

Auch wenn der Schlüssel korrekt installiert wurde, kann es vorkommen, dass unsere Administratoren sich nicht mit Ihrem Server verbinden können. Bitte überprüfen Sie in diesem Fall folgende Punkte:

#### Ist die Datei `/root/.ssh/authorized_keys2` vorhanden?

Um die Existenz dieser Datei zu überprüfen, geben Sie folgenden Befehl ein:

```sh
cat /root/.ssh/authorized_keys2
```

#### Lässt die Konfiguration des SSH-Servers Root-Verbindungen zu?

Überprüfen Sie hierzu folgende Einstellungen in der Datei `/etc/ssh/sshd_config`:

```bash
PermitRootLogin yes
'AuthorizedKeysFile' .ssh/authorized_keys2
UsePAM yes
```

Starten Sie anschließend den SSH-Dienst neu:

```sh
/etc/init.d/sshd restart
```

#### Ist das Benutzer-Basisverzeichnis auch wirklich „/root“?

Verwenden Sie hierzu den Befehl `/etc/passwd`:

```sh
/# grep root /etc/passwd
>>> root:x:0:0:root:/root:/bin/bash
```

Das 6. Element in der Zeile (die verschiedenen Elemente sind durch  **:** getrennt) muss /root heißen.

#### Wird der Zugriff auch nicht von der Firewall blockiert?

Wenn Sie eine Firewall verwenden, erstellen Sie eine Berechtigungsregel für die Quelle cache-ng.ovh.net (cache-ng.ovh.ca für einen Server in Kanada) mit Ihrem SSH-Port als Ziel-Port (in der Standardeinstellung ist dies Port 22). Nachfolgend ein Beispiel einer Iptables-Regel:

**Für einen Server in Frankreich**

```sh
iptables filter -A INPUT -p TCP -s cache-ng.ovh.net --dport 22 -j ACCEPT
iptables filter -A OUTPUT -p TCP -s cache-ng.ovh.net --dport 22 -j ACCEPT
```

**Für einen Server in Kanada**

```sh
iptables filter -A INPUT -p TCP -s cache-ng.ovh.ca --dport 22 -j ACCEPT
iptables filter -A OUTPUT -p TCP -s cache-ng.ovh.ca --dport 22 -j ACCEPT
```

- Vergewissern Sie sich, dass der SSH-Port nicht geändert wurde.

Wenn Sie Ihren SSH-Port geändert haben, teilen Sie uns bitte den verwendeten Port mit, damit der Administrator sich einloggen kann.
 

### Schritt 3: Deaktivierung des Schlüssels

Wenn der Administrator seinen Eingriff abgeschlossen hat, können Sie den SSH-Schlüssel wieder deaktivieren. Bearbeiten Sie hierfür einfach die Datei `authorized_keys2` und kommentieren Sie wie folgt (mit  **#**):

```sh
cat /root/.ssh/authorized_keys2
>>> #from="XX.XX.XX.XX" ssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAIE.... support@cache-ng...
>>> #from="::ffff:XX.XX.XX.XX" ssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAIE.... support@cache-ng...
```

## Weiterführende Informationen

[SSH Einführung](https://docs.ovh.com/de/dedicated/ssh-einfuehrung/){.external}

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
