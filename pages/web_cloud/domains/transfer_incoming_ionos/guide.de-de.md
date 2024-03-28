---
title: 'Eine Ionos-Domain zu OVHcloud transferieren'
excerpt: 'Erfahren Sie mehr über den Transfer einer Ionos-Domain zu OVHcloud'
updated: 2024-03-28
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie im Zweifelsfall die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button "Beitragen" auf dieser Seite.
>

## Ziel

Für den Transfer einer Ionos-Domain ist ein spezieller Ansatz erforderlich.

**Diese Anleitung erklärt, wie Sie So transferieren Sie eine Ionos-Domain zu OVHcloud**

> [!warning]
>
> Der [Domainnamen-Registrar](https://www.ovhcloud.com/de/learn/what-is-domain-name-registrar/) ist ein Diensteanbieter, der authorisiert ist, Domainnamen zur Registrierung seitens Privatpersonen, Unternehmen oder sonstigen Organisationen anzubieten. Sie verlängern ein Domainnamen-Abonnement bei Ihrem Registrar, üblicherweise jährlich.
>
> Wenn OVHcloud bereits der Registrar Ihres Domainnamens ist, ist der Prozess des eingehenden Transfers nicht für diesen Domainnamen anwendbar. Das in dieser Anleitung beschriebene Verfahren für eingehende Domaintransfers gilt **nur** für Domainnamen, die derzeit bei einem anderen Registrar als OVHcloud registriert sind.
>
> Um die Verwaltung des Domainnamens einem anderen OVHcloud Kunden-Account zu übertragen, muss stattdessen eine **Änderung der Kontakte** durchgeführt werden. Die Vorgehensweise wird in [unserer Anleitung zur Kontakteverwaltung](/pages/account_and_service_management/account_information/managing_contacts) beschrieben.
>
> Wenn auch der **Inhaber des Domainnamens** geändert werden muss, sollte dies erfolgen, **bevor** Sie die Kontakte des Domainnamens ändern. Verwenden Sie dazu [unsere Anleitung zum Inhaberwechsel für Domainnamen](/pages/web_cloud/domains/trade_domain).
>

## Voraussetzungen

- Sie verfügen über einen Domainnamen bei einem anderen Ionos Registrar.
- Der Domainname existiert seit mehr als 60 Tagen.
- Der Domainname wurde in den letzten 60 Tagen nicht transferiert und der Inhaber wurde nicht geändert.
- Der Zustand des Domainnamens ist "OK" oder "Transferable".
- Der Domainname ist nicht abgelaufen und hat ein Ablaufdatum, das den Transfer noch ermöglicht (empfohlen sind mehr als 60 Tage).

Sie müssen außerdem:

- Sie können die Domain freigeben.
- Sie haben den Transfer-Code oder können ihn anfordern.
- Sie sind berechtigt, den Transfer der Domain zu beantragen.
- Der Domaininhaber und/oder dessen Administratoren sind über den Transfer informiert.

> [!warning]
>
> OVHcloud stellt Ihnen Dienste zur Verfügung, für deren Konfiguration, Verwaltung und Verwaltung Sie die alleinige Verantwortung tragen. Es liegt somit in Ihrer Verantwortung, sicherzustellen, dass diese ordnungsgemäß funktionieren.
>
> Wir stellen Ihnen diese Anleitung zur Verfügung, um Sie bei gängigen Aufgaben bestmöglich zu begleiten. Dennoch empfehlen wir Ihnen, falls Sie Hilfe brauchen, einen [spezialisierten Dienstleister](https://partner.ovhcloud.com/de/directory/) und/oder Ihren aktuellen Registrar zu kontaktieren. Für externe Dienstleistungen bieten wir leider keine Unterstützung. Weitere Informationen finden Sie im Abschnitt [Weiterführende Informationen](#go-further) dieser Anleitung.
>

## In der praktischen Anwendung

> [!primary]
>
> Die aktive DNS-Zone einer Domain enthält die auf Ihre Domain angewendete DNS-Konfiguration. Sie verbindet Ihren Domainnamen mit Ihren Diensten wie E-Mail-Adressen oder Ihrer Website.
>
> Wenn Sie zusätzlich zu Ihrer Domain bei Ihrem aktuellen Registrar über eine aktive DNS Zone verfügen, vergewissern Sie sich, dass die auf Ihre Domain angewendete DNS Zone nach dem Transfer nicht gelöscht wird.
>
> Einige Registrare löschen die DNS Zone bei ihnen, sobald der Transfer Ihrer Domain abgeschlossen ist. Ist das der Fall, erstellen Sie Ihre DNS-Zone bei OVHcloud neu, bevor Sie mit den Aktionen zum Transfer Ihrer Domain beginnen.
>
> Lesen Sie hierzu die folgenden Anleitungen:
> - [DNS-Zone bei OVHcloud erstellen](/pages/web_cloud/domains/dns_zone_create)
> - [OVHcloud DNS-Zone bearbeiten](/pages/web_cloud/domains/dns_zone_edit)
>
> Stellen Sie außerdem sicher, dass Ihr aktueller Registrar andere Dienste nicht schließt, z. B. die E-Mail-Adressen, die mit Ihrer Domain verknüpft sind.
>

### Schritt 1 - Private Aufzeichnung deaktivieren

Um zu bestätigen, dass die private Registrierung für Ihren Domainnamen aktiviert ist, folgen Sie den Schritten in der [dedizierten Dokumentation von Ionos](https://www.ionos.de/hilfe/domains/domain-innerhalb-von-11-ionos-umziehen/private-registrierung-fuer-eine-domain-bei-11-ionos-deaktivieren/){.external}.

### Schritt 2 - Transfer-Sperre deaktivieren

> [!warning]
>
> Aus Sicherheitsgründen sind Domainnamen mit einer generischen Endung (zum Beispiel *.com*, *.net* oder *.org*) standardmäßig gesperrt und können nicht transferiert werden. Bevor Sie einen Transfer eines Domainnamens starten können, müssen Sie diese Transfersperre aufheben.
>

Folgen Sie den Schritten in der [Ionos Dedicated Documentation](https://www.ionos.de/hilfe/domains/domain-innerhalb-von-11-ionos-umziehen/domain-umzugssperre-bei-11-ionos-deaktivieren/){.external}.

### Schritt 3 - Autorisierungscode abrufen

Der Autorisierungscode schützt Ihre Domain vor nicht autorisiertem Transfer durch Dritte. Dieser Code ist erforderlich, um den Transfer Ihrer Domain zu einem neuen Anbieter zu autorisieren.

Befolgen Sie die Schritte in der [Ionos Dedicated Documentation](https://www.ionos.de/hilfe/domains/domain-von-11-ionos-zu-einem-anderen-anbieter-umziehen/autorisierungscode-fuer-ihre-domain-bei-11-ionos-anzeigen/){.external}.

Sobald Sie den Autorisierungscode erhalten haben, können Sie den Transfer Ihrer Domain durchführen, indem Sie die Schritte in unserer Anleitung „[Domain zu OVHcloud transferieren](/pages/web_cloud/domains/transfer_incoming_generic_domain)“ befolgen.

## Weiterführende Informationen <a name="go-further"></a>

[Website und E-Mails zu OVHcloud migrieren](/pages/web_cloud/web_hosting/hosting_migrating_to_ovh)
 
Kontaktieren Sie für spezialisierte Dienstleistungen (SEO, Web-Entwicklung etc.) die [OVHcloud Partner](https://partner.ovhcloud.com/de/directory/).
 
Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, beachten Sie unsere [Support-Angebote](https://www.ovhcloud.com/de/support-levels/).
 
Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.