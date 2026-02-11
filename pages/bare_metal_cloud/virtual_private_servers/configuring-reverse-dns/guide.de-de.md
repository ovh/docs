---
title: Reverse DNS Ihres Servers konfigurieren (PTR record)
excerpt: Erfahren Sie hier, wie Sie die Reverse DNS-Auflösung Ihrer IP-Adresse im Kundencenter einrichten
updated: 2026-01-06
---

## Ziel

Reverse DNS (*rDNS*) ist das ergänzende Gegenstück zur "*Forward*" DNS-Auflösung, die Domainnamen zu IP-Adressen auflöst. Mit Reverse DNS-Auflösung kann eine IP-Adresse zu dem Domainnamen (oder Hostnamen) aufgelöst werden, dem sie zugeordnet ist. Das bedeutet, dass DNS-Abfragen (*DNS Lookup*) der entsprechenden IP-Adresse diesen Domainnamen zurückgeben.

Die Konfiguration der umgekehrten DNS-Auflösung eines Servers ist besonders beim Versand von E-Mails nützlich. Die Validierung eines Mailservers durch Spamschutzsysteme verbessert sich, wenn eine DNS-Abfrage der IP-Adresse passend aufgelöst wird.

**Diese Anleitung erklärt, wie Sie den Reverse DNS-Pfad Ihrer IP-Adresse in Ihrem Kundencenter konfigurieren.**

## Voraussetzungen

- Sie verfügen über eine mit Ihrem Dienst verbundene IP-Adresse in Ihrem OVHcloud Kunden-Account.
- Ein Domänenname mit seinem `A`-Eintrag, der auf Ihren Dienst verweist.
- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](/links/manager).

## In der praktischen Anwendung

Loggen Sie sich in Ihr [OVHcloud Kundencenter](/links/manager) ein, klicken Sie auf `Network`{.action} in der linken Seitenleiste und dann auf `Öffentliche IP-Adressen`{.action}.

Das Dropdown-Menü unter **Meine öffentlichen IP-Adressen und dazugehörigen Dienste** (Meine öffentlichen IP-Adressen und zugehörige Dienste) ermöglicht es Ihnen, Ihre Dienste nach Kategorie zu filtern. Sie können auch nach einer bestimmten IP-Adresse in der Suchleiste links neben dem Dropdown-Menü suchen.

![Reverse DNS](/pages/assets/screens/control_panel/product-selection/bare-metal-cloud/network/filterip_new.png){.thumbnail}

Klicken Sie auf die Schaltfläche `⁝`{.action} in der Zeile der betreffenden IP-Adresse und wählen Sie `Reverse DNS konfigurieren`{.action}.

![Reverse DNS](/pages/assets/screens/control_panel/product-selection/bare-metal-cloud/network/modifyreverse_new.png){.thumbnail}

Geben Sie im neuen Fenster Ihren Reverse-Pfad ein und klicken Sie auf `Bestätigen`{.action}.

![Reverse DNS](/pages/assets/screens/control_panel/product-selection/bare-metal-cloud/network/enterreverse_new.png){.thumbnail}

Sie können den Reverse-Pfad auch direkt über das `Stift`{.action}-Symbol in der Spalte **Reverse DNS** der Tabelle bearbeiten.

> [!warning]
> Wenn Sie Ihren Domänennamen im Reverse eingeben, prüft das System sofort, ob der A-Eintrag auf dieselbe IP-Adresse verweist. Dies wird in Anti-Spam-Verfahren verwendet, daher muss Ihr A-Eintrag gültig und verbreitet sein. Beim Eingeben des Reverse gibt es gewisse Regeln zu beachten:
> 
>  - Es darf nicht mit einem `-` beginnen.
>  - Es darf nicht länger als 63 Zeichen sein.
>  - Es darf keine Großbuchstaben enthalten.
>  - Es muss mit einem `.` enden.
>
> Beispiel: "domain.tld" in der Reverse-Eintragsliste wäre `domain.tld.`.
>

> [!primary]
>
> Falls die Änderung nicht wie erwartet funktioniert, überprüfen Sie, ob der `A`-Eintrag in der DNS-Zone Ihres Domänennamens korrekt konfiguriert ist. Beachten Sie, dass Änderungen an der DNS-Zone bis zu 24 Stunden in Kraft treten können, falls Sie den `A`-Eintrag erst kürzlich bearbeitet haben.
>
> Falls der Domänenname von OVHcloud als Registrar verwaltet wird **und OVHcloud DNS-Server verwendet**, können Sie sich an [dieses Handbuch](/pages/web_cloud/domains/dns_zone_edit) wenden.
>

## Weiterführende Informationen

[Bearbeiten einer OVHcloud DNS-Zone](/pages/web_cloud/domains/dns_zone_edit)

[DNS-Server von Domainnamen bei OVHcloud ändern](/pages/web_cloud/domains/dns_server_edit)

Treten Sie unserer [User Community](/links/community) bei.