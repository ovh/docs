---
title: "Fehler bei Domain-Operationen beheben"
slug: domain-errors
section: Allgemeine Verwendung
order: 01
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie beim geringsten Zweifel die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button «Mitmachen» auf dieser Seite.
>

**Letzte Aktualisierung am 01.09.2022**

## Ziel

Bei der Erstellung eines Domainnamens, dem Transfer oder dem Inhaberwechsel handelt es sich um technische Vorgänge, bei denen Fehler auftreten können. In diesem Fall kann ein Eingriff Ihrerseits erforderlich sein.

**Diese Anleitung erklärt, wie Sie vorgehen können, wenn ein Fehler bei einem Domainnamen auftritt.**

## Voraussetzungen

- Sie verfügen über eine oder mehrere Domains.
- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de).
- Sie haben keine ausstehenden [Zahlungen](https://docs.ovh.com/de/billing/ovh-rechnungen-verwalten/#pay-bills) und [Verlängerungen](https://docs.ovh.com/de/billing/anleitung_zur_nutzung_der_automatischen_verlangerung_bei_ovh/#renewal-management) der dazugehörigen Dienstleistungen (Domainname und Webhosting).

## In der praktischen Anwendung

Gehen Sie in Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) in den Bereich `Web Cloud`{.action} und dann zu `Domainnamen`{.action}. Klicken Sie auf `Laufende Operationen`{.action} über der Liste der Domainnamen.

Die hier angezeigte Tabelle zeigt alle Vorgänge im Zusammenhang mit den Domainnamen in Ihrem Kundencenter an.

![domain](images/domain-error-table01.png){.thumbnail}

- `Domain`: Domainname, der von der Operation betroffen ist
- `Operation`: Laufende Operation für den Domainnamen
- `Kommentar`: Details zum laufenden Vorgang und Anweisungen
- `Bearbeitungsdatum`: Datum der Erstellung der Operation
- `Datum des Updates`: Zeitstempel der Aktualisierung der laufenden Operation
- `Enddatum`: Datum des Abschlusses der Transaktion
- `Status`: Derzeitiger Stand der Operation

Nicht alle in dieser Tabelle aufgeführten Operationen erfordern Ihren Eingriff, damit sie normal durchgeführt werden.<br>
Diese Anleitung ist fokussiert auf **fehlerhafte** Operationen anhand von Beispielen häufig auftretender Sachverhalte.

![domain](images/domain-error-table02.png){.thumbnail}

### Beispiele

