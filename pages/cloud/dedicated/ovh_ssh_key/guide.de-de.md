---
title: Installation des OVHcloud SSH-Schlüssels
slug: ovh-ssh-schluessel
excerpt: In dieser Anleitung zeigen wir Ihnen, wie Sie einen OVHcloud SSH-Schlüssel installieren, um unseren Administratoren Zugriff zu gewähren, und diesen anschließend wieder deaktivieren
section: Diagnose & Rescue Modus
---

**Stand 12.04.2021**

## Einleitung

Es kann vorkommen, dass ein Eingriff eines OVHcloud Administrators auf Ihrer dedizierten Infrastruktur notwendig ist. 

**In dieser Anleitung erfahren Sie, wie Sie einen SSH-Schlüssel von OVHcloud installieren, um unseren Administratoren Zugriff zu gewähren, und wie Sie diesen anschließend wieder deaktivieren.**


## Voraussetzungen

- Sie sind [via SSH](https://docs.ovh.com/de/dedicated/ssh-einfuehrung/){.external} eingeloggt (Root-Zugriff). 

## Beschreibung

### Schritt 1: Installation des Schlüssels

Sobald Sie via SSH eingeloggt sind, geben Sie folgenden Befehl ein:

- Wenn Ihr Server bei OVHcloud in Europa gehostet ist:

```sh
echo 'from="178.33.222.162,217.182.145.216,217.182.145.217,217.182.145.218,217.182.145.219,217.182.145.220,217.182.145.221,217.182.145.222,217.182.145.223" ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAACAQDRpA0gxYQAL4HnRrFDlKsfjy6nEihOBsg6dgwR+mYee7nhTaCUqKXIlh3aJaRsiZcx4Uapq8f8NiU0g+SGWxCSbv7v4wbHfTX+brSJ+28bSUXp3B08iIcAiZgXIOBS+r++W1yJYUJRuMV934rmAvbyRhkr6rqZLp0Mr73AKnKlxR/UzN0VyA5JCXQPLAoYkm505WbwCjLKZowDobwpjx0968zkctYCpCxvJ3Wr8f0qEVtwMHawsgv1wmJuIF7689LA7U0i2yXaPrtwPdjWZsrc5YSUZL8JQTDW4PnQLiYild+YKcMMHp12bQKNvJgBStHsLlxx0hCRYoiYdMFuN0f951Vc16EmHH+7qgwCIGeeD7npyhdUevwxlY2IAEka3udOBM0t2koQlGIGckBJlAgL/W2flrvz1noSwIii6HX836lLj80djm4W0LhXu8M+nlQvDE7549srqB3+rDJ18po79+btEHirH/vfkB+X9rFd6hyHX27cygs2TpHIt+OmKkt9UB8gQy6tHX/OK2BR5v9ToBprPNAs2d/iH/K2mpJ0jHFI3FrCg9sqkz/lPwAl8bjCPZiUKU5+o+0O81MSNwqbQBl042n0Sqq9LxWP9TzxHT1GyE4LoV9NR4VHppkn+P22JO3o6B12Q5//pUgrw+VtpArwDdonc7SLQ26uR9nabw== support@cache-ng' >> /root/.ssh/authorized_keys2
```

- Wenn Ihr Server bei OVHcloud in Kanada gehostet ist:

```sh
echo 'from="8.33.137.120,149.56.85.250" ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAACAQCeVpuVqIrd2HNadlwPmZ0LkWYVaR7WRQgTWXiv2XMJJE1VRW75KiVpUzBpBDN/yorzG6bhzAdo46aNi0aD5OqFJJnj66ZWULRDIErpxXx5gJpbMJlaGNpiwJgbyahFFSpttu5vleGSkQNcNQ6r7tsdNYA4aSkGKiJ7QeCXF/26rwPTpgEI/Dv6z0sX73r2Yojlm4eX328XieSxzOCoMbPnK4hUbJMffTiVDj48LjLVUHA303tF6cSuVkuzlId67i/Y0KHkevO7vuycTNTvzZHD70IRlmFVo3cV5yTENhGgYwHK8CWavGI/HIOlxeS/HQ0nV+dUoZXqZTJi0MFIEFF3LPQbu9PNLGhjhKddZceGGmDkmendVjIwvq4qGMsWhlqcEbbRUEqDNUG+ZQK9QLuePWRe7P5jV0ubpZ9ndguOpY2hUZqUjORQk9+gdaPkVwBOMGvOE61LaTsRW3FXEaEiRWKqaqM6Xfn4qVi8Y2DVQU3ue8EKDmTT95rOCR1KxhdSPbcDAmvUSRaEoYa1zFKo22rUUn6IVLVfR/22V6r3Dtj/J2ILj0bAPmeeR7jpIZS5CjDl3F0bIUwm8LJNuEPJG/ZRmMT4GEUUG1enpyWiZuAHHrE2Dz0kzIkFPd/WTldjthHvkVWW1iukT2iTuqdnV9H9XDVVfcl6eOiPflYXvw== support@cache-ng-ca' >> /root/.ssh/authorized_keys2
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

#### Ist das Benutzer-Basisverzeichnis auch wirklich “/root”?

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
