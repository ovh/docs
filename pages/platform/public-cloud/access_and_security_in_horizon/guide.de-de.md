---
title: Zugriffs- und Sicherheitseinstellungen in Horizon
excerpt: Erfahren Sie hier, wie Sie sicheren Zugang zu Ihren Instanzen einrichten
slug: access_and_security_in_horizon
legacy_guide_number: g1774
section: 'Horizon'
---

**Letzte Aktualisierung am 26.05.2021**

## Ziel

Das OpenStack Horizon-Interface bietet Optionen zur Konfiguration des Zugriffs auf Ihre Instanzen und andere Dienste.<br>
Sie können zum Beispiel Sicherheitsgruppen definieren, um ein- und ausgehende Verbindungen zu filtern, oder eine OpenRC-Datei herunterladen, die Zugangsdaten für die OpenStack API enthält.

## Voraussetzungen

- [Zugang zum Horizon-Interface](../horizon/)


## In der praktischen Anwendung

Loggen Sie sich im [Horizon-Interface](https://horizon.cloud.ovh.net/auth/login/) ein.

Die Zugriffs- und Sicherheitseinstellungen bestehen aus den folgenden Abschnitten, die über das Menü links zugänglich sind:

- **API Access** (unter `Project`{.action})

Die Tabelle unter "API Access" listet die Service-Endpunkte der OpenStack API auf.

![Sicherheit Horizon](images/api_access.png){.thumbnail}

Um die Werte für den API-Zugriff einzusehen, klicken Sie auf `View Credentials`{.action}.

Über den Button `Download OpenStack RC File`{.action} öffnen Sie ein Untermenü, aus dem Sie die passende RC-Datei zum Download auswählen können.

- **Key Pairs** (unter `Project`{.action} / `Compute`{.action})

In diesem Bereich können Sie SSH-Schlüsselpaare anlegen und verwalten. Sie können einfach einen öffentlichen und einen privaten Schlüssel erstellen und hinzufügen, indem Sie auf die Schaltfläche `Create Key Pair`{.action} klicken.

![Sicherheit Horizon](images/key_pairs.png){.thumbnail}

Wenn Sie einen vorhandenen Schlüssel hinzufügen möchten, klicken Sie auf `Import Public Key`{.action}. Im Popup-Fenster können Sie dann den Schlüssel direkt oder über eine Datei hinzufügen.

Dieser Teil der Benutzeroberfläche enthält einige grundlegende Anweisungen; ausführlichere Informationen zu SSH-Schlüsseln finden Sie in [dieser Anleitung](../create-ssh-keys/).

- **Security Groups** (unter `Project`{.action} / `Network`{.action})

Sicherheitsgruppen bestehen aus Filterregeln, die auf Netzwerkschnittstellen angewendet werden. Sie können sie verwenden, um den Zugriff auf Instanzen nach IP-Adressen und Ports zu verwalten.

![Sicherheit Horizon](images/security_groups.png){.thumbnail}

Fügen Sie eine Sicherheitsgruppe mit dem Button `Create Security Group`{.action} hinzu. Anschließend können Sie über `Manage Rules`{.action} in der Tabelle angepasste oder vorkonfigurierte einrichten.

## Weiterführende Informationen

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
