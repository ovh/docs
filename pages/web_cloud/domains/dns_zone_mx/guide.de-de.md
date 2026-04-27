---
title: MX-Eintrag für die E-Mail-Verwaltung konfigurieren
excerpt: Erfahren Sie hier, wie Sie mit OVHcloud MX-Einträge für Ihren Domainnamen konfigurieren
updated: 2026-03-27
---

<style>
.w-600 {
  max-width:600px !important;
}
.w-300 {
  max-width:300px !important;
}
</style>

## Ziel

Der Eintrag vom Typ MX legt den für die E-Mail-Adressen eines Domainnamens zuständigen E-Mail-Server fest. Damit wird Servern, die E-Mails an Ihre Adressen versenden, mitgeteilt, wohin diese versendet werden sollen.

**Diese Anleitung erklärt, wie Sie bei OVHcloud MX-Einträge zur Konfiguration Ihres Domainnamens hinzufügen.**

## Voraussetzungen

- Der Domainname verwendet die OVHcloud Konfiguration (die OVHcloud DNS-Server).
- Sie verfügen über einen MX Plan (enthalten in einem [Webhosting](/links/web/hosting) oder [Kostenloses Hosting 100M](/links/web/domains-free-hosting) oder separat bestellt), einen unserer [OVHcloud E-Mail-Dienste](/links/web/emails) oder einen externen E-Mail-Dienst.

<!-- CP-NAV-START:web-dns-zone -->
---

### Zugriff auf das OVHcloud Kundencenter

- **Direkter Link:** [DNS-Zone](/links/control-panel/web-dns-zone)
- **Navigationspfad:** `Web Cloud`{.action} > `DNS-Zone`{.action} > Wählen Sie Ihren Domainnamen aus

---
<!-- CP-NAV-END:web-dns-zone -->

> [!primary]
>
> - Wenn Ihr Domainname **nicht** die DNS-Server von OVHcloud verwendet, muss die Änderung der MX-Einträge über das Interface des Anbieters vorgenommen werden, der die Konfiguration Ihres Domainnamens verwaltet.
>
> - Wenn Ihr Domainname bei OVHcloud registriert ist, können Sie überprüfen, ob er unsere Konfiguration verwendet. Lesen Sie dazu bei Bedarf unsere Anleitung „[DNS-Server eines OVHcloud Domainnamens ändern](/pages/web_cloud/domains/dns_server_edit)".

## In der praktischen Anwendung

### Grundlegendes zur Rolle von MX-Einträgen

Der MX-Eintrag (**M**ail e**X**change) ist ein DNS-Eintrag, der festlegt, welche empfangenden E-Mail-Server mit Ihrem Domainnamen verknüpft sind.

Um die Funktionsweise zu verstehen, verwenden wir ein Beispiel:

- Die Adresse **sender@otherdomain.ovh** sendet eine E-Mail an **contact@mydomain.ovh**.
- Der sendende E-Mail-Server (**Outgoing mail server**) fragt die DNS-Zone des Domainnamens **mydomain.ovh** ab und liest die **MX**-Einträge.
- Die E-Mail wird an die URL des gelesenen **MX**-Eintrags weitergeleitet.
- Die E-Mail wird an das Ziel **mx0.mail.ovh.net** gesendet, dem der Wert **0** vorangestellt ist. Dieser Wert entspricht der Priorität: Der niedrigste Wert wird zuerst abgefragt, der höchste zuletzt. Das bedeutet, dass mehrere MX-Einträge eine fehlende Antwort des Servers ausgleichen, der durch den Eintrag mit der niedrigsten Priorität festgelegt wurde, indem nacheinander die folgenden Server in der Prioritätsreihenfolge abgefragt werden.

![E-Mail](/pages/assets/schemas/emails/mx-dns-resolution.png){.thumbnail .w-600}

Sie können mehrere MX-Einträge für denselben Domainnamen einrichten. In diesem Fall ist es notwendig, eine Prioritätsnummer für jeden dieser Einträge zu definieren. MX-Einträge werden in aufsteigender Reihenfolge von der niedrigsten zur höchsten Nummer abgefragt, bis eine Antwort vom empfangenden Server erfolgt.

> [!warning]
>
> Generell ist bei der **Änderung der MX-Einträge in der DNS-Zone Ihres Domainnamens Vorsicht geboten**: Bei einer fehlerhaften Änderung können E-Mails an Ihre Adressen nicht mehr empfangen werden.
> Im Zweifelsfall empfehlen wir Ihnen, einen [spezialisierten Dienstleister](/links/partner) zu kontaktieren.

### Werte der OVHcloud MX-Konfiguration <a name="mxovhcloud"></a>

