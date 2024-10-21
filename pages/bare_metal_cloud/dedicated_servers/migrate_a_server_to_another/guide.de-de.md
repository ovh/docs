---
title: Migrieren von Daten von einem Dedicated Server auf einen anderen
excerpt: Erfahren Sie hier, wie Sie Daten zwischen zwei dedizierten Servern migrieren können
updated: 2021-09-16
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie im Zweifelsfall die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button "Beitragen" auf dieser Seite.
>

## Ziel

Da sich Ihre Bedürfnisse und die OVHcloud Dedicated Server Produktreihen ständig weiterentwickeln, ist es manchmal notwendig, Server zu wechseln und die Daten entsprechend zu übertragen.

**Diese Anleitung erklärt alle notwendigen Maßnahmen zur Migration von Daten von einem Server auf einen anderen.**

> [!warning]
> OVHcloud stellt Ihnen Dienstleistungen zur Verfügung, für deren Konfiguration und Verwaltung Sie die alleinige Verantwortung tragen. Es liegt somit bei Ihnen, sicherzustellen, dass diese ordnungsgemäß funktionieren.
> 
> Diese Anleitung soll Sie bei allgemeinen Aufgaben bestmöglich unterstützen. Dennoch empfehlen wir Ihnen, einen [spezialisierten Dienstleister](https://partner.ovhcloud.com/de/directory/) zu kontaktieren und/oder Ihre Fragen in der OVHcloud Community zu stellen wenn Sie Schwierigkeiten oder Zweifel hinsichtlich der Verwaltung, Nutzung oder Implementierung der Dienste auf einem Server haben. Leider können wir Ihnen für administrative Aufgaben keine weitergehende technische Unterstützung anbieten. Weitere Informationen finden Sie am [Ende dieser Anleitung](#gofurther).
>

## Voraussetzungen

- Sie haben zwei [Dedicated Server](https://www.ovhcloud.com/de/bare-metal/) in Ihrem Kunden-Account, mit installiertem Betriebssystem.
- Sie haben administrativen Zugriff (sudo) auf Ihre Server.
- Sie verfügen über Systemadministrationskenntnisse.

## In der praktischen Anwendung

> [!warning]
>
> Einige der in dieser Anleitung aufgeführten Optionen sind möglicherweise nicht für Ihre Server-Reihe verfügbar oder befinden sich in einem anderen Konfigurationspanel (Kimsufi, So you Start).
>

### Vorbereitung Ihrer Umgebung

Sobald der neue Server in Ihrem Kunden-Account verfügbar ist, richten Sie diesen zunächst so ein (Betriebssystem, Software, Sicherheitskonfigurationen, etc.), dass er mit der vorherigen Umgebung identisch ist oder ihr zumindest so weit wie möglich entspricht.

Wenn eine Änderung von Betriebssystem- oder Software-Versionen erforderlich ist, überprüfen Sie bitte, dass die Datei-Speicherorte gleich bleiben und die Datenkompatibilität zwischen den Versionen gewährleistet ist.

### Datenmigration

Bei der Datenmigration wird in der Regel das Kopieren von Dateien von einem Server auf einen anderen erforderlich. Hierfür gibt es mehrere Möglichkeiten:

- Die einfachste Methode ist die Verwendung eines geeigneten Programms wie [SFTP](/pages/bare_metal_cloud/dedicated_servers/comment-deposer-ou-recuperer-des-donnees-sur-un-serveur-dedie-via-sftp).
- Die andere Option besteht darin, beide Server miteinander zu [synchronisieren](/pages/bare_metal_cloud/dedicated_servers/how-to-copy-data-from-one-dedicated-server-to-another-using-rsync).

### Verwendung des Backup Storage (nur verfügbar für OVHcloud und So you Start)

Mit der Option [Backup Storage](https://www.ovhcloud.com/de/bare-metal/backup-storage/) können Sie Daten auf einem externen Dienst speichern, der von Ihrem Server unabhängig ist.

> [!warning]
>
> Der Backup-Speicherplatz ist nur über OVHcloud Server und IP-Adressen in derselben Zone verfügbar.
>
> Wenn zum Beispiel Backup Storage auf einem Server im Rechenzentrum *SBG* aktiviert ist, können Server in Rechenzentren der Regionen *GRA* und *RBX* darauf zugreifen. Server an den Standorten *BHS* oder *WAW* haben jedoch keinen Zugriff auf diesen Speicherplatz.
>

Sie können Zugriff auf den Backup Storage von Ihrem neuen Server aus erlauben. So verfügen Sie über ein Gateway zum Datentransfer.

Weitere Informationen dazu finden Sie in unserer Anleitung "[Backup Storage auf einem Dedicated Server verwenden](/pages/bare_metal_cloud/dedicated_servers/services_backup_storage)".

### Migration einer Additional IP (nur verfügbar für OVHcloud und So you Start)

> [!warning]
>
> - Die Haupt-IP-Adresse eines Servers kann nicht migriert werden und wird mit dem Auslaufen des alten Server-Abos verloren gehen.
>
> - Sie können eine Additional IP von einem So you Start Account zu einem OVHcloud Kunden-Account migrieren. Bei diesem Vorgang entstehen die regulären IP-Einrichtungsgebühren.
>
> - Es ist nicht möglich, eine Additional IP von einem OVHcloud Kunden-Account zu einem So you Start Account zu migrieren.
>

Wenn IP-Adressen-Reputation für Sie wichtig ist, empfehlen wir Ihnen dringend die Verwendung von [Additional IPs](https://www.ovhcloud.com/de/bare-metal/ip/), da diese bei einer Migration beibehalten werden können.

Wenn Sie diese IP-Adressen in Ihrem Kunden-Account haben, können Sie diese einfach auf den neuen Server umziehen.
Lesen Sie hierzu unsere Anleitung: [Eine Additional IP umziehen](/pages/bare_metal_cloud/dedicated_servers/move-failover-ip).

> [!alert]
>
> Beim Löschen des Quell-Servers, für den eine oder mehrere Optionen bestellt wurden (Backup-Storage, Additional IP), werden diese Optionen endgültig gelöscht.
>
> Alle Änderungen müssen daher abgeschlossen werden, bevor der Dienst gelöscht wird.
>

Sobald die Daten auf dem neuen Server verfügbar sind, müssen Sie möglicherweise Ihre DNS-Konfiguration ändern, zum Beispiel, wenn die Haupt-IP-Adresse für die Erreichbarkeit Ihrer Dienste verwendet wurde.

Weitere Informationen finden Sie in unserer Dokumentation zu [Domains und DNS](/products/web-cloud-domains-domain-names).

## Weiterführende Informationen <a name="gofurther"></a>

Kontaktieren Sie für spezialisierte Dienstleistungen die [OVHcloud Partner](https://partner.ovhcloud.com/de/directory/).

Wenn Sie Schulungen oder technische Unterstützung bei der Implementierung unserer Lösungen benötigen, wenden Sie sich an Ihren Vertriebsmitarbeiter oder klicken Sie auf [diesen Link](https://www.ovhcloud.com/de/professional-services/), um einen Kostenvoranschlag zu erhalten und eine persönliche Analyse Ihres Projekts durch unsere Experten des Professional Services Teams anzufordern.

Für den Austausch mit unserer Community gehen Sie auf <https://community.ovh.com/en/>.
