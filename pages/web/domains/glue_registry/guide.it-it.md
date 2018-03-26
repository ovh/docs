---
title: Glue Registry
excerpt: A cosa serve un Glue Registry?
slug: glue_registry
legacy_guide_number: g1568
---


## 
Con Glue Registry, personalizzi i tuoi server DNS con il tuo dominio. Nel database del Whois viene visualizzato il tuo nome, al posto di quello del tuo hosting provider. Crea i tuoi server DNS in IPv4.

La personalizzazione dei server DNS è possibile per tutti i domini GTLD: .com, .net, .org, ecc...
Per utilizzare questo servizio, accedi al tuo [Spazio Cliente OVH](https://www.ovh.com/manager/web/login.html) e seleziona il tuo dominio nella sezione corrispondente.

![](images/img_2903.jpg){.thumbnail}
Seleziona la tab Glue e clicca su Aggiungi

![](images/img_2900.jpg){.thumbnail}
Si apre una finestra pop-up per la configurazione del Glue Registry.

![](images/img_2901.jpg){.thumbnail}
Inserisci un sottodominio e l'indirizzo IP di un server DNS valido.

![](images/img_2902.jpg){.thumbnail}


## 
Se utilizzi server DNS esterni a OVH, è necessario creare il sottodominio nella zona DNS corrispondente. Non sarà possibile utilizzare la zona DNS OVH.
Una volta creato il Glue, dichiara un record "A" nella tua zona DNS. Per farlo, seleziona la tab Zona DNS

![](images/img_2953.jpg){.thumbnail}
Poi clicca su Aggiungere un accesso

![](images/img_2952.jpg){.thumbnail}
Clicca sul record A

![](images/img_2956.jpg){.thumbnail}
Nel nostro esempio, ecco il record A da creare e confermare.

![](images/img_2954.jpg){.thumbnail}
Il tempo di propagazione necessario e di 24/48 ore.

