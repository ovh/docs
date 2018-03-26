---
title: Konfiguration eines sekundären DNS Servers auf Kimsufi und SoYouStart
excerpt: Konfiguration eines sekundären DNS Servers auf Kimsufi und SoYouStart
slug: konfiguration_eines_sekundaren_dns_servers_auf_kimsufi_und_soyoustart
legacy_guide_number: g2183
---


## Eine Domain zum sekundären DNS Server hinzufügen
Wenn Sie eine Domain hinzufügen möchten: 

- Loggen Sie sich in Ihr Kimsufi oder SoYouStart Kundencenter ein.
- Klicken Sie auf den Tab DNS.



![](images/img_4078.jpg){.thumbnail}
Klicken Sie anschließend auf sekundären DNS hinzufügen.

![](images/img_4081.jpg){.thumbnail}
Sekundärer DNS für Kimsufi Server: ns.kimsufi.com.
Geben Sie nun Ihren Domainnamen an und wählen Sie die zugehörige IP aus.

![](images/img_4077.jpg){.thumbnail}
Nun erscheint eine Meldung, dass Sie die Subdomain ownercheck mit einem bestimmten Wert in der DNS Zone hinzufügen müssen.

Wenn die Subdomain hinzugefügt, der Dienst BIND neu gestartet und die Zone propagiert wurde (dies nimmt 24 bis 48 Stunden in Anspruch), können Sie Ihre Domain zum sekundären DNS hinzufügen.


## Eine Domain vom sekundären DNS Server löschen
Um eine Domain vom sekundären DNS zu löschen, gehen Sie folgendermaßen vor:

- Loggen Sie sich in Ihr Kimsufi oder SoYouStart Kundencenter ein.
- Klicken Sie auf den Tab DNS.
- Klicken Sie auf den Tab Sekundäre DNS verwalten.
- Löschen Sie die Domain durch Klicken auf den Button Löschen rechts neben dem Eintrag und anschließende Bestätigung.



![](images/img_4082.jpg){.thumbnail}

