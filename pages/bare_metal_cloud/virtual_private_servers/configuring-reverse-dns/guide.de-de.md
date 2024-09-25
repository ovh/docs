---
title: Reverse DNS Ihres Servers konfigurieren (PTR record)
excerpt: Erfahren Sie hier, wie Sie die Reverse DNS-Auflösung Ihrer IP-Adresse über Ihr Kundencenter einrichten
updated: 2024-09-24
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie im Zweifelsfall die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button "Beitragen" auf dieser Seite.
>

## Ziel

Reverse DNS (*rDNS*) ist das ergänzende Gegenstück zur "*Forward*" DNS-Auflösung, die Domainnamen zu IP-Adressen auflöst. Mit Reverse DNS-Auflösung kann eine IP-Adresse zu dem Domainnamen (oder Hostnamen) aufgelöst werden, dem sie zugeordnet ist. Das bedeutet, dass DNS-Abfragen (*DNS Lookup*) der entsprechenden IP-Adresse diesen Domainnamen zurückgeben.

Die Konfiguration der umgekehrten DNS-Auflösung eines Servers ist besonders beim Versand von E-Mails nützlich. Die Validierung eines Mailservers durch Spamschutzsysteme verbessert sich, wenn eine DNS-Abfrage der IP-Adresse passend aufgelöst wird.

**Diese Anleitung erklärt, wie Sie den Reverse DNS-Pfad Ihrer IP-Adresse in Ihrem Kundencenter konfigurieren.**

## Voraussetzungen

- Sie verfügen über eine mit Ihrem Dienst verbundene IP-Adresse in Ihrem OVHcloud Kunden-Account.
- Sie haben einen Domainnamen, dessen `A`-Eintrag den Server als Ziel hat.
- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](/links/manager).

## In der praktischen Anwendung

Loggen Sie sich in Ihr [OVHcloud Kundencenter](/links/manager) ein. Wechseln Sie zum Bereich `Bare Metal Cloud`{.action} und öffnen Sie `Network`{.action}. Klicken Sie dann auf `IP`{.action}.

Mithilfe der Dropdown-Menüs im Bereich **Meine öffentlichen IP-Adressen und dazugehörigen Dienste** können Sie die Tabelleneinträge nach Diensten filtern und so die gewünschte IP-Adresse schnell finden.

![Reverse DNS](/pages/assets/screens/control_panel/product-selection/bare-metal-cloud/network/filterip.png){.thumbnail}

Klicken Sie auf `...`{.action} in der Zeile der betreffenden IP-Adresse und wählen Sie dann `Reverse ändern`{.action} aus.

![Reverse DNS](/pages/assets/screens/control_panel/product-selection/bare-metal-cloud/network/modifyreverse.png){.thumbnail}

Geben Sie Ihren Reverse-Pfad im neuen Fenster ein und klicken Sie auf `Bestätigen`{.action}.

![Reverse DNS](/pages/assets/screens/control_panel/product-selection/bare-metal-cloud/network/enterreverse.png){.thumbnail}

Sie können den Reverse-Pfad auch direkt mithilfe des Stift-Icons in der Spalte "**Reverse**" der Tabelle editieren.

> [!warning]
> Wenn Sie Ihren Domainnamen als *Reverse* eingeben, wird sofort überprüft, ob der A-Eintrag auf dieselbe IP verweist. Anti-Spam-Verfahren verwenden diese Methode, daher muss Ihr A-Eintrag gültig sein und propagiert werden. Bei der Eingabe des *Reverse* sind bestimmte Regeln zu beachten:
>
>  - Der *Reverse* darf nicht mit einem `-` beginnen.
>  - Der *Reverse* darf höchstens 80 Zeichen enthalten.
>  - Der *Reverse* darf keine Großbuchstaben enthalten.
>  - Der *Reverse* muss mit einem `.` enden.
>
> Beispiel: Für "domain.tld" wäre der *Reverse*: **domain.tld.**
>

> [!primary]
>
Wenn die Änderung nicht wie erwartet funktioniert, überprüfen Sie, ob der Eintrag vom Typ `A` in der DNS-Zone Ihres Domainnamens korrekt konfiguriert ist. Beachten Sie, dass es bis zu 24 Stunden dauern kann, bis DNS-Zonenänderungen wirksam sind, falls Sie den `A`-Eintrag erst kürzlich bearbeitet haben.
>
Wenn der Domainname von OVHcloud als Registrar verwaltet wird **und OVHcloud DNS-Server verwendet**, können Sie den Anweisungen in [unserer Anleitung zu DNS](/pages/web_cloud/domains/dns_zone_edit) folgen.
>

## Weiterführende Informationen

[Bearbeiten einer OVHcloud DNS-Zone](/pages/web_cloud/domains/dns_zone_edit)

[DNS-Server von Domainnamen bei OVHcloud ändern](/pages/web_cloud/domains/dns_server_edit)

Treten Sie unserer [User Community](/links/community) bei.