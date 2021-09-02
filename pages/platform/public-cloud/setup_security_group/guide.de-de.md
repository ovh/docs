---
title: 'Eine Sicherheitsgruppe in Horizon erstellen und konfigurieren'
slug: eine-sicherheitsgruppe-konfigurieren-horizon
excerpt: 'In dieser Anleitung erfahren Sie, wie Sie eine Sicherheitsgruppe erstellen und auf einer Public Cloud Instanz konfigurieren.'
section: Horizon
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie beim geringsten Zweifel die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button “Mitmachen“ auf dieser Seite.
>

**Stand 24.08.2021**

## Ziel

Aus Sicherheitsgründen können Filterregeln konfiguriert und verwendet werden, die den Zugriff auf Ihre Instanzen definieren. Sie können bestimmte ein- oder ausgehende Verbindungen mit Sicherheitsgruppen erlauben oder blockieren. Diese Regeln können für Traffic von bestimmten IP-Adressen oder sogar für Instanzen angewendet werden, die auf bestimmten Sicherheitsgruppen eingerichtet sind.

**In dieser Anleitung erfahren Sie, wie Sie eine Sicherheitsgruppe erstellen und auf einer Public Cloud Instanz konfigurieren.**

## Voraussetzungen

- Ein [Public Cloud Projekt](https://www.ovhcloud.com/de/public-cloud/).
- [Sie sind mit dem Horizon-Interface verbunden](https://docs.ovh.com/de/public-cloud/erstellung_eines_zugangs_zu_horizon/)

## In der praktischen Anwendung

### Schritt 1: eine Sicherheitsgruppe erstellen

Greifen Sie auf das [Horizon-Interface zu](https://docs.ovh.com/de/public-cloud/erstellung_eines_zugangs_zu_horizon/). Wählen Sie dann die Region aus, in der Sie eine Sicherheitsgruppe erstellen möchten, indem Sie oben links klicken.

![die Region](images/security-group0.png){.thumbnail}

> [!primary]
>
> Wenn eine Sicherheitsgruppe in mehreren Regionen verwendet werden soll, erstellen Sie diese für jede Region.
>

Wählen Sie jetzt das Menü `Network`{.action} aus und klicken Sie auf `Security Groups`{.action}. Eine Tabelle listet die erstellten Sicherheitsgruppen auf. Die Gruppe "Default"ist bereits aufgeführt. Damit wird der gesamte ein- und ausgehende Traffic durchgelassen.

Um eine neue Sicherheitsgruppe hinzuzufügen, klicken Sie auf den Button `+ Create Security Group`{.action}.

![zu den Sicherheitsgruppen](images/security-group1.png){.thumbnail}

Geben Sie der Gruppe, die Sie erstellen möchten, auf der angezeigten Seite einen Namen und eine Beschreibung. Wenn Sie fertig sind, klicken Sie auf den Button `Create Security Group`{.action}.

![eine Sicherheitsgruppe erstellen](images/security-group2.png){.thumbnail}

Zurück auf dem Tab `Security Groups`{.action} zeigt die Tabelle die neu erstellte Gruppe. Dort sind standardmäßig Regeln konfiguriert. Diese lassen nur den ausgehenden Traffic passieren. Wenn Sie die Änderungen vornehmen möchten, gehen Sie zum nächsten Schritt über.

Wenn Sie mit diesen Regeln einverstanden sind, lesen Sie diese Anleitung in Schritt 3 "[Sicherheitsgruppe auf ihrer Instanz konfigurieren"](#instance-security-group).

### Schritt 2: Regeln einer Sicherheitsgruppe konfigurieren

Um die Standardregeln zu ändern oder Ihre Anforderungen zu ändern, klicken Sie auf den Button `Manage Rules`{.action}.

![Die Regeln verwalten](images/security-group3.png){.thumbnail}

Wenn Sie die Standardregeln für Ihre Sicherheitsgruppe beibehalten haben, führen diese nur den ausgehenden Traffic durch.

```bash
root@serveur:~$ ssh admin@149.xxx.xxx.177

ssh: connect to host 149.xxx.xxx.177 port 22: Connection timed out
```

Auf der Verwaltungsseite der Regeln können Sie daher:

- eine bestehende Regel löschen: Verwenden Sie hierzu den Button `Delete Rule`{.action}.
- eine neue Regel hinzufügen: Verwenden Sie hierfür den Button `+ Add Rule`{.action}.

Wenn Sie eine Regel hinzufügen, ergänzen Sie die angeforderten Informationen und klicken Sie dann auf `Add`{.action}.

In unserem Beispiel erlauben wir die SSH-Verbindung mit der Instanz.

![eine Regel hinzufügen](images/security-group4.png){.thumbnail}

Nachdem Sie die neue Regel hinzugefügt haben, warten Sie einige Minuten ab, bis diese umgesetzt ist.

```bash
root@serveur~$ ssh admin@149.xxx.xxx.177

last login: Tötet Oct 13 13:56:30 2015 from proxy-109-190-254-35.ovh.net
admin@serveur1~$
```

### Eine Sicherheitsgruppe auf einer Instanz konfigurieren <a name="instance-security-group"></a>

Stellen Sie über das Horizon-Interface das Menü `Compute`{.action} ab und wählen Sie `Instances`{.action} aus. Erstellen Sie auf dieser Seite eine neue Instanz über den `Launch Instance Button`{.action}.

Bei der Erstellung Ihrer Instanz können Sie über das Menü `Security Groups`{.action} die im vorherigen Schritt erstellte neue Sicherheitsgruppe auswählen.

![Sicherheitsgruppe zuweisen](images/security-group5.png){.thumbnail}

Sie können eine neue Sicherheitsgruppe auf eine bereits erstellte Instanz anwenden, indem Sie auf `Edit Security Groups`{.action} rechts neben der Instanz klicken.

![Sicherheitsgruppe ändern](images/security-group6.png){.thumbnail}

### Sicherheitsgruppe löschen

Um eine Sicherheitsgruppe zu löschen, setzen Sie links ein Häkchen und klicken Sie dann auf `Delete Security Groups`{.action}

![Sicherheitsgruppe löschen](images/security-group7.png){.thumbnail}

## Weiterführende Informationen

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