Nachfolgend finden Sie die Konfiguration für OVHcloud MX Plan (Standalone oder in einem [OVHcloud Webhosting](/links/web/hosting) enthalten), [E-Mail Pro](/links/web/email-pro), [Exchange](/links/web/emails-exchange) und [Zimbra](/links/web/zimbra). Unsere E-Mail-Server verfügen über integrierte Antispam- und Antivirensoftware.

Diese Werte gelten für alle Angebote außer [Private Exchange](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/exchange_starting_private) und Dedicated Exchange.

|Domain|TTL|Eintrag|Priorität|Ziel|
|---|---|---|---|---|
|*Leer lassen*|3600|MX|1|mx0.mail.ovh.net.|
|*Leer lassen*|3600|MX|5|mx1.mail.ovh.net.|
|*Leer lassen*|3600|MX|50|mx2.mail.ovh.net.|
|*Leer lassen*|3600|MX|100|mx3.mail.ovh.net.|
|*Leer lassen*|3600|MX|200|mx4.mail.ovh.net.|

Diese MX-Einträge müssen in der DNS-Zone Ihres Domainnamens konfiguriert werden, wenn Sie einen OVHcloud E-Mail-Dienst nutzen.

<!-- CP-STEPS-START:configure-mx-record -->
### MX-Eintrag in einer OVHcloud DNS-Zone konfigurieren

Klicken Sie auf die Tabs, um die **5** Schritte nacheinander anzuzeigen.

> [!tabs]
> **Schritt 1**
>>
>> Gehen Sie auf die Seite [DNS-Zone](/links/control-panel/web-dns-zone), und wählen Sie den betreffenden Domainnamen aus.
>>
>> ![DNS-Zone](/pages/assets/screens/control_panel/product-selection/web-cloud/dns-zones.png){.thumbnail}
>>
> **Schritt 2**
>>
>> Die Tabelle zeigt die OVHcloud DNS-Konfiguration Ihres Domainnamens an. Jede Zeile entspricht einem DNS-Eintrag.
>>
>> Überprüfen Sie, ob bereits MX-Einträge vorhanden sind, indem Sie den Typ **MX** in der Filterliste über der Tabelle auswählen und bestätigen.
>>
>> ![DNS MX-Eintrag](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/mx-entries-research.png){.thumbnail .w-600}
>>
> **Schritt 3**
>>
>> - Wenn bereits MX-Einträge vorhanden sind und Sie diese bearbeiten möchten, klicken Sie auf den Button `...`{.action} rechts in der Zeile und dann auf `Eintrag bearbeiten`{.action}.
>> - Wenn kein MX-Eintrag vorhanden ist, klicken Sie auf den Button `Eintrag hinzufügen`{.action} rechts neben der Tabelle und wählen Sie `MX`{.action} aus.
>>
> **Schritt 4**
>>
>> Geben Sie die angeforderten Daten je nach gewähltem E-Mail-Dienst ein.
>>
>> **Wenn Sie über eine E-Mail-Lösung von OVHcloud verfügen**, verwenden Sie die Informationen unter „[OVHcloud MX-Konfiguration](#mxovhcloud)".
>>
>> ![DNS MX-Eintrag](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/modify-a-dns-zone-record-mx-step-1.png){.thumbnail .w-600}
>>
> **Schritt 5**
>>
>> Wenn Sie alle Daten eingegeben haben, schließen Sie die Schritte ab und klicken Sie auf `Bestätigen`{.action}.

**Wenn Sie eine andere E-Mail-Lösung nutzen**, befolgen Sie die Anweisungen Ihres E-Mail-Dienstanbieters.

> [!primary]
>
> Jede Änderung erfordert eine Propagationszeit zwischen 4 und 24 Stunden, bis sie voll wirksam ist.
<!-- CP-STEPS-END:configure-mx-record -->

## Weiterführende Informationen

[Allgemeine Informationen zu DNS-Servern](/pages/web_cloud/domains/dns_server_general_information)

[OVHcloud DNS-Zone bearbeiten](/pages/web_cloud/domains/dns_zone_edit)

[E-Mail-Sicherheit durch SPF-Eintrag verbessern](/pages/web_cloud/domains/dns_zone_spf)

[E-Mail-Sicherheit durch DKIM-Eintrag verbessern](/pages/web_cloud/domains/dns_zone_dkim)

Kontaktieren Sie für spezialisierte Dienstleistungen (SEO, Web-Entwicklung etc.) die [OVHcloud Partner](/links/partner).

Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, beachten Sie unsere [Support-Angebote](/links/support).

Treten Sie unserer [User Community](/links/community) bei.