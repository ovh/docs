---
title: 'Servizio Email: configura il tuo server MX con zona DNS OVH'
excerpt: 'Servizio Email: configura il tuo server MX con zona DNS OVH'
slug: servizio_email_configura_il_tuo_server_mx_con_zona_dns_ovh
legacy_guide_number: g2012
---


## Utilizzi un servizio email OVH
Se hai attivato un servizio email OVH, imposta questi server MX nella tua zona DNS:
Server di posta [Antivirus + Antispam]:

|Tipo di record|Priorità|Destinazione|
|MX|1|mx1.mail.ovh.net.|
|MX|5|mx2.mail.ovh.net.|
|MX|10|mx3.mail.ovh.net.|



## Attenzione:
Al momento per i servizi email attivati prima del 23/05/2016, i vecchi server MX sono ancora funzionanti, ma ti consigliamo di aggiornarli e utilizzare i server indicati nella tabella qui sopra.


## Non utilizzi un servizio email OVH
Se non hai attivato un'offerta email OVH, non puoi ricevere messaggi perché non possiedi una casella di posta.
In questo caso, però, è possibile utilizzare un Alias.

Per creare un alias alias@tuodominio.com che reindirizza verso l'account esistente tuoindirizzo@tuoAltrodominio.com, utilizza questa configurazione:
Server di posta [Alias]:
|Tipo di record|Priorità|Destinazione|
|MX|1|redirect.ovh.net|


Ti ricordiamo che puoi utilizzare gli Alias (reindirizzamenti) anche se hai attivato un'offerta email. Per farlo, consulta questa guida: []({legacy}2001).


## Utilizzi un servizio email esterno a OVH

- Hai un hostname per i tuoi server MX:


Se il tuo dominio utilizza una zona DNS OVH, ma la tua soluzione di posta non è in OVH o su un server dedicato, puoi configurare la tua zona DNS OVH utilizzando i server di posta esterni invece di quelli OVH:
Server di posta:
|Tipo di record|Priorità|Destinazione|
|MX|1|il tuo server di posta|
|MX|5|l'altro tuo server di posta|



- Non hai un hostname ma uno o più IP per i tuoi server MX:


Se il tuo dominio utilizza una zona DNS OVH ma il tuo servizio di posta è esterno (ad esempio su un server locale), puoi configurare la tua zona DNS OVH per associare questo IP a un hostname, perché un record MX non può puntare verso un IP:
Server di posta:
|Sottodominio|Tipo di record|Priorità|Destinazione|
|mail2|A||IP del server di posta|
||MX|1|mail2.tuo_dominio|




## Tempo di propagazione
Attenzione: la propagazione delle modifiche della tua zona DNS può richiedere fino a 24 ore.

