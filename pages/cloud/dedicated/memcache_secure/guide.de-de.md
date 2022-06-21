---
title: Einen Server mit Memcached-Dienst sichern
slug: server-mit-memcached-dienst-sichern
excerpt: In dieser Anleitung erfahren Sie, wie Sie Ihren Memcached-Dienst sichern
section: Fortgeschrittene Nutzung
---

**Stand 05.03.2018**

## Einleitung

Memcached ist ein In-Memory-Datenbank-Dienst und wird vor allem verwendet, um Webanwendungen zu beschleunigen, indem statische Inhalte und die Ergebnisse zu Datenbankabfragen im Cache abgelegt werden. Das Funktionsprinzip ist einfach: Es handelt sich um eine In-Memory-Datenbank mit Schlüssel-Werte-Datenstruktur und flüchtigem Storage.

Der Zugriff auf Memcached ist standardmäßig nicht durch eine Authentifizierung geschützt. Ist der Server verfügbar, kann jeder die gespeicherten Daten lesen oder bearbeiten. Daher ist es wichtig, diese Datenbank zu sichern.

**In dieser Anleitung erfahren Sie, wie Sie die Konfiguration entsprechend anpassen.**

> [!warning]
>
> OVHcloud stellt Ihnen Maschinen zur Verfügung, für die Sie die alleinige Verantwortung tragen. Da wir keinen Zugriff auf diese Maschinen haben, können wir keinerlei Administrator-Aufgaben für diese Server übernehmen. Es liegt daher in Ihrer Verantwortung, das Softwaremanagement und die tägliche Sicherheit Ihrer Anlage zu gewährleisten.
>
> Wir stellen Ihnen diesen Leitfaden zur Verfügung, um Ihnen bei der Bewältigung alltäglicher Server-Verwaltungsaufgaben zu helfen. Wir empfehlen Ihnen jedoch, sich an einen [spezialisierten Dienstleister](https://partner.ovhcloud.com/de/directory/) zu wenden, wenn Sie Schwierigkeiten oder Zweifel hinsichtlich der Verwaltung, Nutzung oder Sicherheit eines Servers haben. Genauere Informationen finden Sie im Teil "Weiterführende Informationen" dieser Anleitung.
>

## Voraussetzungen

- Sie haben Zugriff auf den Server mit Memcached-Dienst (SSH-Zugriff für Linux-Umgebungen oder über Remotedesktop für Windows).
- Sie haben die Dienste ermittelt, die Memcached verwenden. Beantworten Sie hierzu einfach folgende Fragen:
    - Befinden sich alle Dienste, die Memcached verwenden, auf demselben Server? Werden sie in einem privaten Netzwerk verwendet?
    - Ist es für diese Dienste wichtig, dass Memcached im Internet öffentlich zugänglich ist?

## Beschreibung

### Konfiguration zum Sichern von Memcached

Die Sicherung eines Memcached-Servers erfolgt in zwei Schritten:

- Listening-Adresse des Dienstes einschränken.
- Nur TCP-Verbindungen erlauben.

Memcached-Versionen vor /1.5.6/ erlauben standardmäßig TCP- und UDP-Verbindungen. Letztere können jedoch verwendet werden, um sogenannte “Amplification-Angriffe” zu starten.
Als die Software entwickelt wurde, waren UDP-Verbindungen laut den Entwicklern notwendig, da insgesamt weniger Ressourcen vorhanden waren.
In dieser Anleitung gehen wir davon aus, dass Sie zu den 99 % der Nutzer gehören, die keine UDP-Verbindungen benötigen.

Wenn Ihr Memcached-Server nur vom lokalen Server verwendet wird, können Sie die Listening-Adresse auf `127.0.0.1` einschränken.
Falls auch andere Server den Memcached-Dienst über ein privates Netzwerk nutzen, richten Sie eine private IP als Listening-Adresse ein, zum Beispiel `10.0.0.1` (IP entsprechend Ihrer Netzwerkklasse).

Deaktivieren Sie **in beiden Fällen** UDP-Listening mit dem Befehl `-U 0`.

Im Folgenden zeigen wir Ihnen die Konfigurationen für die gängigsten Betriebssysteme.

#### Debian/Ubuntu

Debian und Ubuntu verwenden standardmäßig `service memcached status/start/restart/force-reload`, um Memcached zu verwalten. Ist das auch bei Ihnen der Fall, verbinden Sie sich per Root-Zugriff und bearbeiten Sie die Datei `/etc/memcached.conf`.

Sie können zunächst die folgende Option hinzufügen, um UDP-Listening zu deaktivieren. UDP-Listening ist wie zuvor beschrieben nicht länger notwendig.

```sh
# Disable UDP protocol
-U 0
```

Wenn Ihr Memcached-Server nur vom lokalen Server verwendet wird, können Sie die folgende Option aktivieren, damit Ihr Dienst nicht länger über das Internet frei zugänglich ist.

```sh
-l 127.0.0.1
```

Wenn Sie diese Änderungen vorgenommen haben, speichern Sie die Datei und verwenden Sie einen der folgenden Befehle, um Ihre Konfiguration neu zu starten:

```sh
service memcached force-reload
/etc/init.d/memcached force-reload
```

#### CentOS - Fedora - Red Hat

CentOS, Fedora und Red Hat verwenden standardmäßig `service memcached status/start/restart/force-reload`, um Memcached zu verwalten. Ist das auch bei Ihnen der Fall, verbinden Sie sich per Root-Zugriff und bearbeiten Sie die Datei `/etc/sysconfig/memcached`.

Wenn Ihr Memcached-Server nur vom lokalen Server verwendet wird, empfehlen wir Ihnen, die folgende `OPTIONS`-Zeile zu verwenden, damit Ihr Dienst nicht länger frei über das Internet zugänglich ist. Auf diese Weise wird das inzwischen unnötige UPD-Protokoll deaktiviert:

```sh
OPTIONS="-l 127.0.0.1 -U 0"
```

Wird Ihr Memcached-Server auch von anderen Servern verwendet, können Sie über folgende `OPTIONS`-Zeile einfach nur das UDP-Protokoll deaktivieren:

```sh
OPTIONS="-U 0"
```

Wenn Sie diese Änderungen vorgenommen haben, speichern Sie die Datei und verwenden Sie folgenden Befehl, um Ihre Konfiguration neu zu starten:

```sh
sudo service memcached force-reload
```

#### Arch Linux

Arch Linux verwendet standardmäßig `systemctl start/restart/stop memcached`, um Memcached zu verwalten. Ist das auch bei Ihnen der Fall, verbinden Sie sich per Root-Zugriff und bearbeiten Sie die Datei `/usr/lib/systemd/system/memcached`.

Wenn Ihr Memcached-Server nur vom lokalen Server verwendet wird, empfehlen wir Ihnen, die folgende Zeile zu verwenden, damit Ihr Dienst nicht länger frei über das Internet zugänglich ist. Auf diese Weise wird das inzwischen unnötige UPD-Protokoll deaktiviert:

```sh
ExecStart=/usr/bin/memcached -l 127.0.0.1 -U 0 -o modern
```

Wird Ihr Memcached-Server auch von anderen Servern verwendet, können Sie über folgende Zeile einfach nur das UDP-Protokoll deaktivieren:

```sh
ExecStart=/usr/bin/memcached -U 0 -o modern
```

Wenn Sie diese Änderungen vorgenommen haben, speichern Sie die Datei und verwenden Sie einen der folgenden Befehle, um Ihre Konfiguration neu zu starten:

```sh
sudo systemctl daemon-reload
sudo systemctl force-reload memcached
```

## Weiterführende Informationen

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.