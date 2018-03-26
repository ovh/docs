---
title: Webhosting - Allgemeine Informationen zu den DNS Servern
excerpt: Webhosting - Allgemeine Informationen zu den DNS Servern
slug: webhosting_allgemeine_informationen_zu_den_dns_servern
---


## Definition
Das DNS oder Domain Name System dient zur "Übersetzung" von Domainnamen (z.B. meine-seite.tld) in IP-Adressen (z.B. 12.34.56.78), damit Ihre Anfragen über das Netz an den Ziel-Server geleitet werden können.

![](images/img_3413.jpg){.thumbnail}


## Unterschiede zwischen DNS Server / DNS Zone

## DNS Server

- Die DNS Server sind die Nameserver, die für einen Domainnamen deklariert (im Whois eingetragen) sind. Diese Server beantworten Anfragen zur Namensauflösung der Domain.



## DNS Zone

- Die DNS Zone ist eine Datei, in der die DNS Einstellungen für die dazugehörige Domain gespeichert sind. Die DNS Zone enthält verschiedene Einträge, zum Beispiel die Adresse des/der Server(s), auf dem Ihre Domain gehostet wird (A Eintrag), oder die für die Domain zuständigen E-Mail-Server (MX Eintrag).




## Warum kann es erforderlich sein, die DNS Server zu ändern oder die DNS Zone zu bearbeiten?

## DNS Server
Wenn Sie einen Transfer einer Domain zu einem anderen Registrar durchführen, müssen Sie häufig auch deren DNS Server ändern. In der Tat erlauben die meisten Anbieter nicht die weitere Verwendung ihrer Nameserver, wenn die Domain zu einem anderen Registrar übertragen wird. Oder Sie verfügen über eigene Dedicated Server, die Sie als DNS Server für Ihre Domain verwenden möchten.

## DNS Zone
Wenn Sie den Server wechseln möchten, auf dem Ihre Website gehostet wird, oder die für die Domain zuständigen E-Mail-Server umstellen möchten (zum Beispiel nach einem Wechsel des Anbieters), müssen Sie die Einstellungen in Ihrer DNS Zone bearbeiten.
Sobald die Änderungen aktiv geworden sind - die Propagation der DNS Einstellungen nimmt einige Stunden in Anspruch - verweist Ihre Domain dann auf die neuen Server.


## Verbindung mit dem Kundencenter

- Verbinden Sie sich mit Ihrer OVH Kundenkennung und dem dazugehörigen Passwort mit Ihrem [OVH Kundencenter](https://www.ovh.com/manager/web/login/).

- Klicken Sie auf "Login" um sich anzumelden.



![](images/img_3411.jpg){.thumbnail}


## Auswahl der Domain

- Klicken Sie in dem Menü auf der linken Seite unter "Domains" auf den gewünschten Domainnamen.



![](images/img_3405.jpg){.thumbnail}


## Eintragen der neuen DNS Server

- Begeben Sie sich in die Rubrik "DNS Verwaltung" und wählen Sie "Einen DNS Server hinzufügen" aus.



![](images/img_3406.jpg){.thumbnail}

- Geben Sie den gewünschten ersten DNS Server an und bestätigen Sie. Tragen Sie anschließend den zweiten DNS Server ein und bestätigen Sie.



![](images/img_3407.jpg){.thumbnail}


## Löschen der alten DNS Server

- Klicken Sie rechts in den Zeilen mit den beiden alten DNS Servern auf das "Papierkorb-Icon" und bestätigen Sie deren Löschung.



![](images/img_3408.jpg){.thumbnail}

- Die Löschung wird dann umgehend durchgeführt.



![](images/img_3409.jpg){.thumbnail}

- Nach einigen Minuten ist das Update abgeschlossen.



![](images/img_3410.jpg){.thumbnail}


## Die standardmäßigen DNS Server wiederherstellen
Falls Sie bei Ihrer Konfiguration einen Fehler gemacht haben, können Sie auch die standardmäßigen DNS Server wiederherstellen lassen.


- Klicken Sie dazu in der Rubrik "DNS Verwaltung" auf "Automatische Konfiguration der DNS Server".



![](images/img_3416.jpg){.thumbnail}

- Klicken Sie auf "Bestätigen", um die Operation anzustoßen.



![](images/img_3417.jpg){.thumbnail}


## Wie kann ich überprüfen, welche DNS Server von OVH meiner Domain zugewiesen wurden?
Begeben Sie sich dazu für die gewünschte Domain in die Rubrik "DNS Zone". In den beiden dort aufgeführten Einträgen vom Typ "NS" finden Sie die zuständigen OVH DNS Server.

![](images/img_3418.jpg){.thumbnail}


## Fortgeschrittene DNS Verwaltung mit Glue Registry
Die Erstellung Ihrer Glue Registry Einträge wird in folgender Hilfe beschrieben:
[]({legacy}1568)


## Wie lange dauert es, bis DNS Änderungen aktiv sind?
DNS Server

- Änderungen an den DNS Servern können bis zu 48 Stunden benötigen, bis sie aktiv sind.

Zone DNS
- Änderungen an der DNS Zone können bis zu 24 Stunden benötigen, bis sie aktiv sind.



