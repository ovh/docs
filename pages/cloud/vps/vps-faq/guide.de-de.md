---
title: FAQ VPS OVHcloud
slug: vps-faq
section: 'Erste Schritte'
order: 1
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie beim geringsten Zweifel die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button «Mitmachen» auf dieser Seite.
>

## VPS FAQ

### Was ist ein VPS und wozu dient er?

Auf einem virtuellen Server können Webseiten (Präsentationsseiten, E-Commerce, Inhalte, Medien) gehostet werden, sowie auch Software-Anwendungen (Portale, Lösungen für Extranet und zur Gemeinschaftsarbeit, Wikis, CRM). Anders als beim Shared Hosting sind die Daten auf einer virtuellen und dem Nutzer vorbehaltenen Maschine isoliert.

Unserer Server verbinden ideal die Vorzüge von Webhosting und einem physischen Server. Sie kombinieren die Verlässlichkeit und Leistungsfähigkeit eines dedizierten Servers ohne dessen physische Einschränkungen.

### VPS oder Webhosting?

Die Verwendung eines VPS ist die logische Fortführung einer Webhosting-Nutzung. Die virtuellen privaten Server bieten mehr Möglichkeiten und eine größere Freiheit bei Einstellung, Zugang und Funktionen (Root-Zugang, freie Wahl der Software von Drittanbietern wie Apache Webserver oder PHP). Sie können außerdem ein SSL-Zertifikat oder jedes andere Programm Ihrer Wahl installieren.

Ein VPS muss mit Sorgfalt gewählt werden. Die Konfiguration muss den Anforderungen der Anwendungen entsprechen, und der VPS muss sich dem Wachstum Ihrer Nutzung anpassen können.

### VPS oder Plesk Webhosting?

Bei einem Plesk Webhosting wird Ihnen ein Speicherplatz mit vorinstalliertem Plesk zur Verfügung gestellt. Sie können in diesem Fall Ihre Webseiten verwalten, sind aber nicht der Administrator des Dienstes. Dieser kümmert sich ausschließlich um die Verwaltung.<br>
Wenn Sie sich für einen VPS entscheiden, sind Sie der Administrator Ihres Servers, und OVHcloud hat keinen Zugang zu dessen Inhalt. Sie sind also völlig frei, den VPS gemäß Ihren Anforderungen zu nutzen.

### Was sind die Vorteile eines VPS im Vergleich zu einem Dedicated Server?

Die VPS bieten den Vorteil, dass Sie sich nicht mehr um die Verwaltung der Hardware kümmern müssen: Überwachung des Zustands der Festplatten, des Arbeitsspeichers (RAM), der CPU. Sie sind für die meisten Arten von Internetnutzung ausgelegt, sowie für Projekte von bestimmter Größe.<br>
Wann ist ein Dedicated Server ratsam? Wenn Sie die Hardware verwalten und komplexere Infrastrukturen aufbauen möchten. Diese können z.B. ein privates Netzwerk (vRack) beinhalten. Oder aber wenn Sie außer Webservices komplexe Lösungen einsetzen möchten.

Bei stark ansteigenden Nutzerzahlen empfehlen sich entweder Dedicated Server oder Public Cloud Lösungen. Diese Dienstleistungen bieten umfassendere und flexiblere Infrastrukturen an, die ein starkes Wachstum begleiten können.

### Was sind die Unterschiede zwischen den Lösungen für VPS und für Public Cloud?

Der VPS ist ein Dienst, der auf Umgebungen der Produktion und deren Vorstufen ausgerichtet ist, die keine konstanten Leistungen benötigen.
Die OVHcloud Public Cloud bietet eine Multi-Server-Infrastruktur mit hoher Verfügbarkeit der Maschinen. Mit dieser Lösung ist ebenfalls ein privates Netzwerk, das vRack, verfügbar.

### Wie finde ich den richtigen OVHcloud VPS?

Um einen VPS zu wählen, der Ihren Anforderungen entspricht, überprüfen Sie bitte folgende Aspekte:

- die erforderliche Ressourcenmenge (Prozessor, RAM, Festplattenspeicher, Bandbreite)
- das erforderliche Betriebssystem (Linux oder Windows)
- die technischen Voraussetzungen, die für das reibungslose Funktionieren der Anwendung von wesentlicher Bedeutung sind (z.B. Lese-/Schreibgeschwindigkeit für Datenbanken).

So können Sie die richtige Wahl zwischen unseren VPS Lösungen treffen:

- **VPS Starter**: Einsteigermaschine für den Test unseres Angebots (mit nur einer Linux-Distribution, ohne Web-Verwaltungspanel).
- **VPS Value, Essential und Comfort**: ideale Lösungen für das Hosting von Webseiten, E-Commerce-Dienstleistungen oder Monitoringsystemen.
- **VPS Elite**: für E-Commerce-Seiten und Anwendungen mit hohem CPU- und RAM-Ressourcenbedarf geeignet.

