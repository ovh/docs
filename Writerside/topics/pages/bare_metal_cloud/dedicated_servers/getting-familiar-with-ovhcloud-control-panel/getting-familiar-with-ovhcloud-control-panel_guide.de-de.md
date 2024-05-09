---
title: "Kimsufi und So you Start Kunden - Einführung in das OVHcloud Kundencenter"
excerpt: "Navigationshilfe für Ihr OVHcloud Kundencenter"
updated: 2024-04-04
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie im Zweifelsfall die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button "Beitragen" auf dieser Seite.
>

## Ziel

OVHcloud kündigt die Zusammenfassung aller Kimsufi, So you Start und Rise Dedicated Server in einer Produktlinie namens Eco an, um Ihnen einen besseren Überblick über unsere Konfigurationen zu geben. Aufgrund dieser Änderungen können Sie nun alle Ihre Dienste unabhängig von ihrer Angebotsreihe über das OVHcloud Kundencenter verwalten. Um Sie bei dieser Umstellung zu unterstützen, wenn Sie sich für einen Server in der Eco-Produktlinie entschieden haben, haben wir diese Anleitung erstellt, um Ihnen das OVHcloud Kundencenter und dessen Optionen vorzustellen.

**Diese Anleitung hilft Ihnen, sich mit dem OVHcloud Kundencenter vertraut zu machen.**

> [!warning]
> Bitte beachten Sie, dass trotz der Änderung des Kundeninterface einige Optionen für Kimsufi und So you Start Server möglicherweise nicht verfügbar sind.
>

## In der praktischen Anwendung

### Dashboard

![Dashboard](OVHclouddashboard.png){.thumbnail}

Wenn Sie einen Server aus der Eco-Produktreihe erworben haben, wird Ihr Dashboard nun das aus dem OVHcloud Kundencenter sein. Dieses OVHcloud Dashboard enthält eine Zusammenfassung aller Ihrer Dienstleistungen. Das Interface enthält mehrere Abschnitte, die es Ihnen erlauben, sofort auf einen Dienst zuzugreifen.<br>
In der rechten Spalte erhalten Sie Zugriff auf Ihre persönlichen Informationen, Ihre Kundenkennung und Ihren Support (falls zutreffend).<br>
Sie bietet auch nützliche Links zum Schnellzugriff.

### Zugang zum Server

![server list](listserversOVHcloud.png){.thumbnail}

In den Kimsufi und So you Start Interfaces können Sie über das Dashboard Ihren Server/die Liste der Server einsehen.<br>
Klicken Sie im OVHcloud Kundencenter zunächst auf das Menü `Bare Metal Cloud`{.action} und dann auf `Dedicated Server`{.action}, um Ihre Server anzuzeigen.<br>
Wenn Sie mehrere Server haben, können Sie diese über den Button `Alle meine Server`{.action} für einen einfachen Zugriff auflisten.

### Server-Interface

Klicken Sie im Menü `Dedicated Server`{.action} auf den Server Ihrer Wahl, um auf dessen Interface zuzugreifen.

![server interface](serverinterface01.png){.thumbnail}

![server interface](serverinterface02.png){.thumbnail}

**Allgemeine Informationen**: In diesem Abschnitt finden Sie alle Informationen zu Ihrem Server.

- Name: Klicken Sie auf `...`{.action} neben dieser Option, um den Namen Ihres Servers zu ändern.
- Boot: Klicken Sie auf `...`{.action} neben dieser Option, um den Netboot-Modus Ihres Servers auf den *Rescue-Modus*, den *normalen Modus* (von der Festplatte) oder den *Netzwerk-Modus* umzustellen.
- Neuestes von OVHcloud installiertes Betriebssystem: Klicken Sie `...`{.action} neben dieser Option, um Ihren Server neu zu installieren.

**Dienststatus**

