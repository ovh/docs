---
title: "Backup Agent - Bekannte Einschränkungen"
excerpt: "Erfahren Sie die Einschränkungen und Grenzen des Backup Agent Produkts"
updated: 2026-01-27
---

## Ziel

Dieses Handbuch beschreibt die bekannten Einschränkungen und Grenzen des Backup Agent Produkts, die Sie vor der Nutzung des Dienstes kennen sollten.

## Bekannte Einschränkungen

### Backup-Richtlinie

- Die Backup-Richtlinie ist eingeschränkt, Sie können sie nicht ändern.
- Sie können keinen Backup nur auf eine Liste von Dateien oder Ordnern konfigurieren.
- Sie können das Datum und die Uhrzeit der Backup-Auslöser nicht ändern (dies wird Gegenstand einer zukünftigen Verbesserung sein).

### VSPC-Zugriff

- Der von Ihnen empfangene Benutzer ist schreibgeschützt, Sie können keine Änderungen direkt im VSPC vornehmen.

### Vault

- Sie können keine zusätzlichen Vault erstellen, diese werden automatisch erstellt, um sicherzustellen, dass Ihre Daten nicht im gleichen Rechenzentrum wie Ihr Bare Metal Server gehostet werden.
- Sie können den Vault an einem Agent nicht ändern.

### Betriebssystemeinschränkungen

- Sie finden die Liste der kompatiblen Betriebssysteme für den Veeam Agent [hier](https://helpcenter.veeam.com/docs/agentforlinux/userguide/system_requirements.html?ver=13).

### Kompatibilität mit anderen OVHcloud Produkten

- Derzeit ist das Backup Agent Produkt nur mit Dedicated Servern kompatibel, Sie können Ihren Agent nicht auf anderen Produkten nutzen.

## Weitere Informationen

Treten Sie unserer [User Community](/links/community) bei.