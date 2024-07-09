---
title: Tutorial - Verwendung von Zonemaster
updated: 2024-06-18
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie im Zweifelsfall die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button "Beitragen" auf dieser Seite.
>

> [!warning]
> OVHcloud stellt Ihnen Dienstleistungen zur Verfügung, für deren Konfiguration und Verwaltung Sie die alleinige Verantwortung tragen. Es liegt somit bei Ihnen, sicherzustellen, dass diese ordnungsgemäß funktionieren.
> 
> Diese Anleitung soll Sie bei allgemeinen Aufgaben bestmöglich unterstützen. Dennoch empfehlen wir Ihnen, falls Sie Hilfe brauchen, einen [spezialisierten Dienstleister](/links/partner) zu kontaktieren oder Ihre Fragen in der OVHcloud Community zu stellen. Leider können wir Ihnen für administrative Aufgaben keine weitergehende technische Unterstützung anbieten. Weitere Informationen finden Sie am [Ende dieser Anleitung](#go-further).
>

## Ziel

[Zonemaster](https://zonemaster.net/en/run-test) ist ein Tool, das aus der Zusammenarbeit zwischen der [AFNIC](https://www.afnic.fr/en/) (französische Registry) und der [Swedish Internet Foundation](https://internetstiftelsen.se/en/) (Schwedische Registry) hervorgegangen ist. So können Sie die DNS-Konfiguration (Domain Name System) einer Domain analysieren und herausfinden, welche Elemente verbessert oder korrigiert werden können.

> [!primary]
>
> Weitere Informationen zum Begriff DNS finden Sie in unserer Anleitung „[Alle Informationen zu DNS-Zonen](/pages/web_cloud/domains/dns_zone_general_information)“.

## Voraussetzungen

- Sie verfügen über einen [Domainnamen](/links/web/domains)

## In der praktischen Anwendung

### Eingabemaske

Mit dem Zonemaster Tool können Sie entweder eine vorhandene DNS-Konfiguration einer Domain überprüfen oder eine vorkonfigurierte DNS-Zone auf zukünftigen DNS-Servern testen.

Um die aktuelle Konfiguration einer Domain zu überprüfen, geben Sie Ihren Domainnamen ein und klicken Sie dann auf `Run`{.action}.

![Screenshot aus dem Zonemaster-Formular. Die Domain "domain.tld" wurde eingegeben und ist bereit, getestet zu werden.](/pages/assets/screens/other/web-tools/zonemaster/run-domain-test.png){.thumbnail}

Um eine DNS-Konfiguration zu überprüfen, die für die betreffende Domain erstellt, aber noch nicht angewandt wurde, aktivieren Sie das Feld `Options`{.action} und geben Sie folgende Angaben ein:

- **Nameservers**: Tragen Sie die der Domain zugewiesenen DNS-Server ein. Klicken Sie auf `+`{.action}, um einen zusätzlichen Nameserver hinzufügen zu können. Die Eingabe einer IP-Adresse ist optional.
- **Delegation Signers (DS records)**: Geben Sie die für den DNSSEC-Schutz zuständigen DS-Einträge ein. Klicken Sie auf `+`{.action}, um einen zusätzlichen DS-Eintrag hinzuzufügen. Wenn die DNS-Server das DNSSEC-Protokoll nicht verwenden, können Sie diese Felder frei lassen. Im Fall einer mit DNSSEC signierten Zone erlaubt diese Funktion die Überprüfung der Zone mit einem Resolver, um die neuen DS-Eintragungen vor der Veröffentlichung zu testen.

Sie können auch die Überprüfung eines bestimmten IP-Protokolls erzwingen, indem Sie `Disable IPv4` und `Disable IPv6` verwenden.

> **Beispiel**:<br><br> Sie besitzen die Domain "domain.tld", die aktuell die DNS-Server "dnsXX.ovh.net" und "nsXX.ovh.net" verwendet. 
>
> Sie haben eine DNS-Zone für diese Domain auf den DNS-Servern "dns1.test.tld"und "dns2.test.tld" konfiguriert.<br>
> Bevor Sie die DNS-Server ändern, können Sie eine erweiterte Suche mithilfe des Feldes `Options`{.action} durchführen, indem Sie "dns1.test.tld"und "dns2.test.tld" jeweils als DNS-Server in `Nameservers` eingeben.<br>
> Zonemaster führt einen Test durch und simuliert dabei die Nutzung der Server "dns1.test.tld" und "dns2.test.tld" mit "domain.tld".<br>
> ![Screenshot der erweiterten Optionen des Zonemaster-Formulars. Die beiden Namensserver "dns1.test.tld" und "dns2.test.tld" wurden im Abschnitt "Namensserver" des Formulars eingetragen.](/pages/assets/screens/other/web-tools/zonemaster/run-domain-test-nameservers-option.png){.thumbnail}

> [!primary]
>
> Wenn Sie eine Domain angeben und auf die Buttons `Fetch NS from parent zone`{.action} und `Fetch DS from parent zone`{.action} klicken, erscheinen die der Domain zugewiesenen DNS-Server sowie die Informationen zum DS-Eintrag (DNSSEC), wenn dieser konfiguriert ist.
> ![Screenshot der erweiterten Optionen des Zonemaster-Formulars. Die Schaltfläche „Fetch NS from parent zone“ ist hervorgehoben und die Nameserver der Domain „domain.tld“ sind im Abschnitt „Nameservers“ des Formulars vorab ausgefüllt.](/pages/assets/screens/other/web-tools/zonemaster/fetch-ns-from-parent-zone.png){.thumbnail}

### Ergebnis

Sobald das Formular validiert wurde, werden die Ergebnisse nach Testgruppen angezeigt. Die Tests werden nach Schweregrad sortiert.

- **Error**: Fehler oder fehlende Elemente, die zu einer Störung führen können.
- **Warning**: Dieser Teil ist funktional, verdient jedoch besondere Aufmerksamkeit. Das Tool hat festgestellt, dass dieser Parameter Eigenschaften aufweist, die nicht dem Standard seiner Kategorie entsprechen, ohne aber seinen Betrieb zu blockieren.
- **Info**: Dieser Teil funktioniert dem Standard seiner Kategorie entsprechend.
- **Notice**: Es handelt sich lediglich um eine Information, die keine besonderen Auswirkungen auf die Funktionsweise des Domainnamens hat.

Für jeden Test können weitere Einzelheiten ermittelt werden, zum Beispiel zum Verständnis des Fehlers bei einer Fehlfunktion, oder nur zur Information.

![Screenshot der Ergebnisseite von Zonemaster für die Domain „domain.tld“. Der Abschnitt „Address“ wird erweitert.](/pages/assets/screens/other/web-tools/zonemaster/domain-analysis.png){.thumbnail}

### Nützliche Informationen

Wenn Sie weitere Fragen zu Zonemaster haben, lesen Sie den Abschnitt [FAQ](https://zonemaster.net/en/faq) auf <https://zonemaster.net/>.

## Weiterführende Informationen <a name="go-further"></a>

[DNS-Server einer OVHcloud Domain ändern](/pages/web_cloud/domains/dns_server_general_information){.external}

[Bearbeiten der OVHcloud DNS-Zone](/pages/web_cloud/domains/dns_zone_edit){.external}.

[Domain mit DNSSEC sichern](/pages/web_cloud/domains/dns_dnssec){.external}

Kontaktieren Sie für spezialisierte Dienstleistungen (SEO, Web-Entwicklung etc.) die [OVHcloud Partner](/links/partner).

Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, beachten Sie unsere [Support-Angebote](/links/support).

Treten Sie unserer [User Community](/links/community) bei.