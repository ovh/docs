---
title: "Web Cloud Databases - Wie autorisiere ich eine IP-Adresse?"
excerpt: "Erfahren Sie, wie Sie einer oder mehreren IP-Adressen den Zugriff auf Ihre Web Cloud Databases Lösung erlauben"
updated: 2026-03-24
---

<style>
details>summary {
    color:rgb(33, 153, 232) !important;
    cursor: pointer;
}
details>summary::before {
    content:'\25B6';
    padding-right:1ch;
}
details[open]>summary::before {
    content:'\25BC';
}
</style>

## Ziel

Die [Web Cloud Databases](/links/web/databases) können mit anderen OVHcloud Diensten oder externen Diensten verwendet werden.

Standardmäßig und aus Sicherheitsgründen für diese Lösungen:

- Nur die IP-Adressen, die mit unserer Hosting-Infrastruktur verbunden sind, sind zum Zugriff auf den Inhalt der Datenbanken berechtigt.
- Der Zugriff auf die Logs der Lösung ist nicht auf IP-Basis eingeschränkt. So kann zum Beispiel über beliebige Endgeräte darauf zugegriffen werden.

Möchten Sie diese Berechtigungen/Einschränkungen ändern?

**Diese Anleitung erklärt, wie Sie einer oder mehreren IP-Adressen Zugriff auf Ihre Web Cloud Databases Lösung gewähren.**

## Voraussetzungen

- Sie verfügen über die OVHcloud Lösung [Web Cloud Databases](/links/web/databases).
- Sie haben die IP-Adresse (oder den IP-Adressbereich), die Datenbank-Zugriff erhalten soll.

<!-- CP-NAV-START:web-cloud-databases -->
---

### Zugriff auf das OVHcloud Kundencenter

- **Direkter Link:** [Web Cloud Databases](/links/control-panel/web-cloud-databases)
- **Navigationspfad:** `Web Cloud`{.action} > `Web Cloud Databases`{.action} > Wählen Sie Ihren Datenbankdienst aus

---
<!-- CP-NAV-END:web-cloud-databases -->

## In der praktischen Anwendung

### Eine IP-Adresse oder einen IP-Adressbereich autorisieren

> [!primary]
>
> Zur Erinnerung: Wenn Sie Ihre [Web Cloud Databases](/links/web/databases) Lösung gerade aktiviert haben und diese nur mit einem [OVHcloud Webhosting](/links/web/hosting) verwenden möchten, müssen die IP-Adressen Ihres Webhosting nicht manuell autorisiert werden.

Klicken Sie auf die Tabs, um die **4** Schritte anzuzeigen.

> [!tabs]
> **Schritt 1**
>>
>> Gehen Sie auf die Seite [Web Cloud Databases](/links/control-panel/web-cloud-databases), und wählen Sie die betreffende Lösung aus.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases.png){.thumbnail}
>>
> **Schritt 2**
>>
>> Klicken Sie auf der angezeigten Seite auf den Tab `Autorisierte IPs`{.action}.
>>
>> ![Authorised IPs](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/authorised-ips.png){.thumbnail}
>>
> **Schritt 3**
>>
>> Klicken Sie auf der angezeigten Seite auf den Button `IP-Adresse / Maske hinzufügen`{.action} über der Tabelle.
>>
>> ![Authorised IPs interface](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/authorized-ips/tab-0000-sftp-hosting-enabled.png){.thumbnail}
>>
>> > [!success]
>> >
>> > Wenn Sie eine bereits zugelassene IP-Adresse (oder IP-Adressbereich) ändern möchten, klicken Sie in der Tabelle auf den Button `...`{.action} in der Zeile der zu ändernden IP-Adresse (oder IP-Adressbereich), und dann auf `Whitelist bearbeiten`{.action}.
>>
> **Schritt 4**
>>
>> Im angezeigten Fenster müssen mehrere Felder ausgefüllt werden:
>>
>> ![Add an IP address or mask](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/authorized-ips/add-an-ip-address-mask-confirmation.png){.thumbnail}
>>
>> - `IP / Maske *`{.action}: Geben Sie hier die IP-Adresse (zum Beispiel: `203.0.113.44`) ein, die Sie für Ihre Web Cloud Databases Lösung autorisieren möchten bzw. den IP-Adressbereich (zum Beispiel: `203.0.113.0/24`, der alle IP-Adressen von `203.0.113.0` bis `203.0.113.255` darstellt).
>> - `Beschreibung`{.action} (optional): Sie können etwa Informationen zur Rolle der betreffenden IP-Adresse (oder IP-Adressbereich) hinzufügen.
>> - `Datenbanken`{.action}: Aktivieren Sie diese Option, damit die IP-Adresse (oder IP-Adressbereich) auf die Datenbanken auf Ihrer Web Cloud Databases Lösung zugreifen kann.
>> - `SFTP`{.action}: Setzen Sie hier einen Haken, damit die IP-Adresse oder der IP-Adressbereich auf die Logs Ihrer Web Cloud Databases Lösung zugreifen können.
>>
>> > [!warning]
>> >
>> > Es wird davon abgeraten, die Option `Datenbanken`{.action} zu aktivieren, die den IP-Adressbereich `0.0.0.0/0` für den Datenbank-Zugriff autorisiert.
>> >
>> > Dies würde allen IP-Adressen den Zugriff auf Ihre Datenbanken erlauben.
>>
>> Nachdem Sie die Informationen eingegeben haben, klicken Sie auf `Bestätigen`{.action}.

