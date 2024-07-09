---
title: "Migration von MySQL zu Percona Server für MySQL"
excerpt: "Entdecken Sie die Vorteile der Migration von Oracle MySQL auf Percona Server für MySQL"
updated: 2024-07-09
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie im Zweifelsfall die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button "Beitragen" auf dieser Seite.
>

## Ziel

Als Teil unseres kontinuierlichen Engagements für leistungsstarke und zuverlässige Lösungen hat OVHcloud beschlossen, Shared-Database-Dienste von Oracle MySQL auf *Percona Server for MySQL* zu migrieren.

In dieser Anleitung erfahren Sie, was diese Umstellung bedeutet und zeigt audf, warum dieses Update auf Percona Server keine negativen Auswirkungen auf die Verwendung Ihrer MySQL-Datenbank hat.

**Diese Anleitung erklärt die Vorteile der Migration von Oracle MySQL auf Percona Server für MySQL.**

## Voraussetzungen

- Sie verfügen über ein [OVHcloud Webhosting](/links/web/hosting) Angebot mit einer dazugehörigen OVHcloud Shared Datenbank (MySQL).

## In der praktischen Anwendung

### Vergleich von Percona Server für MySQL mit Oracle MySQL

Percona Server für MySQL ist eine verbesserte und vollständig kompatible Version von MySQL, die eine bessere Leistung und zusätzliche Funktionen bietet, ohne die Kompatibilität mit vorhandenen MySQL-Anwendungen zu beeinträchtigen. Zur Veranschaulichung finden Sie hier eine Vergleichstabelle, die die Funktionen von Oracle MySQL und Percona Server für MySQL vergleicht.

|Feature|MySQL von Oracle|Percona Server für MySQL|
|---|---|---|
|SQL-Kompatibilität|Vollständig|Vollständig|
|Support für InnoDB-Engines|Ja|Ja|
|Skalierbarkeit|Standard|Scope|
|Verwaltungs- und Monitoringtools|Basic|Advanced|
|Sicherheit|Standard|Erhöht|

### Auswirkungen auf Endbenutzer

Für Sie als Endbenutzer ist die Umstellung auf Percona Server für MySQL transparent:

- **Keine Codeänderungen erforderlich**: Ihre Anwendungen funktionieren wie zuvor ohne Codeänderungen.
- **Verbesserte Leistung**: Durch die Optimierung der InnoDB Storage-Engine und die erweiterten Monitoring-Tools eird eine Leistungssteigerung ermöglicht.
- **Erweiterter Support**: Percona bietet umfassenden technischen Support, der eine effizientere Problemlösung ermöglichen kann.

### Fazit

Die Migration von Oracle MySQL zu Percona Server für MySQL hat zum Ziel, die Performance und Stabilität der Shared Datenbanken bei OVHcloud zu verbessern. Dieses Update ist so konzipiert, dass es für MySQL-Benutzer transparent ist, ohne Unterbrechung des Dienstes oder Änderung der Benutzeroberfläche. Wir garantieren, dass der Übergang reibungslos verläuft, um die Kontinuität und die Qualität der OVHcloud Dienste aufrechtzuerhalten.

## Weiterführende Informationen

[Eine Datenbank auf Ihrem Webhosting erstellen](/pages/web_cloud/web_hosting/sql_create_database)

Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, beachten Sie unsere [Support-Angebote](/links/support).

Treten Sie unserer [User Community](/links/community) bei.
