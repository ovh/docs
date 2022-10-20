---
title: "Einen .uk-Domainnamen zu einem anderen Registrar transferieren"
slug: transfer-ausgehend-einer-domainnamen-couk
excerpt: "Erfahren Sie hier, wie Sie Domainnamen mit UK-Ländercode zu einem anderen Provider transferieren"
section: Transfer
order: 05
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie beim geringsten Zweifel die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button «Mitmachen» auf dieser Seite.
>

**Letzte Aktualisierung am 20.10.2022**

> [!warning]
>
> Achtung, wenn die Domain bereits bei OVHcloud registriert ist, muss eigentlich kein ausgehender Transfer durchgeführt werden, sondern [eine Änderung der Kontakte "Administrator", "technisch" und/oder "Abrechnung"](https://docs.ovh.com/de/customer/verwaltung-der-kontakte/) für Ihre Domain durchgeführt werden.
>
> Tatsächlich erfolgt der tatsächliche Transfer von Domainnamen nur zwischen Registern wie OVHcloud.
>
> Wenn sich auch das Eigentum an der Domain ändern muss, denken Sie daran, diese Aktion durchzuführen, **bevor** Sie die Kontakte Ihrer Domain ändern, und verwenden Sie hierzu unsere Anleitung zur [Änderung des Inhabers einer Domain](https://docs.ovh.com/de/domains/wechsel_des_domaininhabers/).
>

## Ziel

Der Transferprozess für Top Level Domains (TLDs) des Ländercodes **UK** (**.uk**) unterscheidet sich von dem, der in unserer [Anleitung zu generischen TLDs](../ausgehender-transfer-einer-generischen-oder-geografischen-domain/) erklärt wird. Die nachfolgenden Anweisungen betreffen diese Endungen:

- .uk
- .co.uk
- .ac.uk
- .gov.uk
- .me.uk
- .net.uk
- .org.uk
- .plc.uk
- .sch.uk

**Diese Anleitung erklärt, wie Sie einen ausgehenden Transfer für .uk-TLDs über Ihr OVHcloud Kundencenter starten.**

## Voraussetzungen

- Sie verfügen über einen bei OVHcloud registrierten [.uk-Domainnamen](https://www.ovhcloud.com/de/domains/).
- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) mit den erforderlichen Berechtigungen zum Verwalten der Domain (Domainadministrator).
- Der Domainname muss noch aktiv sein, d.h. er ist nicht abgelaufen oder anderweitig seitens OVHcloud gesperrt.
- Der Domainname darf nicht Gegenstand eines laufenden Rechtsstreits bei der zuständigen Registry [Nominet](https://www.nominet.uk/) sein.

> [!primary]
>
> Wenn der Domainname seit **weniger als 90 Tagen** abgelaufen ist, kann er dennoch transferiert werden. Kontaktieren Sie in diesem Fall unsere Support Teams, indem Sie im OVHcloud Kundencenter eine Ticket-Anfrage zur Transferfreigabe erstellen.
>
> Wenn Sie der **Inhaber** der Domain sind, deren Verwaltung Ihnen im OVHcloud Kundencenter jedoch nicht möglich ist, weder über Ihren eigenen Zugang noch den Administrator-Kontakt der Domain, konsultieren Sie bitte [diese Anleitung](../../customer/verwaltung-der-kontakte/#sonderfall-bei-domaininhabern), bevor Sie fortfahren.
>

## In der praktischen Anwendung

Die betroffenen TLDs haben einen **TAG**, der stets einem Domainnamen-Registrar (wie OVHcloud) entspricht. Der Transferprozess wird eingeleitet, indem Sie den TAG zu demjenigen ändern, der Ihren neuen Registrar identifiziert.

Falls Sie den benötigten TAG noch nicht kennen, können Sie ihn bei Ihrem neuen Anbieter erfragen oder auf dieser [Nominet-Registrarliste](https://registrars.nominet.uk/uk-namespace/registrar-agreement/list-of-registrars/) nachsehen.

### Schritt 1: Überprüfung der erforderlichen Informationen

Loggen Sie sich in Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) ein und wählen Sie im Bereich `Web Cloud`{.action} Ihren Domainnamen unter `Domainnamen`{.action} aus.

Denken Sie daran, dass Sie als Administrator-Kontakt eingeloggt sein müssen.

Im Tab `Allgemeine Informationen`{.action} können Sie überprüfen, ob die Voraussetzungen für den Transfer erfüllt sind.


### Schritt 2: Den TAG Ihrer Domain ändern

Klicken Sie im Bereich **Sicherheit** auf `Ausgehender Transfer-TAG`{.action}.

![ausgehender Transfer](images/img_4267.jpg){.thumbnail}

Geben Sie im neuen Fenster den TAG Ihres neuen Registrars ein und klicken Sie dann auf `Bestätigen`{.action}.

![ausgehender Transfer](images/img_4268.jpg){.thumbnail}

Falls es Ihnen nicht möglich ist, den TAG Ihres Domainnamens über Ihr Kundencenter zu ändern, können Sie dies auch direkt bei der Registrierungsstelle beantragen. Weitere Informationen finden Sie auf der offiziellen [Website von Nominet](https://www.nominet.uk/domain-support/).

### Schritt 3: Den Transfer bei Ihrem neuen Registrar verfolgen

Eine erfolgreiche Änderung des TAG startet den Transferprozess. Wenden Sie sich an Ihren neuen Anbieter, um Details und mögliche Folgefragen zu klären.

## Weiterführende Informationen

[Einen Domainnamen zu einem anderen Registrar transferieren](../ausgehender-transfer-einer-generischen-oder-geografischen-domain/)

Für den Austausch mit unserer Community gehen Sie auf <https://community.ovh.com/en/>.