## Sonderfälle

**Klicken Sie auf die unten stehenden Fälle, um die zugehörigen Informationen anzuzeigen.**

/// details | Der IP-Adressbereich 0.0.0.0/0

Bei der Aktivierung Ihrer Web Cloud Databases Lösung ist bereits eine Zeile für den IP-Adressbereich `0.0.0.0/0` vorhanden, um den Zugriff per **SFTP** zu erlauben.

Diese Berechtigung wird automatisch eingerichtet, damit Sie auf die Logdateien Ihrer Web Cloud Databases Lösung zugreifen können, ohne die IP-Adresse Ihres Internet Access Points erlauben zu müssen.

Diese IP-Adresse ändert sich normalerweise in regelmäßigen Abständen (abhängig vom Internet Service Provider).

Wir empfehlen, diese Berechtigung **nicht zu ändern** und den Zugriff auf die Datenbanken auf Ihrer Web Cloud Databases Lösung nicht pauschal zu erlauben.

Damit würde Zugriff auf die Datenbanken für alle IPv4-Adressen ermöglicht, was ein Risiko für Ihre Datensicherheit wäre.

///

/// details | Autorisierung des Datenbank-Zugriffs für OVHcloud Webhostings

Bei der Aktivierung Ihrer Web Cloud Databases Lösung ist die Autorisierung für den Zugriff auf die OVHcloud Webhostings standardmäßig aktiviert.

Wenn Sie diese Berechtigung deaktivieren möchten, da Sie kein Webhosting mit Ihrer Web Cloud Databases Lösung verwenden, klicken Sie auf die Tabs, um die **3** Schritte anzuzeigen.

> [!tabs]
> **Schritt 1**
>>
>> Gehen Sie auf die Seite [Web Cloud Databases](/links/control-panel/web-cloud-databases), und wählen Sie die betreffende Lösung aus.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases.png){.thumbnail}
>>
> **Schritt 2**
>>
>> Klicken Sie auf den Tab `Autorisierte IPs`{.action}.
>>
>> ![Authorised IPs](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/authorised-ips.png){.thumbnail}
>>
> **Schritt 3**
>>
>> Deaktivieren Sie die Option `Den OVHcloud Webhostings den Zugriff auf die Datenbank erlauben`{.action}.
>>
>> ![Authorised IPs interface](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/authorized-ips/tab-0000-sftp-hosting-enabled.png){.thumbnail}

///

## Weiterführende Informationen

Kontaktieren Sie für spezialisierte Dienstleistungen (SEO, Web-Entwicklung etc.) die [OVHcloud Partner](/links/partner).

Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, beachten Sie unsere [Support-Angebote](/links/support).

Treten Sie unserer [User Community](/links/community) bei.
