---
title: 'DNS-Server einer OVHcloud Domain ändern'
excerpt: 'Erfahren Sie hier, wie Sie DNS-Server im OVHcloud Kundencenter bearbeiten'
updated: 2023-08-25
---

> [!primary]
>
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie beim geringsten Zweifel die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button "Beitragen" auf dieser Seite.
>

## Ziel

### Den Begriff des DNS verstehen 

Die Abkürzung DNS für **D**omain **N**ame **S**ystem ist ein Satz von Elementen (DNS-Server, DNS-Zonen usw.), mit denen ein Domainname einer IP-Adresse zugeordnet werden kann.

### Die DNS Server 

Die **DNS-Server** enthalten DNS-Konfigurationsdateien für Domainnamen, die als **DNS-Zonen** bezeichnet werden.

Eine DNS-Zone enthält technische Informationen, die als *DNS-Einträge* bezeichnet werden. Die DNS-Zone ist wie ein Datacenter.

Sie können beispielsweise Folgendes angeben:

- Die IP-Adresse (DNS-Einträge vom Typ *A* und *AAAA*) Ihres Webhostings, um Ihre Website mit Ihrem Domainnamen anzuzeigen.
- Die E-Mail-Server (DNS-Einträge vom Typ *MX*), auf die Ihre Domain die von ihr empfangenen E-Mails weiterleiten soll. So können Sie diese über Ihre personalisierte(n) E-Mail-Adresse(n) mit Ihrem Domainnamen einsehen.
- Informationen zur Sicherheit / Authentifizierung Ihrer Dienste (Webhosting, Webserver, E-Mail-Server etc.), die mit Ihrem Domainnamen verbunden sind (DNS-Einträge vom Typ *SPF*, *DKIM*, *DMARC* etc.).

Weitere Informationen zu den DNS-Zonen finden Sie in unserer Anleitung „[OVHcloud DNS-Zone bearbeiten](/pages/web/domains/dns_zone_edit)“.

Aus diesem Grund müssen die **DNS-Server** beim Domainnamen angemeldet sein, um die von ihnen gehostete DNS-Zone verwenden zu können. 

![DNS](images/dnsserver.png){.thumbnail}

**DNS** Server arbeiten normalerweise paarweise:

- Ein *primärer* DNS-Server, der die vom Domainnamen empfangenen Anforderungsströme an die DNS-Zone weiterleitet, die er für die Domain hostet. Die DNS-Zone führt somit die *DNS* Auflösung durch, um die Datenströme auf die mit der Domain verbundenen Dienstleistungen (Server, Website, E-Mails etc.) weiterzuleiten.
- Ein *sekundärer* DNS-Server, genannt *Standby*, der verwendet wird, wenn der *primäre* Server ausgelastet ist, nicht verfügbar ist oder langsamer reagiert als der *sekundäre* Server.

Manchmal bieten einige DNS-Anbieter mehr als 2 **DNS-Server** an, die bei Ihrem Domainnamen deklariert werden müssen. Geben Sie in diesem Fall alle von Ihrem DNS-Anbieter angebotenen DNS-Server ein.

**Erfahren Sie, wie Sie die DNS-Server für Ihre OVHcloud Domain ändern.**

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/BvrUi26ShzI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Voraussetzungen

- Sie besitzen eine bei OVHcloud registrierte [Domain](https://www.ovhcloud.com/de/domains/).
- Sie verfügen über die [entsprechenden](/pages/account/customer/managing_contacts) Berechtigungen zur Verwaltung des Domainnamens über Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de){.external}.
- Sie sind in Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de){.external} eingeloggt.

> [!primary]
>
> Ein *Registrar* ist eine Organisation, die Domainnamen verkaufen darf. OVHcloud gehört zu diesen *Registraren*.
>
> Wenn Ihre Domain nicht bei OVHcloud registriert ist, müssen Sie die DNS-Server bei dem *Registrar* ändern, bei dem Ihre Domain derzeit registriert ist.
>

## In der praktischen Anwendung

> [!warning]
>
> **Seien Sie vorsichtig, wenn Sie die DNS-Server einer Domain ändern.** Ein Bearbeitungsfehler kann dazu führen, dass Ihre Website nicht mehr erreichbar ist oder Ihre E-Mail-Adressen keine neuen E-Mails mehr empfangen können. Ein genaueres Verständnis der Konsequenzen einer solchen Änderung ermöglicht es Ihnen, die von Ihnen vorgenommenen Änderungen besser zu verstehen.
>

Wenn Sie die DNS-Server Ihrer Domain ändern, ändern Sie deren DNS-Konfiguration. Die neue DNS-Konfiguration ersetzt die alte und wird auf den neu definierten DNS-Servern gespeichert. Technisch gesehen verwendet die Domain dann eine neue DNS-Zone.

Es ist jedoch wichtig zu beachten, dass:

- Bei einem Wechsel des DNS-Servers (z. B. Externes DNS (über OVHcloud DNS), wird der Inhalt der alten Konfiguration / DNS-Zone nicht automatisch in die neue repliziert. Stellen Sie sicher, dass die neue DNS-Zone alle DNS-Einträge enthält, die für das einwandfreie Funktionieren der mit Ihrer Domain verbundenen Dienste erforderlich sind (z. B. Ihre Website und E-Mail-Adressen).

- Wenn Sie nicht die DNS-Server, sondern einen oder mehrere Einträge Ihrer aktuellen DNS-Konfiguration / -Zone ändern möchten, lesen Sie unsere Anleitung: „[OVHcloud DNS-Zone bearbeiten](/pages/web/domains/dns_zone_edit)“.

- Einige Organisationen, Registrys, die Domainendungen verwalten, haben besondere Anforderungen an DNS-Server (Anzahl der Namensserver, Wert der Einträge usw.). Im Zweifelsfall wenden Sie sich an die für die Domain zuständige Registry.

Stellen Sie sicher, dass der Domänenname durch die Änderungen nicht unerreichbar wird. Wenn Sie sich nicht sicher sind, wenden Sie sich an die Person, die Sie um diese Änderungen bittet.


### Auf die Verwaltung der OVHcloud DNS-Server zugreifen

Verbinden Sie sich mit Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de){.external} und gehen Sie dann in den Bereich `Web Cloud`{.action}. Klicken Sie in der linken Spalte auf `Domainnamen`{.action} und wählen Sie die betreffende Domain aus. Gehen Sie dann auf den Tab `DNS-Server`{.action}.

