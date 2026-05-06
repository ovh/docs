---
title: "Additional IP auf einem Dedicated Server umziehen"
excerpt: "Ziehen Sie eine Additional IP-Adresse zwischen Dedicated Servern über das OVHcloud Kundencenter oder die API um."
updated: 2026-01-21
---

> [!primary]
> Diese Anleitung befasst sich mit dem Umzug von Additional IPv4-Adressen, die nach [regionalen Beschränkungen](#limitations) limitiert ist.
>
> Die Konfiguration von Additional IPs in einem vRack (privates Netzwerk) umgeht diese regionalen Einschränkungen, da die Abhängigkeit von einer einzelnen Region nicht besteht und gleichzeitig die Anbindung an eine breite Palette von OVHcloud Diensten vereinfacht wird.
>
> Erfahren Sie, wie Sie Additional IPs in einem vRack mithilfe unserer Anleitungen für [IPv4](/pages/bare_metal_cloud/dedicated_servers/configuring-an-ip-block-in-a-vrack) und [IPv6](/pages/bare_metal_cloud/dedicated_servers/configure-an-ipv6-in-a-vrack) konfigurieren.
>

## Ziel

Additional IP-Adressen können zwischen den von Ihnen verwendeten Diensten verschoben werden. Dies bietet einen Vorteil, da Sie Ihre IP-Reputation und SEO beibehalten und die Kontinuität des Dienstes Ihrer Anwendungen und Systeme verbessern können.

Mit dieser Technologie können Sie IP-Adressen von einem Dienst zum anderen in weniger als einer Minute austauschen, praktisch ohne Unterbrechung für Ihre Nutzer. Dies ist nützlich für Service-Migrationen (z.B. Verschieben von Projekten von der Entwicklung in die Produktion) oder beim Wechsel zu einem Sicherungsserver während eines technischen Problems.

> [!primary]
> Sie können Ihre IP-Adressblöcke jedem kompatiblen Dienst innerhalb einer Region zuweisen. IP-Adressblöcke in einer Region können innerhalb dieser Region von einem Rechenzentrum in ein anderes verschoben werden, aber nicht aus dieser Region heraus.
>
> Eine Ausnahme bilden die Regionen eu-west-gra, eu-west-rbx und eu-west-sbg, da hier IP-Adressblöcke zwischen diesen 3 Regionen verschoben werden können.
>
> Eine Region ist ein geografisches Gebiet, das aus einem oder mehreren Rechenzentren besteht.
>
> Migrationen funktionieren nur für ganze Blöcke. Es ist nicht möglich, einzelne IPs innerhalb eines Blocks zu migrieren.

**Diese Anleitung erklärt, wie Sie eine Additional IP über Ihr OVHcloud Kundencenter oder die OVHcloud API umziehen. Außerdem wird erklärt, wie Sie eine Additional IP von einem So you Start Kundencenter in ein OVHcloud Kundencenter übertragen können.**

## Voraussetzungen

- Sie haben einen [Dedicated Server](/links/bare-metal/bare-metal) in Ihrem Kunden-Account.
- Sie verfügen über eine [Additional IP](/links/network/additional-ip).

<!-- CP-NAV-START:network-public-ip -->
---

### Zugriff auf das OVHcloud Kundencenter

- **Direkter Link:** [Public IP](/links/control-panel/network-public-ip)
- **Navigationspfad:** `Network`{.action} > `Öffentliche IP`{.action}

---
<!-- CP-NAV-END:network-public-ip -->

> [!warning]
> Diese Funktion kann nur eingeschränkt oder nicht verfügbar sein, falls ein Dedicated Server der [**Eco** Produktlinie](/links/bare-metal/eco-about) eingesetzt wird.
>
> Weitere Informationen finden Sie auf der [Vergleichsseite](/links/bare-metal/eco-compare).
>

> [!warning]
> Wenn die Additional IP oder eine der IP-Adressen des Blocks eine virtuelle MAC-Adresse hat, muss der Zielserver die vMAC-Funktionalität unterstützen.
> Weitere Informationen finden Sie in [dieser Anleitung](/pages/bare_metal_cloud/dedicated_servers/network_support_virtual_mac).
>
> Andernfalls müssen die vMACs vor dem Transfer von den Additional IPs entfernt werden.

## In der praktischen Anwendung

> [!primary]
> Wenn ein IP-Block mit eindeutigen virtuellen MAC-Adressen zwischen zwei Servern verschoben wird, werden diese Adressen vorübergehend ausgesetzt. Sie werden auf dem neuen Server angezeigt, sobald der Umzug abgeschlossen ist.
>
> Auf der anderen Seite können Blöcke mit doppelten virtuellen MAC-Adressen nicht verschoben werden. Sie müssen zuerst die mehrfach verwendeten virtuellen MAC-Adressen des zu verschiebenden Blocks löschen.
>
> Wenn ein IP-Block in das vRack verschoben/hinzugefügt wird, ist er nicht mehr an einen physischen Server gebunden. In diesem Fall geht jede virtuelle MAC-Adresse bei der Übertragung verloren.
>

### Geolokalisierte IP-Blöcke

Die Geolokalisierung einer IP-Adresse ist unabhängig von ihrer Heimatregion.

Wenn Sie einen Additional IP Block auf einem Server bestellen, aber einen anderen Standort (Geolokalisierung) für den IP Block wählen, kann dieser IP Block nicht auf einen anderen Server im selben Land wie dieser Block verschoben werden.  
Beispielsweise kann ein in Polen geolokalisierter Additional IP Block (eu-central-war), der auf einem Server in einem französischen Rechenzentrum (eu-west-gra) bestellt wird, nicht auf einen Server in einem polnischen Rechenzentrum (eu-central-war) umgezogen werden. Der IP-Block kann nur auf einen berechtigten Server in einem Rechenzentrum in Frankreich umgezogen werden.

### Additional IP über das OVHcloud Kundencenter umziehen

> [!warning]
> Nur ein Block mit einer einzigen Adresse (/32) kann von einem dedizierten Server auf einen VPS verschoben werden.
>

Sie können das Dropdown-Menü unter **Meine öffentlichen IP-Adressen und dazugehörigen Dienste** verwenden und `Alle Additional IP`{.action} auswählen, um Ihre Dienste entsprechend zu filtern, oder die gewünschte IP-Adresse direkt in die Suchleiste eingeben.

![manage IPs](/pages/assets/screens/control_panel/product-selection/bare-metal-cloud/network/manage_additional_ips_new.png){.thumbnail}

Klicken Sie anschließend auf die Schaltfläche `⁝`{.action} rechts neben der zusätzlichen IP-Adresse oder dem IP-Adressblock, den Sie verschieben möchten, und wählen Sie `Verschieben Additional IP`{.action}.

![Kontextmenü zum Umziehen einer Additional IP-Adresse](images/move_ip_1_new.png){.thumbnail}

Wählen Sie im Popup-Fenster aus dem Menü den Dienst aus, zu dem die IP-Adresse verschoben werden soll.

![Zieldienst für Additional IP auswählen](images/move_ip_2_new.png){.thumbnail}

Klicken Sie auf `Weiter`{.action} und dann auf `Bestätigen`{.action}.

> [!warning]
> Beachten Sie, dass bei einigen Produkten IP-Adressen (oder Blöcke) zunächst in einen IP-Parkplatz (einen temporären Speicherort) verschoben werden müssen, bevor sie zum gewünschten Produkt verschoben werden können.
>
> Um IP-Blöcke in ein bestimmtes vRack-Netzwerk zu verschieben, verwenden Sie die **vRack-Verwaltung**, auf die Sie zugreifen können, indem Sie das Menü `Network`{.action} in der linken Seitenleiste öffnen und dann `Private vRack Netzwerk`{.action} auswählen. 
>

### Additional IP über die API umziehen

Loggen Sie sich auf der [Webseite der OVHcloud API](/links/api) ein.

Es ist am besten, zunächst zu prüfen, ob die IP-Adresse umgezogen werden kann.  
Um zu überprüfen, ob die IP auf einen Ihrer Dedicated Server umgezogen werden kann, verwenden Sie folgenden Aufruf:

> [!api]
>
> @api {v1} /dedicated/server GET /dedicated/server/{serviceName}/ipCanBeMovedTo
>

- `serviceName`: die Referenz des Zielservers
- `ip`: die umzuziehende Additional IP

Um die IP-Adresse umzuziehen, verwenden Sie folgenden Call:

> [!api]
>
> @api {v1} /dedicated/server POST /dedicated/server/{serviceName}/ipMove
>

- `serviceName`: die Referenz des Zielservers
- `ip`: die umzuziehende Additional IP

### Verschieben einer Additional IP von einem So you Start Kundencenter zu einem OVHcloud Kundencenter

Um eine Additional IP von einem SYS Kundencenter zu einem OVHcloud Kundencenter zu transferieren, gibt es einige Dinge, die Sie beachten sollten:

- Für das Verschieben einer Additional IP fallen Installationsgebühren an. Die IP-Adresse wird nicht verschoben, wenn die Rechnung nicht bezahlt wurde.
- Es ist nicht möglich, eine Additional IP von einem OVHcloud Kundencenter zu einem So you Start Kundencenter zu transferieren.
- Stellen Sie sicher, dass sich der Server, auf den Sie die Additional IPs verschieben, in derselben kompatiblen Region wie die IPs befindet. Siehe Abschnitt "Einschränkungen" weiter unten.

Melden Sie sich zunächst bei Ihrem So you Start Kundencenter an und klicken Sie im Haupt-Dashboard auf `IP`{.action}.

![IP-Bereich von So you Start im Dashboard](images/sys-ip-section.png){.thumbnail}

Klicken Sie auf das Zahnrad neben der entsprechenden IP und wählen Sie `Failover IP umziehen`{.action}.

![Option "Failover-IP umziehen" im So you Start Menü](images/move-ip-sys.png){.thumbnail}

Wählen Sie `Auf eine OVH-Dienstleistung umziehen`{.action}, geben Sie Ihre OVHcloud Kundenkennung, auch "NIC-handle" ein und klicken Sie auf `Weiter`{.action}.

![Option "Zu einem OVH-Dienst umziehen" und NIC-Handle eingeben](images/move-to-ovh.png){.thumbnail}

Dadurch wird ein Code (Token) generiert. Speichern Sie diesen.

![Generierter Token-Code für den IP-Transfer](images/token-id.png){.thumbnail}

Melden Sie sich bei Ihrem [OVHcloud Kundencenter](/links/manager) an, klicken Sie im Menü links auf `Network`{.action} und dann auf `Öffentliche IP-Adressen`{.action}.

Klicken Sie auf das Zahnrad auf der rechten Seite und wählen Sie `Meine IP-Adressen von SyS bei OVHcloud importieren`{.action}.

![Option zum Importieren von IP-Adressen von SyS zu OVHcloud](images/import-ip-to-ovh.png){.thumbnail}

Ein Popup-Fenster wird angezeigt, in dem Sie die Additional IP (oder den Block) und das Token (das im Konto So you Start abgerufen wurde) eingeben können. Klicken Sie dann auf `Weiter`{.action}.

![Additional IP und Token für den Import eingeben](images/Step-1.png){.thumbnail}

Wählen Sie den Zielserver aus und klicken Sie auf `Weiter`{.action}. Wenn der Dedicated Server mit der IP-Adresse kompatibel ist, wird eine grüne Meldung angezeigt. Ist dies nicht der Fall, erhalten Sie eine Fehlermeldung.

Klicken Sie auf `Weiter`{.action}.

![Zielserver mit Kompatibilitätsprüfung auswählen](images/Step-2.png){.thumbnail}<br>
![Bestätigung der Serverkompatibilität](images/Step-2.1.png){.thumbnail}

Im nächsten Fenster wird die Dauer automatisch ausgewählt und die Gebühr angezeigt. Klicken Sie auf `Weiter`{.action}, um fortzufahren.

![Zusammenfassung von Laufzeit und Gebühren für den IP-Transfer](images/Step-3.png){.thumbnail}

Markieren Sie `Ich akzeptiere die Verträge`{.action}, um den Dienstleistungsbedingungen zuzustimmen, sobald Sie sie gelesen haben. Klicken Sie dann auf `Weiter`{.action}.

![Kontrollkästchen "Verträge akzeptieren" für den IP-Transfer](images/Step-4.png){.thumbnail}

Beachten Sie die Bestellübersicht und klicken Sie auf `Bestätigen`{.action}.

![Bestellübersicht und Bestätigung für den IP-Transfer](images/Step-5.png){.thumbnail}

Sie werden auf eine neue Seite weitergeleitet, um die Zahlung vorzunehmen.

Sobald die Zahlung erfolgt ist, wird Ihre Additional IP auf Ihr OVHcloud Kundencenter übertragen und mit dem ausgewählten Server verbunden. Dieser Vorgang kann einige Zeit in Anspruch nehmen.

### Einschränkungen <a name="limitations"></a>

Beachten Sie, dass beim Verschieben eines IP-Adressblocks gewisse Einschränkungen bestehen. Die folgende Tabelle zeigt die Kompatibilität zwischen den Regionen.

Weitere Informationen finden Sie in unserer Liste der [verfügbaren Regionen](/links/network/additional-ip).

| Name der Region  | eu-west-par | eu-west-gra | eu-west-rbx | eu-west-sbg | eu-west-lim | eu-central-war | eu-west-eri | ca-east-bhs | ca-east-tor | ap-southeast-sgp | ap-southeast-syd |
|----------------|-------------|-------------|-------------|-------------|-------------|----------------|-------------|-------------|-------------|-------------|-------------|
| eu-west-par    |      ✅        |      ❌       |     ❌        |     ❌        |      ❌       |      ❌          |       ❌       |       ❌      |     ❌      | ❌      |     ❌      |
| eu-west-gra    |       ❌      |       ✅       |      ✅       |      ✅      |       ❌       |       ❌         |       ❌        |     ❌        |    ❌        | ❌      |     ❌      |
| eu-west-sbg    |       ❌        |      ✅       |      ✅       |      ✅       |      ❌       |      ❌           |      ❌       |      ❌        |    ❌        | ❌      |     ❌      |
| eu-west-rbx |       ❌        |      ✅       |      ✅       |      ✅       |      ❌       |      ❌           |      ❌       |      ❌        |    ❌        | ❌      |     ❌      |
| eu-west-lim    |        ❌       |      ❌       |      ❌       |     ❌        |     ✅       |      ❌         |      ❌        |     ❌        |     ❌       | ❌      |     ❌      |
| eu-central-war |      ❌       |      ❌       |     ❌       |      ❌       |      ❌        |       ✅         |       ❌       |       ❌       |       ❌        | ❌      |     ❌      |
| eu-west-eri    |         ❌      |       ❌      |        ❌     |       ❌     |      ❌       |       ❌         |     ✅        |      ❌         |      ❌       | ❌      |     ❌      |
| ca-east-bhs    |     ❌        |      ❌       |    ❌         |        ❌    |        ❌       |      ❌          |       ❌      |     ✅        |      ❌       | ❌      |     ❌      |
| ca-east-tor    |    ❌         |      ❌       |     ❌        |        ❌       |      ❌       |       ❌         |      ❌       |      ❌       |       ✅     | ❌      |     ❌      |
| ap-southeast-sgp|    ❌         |      ❌       |     ❌        |        ❌       |      ❌       |       ❌         |      ❌       |      ❌       |       ❌       | ✅       |     ❌      |
| ap-southeast-syd|    ❌         |      ❌       |     ❌        |        ❌       |      ❌       |       ❌         |      ❌       |      ❌       |       ❌       | ❌      |     ✅       |

## Weiterführende Informationen

- [Dedicated Server - IP-Aliasing konfigurieren](/pages/bare_metal_cloud/dedicated_servers/network_ipaliasing)

- [Dedicated Server - Additional IPs im Bridge-Modus konfigurieren](/pages/bare_metal_cloud/dedicated_servers/network_bridging)

Treten Sie unserer [User Community](/links/community) bei.
