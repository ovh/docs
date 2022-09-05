---
title: 'Einen Fehler bei einer Domain beheben'
slug: domain-errors
section: Aktuelle Tasks
order: 01
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie beim geringsten Zweifel die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button «Mitmachen» auf dieser Seite.
>

**Letzte Aktualisierung am 01.09.2022**

## Ziel

Bei der Erstellung eines Domainnamens, dem Transfer oder dem Inhaberwechsel handelt es sich um Vorgänge, bei denen ein Fehler auftreten kann. In diesem Fall kann ein Eingriff von Ihnen erforderlich sein.

**Hier erfahren Sie, wie Sie vorgehen, wenn ein Fehler bei einem Domainnamen auftritt.**

## Voraussetzungen

- Sie besitzen eine oder mehrere Domains.
- Sie sind in Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) angemeldet.
- Sie haben keine ausstehenden [Zahlungen](https://docs.ovh.com/de/billing/ovh-rechnungen-verwalten/#pay-bills) und [Verlängerungen](https://docs.ovh.com/de/billing/anleitung_zur_nutzung_der_automatischen_verlangerung_bei_ovh/#renewal-management) der dazugehörigen Dienstleistungen (Domainname und Webhosting).

## In der praktischen Anwendung

Gehen Sie [in Ihrem OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) Kundencenter in den Bereich `Web Cloud`{.action} und dann `Domainnamen`{.action}. Klicken `Sie auf`{.action} Laufende Operationen über der Liste der Domainnamen.

In einer Tabelle können Sie alle Vorgänge im Zusammenhang mit den Domainnamen in Ihrem Kundencenter einsehen.

![domain](images/domain-error-table01.png){.thumbnail}

- `Domain`: Domainname, der von der Operation betroffen ist.
- `Operation`:  Laufende Operation für den Domainnamen.
- `Kommentar`: Details zum laufenden Vorgang. Anweisungen.
- `Bearbeitungsdatum`: Datum der Erstellung der Operation.
- `Datum des Updates`:  Zeitstempel für die Aktualisierung der laufenden Operation.
- `Enddatum`: Datum des Abschlusses der Transaktion.
- `Status`: Derzeitiger Stand der Operation.

Nicht alle in dieser Tabelle aufgeführten Operationen erfordern Ihren Eingriff, damit sie normal durchgeführt werden.<br>
In dieser Anleitung werden wir **uns** anhand wiederkehrender Beispiele für fehlerhafte Operationen interessieren.

![domain](images/domain-error-table02.png){.thumbnail}

### Beispiele

> [!primary]
>
> Die nachstehende Beispielliste ist nicht erschöpfend. Falls Sie einen Fehler feststellen, der in dieser Anleitung nicht im Einzelnen aufgeführt ist:
>
> - Überprüfen Sie, dass Sie bei den [Zahlungen](https://docs.ovh.com/de/billing/ovh-rechnungen-verwalten/#pay-bills) und [Verlängerungen](https://docs.ovh.com/de/billing/anleitung_zur_nutzung_der_automatischen_verlangerung_bei_ovh/#renewal-management) Ihrer Domains auf dem neuesten Stand sind.
> - Überprüfen Sie, ob Sie etwas tun können, indem Sie auf die Kfz-Nabe klicken `...`{.action} rechts neben der betreffenden Operation.
> - Lesen Sie die beschreibende Nachricht und überprüfen Sie, ob mit dieser der Fehler behoben werden kann.
>
> Sollten Sie trotz dieser Überprüfungen nicht in der Lage sein, auf den Domainnamen zu reagieren, bitten wir Sie, über Ihr Kundencenter ein Support-Ticket zu öffnen.
>

#### Dokumentenanfrage

Für bestimmte Domainendungen ist es notwendig, ihre Verwendung durch die Vorlage von Dokumenten zu begründen. Ist das der Fall, müssen Sie die Dokumente über das Fenster `Laufende Operationen`{.action} übermitteln.

![domain](images/domain-error01.png){.thumbnail}

Um das/die erforderliche(n) Dokument(e) bereitzustellen, klicken Sie rechts neben der betreffenden Operation auf den Button `...`{.action}<br>
Das folgende Fenster wird angezeigt. Im Bereich "Beschreibung" erhalten Sie Informationen zum zu liefernden Dokument sowie einen Button zum Verschieben Ihres Dokuments.

![domain](images/domain-error02.png){.thumbnail}

#### Fehlende Informationen

Wenn Sie Ihre Domain registrieren, müssen die Kontaktdaten manchmal ergänzt werden. Wenn diese nicht den Kriterien des Domainnamens entsprechen, können Sie den unten stehenden Fehler erhalten.

![domain](images/domain-error03.png){.thumbnail}

Klicken Sie rechts neben der Operation auf den Button `...`{.action}<br>
Das folgende Fenster wird angezeigt. Füllen Sie die Felder mit den Informationen des betreffenden Kontakts aus.

![domain](images/domain-error04.png){.thumbnail}

#### Falscher Transfer-Code 

Wenn Sie Ihre Domain zu OVHcloud transferieren, geben Sie bei der Bestellung einen Transfer-Code (**authInfo**) ein. Wenn dieser Code nicht korrekt ist, wird die Operation unterbrochen, Sie können ihn jedoch erneut starten, indem Sie den richtigen Code angeben.

![domain](images/domain-error05.png){.thumbnail}

Klicken Sie rechts neben der Operation auf den Button `...`{.action}<br>
Das folgende Fenster erscheint, geben Sie den Transfer-Code (**authInfo**) ein und starten Sie den Vorgang neu.

![domain](images/domain-error06.png){.thumbnail}

#### Fehler bei den DNS Servern

Es kann ein Fehler auftreten, wenn die DNS Server, die Sie einer Domain anhängen, nicht funktionieren.<br>
Im folgenden Beispiel antwortet die IP-Adresse des DNS Servers nicht.

![domain](images/domain-error07.png){.thumbnail}

Wählen Sie im Bereich `Domainnamen`{.action} die betreffende Domain aus und klicken Sie dann auf den Tab `DNS Server`{.action}. Ändern Sie in diesem Tab [Ihre DNS Server](https://docs.ovh.com/de/domains/webhosting_allgemeine_informationen_zu_den_dns_servern/). 

#### Fehler bei einer Domain mit der Endung **ie**, **de** oder **it** ** nach einem DNS Update

Wenn Sie Ihre DNS Server ändern, kann die Registry die neuen DNS Server sowie die zugehörige DNS Zone überprüfen und die Domain sperren, wenn die Konfiguration nicht konform ist.

> [!warning]
>
> Dieser Typ der Sperrung wird von der Registry und nicht von OVHcloud initiiert. Selbst wenn die Domain von der Registry blockiert wird, erscheinen ihre DNS Server als `Active` in Ihrem OVHcloud Kundencenter.

Um zu überprüfen, ob Ihr Domainname derart gesperrt ist, gehen Sie in die Tabelle der `laufenden Operationen`{.action}.

![domain](images/domain-error08.png){.thumbnail}

Um Ihre Domain zu überprüfen, empfehlen wir Ihnen die Verwendung des von der Registry ausgestellten Tools zur Überprüfung:

- Für eine **.de**-Domain: <https://nast.denic.de/>.
- Für eine **.it**-Domain: <https://dns-check.nic.it/>.

> [!primary]
>
> Wenn Ihre Registry kein Tool zur Überprüfung von DNS Servern zur Verfügung stellt, können Sie Ihre neuen DNS Server mit dem Befehl `nslookups` auf einer Windows Eingabeaufforderung oder mit dem Befehl `dig` auf einem Linux- oder macOS-"Terminal" abfragen. 
>
> Wenn Ihre DNS Server erreichbar sind, wird Ihnen eine IP-Adresse im Tool angezeigt.
>
> Vergewissern Sie sich in jedem Fall beim Administrator des DNS Servers, dass dieser DNS Server so konfiguriert ist, dass er die DNS Zone Ihrer Domain aufnimmt.

Wenn Sie den Ursprung des Fehlers identifiziert und ihn korrigiert haben, können Sie rechts neben der betreffenden Operation auf den Button `...`{.action} klicken und die DNS-Verifizierungsoperation neu starten.

#### OVHcloud interner Fehler

Sie können einen Fehler mit den Details "interner Fehler"feststellen. Dieser Fehler erlaubt keine Aktion Ihrerseits.<br>
Überprüfen Sie zunächst, dass Ihre Domain und die DNS Server aktiv sind. 

Wenn Sie eine Anomalie feststellen, die nicht mit der Konfiguration der DNS Server oder der DNS Zone zusammenhängt, können Sie ein Support-Ticket beim OVHcloud Support öffnen, um die Ursache der Störung zu ermitteln.

![domain](images/domain-error09.png){.thumbnail}

## Weiterführende Informationen

[Ihre Domain zu OVHcloud transferieren](https://docs.ovh.com/de/domains/transfer-einer-generischen-domain/).

[Eine Domain zu einem anderen Registrar transferieren](https://docs.ovh.com/de/domains/ausgehender-transfer-einer-generischen-oder-geografischen-domain/).

[DNS-Server einer OVHcloud Domain ändern](https://docs.ovh.com/de/domains/webhosting_allgemeine_informationen_zu_den_dns_servern/).
 
Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