Die angezeigte Tabelle enthält die derzeit von OVHcloud für Ihre Domain definierten DNS-Server. Es können mehrere DNS-Server mit jeweils eigener Zeile in der Tabelle aufgeführt werden.

> [!primary]
>
> Wenn Sie die OVHcloud DNS-Server verwenden, haben die in den Servernamen enthaltenen Nummern keinen Bezug zu den von Ihnen verwendeten Diensten. Nur die Option [DNS Anycast](https://www.ovhcloud.com/de/domains/options/) verwendet bestimmte DNS-Server, die Ihnen automatisch zugewiesen werden. 

![dnsserver](images/edit-dns-server-ovh-step1.png){.thumbnail}

### DNS Server ändern

Wenn Sie externe DNS-Server verwenden möchten, müssen Sie diese gegen die OVHcloud DNS-Server austauschen und nicht zu diesen addieren.

Klicken Sie rechts auf `DNS-Server ändern`{.action}.

Ersetzen Sie in den Eingabeformularen **die aktuellen Werte der DNS-Server durch die Informationen zu den neuen DNS-Servern, die Sie festlegen möchten. Um weitere Server zur aktuellen Liste hinzuzufügen, klicken Sie auf den Button `+`{.action} rechts in der letzten Tabellenzeile. In der Tabelle wird eine zusätzliche Zeile angezeigt, die Sie ausfüllen können.

> [!warning]
>
> Mischen Sie keine DNS-Servergruppe mit einer anderen. 
>
> Zum Beispiel entsprechen *dns19.ovh.net* und *ns19.ovh.net* einer Gruppe von OVHcloud-DNS-Servern, sie sind aufeinander abgestimmt und werden synchronisiert. Wenn Sie externe DNS-Server von OVHcloud (oder einer anderen OVHcloud Gruppe) hinzufügen, erfolgt die DNS-Auflösung nach dem Zufallsprinzip zwischen den angegebenen DNS-Servern von OVHcloud und den externen DNS-Servern.
>
> Bei OVHcloud können DNS-Servergruppen anhand der in den Servernamen angegebenen Nummer identifiziert werden. Zwei OVHcloud DNS-Server gehören zu einer Servergruppe, wenn sie dieselbe Nummer verwenden. Zum Beispiel *dns19.ovh.net* und *ns19.ovh.net*.
>

Wenn Sie diese Informationen eingegeben haben, klicken Sie auf `Konfiguration anwenden`{.action}. Die Status der DNS-Server werden dann in der Tabelle aktualisiert und mit den neuen Informationen, die Sie angegeben haben, angezeigt.

![dnsserver](images/edit-dns-server-ovh-step2.png){.thumbnail}

> [!success]
>
> Die Änderung der DNS-Server, die mit einem Domainnamen verbunden sind, führt zu einer Propagationsverzögerung von **24** bis **48** Stunden, damit diese Änderung wirksam wird.
>

### Sonderfall: DNS Server zurücksetzen 

Mit dem Button `DNS-Server zurücksetzen`{.action} können Sie die aktuellen DNS-Server zurücksetzen, indem Sie diese automatisch durch die ursprünglichen OVHcloud DNS-Server ersetzen. Verwenden Sie diese Option **nur**, wenn Sie die OVHcloud DNS-Server (und die OVHcloud DNS-Zone, die mit den OVHcloud DNS-Servern verbunden ist) wiederverwenden möchten. 

![dnsserver](images/edit-dns-server-ovh-step3.png){.thumbnail}

Nachdem Sie die erforderlichen Änderungen vorgenommen haben, müssen Sie warten, bis diese voll wirksam sind. Dabei sind zwei aufeinanderfolgende Zeiträume zu berücksichtigen:

- Die auf der Seite von OVHcloud vorgenommene Änderung muss von der *.register*, die Ihre Domainendung verwaltet, übernommen werden (zum Beispiel die *.fr* Registrierung). Sie können den Fortschritt dieser Operation in Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de){.external} verfolgen.
Gehen Sie hierzu in den Bereich `Web Cloud`{.action}, gehen Sie in der linken Spalte in den Bereich `Domainnamen`{.action} und klicken Sie dann auf `Laufende Vorgänge`{.action};
- Sobald die Änderung von der Organisation, die Ihre Domainendung verwaltet, übernommen wurde, müssen Sie maximal **48 Stunden** warten, bis die von Ihnen vorgenommenen Änderungen vollständig übernommen wurden.

## Weiterführende Informationen

[Änderung einer OVHcloud DNS-Zone](/pages/web/domains/dns_zone_edit).

Kontaktieren Sie für spezialisierte Dienstleistungen (SEO, Web-Entwicklung etc.) die [OVHcloud Partner](https://partner.ovhcloud.com/de/directory/).

Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, beachten Sie unsere [Support-Angebote](https://www.ovhcloud.com/de/support-levels/).

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.