### Wer kann einen VPS nutzen?

Die Verwaltung eines VPS setzt Grundkenntnisse der Serveradministration voraus. Diese Kenntnisse sind für die Verwaltung des auf der Maschine installierten Betriebssystems (Linux oder Windows) und die Verwaltung der Anwendungen unerlässlich. Sie brauchen einen VPS, aber haben möglicherweise nicht die notwendigen Kenntnisse? Kontaktieren Sie einen unserer Partner. 

Wenn Sie garantierte Ressourcen ohne Kenntnisse in der Serveradministration nutzen möchten, empfehlen wir Ihnen unser [Performance Webhosting](https://www.ovhcloud.com/de/web-hosting/performance-offer/).

### Wie kann ich mich mit meinem VPS verbinden?

Die Verbindung zu Ihrem VPS muss per SSH hergestellt werden. Hierfür verwenden Sie die IP Adresse, den Benutzernamen und das Passwort, die Ihnen per E-Mail nach der Bestellung zugesandt werden.<br>
Verwenden Sie die Anwendung PuTTY von einem Windows-Rechner aus. Über einen Linux-Rechner kann die SSH-Verbindung direkt über Terminal hergestellt werden.

Alle Details finden Sie in "[Erste Schritte mit einem VPS](../erste-schritte-mit-einem-vps/)".

### Kann ich mehrere Websites auf einem VPS hosten?

Ja. Ein VPS kann partitioniert und Ihren Anforderungen entsprechend strukturiert werden. So können Sie mehrere Webseiten oder Projekte hosten: Weisen Sie jeweils einen gesonderten und größendefinierten Speicherplatz zu. Vereinfachen Sie diese Prozesse, indem Sie eine Verwaltungssoftware für die Webseiten installieren, z.B. Plesk oder cPanel.

### Ist mein VPS gesichert?

OVHcloud führt keine Backups der Daten durch, die auf Ihrem VPS gehostet werden. Es ist also an Ihnen, dafür zu sorgen.<br>
Sie können hierzu folgende Dienstoptionen verwenden: das manuelle Backup (Snapshot) oder das automatische Backup.

### Wie kann ich meinen VPS schützen?

Ein VPS wird im "Rohzustand" ausgeliefert, in dem keine Sicherheitskonfiguration vorhanden ist. Die Absicherung des VPS sollte daher Priorität haben.
Lesen Sie hierzu die Anleitung "[VPS absichern](../vps-sicherheit/)".

### Welche Bandbreite ist meinem VPS zugewiesen? Ist sie garantiert?

Die auf den Angebotswebseiten angezeigte Bandbreite ist garantiert. Es handelt sich um die garantierte Mindestbandbreite, die Ihnen zugewiesen wird.

### Welches SLA wird auf meinen VPS angewendet?

Für alle VPS Reihen bietet OVHcloud ein SLA von 99,9%.

### Wie kann ich von einer IP-Adresse außerhalb meines Dienstes auf meinen Backup Storage zugreifen? <a name="backupstorage"></a>

Der Zugriff auf den Backup-Speicher Ihres VPS (FTP-Speicher) kann auf IP-Adressen beschränkt sein, die mit einem Dienst in Ihrem OVHcloud Kundenaccount verbunden sind.<br>
Um weitere IP-Adressen hinzuzufügen, von denen aus Zugriff erfolgen kann, können Sie die OVHcloud API verwenden. So können Sie Ihre Backup-Daten von einem anderen Dienst aus abrufen.

> [!warning]
> Es können nur OVHcloud-IPs autorisiert werden.
>

Loggen Sie sich auf [https://api.ovh.com/](https://api.ovh.com/) ein und verwenden Sie folgenden Aufruf:

> [!api]
>
> @api {POST} vps/{serviceName}/backupftp/access
>

Füllen Sie die Felder wie folgt aus:

- `serviceName`: Name Ihres VPS
- `cifs`: Anhaken, falls erforderlich
- `ftp`: Anhaken, falls erforderlich
- `ipBlock`: IP-Adresse, von der aus zugegriffen wird, in der Form `1.2.3.4/32` 
- `nfs`: Anhaken, falls erforderlich

![postapi](images/post-api.png){.thumbnail}

Um zu überprüfen, ob Ihre IP-Adresse erlaubt ist, verwenden Sie folgenden Anruf:

> [!api]
>
> @api {GET} /vps/{serviceName}/backupftp/access
>

![get api](images/get-api.png){.thumbnail}

## Weiterführende Informationen

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