- Status: Klicken Sie auf `...`{.action} neben dieser Option, um Ihren Server neu zu starten oder zu löschen.
- Monitoring: Klicken Sie auf `Konfigurieren`{.action}, um die [Monitoring-Einstellungen Ihres Servers zu ändern](getting-started-with-dedicated-server#monitoring-server.).

**Network**

- IPV4: Klicken Sie auf `...`{.action} neben dieser Option, um Ihre IP zu verwalten.
- Reverse: Klicken Sie auf die `...`{.action} neben diesem Abschnitt, um Ihren Reverse DNS einzugeben/zu ändern.

**Sekundärer DNS**: Konfigurieren Sie hier Ihren sekundären DNS. Weitere Informationen finden Sie in [dieser Anleitung](adding-secondary-dns-on-dedicated-server1.).

**Storage-Backup** (ausschließlich verfügbar für OVHcloud Server und So you Start Server, einschließlich derjenigen der Eco Reihen): Bestellen und konfigurieren Sie Ihren Backup Storage hier. Weitere Informationen finden Sie in [dieser Anleitung](services_backup_storage1.).

**Eingriffe**: Hier finden Sie die laufenden und bisherige Interventionen auf Ihrem Server.

**IPMI** (ausschließlich verfügbar für OVHcloud Server und bestimmte So you Start Server, einschließlich derjenigen der Eco Reihen): Verwenden Sie hier das IPMI-Tool oder das KVM over IP Ihres Servers. Weitere Informationen zur Verwendung dieses Tools finden Sie in [dieser Anleitung](using_ipmi_on_dedicated_servers1.).

**Tasks**: sehen Sie hier die aktuellen Tasks Ihres Servers.

Weitere Informationen zur Verwaltung Ihres Dedicated Servers über das OVHcloud Kundencenter finden Sie in [dieser Anleitung](getting-started-with-dedicated-server1.).

### IP Bereich

Um auf den Bereich **IP** in Ihrem OVHcloud Kundencenter zuzugreifen, klicken Sie auf das Menü `Bare Metal Cloud`{.action} und öffnen Sie `Network`{.action}. Klicken Sie dann auf `IP`{.action}:

![ip](manageIP2023.png){.thumbnail}

### Tab Lizenzen (nicht für Kimsufi verfügbar)

Um im OVHcloud Kundencenter auf den Tab **Lizenzen** zuzugreifen, klicken Sie auf das Menü `Bare Metal Cloud`{.action} und anschließend auf `Lizenzen`{.action}:

![license](managelicencesOVHcloud.png){.thumbnail}

### Support, Abrechnung und Accountverwaltung

Im Kimsufi oder So you Start Kundencenter sind diese Optionen oben rechts unter den einzelnen Tabs verfügbar.<br>
Im OVHcloud Kundencenter werden diese Optionen in einem gemeinsamen Kundencenter zusammengefasst. Klicken Sie oben rechts auf Ihren Namen und klicken Sie auf Ihre Initialen, um auf die Rubrik `Meinen Account verwalten zu können`.

![factu](accountOVHcloud.png){.thumbnail}

- **Allgemeine Informationen**: In diesem Bereich können Sie die Angaben zu Ihrem Account und Ihrer letzten Rechnung einsehen und auf verschiedene Shortcuts zugreifen.
- **Sicherheit**: In diesem Bereich können Sie die Sicherheitseinstellungen Ihres Accounts verwalten. Weitere Informationen finden Sie in [dieser Anleitung](all_about_username1.).
- **Empfangene E-Mails**: In diesem Bereich finden Sie alle E-Mails, die von OVHcloud gesendet wurden, mit Ausnahme der Support-Anfragen.
- **Mein Support-Level** (ausschließlich für OVHcloud Dienste verfügbar): Weitere Informationen zum von OVHcloud angebotenen Support finden Sie in diesem Abschnitt.
- **Verwaltung der Nutzer**: In dieser Rubrik können Sie Ihre Benutzer verwalten. Weitere Informationen finden Sie in [dieser Anleitung](ovhcloud-users-management1.).
- **Meine Rechnungen**: Hier können Sie Ihre Rechnungen einsehen, die Zahlungen mit Ihrem Standardzahlungsmittel nachverfolgen und Ihre Guthaben einsehen. Weitere Informationen finden Sie in [dieser Anleitung](invoice_management1.).
- **Meine Dienste**: In dieser Rubrik können Sie alle Ihre Dienstleistungen und Verträge einsehen.
- **Meine Zahlungsarten**: In diesem Bereich haben Sie Zugriff auf Ihr aktuelles Zahlungsmittel, Ihren Prepaid-Account sowie Ihre OVHcloud Gutscheine. Dort finden Sie auch die Option, eine Zahlungsmethode hinzuzufügen oder zu löschen. Weitere Informationen zur Verwaltung Ihrer Zahlungsmittel finden Sie in [dieser Anleitung](manage-payment-methods1.).
- **Meine Bestellungen**: Sie finden die Übersicht Ihrer Bestellungen auf dieser Seite. Weitere Informationen finden Sie in [dieser Anleitung](managing_ovh_orders1.).
- **Meine Kontakte**: In diesem Bereich können Sie die zu Ihren Dienstleistungen gehörenden Kontakte anzeigen und verwalten. Im Tab **Meine Anfragen** finden Sie die Anfragen zur Änderung von Kontakten, die Sie über Ihren Kunden-Account gesendet haben, sowie die eingegangenen Anfragen zur Verwaltung von Dienstleistungen. Weitere Informationen zur Verwaltung Ihrer Servicekontakte finden Sie in [dieser Anleitung](managing_contacts1.).
- **Meine Support-Anfragen**: In dieser Rubrik können Sie Ihre Support-Anfragen eröffnen/anzeigen.

## Weiterführende Informationen

Hier einige zusätzliche Anleitungen, die Ihnen bei Ihren ersten Schritten helfen:

[In das OVHcloud Kundencenter einloggen](ovhcloud-account-login1.)<br>
[Das Passwort Ihres Kunden-Accounts anlegen und verwalten](manage-ovh-password1.)<br>
[OVHcloud Kunden-Account absichern und persönliche Informationen verwalten](all_about_username1.)<br>
[Die Kontakte Ihrer Dienste verwalten](managing_contacts1.)<br>
[SSH-Schlüssel erzeugen](creating-ssh-keys-dedicated1.)<br>
[Was sind die IP-Adressen des OVHcloud Monitorings?](network_ip_monitoring1.)

Wenn Sie Schulungen oder technische Unterstützung bei der Implementierung unserer Lösungen benötigen, wenden Sie sich an Ihren Vertriebsmitarbeiter oder klicken Sie auf [diesen Link](https://www.ovhcloud.com/de/professional-services/), um einen Kostenvoranschlag zu erhalten und eine persönliche Analyse Ihres Projekts durch unsere Experten des Professional Services Teams anzufordern.

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
