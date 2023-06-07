---
title: Tutorial - Verwendung von Zonemaster
slug: ovhcloud-domain-zonemaster-tutorial
section: DNS und DNS-Zone
order: 08
updated: 2023-06-06
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie im Zweifelsfall die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button "Beitragen" auf dieser Seite.
>

**Letzte Aktualisierung am 12.09.2022**

> [!warning]
> OVHcloud stellt Ihnen Dienstleistungen zur Verfügung, für deren Konfiguration und Verwaltung Sie die alleinige Verantwortung tragen. Es liegt somit bei Ihnen, sicherzustellen, dass diese ordnungsgemäß funktionieren.
> 
> Diese Anleitung soll Sie bei allgemeinen Aufgaben bestmöglich unterstützen. Dennoch empfehlen wir Ihnen, falls Sie Hilfe brauchen, einen [spezialisierten Dienstleister](https://partner.ovhcloud.com/de/) zu kontaktieren oder Ihre Fragen in der OVHcloud Community zu stellen. Leider können wir Ihnen für administrative Aufgaben keine weitergehende technische Unterstützung anbieten. Weitere Informationen finden Sie am [Ende dieser Anleitung](#go-further).
>

## Ziel

[Zonemaster](https://zonemaster.net/) ist ein Tool, das aus der Zusammenarbeit zwischen der [AFNIC](https://www.afnic.fr/en/) (französische Registry) und der [Swedish Internet Foundation](https://internetstiftelsen.se/en/) (Schwedische Registry) hervorgegangen ist. So können Sie die DNS-Konfiguration (Domain Name System) einer Domain analysieren und herausfinden, welche Elemente verbessert oder korrigiert werden können.

> [!primary]
>
> Um mehr über DNS zu erfahren, lesen Sie die Einführung unserer Anleitung zur [Konfiguration einer DNS Zone](https://docs.ovh.com/de/domains/webhosting_bearbeiten_der_dns_zone/).

## Voraussetzungen

- Sie verfügen über einen [Domainnamen](https://www.ovhcloud.com/de/domains/)

## In der praktischen Anwendung

### Eingabemaske

Mit dem Zonemaster Tool können Sie entweder eine vorhandene DNS-Konfiguration einer Domain überprüfen oder eine vorkonfigurierte DNS-Zone auf zukünftigen DNS-Servern testen.

Um die aktuelle Konfiguration einer Domain zu überprüfen, geben Sie Ihren Domainnamen ein und klicken Sie dann auf `Run`{.action}.

![Screenshot aus dem Zonemaster-Formular. Die Domain "mydomain.ovh" wurde eingegeben und ist bereit, getestet zu werden.](images/zonemaster01.png){.thumbnail}

Um eine DNS-Konfiguration zu überprüfen, die für die betreffende Domain erstellt, aber noch nicht angewandt wurde, aktivieren Sie das Feld `Options`{.action} und geben Sie folgende Angaben ein:

- **Nameservers**: Tragen Sie die Informationen des Namensservers ein, der einer Domain zugewiesen ist. Klicken Sie auf `+`{.action}, um einen zusätzlichen Namensserver hinzufügen zu können. Die Eingabe einer IP-Adresse ist optional.
- **Delegation Signers (DS records)**: Geben Sie im Rahmen eines DNSSEC-Schutzes die Elemente des DS-Eintrags ein. Klicken Sie auf `+`{.action}, um einen zusätzlichen DS-Eintrag hinzuzufügen. Wenn die DNS Server das DNSSEC Protokoll nicht verwenden, können Sie diese Felder freigeben. Im Fall einer mit DNSSEC unterzeichneten Zone erlaubt diese Funktion die Überprüfung, ob die Zone mit einem gültigen Resolver mit den gerade zu veröffentlichenden DS-Eintragungen korrekt funktioniert, bevor diese veröffentlicht werden.

Sie können auch die Überprüfung eines bestimmten IP-Protokolls erzwingen, indem Sie `Disable IPv4` und `Disable IPv6` verwenden.

> **Beispiel**:<br><br> Sie besitzen die Domain "mydomain.ovh", die aktuell die DNS Server "dns19.ovh.net" und "ns19.ovh.net" verwendet. 
>
> Sie haben eine DNS-Zone für diese Domain auf den DNS-Servern "mydns.test.ovh"und "mydns2.test.ovh" konfiguriert.<br>
> Bevor Sie die DNS Server ändern, können Sie eine erweiterte Suche mithilfe des Feldes `Options`{.action} durchführen, indem Sie "mydns.test.ovh"und "mydns2.test.ovh" jeweils als DNS-Server in `Nameservers` eingeben.<br>
> Zonemaster führt einen Test durch, als würden Sie die Server "mydns.test.ovh"und "mydns2.test.ovh" mit "mydomain.ovh" verwenden.<br>
> ![Screenshot der erweiterten Optionen des Zonemaster-Formulars. Die beiden Namensserver "mydns.test.ovh" und "mydns2.test.ovh" wurden im Abschnitt "Namensserver" des Formulars eingetragen.](images/zonemaster02.png){.thumbnail}

> [!primary]
>
> Wenn Sie eine Domain angeben und auf die Buttons `Fetch NS from parent zone`{.action} und `Fetch DS from parent zone`{.action} klicken, erscheinen die der Domain zugewiesenen DNS-Server sowie die Informationen zum DS-Eintrag (DNSSEC), wenn dieser konfiguriert ist.
> ![Screenshot der erweiterten Optionen des Zonemaster-Formulars. Die Schaltfläche „Fetch NS from parent zone“ ist hervorgehoben und die Nameserver der Domain „mydomain.ovh“ sind im Abschnitt „Nameservers“ des Formulars vorab ausgefüllt.](images/zonemaster03.png){.thumbnail}

### Ergebnis

Sobald das Formular validiert wurde, werden die Ergebnisse nach Testgruppen angezeigt. Die Tests werden nach Schweregrad sortiert.

- **Error**: Fehler oder fehlende Elemente, die zu einer Störung führen können.
- **Warning**: Dieser Teil ist funktional, verdient jedoch besondere Aufmerksamkeit. Das Tool hat festgestellt, dass dieser Parameter Eigenschaften aufweist, die nicht dem Standard seiner Kategorie entsprechen, ohne dass sein Betrieb blockiert wird.
- **Info**: Es handelt sich lediglich um eine Information, die keine besonderen Auswirkungen auf die Funktionsweise des Domainnamens hat
- **Notice**: Es handelt sich lediglich um eine Information, die keine besonderen Auswirkungen auf die Funktionsweise des Domainnamens hat.

Für jeden Test können weitere Einzelheiten ermittelt werden, zum Beispiel zum Verständnis des Fehlers bei einer Fehlfunktion, oder nur zur Information.

![Screenshot der Ergebnisseite von Zonemaster für die Domain „mydomain.ovh“. Der Abschnitt „Address“ wird erweitert.](images/zonemaster04.png){.thumbnail}

### Nützliche Informationen

Wenn Sie weitere Fragen zu Zonemaster haben, lesen Sie den Abschnitt [FAQ](https://zonemaster.net/en/faq) auf <https://zonemaster.net/>.

## Weiterführende Informationen <a name="go-further"></a>

[DNS-Server einer OVHcloud Domain ändern](https://docs.ovh.com/de/domains/webhosting_allgemeine_informationen_zu_den_dns_servern/){.external}

[Bearbeiten der OVHcloud DNS-Zone](https://docs.ovh.com/de/domains/webhosting_bearbeiten_der_dns_zone/){.external}.

[Domain mit DNSSEC sichern](https://docs.ovh.com/de/domains/sichern_sie_ihre_domain_mit_dnssec_ab/){.external}

Kontaktieren Sie für spezialisierte Dienstleistungen (SEO, Web-Entwicklung etc.) die [OVHcloud Partner](https://partner.ovhcloud.com/de/directory/).

Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, beachten Sie unsere [Support-Angebote](https://www.ovhcloud.com/de/support-levels/).

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
