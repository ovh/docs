---
title: Reverse DNS Ihres Servers konfigurieren (PTR record)
excerpt: Erfahren Sie hier, wie Sie die Reverse DNS-Auflösung Ihrer IPv4- oder IPv6-Adresse über Ihr Kundencenter einrichten
updated: 2026-02-23
---

## Ziel

Reverse DNS (*rDNS*) ist das ergänzende Gegenstück zur "*Forward*" DNS-Auflösung, die Domainnamen zu IP-Adressen auflöst. Mit Reverse DNS-Auflösung kann eine IP-Adresse zu dem Domainnamen (oder Hostnamen) aufgelöst werden, dem sie zugeordnet ist. Das bedeutet, dass DNS-Abfragen (*DNS Lookup*) der entsprechenden IP-Adresse diesen Domainnamen zurückgeben.

Die Konfiguration der umgekehrten DNS-Auflösung eines Servers ist besonders beim Versand von E-Mails nützlich. Die Validierung eines Mailservers durch Spamschutzsysteme verbessert sich, wenn eine DNS-Abfrage der IP-Adresse passend aufgelöst wird.

**Diese Anleitung erklärt, wie Sie den Reverse DNS-Pfad Ihrer IP-Adresse in Ihrem Kundencenter konfigurieren.**

## Voraussetzungen

- Sie verfügen über eine mit Ihrem Dienst verbundene IP-Adresse in Ihrem OVHcloud Kunden-Account.
- Sie haben einen Domainnamen, dessen `A`-Eintrag oder `AAAA`-Eintrag den Server als Ziel hat.

<!-- CP-NAV-START:network-public-ip -->
---

### Zugriff auf das OVHcloud Kundencenter

- **Direkter Link:** [Public IP](/links/control-panel/network-public-ip)
- **Navigationspfad:** `Network`{.action} > `Öffentliche IP-Adressen`{.action}

---
<!-- CP-NAV-END:network-public-ip -->

## In der praktischen Anwendung

Das Dropdown-Menü unter **Meine öffentlichen IP-Adressen und dazugehörigen Dienste** (Meine öffentlichen IP-Adressen und zugehörige Dienste) ermöglicht es Ihnen, Ihre Dienste nach Kategorie zu filtern. Sie können auch nach einer bestimmten IP-Adresse in der Suchleiste links neben dem Dropdown-Menü suchen.

![Reverse DNS](/pages/assets/screens/control_panel/product-selection/bare-metal-cloud/network/filterip_new.png){.thumbnail}

Klicken Sie auf die Schaltfläche `⁝`{.action} in der Zeile der betreffenden IP-Adresse und wählen Sie `Reverse DNS konfigurieren`{.action}.

![Reverse DNS](/pages/assets/screens/control_panel/product-selection/bare-metal-cloud/network/modifyreverse_new.png){.thumbnail}

Geben Sie im neuen Fenster Ihren Reverse-Pfad ein und klicken Sie auf `Bestätigen`{.action}.

![Reverse DNS](/pages/assets/screens/control_panel/product-selection/bare-metal-cloud/network/enterreverse_new.png){.thumbnail}

Sie können den Reverse-Pfad auch direkt über das `Stift`{.action}-Symbol in der Spalte **Reverse DNS** der Tabelle bearbeiten.

> [!warning]
> Wenn Sie Ihren Domainnamen als *Reverse* eingeben, wird sofort überprüft, ob der `A`- / `AAAA`-Eintrag auf dieselbe IP verweist. Anti-Spam-Verfahren verwenden diese Methode, daher muss Ihr DNS-Eintrag gültig sein und propagiert werden. Bei der Eingabe des *Reverse* sind bestimmte Regeln zu beachten:
>
>  - Der *Reverse* darf nicht mit einem `-` beginnen.
>  - Der *Reverse* darf höchstens 63 Zeichen enthalten.
>  - Der *Reverse* darf keine Großbuchstaben enthalten.
>  - Der *Reverse* muss mit einem `.` enden.
>
> Beispiel: "domain.tld" in der Reverse-Eintragsliste wäre `domain.tld.`.
>

> [!primary]
>
> Wenn die Änderung nicht wie erwartet funktioniert, überprüfen Sie, ob der Eintrag vom Typ `A`- / `AAAA` in der DNS-Zone Ihres Domainnamens korrekt konfiguriert ist. Beachten Sie, dass es bis zu 24 Stunden dauern kann, bis DNS-Zonenänderungen wirksam sind, falls Sie den Eintrag erst kürzlich bearbeitet haben.
>
> Falls der Domänenname von OVHcloud als Registrar verwaltet wird **und OVHcloud DNS-Server verwendet**, können Sie sich an [dieser Anleitung](/pages/web_cloud/domains/dns_zone_edit) orientieren.
>

## Weiterführende Informationen

[Bearbeiten einer OVHcloud DNS-Zone](/pages/web_cloud/domains/dns_zone_edit)

[DNS-Server von Domainnamen bei OVHcloud ändern](/pages/web_cloud/domains/dns_server_edit)

Treten Sie unserer [User Community](/links/community) bei.
