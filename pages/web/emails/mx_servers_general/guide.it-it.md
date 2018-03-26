---
title: 'Servizio Email: i server MX'
excerpt: 'Servizio Email: i server MX'
slug: servizio_email_i_server_mx
legacy_guide_number: g2003
---


## Che cos'è un server MX?
I server MX sono i server di posta definiti nella zona DNS e responsabili della gestione dei messaggi indirizzati al tuo dominio.

Esempio:

- Vuoi ricevere le tue email sull'account OVH tuoindirizzo@tuodominio.com.

I record MX della zona DNS utilizzata dal tuo dominio devono essere quelli di OVH.

Puoi configurare i tuoi server MX in diversi modi. Questa guida ti mostra una delle configurazione possibili.

Dominio, server DNS e zona DNS possono essere schematizzati in questo modo:

![](images/img_3414.jpg){.thumbnail}


## Prerequisiti

- Avere accesso al tuo [Spazio Cliente OVH](https://www.ovh.com/manager/web/login/) (se non riesci più ad accedervi, consulta [questa guida](https://www.ovh.it/g1909.hosting_web_gestisci_le_tue_password#le_password_associate_ai_tuoi_servizi_di_web_hosting_ovh_accesso_al_tuo_spazio_cliente_ovh))

- Poter utilizzare i servizi email OVH




## Dove puoi configurare i server MX del tuo dominio?
Per prima cosa, devi sapere dove è registrato il tuo dominio e quali server DNS utilizza.


- È possibile scegliere i server DNS del tuo dominio esclusivamente presso il Registrar del tuo dominio.
- Sui server DNS utilizzati dal tuo dominio è presente la zona DNS utilizzata.
- Nella zona DNS è possibile modificare i record MX che determinano i server di posta del dominio.


Ecco un esempio di zona DNS in OVH. Nella colonna centrale sono presenti le tipologie di record (NS/MX/A/CNAME/TXT) e, a destra, la loro destinazione.

||NS|ns109.ovh.net.|
||NS|dns109.ovh.net.|
||MX 1|mx1.mail.ovh.net.|
||MX 5|mx2.mail.ovh.net.|
||MX 10|mx3.mail.ovh.net.|
||A|213.186.33.18|
||TXT|"v=spf1 include:mx.ovh.com ~all"|
|_autodiscover._tcp|SRV|0 0 443 mailconfig.ovh.net.|
|_imaps._tcp|SRV|0 0 993 ssl0.ovh.net.|
|_submission._tcp|SRV|0 0 465 ssl0.ovh.net.|
|autoconfig|CNAME|mailconfig.ovh.net.|
|ftp|CNAME|ftp.cluster017.ovh.net.|
|imap|CNAME|ssl0.ovh.net.|
|mail|CNAME|ssl0.ovh.net.|
|pop3|CNAME|ssl0.ovh.net.|
|smtp|CNAME|ssl0.ovh.net.|
|www|A|213.186.33.18|


In questa zona DNS, i server di posta (MX) del dominio sono:

```
MX 1 mx1.mail.ovh.net.
MX 5 mx2.mail.ovh.net.
MX 10 mx3.mail.ovh.net.
```


Il numero che si trova a destra di MX indica la sua priorità.

## Attenzione:
Al momento per i servizi email attivati prima del 23/05/2016 i vecchi server MX sono ancora funzionanti, ma ti consigliamo di aggiornarli e utilizzare i server indicati nella tabella qui sopra.
Per utilizzare un altro server di posta è quindi necessario modificare questi record.
Attenzione: la propagazione delle modifiche della tua zona DNS può richiedere fino a 24 ore.


## Utilizzi una zona DNS OVH
In questo caso, consulta la guida []({legacy}2012).


## Utilizzi una zona DNS non OVH
In questo caso, consulta la guida []({legacy}2011).

