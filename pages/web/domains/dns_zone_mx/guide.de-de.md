---
title: 'Webhosting E-Mail: MX-Konfiguration mit DNS Zone von OVH'
excerpt: 'Webhosting E-Mail: MX-Konfiguration mit DNS Zone von OVH'
slug: webhosting_e-mail_mx-konfiguration_mit_dns_zone_von_ovh
legacy_guide_number: g2012
---


## Sie nutzen ein Mailing-Angebot von OVH
Wenn Sie ein Webhosting E-Mail-Angebot von OVH nutzen, verwenden sie bitte folgende MX-Server in Ihrer DNS Zone:

- Mail-Server [Anti-Virus + Anti-Spam]:


|Typ|Priorität|Ziel|
|---|---|---|
|MX|1|mx1.mail.ovh.net|
|MX|5|mx2.mail.ovh.net|
|MX|10|mx3.mail.ovh.net|



## Information:
Derzeit sind die alten MX Server für alle vor dem 23.05.2016 erstellten Mailing-Dienste noch funktional. Wir empfehlen Ihnen dennoch die Verwendung der neuen oben genannten MX Server.


## Sie nutzen kein Mailing-Angebot von OVH
Wenn Sie kein Mailing-Angebot von OVH nutzen, können Sie auch keine E-Mails empfangen, weil Sie nicht über einen Mail-Account verfügen.
Sie können aber Aliasse (redirections/Weiterleitungen) verwenden.

Um ein Alias der Form "alias@meinedomain.com" zu erstellen, das eingehende Nachrichten auf eine tatsächliche E-Mail-Adresse weiterleitet (z. B. "meineadresse@meine-andere-domain.com"), verwenden Sie bitte folgende Konfiguration:
Mail-Server [Alias]:

|Typ|Priorität|Ziel|
|---|---|---|
|MX|1|redirect.ovh.net|


Bitte beachten Sie, dass Sie Aliasse (redirections/Weiterleitungen) auch dann nutzen können, wenn Sie ein Mailing-Angebot von OVH nutzen. Alles hierzu erfahren Sie in folgender Anleitung: [Webhosting E-Mail: Anleitung zum Einrichten einer Mail-Weiterleitung](https://docs.ovh.com/de/emails/webhosting_e-mail_anleitung_zum_einrichten_einer_mail-weiterleitung/).


## Sie nutzen ein Mailing-Angebot eines Drittanbieters

- Sie verfügen über einen eigenen Hostnamen für Ihre(n) MX-Server:


Wenn Ihre Domain eine DNS Zone von OVH verwendet, Sie aber gleichzeitig ein externes Mailing-Angebot nutzen (also nicht bei OVH und auch nicht auf einem Dedicated Server), können Sie Ihre OVH DNS Zone auf dieselbe Art und Weise konfigurieren. Sie müssen lediglich die Server entsprechend ersetzen:
Mail-Server:

|Typ|Priorität|Ziel|
|---|---|---|
|MX|1|Ihr Mail-Server|
|MX|5|Ihr anderer Mail-Server|



- Sie verfügen nicht über einen Hostnamen, aber über eine oder mehrere IP(s) für Ihre(n) MX-Server:


Wenn Ihre Domain eine DNS Zone von OVH verwendet, Sie aber gleichzeitig ein externes Mailing-Angebot nutzen (beispielsweise auf einem lokalen Server), können Sie Ihre OVH DNS Zone so konfigurieren, dass die IP mit einem Hostnamen verbunden wird. Dieser Schritt ist notwendig, weil ein MX-Eintrag nicht direkt auf eine IP zeigen kann.
Mail-Server:

|Subdomain|Typ|Priorität|Ziel|
|---|---|---|---|
|mail2|A|vakuum|IP des Mail-Servers|
|vakuum|MX|1|mail2.ihre_domain|




## Fristen
Bitte beachten Sie: Bei Bearbeitung Ihrer DNS Zone kann es bis zur 24 Stunden dauern, bis die Änderungen wirksam werden.

