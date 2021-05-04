---
title: Zonecheck für Ihre Domain
excerpt: In dieser Hilfe erklären wir Ihnen, wie Sie einen Zonecheck für Ihre Domain durchführen
slug: zonecheck_fur_ihre_domain
legacy_guide_number: g1980
section: DNS und DNS-Zone
---


## Ausfüllen der erforderlichen Felder
Mit dem [Zonecheck-Tool](https://zonemaster.fr/) der AFNIC können Sie die korrekte Konfiguration des primären und sekundären DNS, die Sie verwenden möchten.

Gehen Sie hierfür zunächst auf die [Zonemaster-Webseite](https://zonemaster.fr/).
Klicken Sie dort auf "Pre-delegated domain"und machen Sie folgende Angaben:


- Domain name: Geben Sie den Namen der zu überprüfenden Domain an.
- Nameservers: Klicken Sie auf das kleine "+", wenn Sie die Zahl der zu überprüfenden DNS Server erhöhen möchten, und geben Sie dann den/die Server sowie die zugehörige(n) IP(s) an.
- Klicken Sie dann auf den "Bestätigung"s-Button, um das Ergebnis anzuzeigen.



![](images/img_3213.jpg){.thumbnail}


## Ergebnis
Wenn Sie das Formular abgeschickt haben, erscheint kurz danach das Ergebnis:


- Wenn alles grün ist, ist die Konfiguration korrekt. Sie können die Änderung der DNS Server in Ihrem OVH Kundencenter validieren.

- Wenn es rote Elemente gibt: In den Details des Ergebnisses sehen Sie, welche Korrekturen Sie vornehmen müssen.

Bitte beachten Sie: Solange es rote Elemente gibt, sollten Sie die Aktualisierung der DNS Server nur vornehmen, wenn Sie sich Ihrer Sache absolut sicher sind. Andernfalls könnte die Operation blockiert werden und mit der Domain verbundene Services könnten ausfallen.

![](images/img_3211.jpg){.thumbnail}


## Nützliche Informationen
Sollten Sie noch Fragen zu diesem Tool und/oder seinen Funktionen haben, empfehlen wir Ihnen die Zonemaster "FAQ".

![](images/img_3212.jpg){.thumbnail}