> [!primary]
>
> Die nachstehende Beispielliste ist nicht erschöpfend. Falls Sie einen Fehler feststellen, der in dieser Anleitung nicht im Einzelnen aufgeführt ist, führen Sie folgende Überprüfungen durch:
>
> - Stellen Sie sicher, dass für Domains keine [Zahlungen](https://docs.ovh.com/de/billing/ovh-rechnungen-verwalten/#pay-bills) und [Verlängerungen](https://docs.ovh.com/de/billing/anleitung_zur_nutzung_der_automatischen_verlangerung_bei_ovh/#renewal-management) ausstehen.
> - Überprüfen Sie, ob Sie das Problem beheben können, indem Sie auf `...`{.action} rechts neben der betreffenden Operation klicken.
> - Lesen Sie die beschreibende Nachricht und überprüfen Sie, ob aufgrund dieser Information der Fehler korrigiert werden kann.
>
> Sollten Sie trotz dieser Maßnahmen nicht in der Lage sein, die Domainnamen-Operation abzuschließen, erstellen Sie über Ihr Kundencenter ein Support-Ticket.
>

#### Dokumentenanfrage

Für bestimmte Domainendungen ist es notwendig, ihre Verwendung durch die Vorlage von Dokumenten zu begründen. Ist das der Fall, müssen Sie die Dokumente über das Fenster `Laufende Operationen`{.action} übermitteln.

![domain](images/domain-error01.png){.thumbnail}

Um die erforderlichen Dokumente bereitzustellen, klicken Sie rechts neben der betreffenden Operation auf den Button `...`{.action}. <br>
Das folgende Fenster wird angezeigt. Im Bereich "Beschreibung" erhalten Sie Informationen zum nötigen Dokument sowie einen Button zum Hochladen der Datei.

![domain](images/domain-error02.png){.thumbnail}

#### Fehlende Informationen

Wenn Sie Ihren Domainnamen registrieren, müssen die Kontaktdaten manchmal ergänzt werden. Wenn diese nicht den Kriterien für den Domainnamen entsprechen, können Sie den unten stehenden Fehler erhalten.

![domain](images/domain-error03.png){.thumbnail}

Klicken Sie rechts neben der Operation auf den Button `...`{.action}<br>
Das folgende Fenster wird angezeigt. Füllen Sie die Felder mit den Details des betreffenden Kontakts aus.

![domain](images/domain-error04.png){.thumbnail}

#### Falscher Transfer-Code 

Wenn Sie Ihre Domain zu OVHcloud transferieren, geben Sie normalerweise bei der Bestellung einen Transfer-Code (**authInfo**) ein. Wenn dieser Code nicht korrekt ist, wird die Operation unterbrochen. Sie können den Transfer jedoch neu starten, indem Sie den richtigen Code angeben.

![domain](images/domain-error05.png){.thumbnail}

Klicken Sie rechts neben der Operation auf den Button `...`{.action}. <br>
Das folgende Fenster erscheint. Geben Sie den Transfer-Code (**authInfo**) ein und starten Sie den Vorgang neu.

![domain](images/domain-error06.png){.thumbnail}

#### Fehler bei den DNS Servern

Es kann ein Fehler auftreten, wenn die DNS-Server, die Sie einer Domain anhängen, nicht funktionieren.<br>
Im folgenden Beispiel antwortet die IP-Adresse des DNS-Servers nicht.

![domain](images/domain-error07.png){.thumbnail}

Wählen Sie im Bereich `Domainnamen`{.action} die betreffende Domain aus und klicken Sie dann auf den Tab `DNS Server`{.action}. Bearbeiten Sie in diesem Tab [Ihre DNS Server](https://docs.ovh.com/de/domains/webhosting_allgemeine_informationen_zu_den_dns_servern/). 

#### Fehler bei einer Domain mit der Endung **.ie**, **.de** oder **.it** ** nach einem DNS-Update

Wenn Sie Ihre DNS-Server ändern, kann die Registry die neuen DNS-Server sowie die zugehörige DNS-Zone überprüfen und daraufhin die Domain sperren, falls die Konfiguration nicht konform ist.

> [!warning]
>
> Dieser Typ der Sperrung wird von der Registry und nicht von OVHcloud initiiert. Selbst wenn die Domain von der Registry blockiert wird, erscheinen ihre DNS-Server als `Aktiv` in Ihrem OVHcloud Kundencenter.

Um zu überprüfen, ob Ihr Domainname derart gesperrt ist, gehen Sie zur Tabelle unter `Laufende Operationen`{.action}.

![domain](images/domain-error08.png){.thumbnail}

Um Ihre Domain zu überprüfen, empfehlen wir Ihnen die Verwendung des von der jeweiligen Registry bereitgestellten Tools, zum Beispiel:

- Für eine **.de**-Domain: <https://nast.denic.de/>
- Für eine **.it**-Domain: <https://dns-check.nic.it/>

> [!primary]
>
> Wenn Ihre Registry kein Tool zur Überprüfung von DNS-Servern zur Verfügung stellt, können Sie Ihre neuen DNS-Server mit dem Befehl `nslookup` in der Windows-Eingabeaufforderung oder mit dem Befehl `dig` in einem Terminal für Linux oder macOS abfragen. 
>
> Wenn Ihre DNS-Server erreichbar sind, wird das Tool deren IP-Adressen zurückgeben.
>
> Vergewissern Sie sich in jedem Fall beim Administrator des DNS-Servers, dass die DNS-Server so konfiguriert sind, dass sie die DNS-Zone Ihrer Domain hosten können.

Wenn Sie den Ursprung des Fehlers identifiziert und ihn korrigiert haben, können Sie rechts neben der betreffenden Operation auf den Button `...`{.action} klicken und die DNS-Verifizierungsoperation neu starten.

#### OVHcloud interner Fehler

Sie können unter Umständen einen Fehler mit dem Kommentar "interner Fehler" feststellen. Dieser Fehlertyp erlaubt keine Aktion Ihrerseits.<br>
Überprüfen Sie dann zunächst, dass Ihre Domain und die DNS-Server aktiv sind. 

Wenn Sie eine Anomalie feststellen, die nicht mit der Konfiguration der DNS-Server oder der DNS-Zone zusammenhängt, können Sie ein Support-Ticket für den OVHcloud Support erstellen, um die Ursache der Störung zu ermitteln.

![domain](images/domain-error09.png){.thumbnail}

## Weiterführende Informationen

[Ihre Domain zu OVHcloud transferieren](https://docs.ovh.com/de/domains/transfer-einer-generischen-domain/)

[Eine Domain zu einem anderen Registrar transferieren](https://docs.ovh.com/de/domains/ausgehender-transfer-einer-generischen-oder-geografischen-domain/)

[DNS-Server einer OVHcloud Domain ändern](https://docs.ovh.com/de/domains/webhosting_allgemeine_informationen_zu_den_dns_servern/)
 
Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
