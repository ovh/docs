---
title: "Backup Agent - Bekannte Einschränkungen"
excerpt: "Entdecken Sie die Einschränkungen und Limitierungen des Backup Agent Produkts"
updated: 2026-01-23
---

## Ziel

Diese Anleitung beschreibt die bekannten Einschränkungen und Limitierungen des Backup Agent Produkts, die Sie vor der Nutzung des Dienstes kennen sollten.

## Bekannte Einschränkungen

### Backup-Richtlinie

- Die Backup-Richtlinie ist eingeschränkt, Sie können sie nicht ändern.
- Sie können kein Backup nur für eine Liste von Dateien oder Ordnern konfigurieren.
- Sie können das Datum und die Uhrzeit der Backup-Auslöser nicht ändern (dies wird als Verbesserung in der Zukunft betrachtet).

### VSPC-Zugriff

- Der Benutzer, den Sie erhalten, ist schreibgeschützt, Sie können keine Änderungen direkt in der VSPC vornehmen.

### Vault

- Sie können keine zusätzlichen Vaults erstellen, sie werden automatisch erstellt, um sicherzustellen, dass Ihre Daten nicht im selben Rechenzentrum gehostet werden, in dem sich Ihr Bare Metal Server befindet.
- Sie können den Vault eines Agents nicht ändern.

### Betriebssystem-Limitierungen

- Sie finden die Liste der kompatiblen Betriebssysteme für den Veeam Agent hier <https://helpcenter.veeam.com/docs/agentforlinux/userguide/system_requirements.html?ver=1>

### Kompatibilität mit anderen OVHcloud Produkten

- Derzeit ist das Backup Agent Produkt nur mit Dedicated Servern kompatibel, Sie können Ihren Agent nicht auf anderen Produkten verwenden.

## Weiterführende Informationen

Treten Sie unserer [User Community](/links/community) bei.

